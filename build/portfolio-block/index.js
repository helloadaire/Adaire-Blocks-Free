/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/portfolio-block/block.json":
/*!****************************************!*\
  !*** ./src/portfolio-block/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/portfolio-block","version":"0.1.0","title":"Portfolio Block","category":"widgets","icon":"admin-generic","description":"A portfolio section with gallery and modal slider using GSAP animations.","example":{},"supports":{"html":false,"align":true,"alignWide":true,"anchor":true,"customClassName":true,"reusable":true},"textdomain":"portfolio-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"agencyTitle":{"type":"string","default":"Our Work"},"agencyDescription":{"type":"string","default":"We\'ve collaborated with innovative brands and startups to create compelling visual narratives that drive engagement and deliver results. Our portfolio showcases our expertise in branding, digital design, and creative storytelling."},"ctaButtonText":{"type":"string","default":"View Full Portfolio"},"slides":{"type":"array","default":[{"id":1,"slideTitle":"Startup Nights","slideDescription":"Startup Nights is Switzerland’s leading startup event, held annually in Winterthur. Since launching in 2017, it has grown into a major two-day gathering that brings together over 8,500 founders, investors, and innovators.","slideUrl":"https://adaire.dev/ad/startup-nights/","slideTags":["Startup Ecosystem","Tech Conference","Networking Platform","Entrepreneurial Innovation"],"slideImg":"","slideImgId":0},{"id":2,"slideTitle":"APST Research","slideDescription":"A medical research company that focuses on improving the prognosis for patients afflicted with ALS/Lou Gehrig’s disease.","slideUrl":"https://adaire.dev/ad/apst","slideTags":["ALS Prognostic Platform","Medical Data Analytics","Blood Test Integration","Secure Patient Portal"],"slideImg":"","slideImgId":0},{"id":3,"slideTitle":"Future Tree","slideDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?","slideUrl":"https://link.com","slideTags":["Monochrome","Editorial","Fashion","Visual Identity"],"slideImg":"","slideImgId":0},{"id":4,"slideTitle":"Physio und Sport","slideDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?","slideUrl":"https://link.com","slideTags":["Monochrome","Editorial","Fashion","Visual Identity"],"slideImg":"","slideImgId":0}]},"backgroundColor":{"type":"string","default":"#667eea"},"gradientType":{"type":"string","default":"linear"},"gradientAngle":{"type":"number","default":135},"gradientColor1":{"type":"string","default":"#667eea"},"gradientColor2":{"type":"string","default":"#764ba2"},"gradientColor3":{"type":"string","default":""},"gradientStop1":{"type":"number","default":0},"gradientStop2":{"type":"number","default":100},"gradientStop3":{"type":"number","default":50},"textColor":{"type":"string","default":"#ffffff"},"titleFontSize":{"type":"number","default":40},"titleFontFamily":{"type":"string","default":"inherit"},"textFontSize":{"type":"number","default":18},"textFontFamily":{"type":"string","default":"inherit"},"slideTitleFontSize":{"type":"number","default":112},"slideDescriptionFontSize":{"type":"number","default":20},"slideTagFontSize":{"type":"number","default":20},"buttonColor":{"type":"string","default":"#ffffff"},"buttonBackgroundColor":{"type":"string","default":"transparent"},"buttonHoverColor":{"type":"string","default":"#ffffff"},"buttonHoverBackgroundColor":{"type":"string","default":"transparent"},"buttonStyle":{"type":"string","default":"underline"},"underlineColor":{"type":"string","default":"#ff4242"},"blurAmount":{"type":"number","default":0},"fontSize":{"type":"number","default":18},"showIcon":{"type":"boolean","default":true},"hoverAnimation":{"type":"string","default":"slide-underline"},"buttonPadding":{"type":"string","default":"0.2em 0"},"buttonMargin":{"type":"string","default":"20px 0"},"zIndex":{"type":"number","default":1},"borderRadius":{"type":"number","default":0},"fontWeight":{"type":"string","default":"500"}}}');

/***/ }),

