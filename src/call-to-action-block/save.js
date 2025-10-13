import { useBlockProps, InnerBlocks } from "@wordpress/block-editor";
import { RichText } from "@wordpress/block-editor";

export default function save({ attributes }) {
	const { 
		layout, 
		minHeight,
		backgroundImage,
		backgroundSize,
		backgroundPosition,
		imageWidth,
		contentJustify,
		contentAlign,
		contentPadding,
		contentBackgroundColor,
		headerText,
		headerFontSize,
		headerColor,
		headerMarginBottom,
		headerTextAlign,
		headerFontWeight,
		bodyText,
		bodyFontSize,
		bodyColor,
		bodyMarginBottom,
		bodyTextAlign,
		bodyFontWeight,
		stackedImageHeight,
		stackedContentWidth,
		overlayBackgroundColor,
		overlayOpacity,
		overlayContentWidth,
		overlayTextColor,
		overlayHeaderColor,
		overlayBodyColor,
		marginTop,
		marginRight,
		marginBottom,
		marginLeft,
		gradientType,
		gradientColor1,
		gradientColor2,
		gradientDirection,
		gradientOpacity,
		contentGradientType,
		contentGradientColor1,
		contentGradientColor2,
		contentGradientDirection,
		contentGradientOpacity,
		overlayGradientType,
		overlayGradientColor1,
		overlayGradientColor2,
		overlayGradientDirection,
		overlayGradientOpacity,
		contentGradientOrigin,
		overlayGradientOrigin,
		containerMode = "full",
		containerMaxWidth = {
			desktop: { value: 1200, unit: "px" },
			tablet: { value: 100, unit: "%" },
			mobile: { value: 100, unit: "%" }
		},
		contentBorderRadius = 0,
	} = attributes;

	const toAlphaHex = (val) => Math.round((val || 0) * 255).toString(16).padStart(2, '0');

	console.log(overlayOpacity)

	return (
		<div
			{...useBlockProps.save({
				className: "cta-block",
				style: {
					"--min-height": `${minHeight || 400}px`,
					"--background-image": backgroundImage ? `url(${backgroundImage.url})` : 'none',
					"--background-size": backgroundSize || 'cover',
					"--background-position": backgroundPosition || 'center',
					"--image-width": `${imageWidth}%`,
					"--content-justify": contentJustify || 'center',
					"--content-align": contentAlign || 'flex-start',
					"--content-padding-top": `${contentPadding?.top || 20}px`,
					"--content-padding-right": `${contentPadding?.right || 20}px`,
					"--content-padding-bottom": `${contentPadding?.bottom || 20}px`,
					"--content-padding-left": `${contentPadding?.left || 20}px`,
				"--content-background": (contentGradientType && contentGradientType !== 'none')
					? (
						contentGradientType === 'linear'
							? `linear-gradient(${contentGradientDirection || '135deg'}, ${contentGradientColor1 || '#ff4444'}${toAlphaHex(contentGradientOpacity ?? 0.1)}, ${contentGradientColor2 || '#ff6666'}${toAlphaHex(contentGradientOpacity ?? 0.1)})`
							: `radial-gradient(ellipse at ${contentGradientOrigin || 'center'}, ${contentGradientColor1 || '#ff4444'}${toAlphaHex(contentGradientOpacity ?? 0.1)}, ${contentGradientColor2 || '#ff6666'}${toAlphaHex(contentGradientOpacity ?? 0.1)})`
					)
					: (contentBackgroundColor || '#f5f5f5'),
					"--header-font-size-desktop": `${headerFontSize?.desktop || 40}px`,
					"--header-font-size-tablet": `${headerFontSize?.tablet || 32}px`,
					"--header-font-size-mobile": `${headerFontSize?.mobile || 24}px`,
					"--header-color": headerColor || '#333333',
					"--header-margin-bottom-desktop": `${headerMarginBottom?.desktop || 20}px`,
					"--header-margin-bottom-tablet": `${headerMarginBottom?.tablet || 16}px`,
					"--header-margin-bottom-mobile": `${headerMarginBottom?.mobile || 12}px`,
					"--header-text-align": headerTextAlign || 'left',
					"--header-font-weight": headerFontWeight || '300',
					"--body-font-size-desktop": `${bodyFontSize?.desktop || 16}px`,
					"--body-font-size-tablet": `${bodyFontSize?.tablet || 14}px`,
					"--body-font-size-mobile": `${bodyFontSize?.mobile || 12}px`,
					"--body-color": bodyColor || '#666666',
					"--body-margin-bottom-desktop": `${bodyMarginBottom?.desktop || 20}px`,
					"--body-margin-bottom-tablet": `${bodyMarginBottom?.tablet || 16}px`,
					"--body-margin-bottom-mobile": `${bodyMarginBottom?.mobile || 12}px`,
					"--body-text-align": bodyTextAlign || 'left',
					"--body-font-weight": bodyFontWeight || '300',
					"--stacked-image-height-desktop": `${stackedImageHeight?.desktop?.value || 500}${stackedImageHeight?.desktop?.unit || 'px'}`,
					"--stacked-image-height-tablet": `${stackedImageHeight?.tablet?.value || 400}${stackedImageHeight?.tablet?.unit || 'px'}`,
					"--stacked-image-height-mobile": `${stackedImageHeight?.mobile?.value || 300}${stackedImageHeight?.mobile?.unit || 'px'}`,
					"--stacked-content-width-desktop": `${stackedContentWidth?.desktop || 50}%`,
					"--stacked-content-width-tablet": `${stackedContentWidth?.tablet || 70}%`,
					"--stacked-content-width-mobile": `${stackedContentWidth?.mobile || 90}%`,
				"--overlay-background": (overlayGradientType && overlayGradientType !== 'none')
					? (
						overlayGradientType === 'linear'
							? `linear-gradient(${overlayGradientDirection || '135deg'}, ${overlayGradientColor1 || '#000000'}${toAlphaHex(overlayOpacity ?? 0.5)}, ${overlayGradientColor2 || '#000000'}${toAlphaHex(overlayOpacity ?? 0.5)})`
							: `radial-gradient(ellipse at ${overlayGradientOrigin || 'center'}, ${overlayGradientColor1 || '#000000'}${toAlphaHex(overlayOpacity ?? 0.5)}, ${overlayGradientColor2 || '#000000'}${toAlphaHex(overlayOpacity ?? 0.5)})`
					)
					: (overlayBackgroundColor || '#000000'),
				"--overlay-opacity": `${(overlayGradientType && overlayGradientType !== 'none') ? 1 : (overlayOpacity ?? 0.5)}`,
					"--overlay-content-width-desktop": `${overlayContentWidth?.desktop || 50}%`,
					"--overlay-content-width-tablet": `${overlayContentWidth?.tablet || 70}%`,
					"--overlay-content-width-mobile": `${overlayContentWidth?.mobile || 90}%`,
					"--overlay-text-color": overlayTextColor || '#ffffff',
					"--overlay-header-color": overlayHeaderColor || '#ffffff',
					"--overlay-body-color": overlayBodyColor || '#ffffff',
					"--margin-top-desktop": `${marginTop?.desktop || 0}px`,
					"--margin-right-desktop": `${marginRight?.desktop || 0}px`,
					"--margin-bottom-desktop": `${marginBottom?.desktop || 0}px`,
					"--margin-left-desktop": `${marginLeft?.desktop || 0}px`,
					"--margin-top-tablet": `${marginTop?.tablet || 0}px`,
					"--margin-right-tablet": `${marginRight?.tablet || 0}px`,
					"--margin-bottom-tablet": `${marginBottom?.tablet || 0}px`,
					"--margin-left-tablet": `${marginLeft?.tablet || 0}px`,
					"--margin-top-mobile": `${marginTop?.mobile || 0}px`,
					"--margin-right-mobile": `${marginRight?.mobile || 0}px`,
					"--margin-bottom-mobile": `${marginBottom?.mobile || 0}px`,
					"--margin-left-mobile": `${marginLeft?.mobile || 0}px`,
				// Deprecated single gradient kept for backward compat but not used in styles
				"--gradient-type": gradientType || 'none',
				"--gradient-color-1": gradientColor1 || '#ff4444',
				"--gradient-color-2": gradientColor2 || '#ff6666',
				"--gradient-direction": gradientDirection || '135deg',
				"--gradient-opacity": gradientOpacity || 0.1,
				// Container settings
				"--container-max-width": `${containerMaxWidth?.desktop?.value ?? 1200}${containerMaxWidth?.desktop?.unit ?? "px"}`,
				"--container-max-width-tablet": `${containerMaxWidth?.tablet?.value ?? 100}${containerMaxWidth?.tablet?.unit ?? "%"}`,
				"--container-max-width-mobile": `${containerMaxWidth?.mobile?.value ?? 100}${containerMaxWidth?.mobile?.unit ?? "%"}`,
				"--content-border-radius": `${contentBorderRadius || 0}px`,
				},
			})}
		>
			<div className={`cta-block__container ${containerMode === "constrained" ? "is-constrained" : ""}`}>
				{layout === "split-left" && (
				<div className="ad-cta2-container ad-split">
					<div 
						className="ad-split__image"
						style={{
							backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : 'none',
							backgroundSize: backgroundSize || 'cover',
							backgroundPosition: backgroundPosition || 'center',
							width: `${imageWidth}%`
						}}
					>
						<div className="ad-image-overlay"></div>
					</div>
					<div 
						className="ad-split__content"
						style={{
							width: `${100 - imageWidth}%`,
							justifyContent: contentJustify || 'center',
							alignItems: contentAlign || 'flex-start',
							paddingTop: `${contentPadding?.top || 20}px`,
							paddingRight: `${contentPadding?.right || 20}px`,
							paddingBottom: `${contentPadding?.bottom || 20}px`,
							paddingLeft: `${contentPadding?.left || 20}px`,
							backgroundColor: contentBackgroundColor || '#f5f5f5'
						}}
					>
						<RichText.Content
							tagName="h1"
							className="ad-split__content__header"
							value={headerText}
						/>
						<RichText.Content
							tagName="p"
							className="ad-split__content__text"
							value={bodyText}
						/>
						<div className="ad-split__content__button">
							<InnerBlocks.Content />
						</div>
					</div>
				</div>
			)}
			{layout === "split-right" && (
				<div className="ad-cta2-container ad-split">
					<div 
						className="ad-split__content"
						style={{
							width: `${100 - imageWidth}%`,
							justifyContent: contentJustify || 'center',
							alignItems: contentAlign || 'flex-start',
							paddingTop: `${contentPadding?.top || 20}px`,
							paddingRight: `${contentPadding?.right || 20}px`,
							paddingBottom: `${contentPadding?.bottom || 20}px`,
							paddingLeft: `${contentPadding?.left || 20}px`,
							backgroundColor: contentBackgroundColor || '#f5f5f5'
						}}
					>
						<RichText.Content
							tagName="h1"
							className="ad-split__content__header"
							value={headerText}
						/>
						<RichText.Content
							tagName="p"
							className="ad-split__content__text"
							value={bodyText}
						/>
						<div className="ad-split__content__button">
							<InnerBlocks.Content />
						</div>
						</div>
					<div 
						className="ad-split__image"
						style={{
							backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : 'none',
							backgroundSize: backgroundSize || 'cover',
							backgroundPosition: backgroundPosition || 'center',
							width: `${imageWidth}%`
						}}
					>
						<div className="ad-image-overlay"></div>
					</div>
				</div>
			)}

			{layout === "stacked-top" && (
				<div className="ad-cta2-container ad-stacked">
					<div 
						className="ad-stacked__image"
						style={{
							backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : 'none',
							backgroundSize: backgroundSize || 'cover',
							backgroundPosition: backgroundPosition || 'center',
							height: `${stackedImageHeight?.desktop || 500}px`
						}}
					>
						<div className="ad-image-overlay"></div>
					</div>
					<div 
						className="ad-stacked__content-container"
						style={{
							backgroundColor: contentBackgroundColor || '#f5f5f5'
						}}
					>
						<div 
							className="ad-stacked__content"
							style={{
								justifyContent: contentJustify || 'center',
								alignItems: contentAlign || 'center',
								paddingTop: `${contentPadding?.top || 20}px`,
								paddingRight: `${contentPadding?.right || 20}px`,
								paddingBottom: `${contentPadding?.bottom || 20}px`,
								paddingLeft: `${contentPadding?.left || 20}px`
							}}
						>
							<RichText.Content
								tagName="h1"
								className="ad-stacked__content__header"
								value={headerText}
							/>
							<RichText.Content
								tagName="p"
								className="ad-stacked__content__text"
								value={bodyText}
							/>
						<div className="ad-stacked__content__button">
							<InnerBlocks.Content />
						</div>
						</div>
					</div>
				</div>
			)}

			{layout === "stacked-bottom" && (
				<div className="ad-cta2-container ad-stacked">
					<div 
						className="ad-stacked__content-container"
						style={{
							backgroundColor: contentBackgroundColor || '#f5f5f5'
						}}
					>
						<div 
							className="ad-stacked__content"
							style={{
								justifyContent: contentJustify || 'center',
								alignItems: contentAlign || 'center',
								paddingTop: `${contentPadding?.top || 20}px`,
								paddingRight: `${contentPadding?.right || 20}px`,
								paddingBottom: `${contentPadding?.bottom || 20}px`,
							paddingLeft: `${contentPadding?.left || 20}px`
						}}
					>
						<RichText.Content
							tagName="h1"
							className="ad-stacked__content__header"
							value={headerText}
						/>
						<RichText.Content
							tagName="p"
							className="ad-stacked__content__text"
							value={bodyText}
						/>
					<div className="ad-stacked__content__button">
						<InnerBlocks.Content />
					</div>
					</div>
				</div>
				<div 
					className="ad-stacked__image"
					style={{
						backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : 'none',
						backgroundSize: backgroundSize || 'cover',
						backgroundPosition: backgroundPosition || 'center',
						height: `${stackedImageHeight?.desktop || 500}px`
					}}
				>
					<div className="ad-image-overlay"></div>
				</div>
			</div>
		)}

		{(layout === "overlay-top-left" ||
				layout === "overlay-top-right" ||
				layout === "overlay-bottom-left" ||
				layout === "overlay-bottom-right" ||
				layout === "overlay-center") && (
				<div 
					className="ad-cta2-container ad-overlay"
					style={{
						backgroundImage: backgroundImage ? `url(${backgroundImage.url})` : 'none',
						backgroundSize: backgroundSize || 'cover',
						backgroundPosition: backgroundPosition || 'center',
					}}
				>
					<div 
						className={`ad-overlay__overlay ad-${layout}`}
						// Background and opacity come from CSS variables
					></div>
					<div 
						className={`ad-overlay__content ad-${layout}__content`}
						style={{
							width: `${overlayContentWidth?.desktop || 50}%`,
							justifyContent: contentJustify || 'center',
							paddingTop: `${contentPadding?.top || 20}px`,
							paddingRight: `${contentPadding?.right || 20}px`,
							paddingBottom: `${contentPadding?.bottom || 20}px`,
							paddingLeft: `${contentPadding?.left || 20}px`
						}}
					>
						<RichText.Content
							tagName="h1"
							className={`ad-overlay__content__header ad-${layout}__header`}
							value={headerText}
							style={{ 
								color: overlayHeaderColor || '#ffffff',
								fontSize: `${headerFontSize?.desktop || 40}px`,
								fontWeight: headerFontWeight || '300',
								marginBottom: `${headerMarginBottom?.desktop || 20}px`
							}}
						/>
						<RichText.Content
							tagName="p"
							className={`ad-overlay__content__text ad-${layout}__text`}
							value={bodyText}
							style={{ 
								color: overlayBodyColor || '#ffffff',
								fontSize: `${bodyFontSize?.desktop || 16}px`,
								fontWeight: bodyFontWeight || '300',
								marginBottom: `${bodyMarginBottom?.desktop || 20}px`
							}}
						/>
						<div className="ad-overlay__content__button">
							<InnerBlocks.Content />
				</div>
			</div>
			</div>
			)}
			</div>
		</div>
	);
}
