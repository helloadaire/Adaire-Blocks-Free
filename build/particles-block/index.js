/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/particles-block/block.json":
/*!****************************************!*\
  !*** ./src/particles-block/block.json ***!
  \****************************************/
/***/ ((module) => {

module.exports = /*#__PURE__*/JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":3,"name":"create-block/particles-block","version":"0.1.0","title":"Particles Block","category":"widgets","icon":"admin-generic","description":"A section with scattered images that move with scroll using GSAP.","example":{},"supports":{"html":false},"textdomain":"particles-block","editorScript":"file:./index.js","editorStyle":"file:./index.css","style":"file:./style-index.css","viewScript":"file:./view.js","attributes":{"sectionHeight":{"type":"number","default":950},"backgroundColor":{"type":"string","default":"#0a0a0a"},"textColor":{"type":"string","default":"#ffffff"},"textContent":{"type":"array","default":[{"id":1,"title":"Meet the Team","description":"We’re a passionate team of creatives and technologists dedicated to crafting meaningful digital experiences that drive results."},{"id":1,"title":"Luthando","description":"Web Dev Lead"},{"id":2,"title":"Reinhold","description":"Project Manager"},{"id":3,"title":"Daryn","description":"Project Manager"},{"id":4,"title":"Hilya","description":"Web Developer (WordPress, Bubble)"},{"id":5,"title":"Patrick","description":"Web Developer (WordPress, Bubble)"},{"id":6,"title":"Douglas","description":"Web Developer (WordPress, Custom)"},{"id":7,"title":"Marvel","description":"QA Tester"},{"id":8,"title":"Gideon","description":"Designer"}]},"particles":{"type":"array","default":[{"id":1,"imageUrl":"","x":20,"y":2,"size":200,"mobileSize":100,"speed":2,"animationEnabled":true,"type":"normal"},{"id":2,"imageUrl":"","x":86,"y":3,"size":160,"mobileSize":80,"speed":0.3,"animationEnabled":true,"type":"normal"},{"id":3,"imageUrl":"","x":76,"y":8,"size":185,"mobileSize":80,"speed":2,"animationEnabled":true,"type":"normal"},{"id":4,"imageUrl":"","x":14,"y":6,"size":175,"mobileSize":80,"speed":1.5,"animationEnabled":true,"type":"normal"},{"id":5,"imageUrl":"","x":61,"y":2,"size":145,"mobileSize":80,"speed":2,"animationEnabled":true,"type":"normal"},{"id":6,"imageUrl":"","x":49,"y":6,"size":150,"mobileSize":100,"speed":1.5,"animationEnabled":true,"type":"normal"},{"id":7,"imageUrl":"","x":38,"y":10,"size":160,"mobileSize":100,"speed":2,"animationEnabled":true,"type":"normal"},{"id":8,"imageUrl":"","x":70,"y":17,"size":420,"mobileSize":180,"speed":0,"animationEnabled":false,"type":"dynamic"},{"id":9,"imageUrl":"","x":70,"y":28,"size":420,"mobileSize":180,"speed":0,"animationEnabled":false,"type":"dynamic"},{"id":10,"imageUrl":"","x":70,"y":39,"size":420,"mobileSize":180,"speed":0,"animationEnabled":false,"type":"dynamic"},{"id":11,"imageUrl":"","x":70,"y":50,"size":420,"mobileSize":180,"speed":0,"animationEnabled":false,"type":"dynamic"},{"id":12,"imageUrl":"","x":70,"y":61,"size":420,"mobileSize":180,"speed":0,"animationEnabled":false,"type":"dynamic"},{"id":13,"imageUrl":"","x":70,"y":83,"size":420,"mobileSize":180,"speed":0,"animationEnabled":false,"type":"dynamic"},{"id":14,"imageUrl":"","x":70,"y":94,"size":420,"mobileSize":180,"speed":0,"animationEnabled":false,"type":"dynamic"}]},"titleFontSize":{"type":"number","default":65},"titleFontFamily":{"type":"string","default":"inherit"},"textFontSize":{"type":"number","default":22},"textFontFamily":{"type":"string","default":"inherit"},"titleFontWeight":{"type":"string","default":"normal"},"textFontWeight":{"type":"string","default":"normal"},"titleMarginTop":{"type":"number","default":0},"titleMarginBottom":{"type":"number","default":1},"textMarginTop":{"type":"number","default":0},"textMarginBottom":{"type":"number","default":0},"gradientOverlay":{"type":"object","default":{"startColor":"#000000","endColor":"#000000","startOpacity":0.8,"endOpacity":0.4,"direction":"to bottom","angle":0,"startStop":46,"endStop":100}},"blockId":{"type":"string","default":""}}}');

/***/ }),

