/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/video-hero-block/block.json":
/*!*****************************************!*\
  !*** ./src/video-hero-block/block.json ***!
  \*****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/video-hero-block","version":"0.1.0","title":"Video Hero Slider","category":"media","icon":"video-alt3","description":"A video slider with smooth transitions using YouTube/Vimeo videos.","example":{},"supports":{"html":false,"align":true,"alignWide":true,"anchor":true,"customClassName":true,"reusable":true},"textdomain":"video-hero-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"videos":{"type":"array","default":[{"id":1,"title":"Premium whitelabel design","description":"Watch this incredible video showcasing our latest work and creative process.","videoUrl":"https://vimeo.com/1118056227","videoType":"vimeo","thumbnail":"","thumbnailId":0,"autoplay":true,"muted":true,"useImage":false,"imageUrl":"","imageId":0},{"id":2,"title":"Bring your ideas to life","description":"Explore our creative journey and see how we bring ideas to life through innovative design.","videoUrl":"https://youtu.be/iUtnZpzkbG8","videoType":"youtube","thumbnail":"","thumbnailId":0,"autoplay":true,"muted":true,"useImage":false,"imageUrl":"","imageId":0},{"id":3,"title":"Award Winning Design","description":"Get an exclusive look behind the scenes of our creative process and team collaboration.","videoUrl":"https://youtu.be/vhpOhHEhVOg","videoType":"youtube","thumbnail":"","thumbnailId":0,"autoplay":true,"muted":true,"useImage":false,"imageUrl":"","imageId":0}]},"transitionDuration":{"type":"number","default":8000},"autoPlay":{"type":"boolean","default":true},"showControls":{"type":"boolean","default":true},"backgroundColor":{"type":"string","default":"#000000"},"textColor":{"type":"string","default":"#ffffff"},"titleFontSize":{"type":"number","default":48},"titleFontSizeUnit":{"type":"string","default":"px"},"titleFontWeight":{"type":"string","default":"700"},"descriptionFontSize":{"type":"number","default":18},"descriptionFontSizeUnit":{"type":"string","default":"px"},"overlayOpacity":{"type":"number","default":0.3},"navArrowLeftColor":{"type":"string","default":"#FFFFFF"},"navArrowLeftColorHover":{"type":"string","default":"#FFFFFF"},"navArrowRightColor":{"type":"string","default":"#FFFFFF"},"navArrowRightColorHover":{"type":"string","default":"#FFFFFF"},"navArrowLeftBgColor":{"type":"string","default":"#6D6D6D"},"navArrowLeftBgColorHover":{"type":"string","default":"#6D6D6D"},"navArrowRightBgColor":{"type":"string","default":"#6D6D6D"},"navArrowRightBgColorHover":{"type":"string","default":"#6D6D6D"},"navArrowLeftBgOpacity":{"type":"number","default":0.1},"navArrowLeftBgOpacityHover":{"type":"number","default":0.4},"navArrowRightBgOpacity":{"type":"number","default":0.1},"navArrowRightBgOpacityHover":{"type":"number","default":0.4},"navArrowLeftBgBlur":{"type":"number","default":12},"navArrowLeftBgBlurHover":{"type":"number","default":12},"navArrowRightBgBlur":{"type":"number","default":12},"navArrowRightBgBlurHover":{"type":"number","default":12},"titleScrollingGap":{"type":"number","default":300},"titleScrollingGapTablet":{"type":"number","default":200},"titleScrollingGapMobile":{"type":"number","default":150},"titleScrollingSpeed":{"type":"number","default":100},"titleFontSizeTablet":{"type":"number","default":36},"titleFontSizeMobile":{"type":"number","default":28},"descriptionFontSizeTablet":{"type":"number","default":16},"descriptionFontSizeMobile":{"type":"number","default":14},"overlayType":{"type":"string","default":"solid"},"overlayGradientStart":{"type":"string","default":"#000000"},"overlayGradientEnd":{"type":"string","default":"#000000"},"overlayGradientDirection":{"type":"string","default":"to bottom"},"overlayGradientStartOpacity":{"type":"number","default":0.5},"overlayGradientEndOpacity":{"type":"number","default":0.3},"blockId":{"type":"string","default":""}}}');

/***/ }),

