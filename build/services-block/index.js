/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/services-block/block.json":
/*!***************************************!*\
  !*** ./src/services-block/block.json ***!
  \***************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/services-block","version":"0.1.0","title":"Services Block","category":"widgets","icon":"admin-generic","description":"A section with services that move with scroll using GSAP.","example":{},"supports":{"html":false,"align":true,"alignWide":true,"anchor":true,"customClassName":true,"reusable":true},"textdomain":"services-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"agencyTitle":{"type":"string","default":"Our Work"},"agencyDescription":{"type":"string","default":"We\'ve collaborated with innovative brands and startups to create compelling visual narratives that drive engagement and deliver results. Our portfolio showcases our expertise in branding, digital design, and creative storytelling."},"ctaButtonText":{"type":"string","default":"View Full Portfolio"},"slides":{"type":"array","default":[{"id":1,"slideTitle":"Digital Innovation","slideDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?","slideUrl":"https://link.com","slideTags":["Digital","Innovation","Technology","Design"],"slideImg":"","slideImgId":0},{"id":2,"slideTitle":"Startup Nights","slideDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?","slideUrl":"https://link.com","slideTags":["Client 1","Editorial","Fashion","Visual Identity"],"slideImg":"","slideImgId":0},{"id":3,"slideTitle":"APST Research","slideDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?","slideUrl":"https://link.com","slideTags":["Monochrome","Editorial","Fashion","Visual Identity"],"slideImg":"","slideImgId":0},{"id":4,"slideTitle":"Future Tree","slideDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?","slideUrl":"https://link.com","slideTags":["Monochrome","Editorial","Fashion","Visual Identity"],"slideImg":"","slideImgId":0},{"id":5,"slideTitle":"Physio Und Sport","slideDescription":"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit accusantium consequatur alias sequi tenetur ratione odio quis vitae ab id dolores quas quidem ipsam nesciunt, quam sed minus nihil molestiae?","slideUrl":"https://link.com","slideTags":["Monochrome","Editorial","Fashion","Visual Identity"],"slideImg":"","slideImgId":0}]},"backgroundColor":{"type":"string","default":"linear-gradient(135deg, #667eea 0%, #764ba2 100%)"},"gradientType":{"type":"string","default":"linear"},"gradientAngle":{"type":"number","default":135},"gradientColor1":{"type":"string","default":"#667eea"},"gradientColor2":{"type":"string","default":"#764ba2"},"gradientColor3":{"type":"string","default":""},"gradientStop1":{"type":"number","default":0},"gradientStop2":{"type":"number","default":100},"gradientStop3":{"type":"number","default":50},"textColor":{"type":"string","default":"#ffffff"},"titleFontSize":{"type":"number","default":40},"titleFontFamily":{"type":"string","default":"inherit"},"textFontSize":{"type":"number","default":18},"textFontFamily":{"type":"string","default":"inherit"},"slideTitleFontSize":{"type":"number","default":112},"slideDescriptionFontSize":{"type":"number","default":20},"slideTagFontSize":{"type":"number","default":20},"previewText":{"type":"string","default":"We:"},"linkText":{"type":"string","default":"Read More"},"blockId":{"type":"string","default":""},"containerHeight":{"type":"number","default":70},"containerHeightLargeDesktop":{"type":"number","default":80},"containerHeightDesktop":{"type":"number","default":70},"containerHeightSmallLaptop":{"type":"number","default":65},"containerHeightTabLand":{"type":"number","default":60},"containerHeightTabPort":{"type":"number","default":55},"containerHeightPhone":{"type":"number","default":50}}}');

/***/ }),

