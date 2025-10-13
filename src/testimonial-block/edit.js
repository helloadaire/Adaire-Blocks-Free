import {
	useBlockProps,
	InspectorControls,
	MediaUpload,
	MediaUploadCheck,
} from "@wordpress/block-editor";
import {
	PanelBody,
	ColorPicker,
	TextControl,
	ToggleControl,
	Button,
	BaseControl,
	ButtonGroup,
	SelectControl,
} from "@wordpress/components";
import { __ } from "@wordpress/i18n";
import { useEffect, useRef, useCallback, useState } from "@wordpress/element";
import { desktop, tablet, mobile } from '@wordpress/icons';
import Swiper from 'swiper/bundle';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import UpgradeNotice from '../components/UpgradeNotice';

const FREE_TIER_ITEM_LIMIT = 3;

export default function Edit({ attributes, setAttributes }) {
	const [deviceType, setDeviceType] = useState('desktop');
	
	const {
		textColor,
		arrowColor,
		dotColor,
		fontSize,
		slidesPerView,
		spaceBetween,
		gap,
		logoSize,
		loop,
		navigation,
		pagination,
		scrollbar,
		blockId,
		testimonials,
		maxWidth,
		cardBackgroundColor,
		blockBackgroundColor,
		logoAlignment,
		containerMode,
		containerMaxWidth,
	} = attributes;

	const swiperRef = useRef(null);
	const swiperInstanceRef = useRef(null);
	const updateTimeoutRef = useRef(null);

	const blockProps = useBlockProps({
		className: "ad-carousel-text-block",
		style: {
			color: textColor || "#000000",
			fontSize: `${fontSize || 16}px`,
			"--text-color": textColor || "#000000",
			"--font-size": `${fontSize || 16}px`,
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
		"data-slides": slidesPerView || 3,
		"data-arrowcolor": arrowColor || "#ff0000",
		id: blockId || undefined
	});

	// Initialize Swiper in editor
	useEffect(() => {
		if (updateTimeoutRef.current) {
			clearTimeout(updateTimeoutRef.current);
		}
		
		updateTimeoutRef.current = setTimeout(() => {
			if (swiperRef.current && testimonials.length > 0) {
				// Get configuration from attributes
				const slidesPerViewValue = parseInt(slidesPerView) || 3;
				const spaceBetweenValue = parseInt(spaceBetween) || 50;
				const loopValue = loop;
				const navigationValue = navigation;
				const paginationValue = pagination;
				const scrollbarValue = scrollbar;
				
				// Count actual slides
				const totalSlides = testimonials.length;
				
				// Loop only works properly if we have more slides than slidesPerView
				const shouldLoop = loopValue && totalSlides >= 3;

				// Check if we need to reinitialize or just update
				const needsReinit = !swiperInstanceRef.current || 
					swiperInstanceRef.current.params.slidesPerView !== slidesPerViewValue ||
					swiperInstanceRef.current.params.spaceBetween !== spaceBetweenValue ||
					swiperInstanceRef.current.params.loop !== shouldLoop;

				if (needsReinit) {
					// Destroy existing instance if it exists
					if (swiperInstanceRef.current) {
						swiperInstanceRef.current.destroy(true, true);
						swiperInstanceRef.current = null;
					}

					// Use requestAnimationFrame for smoother updates
					requestAnimationFrame(() => {
						try {
							const swiperInstance = new Swiper(swiperRef.current, {
								// Basic configuration
								direction: 'horizontal',
								loop: false, // Disable loop in preview
								spaceBetween: spaceBetweenValue,
								slidesPerView: slidesPerViewValue,
								centeredSlides: true,
								initialSlide: 0,
								allowTouchMove: false, // Disable dragging/swiping
								simulateTouch: false, // Disable touch simulation
								enabled: false, // Completely disable Swiper functionality
								
								// Disable all navigation in preview
								pagination: false,
								navigation: false,
								scrollbar: false,
								
								// Responsive breakpoints
								breakpoints: {
									320: {
										slidesPerView: 1,
										spaceBetween: 20,
										centeredSlides: false,
										loop: loopValue && totalSlides >= 3,
									},
									768: {
										slidesPerView: Math.min(2.2, slidesPerViewValue),
										spaceBetween: 30,
										centeredSlides: true,
										loop: loopValue && totalSlides >= 3,
									},
									1024: {
										slidesPerView: Math.min(slidesPerViewValue + 0.5, totalSlides),
										spaceBetween: spaceBetweenValue,
										centeredSlides: true,
										loop: loopValue && totalSlides >= 3,
									}
								}
							});
							
							swiperInstanceRef.current = swiperInstance;
							
						} catch (error) {
							console.error('Error creating Swiper in editor:', error);
						}
					});
				} else {
					// Just update the existing instance without reinitializing
					if (swiperInstanceRef.current) {
						// Update navigation visibility
						if (navigationValue) {
							swiperInstanceRef.current.navigation.init();
							swiperInstanceRef.current.navigation.update();
						} else {
							swiperInstanceRef.current.navigation.destroy();
						}
						
						// Update pagination visibility
						if (paginationValue) {
							swiperInstanceRef.current.pagination.init();
							swiperInstanceRef.current.pagination.render();
							swiperInstanceRef.current.pagination.update();
						} else {
							swiperInstanceRef.current.pagination.destroy();
						}
						
						// Update scrollbar visibility
						if (scrollbarValue) {
							swiperInstanceRef.current.scrollbar.init();
							swiperInstanceRef.current.scrollbar.updateSize();
						} else {
							swiperInstanceRef.current.scrollbar.destroy();
						}
					}
				}
			}
		}, 150); // 150ms debounce

		// Cleanup function
		return () => {
			if (updateTimeoutRef.current) {
				clearTimeout(updateTimeoutRef.current);
			}
			if (swiperInstanceRef.current) {
				swiperInstanceRef.current.destroy(true, true);
				swiperInstanceRef.current = null;
			}
		};
	}, [testimonials, slidesPerView, spaceBetween, loop, navigation, pagination, scrollbar, arrowColor, dotColor]);

	// Testimonial management functions
	const updateTestimonial = (index, field, value) => {
		const updatedTestimonials = [...testimonials];
		updatedTestimonials[index] = {
			...updatedTestimonials[index],
			[field]: value,
		};
		setAttributes({ testimonials: updatedTestimonials });
	};

	const addTestimonial = () => {
		if (testimonials.length >= FREE_TIER_ITEM_LIMIT) {
			return; // Don't add if limit reached
		}
		const newTestimonial = {
			companyName: "New Company",
			companyLogo: "",
			quote: "Enter your testimonial quote here...",
			authorName: "Author Name",
			authorTitle: "Author Title",
		};
		setAttributes({ testimonials: [...testimonials, newTestimonial] });
	};

	const removeTestimonial = (index) => {
		const updatedTestimonials = testimonials.filter((_, i) => i !== index);
		setAttributes({ testimonials: updatedTestimonials });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody title="Container Settings" initialOpen={true}>
					<ButtonGroup>
						{[
							{ label: __('Full width', 'testimonial-block'), value: 'full' },
							{ label: __('Constrained', 'testimonial-block'), value: 'constrained' },
						].map(opt => (
							<Button
								key={opt.value}
								isPrimary={containerMode === opt.value}
								isSecondary={containerMode !== opt.value}
								onClick={() => setAttributes({ containerMode: opt.value })}
							>{opt.label}</Button>
						))}
					</ButtonGroup>
					{containerMode === 'constrained' && (
						<>
							<p style={{ marginTop: '16px', marginBottom: '8px', fontWeight: 600 }}>
								{__('Max Width', 'testimonial-block')}
							</p>
							<ButtonGroup style={{ marginBottom: '12px' }}>
								<Button
									icon={desktop}
									isPrimary={deviceType === 'desktop'}
									onClick={() => setDeviceType('desktop')}
									label={__('Desktop', 'testimonial-block')}
								/>
								<Button
									icon={tablet}
									isPrimary={deviceType === 'tablet'}
									onClick={() => setDeviceType('tablet')}
									label={__('Tablet', 'testimonial-block')}
								/>
								<Button
									icon={mobile}
									isPrimary={deviceType === 'mobile'}
									onClick={() => setDeviceType('mobile')}
									label={__('Mobile', 'testimonial-block')}
								/>
							</ButtonGroup>
							<div style={{ display: 'flex', gap: '8px' }}>
								<TextControl
									type="number"
									value={
										containerMaxWidth?.[deviceType]?.value ?? 
										(deviceType === 'desktop' ? (containerMaxWidth?.value ?? 1200) : 100)
									}
									onChange={(v) =>
										setAttributes({
											containerMaxWidth: {
												...(containerMaxWidth || {}),
												[deviceType]: {
													...(containerMaxWidth?.[deviceType] || {}),
													value: Number(v),
												},
											},
										})
									}
								/>
								<ButtonGroup>
									{['px', '%', 'rem', 'vw'].map((u) => (
										<Button
											key={u}
											isPrimary={
												(containerMaxWidth?.[deviceType]?.unit ??
													(deviceType === 'desktop' ? (containerMaxWidth?.unit ?? 'px') : '%')) === u
											}
											isSecondary={
												(containerMaxWidth?.[deviceType]?.unit ??
													(deviceType === 'desktop' ? (containerMaxWidth?.unit ?? 'px') : '%')) !== u
											}
											onClick={() =>
												setAttributes({
													containerMaxWidth: {
														...(containerMaxWidth || {}),
														[deviceType]: {
															...(containerMaxWidth?.[deviceType] || {}),
															unit: u,
														},
													},
												})
											}
										>
											{u}
										</Button>
									))}
								</ButtonGroup>
							</div>
						</>
					)}
				</PanelBody>

				<PanelBody title="Carousel Settings" initialOpen={true}>
					<TextControl
						label="Slides Per View"
						value={slidesPerView}
						type="number"
						onChange={(value) => {
							const num = Number(value);
							if (!isNaN(num) && value !== "") {
								setAttributes({ slidesPerView: num });
							}
						}}
						min={1}
						max={5}
					/>

					<TextControl
						label="Space Between Slides (px)"
						value={spaceBetween}
						type="number"
						onChange={(value) => {
							const num = Number(value);
							if (!isNaN(num) && value !== "") {
								setAttributes({ spaceBetween: num });
							}
						}}
						min={0}
						max={200}
					/>

					<TextControl
						label="Card Gap (px)"
						value={gap}
						type="number"
						onChange={(value) => {
							const num = Number(value);
							if (!isNaN(num) && value !== "") {
								setAttributes({ gap: num });
							}
						}}
						min={0}
						max={100}
					/>

					<ToggleControl
						label="Enable Loop"
						checked={loop}
						onChange={(value) => setAttributes({ loop: value })}
						help={
							loop
								? "Carousel will loop continuously"
								: "Carousel will stop at the end"
						}
					/>

					<ToggleControl
						label="Show Navigation Arrows"
						checked={navigation}
						onChange={(value) => setAttributes({ navigation: value })}
						help={
							navigation
								? "Navigation arrows will be visible"
								: "Navigation arrows will be hidden"
						}
					/>
					{/* <ColorPicker
						color={textColor}
						onChangeComplete={(color) =>
							setAttributes({ textColor: color.hex })
						}
						disableAlpha
					/> */}

					<BaseControl label="Arrow Color">
						<ColorPicker
							color={arrowColor}
							label="Arrow Color"
							onChangeComplete={(color) => {
								setAttributes({ arrowColor: color.hex });
							}}
						/>
					</BaseControl>
					<BaseControl label="Dot Color">
						<ColorPicker
							color={dotColor}
							label="Dot Color"
							onChangeComplete={(color) => {
								setAttributes({ dotColor: color.hex });
							}}
						/>
					</BaseControl>

					<ToggleControl
						label="Show Pagination Dots"
						checked={pagination}
						onChange={(value) => setAttributes({ pagination: value })}
						help={
							pagination
								? "Pagination dots will be visible"
								: "Pagination dots will be hidden"
						}
					/>

					<ToggleControl
						label="Show Scrollbar"
						checked={scrollbar}
						onChange={(value) => setAttributes({ scrollbar: value })}
						help={
							scrollbar
								? "Scrollbar will be visible"
								: "Scrollbar will be hidden"
						}
					/>

					<TextControl
						label="Max Width (px)"
						value={maxWidth}
						type="number"
						onChange={(value) => {
							const num = Number(value);
							if (!isNaN(num) && value !== "") {
								setAttributes({ maxWidth: num });
							}
						}}
						min={300}
						max={2000}
						help="Maximum width of the carousel container"
					/>
				</PanelBody>

				<PanelBody title="Testimonials" initialOpen={true}>
					{testimonials.map((testimonial, index) => (
						<div
							key={index}
							style={{
								marginBottom: "20px",
								padding: "15px",
								border: "1px solid #ddd",
								borderRadius: "5px",
							}}
						>
							<h4 style={{ margin: "0 0 10px 0" }}>Testimonial {index + 1}</h4>

							<TextControl
								label="Company Name"
								value={testimonial.companyName}
								onChange={(value) =>
									updateTestimonial(index, "companyName", value)
								}
							/>

							<div style={{ marginBottom: "10px" }}>
								<label
									style={{
										display: "block",
										marginBottom: "5px",
										fontWeight: "bold",
									}}
								>
									Company Logo
								</label>
								<MediaUploadCheck>
									<MediaUpload
										onSelect={(media) =>
											updateTestimonial(index, "companyLogo", media.url)
										}
										allowedTypes={["image"]}
										value={testimonial.companyLogo}
										render={({ open }) => (
											<div>
												{testimonial.companyLogo ? (
													<div
														style={{
															display: "flex",
															alignItems: "center",
															gap: "10px",
														}}
													>
														<img
															src={testimonial.companyLogo}
															alt="Company Logo"
															style={{
																width: "60px",
																height: "40px",
																objectFit: "contain",
																border: "1px solid #ddd",
																borderRadius: "4px",
															}}
														/>
														<Button onClick={open} isSecondary isSmall>
															Change Logo
														</Button>
														<Button
															onClick={() =>
																updateTestimonial(index, "companyLogo", "")
															}
															isDestructive
															isSmall
														>
															Remove
														</Button>
													</div>
												) : (
													<Button onClick={open} isPrimary isSmall>
														Upload Logo
													</Button>
												)}
											</div>
										)}
									/>
								</MediaUploadCheck>
							</div>

							<TextControl
								label="Quote"
								value={testimonial.quote}
								onChange={(value) => updateTestimonial(index, "quote", value)}
								multiline
								rows={3}
							/>

							<TextControl
								label="Author Name"
								value={testimonial.authorName}
								onChange={(value) =>
									updateTestimonial(index, "authorName", value)
								}
							/>

							<TextControl
								label="Author Title"
								value={testimonial.authorTitle}
								onChange={(value) =>
									updateTestimonial(index, "authorTitle", value)
								}
							/>

							<Button
								isDestructive
								isSmall
								onClick={() => removeTestimonial(index)}
								style={{ marginTop: "10px" }}
							>
								Remove Testimonial
							</Button>
						</div>
					))}

					<Button
						isPrimary
						onClick={addTestimonial}
						style={{ marginTop: "10px" }}
						disabled={ testimonials.length >= FREE_TIER_ITEM_LIMIT }
					>
						Add New Testimonial
					</Button>
					{ testimonials.length >= FREE_TIER_ITEM_LIMIT && (
						<UpgradeNotice itemType="testimonial" />
					) }
				</PanelBody>

				<PanelBody title="Logo Settings" initialOpen={false}>
					<SelectControl
						label="Logo Alignment"
						value={logoAlignment}
						options={[
							{ label: 'Left', value: 'flex-start' },
							{ label: 'Center', value: 'center' },
							{ label: 'Right', value: 'flex-end' },
						]}
						onChange={(value) => setAttributes({ logoAlignment: value })}
					/>
					
					<TextControl
						label="Logo Size (px)"
						value={logoSize}
						type="number"
						onChange={(value) => {
							const num = Number(value);
							if (!isNaN(num) && value !== "") {
								setAttributes({ logoSize: num });
							}
						}}
						min={20}
						max={1000}
					/>
				</PanelBody>

				<PanelBody title="Color Settings" initialOpen={false}>
					<BaseControl label="Text Color" help="Color for quote text, author name, and title">
						<ColorPicker
							color={textColor}
							onChangeComplete={(color) =>
								setAttributes({ textColor: color.hex })
							}
							disableAlpha
						/>
					</BaseControl>

					<BaseControl label="Card Background Color" help="Background color for testimonial cards">
						<ColorPicker
							color={cardBackgroundColor}
							onChangeComplete={(color) =>
								setAttributes({ cardBackgroundColor: color.hex })
							}
							disableAlpha
						/>
					</BaseControl>

					<BaseControl label="Block Background Color" help="Background color for the entire testimonial block section">
						<ColorPicker
							color={blockBackgroundColor || "#ffffff"}
							onChangeComplete={(color) =>
								setAttributes({ blockBackgroundColor: color.hex })
							}
							enableAlpha
						/>
					</BaseControl>
				</PanelBody>

				<PanelBody title="Text Settings" initialOpen={false}>
					<TextControl
						label="Font Size (px)"
						value={fontSize}
						type="number"
						onChange={(value) => {
							const num = Number(value);
							if (!isNaN(num) && value !== "") {
								setAttributes({ fontSize: num });
							}
						}}
						min={1}
					/>
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
				<div className="ad-carousel-text-block__testimonial-carousel">
					<div 
						className="swiper" 
						ref={swiperRef}
					>
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
															<div className="ad-carousel-text-block__logo-placeholder">
													{testimonial.companyName}
												</div>
											)}
										</div>
													<div className="ad-carousel-text-block__quote">"{testimonial.quote}"</div>
													<div className="ad-carousel-text-block__author">
														<div className="ad-carousel-text-block__name">{testimonial.authorName}</div>
														<div className="ad-carousel-text-block__title">{testimonial.authorTitle}</div>
										</div>
									</div>
								</div>
							))}
						</div>

						{/* Navigation elements hidden in preview for static display */}
					</div>
				</div>
			</div>
		</>
	);
}
