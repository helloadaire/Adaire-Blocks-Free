import { useBlockProps } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		agencyTitle,
		agencyDescription,
		ctaButtonText,
		slides,
		backgroundColor,
		textColor,
		titleFontSize,
		textFontSize,
		slideTitleFontSize,
		slideDescriptionFontSize,
		slideTagFontSize,
		previewText,
		linkText,
		blockId,
		containerHeight,
		containerHeightLargeDesktop,
		containerHeightDesktop,
		containerHeightSmallLaptop,
		containerHeightTabLand,
		containerHeightTabPort,
		containerHeightPhone
	} = attributes;

	// Convert slides to stories format for the view script
	const stories = slides ? slides.map(slide => ({
		profileImg: slide.slideImg && slide.slideImg.trim() !== "" ? slide.slideImg : "./assets/build.jpg",
		profileName: slide.slideTitle || "Build",
		title: slide.slideDescription ? 
			slide.slideDescription.split(' ').reduce((lines, word, index) => {
				const lineIndex = Math.floor(index / 4);
				if (!lines[lineIndex]) lines[lineIndex] = [];
				lines[lineIndex].push(word);
				return lines;
			}, []).map(line => line.join(' ')) : 
			["We design and develop custom websites", "and applications that are tailored", "to your specific needs and goals."],
		linkLabel: linkText || "Read More",
		linkSrc: slide.slideUrl || "#",
		storyImg: slide.slideImg && slide.slideImg.trim() !== "" ? slide.slideImg : "./assets/build.jpg"
	})) : [
		{
			profileImg: "./assets/build.jpg",
			profileName: "Build",
			title: [
				"We design and develop custom websites",
				"and applications that are tailored",
				"to your specific needs and goals.",
			],
			linkLabel: "Read More",
			linkSrc: "behance.net",
			storyImg: "./assets/build.jpg",
		},
		{
			profileImg: "./assets/maintain.jpg",
			profileName: "Maintain",
			title: [
				"We provide ongoing maintenance",
				" and support to ensure ",
				"your digital assets are always ",
			],
			linkLabel: "Discover",
			linkSrc: "dribbble.com",
			storyImg: "./assets/maintain.jpg",
		},
		{
			profileImg: "./assets/support.jpg",
			profileName: "Support",
			title: ["Our dedicated support team",  "is always available to", "help you with any issues or questions", "you may have."],
			linkLabel: "Check It Out",
			linkSrc: "awwwards.com",
			storyImg: "./assets/support.jpg",
		},
		{
			profileImg: "./assets/host.jpg",
			profileName: "Host",
			title: ["We offer reliable and secure", " hosting solutions to ensure", "your website is always", "online and performing optimally."],
			linkLabel: "Adobe More",
			linkSrc: "adobe.com",
			storyImg: "./assets/host.jpg",
		},
	];

	// Debug log in development
	if (typeof console !== 'undefined' && process.env.NODE_ENV === 'development') {
		console.log('Services block save - slides:', slides);
		if (slides) {
			slides.forEach((slide, index) => {
				console.log(`Slide ${index} - slideImg: "${slide.slideImg}" (type: ${typeof slide.slideImg})`);
			});
		}
		console.log('Services block save - stories:', stories);
		console.log('Services block save - first story image:', stories[0]?.storyImg);
		console.log('Services block save - first profile image:', stories[0]?.profileImg);
	}

	const blockProps = useBlockProps.save({
		className: 'animation-component',
		style: {
			color: textColor || '#ffffff',
			'--title-font-size': `${titleFontSize}px`,
			'--text-font-size': `${textFontSize}px`,
			'--slide-title-font-size': `${slideTitleFontSize}px`,
			'--slide-description-font-size': `${slideDescriptionFontSize}px`,
			'--slide-tag-font-size': `${slideTagFontSize}px`,
			'--container-height': `${containerHeight || 70}vh`,
			'--container-height-large-desktop': `${containerHeightLargeDesktop || 80}vh`,
			'--container-height-desktop': `${containerHeightDesktop || 70}vh`,
			'--container-height-small-laptop': `${containerHeightSmallLaptop || 65}vh`,
			'--container-height-tab-land': `${containerHeightTabLand || 60}vh`,
			'--container-height-tab-port': `${containerHeightTabPort || 55}vh`,
			'--container-height-phone': `${containerHeightPhone || 50}vh`,
		},
		'data-stories': JSON.stringify(stories),
		id: blockId || undefined
	});

	return (
		<div {...blockProps}>
			<div class="ad-services-block-body">
				<div class="ad-services-block-container">
					<div class="ad-services-block-cursor">
						<p class="ad-services-block-cursor-text"></p>
					</div>
			
					<div class="ad-services-block-story-img">
						<div class="img">
							<img class="story-image" src="./assets/build.jpg" alt="" />
						</div>
					</div>
					<div className="ad-services-block-services-overview">
						<h1>{previewText || "We:"} </h1>
						{/* Dynamic overview items will be injected here by view.js */}
						<div className="overview-placeholder">
							{/* Dynamic overview items will be injected here by view.js */}
						</div>
					</div>
			
					<div class="ad-services-block-story-content">
						<div class="ad-services-block-row">

							
							<div class="ad-services-block-indices">
								{/* Dynamic index indicators will be injected here by view.js */}
							</div>
			
							<div class="profile">
								<div class="profile-icon">
									<img class="profile-image" src="./assets/build.jpg" alt="" />
								</div>
								<div class="profile-name">
									<p class="profile-text">Build</p>
								</div>
							</div>
						</div>
			
						<div class="row">
							<div class="title">
								{/* Dynamic title content will be injected here by view.js */}
							</div>
			
							<div class="link">
								<a class="link-text" href="#" target="_blank">
									{linkText || "Read More"}
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}