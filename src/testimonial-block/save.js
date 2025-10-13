import { useBlockProps } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { 
		textColor, 
		arrowColor,
		dotColor,
		fontSize, 
		textToDisplay,
		slidesPerView,
		spaceBetween,
		gap,
		logoSize,
		loop,
		navigation,
		blockId,
		pagination,
		scrollbar,
		slides,
		testimonials,
		maxWidth,
		cardBackgroundColor,
		blockBackgroundColor,
		logoAlignment,
		containerMode,
		containerMaxWidth
	} = attributes;

	const blockProps = useBlockProps.save({
		className: "ad-carousel-text-block",
		style: {
			color: textColor || "#000000",
			fontSize: `${fontSize || 16}px`,
			"--text-color": textColor || "#000000",
			"--card-gap": `${gap || 30}px`,
			"--logo-size": `${logoSize || 60}px`,
			"--arrow-color": arrowColor,
			"--dot-color": dotColor,
			"--max-width": `${maxWidth || 1200}px`,
			"--card-bg-color": cardBackgroundColor || "#ffffff",
			"--logo-alignment": logoAlignment || "center",
			"--container-max-width": `${containerMaxWidth?.desktop?.value ?? containerMaxWidth?.value ?? 1200}${containerMaxWidth?.desktop?.unit ?? containerMaxWidth?.unit ?? 'px'}`,
			"--container-max-width-tablet": `${containerMaxWidth?.tablet?.value ?? 100}${containerMaxWidth?.tablet?.unit ?? '%'}`,
			"--container-max-width-mobile": `${containerMaxWidth?.mobile?.value ?? 100}${containerMaxWidth?.mobile?.unit ?? '%'}`,
			...(blockBackgroundColor && { background: blockBackgroundColor })
		},
		'data-slides-per-view': slidesPerView || 3,
		'data-space-between': spaceBetween || 50,
		'data-loop': loop ? 'true' : 'false',
		'data-navigation': navigation ? 'true' : 'false',
		'data-pagination': pagination ? 'true' : 'false',
		'data-scrollbar': scrollbar ? 'true' : 'false',
		'data-container-mode': containerMode || 'full',
		"data-slides": slides || 3,
		"data-arrowcolor": arrowColor || "#ff0000",
		id: blockId || undefined
	});

	return (
		<div {...blockProps}>
			<div className="ad-carousel-text-block__testimonial-carousel">
				<div className="swiper">
					<div className="swiper-wrapper">
						{testimonials.map((testimonial, index) => (
							<div key={index} className="swiper-slide">
								<div 
									className="ad-carousel-text-block__testimonial-card"
									style={{
										"--logo-size": `${logoSize || 60}px`,
									}}
								>
									<div className="ad-carousel-text-block__company-logo">
									{testimonial.companyLogo ? (
										<>
											<img 
												src={testimonial.companyLogo} 
												alt={testimonial.companyName}
												style={{
													height: `${logoSize || 60}px`,
													objectFit: "contain",
													width: "auto"
												}}
												loading="lazy"
												onError={(e) => {
													e.target.style.display = 'none';
													e.target.nextSibling.style.display = 'block';
												}}
											/>
											<div 
												className="ad-carousel-text-block__logo-placeholder"
												style={{ display: 'none' }}
											>
												{testimonial.companyName}
											</div>
										</>
									) : (
											<div className="ad-carousel-text-block__logo-placeholder">{testimonial.companyName}</div>
									)}
									</div>
									<div className="ad-carousel-text-block__quote">
										"{testimonial.quote}"
									</div>
									<br/>
									<br/>
									<div className="ad-carousel-text-block__author">
										<div className="ad-carousel-text-block__name">{testimonial.authorName}</div>
										<div className="ad-carousel-text-block__title">{testimonial.authorTitle}</div>
									</div>
								</div>
							</div>
						))}
					</div>

					{pagination && <div className="swiper-pagination"></div>}
					{navigation && (
						<>
							<div className="swiper-button-prev"></div>
							<div className="swiper-button-next"></div>
						</>
					)}
					{scrollbar && <div className="swiper-scrollbar"></div>}
				</div>
			</div>
		</div>
	);
}
