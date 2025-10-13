import { __ } from "@wordpress/i18n";
import { useBlockProps, InspectorControls } from "@wordpress/block-editor";
import { MediaUpload } from "@wordpress/media-utils";
import {
	PanelBody,
	TextControl,
	TextareaControl,
	Button,
	RangeControl,
	SelectControl,
	ToggleControl,
	ColorPicker,
	BaseControl,
	__experimentalNumberControl as NumberControl,
} from "@wordpress/components";
import { useState, useEffect, useRef } from "@wordpress/element";
import "./editor.scss";

export default function Edit({ attributes, setAttributes }) {
	const {
		agencyTitle,
		agencyDescription,
		ctaButtonText,
		slides,
		backgroundColor,
		gradientType,
		gradientAngle,
		gradientColor1,
		gradientColor2,
		gradientColor3,
		gradientStop1,
		gradientStop2,
		gradientStop3,
		textColor,
		titleFontSize,
		titleFontFamily,
		textFontSize,
		textFontFamily,
		slideTitleFontSize,
		slideDescriptionFontSize,
		slideTagFontSize,
		// Button styling attributes
		buttonColor,
		buttonBackgroundColor,
		buttonHoverColor,
		buttonHoverBackgroundColor,
		buttonStyle,
		underlineColor,
		blurAmount,
		fontSize,
		showIcon,
		hoverAnimation,
		buttonPadding,
		buttonMargin,
		zIndex,
		borderRadius,
		fontWeight,
	} = attributes;

	// Force re-renders when slides change
	const [updateTrigger, setUpdateTrigger] = useState(0);

	const blockProps = useBlockProps({
		className: "wp-block-create-block-portfolio-block",
		style: {
			color: textColor || "#ffffff",
			"--title-font-size": `${titleFontSize}px`,
			"--text-font-size": `${textFontSize}px`,
			"--slide-title-font-size": `${slideTitleFontSize}px`,
			"--slide-description-font-size": `${slideDescriptionFontSize}px`,
			"--slide-tag-font-size": `${slideTagFontSize}px`,
			// Button styling variables
			"--button-color": buttonColor || "#ffffff",
			"--button-bg-color": buttonBackgroundColor || "transparent",
			"--button-hover-color": buttonHoverColor || "#ffffff",
			"--button-hover-bg-color": buttonHoverBackgroundColor || "transparent",
			"--button-underline-color": underlineColor || "#ff4242",
			"--button-blur": blurAmount ? `${blurAmount}px` : "0px",
			"--button-font-size": fontSize ? `${fontSize}px` : "1.1rem",
			"--button-padding": buttonPadding || "0.2em 0",
			"--button-margin": buttonMargin || "20px 0",
			"--button-z-index": zIndex || "1",
			"--button-border-radius": borderRadius ? `${borderRadius}px` : "0px",
			"--button-font-weight": fontWeight || "500",
		},
	});

	// Initialize fields for existing slides
	useEffect(() => {
		if (slides && slides.length > 0) {
			const updatedSlides = slides.map((slide) => {
				const updatedSlide = { ...slide };
				// Ensure all required fields exist
				if (!updatedSlide.hasOwnProperty("newTagInput")) {
					updatedSlide.newTagInput = "";
				}
				if (!updatedSlide.hasOwnProperty("slideTags")) {
					updatedSlide.slideTags = [];
				}
				return updatedSlide;
			});

			// Only update if there are actual changes
			if (JSON.stringify(updatedSlides) !== JSON.stringify(slides)) {
				setAttributes({ slides: updatedSlides });
			}
		}
	}, []);

	console.log("Block props style:", blockProps.style);
	console.log("Current slides data:", slides);

	const updateSlide = (index, field, value) => {
		const newSlides = [...slides];
		newSlides[index] = { ...newSlides[index], [field]: value };
		console.log("Updated slide:", index, field, value, newSlides[index]); // Debug log
		console.log("All slides after update:", newSlides); // Debug log
		setAttributes({ slides: newSlides });
	};

	const addSlide = () => {
		// Find the highest existing ID to avoid duplicates
		const maxId =
			slides.length > 0 ? Math.max(...slides.map((slide) => slide.id)) : 0;
		const newId = maxId + 1;

		const newSlide = {
			id: newId,
			slideTitle: `New Project ${newId}`,
			slideDescription: "Add your project description here...",
			slideUrl: "https://example.com",
			slideTags: [],
			newTagInput: "",
			slideImg: "",
			slideImgId: 0,
		};
		console.log("Adding new slide with ID:", newId);
		setAttributes({ slides: [...slides, newSlide] });
	};

	const removeSlide = (index) => {
		const newSlides = slides.filter((_, i) => i !== index);
		setAttributes({ slides: newSlides });
	};

	const updateSlideTags = (index, tagsString) => {
		console.log("updateSlideTags called with:", tagsString);
		const tags = tagsString
			.split(",")
			.map((tag) => tag.trim())
			.filter((tag) => tag);
		console.log("Processed tags:", tags);
		updateSlide(index, "slideTags", tags);
	};

	const addTagToSlide = (index, newTag) => {
		if (!newTag || !newTag.trim()) return;

		const trimmedTag = newTag.trim();
		const currentSlide = slides[index];

		// Ensure slideTags exists
		const currentTags = Array.isArray(currentSlide.slideTags)
			? [...currentSlide.slideTags]
			: [];

		// Check if tag already exists (case insensitive)
		const tagExists = currentTags.some(
			(tag) => tag.toLowerCase() === trimmedTag.toLowerCase(),
		);

		if (!tagExists) {
			const newSlides = [...slides];
			newSlides[index] = {
				...currentSlide,
				slideTags: [...currentTags, trimmedTag],
				newTagInput: "",
			};

			setAttributes({ slides: newSlides });
		}
	};
	const removeTagFromSlide = (index, tagToRemove) => {
		const currentSlide = slides[index];
		const currentTags = Array.isArray(currentSlide.slideTags) 
			? currentSlide.slideTags.filter(tag => tag !== tagToRemove)
			: [];
		
		const newSlides = [...slides];
		newSlides[index] = {
			...currentSlide,
			slideTags: currentTags
		};
		
		setAttributes({ slides: newSlides });
	};

	// Ensure all slides have the newTagInput field
	const ensureSlideFields = (slide, index) => {
		if (!slide.hasOwnProperty("newTagInput")) {
			updateSlide(index, "newTagInput", "");
		}
		if (!slide.hasOwnProperty("slideTags")) {
			updateSlide(index, "slideTags", []);
		}
	};

	const onSelectImage = (index, media) => {
		console.log("Selected media:", media); // Debug log
		if (media && media.id) {
			console.log("Setting image ID:", media.id);
			updateSlide(index, "slideImgId", media.id);

			// If we have a URL, use it immediately
			if (media.url) {
				console.log("Setting image URL:", media.url);
				updateSlide(index, "slideImg", media.url);
			} else {
				// Fetch the URL immediately
				console.log("Fetching image URL for ID:", media.id);
				if (window.wp && window.wp.media) {
					const attachment = window.wp.media.attachment(media.id);
					attachment
						.fetch()
						.then(() => {
							const url = attachment.get("url");
							console.log("Fetched URL:", url);
							if (url) {
								updateSlide(index, "slideImg", url);
							}
						})
						.catch((error) => {
							console.error("Error fetching image URL:", error);
						});
				}
			}
		} else {
			console.log("No valid media object received");
		}
	};

	const removeImage = (index) => {
		updateSlide(index, "slideImg", "");
		updateSlide(index, "slideImgId", 0);
	};

	// Function to get image URL from media ID
	const getImageUrlFromId = (mediaId) => {
		if (!mediaId) return "";

		// Try to get the image URL from WordPress media library
		if (window.wp && window.wp.media) {
			const attachment = window.wp.media.attachment(mediaId);
			if (attachment) {
				attachment.fetch().then(() => {
					console.log("Fetched attachment:", attachment);
					return attachment.get("url");
				});
			}
		}
		return "";
	};

	// Helper function to generate gradient CSS
	const generateGradientCSS = () => {
		if (gradientType === "linear") {
			if (gradientColor3) {
				return `linear-gradient(${gradientAngle}deg, ${gradientColor1} ${gradientStop1}%, ${gradientColor2} ${gradientStop2}%, ${gradientColor3} ${gradientStop3}%)`;
			} else {
				return `linear-gradient(${gradientAngle}deg, ${gradientColor1} ${gradientStop1}%, ${gradientColor2} ${gradientStop2}%)`;
			}
		} else {
			if (gradientColor3) {
				return `radial-gradient(circle, ${gradientColor1} ${gradientStop1}%, ${gradientColor2} ${gradientStop2}%, ${gradientColor3} ${gradientStop3}%)`;
			} else {
				return `radial-gradient(circle, ${gradientColor1} ${gradientStop1}%, ${gradientColor2} ${gradientStop2}%)`;
			}
		}
	};

	// Helper function to update gradient
	const updateGradient = () => {
		const gradientCSS = generateGradientCSS();
		setAttributes({ backgroundColor: gradientCSS });
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={__("Agency Section Settings", "portfolio-block")}
					initialOpen={true}
				>
					<TextControl
						label={__("Section Title", "portfolio-block")}
						value={agencyTitle}
						onChange={(value) => setAttributes({ agencyTitle: value })}
					/>
					<TextareaControl
						label={__("Section Description", "portfolio-block")}
						value={agencyDescription}
						onChange={(value) => setAttributes({ agencyDescription: value })}
						rows={4}
					/>
					<TextControl
						label={__("CTA Button Text", "portfolio-block")}
						value={ctaButtonText}
						onChange={(value) => setAttributes({ ctaButtonText: value })}
					/>
				</PanelBody>

				<PanelBody
					title={__("Styling Options", "portfolio-block")}
					initialOpen={true}
				>
					<SelectControl
						label={__("Background Type", "portfolio-block")}
						value={backgroundColor?.includes("gradient") ? "gradient" : "solid"}
						options={[
							{ label: "Solid Color", value: "solid" },
							{ label: "Gradient", value: "gradient" },
						]}
						onChange={(value) => {
							if (value === "solid") {
								setAttributes({
									backgroundColor: "#667eea",
									gradientType: "linear",
									gradientAngle: 135,
									gradientColor1: "#667eea",
									gradientColor2: "#764ba2",
									gradientColor3: "",
									gradientStop1: 0,
									gradientStop2: 100,
									gradientStop3: 50,
								});
							} else {
								setAttributes({
									backgroundColor:
										"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
									gradientType: "linear",
									gradientAngle: 135,
									gradientColor1: "#667eea",
									gradientColor2: "#764ba2",
									gradientColor3: "",
									gradientStop1: 0,
									gradientStop2: 100,
									gradientStop3: 50,
								});
							}
						}}
					/>

					{(!backgroundColor || !backgroundColor.includes("gradient")) && (
						<>
							<ColorPicker
								label={__("Background Color", "portfolio-block")}
								color={backgroundColor}
								onChangeComplete={(color) =>
									setAttributes({ backgroundColor: color.hex })
								}
								disableAlpha
							/>
							<div
								style={{
									background: backgroundColor || "#667eea",
									padding: "10px",
									borderRadius: "4px",
									marginTop: "10px",
									border: "2px solid #ddd",
									textAlign: "center",
									color: "#fff",
									fontWeight: "bold",
									textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
								}}
							>
								Current Background Preview
							</div>
						</>
					)}

					{backgroundColor && backgroundColor.includes("gradient") && (
						<>
							<SelectControl
								label={__("Gradient Type", "portfolio-block")}
								value={gradientType}
								options={[
									{ label: "Linear", value: "linear" },
									{ label: "Radial", value: "radial" },
								]}
								onChange={(value) => {
									setAttributes({ gradientType: value });
									updateGradient();
								}}
							/>

							{gradientType === "linear" && (
								<RangeControl
									label={__("Gradient Angle", "portfolio-block")}
									value={gradientAngle}
									onChange={(value) => {
										setAttributes({ gradientAngle: value });
										updateGradient();
									}}
									min={0}
									max={360}
									step={1}
								/>
							)}

							<div
								style={{
									marginTop: "15px",
									padding: "10px",
									border: "1px solid #ddd",
									borderRadius: "4px",
								}}
							>
								<h4 style={{ margin: "0 0 10px 0" }}>
									{__("Gradient Colors", "portfolio-block")}
								</h4>

								<ColorPicker
									label={__("Color 1", "portfolio-block")}
									color={gradientColor1}
									onChangeComplete={(color) => {
										setAttributes({ gradientColor1: color.hex });
										updateGradient();
									}}
									disableAlpha
								/>

								<RangeControl
									label={__("Color 1 Stop (%)", "portfolio-block")}
									value={gradientStop1}
									onChange={(value) => {
										setAttributes({ gradientStop1: value });
										updateGradient();
									}}
									min={0}
									max={100}
									step={1}
								/>

								<ColorPicker
									label={__("Color 2", "portfolio-block")}
									color={gradientColor2}
									onChangeComplete={(color) => {
										setAttributes({ gradientColor2: color.hex });
										updateGradient();
									}}
									disableAlpha
								/>

								<RangeControl
									label={__("Color 2 Stop (%)", "portfolio-block")}
									value={gradientStop2}
									onChange={(value) => {
										setAttributes({ gradientStop2: value });
										updateGradient();
									}}
									min={0}
									max={100}
									step={1}
								/>

								<ToggleControl
									label={__("Add Third Color", "portfolio-block")}
									checked={!!gradientColor3}
									onChange={(checked) => {
										if (checked) {
											setAttributes({
												gradientColor3: "#f093fb",
												gradientStop3: 50,
											});
										} else {
											setAttributes({
												gradientColor3: "",
												gradientStop3: 50,
											});
										}
										updateGradient();
									}}
								/>

								{gradientColor3 && (
									<>
										<ColorPicker
											label={__("Color 3", "portfolio-block")}
											color={gradientColor3}
											onChangeComplete={(color) => {
												setAttributes({ gradientColor3: color.hex });
												updateGradient();
											}}
											disableAlpha
										/>

										<RangeControl
											label={__("Color 3 Stop (%)", "portfolio-block")}
											value={gradientStop3}
											onChange={(value) => {
												setAttributes({ gradientStop3: value });
												updateGradient();
											}}
											min={0}
											max={100}
											step={1}
										/>
									</>
								)}
							</div>

							<div
								style={{
									background: generateGradientCSS(),
									padding: "10px",
									borderRadius: "4px",
									marginTop: "10px",
									border: "2px solid #ddd",
									textAlign: "center",
									color: "#fff",
									fontWeight: "bold",
									textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
									minHeight: "40px",
								}}
							>
								Current Gradient Preview
							</div>
						</>
					)}

					<ColorPicker
						label={__("Text Color", "portfolio-block")}
						color={textColor}
						onChangeComplete={(color) =>
							setAttributes({ textColor: color.hex })
						}
						disableAlpha
					/>
					<RangeControl
						label={__("Title Font Size", "portfolio-block")}
						value={titleFontSize}
						onChange={(value) => setAttributes({ titleFontSize: value })}
						min={20}
						max={80}
					/>
					<RangeControl
						label={__("Text Font Size", "portfolio-block")}
						value={textFontSize}
						onChange={(value) => setAttributes({ textFontSize: value })}
						min={12}
						max={32}
					/>
					<RangeControl
						label={__("Slide Title Font Size", "portfolio-block")}
						value={slideTitleFontSize}
						onChange={(value) => setAttributes({ slideTitleFontSize: value })}
						min={40}
						max={200}
					/>
					<RangeControl
						label={__("Slide Description Font Size", "portfolio-block")}
						value={slideDescriptionFontSize}
						onChange={(value) =>
							setAttributes({ slideDescriptionFontSize: value })
						}
						min={12}
						max={40}
					/>
					<RangeControl
						label={__("Slide Tag Font Size", "portfolio-block")}
						value={slideTagFontSize}
						onChange={(value) => setAttributes({ slideTagFontSize: value })}
						min={12}
						max={40}
					/>
				</PanelBody>

				<PanelBody title="Button Styling" initialOpen={false}>
					<BaseControl label="Button Color">
						<ColorPicker
							color={buttonColor}
							onChangeComplete={(color) => setAttributes({ buttonColor: color.hex })}
							disableAlpha
						/>
					</BaseControl>

					<BaseControl label="Button Background Color">
						<ColorPicker
							color={buttonBackgroundColor}
							onChangeComplete={(color) => setAttributes({ buttonBackgroundColor: color.hex })}
							disableAlpha
						/>
					</BaseControl>

					<BaseControl label="Hover Text Color">
						<ColorPicker
							color={buttonHoverColor}
							onChangeComplete={(color) => setAttributes({ buttonHoverColor: color.hex })}
							disableAlpha
						/>
					</BaseControl>

					<BaseControl label="Hover Background Color">
						<ColorPicker
							color={buttonHoverBackgroundColor}
							onChangeComplete={(color) => setAttributes({ buttonHoverBackgroundColor: color.hex })}
							disableAlpha
						/>
					</BaseControl>

					<BaseControl label="Underline Color">
						<ColorPicker
							color={underlineColor}
							onChangeComplete={(color) => setAttributes({ underlineColor: color.hex })}
							disableAlpha
						/>
					</BaseControl>

					<SelectControl
						label="Button Style"
						value={buttonStyle}
						options={[
							{ label: 'Underline', value: 'underline' },
							{ label: 'Background Fill', value: 'fill' },
							{ label: 'Border', value: 'border' },
							{ label: 'Gradient', value: 'gradient' },
							{ label: 'Glass Effect', value: 'glass' }
						]}
						onChange={(value) => setAttributes({ buttonStyle: value })}
					/>

					<RangeControl
						label="Blur Amount (px)"
						value={blurAmount}
						onChange={(value) => setAttributes({ blurAmount: value })}
						min={0}
						max={20}
						step={1}
					/>

					<RangeControl
						label="Font Size (px)"
						value={fontSize}
						onChange={(value) => setAttributes({ fontSize: value })}
						min={12}
						max={48}
						step={1}
					/>

					<ToggleControl
						label="Show Icon"
						checked={showIcon}
						onChange={(value) => setAttributes({ showIcon: value })}
						help={showIcon ? 'Icon will be visible' : 'Icon will be hidden'}
					/>

					<SelectControl
						label="Hover Animation"
						value={hoverAnimation}
						options={[
							{ label: 'Slide Underline', value: 'slide-underline' },
							{ label: 'Scale', value: 'scale' },
							{ label: 'Bounce', value: 'bounce' },
							{ label: 'Glow', value: 'glow' },
							{ label: 'Shake', value: 'shake' },
							{ label: 'None', value: 'none' }
						]}
						onChange={(value) => setAttributes({ hoverAnimation: value })}
					/>

					<TextControl
						label="Button Padding"
						value={buttonPadding}
						onChange={(value) => setAttributes({ buttonPadding: value })}
						placeholder="e.g., 10px 20px"
						help="CSS padding values (e.g., 10px 20px, 1em 2em)"
					/>

					<TextControl
						label="Button Margin"
						value={buttonMargin}
						onChange={(value) => setAttributes({ buttonMargin: value })}
						placeholder="e.g., 20px 0"
						help="CSS margin values (e.g., 20px 0, 1em auto)"
					/>

					<RangeControl
						label="Z-Index"
						value={zIndex}
						onChange={(value) => setAttributes({ zIndex: value })}
						min={0}
						max={100}
						step={1}
					/>

					<RangeControl
						label="Border Radius (px)"
						value={borderRadius}
						onChange={(value) => setAttributes({ borderRadius: value })}
						min={0}
						max={50}
						step={1}
					/>
					
					<SelectControl
						label="Font Weight"
						value={fontWeight}
						options={[
							{ label: 'Thin (100)', value: '100' },
							{ label: 'Extra Light (200)', value: '200' },
							{ label: 'Light (300)', value: '300' },
							{ label: 'Normal (400)', value: '400' },
							{ label: 'Medium (500)', value: '500' },
							{ label: 'Semi Bold (600)', value: '600' },
							{ label: 'Bold (700)', value: '700' },
							{ label: 'Extra Bold (800)', value: '800' },
							{ label: 'Black (900)', value: '900' }
						]}
						onChange={(value) => setAttributes({ fontWeight: value })}
						help="Choose the font weight for the button text."
					/>
				</PanelBody>

				<PanelBody
					title={__("Portfolio Slides", "portfolio-block")}
					initialOpen={true}
				>
					<div
						style={{
							background: "#f0f6fc",
							padding: "10px",
							borderRadius: "4px",
							marginBottom: "15px",
							border: "1px solid #c3c4c7",
						}}
					>
						<strong>💡 Tip:</strong> You can add unlimited slides! All slides
						will be displayed in the gallery and available in the modal slider.
					</div>
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
							marginBottom: "20px",
						}}
					>
						<span style={{ fontWeight: "bold" }}>
							{__("Total Slides:", "portfolio-block")} {slides.length}
						</span>
						<Button
							variant="primary"
							onClick={addSlide}
							style={{
								backgroundColor: "#007cba",
								borderColor: "#007cba",
								color: "white",
							}}
						>
							{__("➕ Add New Slide", "portfolio-block")}
						</Button>
					</div>

					{slides.map((slide, index) => (
						<div
							key={slide.id}
							style={{
								border: "1px solid #ddd",
								padding: "15px",
								marginBottom: "15px",
								borderRadius: "8px",
							}}
						>
							<div
								style={{
									display: "flex",
									justifyContent: "space-between",
									alignItems: "center",
									marginBottom: "10px",
								}}
							>
								<h4 style={{ margin: 0 }}>
									{__("Slide", "portfolio-block")} {index + 1}
								</h4>
								<Button
									variant="secondary"
									isDestructive
									onClick={() => removeSlide(index)}
								>
									{__("Remove", "portfolio-block")}
								</Button>
							</div>

							<TextControl
								label={__("Title", "portfolio-block")}
								value={slide.slideTitle}
								onChange={(value) => updateSlide(index, "slideTitle", value)}
							/>

							<TextareaControl
								label={__("Description", "portfolio-block")}
								value={slide.slideDescription}
								onChange={(value) =>
									updateSlide(index, "slideDescription", value)
								}
								rows={3}
							/>

							<TextControl
								label={__("Project URL", "portfolio-block")}
								value={slide.slideUrl}
								onChange={(value) => updateSlide(index, "slideUrl", value)}
							/>

							<div>
								<label
									style={{
										display: "block",
										marginBottom: "5px",
										fontWeight: "500",
									}}
								>
									{__("Tags", "portfolio-block")}
								</label>

								{/* Tag Input */}
								<div
									style={{ display: "flex", gap: "8px", marginBottom: "10px" }}
								>
									<TextControl
										value={slide.newTagInput || ""}
										onChange={(value) =>
											updateSlide(index, "newTagInput", value)
										}
										onKeyDown={(e) => {
											if (e.key === "Enter") {
												e.preventDefault();
												addTagToSlide(index, slide.newTagInput || "");
											}
										}}
										placeholder="Enter a tag..."
										style={{ flex: 1 }}
									/>
									<Button
										variant="secondary"
										onClick={() => {
											addTagToSlide(index, slide.newTagInput || "");
										}}
									>
										Add Tag
									</Button>
								</div>

								{/* Tags Preview */}
								<div
									style={{
										display: "flex",
										flexWrap: "wrap",
										gap: "5px",
										minHeight: "30px",
										padding: "5px",
										border: "1px solid #ddd",
										borderRadius: "4px",
										backgroundColor: "#f9f9f9",
									}}
								>
									{Array.isArray(slide.slideTags) &&
									slide.slideTags.length > 0 ? (
										slide.slideTags.map((tag, tagIndex) => (
											<span
												key={`${slide.id}-${tagIndex}`}
												style={{
													display: "inline-flex",
													alignItems: "center",
													gap: "5px",
													padding: "4px 8px",
													backgroundColor: "#007cba",
													color: "white",
													borderRadius: "12px",
													fontSize: "12px",
													fontWeight: "500",
												}}
											>
												{tag}
												<button
													onClick={(e) => {
														e.preventDefault();
														removeTagFromSlide(index, tag);
													}}
													style={{
														background: "none",
														border: "none",
														color: "white",
														cursor: "pointer",
														fontSize: "14px",
														fontWeight: "bold",
														padding: "0",
														marginLeft: "4px",
														lineHeight: "1",
													}}
													title="Remove tag"
												>
													×
												</button>
											</span>
										))
									) : (
										<span style={{ color: "#666", fontStyle: "italic" }}>
											No tags added yet
										</span>
									)}
								</div>

								{/* Quick Add Buttons */}
								<div style={{ marginTop: "10px" }}>
									<Button
										variant="secondary"
										onClick={() => {
											addTagToSlide(index, "Web Design");
											addTagToSlide(index, "Branding");
											addTagToSlide(index, "UI/UX");
										}}
										style={{ marginRight: "5px" }}
									>
										Add Sample Tags
									</Button>
									<Button
										variant="secondary"
										isDestructive
										onClick={() => updateSlide(index, "slideTags", [])}
									>
										Clear All Tags
									</Button>
								</div>
							</div>

							<div style={{ marginTop: "10px" }}>
								<label style={{ display: "block", marginBottom: "5px" }}>
									{__("Project Image", "portfolio-block")}
								</label>
								<MediaUpload
									onSelect={(media) => {
										console.log("MediaUpload onSelect called with:", media);
										onSelectImage(index, media);
									}}
									allowedTypes={["image"]}
									value={slide.slideImgId}
									render={({ open }) => {
										console.log(
											"MediaUpload render called, open function:",
											typeof open,
										);
										return (
											<div
												style={{
													display: "flex",
													gap: "10px",
													alignItems: "flex-start",
													flexWrap: "wrap",
												}}
											>
												{slide.slideImg && slide.slideImg !== "" ? (
													<>
														<img
															src={slide.slideImg}
															alt=""
															style={{
																width: "60px",
																height: "60px",
																objectFit: "cover",
																borderRadius: "4px",
																flexShrink: 0,
															}}
														/>
														<div
															style={{
																display: "flex",
																flexDirection: "column",
																gap: "5px",
															}}
														>
															<Button variant="secondary" onClick={open}>
																{__("Change Image", "portfolio-block")}
															</Button>
															<Button
																variant="secondary"
																isDestructive
																onClick={() => removeImage(index)}
															>
																{__("Remove", "portfolio-block")}
															</Button>
														</div>
													</>
												) : (
													<Button variant="secondary" onClick={open}>
														{__("Select Image", "portfolio-block")}
													</Button>
												)}
											</div>
										);
									}}
								/>
								{/* Debug info */}
								{process.env.NODE_ENV === "development" && (
									<div
										style={{
											fontSize: "12px",
											color: "#666",
											marginTop: "5px",
										}}
									>
										Image URL: {slide.slideImg || "None"}
										<br />
										Image ID: {slide.slideImgId || "None"}
									</div>
								)}
							</div>
						</div>
					))}
				</PanelBody>

			</InspectorControls>

			<div {...blockProps}>
				<div
					className="animation-component"
					style={{
						position: "relative",
						border: "2px solid red",
						padding: "10px",
						minHeight: "400px",
					}}
					onClick={(e) => {
						console.log("Portfolio block clicked!", e);
						e.stopPropagation();
					}}
					onMouseEnter={(e) => {
						console.log("Portfolio block mouse enter!", e);
					}}
				>
					<section
						className="ad-portfolio-block__agency-section"
						style={{
							background:
								backgroundColor ||
								"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
						}}
					>
						<div className="ad-portfolio-block__agency-container">
							<div className="ad-portfolio-block__agency-content">
								<div className="ad-portfolio-block__agency-text">
									<div className="ad-portfolio-block__agency-description">
										<h2 className="ad-portfolio-block__agency-description-title">{agencyTitle}</h2>
										<p className="ad-portfolio-block__agency-description-text">
											{agencyDescription}
										</p>
									</div>
									<div className="ad-portfolio-block__agency-cta">
										<button className="ad-portfolio-block__view-portfolio-btn">
											<span className="ad-portfolio-block__button-text">{ctaButtonText}</span>
											<svg
												className="ad-portfolio-block__button-arrow"
												width="24"
												height="24"
												viewBox="0 0 24 24"
												fill="none"
												xmlns="http://www.w3.org/2000/svg"
											>
												<path
													d="M7 17L17 7M17 7H7M17 7V17"
													stroke="currentColor"
													strokeWidth="2"
													strokeLinecap="round"
													strokeLinejoin="round"
												/>
											</svg>
										</button>
									</div>
								</div>

								<div className="ad-portfolio-block__agency-gallery">
									<div className="ad-portfolio-block__gallery-grid">
										{slides.map((slide, index) => (
											<div key={slide.id} className="ad-portfolio-block__gallery-item">
												{slide.slideImg && slide.slideImg !== "" ? (
													<img
														className="ad-portfolio-block__gallery-img"
														src={slide.slideImg}
														alt={slide.slideTitle}
														style={{
															width: "100%",
															height: "100%",
															objectFit: "cover",
														}}
													/>
												) : (
													<div className="ad-portfolio-block__gallery-placeholder">
														<span>{__("No Image", "portfolio-block")}</span>
													</div>
												)}
												<div className="ad-portfolio-block__gallery-overlay">
													<span className="ad-portfolio-block__gallery-overlay-text">
														{slide.slideTitle}
													</span>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			</div>
		</>
	);
}