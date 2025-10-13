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
		
		// Log that the script is loaded (only in non-migration mode or if there's an issue)
		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] Auto-recovery script loaded!' );
			logToParent( '[Adaire Blocks] Current URL: ' + window.location.href );
			logToParent( '[Adaire Blocks] wp object available: ' + (typeof wp !== 'undefined') );
			logToParent( '[Adaire Blocks] wp.data available: ' + (typeof wp !== 'undefined' && typeof wp.data !== 'undefined') );
			logToParent( '[Adaire Blocks] wp.blocks available: ' + (typeof wp !== 'undefined' && typeof wp.blocks !== 'undefined') );
		}

	// Check if wp.data is available
	if ( typeof wp === 'undefined' || typeof wp.data === 'undefined' ) {
		logToParent( '[Adaire Blocks] ❌ FAILED: wp.data is not available', 'error' );
		logToParent( '[Adaire Blocks] This usually means the script loaded before WordPress dependencies', 'error' );
		return;
	}

	if ( ! isMigrationMode ) {
		logToParent( '[Adaire Blocks] ✅ wp.data is available' );
	}

	if ( isMigrationMode ) {
		// Migration mode activated (silent, no log)
		
		// Disable "leave site" warning during migration
		
		// Remove any existing beforeunload handlers
		window.onbeforeunload = null;
		
		// Prevent WordPress from adding new ones
		const originalAddEventListener = window.addEventListener;
		window.addEventListener = function( type, listener, options ) {
			if ( type === 'beforeunload' ) {
				// Silently block beforeunload listeners in migration mode
				return;
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

	// Timeout to prevent infinite waiting (reduced for faster migration)
	if ( ! isMigrationMode ) {
		logToParent( '[Adaire Blocks] ⏱️ Setting 5-second timeout for editor ready check' );
	}
	let editorReadyTimeout = setTimeout( function() {
		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] ⚠️ Editor ready timeout reached (5 seconds) - forcing recovery attempt', 'warn' );
		}
		if ( typeof unsubscribe === 'function' ) {
			unsubscribe();
		}
		attemptAutoRecovery();
	}, 5000 ); // 5 second timeout (reduced from 10)

	// Wait for the editor to be ready
	if ( ! isMigrationMode ) {
		logToParent( '[Adaire Blocks] 👂 Subscribing to editor store changes...' );
	}
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
		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] ✅ Editor is ready! Found ' + blocks.length + ' blocks' );
		}

		// Clear the timeout
		clearTimeout( editorReadyTimeout );

		// Unsubscribe once we've checked
		unsubscribe();

		// Small delay to ensure editor is fully loaded (reduced for faster migration)
		setTimeout( function() {
			attemptAutoRecovery();
		}, 200 );
	} );

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
		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] ✅ wp is defined' );
		}

		if ( typeof wp.data === 'undefined' ) {
			logToParent( '[Adaire Blocks] ❌ CRITICAL: wp.data is not defined', 'error' );
			if ( isMigrationMode ) {
				notifyMigrationComplete( false, 0, 'wp.data is not defined' );
			}
			return;
		}
		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] ✅ wp.data is defined' );
		}

		if ( typeof wp.blocks === 'undefined' ) {
			logToParent( '[Adaire Blocks] ❌ CRITICAL: wp.blocks is not defined', 'error' );
			if ( isMigrationMode ) {
				notifyMigrationComplete( false, 0, 'wp.blocks is not defined' );
			}
			return;
		}
		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] ✅ wp.blocks is defined' );
		}

		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] 🔍 Getting editor stores...' );
		}
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
		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] ✅ Editor stores available' );
		}

		// Helper function to get all blocks including nested ones
		function getAllBlocks( blocks, parentPath = '' ) {
			let allBlocks = [];
			
			blocks.forEach( function( block, index ) {
				const blockPath = parentPath ? parentPath + ' > ' + block.name : block.name;
				allBlocks.push( {
					block: block,
					path: blockPath,
					depth: parentPath.split( ' > ' ).length - 1
				} );
				
				// Recursively get inner blocks
				if ( block.innerBlocks && block.innerBlocks.length > 0 ) {
					const innerBlocks = getAllBlocks( block.innerBlocks, blockPath );
					allBlocks = allBlocks.concat( innerBlocks );
				}
			} );
			
			return allBlocks;
		}
		
		const topLevelBlocks = editor.getBlocks();
		const allBlocksWithPaths = getAllBlocks( topLevelBlocks );
		const allBlocks = allBlocksWithPaths.map( function( item ) { return item.block; } );
		
		if ( ! isMigrationMode ) {
			logToParent( '[Adaire Blocks] 📊 Total blocks in editor: ' + topLevelBlocks.length + ' (top-level)' );
			logToParent( '[Adaire Blocks] 📊 Total blocks including nested: ' + allBlocks.length );
		}
		
		// Get detailed validation info from block editor
		const blockValidationErrors = editor.getBlockValidationErrors ? editor.getBlockValidationErrors() : {};
		
		if ( ! isMigrationMode ) {
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
		}
		
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
			logToParent( '[Adaire Blocks] 🔄 Starting block validation loop (including nested blocks)...' );
		}
		
		allBlocks.forEach( function( block, index ) {
			// Check multiple validation indicators
			const hasValidationError = blockValidationErrors[ block.clientId ];
			const hasValidationIssues = block.validationIssues && block.validationIssues.length > 0;
			const isInvalid = ! block.isValid;
			const needsRecovery = isInvalid || hasValidationError || hasValidationIssues;
			
			// Only log in non-migration mode
			if ( ! isMigrationMode && needsRecovery ) {
				logToParent( '[Adaire Blocks] Block #' + (index + 1) + ': ' + block.name + 
					' | isValid: ' + block.isValid + 
					' | hasError: ' + !!hasValidationError +
					' | hasIssues: ' + hasValidationIssues );
			}
			
			// Check if block needs recovery
			if ( needsRecovery ) {
				invalidBlocksCount++;
				if ( ! isMigrationMode ) {
					logToParent( '[Adaire Blocks] ⚠️ INVALID BLOCK FOUND #' + invalidBlocksCount + ': ' + block.name, 'warn' );
				}
				
				// Check if this is an Adaire block
				const isAdaireBlock = block.name && block.name.startsWith( 'create-block/' );
				
				if ( ! isAdaireBlock ) {
					skippedCount++;
					if ( ! isMigrationMode ) {
						logToParent( '[Adaire Blocks] ⏭️ SKIPPED: Not an Adaire block: ' + block.name );
					}
					return;
				}
				
				if ( ! isMigrationMode ) {
					logToParent( '[Adaire Blocks] ✅ Confirmed Adaire block: ' + block.name );
				}

				// Check if the block type is registered
				const blockType = wp.blocks.getBlockType( block.name );
				
				if ( ! blockType ) {
					const availableBlocks = wp.blocks.getBlockTypes()
						.filter( bt => bt.name.startsWith( 'create-block/' ) )
						.map( bt => bt.name )
						.join( ', ' );
					logToParent( '[Adaire Blocks] ❌ FATAL: Block type NOT registered: ' + block.name, 'error' );
					logToParent( '[Adaire Blocks] Available Adaire blocks: ' + availableBlocks, 'error' );
					return;
				}
				
				if ( ! isMigrationMode ) {
					logToParent( '[Adaire Blocks] ✅ Block type is registered: ' + block.name );
				}
				
				if ( ! block.clientId ) {
					logToParent( '[Adaire Blocks] ❌ Invalid block has no clientId: ' + block.name, 'warn' );
					return;
				}
				
				if ( ! isMigrationMode ) {
					logToParent( '[Adaire Blocks] 🔧 Attempting to recover: ' + block.name + ' (ClientId: ' + block.clientId.substring(0, 8) + '...)' );
				}
				
				try {
					// Attempt to recover the block
					if ( ! isMigrationMode ) {
						logToParent( '[Adaire Blocks]   Creating new block with ' + Object.keys(block.attributes).length + ' attributes...' );
					}
					
					const recoveredBlock = wp.blocks.createBlock(
						block.name,
						block.attributes,
						block.innerBlocks
					);
					
					if ( ! isMigrationMode ) {
						logToParent( '[Adaire Blocks]   Replacing block in editor...' );
					}
					
					const replaced = dispatch.replaceBlocks(
						block.clientId,
						recoveredBlock
					);
					
					recoveredCount++;
					if ( ! isMigrationMode ) {
						logToParent( '[Adaire Blocks] ✅ SUCCESS: Auto-recovered block #' + recoveredCount + ': ' + block.name );
						
						// Verify the block was actually replaced
						setTimeout( function() {
							const updatedBlock = editor.getBlock( recoveredBlock.clientId );
							if ( updatedBlock ) {
								logToParent( '[Adaire Blocks]   Verification: Block replaced successfully, new isValid: ' + updatedBlock.isValid );
							}
						}, 100 );
					}
					
				} catch ( error ) {
					logToParent( '[Adaire Blocks] ❌ FAILED to auto-recover: ' + block.name + ' - ' + error.message, 'error' );
					if ( ! isMigrationMode ) {
						logToParent( '[Adaire Blocks]   Error type: ' + error.constructor.name, 'error' );
					}
				}
			}
		} );

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