/***/ "./src/portfolio-block/edit.js":
/*!*************************************!*\
  !*** ./src/portfolio-block/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _editor_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./editor.scss */ "./src/portfolio-block/editor.scss");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__);







function Edit({
  attributes,
  setAttributes
}) {
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
    fontWeight
  } = attributes;

  // Force re-renders when slides change
  const [updateTrigger, setUpdateTrigger] = (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useState)(0);
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)({
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
      "--button-font-weight": fontWeight || "500"
    }
  });

  // Initialize fields for existing slides
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_4__.useEffect)(() => {
    if (slides && slides.length > 0) {
      const updatedSlides = slides.map(slide => {
        const updatedSlide = {
          ...slide
        };
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
        setAttributes({
          slides: updatedSlides
        });
      }
    }
  }, []);
  console.log("Block props style:", blockProps.style);
  console.log("Current slides data:", slides);
  const updateSlide = (index, field, value) => {
    const newSlides = [...slides];
    newSlides[index] = {
      ...newSlides[index],
      [field]: value
    };
    console.log("Updated slide:", index, field, value, newSlides[index]); // Debug log
    console.log("All slides after update:", newSlides); // Debug log
    setAttributes({
      slides: newSlides
    });
  };
  const addSlide = () => {
    // Find the highest existing ID to avoid duplicates
    const maxId = slides.length > 0 ? Math.max(...slides.map(slide => slide.id)) : 0;
    const newId = maxId + 1;
    const newSlide = {
      id: newId,
      slideTitle: `New Project ${newId}`,
      slideDescription: "Add your project description here...",
      slideUrl: "https://example.com",
      slideTags: [],
      newTagInput: "",
      slideImg: "",
      slideImgId: 0
    };
    console.log("Adding new slide with ID:", newId);
    setAttributes({
      slides: [...slides, newSlide]
    });
  };
  const removeSlide = index => {
    const newSlides = slides.filter((_, i) => i !== index);
    setAttributes({
      slides: newSlides
    });
  };
  const updateSlideTags = (index, tagsString) => {
    console.log("updateSlideTags called with:", tagsString);
    const tags = tagsString.split(",").map(tag => tag.trim()).filter(tag => tag);
    console.log("Processed tags:", tags);
    updateSlide(index, "slideTags", tags);
  };
  const addTagToSlide = (index, newTag) => {
    if (!newTag || !newTag.trim()) return;
    const trimmedTag = newTag.trim();
    const currentSlide = slides[index];

    // Ensure slideTags exists
    const currentTags = Array.isArray(currentSlide.slideTags) ? [...currentSlide.slideTags] : [];

    // Check if tag already exists (case insensitive)
    const tagExists = currentTags.some(tag => tag.toLowerCase() === trimmedTag.toLowerCase());
    if (!tagExists) {
      const newSlides = [...slides];
      newSlides[index] = {
        ...currentSlide,
        slideTags: [...currentTags, trimmedTag],
        newTagInput: ""
      };
      setAttributes({
        slides: newSlides
      });
    }
  };
  const removeTagFromSlide = (index, tagToRemove) => {
    const currentSlide = slides[index];
    const currentTags = Array.isArray(currentSlide.slideTags) ? currentSlide.slideTags.filter(tag => tag !== tagToRemove) : [];
    const newSlides = [...slides];
    newSlides[index] = {
      ...currentSlide,
      slideTags: currentTags
    };
    setAttributes({
      slides: newSlides
    });
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
          attachment.fetch().then(() => {
            const url = attachment.get("url");
            console.log("Fetched URL:", url);
            if (url) {
              updateSlide(index, "slideImg", url);
            }
          }).catch(error => {
            console.error("Error fetching image URL:", error);
          });
        }
      }
    } else {
      console.log("No valid media object received");
    }
  };
  const removeImage = index => {
    updateSlide(index, "slideImg", "");
    updateSlide(index, "slideImgId", 0);
  };

  // Function to get image URL from media ID
  const getImageUrlFromId = mediaId => {
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
    setAttributes({
      backgroundColor: gradientCSS
    });
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Agency Section Settings", "portfolio-block"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Section Title", "portfolio-block"),
          value: agencyTitle,
          onChange: value => setAttributes({
            agencyTitle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Section Description", "portfolio-block"),
          value: agencyDescription,
          onChange: value => setAttributes({
            agencyDescription: value
          }),
          rows: 4
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("CTA Button Text", "portfolio-block"),
          value: ctaButtonText,
          onChange: value => setAttributes({
            ctaButtonText: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Styling Options", "portfolio-block"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Type", "portfolio-block"),
          value: backgroundColor?.includes("gradient") ? "gradient" : "solid",
          options: [{
            label: "Solid Color",
            value: "solid"
          }, {
            label: "Gradient",
            value: "gradient"
          }],
          onChange: value => {
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
                gradientStop3: 50
              });
            } else {
              setAttributes({
                backgroundColor: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                gradientType: "linear",
                gradientAngle: 135,
                gradientColor1: "#667eea",
                gradientColor2: "#764ba2",
                gradientColor3: "",
                gradientStop1: 0,
                gradientStop2: 100,
                gradientStop3: 50
              });
            }
          }
        }), (!backgroundColor || !backgroundColor.includes("gradient")) && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Background Color", "portfolio-block"),
            color: backgroundColor,
            onChangeComplete: color => setAttributes({
              backgroundColor: color.hex
            }),
            disableAlpha: true
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            style: {
              background: backgroundColor || "#667eea",
              padding: "10px",
              borderRadius: "4px",
              marginTop: "10px",
              border: "2px solid #ddd",
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)"
            },
            children: "Current Background Preview"
          })]
        }), backgroundColor && backgroundColor.includes("gradient") && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient Type", "portfolio-block"),
            value: gradientType,
            options: [{
              label: "Linear",
              value: "linear"
            }, {
              label: "Radial",
              value: "radial"
            }],
            onChange: value => {
              setAttributes({
                gradientType: value
              });
              updateGradient();
            }
          }), gradientType === "linear" && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient Angle", "portfolio-block"),
            value: gradientAngle,
            onChange: value => {
              setAttributes({
                gradientAngle: value
              });
              updateGradient();
            },
            min: 0,
            max: 360,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            style: {
              marginTop: "15px",
              padding: "10px",
              border: "1px solid #ddd",
              borderRadius: "4px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h4", {
              style: {
                margin: "0 0 10px 0"
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Gradient Colors", "portfolio-block")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color 1", "portfolio-block"),
              color: gradientColor1,
              onChangeComplete: color => {
                setAttributes({
                  gradientColor1: color.hex
                });
                updateGradient();
              },
              disableAlpha: true
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color 1 Stop (%)", "portfolio-block"),
              value: gradientStop1,
              onChange: value => {
                setAttributes({
                  gradientStop1: value
                });
                updateGradient();
              },
              min: 0,
              max: 100,
              step: 1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color 2", "portfolio-block"),
              color: gradientColor2,
              onChangeComplete: color => {
                setAttributes({
                  gradientColor2: color.hex
                });
                updateGradient();
              },
              disableAlpha: true
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color 2 Stop (%)", "portfolio-block"),
              value: gradientStop2,
              onChange: value => {
                setAttributes({
                  gradientStop2: value
                });
                updateGradient();
              },
              min: 0,
              max: 100,
              step: 1
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Add Third Color", "portfolio-block"),
              checked: !!gradientColor3,
              onChange: checked => {
                if (checked) {
                  setAttributes({
                    gradientColor3: "#f093fb",
                    gradientStop3: 50
                  });
                } else {
                  setAttributes({
                    gradientColor3: "",
                    gradientStop3: 50
                  });
                }
                updateGradient();
              }
            }), gradientColor3 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color 3", "portfolio-block"),
                color: gradientColor3,
                onChangeComplete: color => {
                  setAttributes({
                    gradientColor3: color.hex
                  });
                  updateGradient();
                },
                disableAlpha: true
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
                label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Color 3 Stop (%)", "portfolio-block"),
                value: gradientStop3,
                onChange: value => {
                  setAttributes({
                    gradientStop3: value
                  });
                  updateGradient();
                },
                min: 0,
                max: 100,
                step: 1
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            style: {
              background: generateGradientCSS(),
              padding: "10px",
              borderRadius: "4px",
              marginTop: "10px",
              border: "2px solid #ddd",
              textAlign: "center",
              color: "#fff",
              fontWeight: "bold",
              textShadow: "1px 1px 2px rgba(0,0,0,0.5)",
              minHeight: "40px"
            },
            children: "Current Gradient Preview"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Color", "portfolio-block"),
          color: textColor,
          onChangeComplete: color => setAttributes({
            textColor: color.hex
          }),
          disableAlpha: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title Font Size", "portfolio-block"),
          value: titleFontSize,
          onChange: value => setAttributes({
            titleFontSize: value
          }),
          min: 20,
          max: 80
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Text Font Size", "portfolio-block"),
          value: textFontSize,
          onChange: value => setAttributes({
            textFontSize: value
          }),
          min: 12,
          max: 32
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Title Font Size", "portfolio-block"),
          value: slideTitleFontSize,
          onChange: value => setAttributes({
            slideTitleFontSize: value
          }),
          min: 40,
          max: 200
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Description Font Size", "portfolio-block"),
          value: slideDescriptionFontSize,
          onChange: value => setAttributes({
            slideDescriptionFontSize: value
          }),
          min: 12,
          max: 40
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide Tag Font Size", "portfolio-block"),
          value: slideTagFontSize,
          onChange: value => setAttributes({
            slideTagFontSize: value
          }),
          min: 12,
          max: 40
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: "Button Styling",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: "Button Color",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: buttonColor,
            onChangeComplete: color => setAttributes({
              buttonColor: color.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: "Button Background Color",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: buttonBackgroundColor,
            onChangeComplete: color => setAttributes({
              buttonBackgroundColor: color.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: "Hover Text Color",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: buttonHoverColor,
            onChangeComplete: color => setAttributes({
              buttonHoverColor: color.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: "Hover Background Color",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: buttonHoverBackgroundColor,
            onChangeComplete: color => setAttributes({
              buttonHoverBackgroundColor: color.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: "Underline Color",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: underlineColor,
            onChangeComplete: color => setAttributes({
              underlineColor: color.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: "Button Style",
          value: buttonStyle,
          options: [{
            label: 'Underline',
            value: 'underline'
          }, {
            label: 'Background Fill',
            value: 'fill'
          }, {
            label: 'Border',
            value: 'border'
          }, {
            label: 'Gradient',
            value: 'gradient'
          }, {
            label: 'Glass Effect',
            value: 'glass'
          }],
          onChange: value => setAttributes({
            buttonStyle: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: "Blur Amount (px)",
          value: blurAmount,
          onChange: value => setAttributes({
            blurAmount: value
          }),
          min: 0,
          max: 20,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: "Font Size (px)",
          value: fontSize,
          onChange: value => setAttributes({
            fontSize: value
          }),
          min: 12,
          max: 48,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: "Show Icon",
          checked: showIcon,
          onChange: value => setAttributes({
            showIcon: value
          }),
          help: showIcon ? 'Icon will be visible' : 'Icon will be hidden'
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: "Hover Animation",
          value: hoverAnimation,
          options: [{
            label: 'Slide Underline',
            value: 'slide-underline'
          }, {
            label: 'Scale',
            value: 'scale'
          }, {
            label: 'Bounce',
            value: 'bounce'
          }, {
            label: 'Glow',
            value: 'glow'
          }, {
            label: 'Shake',
            value: 'shake'
          }, {
            label: 'None',
            value: 'none'
          }],
          onChange: value => setAttributes({
            hoverAnimation: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: "Button Padding",
          value: buttonPadding,
          onChange: value => setAttributes({
            buttonPadding: value
          }),
          placeholder: "e.g., 10px 20px",
          help: "CSS padding values (e.g., 10px 20px, 1em 2em)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: "Button Margin",
          value: buttonMargin,
          onChange: value => setAttributes({
            buttonMargin: value
          }),
          placeholder: "e.g., 20px 0",
          help: "CSS margin values (e.g., 20px 0, 1em auto)"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: "Z-Index",
          value: zIndex,
          onChange: value => setAttributes({
            zIndex: value
          }),
          min: 0,
          max: 100,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: "Border Radius (px)",
          value: borderRadius,
          onChange: value => setAttributes({
            borderRadius: value
          }),
          min: 0,
          max: 50,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: "Font Weight",
          value: fontWeight,
          options: [{
            label: 'Thin (100)',
            value: '100'
          }, {
            label: 'Extra Light (200)',
            value: '200'
          }, {
            label: 'Light (300)',
            value: '300'
          }, {
            label: 'Normal (400)',
            value: '400'
          }, {
            label: 'Medium (500)',
            value: '500'
          }, {
            label: 'Semi Bold (600)',
            value: '600'
          }, {
            label: 'Bold (700)',
            value: '700'
          }, {
            label: 'Extra Bold (800)',
            value: '800'
          }, {
            label: 'Black (900)',
            value: '900'
          }],
          onChange: value => setAttributes({
            fontWeight: value
          }),
          help: "Choose the font weight for the button text."
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Portfolio Slides", "portfolio-block"),
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          style: {
            background: "#f0f6fc",
            padding: "10px",
            borderRadius: "4px",
            marginBottom: "15px",
            border: "1px solid #c3c4c7"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("strong", {
            children: "\uD83D\uDCA1 Tip:"
          }), " You can add unlimited slides! All slides will be displayed in the gallery and available in the modal slider."]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          style: {
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "20px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
            style: {
              fontWeight: "bold"
            },
            children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Total Slides:", "portfolio-block"), " ", slides.length]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
            variant: "primary",
            onClick: addSlide,
            style: {
              backgroundColor: "#007cba",
              borderColor: "#007cba",
              color: "white"
            },
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("➕ Add New Slide", "portfolio-block")
          })]
        }), slides.map((slide, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
          style: {
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "15px",
            borderRadius: "8px"
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            style: {
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "10px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("h4", {
              style: {
                margin: 0
              },
              children: [(0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Slide", "portfolio-block"), " ", index + 1]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              variant: "secondary",
              isDestructive: true,
              onClick: () => removeSlide(index),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove", "portfolio-block")
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Title", "portfolio-block"),
            value: slide.slideTitle,
            onChange: value => updateSlide(index, "slideTitle", value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Description", "portfolio-block"),
            value: slide.slideDescription,
            onChange: value => updateSlide(index, "slideDescription", value),
            rows: 3
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Project URL", "portfolio-block"),
            value: slide.slideUrl,
            onChange: value => updateSlide(index, "slideUrl", value)
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
              style: {
                display: "block",
                marginBottom: "5px",
                fontWeight: "500"
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Tags", "portfolio-block")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              style: {
                display: "flex",
                gap: "8px",
                marginBottom: "10px"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
                value: slide.newTagInput || "",
                onChange: value => updateSlide(index, "newTagInput", value),
                onKeyDown: e => {
                  if (e.key === "Enter") {
                    e.preventDefault();
                    addTagToSlide(index, slide.newTagInput || "");
                  }
                },
                placeholder: "Enter a tag...",
                style: {
                  flex: 1
                }
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "secondary",
                onClick: () => {
                  addTagToSlide(index, slide.newTagInput || "");
                },
                children: "Add Tag"
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
              style: {
                display: "flex",
                flexWrap: "wrap",
                gap: "5px",
                minHeight: "30px",
                padding: "5px",
                border: "1px solid #ddd",
                borderRadius: "4px",
                backgroundColor: "#f9f9f9"
              },
              children: Array.isArray(slide.slideTags) && slide.slideTags.length > 0 ? slide.slideTags.map((tag, tagIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("span", {
                style: {
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "5px",
                  padding: "4px 8px",
                  backgroundColor: "#007cba",
                  color: "white",
                  borderRadius: "12px",
                  fontSize: "12px",
                  fontWeight: "500"
                },
                children: [tag, /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("button", {
                  onClick: e => {
                    e.preventDefault();
                    removeTagFromSlide(index, tag);
                  },
                  style: {
                    background: "none",
                    border: "none",
                    color: "white",
                    cursor: "pointer",
                    fontSize: "14px",
                    fontWeight: "bold",
                    padding: "0",
                    marginLeft: "4px",
                    lineHeight: "1"
                  },
                  title: "Remove tag",
                  children: "\xD7"
                })]
              }, `${slide.id}-${tagIndex}`)) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                style: {
                  color: "#666",
                  fontStyle: "italic"
                },
                children: "No tags added yet"
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              style: {
                marginTop: "10px"
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "secondary",
                onClick: () => {
                  addTagToSlide(index, "Web Design");
                  addTagToSlide(index, "Branding");
                  addTagToSlide(index, "UI/UX");
                },
                style: {
                  marginRight: "5px"
                },
                children: "Add Sample Tags"
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                variant: "secondary",
                isDestructive: true,
                onClick: () => updateSlide(index, "slideTags", []),
                children: "Clear All Tags"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
            style: {
              marginTop: "10px"
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("label", {
              style: {
                display: "block",
                marginBottom: "5px"
              },
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Project Image", "portfolio-block")
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
              onSelect: media => {
                console.log("MediaUpload onSelect called with:", media);
                onSelectImage(index, media);
              },
              allowedTypes: ["image"],
              value: slide.slideImgId,
              render: ({
                open
              }) => {
                console.log("MediaUpload render called, open function:", typeof open);
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  style: {
                    display: "flex",
                    gap: "10px",
                    alignItems: "flex-start",
                    flexWrap: "wrap"
                  },
                  children: slide.slideImg && slide.slideImg !== "" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.Fragment, {
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                      src: slide.slideImg,
                      alt: "",
                      style: {
                        width: "60px",
                        height: "60px",
                        objectFit: "cover",
                        borderRadius: "4px",
                        flexShrink: 0
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                      style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px"
                      },
                      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        variant: "secondary",
                        onClick: open,
                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Change Image", "portfolio-block")
                      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                        variant: "secondary",
                        isDestructive: true,
                        onClick: () => removeImage(index),
                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Remove", "portfolio-block")
                      })]
                    })]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    variant: "secondary",
                    onClick: open,
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("Select Image", "portfolio-block")
                  })
                });
              }
            }),  true && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              style: {
                fontSize: "12px",
                color: "#666",
                marginTop: "5px"
              },
              children: ["Image URL: ", slide.slideImg || "None", /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("br", {}), "Image ID: ", slide.slideImgId || "None"]
            })]
          })]
        }, slide.id))]
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
      ...blockProps,
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
        className: "animation-component",
        style: {
          position: "relative",
          border: "2px solid red",
          padding: "10px",
          minHeight: "400px"
        },
        onClick: e => {
          console.log("Portfolio block clicked!", e);
          e.stopPropagation();
        },
        onMouseEnter: e => {
          console.log("Portfolio block mouse enter!", e);
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("section", {
          className: "ad-portfolio-block__agency-section",
          style: {
            background: backgroundColor || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
          },
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
            className: "ad-portfolio-block__agency-container",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
              className: "ad-portfolio-block__agency-content",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                className: "ad-portfolio-block__agency-text",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                  className: "ad-portfolio-block__agency-description",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("h2", {
                    className: "ad-portfolio-block__agency-description-title",
                    children: agencyTitle
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("p", {
                    className: "ad-portfolio-block__agency-description-text",
                    children: agencyDescription
                  })]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "ad-portfolio-block__agency-cta",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("button", {
                    className: "ad-portfolio-block__view-portfolio-btn",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                      className: "ad-portfolio-block__button-text",
                      children: ctaButtonText
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("svg", {
                      className: "ad-portfolio-block__button-arrow",
                      width: "24",
                      height: "24",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      xmlns: "http://www.w3.org/2000/svg",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("path", {
                        d: "M7 17L17 7M17 7H7M17 7V17",
                        stroke: "currentColor",
                        strokeWidth: "2",
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                      })
                    })]
                  })
                })]
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                className: "ad-portfolio-block__agency-gallery",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                  className: "ad-portfolio-block__gallery-grid",
                  children: slides.map((slide, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsxs)("div", {
                    className: "ad-portfolio-block__gallery-item",
                    children: [slide.slideImg && slide.slideImg !== "" ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("img", {
                      className: "ad-portfolio-block__gallery-img",
                      src: slide.slideImg,
                      alt: slide.slideTitle,
                      style: {
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }
                    }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "ad-portfolio-block__gallery-placeholder",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                        children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)("No Image", "portfolio-block")
                      })
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("div", {
                      className: "ad-portfolio-block__gallery-overlay",
                      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_6__.jsx)("span", {
                        className: "ad-portfolio-block__gallery-overlay-text",
                        children: slide.slideTitle
                      })
                    })]
                  }, slide.id))
                })
              })]
            })
          })
        })
      })
    })]
  });
}