/***/ "./src/video-hero-block/edit.js":
/*!**************************************!*\
  !*** ./src/video-hero-block/edit.js ***!
  \**************************************/
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
    videos = [],
    transitionDuration = 8000,
    autoPlay = true,
    showControls = true,
    backgroundColor = "#000000",
    textColor = "#ffffff",
    titleFontSize = 48,
    titleFontSizeUnit = "px",
    titleFontWeight = "700",
    descriptionFontSize = 18,
    descriptionFontSizeUnit = "px",
    overlayOpacity = 0.3,
    navArrowLeftColor = "rgba(255, 255, 255, 0.7)",
    blockId,
    navArrowLeftColorHover = "rgba(255, 255, 255, 1)",
    navArrowRightColor = "rgba(138, 43, 226, 0.8)",
    navArrowRightColorHover = "rgba(138, 43, 226, 1)",
    navArrowLeftBgColor = "rgba(255, 255, 255, 0.1)",
    navArrowLeftBgColorHover = "rgba(255, 255, 255, 0.2)",
    navArrowRightBgColor = "rgba(255, 255, 255, 0.1)",
    navArrowRightBgColorHover = "rgba(255, 255, 255, 0.2)",
    navArrowLeftBgOpacity = 0.1,
    navArrowLeftBgOpacityHover = 0.2,
    navArrowRightBgOpacity = 0.1,
    navArrowRightBgOpacityHover = 0.2,
    navArrowLeftBgBlur = 0,
    navArrowLeftBgBlurHover = 0,
    navArrowRightBgBlur = 0,
    navArrowRightBgBlurHover = 0,
    titleScrollingGap = 300,
    titleScrollingGapTablet = 200,
    titleScrollingGapMobile = 150,
    titleScrollingSpeed = 100,
    titleFontSizeTablet = 36,
    titleFontSizeMobile = 28,
    descriptionFontSizeTablet = 16,
    descriptionFontSizeMobile = 14,
    overlayType = "solid",
    overlayGradientStart = "#ff0000",
    overlayGradientEnd = "#0000ff",
    overlayGradientDirection = "to bottom",
    overlayGradientStartOpacity = 0.5,
    overlayGradientEndOpacity = 0.3
  } = attributes;

  // Helper function to convert hex color to RGB and apply opacity (same as save.js)
  const applyOpacityToColor = (colorString, opacity) => {
    if (!colorString) return `rgba(255, 255, 255, ${opacity})`;

    // Handle hex colors (e.g., #ff0000 or #f00)
    if (colorString.startsWith('#')) {
      const hex = colorString.replace('#', '');
      let r, g, b;
      if (hex.length === 3) {
        // Short hex format (#f00)
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        // Full hex format (#ff0000)
        r = parseInt(hex.substr(0, 2), 16);
        g = parseInt(hex.substr(2, 2), 16);
        b = parseInt(hex.substr(4, 2), 16);
      } else {
        // Invalid hex, fallback
        return `rgba(255, 255, 255, ${opacity})`;
      }
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    // Handle existing rgba/rgb strings
    const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      const r = match[1];
      const g = match[2];
      const b = match[3];
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    // Fallback if parsing fails
    return `rgba(255, 255, 255, ${opacity})`;
  };

  // Helper function to generate overlay background (same as save.js)
  const getOverlayBackground = () => {
    if (overlayType === 'gradient') {
      const startColor = applyOpacityToColor(overlayGradientStart, overlayGradientStartOpacity || 0.5);
      const endColor = applyOpacityToColor(overlayGradientEnd, overlayGradientEndOpacity || 0.3);
      return `linear-gradient(${overlayGradientDirection || 'to bottom'}, ${startColor}, ${endColor})`;
    } else {
      return `rgba(0, 0, 0, ${overlayOpacity || 0.3})`;
    }
  };

  // Ensure videos are properly initialized
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_2__.useEffect)(() => {
    console.log('useEffect running, current videos:', videos);
    console.log('useEffect running, videos length:', videos?.length);

    // Always set videos if they don't exist or are empty
    if (!videos || videos.length === 0) {
      const defaultVideos = [{
        id: 1,
        title: "Premium whitelabel design",
        description: "Watch this incredible video showcasing our latest work and creative process.",
        videoUrl: "https://vimeo.com/1118056227",
        videoType: "vimeo",
        thumbnail: "",
        thumbnailId: 0,
        autoplay: true,
        muted: true,
        useImage: false,
        imageUrl: "",
        imageId: 0
      }, {
        id: 2,
        title: "Bring your ideas to life",
        description: "Explore our creative journey and see how we bring ideas to life through innovative design.",
        videoUrl: "https://youtu.be/vhpOhHEhVOg",
        videoType: "youtube",
        thumbnail: "",
        thumbnailId: 0,
        autoplay: true,
        muted: true,
        useImage: false,
        imageUrl: "",
        imageId: 0
      }, {
        id: 3,
        title: "Award Winning Design",
        description: "Get an exclusive look behind the scenes of our creative process and team collaboration.",
        videoUrl: "https://youtu.be/iUtnZpzkbG8",
        videoType: "youtube",
        thumbnail: "",
        thumbnailId: 0,
        autoplay: true,
        muted: true,
        useImage: false,
        imageUrl: "",
        imageId: 0
      }];
      console.log('Setting default videos:', defaultVideos);
      setAttributes({
        videos: defaultVideos
      });
    } else {
      console.log('Videos already exist, no need to set defaults');
      // Force a save to ensure videos are persisted by making a small change
      console.log('Forcing save of existing videos to ensure persistence');
      // Add a timestamp to force a change and trigger save
      const videosWithTimestamp = videos.map(video => ({
        ...video,
        _lastModified: Date.now()
      }));
      setAttributes({
        videos: videosWithTimestamp
      });
    }
  }, []); // Empty dependency array - only run once on mount

  // Helper function to extract video ID from URL
  const getVideoId = (url, type) => {
    if (type === 'youtube') {
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
      return match ? match[1] : '';
    } else if (type === 'vimeo') {
      const match = url.match(/(?:vimeo\.com\/)([0-9]+)/);
      return match ? match[1] : '';
    }
    return '';
  };

  // Helper function to get thumbnail URL
  const getThumbnailUrl = (videoId, type) => {
    if (type === 'youtube') {
      return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    } else if (type === 'vimeo') {
      // Vimeo requires API call for thumbnails, so we'll use a placeholder
      return '';
    }
    return '';
  };
  const updateVideo = (index, field, value) => {
    const currentVideos = videos || [];
    const newVideos = [...currentVideos];

    // Ensure the video exists
    if (!newVideos[index]) {
      newVideos[index] = {
        id: index + 1,
        title: "New Video",
        description: "Add your video description here.",
        videoUrl: "",
        videoType: "youtube",
        thumbnail: "",
        thumbnailId: 0,
        autoplay: true,
        muted: true,
        useImage: false,
        imageUrl: "",
        imageId: 0
      };
    }

    // Update the specific field
    newVideos[index][field] = value;

    // Auto-update thumbnail for YouTube videos
    if (field === 'videoUrl' && newVideos[index].videoType === 'youtube') {
      const videoId = getVideoId(value, 'youtube');
      if (videoId) {
        newVideos[index].thumbnail = getThumbnailUrl(videoId, 'youtube');
      }
    }
    setAttributes({
      videos: newVideos
    });
  };
  const addVideo = () => {
    const newVideo = {
      id: (videos ? videos.length : 0) + 1,
      title: "New Video",
      description: "Add your video description here.",
      videoUrl: "",
      videoType: "youtube",
      thumbnail: "",
      thumbnailId: 0,
      autoplay: true,
      muted: true,
      useImage: false,
      imageUrl: "",
      imageId: 0
    };
    const newVideos = [...(videos || []), newVideo];
    setAttributes({
      videos: newVideos
    });
  };
  const removeVideo = index => {
    if (videos && videos.length > 1) {
      const newVideos = videos.filter((_, i) => i !== index);
      setAttributes({
        videos: newVideos
      });
    }
  };
  const moveVideoUp = index => {
    if (index > 0 && videos) {
      const newVideos = [...videos];
      const temp = newVideos[index];
      newVideos[index] = newVideos[index - 1];
      newVideos[index - 1] = temp;
      setAttributes({
        videos: newVideos
      });
    }
  };
  const moveVideoDown = index => {
    if (index < (videos ? videos.length - 1 : 0) && videos) {
      const newVideos = [...videos];
      const temp = newVideos[index];
      newVideos[index] = newVideos[index + 1];
      newVideos[index + 1] = temp;
      setAttributes({
        videos: newVideos
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
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video Slider Settings', 'video-hero-block'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Transition Duration (ms)', 'video-hero-block'),
          value: transitionDuration,
          onChange: value => setAttributes({
            transitionDuration: value
          }),
          min: 3000,
          max: 25000,
          step: 500
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Auto Play', 'video-hero-block'),
          checked: autoPlay,
          onChange: value => setAttributes({
            autoPlay: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Show Controls', 'video-hero-block'),
          checked: showControls,
          onChange: value => setAttributes({
            showControls: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlay Opacity', 'video-hero-block'),
          value: overlayOpacity,
          onChange: value => setAttributes({
            overlayOpacity: value
          }),
          min: 0,
          max: 1,
          step: 0.1
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Styling', 'video-hero-block'),
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Color', 'video-hero-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: backgroundColor,
            onChangeComplete: color => setAttributes({
              backgroundColor: color.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Text Color', 'video-hero-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: textColor,
            onChangeComplete: color => setAttributes({
              textColor: color.hex
            }),
            disableAlpha: true
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              flex: 1
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Font Size', 'video-hero-block'),
              value: titleFontSize,
              onChange: value => {
                // Allow any input - we'll validate on blur
                if (value === '') {
                  setAttributes({
                    titleFontSize: ''
                  });
                } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
                  setAttributes({
                    titleFontSize: parseFloat(value)
                  });
                }
              },
              onBlur: e => {
                // Validate on blur and clamp to range
                const value = e.target.value;
                if (value === '') {
                  setAttributes({
                    titleFontSize: 48
                  });
                } else {
                  const numValue = parseFloat(value);
                  if (isNaN(numValue) || numValue < 12) {
                    setAttributes({
                      titleFontSize: 12
                    });
                  } else if (numValue > 120) {
                    setAttributes({
                      titleFontSize: 120
                    });
                  }
                }
              },
              type: "number",
              min: 12,
              max: 120,
              step: 1
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              flex: '0 0 auto',
              marginTop: '20px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
              value: titleFontSizeUnit,
              onChange: value => setAttributes({
                titleFontSizeUnit: value
              }),
              options: [{
                label: 'px',
                value: 'px'
              }, {
                label: 'em',
                value: 'em'
              }, {
                label: 'rem',
                value: 'rem'
              }, {
                label: '%',
                value: '%'
              }, {
                label: 'vw',
                value: 'vw'
              }, {
                label: 'vh',
                value: 'vh'
              }]
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Font Weight', 'video-hero-block'),
          value: titleFontWeight,
          onChange: value => setAttributes({
            titleFontWeight: value
          }),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Light (300)', 'video-hero-block'),
            value: '300'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Normal (400)', 'video-hero-block'),
            value: '400'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Medium (500)', 'video-hero-block'),
            value: '500'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Semi Bold (600)', 'video-hero-block'),
            value: '600'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Bold (700)', 'video-hero-block'),
            value: '700'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Extra Bold (800)', 'video-hero-block'),
            value: '800'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Black (900)', 'video-hero-block'),
            value: '900'
          }]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Scrolling Gap', 'video-hero-block'),
          value: titleScrollingGap,
          onChange: value => setAttributes({
            titleScrollingGap: value
          }),
          min: 0,
          max: 1000,
          step: 10,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Space between repeated text copies in the scrolling animation', 'video-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Scrolling Gap (Tablet)', 'video-hero-block'),
          value: titleScrollingGapTablet,
          onChange: value => setAttributes({
            titleScrollingGapTablet: value
          }),
          min: 0,
          max: 800,
          step: 10,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Space between repeated text copies on tablet screens (768px and below)', 'video-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Scrolling Gap (Mobile)', 'video-hero-block'),
          value: titleScrollingGapMobile,
          onChange: value => setAttributes({
            titleScrollingGapMobile: value
          }),
          min: 0,
          max: 600,
          step: 10,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Space between repeated text copies on mobile screens (480px and below)', 'video-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Scrolling Speed', 'video-hero-block'),
          value: titleScrollingSpeed,
          onChange: value => setAttributes({
            titleScrollingSpeed: value
          }),
          min: 20,
          max: 500,
          step: 10,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Speed of the scrolling animation in pixels per second', 'video-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            display: 'flex',
            gap: '8px',
            alignItems: 'center'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              flex: 1
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description Font Size', 'video-hero-block'),
              value: descriptionFontSize,
              onChange: value => {
                // Allow any input - we'll validate on blur
                if (value === '') {
                  setAttributes({
                    descriptionFontSize: ''
                  });
                } else if (!isNaN(parseFloat(value)) && isFinite(value)) {
                  setAttributes({
                    descriptionFontSize: parseFloat(value)
                  });
                }
              },
              onBlur: e => {
                // Validate on blur and clamp to range
                const value = e.target.value;
                if (value === '') {
                  setAttributes({
                    descriptionFontSize: 18
                  });
                } else {
                  const numValue = parseFloat(value);
                  if (isNaN(numValue) || numValue < 8) {
                    setAttributes({
                      descriptionFontSize: 8
                    });
                  } else if (numValue > 48) {
                    setAttributes({
                      descriptionFontSize: 48
                    });
                  }
                }
              },
              type: "number",
              min: 8,
              max: 48,
              step: 1
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              flex: '0 0 auto',
              marginTop: '20px'
            },
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
              value: descriptionFontSizeUnit,
              onChange: value => setAttributes({
                descriptionFontSizeUnit: value
              }),
              options: [{
                label: 'px',
                value: 'px'
              }, {
                label: 'em',
                value: 'em'
              }, {
                label: 'rem',
                value: 'rem'
              }, {
                label: '%',
                value: '%'
              }, {
                label: 'vw',
                value: 'vw'
              }, {
                label: 'vh',
                value: 'vh'
              }]
            })
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Responsive Font Sizes', 'video-hero-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Font Size (Tablet)', 'video-hero-block'),
          value: titleFontSizeTablet,
          onChange: value => setAttributes({
            titleFontSizeTablet: value
          }),
          min: 16,
          max: 200,
          step: 1,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font size for title on tablet screens (768px and below)', 'video-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Title Font Size (Mobile)', 'video-hero-block'),
          value: titleFontSizeMobile,
          onChange: value => setAttributes({
            titleFontSizeMobile: value
          }),
          min: 12,
          max: 200,
          step: 1,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font size for title on mobile screens (480px and below)', 'video-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description Font Size (Tablet)', 'video-hero-block'),
          value: descriptionFontSizeTablet,
          onChange: value => setAttributes({
            descriptionFontSizeTablet: value
          }),
          min: 8,
          max: 200,
          step: 1,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font size for description on tablet screens (768px and below)', 'video-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Description Font Size (Mobile)', 'video-hero-block'),
          value: descriptionFontSizeMobile,
          onChange: value => setAttributes({
            descriptionFontSizeMobile: value
          }),
          min: 8,
          max: 200,
          step: 1,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Font size for description on mobile screens (480px and below)', 'video-hero-block')
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video Overlay', 'video-hero-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlay Type', 'video-hero-block'),
          value: overlayType,
          onChange: value => setAttributes({
            overlayType: value
          }),
          options: [{
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Solid Color', 'video-hero-block'),
            value: 'solid'
          }, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient', 'video-hero-block'),
            value: 'gradient'
          }]
        }), overlayType === 'solid' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Overlay Opacity', 'video-hero-block'),
          value: overlayOpacity,
          onChange: value => setAttributes({
            overlayOpacity: value
          }),
          min: 0,
          max: 1,
          step: 0.1,
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Opacity of the solid overlay (0 = transparent, 1 = opaque)', 'video-hero-block')
        }), overlayType === 'gradient' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient Start Color', 'video-hero-block'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
              color: overlayGradientStart,
              onChangeComplete: color => setAttributes({
                overlayGradientStart: color.hex
              }),
              disableAlpha: true
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Start Color Opacity', 'video-hero-block'),
            value: overlayGradientStartOpacity,
            onChange: value => setAttributes({
              overlayGradientStartOpacity: value
            }),
            min: 0,
            max: 1,
            step: 0.1,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Opacity of the gradient start color (0 = transparent, 1 = opaque)', 'video-hero-block')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient End Color', 'video-hero-block'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
              color: overlayGradientEnd,
              onChangeComplete: color => setAttributes({
                overlayGradientEnd: color.hex
              }),
              disableAlpha: true
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('End Color Opacity', 'video-hero-block'),
            value: overlayGradientEndOpacity,
            onChange: value => setAttributes({
              overlayGradientEndOpacity: value
            }),
            min: 0,
            max: 1,
            step: 0.1,
            help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Opacity of the gradient end color (0 = transparent, 1 = opaque)', 'video-hero-block')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Gradient Direction', 'video-hero-block'),
            value: overlayGradientDirection,
            onChange: value => setAttributes({
              overlayGradientDirection: value
            }),
            options: [{
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Bottom', 'video-hero-block'),
              value: 'to bottom'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Top', 'video-hero-block'),
              value: 'to top'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Right', 'video-hero-block'),
              value: 'to right'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Left', 'video-hero-block'),
              value: 'to left'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Bottom Right', 'video-hero-block'),
              value: 'to bottom right'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Bottom Left', 'video-hero-block'),
              value: 'to bottom left'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Top Right', 'video-hero-block'),
              value: 'to top right'
            }, {
              label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('To Top Left', 'video-hero-block'),
              value: 'to top left'
            }]
          })]
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Navigation Arrow Colors', 'video-hero-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Arrow Color', 'video-hero-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: navArrowLeftColor,
            onChangeComplete: color => setAttributes({
              navArrowLeftColor: color.hex
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Arrow Hover Color', 'video-hero-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: navArrowLeftColorHover,
            onChangeComplete: color => setAttributes({
              navArrowLeftColorHover: color.hex
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Arrow Color', 'video-hero-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: navArrowRightColor,
            onChangeComplete: color => setAttributes({
              navArrowRightColor: color.hex
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Arrow Hover Color', 'video-hero-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: navArrowRightColorHover,
            onChangeComplete: color => setAttributes({
              navArrowRightColorHover: color.hex
            })
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Navigation Arrow Background Colors', 'video-hero-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Arrow Background Color', 'video-hero-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: navArrowLeftBgColor,
            onChangeComplete: color => setAttributes({
              navArrowLeftBgColor: color.hex
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Arrow Background Hover Color', 'video-hero-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: navArrowLeftBgColorHover,
            onChangeComplete: color => setAttributes({
              navArrowLeftBgColorHover: color.hex
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Arrow Background Color', 'video-hero-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: navArrowRightBgColor,
            onChangeComplete: color => setAttributes({
              navArrowRightBgColor: color.hex
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Arrow Background Hover Color', 'video-hero-block'),
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ColorPicker, {
            color: navArrowRightBgColorHover,
            onChangeComplete: color => setAttributes({
              navArrowRightBgColorHover: color.hex
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Arrow Background Opacity', 'video-hero-block'),
          value: navArrowLeftBgOpacity,
          onChange: value => setAttributes({
            navArrowLeftBgOpacity: value
          }),
          min: 0,
          max: 1,
          step: 0.1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Arrow Background Opacity (Hover)', 'video-hero-block'),
          value: navArrowLeftBgOpacityHover,
          onChange: value => setAttributes({
            navArrowLeftBgOpacityHover: value
          }),
          min: 0,
          max: 1,
          step: 0.1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Arrow Background Opacity', 'video-hero-block'),
          value: navArrowRightBgOpacity,
          onChange: value => setAttributes({
            navArrowRightBgOpacity: value
          }),
          min: 0,
          max: 1,
          step: 0.1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Arrow Background Opacity (Hover)', 'video-hero-block'),
          value: navArrowRightBgOpacityHover,
          onChange: value => setAttributes({
            navArrowRightBgOpacityHover: value
          }),
          min: 0,
          max: 1,
          step: 0.1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Arrow Background Blur', 'video-hero-block'),
          value: navArrowLeftBgBlur,
          onChange: value => setAttributes({
            navArrowLeftBgBlur: value
          }),
          min: 0,
          max: 20,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Left Arrow Background Blur (Hover)', 'video-hero-block'),
          value: navArrowLeftBgBlurHover,
          onChange: value => setAttributes({
            navArrowLeftBgBlurHover: value
          }),
          min: 0,
          max: 20,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Arrow Background Blur', 'video-hero-block'),
          value: navArrowRightBgBlur,
          onChange: value => setAttributes({
            navArrowRightBgBlur: value
          }),
          min: 0,
          max: 20,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Right Arrow Background Blur (Hover)', 'video-hero-block'),
          value: navArrowRightBgBlurHover,
          onChange: value => setAttributes({
            navArrowRightBgBlurHover: value
          }),
          min: 0,
          max: 20,
          step: 1
        })]
      }), (videos || []).map((video, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video', 'video-hero-block') + ' ' + (index + 1),
        initialOpen: index === 0,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video Title', 'video-hero-block'),
          value: video.title || '',
          onChange: value => updateVideo(index, 'title', value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextareaControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video Description', 'video-hero-block'),
          value: video.description || '',
          onChange: value => updateVideo(index, 'description', value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video Type', 'video-hero-block'),
          value: video.videoType || 'youtube',
          options: [{
            label: 'YouTube',
            value: 'youtube'
          }, {
            label: 'Vimeo',
            value: 'vimeo'
          }],
          onChange: value => updateVideo(index, 'videoType', value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Video URL', 'video-hero-block'),
          value: video.videoUrl || '',
          onChange: value => updateVideo(index, 'videoUrl', value),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Enter YouTube or Vimeo URL', 'video-hero-block')
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Autoplay', 'video-hero-block'),
          checked: video.autoplay !== false,
          onChange: value => updateVideo(index, 'autoplay', value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Muted', 'video-hero-block'),
          checked: video.muted !== false,
          onChange: value => updateVideo(index, 'muted', value)
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Use Static Image Instead of Video', 'video-hero-block'),
          checked: video.useImage === true,
          onChange: value => updateVideo(index, 'useImage', value),
          help: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Toggle to use a static background image instead of video', 'video-hero-block')
        }), video.useImage && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.BaseControl, {
            label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Background Image', 'video-hero-block'),
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUploadCheck, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__.MediaUpload, {
                onSelect: media => {
                  updateVideo(index, 'imageUrl', media.url);
                  updateVideo(index, 'imageId', media.id);
                },
                allowedTypes: ['image'],
                value: video.imageId || 0,
                render: ({
                  open
                }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
                  className: "image-upload-control",
                  children: video.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
                    className: "image-preview",
                    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                      src: video.imageUrl,
                      alt: "Background",
                      style: {
                        maxWidth: '100%',
                        height: 'auto',
                        maxHeight: '200px'
                      }
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                      onClick: open,
                      variant: "secondary",
                      style: {
                        marginTop: '10px'
                      },
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Change Image', 'video-hero-block')
                    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                      onClick: () => {
                        updateVideo(index, 'imageUrl', '');
                        updateVideo(index, 'imageId', 0);
                      },
                      variant: "link",
                      isDestructive: true,
                      style: {
                        marginTop: '5px'
                      },
                      children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Image', 'video-hero-block')
                    })]
                  }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                    onClick: open,
                    variant: "primary",
                    children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Select Background Image', 'video-hero-block')
                  })
                })
              })
            })
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "video-controls",
          children: videos && videos.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              className: "reorder-controls",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ButtonGroup, {
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                  onClick: () => moveVideoUp(index),
                  disabled: index === 0,
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move Up', 'video-hero-block'),
                  children: ["\u2191 ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Up', 'video-hero-block')]
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
                  onClick: () => moveVideoDown(index),
                  disabled: index === (videos ? videos.length - 1 : 0),
                  label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Move Down', 'video-hero-block'),
                  children: ["\u2193 ", (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Down', 'video-hero-block')]
                })]
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
              isDestructive: true,
              onClick: () => removeVideo(index),
              children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Remove Video', 'video-hero-block')
            })]
          })
        })]
      }, index)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add New Video', 'video-hero-block'),
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Button, {
          isPrimary: true,
          onClick: addVideo,
          children: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__.__)('Add Video', 'video-hero-block')
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
        title: "Block Settings",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
          label: "Block ID",
          value: blockId,
          onChange: value => setAttributes({
            blockId: value
          }),
          help: "Add a custom ID to this block for CSS targeting or anchor links."
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
      className: "video-hero-editor",
      style: {
        backgroundColor: backgroundColor,
        color: textColor,
        height: '100%',
        position: 'relative',
        overflow: 'hidden'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: "video-container",
        style: {
          position: 'relative',
          height: '100%'
        },
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "video-preview",
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(45deg, #333, #666)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#fff'
          },
          children: videos && videos[0] ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              textAlign: 'center'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              style: {
                fontSize: '24px',
                marginBottom: '10px'
              },
              children: [videos[0].videoType === 'youtube' ? '📺' : '🎬', " ", videos[0].title]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
              style: {
                fontSize: '14px',
                opacity: 0.8
              },
              children: videos[0].description
            })]
          }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            children: "Add videos to see preview"
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "video-overlay",
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: getOverlayBackground(),
            pointerEvents: 'none'
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "video-content",
          style: {
            position: 'absolute',
            bottom: '40px',
            left: '40px',
            right: '40px',
            zIndex: 2
          },
          children: videos && videos[0] && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h1", {
              style: {
                fontSize: `${titleFontSize}px`,
                fontWeight: titleFontWeight,
                margin: '0 0 10px 0'
              },
              children: videos[0].title
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
              style: {
                fontSize: `${descriptionFontSize}px`,
                margin: '0 0 20px 0',
                opacity: 0.9
              },
              children: videos[0].description
            })]
          })
        }), videos && videos.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "video-indicators",
          style: {
            position: 'absolute',
            bottom: '20px',
            right: '40px',
            display: 'flex',
            gap: '10px',
            zIndex: 2
          },
          children: videos.map((_, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
            style: {
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: index === 0 ? textColor : 'rgba(255, 255, 255, 0.5)',
              cursor: 'pointer'
            }
          }, index))
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "video-cursor",
          style: {
            position: 'absolute',
            top: '50%',
            right: '40px',
            transform: 'translateY(-50%)',
            zIndex: 2,
            background: 'rgba(255, 255, 255, 0.2)',
            padding: '10px 15px',
            borderRadius: '20px',
            fontSize: '14px',
            backdropFilter: 'blur(10px)'
          },
          children: "Next"
        })]
      })
    })]
  });
}

