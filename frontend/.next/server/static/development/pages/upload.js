module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "../config/dev.js":
/*!************************!*\
  !*** ../config/dev.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  mongoURI: 'mongodb://rachna:rachna@ds115154.mlab.com:15154/box-drive',
  secretKey: 'asdsadsadsdtggbgbkhjykhjkhgbgbg',
  cloudName: 'rachnaban',
  uploadPreset: 'chingu',
};


/***/ }),

/***/ "../config/keys.js":
/*!*************************!*\
  !*** ../config/keys.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

if(false)
{}
else
{
	module.exports = __webpack_require__(/*! ./dev */ "../config/dev.js");
}

/***/ }),

/***/ "./components/ProgressBar.js":
/*!***********************************!*\
  !*** ./components/ProgressBar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProgressFiller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressFiller */ "./components/ProgressFiller.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Bears-Team-27\\frontend\\components\\ProgressBar.js";



var StyledProgressBar = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div.withConfig({
  displayName: "ProgressBar__StyledProgressBar",
  componentId: "p1awe2-0"
})([""]);

var ProgressBar = function ProgressBar(props) {
  JSON.stringify(props);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "progress-bar",
    style: props.style,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressFiller__WEBPACK_IMPORTED_MODULE_1__["default"], {
    percentage: props.percentage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBar);

/***/ }),

/***/ "./components/ProgressBarWrapper.js":
/*!******************************************!*\
  !*** ./components/ProgressBarWrapper.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBar */ "./components/ProgressBar.js");
var _jsxFileName = "D:\\Bears-Team-27\\frontend\\components\\ProgressBarWrapper.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var ProgressBarWrapper =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ProgressBarWrapper, _React$Component);

  function ProgressBarWrapper() {
    _classCallCheck(this, ProgressBarWrapper);

    return _possibleConstructorReturn(this, _getPrototypeOf(ProgressBarWrapper).apply(this, arguments));
  }

  _createClass(ProgressBarWrapper, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressBar__WEBPACK_IMPORTED_MODULE_1__["default"], {
        percentage: this.props.percentage,
        style: this.props.style,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 7
        },
        __self: this
      });
    }
  }]);

  return ProgressBarWrapper;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (ProgressBarWrapper);

/***/ }),

/***/ "./components/ProgressFiller.js":
/*!**************************************!*\
  !*** ./components/ProgressFiller.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "D:\\Bears-Team-27\\frontend\\components\\ProgressFiller.js";


var StyledFiller = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div.withConfig({
  displayName: "ProgressFiller__StyledFiller",
  componentId: "sc-11d6z0b-0"
})(["background:#333;height:100%;border-radius:inherit;transition:width 0.2s ease-in;"]);

var ProgressBarFiller = function ProgressBarFiller(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledFiller, {
    style: {
      width: "".concat(props.percentage, "%")
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ProgressBarFiller);

/***/ }),

/***/ "./components/Thumbnail.js":
/*!*********************************!*\
  !*** ./components/Thumbnail.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ProgressBarWrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProgressBarWrapper */ "./components/ProgressBarWrapper.js");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "D:\\Bears-Team-27\\frontend\\components\\Thumbnail.js";




var ThumbnailItem = function ThumbnailItem(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      width: '180px',
      height: '180px',
      borderRadius: '10px',
      border: '1px solid grey',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '5px',
      margin: '5px',
      backgroundColor: '#3633FE'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      position: 'absolute',
      bottom: '8px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.file.name), props.response && props.response.alt && props.response.src && props.response.downloadUrl ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: props.response.downloadUrl,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: props.response.src,
    alt: props.response.alt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }))) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    onClick: props.onCancelUpload,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, "X"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ProgressBarWrapper__WEBPACK_IMPORTED_MODULE_1__["default"], {
    percentage: props.progress,
    style: {
      height: '5px',
      width: '150px',
      borderRadius: '10px',
      border: '1px solid #333',
      bottom: '0',
      position: 'absolute'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }));
};

var Thumbnail = function Thumbnail(props) {
  //console.log(props.items[0]);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      marginTop: '20px',
      flexWrap: 'wrap'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, props.items.filter(function (item) {
    return !item.cancelled && !!item.file;
  }).map(function (item) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ThumbnailItem, {
      key: item.index,
      progress: item.progress,
      file: item.file,
      response: item.response,
      onCancelUpload: function onCancelUpload() {
        return props.onCancelUpload(item.index);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 64
      },
      __self: this
    });
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Thumbnail);

/***/ }),

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Thumbnail */ "./components/Thumbnail.js");

var _jsxFileName = "D:\\Bears-Team-27\\frontend\\pages\\upload.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var keys = __webpack_require__(/*! ../../config/keys */ "../config/keys.js");

var FileControl = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div.withConfig({
  displayName: "upload__FileControl",
  componentId: "sc-6elc8x-0"
})(["display:flex;align-items:flex-start;justify-content:center;flex-direction:column;input[type='file']{height:50px;font-size:1.5rem;}input[type='file']::-webkit-file-upload-button{height:50px;font-size:1.5rem;width:200px;}"]);