/***/ "./src/particles-block/edit.js":
/*!*************************************!*\
  !*** ./src/particles-block/edit.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Edit)
/* harmony export */ });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/media-utils */ "@wordpress/media-utils");
/* harmony import */ var _wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "react/jsx-runtime");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__);





// Helper function to convert hex to rgba

const hexToRgba = (hex, alpha = 1) => {
  if (!hex || typeof hex !== 'string') return 'rgba(0, 0, 0, 1)';
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length !== 6) return 'rgba(0, 0, 0, 1)';
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return 'rgba(0, 0, 0, 1)';
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
function Edit({
  attributes,
  setAttributes
}) {
  var _gradientOverlay$star2, _gradientOverlay$endO2, _gradientOverlay$star3, _gradientOverlay$endO3;
  const {
    sectionHeight,
    backgroundColor,
    textColor,
    textContent,
    particles,
    gradientOverlay,
    blockId
  } = attributes;
  const blockProps = (0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps)({
    style: {
      backgroundColor: backgroundColor || '#0a0a0a',
      minHeight: `${sectionHeight}vh`,
      position: 'relative',
      overflow: 'hidden'
    }
  });
  const updateParticle = (index, field, value) => {
    const newParticles = [...particles];
    newParticles[index] = {
      ...newParticles[index],
      [field]: value
    };
    setAttributes({
      particles: newParticles
    });
  };
  const addParticle = () => {
    const newParticle = {
      id: Date.now(),
      imageUrl: '',
      x: Math.random() * 80 + 10,
      y: Math.random() * 80 + 10,
      size: Math.random() * 40 + 40,
      speed: Math.random() * 0.5 + 0.2,
      animationEnabled: true,
      type: 'normal'
    };
    setAttributes({
      particles: [...particles, newParticle]
    });
  };
  const removeParticle = index => {
    const newParticles = particles.filter((_, i) => i !== index);
    setAttributes({
      particles: newParticles
    });
  };
  const updateTextContent = (index, field, value) => {
    const newTextContent = [...textContent];
    newTextContent[index] = {
      ...newTextContent[index],
      [field]: value
    };
    setAttributes({
      textContent: newTextContent
    });
  };
  const addTextContent = () => {
    const newText = {
      id: Date.now(),
      title: 'New Section',
      description: 'Add your description here.'
    };
    setAttributes({
      textContent: [...textContent, newText]
    });
  };
  const removeTextContent = index => {
    const newTextContent = textContent.filter((_, i) => i !== index);
    setAttributes({
      textContent: newTextContent
    });
  };
  const reorderTextContent = (fromIndex, toIndex) => {
    const newTextContent = [...textContent];
    const [movedItem] = newTextContent.splice(fromIndex, 1);
    newTextContent.splice(toIndex, 0, movedItem);
    setAttributes({
      textContent: newTextContent
    });
  };
  const reorderParticles = (fromIndex, toIndex) => {
    const newParticles = [...particles];
    const [movedItem] = newParticles.splice(fromIndex, 1);
    newParticles.splice(toIndex, 0, movedItem);
    setAttributes({
      particles: newParticles
    });
  };
  const FONT_FAMILIES = [{
    label: 'Default',
    value: 'inherit'
  }, {
    label: 'Serif',
    value: 'serif'
  }, {
    label: 'Sans-serif',
    value: 'sans-serif'
  }, {
    label: 'Monospace',
    value: 'monospace'
  }, {
    label: 'Cursive',
    value: 'cursive'
  }, {
    label: 'Fantasy',
    value: 'fantasy'
  }, {
    label: 'System UI',
    value: 'system-ui'
  }, {
    label: 'Custom...',
    value: 'custom'
  }];
  const GRADIENT_DIRECTIONS = [{
    label: 'To Right',
    value: 'to right'
  }, {
    label: 'To Left',
    value: 'to left'
  }, {
    label: 'To Bottom',
    value: 'to bottom'
  }, {
    label: 'To Top',
    value: 'to top'
  }, {
    label: 'To Bottom Right',
    value: 'to bottom right'
  }, {
    label: 'To Bottom Left',
    value: 'to bottom left'
  }, {
    label: 'To Top Right',
    value: 'to top right'
  }, {
    label: 'To Top Left',
    value: 'to top left'
  }, {
    label: 'Custom Angle',
    value: 'custom'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.InspectorControls, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "Section Settings",
        initialOpen: true,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: "Section Height (vh)",
          value: sectionHeight,
          onChange: value => setAttributes({
            sectionHeight: value
          }),
          min: 50,
          max: 1000,
          step: 10
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
          label: "Background Color",
          color: backgroundColor,
          onChangeComplete: color => setAttributes({
            backgroundColor: color.hex
          }),
          disableAlpha: true
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
          label: "Text Color",
          color: textColor,
          onChangeComplete: color => setAttributes({
            textColor: color.hex
          }),
          disableAlpha: true
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "Text Content",
        initialOpen: true,
        children: [textContent.map((text, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            border: '1px solid #ddd',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '4px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4", {
              style: {
                margin: 0
              },
              children: ["Text Section ", index + 1]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              style: {
                display: 'flex',
                gap: '5px'
              },
              children: [index > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: () => reorderTextContent(index, index - 1),
                isSmall: true,
                variant: "secondary",
                children: "\u2191"
              }), index < textContent.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: () => reorderTextContent(index, index + 1),
                isSmall: true,
                variant: "secondary",
                children: "\u2193"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: "Title",
            value: text.title,
            onChange: value => updateTextContent(index, 'title', value),
            placeholder: "Enter title..."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
            label: "Description",
            value: text.description,
            onChange: value => updateTextContent(index, 'description', value),
            placeholder: "Enter description..."
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: () => removeTextContent(index),
            isDestructive: true,
            isSmall: true,
            style: {
              marginTop: '10px'
            },
            children: "Remove Text Section"
          })]
        }, text.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          onClick: addTextContent,
          isPrimary: true,
          children: "Add Text Section"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "Particles",
        initialOpen: false,
        children: [particles.map((particle, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          style: {
            border: '1px solid #ddd',
            padding: '10px',
            margin: '10px 0',
            borderRadius: '4px'
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
            style: {
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: '10px'
            },
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("h4", {
              style: {
                margin: 0
              },
              children: ["Particle ", index + 1]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              style: {
                display: 'flex',
                gap: '5px'
              },
              children: [index > 0 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: () => reorderParticles(index, index - 1),
                isSmall: true,
                variant: "secondary",
                children: "\u2191"
              }), index < particles.length - 1 && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: () => reorderParticles(index, index + 1),
                isSmall: true,
                variant: "secondary",
                children: "\u2193"
              })]
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_media_utils__WEBPACK_IMPORTED_MODULE_2__.MediaUpload, {
            onSelect: media => updateParticle(index, 'imageUrl', media.url),
            allowedTypes: ['image'],
            value: particle.imageUrl,
            render: ({
              open
            }) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
                onClick: open,
                isSecondary: true,
                children: particle.imageUrl ? 'Change Image' : 'Select Image'
              }), particle.imageUrl && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
                src: particle.imageUrl,
                alt: "Particle",
                style: {
                  width: '50px',
                  height: '50px',
                  objectFit: 'cover',
                  margin: '5px 0'
                }
              })]
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            label: "X Position (%)",
            value: particle.x,
            onChange: value => updateParticle(index, 'x', value),
            min: 0,
            max: 100,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            label: "Y Position (%)",
            value: particle.y,
            onChange: value => updateParticle(index, 'y', value),
            min: 0,
            max: 100,
            step: 1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            label: "Size (px) - Desktop",
            value: particle.size,
            onChange: value => updateParticle(index, 'size', value),
            min: 20,
            max: 800,
            step: 5
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            label: "Size (px) - Mobile",
            value: particle.mobileSize || particle.size,
            onChange: value => updateParticle(index, 'mobileSize', value),
            min: 10,
            max: 400,
            step: 5
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
            label: "Speed",
            value: particle.speed,
            onChange: value => updateParticle(index, 'speed', value),
            min: 0,
            max: 2,
            step: 0.1
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: "Animation",
            value: particle.animationEnabled !== false ? 'enabled' : 'disabled',
            options: [{
              label: 'Enabled',
              value: 'enabled'
            }, {
              label: 'Disabled',
              value: 'disabled'
            }],
            onChange: value => updateParticle(index, 'animationEnabled', value === 'enabled')
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
            label: "Particle Type",
            value: particle.type || 'normal',
            options: [{
              label: 'Normal',
              value: 'normal'
            }, {
              label: 'Dynamic',
              value: 'dynamic'
            }],
            onChange: value => updateParticle(index, 'type', value),
            help: "Dynamic particles have special interactive behavior with overlays and size changes"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
            onClick: () => removeParticle(index),
            isDestructive: true,
            isSmall: true,
            style: {
              marginTop: '10px'
            },
            children: "Remove Particle"
          })]
        }, particle.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.Button, {
          onClick: addParticle,
          isPrimary: true,
          children: "Add Particle"
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Typography', 'particles-block'),
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
          children: "Title Settings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title Font Size (px)', 'particles-block'),
          value: attributes.titleFontSize,
          min: 16,
          max: 120,
          onChange: value => setAttributes({
            titleFontSize: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title Font Family', 'particles-block'),
          value: attributes.titleFontFamily,
          options: FONT_FAMILIES,
          onChange: value => setAttributes({
            titleFontFamily: value
          })
        }), attributes.titleFontFamily === 'custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom Title Font Family', 'particles-block'),
          value: attributes.titleFontFamilyCustom || '',
          onChange: value => setAttributes({
            titleFontFamily: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title Font Weight', 'particles-block'),
          value: attributes.titleFontWeight || 'normal',
          options: [{
            label: 'Normal',
            value: 'normal'
          }, {
            label: 'Bold',
            value: 'bold'
          }, {
            label: '100 (Thin)',
            value: '100'
          }, {
            label: '200 (Extra Light)',
            value: '200'
          }, {
            label: '300 (Light)',
            value: '300'
          }, {
            label: '400 (Regular)',
            value: '400'
          }, {
            label: '500 (Medium)',
            value: '500'
          }, {
            label: '600 (Semi Bold)',
            value: '600'
          }, {
            label: '700 (Bold)',
            value: '700'
          }, {
            label: '800 (Extra Bold)',
            value: '800'
          }, {
            label: '900 (Black)',
            value: '900'
          }],
          onChange: value => setAttributes({
            titleFontWeight: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title Top Margin (px)', 'particles-block'),
          value: attributes.titleMarginTop || 0,
          min: 0,
          max: 100,
          onChange: value => setAttributes({
            titleMarginTop: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Title Bottom Margin (px)', 'particles-block'),
          value: attributes.titleMarginBottom || 20,
          min: 0,
          max: 100,
          onChange: value => setAttributes({
            titleMarginBottom: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h4", {
          children: "Description Settings"
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Font Size (px)', 'particles-block'),
          value: attributes.textFontSize,
          min: 10,
          max: 60,
          onChange: value => setAttributes({
            textFontSize: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Font Family', 'particles-block'),
          value: attributes.textFontFamily,
          options: FONT_FAMILIES,
          onChange: value => setAttributes({
            textFontFamily: value
          })
        }), attributes.textFontFamily === 'custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Custom Text Font Family', 'particles-block'),
          value: attributes.textFontFamilyCustom || '',
          onChange: value => setAttributes({
            textFontFamily: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Font Weight', 'particles-block'),
          value: attributes.textFontWeight || 'normal',
          options: [{
            label: 'Normal',
            value: 'normal'
          }, {
            label: 'Bold',
            value: 'bold'
          }, {
            label: '100 (Thin)',
            value: '100'
          }, {
            label: '200 (Extra Light)',
            value: '200'
          }, {
            label: '300 (Light)',
            value: '300'
          }, {
            label: '400 (Regular)',
            value: '400'
          }, {
            label: '500 (Medium)',
            value: '500'
          }, {
            label: '600 (Semi Bold)',
            value: '600'
          }, {
            label: '700 (Bold)',
            value: '700'
          }, {
            label: '800 (Extra Bold)',
            value: '800'
          }, {
            label: '900 (Black)',
            value: '900'
          }],
          onChange: value => setAttributes({
            textFontWeight: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Top Margin (px)', 'particles-block'),
          value: attributes.textMarginTop || 0,
          min: 0,
          max: 100,
          onChange: value => setAttributes({
            textMarginTop: value
          })
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_3__.__)('Text Bottom Margin (px)', 'particles-block'),
          value: attributes.textMarginBottom || 0,
          min: 0,
          max: 100,
          onChange: value => setAttributes({
            textMarginBottom: value
          })
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "Gradient Overlay",
        initialOpen: false,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
          label: "Start Color",
          color: gradientOverlay?.startColor || '#000000',
          onChangeComplete: color => {
            var _gradientOverlay$star;
            return setAttributes({
              gradientOverlay: {
                ...gradientOverlay,
                startColor: color.hex,
                startOpacity: color.rgb?.a !== undefined ? color.rgb.a : (_gradientOverlay$star = gradientOverlay?.startOpacity) !== null && _gradientOverlay$star !== void 0 ? _gradientOverlay$star : 0.5
              }
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: "Start Color Opacity",
          value: (_gradientOverlay$star2 = gradientOverlay?.startOpacity) !== null && _gradientOverlay$star2 !== void 0 ? _gradientOverlay$star2 : 0.5,
          onChange: value => setAttributes({
            gradientOverlay: {
              ...gradientOverlay,
              startOpacity: value
            }
          }),
          min: 0,
          max: 1,
          step: 0.1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.ColorPicker, {
          label: "End Color",
          color: gradientOverlay?.endColor || '#000000',
          onChangeComplete: color => {
            var _gradientOverlay$endO;
            return setAttributes({
              gradientOverlay: {
                ...gradientOverlay,
                endColor: color.hex,
                endOpacity: color.rgb?.a !== undefined ? color.rgb.a : (_gradientOverlay$endO = gradientOverlay?.endOpacity) !== null && _gradientOverlay$endO !== void 0 ? _gradientOverlay$endO : 0.5
              }
            });
          }
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: "End Color Opacity",
          value: (_gradientOverlay$endO2 = gradientOverlay?.endOpacity) !== null && _gradientOverlay$endO2 !== void 0 ? _gradientOverlay$endO2 : 0.5,
          onChange: value => setAttributes({
            gradientOverlay: {
              ...gradientOverlay,
              endOpacity: value
            }
          }),
          min: 0,
          max: 1,
          step: 0.1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.SelectControl, {
          label: "Direction",
          value: gradientOverlay?.direction || 'to bottom',
          options: GRADIENT_DIRECTIONS,
          onChange: value => setAttributes({
            gradientOverlay: {
              ...gradientOverlay,
              direction: value
            }
          })
        }), gradientOverlay?.direction === 'custom' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: "Custom Angle (degrees)",
          value: gradientOverlay?.angle || 0,
          onChange: value => setAttributes({
            gradientOverlay: {
              ...gradientOverlay,
              angle: value
            }
          }),
          min: 0,
          max: 360,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: "Start Stop (%)",
          value: gradientOverlay?.startStop || 0,
          onChange: value => setAttributes({
            gradientOverlay: {
              ...gradientOverlay,
              startStop: value
            }
          }),
          min: 0,
          max: 100,
          step: 1
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.RangeControl, {
          label: "End Stop (%)",
          value: gradientOverlay?.endStop || 100,
          onChange: value => setAttributes({
            gradientOverlay: {
              ...gradientOverlay,
              endStop: value
            }
          }),
          min: 0,
          max: 100,
          step: 1
        })]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.PanelBody, {
        title: "Block Settings",
        initialOpen: false,
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__.TextControl, {
          label: "Block ID",
          value: blockId,
          onChange: value => setAttributes({
            blockId: value
          }),
          help: "Add a custom ID to this block for CSS targeting or anchor links."
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("section", {
      ...blockProps,
      children: [particles.map(particle => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
        className: `particle-item ${particle.type === 'dynamic' ? 'dynamic-particle' : ''}`,
        "data-mobile-size": particle.mobileSize || particle.size,
        style: {
          position: 'absolute',
          left: `${particle.x}%`,
          top: `${particle.y}%`,
          width: `${particle.size}px`,
          height: `${particle.size}px`,
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: particle.type === 'dynamic' ? 3 : 1
        },
        children: [particle.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("img", {
          src: particle.imageUrl,
          alt: "Particle",
          style: {
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: '8px'
          }
        }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          style: {
            width: '100%',
            height: '100%',
            backgroundColor: '#666',
            borderRadius: '8px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontSize: '12px'
          },
          children: "No Image"
        }), particle.type === 'dynamic' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
          className: "dynamic-particle-overlay",
          style: {
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            borderRadius: '8px',
            opacity: 1,
            transition: 'opacity 0.3s ease'
          }
        })]
      }, particle.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "gradient-overlay",
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 5,
          background: gradientOverlay && gradientOverlay.startColor && gradientOverlay.endColor ? `linear-gradient(${gradientOverlay.direction === 'custom' ? `${gradientOverlay.angle || 0}deg` : gradientOverlay.direction || 'to bottom'}, 
                ${hexToRgba(gradientOverlay.startColor, (_gradientOverlay$star3 = gradientOverlay.startOpacity) !== null && _gradientOverlay$star3 !== void 0 ? _gradientOverlay$star3 : 0.5)} ${gradientOverlay.startStop || 0}%, 
                ${hexToRgba(gradientOverlay.endColor, (_gradientOverlay$endO3 = gradientOverlay.endOpacity) !== null && _gradientOverlay$endO3 !== void 0 ? _gradientOverlay$endO3 : 0.5)} ${gradientOverlay.endStop || 100}%)` : 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)'
        }
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("div", {
        className: "text-content-overlay",
        style: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          zIndex: 10,
          textAlign: 'left',
          color: textColor || '#ffffff',
          maxWidth: '600px',
          width: '90%'
        },
        children: textContent.map((text, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)("div", {
          className: "text-section",
          style: {
            display: index === 0 ? 'block' : 'none',
            opacity: index === 0 ? 1 : 0
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("h2", {
            style: {
              fontSize: attributes.titleFontSize ? `${attributes.titleFontSize}px` : undefined,
              fontFamily: attributes.titleFontFamily && attributes.titleFontFamily !== 'custom' ? attributes.titleFontFamily : attributes.titleFontFamilyCustom || undefined,
              fontWeight: attributes.titleFontWeight || 'normal',
              marginTop: attributes.titleMarginTop ? `${attributes.titleMarginTop}px` : undefined,
              marginBottom: attributes.titleMarginBottom ? `${attributes.titleMarginBottom}px` : undefined
            },
            children: text.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)("p", {
            style: {
              fontSize: attributes.textFontSize ? `${attributes.textFontSize}px` : undefined,
              fontFamily: attributes.textFontFamily && attributes.textFontFamily !== 'custom' ? attributes.textFontFamily : attributes.textFontFamilyCustom || undefined,
              fontWeight: attributes.textFontWeight || 'normal',
              marginTop: attributes.textMarginTop ? `${attributes.textMarginTop}px` : undefined,
              marginBottom: attributes.textMarginBottom ? `${attributes.textMarginBottom}px` : undefined
            },
            children: text.description
          })]
        }, text.id))
      })]
    })]
  });
}

/***/ }),

/***/ "./src/particles-block/index.js":
/*!**************************************!*\
  !*** ./src/particles-block/index.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style.scss */ "./src/particles-block/style.scss");
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/particles-block/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/particles-block/save.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./block.json */ "./src/particles-block/block.json");
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
 * Every block starts by registering a new block type definition.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-registration/
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

