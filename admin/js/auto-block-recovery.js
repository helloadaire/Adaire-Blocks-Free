/**
 * Auto Block Recovery
 * Automatically attempts to recover blocks when the editor loads
 */

( function() {
	'use strict';

	try {
		// Check if we're in an iframe (migration mode)
		const isInIframe = window.parent && window.parent !== window;
		const urlParams = new URLSearchParams( window.location.search );
		const isMigrationMode = urlParams.get( 'adaire_auto_migrate' ) === '1';
		
		// Helper function to log to both console and parent window
		function logToParent( message, level = 'info' ) {
			// Always log to console
			const logFunction = level === 'error' ? console.error : 
							   level === 'warn' ? console.warn : console.log;
			logFunction( message );
			
			// Send to parent if in migration mode
			if ( isInIframe && isMigrationMode && window.parent ) {
				try {
					window.parent.postMessage( {
						type: 'adaire_migration_log',
						message: message,
						level: level
					}, '*' );
				} catch (e) {
					// Silently fail if postMessage doesn't work
				}
			}
		}
		
		// Log that the script is loaded
		logToParent( '[Adaire Blocks] Auto-recovery script loaded!' );
		logToParent( '[Adaire Blocks] Current URL: ' + window.location.href );
		logToParent( '[Adaire Blocks] wp object available: ' + (typeof wp !== 'undefined') );
		logToParent( '[Adaire Blocks] wp.data available: ' + (typeof wp !== 'undefined' && typeof wp.data !== 'undefined') );
		logToParent( '[Adaire Blocks] wp.blocks available: ' + (typeof wp !== 'undefined' && typeof wp.blocks !== 'undefined') );

	// Check if wp.data is available
	if ( typeof wp === 'undefined' || typeof wp.data === 'undefined' ) {
		logToParent( '[Adaire Blocks] ❌ FAILED: wp.data is not available', 'error' );
		logToParent( '[Adaire Blocks] This usually means the script loaded before WordPress dependencies', 'error' );
		return;
	}

	logToParent( '[Adaire Blocks] ✅ wp.data is available' );

	if ( isMigrationMode ) {
		logToParent( '[Adaire Blocks Migration] 🔄 Migration mode activated' );
		
		// Disable "leave site" warning during migration
		logToParent( '[Adaire Blocks Migration] 🔇 Disabling leave site warnings...' );
		
		// Remove any existing beforeunload handlers
		window.onbeforeunload = null;
		
		// Prevent WordPress from adding new ones
		const originalAddEventListener = window.addEventListener;
		window.addEventListener = function( type, listener, options ) {
			if ( type === 'beforeunload' ) {
				logToParent( '[Adaire Blocks Migration] Blocked beforeunload listener' );
				return; // Don't add beforeunload listeners
			}
			return originalAddEventListener.call( this, type, listener, options );
		};
		
		// Also override the pagehide event which some browsers use
		window.addEventListener( 'pagehide', function( e ) {
			e.preventDefault();
		}, true );
		
	} else {
		logToParent( '[Adaire Blocks] 📝 Normal editor mode (not migration)' );
	}

	// Timeout to prevent infinite waiting
	logToParent( '[Adaire Blocks] ⏱️ Setting 10-second timeout for editor ready check' );
	let editorReadyTimeout = setTimeout( function() {
		logToParent( '[Adaire Blocks] ⚠️ Editor ready timeout reached (10 seconds) - forcing recovery attempt', 'warn' );
		if ( typeof unsubscribe === 'function' ) {
			unsubscribe();
		}
		attemptAutoRecovery();
	}, 10000 ); // 10 second timeout

	// Wait for the editor to be ready
	logToParent( '[Adaire Blocks] 👂 Subscribing to editor store changes...' );
	let subscriptionCount = 0;
	
	const unsubscribe = wp.data.subscribe( function() {
		subscriptionCount++;
		
		// Get the block editor store
		const editor = wp.data.select( 'core/block-editor' );
		const dispatch = wp.data.dispatch( 'core/block-editor' );
		
		if ( ! editor ) {
			return;
		}

		// Check if editor is fully initialized
		const blocks = editor.getBlocks();
		if ( ! blocks || blocks.length === 0 ) {
			return;
		}

		// Editor is ready!
		logToParent( '[Adaire Blocks] ✅ Editor is ready! Found ' + blocks.length + ' blocks' );

		// Clear the timeout
		clearTimeout( editorReadyTimeout );

		// Unsubscribe once we've checked
		unsubscribe();

		// Small delay to ensure editor is fully loaded
		setTimeout( function() {
			attemptAutoRecovery();
		}, 500 );
	} );

	/**
	 * Recursively recover blocks in a tree structure
	 */
	function recoverBlockTree( block ) {
		// First, recursively process inner blocks
		let recoveredInnerBlocks = [];
		if ( block.innerBlocks && block.innerBlocks.length > 0 ) {
			recoveredInnerBlocks = block.innerBlocks.map( function( innerBlock ) {
				return recoverBlockTree( innerBlock );
			} );
		}
		
		// Check if this block needs recovery
		const needsRecovery = ! block.isValid || 
			( block.validationIssues && block.validationIssues.length > 0 );
		
		if ( needsRecovery && block.name && block.name.startsWith( 'create-block/' ) ) {
			// Create a new recovered block
			try {
				return wp.blocks.createBlock(
					block.name,
					block.attributes,
					recoveredInnerBlocks
				);
			} catch ( error ) {
				// If recovery fails, return the original block with recovered inner blocks
				return {
					...block,
					innerBlocks: recoveredInnerBlocks
				};
			}
		}
		
		// If block doesn't need recovery but has inner blocks, return with recovered inner blocks
		if ( recoveredInnerBlocks.length > 0 ) {
			return {
				...block,
				innerBlocks: recoveredInnerBlocks
			};
		}
		
		// Return original block if no recovery needed
		return block;
	}

	/**
	 * Attempt automatic block recovery
	 */
	function attemptAutoRecovery() {
		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] 🔧 === STARTING AUTO-RECOVERY ===' );
			logToParent( '[Adaire Blocks] Migration mode: ' + isMigrationMode );
		}
		
		// Verify all required WordPress APIs are available
		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] 🔍 Checking WordPress APIs...' );
		}
		
		if ( typeof wp === 'undefined' ) {
			logToParent( '[Adaire Blocks] ❌ CRITICAL: wp is not defined', 'error' );
			if ( isMigrationMode ) {
				notifyMigrationComplete( false, 0, 'wp is not defined' );
			}
			return;
		}
		logToParent( '[Adaire Blocks] ✅ wp is defined' );

		if ( typeof wp.data === 'undefined' ) {
			logToParent( '[Adaire Blocks] ❌ CRITICAL: wp.data is not defined', 'error' );
			if ( isMigrationMode ) {
				notifyMigrationComplete( false, 0, 'wp.data is not defined' );
			}
			return;
		}
		logToParent( '[Adaire Blocks] ✅ wp.data is defined' );

		if ( typeof wp.blocks === 'undefined' ) {
			logToParent( '[Adaire Blocks] ❌ CRITICAL: wp.blocks is not defined', 'error' );
			if ( isMigrationMode ) {
				notifyMigrationComplete( false, 0, 'wp.blocks is not defined' );
			}
			return;
		}
		logToParent( '[Adaire Blocks] ✅ wp.blocks is defined' );

		logToParent( '[Adaire Blocks] 🔍 Getting editor stores...' );
		const editor = wp.data.select( 'core/block-editor' );
		const dispatch = wp.data.dispatch( 'core/block-editor' );
		const coreEditor = wp.data.dispatch( 'core/editor' );
		
		if ( ! editor || ! dispatch ) {
			logToParent( '[Adaire Blocks] ❌ CRITICAL: Editor or dispatch not available', 'error' );
			if ( isMigrationMode ) {
				notifyMigrationComplete( false, 0, 'Editor not ready' );
			}
			return;
		}
		logToParent( '[Adaire Blocks] ✅ Editor stores available' );

		// Helper function to get all blocks including nested ones
		function getAllBlocks( blocks, parentPath = '', parentId = null ) {
			let allBlocks = [];
			
			blocks.forEach( function( block, index ) {
				const blockPath = parentPath ? parentPath + ' > ' + block.name : block.name;
				allBlocks.push( {
					block: block,
					path: blockPath,
					depth: parentPath.split( ' > ' ).length - 1,
					parentId: parentId
				} );
				
				// Recursively get inner blocks
				if ( block.innerBlocks && block.innerBlocks.length > 0 ) {
					const innerBlocks = getAllBlocks( block.innerBlocks, blockPath, block.clientId );
					allBlocks = allBlocks.concat( innerBlocks );
				}
			} );
			
			return allBlocks;
		}
		
		const topLevelBlocks = editor.getBlocks();
		const allBlocksWithPaths = getAllBlocks( topLevelBlocks );
		const allBlocks = allBlocksWithPaths.map( function( item ) { return item.block; } );
		
		logToParent( '[Adaire Blocks] 📊 Total blocks in editor: ' + topLevelBlocks.length + ' (top-level)' );
		logToParent( '[Adaire Blocks] 📊 Total blocks including nested: ' + allBlocks.length );
		
		// Get detailed validation info from block editor
		const blockValidationErrors = editor.getBlockValidationErrors ? editor.getBlockValidationErrors() : {};
		
		logToParent( '[Adaire Blocks] 🔍 Block validation errors from store: ' + Object.keys( blockValidationErrors ).length );
		
		// Log nested structure with more details
		logToParent( '[Adaire Blocks] 🌳 Block Tree Structure:' );
		allBlocksWithPaths.forEach( function( item, i ) {
			const indent = '  '.repeat( item.depth );
			const status = item.block.isValid ? '✅' : '❌';
			const isAdaire = item.block.name.startsWith( 'create-block/' );
			const marker = isAdaire ? ' [ADAIRE]' : '';
			logToParent( '[Adaire Blocks] ' + indent + status + ' ' + item.path + marker );
		} );
		
		// Check for validation issues
		const blocksWithValidationIssues = allBlocks.filter( function( b ) {
			return (
				! b.isValid || 
				( b.validationIssues && b.validationIssues.length > 0 ) ||
				blockValidationErrors[ b.clientId ]
			);
		} );
		
		if ( blocksWithValidationIssues.length > 0 && ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] ⚠️ Blocks with validation issues: ' + blocksWithValidationIssues.length, 'warn' );
		}
		
		let recoveredCount = 0;
		let invalidBlocksCount = 0;
		let skippedCount = 0;

		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] 🔄 Starting tree-based recovery for nested blocks...' );
		}
		
		// Count invalid blocks for logging
		allBlocksWithPaths.forEach( function( item ) {
			const block = item.block;
			const hasValidationError = blockValidationErrors[ block.clientId ];
			const hasValidationIssues = block.validationIssues && block.validationIssues.length > 0;
			const isInvalid = ! block.isValid;
			const needsRecovery = isInvalid || hasValidationError || hasValidationIssues;
			
			if ( needsRecovery ) {
				invalidBlocksCount++;
				const isAdaireBlock = block.name && block.name.startsWith( 'create-block/' );
				if ( ! isAdaireBlock ) {
					skippedCount++;
				}
			}
		} );
		
		// Process top-level blocks with tree recovery
		const recoveredBlocks = topLevelBlocks.map( function( block ) {
			const recovered = recoverBlockTree( block );
			
			// Check if anything was recovered in this tree
			function countRecoveredInTree( originalBlock, recoveredBlock ) {
				let count = 0;
				
				// Check if this block was recovered (clientId will be different)
				if ( originalBlock.clientId !== recoveredBlock.clientId && 
					 originalBlock.name && originalBlock.name.startsWith( 'create-block/' ) &&
					 ! originalBlock.isValid ) {
					count++;
					if ( ! isMigrationMode ) {
						logToParent( '[Adaire Blocks] ✅ Recovered: ' + originalBlock.name );
					}
				}
				
				// Recursively count in inner blocks
				if ( originalBlock.innerBlocks && recoveredBlock.innerBlocks ) {
					for ( let i = 0; i < originalBlock.innerBlocks.length; i++ ) {
						if ( recoveredBlock.innerBlocks[i] ) {
							count += countRecoveredInTree( 
								originalBlock.innerBlocks[i], 
								recoveredBlock.innerBlocks[i] 
							);
						}
					}
				}
				
				return count;
			}
			
			recoveredCount += countRecoveredInTree( block, recovered );
			return recovered;
		} );
		
		// Only update blocks if we actually recovered something
		if ( recoveredCount > 0 ) {
			if ( ! isMigrationMode ) {
				logToParent( '[Adaire Blocks] 🔄 Updating editor with recovered blocks...' );
			}
			
			try {
				dispatch.resetBlocks( recoveredBlocks );
				
				if ( ! isMigrationMode ) {
					logToParent( '[Adaire Blocks] ✅ Editor updated successfully' );
				}
			} catch ( error ) {
				logToParent( '[Adaire Blocks] ❌ Failed to update editor: ' + error.message, 'error' );
			}
		}

		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] 📊 === RECOVERY SUMMARY ===' );
			logToParent( '[Adaire Blocks] Total blocks checked (including nested): ' + allBlocks.length );
			logToParent( '[Adaire Blocks] Invalid: ' + invalidBlocksCount + ' | Skipped: ' + skippedCount + ' | Recovered: ' + recoveredCount );
		}

		if ( recoveredCount > 0 ) {
			if ( ! isMigrationMode ) {
				logToParent( '[Adaire Blocks] 💾 Recovered ' + recoveredCount + ' block(s)' );
			}
			
			// Save the post after recovery
			if ( isMigrationMode && coreEditor ) {
				// Wait a moment for blocks to settle, then save (reduced delay)
				setTimeout( function() {
					// Clear dirty state before saving to prevent warnings
					if ( wp.data.dispatch( 'core/editor' ).resetEditorBlocks ) {
						const currentBlocks = wp.data.select( 'core/block-editor' ).getBlocks();
						wp.data.dispatch( 'core/editor' ).resetEditorBlocks( currentBlocks );
					}
					
					coreEditor.savePost();
					
					// Wait for save to complete
					const saveUnsubscribe = wp.data.subscribe( function() {
						const isSaving = wp.data.select( 'core/editor' ).isSavingPost();
						const didSave = wp.data.select( 'core/editor' ).didPostSaveRequestSucceed();
						
						if ( ! isSaving && didSave ) {
							saveUnsubscribe();
							
							// Small delay before notifying to ensure all is settled
							setTimeout( function() {
								notifyMigrationComplete( true, recoveredCount );
							}, 200 );
						}
					} );
					
					// Timeout fallback (reduced to 3 seconds)
					setTimeout( function() {
						saveUnsubscribe();
						notifyMigrationComplete( true, recoveredCount );
					}, 3000 );
				}, 300 );
			} else {
				// Normal mode - show a notice and clear the dirty state
				wp.data.dispatch( 'core/notices' ).createNotice(
					'success',
					`Adaire Blocks: Automatically recovered ${recoveredCount} block(s).`,
					{
						type: 'snackbar',
						isDismissible: true,
					}
				);

				// Reset the dirty state so the "leave site" prompt doesn't appear
				setTimeout( function() {
					// Reset edit count to clear unsaved changes prompt
					if ( wp.data.select( 'core/editor' ) && wp.data.dispatch( 'core/editor' ).resetEditorBlocks ) {
						const currentBlocks = wp.data.select( 'core/block-editor' ).getBlocks();
						wp.data.dispatch( 'core/editor' ).resetEditorBlocks( currentBlocks );
						logToParent( '[Adaire Blocks] ✅ Reset editor state' );
					}
				}, 100 );
			}
		} else {
			// No blocks recovered
			if ( ! isMigrationMode ) {
				if ( invalidBlocksCount > 0 ) {
					logToParent( '[Adaire Blocks] ℹ️ Found ' + invalidBlocksCount + ' invalid blocks but none could be recovered' );
				} else {
					logToParent( '[Adaire Blocks] ✅ All blocks are valid!' );
				}
			}
			
			if ( isMigrationMode ) {
				notifyMigrationComplete( true, 0 );
			}
		}
		
		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] 🏁 === AUTO-RECOVERY COMPLETE ===' );
		}
	}

	/**
	 * Notify parent window that migration is complete
	 */
	function notifyMigrationComplete( success, blocksRecovered, error ) {
		if ( window.parent && window.parent !== window ) {
			window.parent.postMessage( {
				type: 'adaire_migration_complete',
				success: success,
				blocksRecovered: blocksRecovered,
				error: error || null
			}, '*' );
		}
	}

	} catch (error) {
		const errorMsg = '[Adaire Blocks] 💥 CRITICAL ERROR: ' + error.message;
		console.error(errorMsg, error);
		console.error('[Adaire Blocks] Error stack:', error.stack);
		
		// Send to parent if in iframe
		if (window.parent && window.parent !== window) {
			try {
				window.parent.postMessage({
					type: 'adaire_migration_log',
					message: errorMsg,
					level: 'error'
				}, '*');
			} catch (e) {
				// Silently fail
			}
		}
	}

} )();