/***/ }),

/***/ "./src/video-hero-block/index.js":
/*!***************************************!*\
  !*** ./src/video-hero-block/index.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/video-hero-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/video-hero-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/video-hero-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/video-hero-block/block.json");
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
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"],
  /**
   * Provide block data to frontend
   */
  providesContext: {
    'video-hero-block/videos': 'videos',
    'video-hero-block/transitionDuration': 'transitionDuration',
    'video-hero-block/autoPlay': 'autoPlay',
    'video-hero-block/showControls': 'showControls'
  }
});

/***/ }),

/***/ "./src/video-hero-block/save.js":
/*!**************************************!*\
  !*** ./src/video-hero-block/save.js ***!
  \**************************************/
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
    videos,
    transitionDuration,
    autoPlay,
    showControls,
    backgroundColor,
    textColor,
    titleFontSize,
    titleFontSizeUnit,
    titleFontWeight,
    descriptionFontSize,
    descriptionFontSizeUnit,
    overlayOpacity,
    navArrowLeftColor,
    navArrowLeftColorHover,
    navArrowRightColor,
    navArrowRightColorHover,
    blockId,
    navArrowLeftBgColor,
    navArrowLeftBgColorHover,
    navArrowRightBgColor,
    navArrowRightBgColorHover,
    navArrowLeftBgOpacity,
    navArrowLeftBgOpacityHover,
    navArrowRightBgOpacity,
    navArrowRightBgOpacityHover,
    navArrowLeftBgBlur,
    navArrowLeftBgBlurHover,
    navArrowRightBgBlur,
    navArrowRightBgBlurHover,
    titleScrollingGap,
    titleScrollingGapTablet,
    titleScrollingGapMobile,
    titleScrollingSpeed,
    titleFontSizeTablet,
    titleFontSizeMobile,
    descriptionFontSizeTablet,
    descriptionFontSizeMobile,
    overlayType,
    overlayGradientStart,
    overlayGradientEnd,
    overlayGradientDirection,
    overlayGradientStartOpacity,
    overlayGradientEndOpacity
  } = attributes;

  // Helper function to convert hex color to RGB and apply opacity
  const applyOpacityToColor = (colorString, opacity) => {
    if (!colorString) return `rgba(255, 255, 255, ${opacity})`;

    // Handle hex colors (e.g., #ff0000 or #f00)
    if (colorString.startsWith('#')) {
      const hex = colorString.replace('#', '');
      let r, g, b;
      if (hex.length === 3) {
        // Short hex format (#f00)
        r = parseInt(hex[0] + hex[0], 16);
        g = parseInt(hex[1] + hex[1], 16);
        b = parseInt(hex[2] + hex[2], 16);
      } else if (hex.length === 6) {
        // Full hex format (#ff0000)
        r = parseInt(hex.substr(0, 2), 16);
        g = parseInt(hex.substr(2, 2), 16);
        b = parseInt(hex.substr(4, 2), 16);
      } else {
        // Invalid hex, fallback
        return `rgba(255, 255, 255, ${opacity})`;
      }
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    // Handle existing rgba/rgb strings
    const match = colorString.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (match) {
      const r = match[1];
      const g = match[2];
      const b = match[3];
      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    }

    // Fallback if parsing fails
    return `rgba(255, 255, 255, ${opacity})`;
  };

  // Helper function to generate overlay background
  const getOverlayBackground = () => {
    if (overlayType === 'gradient') {
      const startColor = applyOpacityToColor(overlayGradientStart, overlayGradientStartOpacity || 0.5);
      const endColor = applyOpacityToColor(overlayGradientEnd, overlayGradientEndOpacity || 0.3);
      return `linear-gradient(${overlayGradientDirection || 'to bottom'}, ${startColor}, ${endColor})`;
    } else {
      return `rgba(0, 0, 0, ${overlayOpacity || 0.3})`;
    }
  };

  // Helper function to extract video ID from URL
  const getVideoId = (url, type) => {
    if (type === "youtube") {
      const match = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/);
      return match ? match[1] : "";
    } else if (type === "vimeo") {
      const match = url.match(/(?:vimeo\.com\/)([0-9]+)/);
      return match ? match[1] : "";
    }
    return "";
  };

  // Helper function to get embed URL
  const getEmbedUrl = (url, type, autoplay = true, muted = true) => {
    const videoId = getVideoId(url, type);
    if (!videoId) return "";
    if (type === "youtube") {
      const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        mute: muted ? "1" : "0",
        controls: showControls ? "1" : "0",
        loop: "1",
        playlist: videoId,
        rel: "0",
        modestbranding: "1"
      });
      return `https://www.youtube.com/embed/${videoId}?${params.toString()}`;
    } else if (type === "vimeo") {
      const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        muted: muted ? "1" : "0",
        controls: showControls ? "1" : "0",
        loop: "1",
        background: "1"
      });
      return `https://player.vimeo.com/video/${videoId}?${params.toString()}`;
    }
    return "";
  };
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
    className: "ad-video-hero-block",
    "data-videos": JSON.stringify(videos),
    "data-transition-duration": transitionDuration,
    "data-autoplay": autoPlay,
    "data-show-controls": showControls,
    style: {
      backgroundColor: backgroundColor || "#000000",
      color: textColor || "#ffffff",
      "--text-color": textColor || "#ffffff",
      "--title-font-size": `${titleFontSize || 48}${titleFontSizeUnit || "px"}`,
      "--title-font-weight": titleFontWeight || "700",
      "--description-font-size": `${descriptionFontSize || 18}${descriptionFontSizeUnit || "px"}`,
      "--overlay-opacity": overlayOpacity || 0.3,
      "--nav-arrow-left-color": navArrowLeftColor || "rgba(255, 255, 255, 0.7)",
      "--nav-arrow-left-color-hover": navArrowLeftColorHover || "rgba(255, 255, 255, 1)",
      "--nav-arrow-right-color": navArrowRightColor || "rgba(138, 43, 226, 0.8)",
      "--nav-arrow-right-color-hover": navArrowRightColorHover || "rgba(138, 43, 226, 1)",
      "--nav-arrow-left-bg-color": applyOpacityToColor(navArrowLeftBgColor, navArrowLeftBgOpacity || 0.1),
      "--nav-arrow-left-bg-color-hover": applyOpacityToColor(navArrowLeftBgColorHover, navArrowLeftBgOpacityHover || 0.2),
      "--nav-arrow-right-bg-color": applyOpacityToColor(navArrowRightBgColor, navArrowRightBgOpacity || 0.1),
      "--nav-arrow-right-bg-color-hover": applyOpacityToColor(navArrowRightBgColorHover, navArrowRightBgOpacityHover || 0.2),
      "--nav-arrow-left-bg-blur": `${navArrowLeftBgBlur || 0}px`,
      "--nav-arrow-left-bg-blur-hover": `${navArrowLeftBgBlurHover || 0}px`,
      "--nav-arrow-right-bg-blur": `${navArrowRightBgBlur || 0}px`,
      "--nav-arrow-right-bg-blur-hover": `${navArrowRightBgBlurHover || 0}px`,
      "--title-scrolling-gap": `${titleScrollingGap || 300}px`,
      "--title-scrolling-gap-tablet": `${titleScrollingGapTablet || 200}px`,
      "--title-scrolling-gap-mobile": `${titleScrollingGapMobile || 150}px`,
      "--title-scrolling-speed": titleScrollingSpeed || 100,
      "--title-font-size-tablet": `${titleFontSizeTablet || 36}px`,
      "--title-font-size-mobile": `${titleFontSizeMobile || 28}px`,
      "--description-font-size-tablet": `${descriptionFontSizeTablet || 16}px`,
      "--description-font-size-mobile": `${descriptionFontSizeMobile || 14}px`,
      "--overlay-type": overlayType || "solid",
      "--overlay-gradient-start": overlayGradientStart || "rgba(0, 0, 0, 0.5)",
      "--overlay-gradient-end": overlayGradientEnd || "rgba(0, 0, 0, 0.3)",
      "--overlay-gradient-direction": overlayGradientDirection || "to bottom"
    },
    id: blockId || undefined
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
    ...blockProps,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: "ad-video-hero-block__container",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "ad-video-hero-block__video-background"
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "ad-video-hero-block__video-overlay",
        style: {
          "--overlay-background": getOverlayBackground()
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "ad-video-hero-block__video-content-placeholder",
        style: {
          zIndex: 3
        }
      }), videos && videos.length > 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
        className: "ad-video-hero-block__video-indicators",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "ad-video-hero-block__navigation-arrows",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            className: "ad-video-hero-block__nav-arrow ad-video-hero-block__nav-arrow-left",
            "data-direction": "prev",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"
              })
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("button", {
            className: "ad-video-hero-block__nav-arrow ad-video-hero-block__nav-arrow-right",
            "data-direction": "next",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("svg", {
              viewBox: "0 0 24 24",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("path", {
                d: "M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z"
              })
            })
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
          className: "ad-video-hero-block__progress-indicators"
        })]
      }), videos && videos.length > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "ad-video-hero-block__video-cursor",
        style: {
          zIndex: 10
        },
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("span", {
          className: "ad-video-hero-block__cursor-text",
          children: ">"
        })
      })]
    })
  });
}

/***/ }),

/***/ "./src/video-hero-block/style.scss":
/*!*****************************************!*\
  !*** ./src/video-hero-block/style.scss ***!
  \*****************************************/
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
/******/ 			"video-hero-block/index": 0,
/******/ 			"video-hero-block/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["video-hero-block/style-index"], () => (__webpack_require__("./src/video-hero-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map