/***/ "./src/particles-block/save.js":
/*!*************************************!*\
  !*** ./src/particles-block/save.js ***!
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


// Helper function to convert hex to rgba

const hexToRgba = (hex, alpha = 1) => {
  if (!hex || typeof hex !== 'string') return 'rgba(0, 0, 0, 1)';
  const cleanHex = hex.replace('#', '');
  if (cleanHex.length !== 6) return 'rgba(0, 0, 0, 1)';
  const r = parseInt(cleanHex.slice(0, 2), 16);
  const g = parseInt(cleanHex.slice(2, 4), 16);
  const b = parseInt(cleanHex.slice(4, 6), 16);
  if (isNaN(r) || isNaN(g) || isNaN(b)) return 'rgba(0, 0, 0, 1)';
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};
function save({
  attributes
}) {
  var _gradientOverlay$star, _gradientOverlay$endO;
  const {
    sectionHeight,
    backgroundColor,
    textColor,
    textContent,
    particles,
    gradientOverlay,
    blockId
  } = attributes;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("section", {
    ..._wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__.useBlockProps.save({
      style: {
        backgroundColor: backgroundColor || '#0a0a0a',
        minHeight: `${sectionHeight}vh`,
        position: 'relative',
        overflow: 'hidden'
      },
      id: blockId || undefined
    }),
    className: "ad-particles-block",
    children: [particles.map(particle => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
      className: `ad-particles-block__particle ad-particles-block__particle-item ${particle.type === 'dynamic' ? 'ad-particles-block__dynamic-particle' : ''}`,
      "data-speed": particle.speed,
      "data-mobile-size": particle.mobileSize || particle.size,
      "data-animation-enabled": particle.animationEnabled !== false,
      "data-particle-type": particle.type || 'normal',
      style: {
        position: 'absolute',
        left: `${particle.x}%`,
        top: `${particle.y}%`,
        width: `${particle.size}px`,
        height: `${particle.size}px`,
        transform: 'translate(-50%, -50%)',
        pointerEvents: 'none',
        zIndex: particle.type === 'dynamic' ? 3 : 1
      },
      children: [particle.imageUrl ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("img", {
        src: particle.imageUrl,
        alt: "Particle",
        style: {
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          borderRadius: '8px'
        }
      }) : /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        style: {
          width: '100%',
          height: '100%',
          backgroundColor: '#666',
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          fontSize: '12px'
        },
        children: "No Image"
      }), particle.type === 'dynamic' && /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "ad-particles-block__dynamic-particle-overlay",
        style: {
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.7)',
          borderRadius: '8px',
          opacity: 1,
          transition: 'opacity 0.3s ease'
        }
      })]
    }, particle.id)), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "ad-particles-block__gradient-overlay",
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 5,
        background: gradientOverlay && gradientOverlay.startColor && gradientOverlay.endColor ? `linear-gradient(${gradientOverlay.direction === 'custom' ? `${gradientOverlay.angle || 0}deg` : gradientOverlay.direction || 'to bottom'}, 
                ${hexToRgba(gradientOverlay.startColor, (_gradientOverlay$star = gradientOverlay.startOpacity) !== null && _gradientOverlay$star !== void 0 ? _gradientOverlay$star : 0.5)} ${gradientOverlay.startStop || 0}%, 
                ${hexToRgba(gradientOverlay.endColor, (_gradientOverlay$endO = gradientOverlay.endOpacity) !== null && _gradientOverlay$endO !== void 0 ? _gradientOverlay$endO : 0.5)} ${gradientOverlay.endStop || 100}%)` : 'linear-gradient(to bottom, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0.5) 100%)'
      }
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "ad-particles-block__text-content-wrapper",
      style: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
        className: "ad-particles-block__text-content-overlay",
        style: {
          textAlign: 'left',
          color: textColor || '#ffffff',
          maxWidth: '600px',
          width: '90%'
        },
        children: textContent.map((text, index) => /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("div", {
          className: "ad-particles-block__text-section",
          "data-index": index,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("h2", {
            style: {
              fontSize: attributes.titleFontSize ? `${attributes.titleFontSize}px` : undefined,
              fontFamily: attributes.titleFontFamily && attributes.titleFontFamily !== 'custom' ? attributes.titleFontFamily : attributes.titleFontFamilyCustom || undefined,
              fontWeight: attributes.titleFontWeight || 'normal',
              marginTop: attributes.titleMarginTop ? `${attributes.titleMarginTop}px` : undefined,
              marginBottom: attributes.titleMarginBottom ? `${attributes.titleMarginBottom}px` : undefined
            },
            children: text.title
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("p", {
            style: {
              fontSize: attributes.textFontSize ? `${attributes.textFontSize}px` : undefined,
              fontFamily: attributes.textFontFamily && attributes.textFontFamily !== 'custom' ? attributes.textFontFamily : attributes.textFontFamilyCustom || undefined,
              fontWeight: attributes.textFontWeight || 'normal',
              marginTop: attributes.textMarginTop ? `${attributes.textMarginTop}px` : undefined,
              marginBottom: attributes.textMarginBottom ? `${attributes.textMarginBottom}px` : undefined
            },
            children: text.description
          })]
        }, text.id))
      })
    })]
  });
}

/***/ }),

/***/ "./src/particles-block/style.scss":
/*!****************************************!*\
  !*** ./src/particles-block/style.scss ***!
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
/******/ 			"particles-block/index": 0,
/******/ 			"particles-block/style-index": 0
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
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, ["particles-block/style-index"], () => (__webpack_require__("./src/particles-block/index.js")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=index.js.map