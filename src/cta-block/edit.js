import { __ } from '@wordpress/i18n';
import { useBlockProps, InspectorControls, RichText, MediaUpload, MediaUploadCheck } from '@wordpress/block-editor';
import {
	PanelBody,
	TextControl,
	RangeControl,
	ColorPicker,
	Button,
	TextareaControl,
	ToggleControl
} from '@wordpress/components';
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
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

	const blockProps = useBlockProps({
		className: 'cta-block-editor',
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
			'--carousel-text-color': textColor || '#ffffff'
		}
	});

	const updateCarouselItem = (index, field, value) => {
		const newItems = [...carouselItems];
		newItems[index] = { ...newItems[index], [field]: value };
		setAttributes({ carouselItems: newItems });
	};

	const addCarouselItem = () => {
		const newItem = {
			id: Date.now(),
			title: 'New Service',
			description: 'Add your service description here.',
			imageUrl: '',
			imageId: 0
		};
		setAttributes({ carouselItems: [...carouselItems, newItem] });
	};

	const removeCarouselItem = (index) => {
		if (carouselItems.length > 1) {
			const newItems = carouselItems.filter((_, i) => i !== index);
			setAttributes({ carouselItems: newItems });
		}
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Content Settings" initialOpen={true}>
					<TextControl
						label="Main Title"
						value={mainTitle}
						onChange={(value) => setAttributes({ mainTitle: value })}
					/>
					<TextControl
						label="Subtitle"
						value={subtitle}
						onChange={(value) => setAttributes({ subtitle: value })}
					/>
				</PanelBody>

				<PanelBody title="Carousel Items" initialOpen={false}>
					{carouselItems.map((item, index) => (
						<div key={item.id} style={{ marginBottom: '20px', padding: '15px', border: '1px solid #ddd', borderRadius: '5px' }}>
							<TextControl
								label={`Carousel Item ${index + 1} Title`}
								value={item.title}
								onChange={(value) => updateCarouselItem(index, 'title', value)}
								placeholder="Enter service title..."
							/>
							
							<TextareaControl
								label={`Carousel Item ${index + 1} Description`}
								value={item.description}
								onChange={(value) => updateCarouselItem(index, 'description', value)}
								rows={3}
								placeholder="Enter service description..."
							/>
							
							<MediaUploadCheck>
								<MediaUpload
									onSelect={(media) => {
										console.log('Media selected:', media);
										const newItems = [...carouselItems];
										newItems[index] = { 
											...newItems[index], 
											imageUrl: media.url,
											imageId: media.id 
										};
										setAttributes({ carouselItems: newItems });
									}}
									allowedTypes={['image']}
									value={item.imageId}
									render={({ open }) => (
										<div style={{ marginTop: '10px' }}>
											<Button onClick={open} isPrimary={!item.imageUrl}>
												{item.imageUrl ? 'Change Background Image' : 'Select Background Image'}
											</Button>
											{item.imageUrl && (
												<div style={{ marginTop: '10px' }}>
													<img 
														src={item.imageUrl} 
														alt="" 
														style={{ width: '100%', maxWidth: '200px', height: 'auto', borderRadius: '5px' }}
													/>
													<Button
														isDestructive
														isSmall
														onClick={() => {
															const newItems = [...carouselItems];
															newItems[index] = { 
																...newItems[index], 
																imageUrl: '',
																imageId: 0 
															};
															setAttributes({ carouselItems: newItems });
														}}
														style={{ marginTop: '5px', display: 'block' }}
													>
														Remove Image
													</Button>
												</div>
											)}
										</div>
									)}
								/>
							</MediaUploadCheck>
							
							{carouselItems.length > 1 && (
								<Button
									isDestructive
									isSmall
									onClick={() => removeCarouselItem(index)}
									style={{ marginTop: '10px' }}
								>
									Remove Item
								</Button>
							)}
						</div>
					))}
					<Button isPrimary onClick={addCarouselItem}>
						Add Carousel Item
					</Button>
				</PanelBody>

				<PanelBody title="Background Colors" initialOpen={false}>
					<div style={{ marginBottom: '15px' }}>
						<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
							Block Background Color
						</label>
						<ColorPicker
							color={backgroundColor}
							onChangeComplete={(color) => setAttributes({ backgroundColor: color.hex })}
							disableAlpha
						/>
					</div>
					
					<div style={{ marginBottom: '15px' }}>
						<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
							Gradient Color 1 (Primary)
						</label>
						<ColorPicker
							color={gradientColor1}
							onChangeComplete={(color) => setAttributes({ gradientColor1: color.hex })}
							disableAlpha
						/>
					</div>
					
					<div style={{ marginBottom: '15px' }}>
						<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
							Gradient Color 2 (Secondary)
						</label>
						<ColorPicker
							color={gradientColor2}
							onChangeComplete={(color) => setAttributes({ gradientColor2: color.hex })}
							disableAlpha
						/>
					</div>
					
					<RangeControl
						label="Gradient Opacity"
						value={gradientOpacity}
						onChange={(value) => setAttributes({ gradientOpacity: value })}
						min={0}
						max={1}
						step={0.1}
					/>
				</PanelBody>

				<PanelBody title="Text Colors" initialOpen={false}>
					<div style={{ marginBottom: '15px' }}>
						<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
							Main Title Color
						</label>
						<ColorPicker
							color={titleColor}
							onChangeComplete={(color) => setAttributes({ titleColor: color.hex })}
							disableAlpha
						/>
					</div>
					
					<div style={{ marginBottom: '15px' }}>
						<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
							Subtitle Color
						</label>
						<ColorPicker
							color={subtitleColor}
							onChangeComplete={(color) => setAttributes({ subtitleColor: color.hex })}
							disableAlpha
						/>
					</div>
					
					<div style={{ marginBottom: '15px' }}>
						<label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>
							Carousel Text Color (Titles & Descriptions)
						</label>
						<ColorPicker
							color={textColor}
							onChangeComplete={(color) => setAttributes({ textColor: color.hex })}
							disableAlpha
						/>
					</div>
				</PanelBody>

				<PanelBody title="Main Section Typography" initialOpen={false}>
					<RangeControl
						label="Main Title Font Size"
						value={titleFontSize}
						onChange={(value) => setAttributes({ titleFontSize: value })}
						min={24}
						max={100}
					/>
					<RangeControl
						label="Main Title Font Weight"
						value={parseInt(mainTitleFontWeight)}
						onChange={(value) => setAttributes({ mainTitleFontWeight: value.toString() })}
						min={100}
						max={900}
						step={100}
					/>
					<RangeControl
						label="Subtitle Font Size"
						value={subtitleFontSize}
						onChange={(value) => setAttributes({ subtitleFontSize: value })}
						min={14}
						max={50}
					/>
					<RangeControl
						label="Subtitle Font Weight"
						value={parseInt(subtitleFontWeight)}
						onChange={(value) => setAttributes({ subtitleFontWeight: value.toString() })}
						min={100}
						max={900}
						step={100}
					/>
				</PanelBody>

				<PanelBody title="Carousel Typography" initialOpen={false}>
					<RangeControl
						label="Carousel Font Size"
						value={carouselFontSize}
						onChange={(value) => setAttributes({ carouselFontSize: value })}
						min={14}
						max={40}
					/>
					<RangeControl
						label="Carousel Title Font Weight"
						value={parseInt(titleFontWeight)}
						onChange={(value) => setAttributes({ titleFontWeight: value.toString() })}
						min={100}
						max={900}
						step={100}
					/>
					<RangeControl
						label="Carousel Description Font Weight"
						value={parseInt(descriptionFontWeight)}
						onChange={(value) => setAttributes({ descriptionFontWeight: value.toString() })}
						min={100}
						max={900}
						step={100}
					/>
				</PanelBody>

				<PanelBody title="Animation Settings" initialOpen={false}>
					<RangeControl
						label="Animation Speed"
						value={animationSpeed}
						onChange={(value) => setAttributes({ animationSpeed: value })}
						min={0.1}
						max={3}
						step={0.1}
						help="Controls the speed of GSAP animations. Lower values = slower, higher values = faster."
					/>
					<RangeControl
						label="Carousel Speed (ms)"
						value={carouselSpeed}
						onChange={(value) => setAttributes({ carouselSpeed: value })}
						min={1000}
						max={8000}
						step={500}
						help="Time between carousel transitions in milliseconds."
					/>
				</PanelBody>

				<PanelBody title="Autoplay Settings" initialOpen={false}>
					<ToggleControl
						label="Enable Autoplay"
						checked={autoplay}
						onChange={(value) => setAttributes({ autoplay: value })}
					/>
					{autoplay && (
						<RangeControl
							label="Autoplay Delay (ms)"
							value={autoplayDelay}
							onChange={(value) => setAttributes({ autoplayDelay: value })}
							min={1000}
							max={10000}
							step={500}
							help="Time between automatic slide transitions."
						/>
					)}
				</PanelBody>

				<PanelBody title="Block Settings" initialOpen={false}>
					<TextControl
						label="Block ID"
						value={blockId}
						onChange={(value) => setAttributes({ blockId: value })}
						help="Add a custom ID to this block for CSS targeting or anchor links."
					/>
				</PanelBody>
			</InspectorControls>

			<div {...blockProps}>
				<div className="cta-container">
					{/* Glowing gradient background */}
					<div className="gradient-glow"></div>
					
					{/* Main content */}
					<div className="cta-content">
						<RichText
							tagName="h1"
							className="cta-title"
							value={mainTitle}
							onChange={(value) => setAttributes({ mainTitle: value })}
							placeholder="Enter main title..."
						/>
						
						<RichText
							tagName="h2"
							className="cta-subtitle"
							value={subtitle}
							onChange={(value) => setAttributes({ subtitle: value })}
							placeholder="Enter subtitle..."
						/>
						
						{/* Carousel preview */}
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
		</>
	);
}