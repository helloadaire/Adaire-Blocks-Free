<?php
// This file is generated. Do not modify it manually.
return array(
	'accordion-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/accordion-block',
		'version' => '0.1.0',
		'title' => 'Accordion',
		'category' => 'widgets',
		'icon' => 'list-view',
		'description' => 'Configurable accordion with animations, colors, and typography.',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			),
			'customClassName' => true
		),
		'textdomain' => 'accordion-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			),
			'items' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Accordion Item 1',
						'content' => 'Lorem ipsum dolor sit amet.',
						'open' => true
					)
				)
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#1a1a1a'
			),
			'contentColor' => array(
				'type' => 'string',
				'default' => '#4a5568'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'chevronColor' => array(
				'type' => 'string',
				'default' => '#4a5568'
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'contentFontSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'gap' => array(
				'type' => 'number',
				'default' => 12
			),
			'radius' => array(
				'type' => 'number',
				'default' => 12
			),
			'padding' => array(
				'type' => 'number',
				'default' => 20
			),
			'animationDuration' => array(
				'type' => 'number',
				'default' => 300
			),
			'animationEasing' => array(
				'type' => 'string',
				'default' => 'ease'
			),
			'allowMultipleOpen' => array(
				'type' => 'boolean',
				'default' => false
			),
			'icon' => array(
				'type' => 'string',
				'default' => 'chevron-down'
			),
			'marginTop' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginRight' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginBottom' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginLeft' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginHorizontal' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 0,
					'tablet' => 0,
					'mobile' => 0
				)
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => '600'
			),
			'contentFontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'shadowIntensity' => array(
				'type' => 'number',
				'default' => 0.08
			),
			'contentBackgroundColor' => array(
				'type' => 'string',
				'default' => '#f8fafc'
			),
			'dividerColor' => array(
				'type' => 'string',
				'default' => '#e2e8f0'
			),
			'dividerThickness' => array(
				'type' => 'number',
				'default' => 1
			),
			'containerMode' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'containerMaxWidth' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'value' => 1200,
						'unit' => 'px'
					),
					'tablet' => array(
						'value' => 100,
						'unit' => '%'
					),
					'mobile' => array(
						'value' => 100,
						'unit' => '%'
					)
				)
			)
		)
	),
	'button-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/button-block',
		'version' => '0.1.0',
		'title' => 'Button Block',
		'category' => 'widgets',
		'icon' => 'button',
		'description' => 'A simple button block with customizable text, link, and target options.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'button-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'buttonText' => array(
				'type' => 'string',
				'default' => 'Click Here'
			),
			'buttonLink' => array(
				'type' => 'string',
				'default' => '#'
			),
			'openInNewTab' => array(
				'type' => 'boolean',
				'default' => false
			),
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'buttonBackgroundColor' => array(
				'type' => 'string',
				'default' => 'transparent'
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'buttonHoverBackgroundColor' => array(
				'type' => 'string',
				'default' => 'transparent'
			),
			'buttonStyle' => array(
				'type' => 'string',
				'default' => 'underline'
			),
			'underlineColor' => array(
				'type' => 'string',
				'default' => '#ff4242'
			),
			'blurAmount' => array(
				'type' => 'number',
				'default' => 0
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'showIcon' => array(
				'type' => 'boolean',
				'default' => true
			),
			'hoverAnimation' => array(
				'type' => 'string',
				'default' => 'slide-underline'
			),
			'buttonPadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => '10px',
					'right' => '20px',
					'bottom' => '10px',
					'left' => '20px'
				)
			),
			'buttonMargin' => array(
				'type' => 'object',
				'default' => array(
					'top' => '20px',
					'right' => '0px',
					'bottom' => '20px',
					'left' => '0px'
				)
			),
			'zIndex' => array(
				'type' => 'number',
				'default' => 1
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => '500'
			)
		)
	),
	'call-to-action-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/call-to-action',
		'version' => '0.1.0',
		'title' => 'Call To Action Block',
		'category' => 'widgets',
		'icon' => 'megaphone',
		'description' => 'A call-to-action block with animated carousel and glowing gradient background.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'alignWide' => true,
			'anchor' => true,
			'customClassName' => true,
			'reusable' => true
		),
		'textdomain' => 'cta-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'layout' => array(
				'type' => 'string',
				'default' => 'split-left'
			),
			'minHeight' => array(
				'type' => 'number',
				'default' => 400
			),
			'backgroundImage' => array(
				'type' => 'object',
				'default' => null
			),
			'backgroundSize' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'backgroundPosition' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'imageWidth' => array(
				'type' => 'number',
				'default' => 50
			),
			'contentJustify' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'contentAlign' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'contentPadding' => array(
				'type' => 'object',
				'default' => array(
					'top' => 20,
					'right' => 20,
					'bottom' => 20,
					'left' => 20
				)
			),
			'contentBackgroundColor' => array(
				'type' => 'string',
				'default' => '#f5f5f5'
			),
			'headerText' => array(
				'type' => 'string',
				'default' => 'Header Text'
			),
			'headerFontSize' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 40,
					'tablet' => 32,
					'mobile' => 24
				)
			),
			'headerColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'headerMarginBottom' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 20,
					'tablet' => 16,
					'mobile' => 12
				)
			),
			'headerTextAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'headerFontWeight' => array(
				'type' => 'string',
				'default' => '300'
			),
			'bodyText' => array(
				'type' => 'string',
				'default' => 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ultrices est quam, sit amet sollicitudin nunc dapibus vitae. Donec congue, augue non pulvinar tempus, quam ipsum dignissim odio, id finibus neque nulla a velit. Suspendisse potenti.'
			),
			'bodyFontSize' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 16,
					'tablet' => 14,
					'mobile' => 12
				)
			),
			'bodyColor' => array(
				'type' => 'string',
				'default' => '#666666'
			),
			'bodyMarginBottom' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 20,
					'tablet' => 16,
					'mobile' => 12
				)
			),
			'bodyTextAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'bodyFontWeight' => array(
				'type' => 'string',
				'default' => '300'
			),
			'stackedImageHeight' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'value' => 500,
						'unit' => 'px'
					),
					'tablet' => array(
						'value' => 400,
						'unit' => 'px'
					),
					'mobile' => array(
						'value' => 300,
						'unit' => 'px'
					)
				)
			),
			'stackedContentWidth' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 50,
					'tablet' => 70,
					'mobile' => 90
				)
			),
			'overlayBackgroundColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'overlayOpacity' => array(
				'type' => 'number',
				'default' => 0.5
			),
			'overlayContentWidth' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 50,
					'tablet' => 70,
					'mobile' => 90
				)
			),
			'overlayTextColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'overlayHeaderColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'overlayBodyColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'marginTop' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 0,
					'tablet' => 0,
					'mobile' => 0
				)
			),
			'marginRight' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 0,
					'tablet' => 0,
					'mobile' => 0
				)
			),
			'marginBottom' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 0,
					'tablet' => 0,
					'mobile' => 0
				)
			),
			'marginLeft' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 0,
					'tablet' => 0,
					'mobile' => 0
				)
			),
			'gradientType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'gradientColor1' => array(
				'type' => 'string',
				'default' => '#ff4444'
			),
			'gradientColor2' => array(
				'type' => 'string',
				'default' => '#ff6666'
			),
			'gradientDirection' => array(
				'type' => 'string',
				'default' => '135deg'
			),
			'gradientOpacity' => array(
				'type' => 'number',
				'default' => 0.1
			),
			'contentGradientType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'contentGradientColor1' => array(
				'type' => 'string',
				'default' => '#ff4444'
			),
			'contentGradientColor2' => array(
				'type' => 'string',
				'default' => '#ff6666'
			),
			'contentGradientDirection' => array(
				'type' => 'string',
				'default' => '135deg'
			),
			'contentGradientOpacity' => array(
				'type' => 'number',
				'default' => 0.1
			),
			'contentGradientOrigin' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'overlayGradientType' => array(
				'type' => 'string',
				'default' => 'none'
			),
			'overlayGradientColor1' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'overlayGradientColor2' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'overlayGradientDirection' => array(
				'type' => 'string',
				'default' => '135deg'
			),
			'overlayGradientOpacity' => array(
				'type' => 'number',
				'default' => 0.5
			),
			'overlayGradientOrigin' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'containerMode' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'containerMaxWidth' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'value' => 1200,
						'unit' => 'px'
					),
					'tablet' => array(
						'value' => 100,
						'unit' => '%'
					),
					'mobile' => array(
						'value' => 100,
						'unit' => '%'
					)
				)
			),
			'contentBorderRadius' => array(
				'type' => 'number',
				'default' => 0
			)
		)
	),
	'cta-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/cta-block',
		'version' => '0.1.0',
		'title' => 'CTA Block',
		'category' => 'widgets',
		'icon' => 'megaphone',
		'description' => 'A call-to-action block with animated carousel and glowing gradient background.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'alignWide' => true,
			'anchor' => true,
			'customClassName' => true,
			'reusable' => true
		),
		'textdomain' => 'cta-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'mainTitle' => array(
				'type' => 'string',
				'default' => 'Adaire Blocks'
			),
			'subtitle' => array(
				'type' => 'string',
				'default' => 'Coming soon! Sign up for our Preview'
			),
			'carouselItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'title' => 'Amazing Animations for Gutenberg!',
						'description' => 'Bring your WordPress site to life with stunning GSAP-powered animations that work seamlessly with the Gutenberg editor.',
						'imageUrl' => '',
						'imageId' => 0
					),
					array(
						'id' => 2,
						'title' => 'Avoid exorbitant monthly fees',
						'description' => 'One-time purchase with lifetime updates. No recurring subscriptions or hidden costs.',
						'imageUrl' => '',
						'imageId' => 0
					),
					array(
						'id' => 3,
						'title' => 'Production‑ready React blocks with GSAP',
						'description' => 'Professional-grade blocks built with React and GSAP for smooth, performant animations.',
						'imageUrl' => '',
						'imageId' => 0
					),
					array(
						'id' => 4,
						'title' => 'Animate heroes, portfolios, and text',
						'description' => 'Create engaging hero sections, interactive portfolios, and dynamic text animations with ease.',
						'imageUrl' => '',
						'imageId' => 0
					),
					array(
						'id' => 5,
						'title' => 'No custom code required.',
						'description' => 'Everything you need is built-in. Just drag, drop, and customize through the intuitive interface.',
						'imageUrl' => '',
						'imageId' => 0
					)
				)
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#1a1a1a'
			),
			'gradientColor1' => array(
				'type' => 'string',
				'default' => '#ff4444'
			),
			'gradientColor2' => array(
				'type' => 'string',
				'default' => '#ff6666'
			),
			'gradientOpacity' => array(
				'type' => 'number',
				'default' => 0.1
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'subtitleColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 48
			),
			'subtitleFontSize' => array(
				'type' => 'number',
				'default' => 24
			),
			'carouselFontSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => '700'
			),
			'descriptionFontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'mainTitleFontWeight' => array(
				'type' => 'string',
				'default' => '700'
			),
			'subtitleFontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'animationSpeed' => array(
				'type' => 'number',
				'default' => 1
			),
			'carouselSpeed' => array(
				'type' => 'number',
				'default' => 3000
			),
			'autoplay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'autoplayDelay' => array(
				'type' => 'number',
				'default' => 4000
			),
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	),
	'logos-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/logos-block',
		'version' => '0.1.0',
		'title' => 'Logos Block',
		'category' => 'media',
		'icon' => 'grid-view',
		'description' => 'A Logos Block with customizable title and partner logos slider',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'alignWide' => true,
			'anchor' => true,
			'customClassName' => true,
			'reusable' => true
		),
		'textdomain' => 'logos-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'partnerLogos' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'companyName' => 'Company 1',
						'imageUrl' => '',
						'imageId' => 0
					)
				)
			),
			'sliderSpeed' => array(
				'type' => 'number',
				'default' => 0.5
			),
			'slidesPerView' => array(
				'type' => 'number',
				'default' => 4
			),
			'gap' => array(
				'type' => 'string',
				'default' => '1rem'
			),
			'pauseOnHover' => array(
				'type' => 'boolean',
				'default' => true
			),
			'logoHeight' => array(
				'type' => 'number',
				'default' => 60
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'titleText' => array(
				'type' => 'string',
				'default' => 'Our Partners'
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 24
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => '600'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#333333'
			),
			'titlePaddingTop' => array(
				'type' => 'number',
				'default' => 20
			),
			'titlePaddingBottom' => array(
				'type' => 'number',
				'default' => 30
			),
			'blockPaddingTop' => array(
				'type' => 'number',
				'default' => 40
			),
			'blockPaddingBottom' => array(
				'type' => 'number',
				'default' => 40
			),
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			),
			'containerMode' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'containerMaxWidth' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'value' => 1200,
						'unit' => 'px'
					),
					'tablet' => array(
						'value' => 100,
						'unit' => '%'
					),
					'mobile' => array(
						'value' => 100,
						'unit' => '%'
					)
				)
			)
		)
	),
	'particles-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/particles-block',
		'version' => '0.1.0',
		'title' => 'Particles Block',
		'category' => 'widgets',
		'icon' => 'admin-generic',
		'description' => 'A section with scattered images that move with scroll using GSAP.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'particles-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'sectionHeight' => array(
				'type' => 'number',
				'default' => 950
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#0a0a0a'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'textContent' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'title' => 'Meet the Team',
						'description' => 'We’re a passionate team of creatives and technologists dedicated to crafting meaningful digital experiences that drive results.'
					),
					array(
						'id' => 1,
						'title' => 'Luthando',
						'description' => 'Web Dev Lead'
					),
					array(
						'id' => 2,
						'title' => 'Reinhold',
						'description' => 'Project Manager'
					),
					array(
						'id' => 3,
						'title' => 'Daryn',
						'description' => 'Project Manager'
					),
					array(
						'id' => 4,
						'title' => 'Hilya',
						'description' => 'Web Developer (WordPress, Bubble)'
					),
					array(
						'id' => 5,
						'title' => 'Patrick',
						'description' => 'Web Developer (WordPress, Bubble)'
					),
					array(
						'id' => 6,
						'title' => 'Douglas',
						'description' => 'Web Developer (WordPress, Custom)'
					),
					array(
						'id' => 7,
						'title' => 'Marvel',
						'description' => 'QA Tester'
					),
					array(
						'id' => 8,
						'title' => 'Gideon',
						'description' => 'Designer'
					)
				)
			),
			'particles' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'imageUrl' => '',
						'x' => 20,
						'y' => 2,
						'size' => 200,
						'mobileSize' => 100,
						'speed' => 2,
						'animationEnabled' => true,
						'type' => 'normal'
					),
					array(
						'id' => 2,
						'imageUrl' => '',
						'x' => 86,
						'y' => 3,
						'size' => 160,
						'mobileSize' => 80,
						'speed' => 0.3,
						'animationEnabled' => true,
						'type' => 'normal'
					),
					array(
						'id' => 3,
						'imageUrl' => '',
						'x' => 76,
						'y' => 8,
						'size' => 185,
						'mobileSize' => 80,
						'speed' => 2,
						'animationEnabled' => true,
						'type' => 'normal'
					),
					array(
						'id' => 4,
						'imageUrl' => '',
						'x' => 14,
						'y' => 6,
						'size' => 175,
						'mobileSize' => 80,
						'speed' => 1.5,
						'animationEnabled' => true,
						'type' => 'normal'
					),
					array(
						'id' => 5,
						'imageUrl' => '',
						'x' => 61,
						'y' => 2,
						'size' => 145,
						'mobileSize' => 80,
						'speed' => 2,
						'animationEnabled' => true,
						'type' => 'normal'
					),
					array(
						'id' => 6,
						'imageUrl' => '',
						'x' => 49,
						'y' => 6,
						'size' => 150,
						'mobileSize' => 100,
						'speed' => 1.5,
						'animationEnabled' => true,
						'type' => 'normal'
					),
					array(
						'id' => 7,
						'imageUrl' => '',
						'x' => 38,
						'y' => 10,
						'size' => 160,
						'mobileSize' => 100,
						'speed' => 2,
						'animationEnabled' => true,
						'type' => 'normal'
					),
					array(
						'id' => 8,
						'imageUrl' => '',
						'x' => 70,
						'y' => 17,
						'size' => 420,
						'mobileSize' => 180,
						'speed' => 0,
						'animationEnabled' => false,
						'type' => 'dynamic'
					),
					array(
						'id' => 9,
						'imageUrl' => '',
						'x' => 70,
						'y' => 28,
						'size' => 420,
						'mobileSize' => 180,
						'speed' => 0,
						'animationEnabled' => false,
						'type' => 'dynamic'
					),
					array(
						'id' => 10,
						'imageUrl' => '',
						'x' => 70,
						'y' => 39,
						'size' => 420,
						'mobileSize' => 180,
						'speed' => 0,
						'animationEnabled' => false,
						'type' => 'dynamic'
					),
					array(
						'id' => 11,
						'imageUrl' => '',
						'x' => 70,
						'y' => 50,
						'size' => 420,
						'mobileSize' => 180,
						'speed' => 0,
						'animationEnabled' => false,
						'type' => 'dynamic'
					),
					array(
						'id' => 12,
						'imageUrl' => '',
						'x' => 70,
						'y' => 61,
						'size' => 420,
						'mobileSize' => 180,
						'speed' => 0,
						'animationEnabled' => false,
						'type' => 'dynamic'
					),
					array(
						'id' => 13,
						'imageUrl' => '',
						'x' => 70,
						'y' => 83,
						'size' => 420,
						'mobileSize' => 180,
						'speed' => 0,
						'animationEnabled' => false,
						'type' => 'dynamic'
					),
					array(
						'id' => 14,
						'imageUrl' => '',
						'x' => 70,
						'y' => 94,
						'size' => 420,
						'mobileSize' => 180,
						'speed' => 0,
						'animationEnabled' => false,
						'type' => 'dynamic'
					)
				)
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 65
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'textFontSize' => array(
				'type' => 'number',
				'default' => 22
			),
			'textFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'textFontWeight' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'titleMarginTop' => array(
				'type' => 'number',
				'default' => 0
			),
			'titleMarginBottom' => array(
				'type' => 'number',
				'default' => 1
			),
			'textMarginTop' => array(
				'type' => 'number',
				'default' => 0
			),
			'textMarginBottom' => array(
				'type' => 'number',
				'default' => 0
			),
			'gradientOverlay' => array(
				'type' => 'object',
				'default' => array(
					'startColor' => '#000000',
					'endColor' => '#000000',
					'startOpacity' => 0.8,
					'endOpacity' => 0.4,
					'direction' => 'to bottom',
					'angle' => 0,
					'startStop' => 46,
					'endStop' => 100
				)
			),
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	),
	'portfolio-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/portfolio-block',
		'version' => '0.1.0',
		'title' => 'Portfolio Block',
		'category' => 'widgets',
		'icon' => 'admin-generic',
		'description' => 'A portfolio section with gallery and modal slider using GSAP animations.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'alignWide' => true,
			'anchor' => true,
			'customClassName' => true,
			'reusable' => true
		),
		'textdomain' => 'portfolio-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'agencyTitle' => array(
				'type' => 'string',
				'default' => 'Our Work'
			),
			'agencyDescription' => array(
				'type' => 'string',
				'default' => 'We\'ve collaborated with innovative brands and startups to create compelling visual narratives that drive engagement and deliver results. Our portfolio showcases our expertise in branding, digital design, and creative storytelling.'
			),
			'ctaButtonText' => array(
				'type' => 'string',
				'default' => 'View Full Portfolio'
			),
			'slides' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'slideTitle' => 'Startup Nights',
						'slideDescription' => 'Startup Nights is Switzerland’s leading startup event, held annually in Winterthur. Since launching in 2017, it has grown into a major two-day gathering that brings together over 8,500 founders, investors, and innovators.',
						'slideUrl' => 'https://adaire.dev/ad/startup-nights/',
						'slideTags' => array(
							'Startup Ecosystem',
							'Tech Conference',
							'Networking Platform',
							'Entrepreneurial Innovation'
						),
						'slideImg' => '',
						'slideImgId' => 0
					),
					array(
						'id' => 2,
						'slideTitle' => 'APST Research',
						'slideDescription' => 'A medical research company that focuses on improving the prognosis for patients afflicted with ALS/Lou Gehrig’s disease.',
						'slideUrl' => 'https://adaire.dev/ad/apst',
						'slideTags' => array(
							'ALS Prognostic Platform',
							'Medical Data Analytics',
							'Blood Test Integration',
							'Secure Patient Portal'
						),
						'slideImg' => '',
						'slideImgId' => 0
					),
					array(
						'id' => 3,
						'slideTitle' => 'Future Tree',
						'slideDescription' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?',
						'slideUrl' => 'https://link.com',
						'slideTags' => array(
							'Monochrome',
							'Editorial',
							'Fashion',
							'Visual Identity'
						),
						'slideImg' => '',
						'slideImgId' => 0
					),
					array(
						'id' => 4,
						'slideTitle' => 'Physio und Sport',
						'slideDescription' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?',
						'slideUrl' => 'https://link.com',
						'slideTags' => array(
							'Monochrome',
							'Editorial',
							'Fashion',
							'Visual Identity'
						),
						'slideImg' => '',
						'slideImgId' => 0
					)
				)
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#667eea'
			),
			'gradientType' => array(
				'type' => 'string',
				'default' => 'linear'
			),
			'gradientAngle' => array(
				'type' => 'number',
				'default' => 135
			),
			'gradientColor1' => array(
				'type' => 'string',
				'default' => '#667eea'
			),
			'gradientColor2' => array(
				'type' => 'string',
				'default' => '#764ba2'
			),
			'gradientColor3' => array(
				'type' => 'string',
				'default' => ''
			),
			'gradientStop1' => array(
				'type' => 'number',
				'default' => 0
			),
			'gradientStop2' => array(
				'type' => 'number',
				'default' => 100
			),
			'gradientStop3' => array(
				'type' => 'number',
				'default' => 50
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 40
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'textFontSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'textFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'slideTitleFontSize' => array(
				'type' => 'number',
				'default' => 112
			),
			'slideDescriptionFontSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'slideTagFontSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'buttonColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'buttonBackgroundColor' => array(
				'type' => 'string',
				'default' => 'transparent'
			),
			'buttonHoverColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'buttonHoverBackgroundColor' => array(
				'type' => 'string',
				'default' => 'transparent'
			),
			'buttonStyle' => array(
				'type' => 'string',
				'default' => 'underline'
			),
			'underlineColor' => array(
				'type' => 'string',
				'default' => '#ff4242'
			),
			'blurAmount' => array(
				'type' => 'number',
				'default' => 0
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'showIcon' => array(
				'type' => 'boolean',
				'default' => true
			),
			'hoverAnimation' => array(
				'type' => 'string',
				'default' => 'slide-underline'
			),
			'buttonPadding' => array(
				'type' => 'string',
				'default' => '0.2em 0'
			),
			'buttonMargin' => array(
				'type' => 'string',
				'default' => '20px 0'
			),
			'zIndex' => array(
				'type' => 'number',
				'default' => 1
			),
			'borderRadius' => array(
				'type' => 'number',
				'default' => 0
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => '500'
			)
		)
	),
	'posts-grid-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/posts-grid-block',
		'version' => '0.1.0',
		'title' => 'Posts Grid',
		'category' => 'widgets',
		'icon' => 'grid-view',
		'description' => 'A dynamic posts grid with beautiful GSAP animations, multiple layout options, and category filtering.',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			),
			'customClassName' => true
		),
		'textdomain' => 'posts-grid-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			),
			'postsPerPage' => array(
				'type' => 'number',
				'default' => 6
			),
			'enablePagination' => array(
				'type' => 'boolean',
				'default' => false
			),
			'paginationStyle' => array(
				'type' => 'string',
				'default' => 'numbers'
			),
			'selectedCategories' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'selectedPosts' => array(
				'type' => 'array',
				'default' => array(
					
				)
			),
			'postType' => array(
				'type' => 'string',
				'default' => 'post'
			),
			'excludeCurrentPost' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showCategories' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showDate' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showAuthor' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showReadTime' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showExcerpt' => array(
				'type' => 'boolean',
				'default' => true
			),
			'excerptLength' => array(
				'type' => 'number',
				'default' => 20
			),
			'layoutType' => array(
				'type' => 'string',
				'default' => 'normal'
			),
			'columns' => array(
				'type' => 'number',
				'default' => 3
			),
			'enableFiltering' => array(
				'type' => 'boolean',
				'default' => false
			),
			'filterPosition' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'filterStyle' => array(
				'type' => 'string',
				'default' => 'pills'
			),
			'cardBorderRadius' => array(
				'type' => 'number',
				'default' => 8
			),
			'cardPadding' => array(
				'type' => 'number',
				'default' => 20
			),
			'cardGap' => array(
				'type' => 'number',
				'default' => 24
			),
			'imageHeight' => array(
				'type' => 'number',
				'default' => 200
			),
			'imageFit' => array(
				'type' => 'string',
				'default' => 'cover'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#1f2937'
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => '600'
			),
			'excerptColor' => array(
				'type' => 'string',
				'default' => '#6b7280'
			),
			'excerptFontSize' => array(
				'type' => 'number',
				'default' => 14
			),
			'excerptFontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'metaColor' => array(
				'type' => 'string',
				'default' => '#9ca3af'
			),
			'metaFontSize' => array(
				'type' => 'number',
				'default' => 12
			),
			'metaFontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'categoryColor' => array(
				'type' => 'string',
				'default' => '#3b82f6'
			),
			'categoryBackgroundColor' => array(
				'type' => 'string',
				'default' => '#f1f5f9'
			),
			'categoryBorderRadius' => array(
				'type' => 'number',
				'default' => 16
			),
			'filterBorderRadius' => array(
				'type' => 'number',
				'default' => 16
			),
			'paginationBorderRadius' => array(
				'type' => 'number',
				'default' => 6
			),
			'enableAnimations' => array(
				'type' => 'boolean',
				'default' => true
			),
			'animationType' => array(
				'type' => 'string',
				'default' => 'fadeUp'
			),
			'transitionAnimation' => array(
				'type' => 'string',
				'default' => 'fade'
			),
			'animationDuration' => array(
				'type' => 'number',
				'default' => 0.6
			),
			'animationDelay' => array(
				'type' => 'number',
				'default' => 0.1
			),
			'animationEase' => array(
				'type' => 'string',
				'default' => 'power2.out'
			),
			'enableHoverEffects' => array(
				'type' => 'boolean',
				'default' => true
			),
			'hoverScale' => array(
				'type' => 'number',
				'default' => 1.05
			),
			'hoverShadow' => array(
				'type' => 'boolean',
				'default' => true
			),
			'overlayOpacity' => array(
				'type' => 'number',
				'default' => 0.4
			),
			'overlayGradient' => array(
				'type' => 'string',
				'default' => 'linear-gradient(135deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.6) 100%)'
			),
			'textAlign' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'containerMode' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'containerMaxWidth' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'value' => 1200,
						'unit' => 'px'
					),
					'tablet' => array(
						'value' => 100,
						'unit' => '%'
					),
					'mobile' => array(
						'value' => 100,
						'unit' => '%'
					)
				)
			),
			'marginTop' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 0,
					'tablet' => 0,
					'mobile' => 0
				)
			),
			'marginRight' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 0,
					'tablet' => 0,
					'mobile' => 0
				)
			),
			'marginBottom' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 0,
					'tablet' => 0,
					'mobile' => 0
				)
			),
			'marginLeft' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => 0,
					'tablet' => 0,
					'mobile' => 0
				)
			)
		)
	),
	'project-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/project-block',
		'version' => '0.1.0',
		'title' => 'Project Block',
		'category' => 'widgets',
		'icon' => 'admin-generic',
		'description' => 'A section with a project preview and a gallery of images.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'project-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'sectionHeight' => array(
				'type' => 'number',
				'default' => 100
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#0a0a0a'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'textContent' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'title' => 'Block Design.',
						'description' => 'Blocks don\'t have to be boring. Create your own designs that\'ll benefit your user\'s experience.'
					),
					array(
						'id' => 2,
						'title' => 'Reusable Components',
						'description' => 'When developed into blocks they can be used over and over, saving precious design time.'
					),
					array(
						'id' => 3,
						'title' => 'Great Design Work',
						'description' => 'Making the most of your great design work and creating amazing user experiences.'
					)
				)
			),
			'particles' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'imageUrl' => '',
						'x' => 20,
						'y' => 30,
						'size' => 60,
						'speed' => 0.5
					),
					array(
						'id' => 2,
						'imageUrl' => '',
						'x' => 70,
						'y' => 60,
						'size' => 80,
						'speed' => 0.3
					),
					array(
						'id' => 3,
						'imageUrl' => '',
						'x' => 40,
						'y' => 80,
						'size' => 50,
						'speed' => 0.7
					)
				)
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 40
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'textFontSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'textFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'galleryItems' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Patient Portal',
						'copy' => 'A secure, user-friendly patient portal where individuals can create accounts, manage their personal information, and access their confidential NFL lab results. The platform ensures HIPAA compliance while providing easy access to critical health data.',
						'img' => ''
					)
				)
			),
			'companyName' => array(
				'type' => 'string',
				'default' => 'APST Research'
			),
			'companyDescription' => array(
				'type' => 'string',
				'default' => 'A medical research company that focuses on improving the prognosis for patients afflicted with ALS/Lou Gehrig’s disease.'
			),
			'client' => array(
				'type' => 'string',
				'default' => 'APST/Ambulanzpartner'
			),
			'country' => array(
				'type' => 'string',
				'default' => 'Germany'
			),
			'industry' => array(
				'type' => 'string',
				'default' => 'Medical Research'
			),
			'language' => array(
				'type' => 'string',
				'default' => 'German/English'
			),
			'technology' => array(
				'type' => 'string',
				'default' => 'Docker, Node, React, Python, Django, Azure Cloud'
			),
			'siteUrl' => array(
				'type' => 'string',
				'default' => ''
			),
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	),
	'questions-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/questions-block',
		'version' => '0.1.0',
		'title' => 'Questions Block',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'Animated questions section with GSAP pinning and transitions.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'questions-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'question1Title' => array(
				'type' => 'string',
				'default' => 'Who?'
			),
			'question1Content' => array(
				'type' => 'string',
				'default' => 'Who is Adaire Digital? Adaire Digital is your white-label web developer. Need a site? No problem.'
			),
			'question2Title' => array(
				'type' => 'string',
				'default' => 'You?'
			),
			'question2Content' => array(
				'type' => 'string',
				'default' => 'Are you an agency keen to expand your team without hiring; Are you a company who needs to bring additional web talent into your team; Are you an individual looking to have your own team to start or elevate your online presence, we would love to work with you! Companies: Ensure your site or eCommerce site is always up to date and ready for visitors. Individuals: If you need an online presence, we can help'
			),
			'question3Title' => array(
				'type' => 'string',
				'default' => 'What?'
			),
			'question3Content' => array(
				'type' => 'string',
				'default' => 'What do we do? We are web experts doing all things digital web.'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#070707'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'titleColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'inactiveTitleColor' => array(
				'type' => 'string',
				'default' => '#666666'
			),
			'activeSection' => array(
				'type' => 'string',
				'default' => 'what'
			),
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	),
	'scroll-text-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/scroll-text-block',
		'version' => '0.1.0',
		'title' => 'Scroll Text',
		'category' => 'widgets',
		'icon' => 'smiley',
		'description' => 'A scroll-triggered text animation block using GSAP.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'scroll-text-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'heroText' => array(
				'type' => 'string',
				'default' => 'Hello from Adaire x GSAP!'
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => 32
			),
			'fontSizeUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'animationSpeed' => array(
				'type' => 'number',
				'default' => 1
			),
			'scrollDirection' => array(
				'type' => 'string',
				'default' => 'left'
			),
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			),
			'marginTop' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginBottom' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginLeft' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginRight' => array(
				'type' => 'number',
				'default' => 0
			),
			'paddingTop' => array(
				'type' => 'number',
				'default' => 0
			),
			'paddingBottom' => array(
				'type' => 'number',
				'default' => 0
			),
			'paddingLeft' => array(
				'type' => 'number',
				'default' => 0
			),
			'paddingRight' => array(
				'type' => 'number',
				'default' => 0
			),
			'fontWeight' => array(
				'type' => 'string',
				'default' => '400'
			),
			'backgroundColorOpacity' => array(
				'type' => 'number',
				'default' => 1
			),
			'containerWidth' => array(
				'type' => 'number',
				'default' => 100
			),
			'containerWidthUnit' => array(
				'type' => 'string',
				'default' => 'vw'
			),
			'containerHeight' => array(
				'type' => 'number',
				'default' => 100
			),
			'containerHeightUnit' => array(
				'type' => 'string',
				'default' => 'vh'
			),
			'pinHeight' => array(
				'type' => 'number',
				'default' => 100
			),
			'pinHeightUnit' => array(
				'type' => 'string',
				'default' => 'vh'
			)
		)
	),
	'services-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/services-block',
		'version' => '0.1.0',
		'title' => 'Services Block',
		'category' => 'widgets',
		'icon' => 'admin-generic',
		'description' => 'A section with services that move with scroll using GSAP.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'alignWide' => true,
			'anchor' => true,
			'customClassName' => true,
			'reusable' => true
		),
		'textdomain' => 'services-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'agencyTitle' => array(
				'type' => 'string',
				'default' => 'Our Work'
			),
			'agencyDescription' => array(
				'type' => 'string',
				'default' => 'We\'ve collaborated with innovative brands and startups to create compelling visual narratives that drive engagement and deliver results. Our portfolio showcases our expertise in branding, digital design, and creative storytelling.'
			),
			'ctaButtonText' => array(
				'type' => 'string',
				'default' => 'View Full Portfolio'
			),
			'slides' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'slideTitle' => 'Digital Innovation',
						'slideDescription' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?',
						'slideUrl' => 'https://link.com',
						'slideTags' => array(
							'Digital',
							'Innovation',
							'Technology',
							'Design'
						),
						'slideImg' => '',
						'slideImgId' => 0
					),
					array(
						'id' => 2,
						'slideTitle' => 'Startup Nights',
						'slideDescription' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?',
						'slideUrl' => 'https://link.com',
						'slideTags' => array(
							'Client 1',
							'Editorial',
							'Fashion',
							'Visual Identity'
						),
						'slideImg' => '',
						'slideImgId' => 0
					),
					array(
						'id' => 3,
						'slideTitle' => 'APST Research',
						'slideDescription' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?',
						'slideUrl' => 'https://link.com',
						'slideTags' => array(
							'Monochrome',
							'Editorial',
							'Fashion',
							'Visual Identity'
						),
						'slideImg' => '',
						'slideImgId' => 0
					),
					array(
						'id' => 4,
						'slideTitle' => 'Future Tree',
						'slideDescription' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?',
						'slideUrl' => 'https://link.com',
						'slideTags' => array(
							'Monochrome',
							'Editorial',
							'Fashion',
							'Visual Identity'
						),
						'slideImg' => '',
						'slideImgId' => 0
					),
					array(
						'id' => 5,
						'slideTitle' => 'Physio Und Sport',
						'slideDescription' => 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?',
						'slideUrl' => 'https://link.com',
						'slideTags' => array(
							'Monochrome',
							'Editorial',
							'Fashion',
							'Visual Identity'
						),
						'slideImg' => '',
						'slideImgId' => 0
					)
				)
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
			),
			'gradientType' => array(
				'type' => 'string',
				'default' => 'linear'
			),
			'gradientAngle' => array(
				'type' => 'number',
				'default' => 135
			),
			'gradientColor1' => array(
				'type' => 'string',
				'default' => '#667eea'
			),
			'gradientColor2' => array(
				'type' => 'string',
				'default' => '#764ba2'
			),
			'gradientColor3' => array(
				'type' => 'string',
				'default' => ''
			),
			'gradientStop1' => array(
				'type' => 'number',
				'default' => 0
			),
			'gradientStop2' => array(
				'type' => 'number',
				'default' => 100
			),
			'gradientStop3' => array(
				'type' => 'number',
				'default' => 50
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 40
			),
			'titleFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'textFontSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'textFontFamily' => array(
				'type' => 'string',
				'default' => 'inherit'
			),
			'slideTitleFontSize' => array(
				'type' => 'number',
				'default' => 112
			),
			'slideDescriptionFontSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'slideTagFontSize' => array(
				'type' => 'number',
				'default' => 20
			),
			'previewText' => array(
				'type' => 'string',
				'default' => 'We:'
			),
			'linkText' => array(
				'type' => 'string',
				'default' => 'Read More'
			),
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			),
			'containerHeight' => array(
				'type' => 'number',
				'default' => 70
			),
			'containerHeightLargeDesktop' => array(
				'type' => 'number',
				'default' => 80
			),
			'containerHeightDesktop' => array(
				'type' => 'number',
				'default' => 70
			),
			'containerHeightSmallLaptop' => array(
				'type' => 'number',
				'default' => 65
			),
			'containerHeightTabLand' => array(
				'type' => 'number',
				'default' => 60
			),
			'containerHeightTabPort' => array(
				'type' => 'number',
				'default' => 55
			),
			'containerHeightPhone' => array(
				'type' => 'number',
				'default' => 50
			)
		)
	),
	'tab-panel-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/tab-panel-block',
		'version' => '0.1.0',
		'title' => 'Tab Panel',
		'category' => 'widgets',
		'parent' => array(
			'create-block/tabs-block'
		),
		'icon' => 'media-text',
		'description' => 'A single tab panel content area (automatically managed by Tabs block).',
		'supports' => array(
			'html' => false,
			'reusable' => false,
			'inserter' => false
		),
		'textdomain' => 'tab-panel-block',
		'editorScript' => 'file:./index.js',
		'style' => 'file:./style-index.css',
		'attributes' => array(
			'tabTitle' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabId' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabIndex' => array(
				'type' => 'number',
				'default' => 0
			),
			'isActive' => array(
				'type' => 'boolean',
				'default' => false
			)
		)
	),
	'tabs-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/tabs-block',
		'version' => '0.1.0',
		'title' => 'Tabs',
		'category' => 'widgets',
		'icon' => 'index-card',
		'description' => 'Beautiful tabbed content with smooth GSAP animations and customizable styling.',
		'supports' => array(
			'html' => false,
			'anchor' => true,
			'align' => array(
				'wide',
				'full'
			),
			'customClassName' => true
		),
		'textdomain' => 'tabs-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			),
			'tabs' => array(
				'type' => 'array',
				'default' => array(
					array(
						'title' => 'Retail',
						'id' => 'tab-1'
					)
				)
			),
			'activeTab' => array(
				'type' => 'number',
				'default' => 0
			),
			'tabTitleColor' => array(
				'type' => 'string',
				'default' => '#64748b'
			),
			'tabTitleActiveColor' => array(
				'type' => 'string',
				'default' => '#0f172a'
			),
			'tabUnderlineColor' => array(
				'type' => 'string',
				'default' => '#3b82f6'
			),
			'tabTitleFontSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'tabTitleFontWeight' => array(
				'type' => 'string',
				'default' => '500'
			),
			'tabTitleActiveFontWeight' => array(
				'type' => 'string',
				'default' => '600'
			),
			'tabGap' => array(
				'type' => 'number',
				'default' => 32
			),
			'underlineHeight' => array(
				'type' => 'number',
				'default' => 3
			),
			'contentPaddingTop' => array(
				'type' => 'number',
				'default' => 40
			),
			'contentPaddingRight' => array(
				'type' => 'number',
				'default' => 0
			),
			'contentPaddingBottom' => array(
				'type' => 'number',
				'default' => 40
			),
			'contentPaddingLeft' => array(
				'type' => 'number',
				'default' => 0
			),
			'tabsAlign' => array(
				'type' => 'string',
				'default' => 'flex-start'
			),
			'animationDuration' => array(
				'type' => 'number',
				'default' => 0.6
			),
			'animationEase' => array(
				'type' => 'string',
				'default' => 'power2.out'
			),
			'containerMode' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'containerMaxWidth' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'value' => 1200,
						'unit' => 'px'
					),
					'tablet' => array(
						'value' => 100,
						'unit' => '%'
					),
					'mobile' => array(
						'value' => 100,
						'unit' => '%'
					)
				)
			),
			'marginTop' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginRight' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginBottom' => array(
				'type' => 'number',
				'default' => 0
			),
			'marginLeft' => array(
				'type' => 'number',
				'default' => 0
			),
			'tabLayout' => array(
				'type' => 'string',
				'default' => 'horizontal'
			),
			'tabPosition' => array(
				'type' => 'string',
				'default' => 'top'
			),
			'verticalActiveBgColor' => array(
				'type' => 'string',
				'default' => 'rgba(59, 130, 246, 0.05)'
			),
			'verticalActiveBgOpacity' => array(
				'type' => 'number',
				'default' => 0.05
			)
		)
	),
	'testimonial-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/testimonial-block',
		'version' => '0.1.0',
		'title' => 'Testimonial Block',
		'category' => 'text',
		'icon' => 'text',
		'description' => 'A testimonial block in a customizable carousel',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false
		),
		'textdomain' => 'testimonial-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'textColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'arrowColor' => array(
				'type' => 'string',
				'default' => '#ff0000'
			),
			'dotColor' => array(
				'type' => 'string',
				'default' => '#ff0000'
			),
			'fontSize' => array(
				'type' => 'number',
				'default' => 16
			),
			'textToDisplay' => array(
				'type' => 'string',
				'default' => 'Hello World'
			),
			'slidesPerView' => array(
				'type' => 'number',
				'default' => 1
			),
			'slides' => array(
				'type' => 'number',
				'default' => 3
			),
			'spaceBetween' => array(
				'type' => 'number',
				'default' => 50
			),
			'gap' => array(
				'type' => 'number',
				'default' => 30
			),
			'logoSize' => array(
				'type' => 'number',
				'default' => 60
			),
			'loop' => array(
				'type' => 'boolean',
				'default' => true
			),
			'navigation' => array(
				'type' => 'boolean',
				'default' => true
			),
			'pagination' => array(
				'type' => 'boolean',
				'default' => true
			),
			'scrollbar' => array(
				'type' => 'boolean',
				'default' => false
			),
			'testimonials' => array(
				'type' => 'array',
				'default' => array(
					array(
						'companyName' => 'STATS PERFORM',
						'companyLogo' => 'https://via.placeholder.com/200x60/4F46E5/FFFFFF?text=STATS+PERFORM',
						'quote' => 'With an aggressive product development timeline, we needed a partner who had advanced mobile and machine-learning capabilities and could also match our pace.',
						'authorName' => 'Darryl Lewis',
						'authorTitle' => 'CTO of Stats Perform'
					)
				)
			),
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			),
			'maxWidth' => array(
				'type' => 'number',
				'default' => 1200
			),
			'cardBackgroundColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'blockBackgroundColor' => array(
				'type' => 'string',
				'default' => ''
			),
			'logoAlignment' => array(
				'type' => 'string',
				'default' => 'center'
			),
			'containerMode' => array(
				'type' => 'string',
				'default' => 'full'
			),
			'containerMaxWidth' => array(
				'type' => 'object',
				'default' => array(
					'desktop' => array(
						'value' => 1200,
						'unit' => 'px'
					),
					'tablet' => array(
						'value' => 100,
						'unit' => '%'
					),
					'mobile' => array(
						'value' => 100,
						'unit' => '%'
					)
				)
			)
		)
	),
	'video-hero-block' => array(
		'$schema' => 'https://schemas.wp.org/trunk/block.json',
		'apiVersion' => 3,
		'name' => 'create-block/video-hero-block',
		'version' => '0.1.0',
		'title' => 'Video Hero Slider',
		'category' => 'media',
		'icon' => 'video-alt3',
		'description' => 'A video slider with smooth transitions using YouTube/Vimeo videos.',
		'example' => array(
			
		),
		'supports' => array(
			'html' => false,
			'align' => true,
			'alignWide' => true,
			'anchor' => true,
			'customClassName' => true,
			'reusable' => true
		),
		'textdomain' => 'video-hero-block',
		'editorScript' => 'file:./index.js',
		'editorStyle' => 'file:./index.css',
		'style' => 'file:./style-index.css',
		'viewScript' => 'file:./view.js',
		'attributes' => array(
			'videos' => array(
				'type' => 'array',
				'default' => array(
					array(
						'id' => 1,
						'title' => 'Premium whitelabel design',
						'description' => 'Watch this incredible video showcasing our latest work and creative process.',
						'videoUrl' => 'https://vimeo.com/1118056227',
						'videoType' => 'vimeo',
						'thumbnail' => '',
						'thumbnailId' => 0,
						'autoplay' => true,
						'muted' => true,
						'useImage' => false,
						'imageUrl' => '',
						'imageId' => 0
					),
					array(
						'id' => 2,
						'title' => 'Bring your ideas to life',
						'description' => 'Explore our creative journey and see how we bring ideas to life through innovative design.',
						'videoUrl' => 'https://youtu.be/iUtnZpzkbG8',
						'videoType' => 'youtube',
						'thumbnail' => '',
						'thumbnailId' => 0,
						'autoplay' => true,
						'muted' => true,
						'useImage' => false,
						'imageUrl' => '',
						'imageId' => 0
					),
					array(
						'id' => 3,
						'title' => 'Award Winning Design',
						'description' => 'Get an exclusive look behind the scenes of our creative process and team collaboration.',
						'videoUrl' => 'https://youtu.be/vhpOhHEhVOg',
						'videoType' => 'youtube',
						'thumbnail' => '',
						'thumbnailId' => 0,
						'autoplay' => true,
						'muted' => true,
						'useImage' => false,
						'imageUrl' => '',
						'imageId' => 0
					)
				)
			),
			'transitionDuration' => array(
				'type' => 'number',
				'default' => 8000
			),
			'autoPlay' => array(
				'type' => 'boolean',
				'default' => true
			),
			'showControls' => array(
				'type' => 'boolean',
				'default' => true
			),
			'backgroundColor' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'textColor' => array(
				'type' => 'string',
				'default' => '#ffffff'
			),
			'titleFontSize' => array(
				'type' => 'number',
				'default' => 48
			),
			'titleFontSizeUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'titleFontWeight' => array(
				'type' => 'string',
				'default' => '700'
			),
			'descriptionFontSize' => array(
				'type' => 'number',
				'default' => 18
			),
			'descriptionFontSizeUnit' => array(
				'type' => 'string',
				'default' => 'px'
			),
			'overlayOpacity' => array(
				'type' => 'number',
				'default' => 0.3
			),
			'navArrowLeftColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'navArrowLeftColorHover' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'navArrowRightColor' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'navArrowRightColorHover' => array(
				'type' => 'string',
				'default' => '#FFFFFF'
			),
			'navArrowLeftBgColor' => array(
				'type' => 'string',
				'default' => '#6D6D6D'
			),
			'navArrowLeftBgColorHover' => array(
				'type' => 'string',
				'default' => '#6D6D6D'
			),
			'navArrowRightBgColor' => array(
				'type' => 'string',
				'default' => '#6D6D6D'
			),
			'navArrowRightBgColorHover' => array(
				'type' => 'string',
				'default' => '#6D6D6D'
			),
			'navArrowLeftBgOpacity' => array(
				'type' => 'number',
				'default' => 0.1
			),
			'navArrowLeftBgOpacityHover' => array(
				'type' => 'number',
				'default' => 0.4
			),
			'navArrowRightBgOpacity' => array(
				'type' => 'number',
				'default' => 0.1
			),
			'navArrowRightBgOpacityHover' => array(
				'type' => 'number',
				'default' => 0.4
			),
			'navArrowLeftBgBlur' => array(
				'type' => 'number',
				'default' => 12
			),
			'navArrowLeftBgBlurHover' => array(
				'type' => 'number',
				'default' => 12
			),
			'navArrowRightBgBlur' => array(
				'type' => 'number',
				'default' => 12
			),
			'navArrowRightBgBlurHover' => array(
				'type' => 'number',
				'default' => 12
			),
			'titleScrollingGap' => array(
				'type' => 'number',
				'default' => 300
			),
			'titleScrollingGapTablet' => array(
				'type' => 'number',
				'default' => 200
			),
			'titleScrollingGapMobile' => array(
				'type' => 'number',
				'default' => 150
			),
			'titleScrollingSpeed' => array(
				'type' => 'number',
				'default' => 100
			),
			'titleFontSizeTablet' => array(
				'type' => 'number',
				'default' => 36
			),
			'titleFontSizeMobile' => array(
				'type' => 'number',
				'default' => 28
			),
			'descriptionFontSizeTablet' => array(
				'type' => 'number',
				'default' => 16
			),
			'descriptionFontSizeMobile' => array(
				'type' => 'number',
				'default' => 14
			),
			'overlayType' => array(
				'type' => 'string',
				'default' => 'solid'
			),
			'overlayGradientStart' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'overlayGradientEnd' => array(
				'type' => 'string',
				'default' => '#000000'
			),
			'overlayGradientDirection' => array(
				'type' => 'string',
				'default' => 'to bottom'
			),
			'overlayGradientStartOpacity' => array(
				'type' => 'number',
				'default' => 0.5
			),
			'overlayGradientEndOpacity' => array(
				'type' => 'number',
				'default' => 0.3
			),
			'blockId' => array(
				'type' => 'string',
				'default' => ''
			)
		)
	)
);
