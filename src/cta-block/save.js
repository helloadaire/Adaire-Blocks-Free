import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const {
		mainTitle,
		subtitle,
		carouselItems,
		backgroundColor,
		gradientColor1,
		gradientColor2,
		gradientOpacity,
		textColor,
		titleColor,
		subtitleColor,
		titleFontSize,
		subtitleFontSize,
		carouselFontSize,
		titleFontWeight,
		descriptionFontWeight,
		mainTitleFontWeight,
		subtitleFontWeight,
		animationSpeed,
		carouselSpeed,
		autoplay,
		autoplayDelay,
		blockId
	} = attributes;

	return (
		<div
			{...useBlockProps.save({
				className: 'cta-block',
				style: {
					backgroundColor: backgroundColor || '#1a1a1a',
					color: textColor || '#ffffff',
					'--gradient-color-1': gradientColor1 || '#ff4444',
					'--gradient-color-2': gradientColor2 || '#ff6666',
					'--gradient-opacity': gradientOpacity || 0.1,
				'--title-font-size': `${titleFontSize}px`,
				'--subtitle-font-size': `${subtitleFontSize}px`,
				'--carousel-font-size': `${carouselFontSize}px`,
				'--title-font-weight': titleFontWeight || '700',
				'--description-font-weight': descriptionFontWeight || '400',
				'--main-title-font-weight': mainTitleFontWeight || '700',
				'--subtitle-font-weight': subtitleFontWeight || '400',
				'--title-color': titleColor || '#ffffff',
				'--subtitle-color': subtitleColor || '#ffffff',
				'--carousel-text-color': textColor || '#ffffff',
				'--animation-speed': animationSpeed || 1,
				'--carousel-speed': `${carouselSpeed}ms`
				},
				'data-carousel-items': JSON.stringify(carouselItems),
				'data-animation-speed': animationSpeed || 1,
				'data-carousel-speed': carouselSpeed || 3000,
				'data-autoplay': autoplay ? 'true' : 'false',
				'data-autoplay-delay': autoplayDelay || 4000,
				id: blockId || undefined
			})}
		>
			<div className="cta-container">
				{/* Glowing gradient background */}
				<div className="gradient-glow"></div>
				
				{/* Main content */}
				<div className="cta-content">
					<RichText.Content
						tagName="h1"
						className="cta-title"
						value={mainTitle}
					/>
					
					<RichText.Content
						tagName="h2"
						className="cta-subtitle"
						value={subtitle}
					/>
					
					{/* Carousel */}
					<div className="carousel-container">
						<div className="splide cta-splide" aria-label="CTA Carousel">
							<div className="splide__track">
								<ul className="splide__list">
									{carouselItems.map((item, index) => (
										<li key={item.id} className="splide__slide">
											<div 
												className="carousel-item"
												style={{
													backgroundImage: item.imageUrl ? `url(${item.imageUrl})` : 'none',
													backgroundSize: 'cover',
													backgroundPosition: 'center',
													backgroundRepeat: 'no-repeat'
												}}
											>
												<div className="carousel-text-overlay">
													<h3>{item.title}</h3>
													<p>{item.description}</p>
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
							
							{/* Splide Navigation arrows */}
							<div className="splide__arrows">
								<button className="splide__arrow splide__arrow--prev">&lt;</button>
								<button className="splide__arrow splide__arrow--next">&gt;</button>
							</div>
							
							{/* Splide Pagination dots */}
							<div className="splide__pagination"></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}