/***/ "./src/services-block/edit.js":
/*!************************************!*\
  !*** ./src/services-block/edit.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





function Edit({
  attributes,
  setAttributes
}) {
  const {
    slides = [],
    storyDuration = 8000,
    previewText,
    linkText,
    blockId
  } = attributes;

  // Ensure slides are properly initialized
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    console.log('useEffect running, current slides:', slides);
    console.log('useEffect running, slides length:', slides?.length);
    if (!slides || slides.length === 0) {
      const defaultSlides = [{
        slideTitle: "Build",
        slideDescription: "We design and develop custom websites and applications that are tailored to your specific needs and goals.",
        slideImg: "",
        slideImgId: 0,
        slideUrl: "#"
      }, {
        slideTitle: "Maintain",
        slideDescription: "We provide ongoing maintenance and support to ensure your digital assets are always up to date.",
        slideImg: "",
        slideImgId: 0,
        slideUrl: "#"
      }, {
        slideTitle: "Support",
        slideDescription: "Our dedicated support team is always available to help you with any issues or questions you may have.",
        slideImg: "",
        slideImgId: 0,
        slideUrl: "#"
      }, {
        slideTitle: "Host",
        slideDescription: "We offer reliable and secure hosting solutions to ensure your website is always online and performing optimally.",
        slideImg: "",
        slideImgId: 0,
        slideUrl: "#"
      }];
      console.log('Setting default slides:', defaultSlides);
      setAttributes({
        slides: defaultSlides
      });
    } else {
      console.log('Slides already exist, no need to set defaults');
      // Force a save to ensure slides are persisted by making a small change
      console.log('Forcing save of existing slides to ensure persistence');
      // Add a timestamp to force a change and trigger save
      const slidesWithTimestamp = slides.map(slide => ({
        ...slide,
        _lastModified: Date.now()
      }));
      setAttributes({
        slides: slidesWithTimestamp
      });
    }
  }, []); // Empty dependency array - only run once on mount

  // Convert slides to services format for editing
  const services = slides ? slides.map(slide => {
    const service = {
      profileImg: slide.slideImg || "",
      profileName: slide.slideTitle !== undefined ? slide.slideTitle : "Build",
      title: slide.slideDescription !== undefined ? slide.slideDescription : "We design and develop custom websites and applications that are tailored to your specific needs and goals.",
      linkLabel: "Read More",
      linkSrc: slide.slideUrl !== undefined ? slide.slideUrl : "#",
      storyImg: slide.slideImg || "",
      storyImgId: slide.slideImgId || 0
    };
    console.log('Building service from slide:', slide, 'Result:', service);
    return service;
  }) : [{
    profileImg: "",
    profileName: "Build",
    title: "We design and develop custom websites and applications that are tailored to your specific needs and goals.",
    linkLabel: "Read More",
    linkSrc: "#",
    storyImg: "",
    storyImgId: 0
  }, {
    profileImg: "",
    profileName: "Maintain",
    title: "We provide ongoing maintenance and support to ensure your digital assets are always up to date.",
    linkLabel: "Discover",
    linkSrc: "#",
    storyImg: "",
    storyImgId: 0
  }, {
    profileImg: "",
    profileName: "Support",
    title: "Our dedicated support team is always available to help you with any issues or questions you may have.",
    linkLabel: "Check It Out",
    linkSrc: "#",
    storyImg: "",
    storyImgId: 0
  }, {
    profileImg: "",
    profileName: "Host",
    title: "We offer reliable and secure hosting solutions to ensure your website is always online and performing optimally.",
    linkLabel: "Learn More",
    linkSrc: "#",
    storyImg: "",
    storyImgId: 0
  }];

  // Function to split title into lines with max 4 words per line
  const splitTitleIntoLines = title => {
    const words = title.split(' ');
    const lines = [];
    let currentLine = [];
    words.forEach((word, index) => {
      currentLine.push(word);

      // Create a new line if we have 4 words or if this is the last word
      if (currentLine.length === 4 || index === words.length - 1) {
        lines.push(currentLine.join(' '));
        currentLine = [];
      }
    });
    return lines;
  };
  const updateService = (index, field, value) => {
    console.log('=== UPDATE SERVICE CALLED ===');
    console.log(`Updating service ${index}, field: ${field}, value:`, value);

    // Get current slides or use default
    const currentSlides = slides || [];
    const newSlides = [...currentSlides];

    // Ensure the slide exists
    if (!newSlides[index]) {
      newSlides[index] = {
        id: index + 1,
        slideTitle: "Build",
        slideDescription: "We design and develop custom websites and applications that are tailored to your specific needs and goals.",
        slideUrl: "#",
        slideTags: [],
        slideImg: "",
        slideImgId: 0
      };
    }

    // Update the specific field
    if (field === 'profileName') {
      newSlides[index].slideTitle = value;
    } else if (field === 'title') {
      newSlides[index].slideDescription = value;
    } else if (field === 'linkSrc') {
      newSlides[index].slideUrl = value;
    } else if (field === 'storyImg') {
      newSlides[index].slideImg = value;
    } else if (field === 'storyImgId') {
      newSlides[index].slideImgId = value;
    }
    console.log('New slides:', newSlides);
    console.log('Setting attributes with slides:', newSlides);
    setAttributes({
      slides: newSlides
    });
  };
  const addService = () => {
    const newService = {
      profileImg: "",
      profileName: "New Service",
      title: "Add your service description here. This will be automatically split into lines with maximum 4 words per line to prevent overflow.",
      linkLabel: "Learn More",
      linkSrc: "#",
      storyImg: "",
      storyImgId: 0
    };
    const newSlides = [...slides, {
      id: slides.length + 1,
      slideTitle: newService.profileName,
      slideDescription: newService.title,
      slideUrl: newService.linkSrc,
      slideTags: [],
      slideImg: newService.storyImg,
      slideImgId: newService.storyImgId || 0
    }];
    setAttributes({
      slides: newSlides
    });
  };
  const removeService = index => {
    if (services.length > 1) {
      const newSlides = slides.filter((_, i) => i !== index);
      setAttributes({
        slides: newSlides
      });
    }
  };
  const moveServiceUp = index => {
    if (index > 0) {
      const newSlides = [...slides];
      const temp = newSlides[index];
      newSlides[index] = newSlides[index - 1];
      newSlides[index - 1] = temp;
      setAttributes({
        slides: newSlides
      });
    }
  };
  const moveServiceDown = index => {
    if (index < slides.length - 1) {
      const newSlides = [...slides];
      const temp = newSlides[index];
      newSlides[index] = newSlides[index + 1];
      newSlides[index + 1] = temp;
      setAttributes({
        slides: newSlides
      });
    }
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
    ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.useBlockProps)(),
    style: {
      height: "95vh"
    },
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('General Settings', 'gsap-hero-block'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Preview Text', 'gsap-hero-block'),
          value: previewText,
          onChange: value => setAttributes({
            previewText: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The text that appears before service names (e.g., "We:")', 'gsap-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Text', 'gsap-hero-block'),
          value: linkText,
          onChange: value => setAttributes({
            linkText: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('The text that appears in the link button', 'gsap-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Story Duration (ms)', 'gsap-hero-block'),
          value: storyDuration,
          onChange: value => setAttributes({
            storyDuration: value
          }),
          min: 3000,
          max: 15000,
          step: 500
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Height Settings', 'gsap-hero-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Container Height (vh)', 'gsap-hero-block'),
          value: attributes.containerHeight || 70,
          onChange: value => setAttributes({
            containerHeight: value
          }),
          min: 30,
          max: 100,
          step: 5,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Default height for all screen sizes', 'gsap-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Large Desktop (1400px+)', 'gsap-hero-block'),
          value: attributes.containerHeightLargeDesktop || 80,
          onChange: value => setAttributes({
            containerHeightLargeDesktop: value
          }),
          min: 30,
          max: 100,
          step: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Desktop (1200px-1399px)', 'gsap-hero-block'),
          value: attributes.containerHeightDesktop || 70,
          onChange: value => setAttributes({
            containerHeightDesktop: value
          }),
          min: 30,
          max: 100,
          step: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Small Laptop (992px-1199px)', 'gsap-hero-block'),
          value: attributes.containerHeightSmallLaptop || 65,
          onChange: value => setAttributes({
            containerHeightSmallLaptop: value
          }),
          min: 30,
          max: 100,
          step: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tablet Landscape (768px-991px)', 'gsap-hero-block'),
          value: attributes.containerHeightTabLand || 60,
          onChange: value => setAttributes({
            containerHeightTabLand: value
          }),
          min: 30,
          max: 100,
          step: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Tablet Portrait (576px-767px)', 'gsap-hero-block'),
          value: attributes.containerHeightTabPort || 55,
          onChange: value => setAttributes({
            containerHeightTabPort: value
          }),
          min: 30,
          max: 100,
          step: 5
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Phone (up to 575px)', 'gsap-hero-block'),
          value: attributes.containerHeightPhone || 50,
          onChange: value => setAttributes({
            containerHeightPhone: value
          }),
          min: 30,
          max: 100,
          step: 5
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: "Block Settings",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Block ID', 'gsap-hero-block'),
          value: blockId,
          onChange: value => setAttributes({
            blockId: value
          }),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add a custom ID to this block for CSS targeting or anchor links.', 'gsap-hero-block')
        })
      }), services.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Service', 'gsap-hero-block') + ' ' + (index + 1),
        initialOpen: index === 0,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Service Name', 'gsap-hero-block'),
          value: service.profileName,
          onChange: value => updateService(index, 'profileName', value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title/Description', 'gsap-hero-block'),
          value: service.title,
          onChange: value => updateService(index, 'title', value),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('This will be automatically split into lines with max 4 words per line', 'gsap-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link Label', 'gsap-hero-block'),
          value: service.linkLabel,
          onChange: value => updateService(index, 'linkLabel', value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Link URL', 'gsap-hero-block'),
          value: service.linkSrc,
          onChange: value => updateService(index, 'linkSrc', value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "media-upload-section",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Story Image', 'gsap-hero-block')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
              onSelect: media => {
                console.log('=== MEDIA UPLOAD SUCCESS ===');
                console.log('Media selected:', media);
                console.log('Media URL:', media.url);
                console.log('Media ID:', media.id);
                console.log('Updating service index:', index);
                updateService(index, 'storyImg', media.url);
                updateService(index, 'storyImgId', media.id);
              },
              onError: error => {
                console.error('Media upload error:', error);
              },
              allowedTypes: ['image'],
              value: service.storyImgId,
              render: ({
                open
              }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "media-upload-controls",
                children: service.storyImg ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                  className: "media-preview",
                  children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                    src: service.storyImg,
                    alt: "",
                    style: {
                      maxWidth: '100px',
                      height: 'auto'
                    }
                  }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    isDestructive: true,
                    onClick: () => {
                      updateService(index, 'storyImg', '');
                      updateService(index, 'storyImgId', 0);
                    },
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove', 'gsap-hero-block')
                  })]
                }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                  isPrimary: true,
                  onClick: open,
                  children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Image', 'gsap-hero-block')
                })
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "service-controls",
          children: services.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "reorder-controls",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                  onClick: () => moveServiceUp(index),
                  disabled: index === 0,
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move Up', 'gsap-hero-block'),
                  children: ["\u2191 ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Up', 'gsap-hero-block')]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                  onClick: () => moveServiceDown(index),
                  disabled: index === services.length - 1,
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move Down', 'gsap-hero-block'),
                  children: ["\u2193 ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Down', 'gsap-hero-block')]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              isDestructive: true,
              onClick: () => removeService(index),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Service', 'gsap-hero-block')
            })]
          })
        })]
      }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add New Service', 'gsap-hero-block'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          isPrimary: true,
          onClick: addService,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Service', 'gsap-hero-block')
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "ad-services-blocks-story-editor",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "story-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "cursor",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            children: "Next"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "ad-services-block-story-img",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "img",
            children: services[0]?.storyImg ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
              src: services[0].storyImg,
              alt: ""
            }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "placeholder-img",
              children: "Story Image"
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "ad-services-block-services-overview",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h1", {
            children: [previewText || "We:", " "]
          }), services.map((service, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            className: `overview__item ${index === 0 ? "active" : ""}`,
            children: service.profileName
          }, index))]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "ad-services-block-story-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            className: "ad-services-block-row",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "ad-services-block-indices",
              children: services.map((_, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "index",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "index-highlight"
                })
              }, index))
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            className: "ad-services-block-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "title",
              children: splitTitleIntoLines(services[0]?.title || '').map((line, lineIndex) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                className: "title-row",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
                  children: line
                })
              }, lineIndex))
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "link",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("a", {
                href: services[0]?.linkSrc || '#',
                target: "_blank",
                rel: "noopener noreferrer",
                children: linkText || 'Read More'
              })
            })]
          })]
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/services-block/index.js":
/*!*************************************!*\
  !*** ./src/services-block/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/services-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/services-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/services-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/services-block/block.json");
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

/***/ "./src/services-block/save.js":
/*!************************************!*\
  !*** ./src/services-block/save.js ***!
  \************************************/
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
    title: slide.slideDescription ? slide.slideDescription.split(' ').reduce((lines, word, index) => {
      const lineIndex = Math.floor(index / 4);
      if (!lines[lineIndex]) lines[lineIndex] = [];
      lines[lineIndex].push(word);
      return lines;
    }, []).map(line => line.join(' ')) : ["We design and develop custom websites", "and applications that are tailored", "to your specific needs and goals."],
    linkLabel: linkText || "Read More",
    linkSrc: slide.slideUrl || "#",
    storyImg: slide.slideImg && slide.slideImg.trim() !== "" ? slide.slideImg : "./assets/build.jpg"
  })) : [{
    profileImg: "./assets/build.jpg",
    profileName: "Build",
    title: ["We design and develop custom websites", "and applications that are tailored", "to your specific needs and goals."],
    linkLabel: "Read More",
    linkSrc: "behance.net",
    storyImg: "./assets/build.jpg"
  }, {
    profileImg: "./assets/maintain.jpg",
    profileName: "Maintain",
    title: ["We provide ongoing maintenance", " and support to ensure ", "your digital assets are always "],
    linkLabel: "Discover",
    linkSrc: "dribbble.com",
    storyImg: "./assets/maintain.jpg"
  }, {
    profileImg: "./assets/support.jpg",
    profileName: "Support",
    title: ["Our dedicated support team", "is always available to", "help you with any issues or questions", "you may have."],
    linkLabel: "Check It Out",
    linkSrc: "awwwards.com",
    storyImg: "./assets/support.jpg"
  }, {
    profileImg: "./assets/host.jpg",
    profileName: "Host",
    title: ["We offer reliable and secure", " hosting solutions to ensure", "your website is always", "online and performing optimally."],
    linkLabel: "Adobe More",
    linkSrc: "adobe.com",
    storyImg: "./assets/host.jpg"
  }];

  // Debug log in development
  if (typeof console !== 'undefined' && "development" === 'development') {
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
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
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
      '--container-height-phone': `${containerHeightPhone || 50}vh`
    },
    'data-stories': JSON.stringify(stories),
    id: blockId || undefined
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      class: "ad-services-block-body",
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        class: "ad-services-block-container",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          class: "ad-services-block-cursor",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            class: "ad-services-block-cursor-text"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          class: "ad-services-block-story-img",
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            class: "img",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
              class: "story-image",
              src: "./assets/build.jpg",
              alt: ""
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "ad-services-block-services-overview",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("h1", {
            children: [previewText || "We:", " "]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
            className: "overview-placeholder"
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          class: "ad-services-block-story-content",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "ad-services-block-row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              class: "ad-services-block-indices"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
              class: "profile",
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                class: "profile-icon",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
                  class: "profile-image",
                  src: "./assets/build.jpg",
                  alt: ""
                })
              }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
                class: "profile-name",
                children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
                  class: "profile-text",
                  children: "Build"
                })
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
            class: "row",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              class: "title"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
              class: "link",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("a", {
                class: "link-text",
                href: "#",
                target: "_blank",
                children: linkText || "Read More"
              })
            })]
          })]
        })]
      })
    })
  });
}

/***/ }),

/***/ "./src/services-block/style.scss":
/*!***************************************!*\
  !*** ./src/services-block/style.scss ***!
  \***************************************/
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
/******/ 			"services-block/index": 0,
/******/ 			"services-block/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["services-block/style-index"], () => (__webpack_require__("./src/services-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map