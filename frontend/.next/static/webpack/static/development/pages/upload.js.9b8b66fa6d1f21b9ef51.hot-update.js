webpackHotUpdate("static\\development\\pages\\upload.js",{

/***/ "./pages/upload.js":
/*!*************************!*\
  !*** ./pages/upload.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
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

var FileControl = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "uploadPreset", keys.UPLOAD_PRESET);

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "cloudName", keys.CLOUD_NAME);

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
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/upload")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=upload.js.9b8b66fa6d1f21b9ef51.hot-update.js.map