var Upload =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Upload, _React$Component);

  function Upload() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Upload);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Upload)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadPreset", keys.uploadPreset);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cloudName", keys.cloudName);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "ref", react__WEBPACK_IMPORTED_MODULE_1___default.a.createRef());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "xhrs", []);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      items: [],
      message: ''
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadFiles", function (e) {
      var files = e.target.files;

      var items = _this.filesToItems(files);

      _this.setState({
        items: items,
        message: ''
      }, function () {
        _this.upload();
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "upload", function () {
      var items = _this.state.items;

      if (items) {
        items.filter(function (item) {
          return !item.cancelled;
        }).forEach(function (item) {
          _this.uploadItem(item);
        });
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadItem", function (item) {
      _this.uploadFile(item.file, function (progress, response) {
        return _this.updateFileProgress(item.index, progress, response);
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadFile", function (file, progressCallback) {
      if (file) {
        var formData = new FormData();
        var xhr = new XMLHttpRequest();
        var url = "https://api.cloudinary.com/v1_1/".concat(_this.cloudName, "/auto/upload");
        console.log(url);
        formData.append('file', file, file.name);
        formData.append('upload_preset', _this.uploadPreset);
        formData.append('tags', 'browserUpload'); //Upload completed successfully

        xhr.onload = function () {
          var response = JSON.parse(xhr.response);
          var tokens = response.secure_url.split('/');
          tokens.splice(-2, 0, 'w_150,h_150,c_scale');
          tokens.splice(-4, 1);
          tokens.splice(-1, 1, "".concat(response.public_id.split('/')[1], ".jpg"));
          var resource = {
            name: file.name,
            secureUrl: response.secure_url,
            thumbnail: tokens.join('/')
          };

          _this.saveResourceRefToMongo(resource);

          progressCallback(100, {
            src: tokens.join('/'),
            alt: response.public_id,
            downloadUrl: response.secure_url
          });
        };

        xhr.upload.onprogress = function (e) {
          if (e.lengthComputable) {
            progressCallback(e.loaded / e.total * 100, null);
          }
        };

        xhr.open('POST', url, true);
        xhr.send(formData);
        _this.xhrs[file.index] = xhr;
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "saveResourceRefToMongo",
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(resource) {
        var header, res;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                header = new Headers({
                  'Content-Type': 'application/json'
                });
                _context.next = 3;
                return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()('http://localhost:3000/api/resources/new', {
                  method: 'POST',
                  mode: 'cors',
                  headers: header,
                  body: JSON.stringify(resource)
                });

              case 3:
                res = _context.sent;

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }());

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cancelFile", function (index) {
      var newItems = _toConsumableArray(_this.state.items);

      newItems[index] = Object.assign({}, _this.state.items[index], {
        cancelled: true
      });

      if (_this.xhrs[index]) {
        _this.xhrs[index].upload.removeEventListener('progress');

        _this.xhrs[index].removeEventListener('load');

        _this.xhrs[index].abort();
      }

      _this.setState({
        items: newItems,
        message: ''
      }, function () {
        _this.ref.current.value = '';
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "displayUploads", function () {
      var items = _this.state.items;

      if (items.length > 0) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__["default"], {
          items: items,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          },
          __self: this
        });
      }
    });

    return _this;
  }

  _createClass(Upload, [{
    key: "clearIfAllCompleted",
    value: function clearIfAllCompleted() {
      var _this2 = this;

      var completed = this.state.items.filter(function (item) {
        return item.progress === 100;
      }).length;

      if (completed === this.state.items.length) {
        setTimeout(function () {
          _this2.setState({
            items: [],
            message: 'All Files Uploaded Successfully!'
          }, function () {
            _this2.ref.current.value = '';
          });
        }, 3000);
      }
    }
  }, {
    key: "updateFileProgress",
    value: function updateFileProgress(index, progress, response) {
      var newItems = _toConsumableArray(this.state.items);

      newItems[index] = Object.assign({}, this.state.items[index], {
        progress: progress
      }, {
        response: response
      }); //todo

      this.setState({
        items: newItems
      }, this.clearIfAllCompleted); // this.setState({items: newItems});
    }
  }, {
    key: "filesToItems",
    value: function filesToItems(files) {
      var fileItems = Array.from(files);
      var items = fileItems.map(function (f, i) {
        return {
          file: f,
          index: i,
          progress: 0,
          cancelled: false
        };
      });
      return items;
    }
  }, {
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(FileControl, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        htmlFor: "file",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 171
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        ref: this.ref,
        type: "file",
        multiple: true,
        id: "file",
        name: "file",
        placeholder: "Upload Files",
        required: true,
        onChange: this.uploadFiles,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      })), this.state.message.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        style: {
          marginTop: '10px',
          fontSize: '1.2rem'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 184
        },
        __self: this
      }, this.state.message), this.state.items.length > 0 && react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Thumbnail__WEBPACK_IMPORTED_MODULE_5__["default"], {
        items: this.state.items,
        onCancelUpload: this.cancelFile,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }));
    }
  }]);

  return Upload;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Upload);

/***/ }),

/***/ 5:
/*!*******************************!*\
  !*** multi ./pages/upload.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/upload.js */"./pages/upload.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=upload.js.map