/***/ }),

/***/ "./src/portfolio-block/editor.scss":
/*!*****************************************!*\
  !*** ./src/portfolio-block/editor.scss ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/portfolio-block/index.js":
/*!**************************************!*\
  !*** ./src/portfolio-block/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/portfolio-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/portfolio-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/portfolio-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/portfolio-block/block.json");
/**
 * Registers a new block provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
 */


/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * All files containing `style` keyword are bundled together. The code used
 * gets applied both to the front of your site and to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */


/**
 * Internal dependencies
 */




/**
 * Register the portfolio block
 */
(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_4__.name, {
  /**
   * @see ./edit.js
   */
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  /**
   * @see ./save.js
   */
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
});

/***/ }),

/***/ "./src/portfolio-block/save.js":
/*!*************************************!*\
  !*** ./src/portfolio-block/save.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ save)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);


function save({
  attributes
}) {
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
    fontWeight
  } = attributes;

  // Debug log in development
  if (typeof console !== 'undefined' && "development" === 'development') {
    console.log('Portfolio block save - slides:', slides);
  }
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: 'ad-portfolio-block',
    style: {
      color: textColor || '#ffffff',
      '--title-font-size': `${titleFontSize}px`,
      '--text-font-size': `${textFontSize}px`,
      '--slide-title-font-size': `${slideTitleFontSize}px`,
      '--slide-description-font-size': `${slideDescriptionFontSize}px`,
      '--slide-tag-font-size': `${slideTagFontSize}px`,
      // Button styling variables
      '--button-color': buttonColor || '#ffffff',
      '--button-bg-color': buttonBackgroundColor || 'transparent',
      '--button-hover-color': buttonHoverColor || '#ffffff',
      '--button-hover-bg-color': buttonHoverBackgroundColor || 'transparent',
      '--button-underline-color': underlineColor || '#ff4242',
      '--button-blur': blurAmount ? `${blurAmount}px` : '0px',
      '--button-font-size': fontSize ? `${fontSize}px` : '1.1rem',
      '--button-padding': buttonPadding || '0.2em 0',
      '--button-margin': buttonMargin || '20px 0',
      '--button-z-index': zIndex || '1',
      '--button-border-radius': borderRadius ? `${borderRadius}px` : '0px',
      '--button-font-weight': fontWeight || '500'
    },
    'data-slides': JSON.stringify(slides),
    'data-button-style': buttonStyle || 'underline',
    'data-hover-animation': hoverAnimation || 'slide-underline'
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
    ...blockProps,
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("section", {
      className: "ad-portfolio-block__agency-section",
      style: {
        background: backgroundColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "ad-portfolio-block__agency-container",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "ad-portfolio-block__agency-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            className: "ad-portfolio-block__agency-text",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              className: "ad-portfolio-block__agency-description",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
                className: "ad-portfolio-block__agency-description-title",
                children: agencyTitle
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                className: "ad-portfolio-block__agency-description-text",
                children: agencyDescription
              })]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "ad-portfolio-block__agency-cta",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("button", {
                className: `ad-portfolio-block__view-portfolio-btn ad-portfolio-block__view-portfolio-btn--${buttonStyle || 'underline'} ad-portfolio-block__view-portfolio-btn--${hoverAnimation || 'slide-underline'}`,
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                  className: "ad-portfolio-block__button-text",
                  children: ctaButtonText
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
                  className: "ad-portfolio-block__button-arrow",
                  width: "24",
                  height: "24",
                  viewBox: "0 0 24 24",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                    d: "M7 17L17 7M17 7H7M17 7V17",
                    stroke: "currentColor",
                    strokeWidth: "2",
                    strokeLinecap: "round",
                    strokeLinejoin: "round"
                  })
                })]
              })
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "ad-portfolio-block__agency-gallery",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              className: "ad-portfolio-block__gallery-grid",
              children: slides.map((slide, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
                className: "ad-portfolio-block__gallery-item",
                "data-slide-index": index,
                children: [slide.slideImg ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                  className: "ad-portfolio-block__gallery-img",
                  src: slide.slideImg,
                  alt: slide.slideTitle,
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "ad-portfolio-block__gallery-placeholder",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    children: "No Image"
                  })
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                  className: "ad-portfolio-block__gallery-overlay",
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
                    className: "ad-portfolio-block__gallery-overlay-text",
                    children: slide.slideTitle
                  })
                })]
              }, slide.id))
            })
          })]
        })
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "ad-portfolio-block__modal-overlay",
      style: {
        display: 'none'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "ad-portfolio-block__modal-content",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
          className: "ad-portfolio-block__modal-close-btn",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
            width: "24",
            height: "24",
            viewBox: "0 0 24 24",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
              d: "M18 6L6 18M6 6L18 18",
              stroke: "currentColor",
              strokeWidth: "2",
              strokeLinecap: "round",
              strokeLinejoin: "round"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "ad-portfolio-block__slider"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/portfolio-block/style.scss":
/*!****************************************!*\
  !*** ./src/portfolio-block/style.scss ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ ((module) => {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ ((module) => {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/***/ ((module) => {

module.exports = window["wp"]["element"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ ((module) => {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/media-utils":
/*!************************************!*\
  !*** external ["wp","mediaUtils"] ***!
  \************************************/
/***/ ((module) => {

module.exports = window["wp"]["mediaUtils"];

/***/ }),

/***/ "react/jsx-runtime":
/*!**********************************!*\
  !*** external "ReactJSXRuntime" ***!
  \**********************************/
/***/ ((module) => {

module.exports = window["ReactJSXRuntime"];

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn, priority) => {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var [chunkIds, fn, priority] = deferred[i];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every((key) => (__webpack_require__.O[key](chunkIds[j])))) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"portfolio-block/index": 0,
/******/ 			"portfolio-block/style-index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = globalThis["webpackChunkadaire_blocks"] = globalThis["webpackChunkadaire_blocks"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["portfolio-block/style-index"], () => (__webpack_require__("./src/portfolio-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map