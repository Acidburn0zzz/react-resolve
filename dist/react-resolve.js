(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["ReactResolve"] = factory();
	else
		root["ReactResolve"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.resolve = undefined;\n\nvar _resolve2 = __webpack_require__(1);\n\nvar _resolve3 = _interopRequireDefault(_resolve2);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.resolve = _resolve3.default;//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvaW5kZXguanM/MWZkZiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgcmVzb2x2ZSBmcm9tIFwiLi9yZXNvbHZlXCJcblxuXG5cbi8qKiBXRUJQQUNLIEZPT1RFUiAqKlxuICoqIHNyYy9pbmRleC5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBIiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	eval("\"use strict\";\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nexports.default = resolve;\n\nvar _lodash = __webpack_require__(2);\n\nfunction _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/*\n  import {resolve} from \"react-resolve\"\n\n  @resolve(\"users\", params => Promise.resolve([]), {\n    destroy: (id) => Promise.resolve({id})\n  })\n  class App extends Component {..}\n\n\n  this.resolve({page: 2})\n*/\n\n//\n//\n//\n// ACTIONS\n//\n//   add create          {data}\n//   remove destroy      {id}\n//   update              {data}\n//\nvar ACTION_ALIAS = {\n  destroy: \"remove\",\n  create: \"add\"\n};\n\nfunction resolve(key, promise, actions) {\n  return function (WrappedComponent) {\n    return function (_Component) {\n      _inherits(_class2, _Component);\n\n      function _class2(props) {\n        _classCallCheck(this, _class2);\n\n        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(_class2).call(this, props));\n\n        _this.state = {\n          loaded: false,\n          data: {} // {users: {id: 1}}\n        };\n\n        _this.actions = _this.processActions(actions);\n        _this.resolve = _this.resolve.bind(_this);\n        return _this;\n      }\n\n      _createClass(_class2, [{\n        key: \"render\",\n        value: function render() {\n          if (!this.state.loaded) return null;\n          var data = this.state.data;\n          var resolve = this.resolve;\n          var actions = this.actions;\n\n          return React.createElement(WrappedComponent, _extends({}, data, actions, { resolve: resolve }));\n        }\n      }, {\n        key: \"componentDidMount\",\n        value: function componentDidMount() {\n          this.resolve();\n        }\n      }, {\n        key: \"resolve\",\n        value: function resolve(arg) {\n          var _this2 = this;\n\n          var props = this.props;\n\n          arg = Object.assign({}, props, arg);\n          promise(arg).then(function (result) {\n            _this2.setState({ data: _defineProperty({}, key, result), loaded: true });\n          });\n        }\n      }, {\n        key: \"remove\",\n        value: function remove(result) {\n          var data = this.state.data;\n\n          (0, _lodash.remove)(data[key], function (v) {\n            return v.id === result.id;\n          });\n          this.setState({ data: data });\n        }\n      }, {\n        key: \"add\",\n        value: function add(result) {\n          var data = this.state.data;\n\n          data[key].push(result);\n          this.setState({ data: data });\n        }\n      }, {\n        key: \"update\",\n        value: function update(result) {\n          var data = this.state.data;\n\n          var index = data[key].findIndex(function (v) {\n            return v.id === result.id;\n          });\n          if (index !== -1) data[key].splice(index, 1, result);\n          this.setState({ data: data });\n        }\n      }, {\n        key: \"processActions\",\n        value: function processActions(actions) {\n          var _this3 = this;\n\n          (0, _lodash.forEach)(actions, function (action, name) {\n            var type = ACTION_ALIAS[name] || name;\n            actions[name] = function () {\n              action.apply(undefined, arguments).then(function (result) {\n                _this3[type](result);\n              });\n            };\n          });\n          return actions;\n        }\n      }]);\n\n      return _class2;\n    }(Component);\n  };\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9zcmMvcmVzb2x2ZS5qcz9iZjExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Zm9yRWFjaCwgcmVtb3ZlfSBmcm9tIFwibG9kYXNoXCJcblxuLypcbiAgaW1wb3J0IHtyZXNvbHZlfSBmcm9tIFwicmVhY3QtcmVzb2x2ZVwiXG5cbiAgQHJlc29sdmUoXCJ1c2Vyc1wiLCBwYXJhbXMgPT4gUHJvbWlzZS5yZXNvbHZlKFtdKSwge1xuICAgIGRlc3Ryb3k6IChpZCkgPT4gUHJvbWlzZS5yZXNvbHZlKHtpZH0pXG4gIH0pXG4gIGNsYXNzIEFwcCBleHRlbmRzIENvbXBvbmVudCB7Li59XG5cblxuICB0aGlzLnJlc29sdmUoe3BhZ2U6IDJ9KVxuKi9cblxuLy9cbi8vXG4vL1xuLy8gQUNUSU9OU1xuLy9cbi8vICAgYWRkIGNyZWF0ZSAgICAgICAgICB7ZGF0YX1cbi8vICAgcmVtb3ZlIGRlc3Ryb3kgICAgICB7aWR9XG4vLyAgIHVwZGF0ZSAgICAgICAgICAgICAge2RhdGF9XG4vL1xuY29uc3QgQUNUSU9OX0FMSUFTID0ge1xuICBkZXN0cm95OiBcInJlbW92ZVwiLFxuICBjcmVhdGU6IFwiYWRkXCIsXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmUoa2V5LCBwcm9taXNlLCBhY3Rpb25zKSB7XG4gIHJldHVybiBmdW5jdGlvbihXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgcmV0dXJuIGNsYXNzIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAgIHN0YXRlID0ge1xuICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICBkYXRhOiB7fSAgLy8ge3VzZXJzOiB7aWQ6IDF9fVxuICAgICAgfVxuXG4gICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcylcbiAgICAgICAgdGhpcy5hY3Rpb25zID0gdGhpcy5wcm9jZXNzQWN0aW9ucyhhY3Rpb25zKVxuICAgICAgICB0aGlzLnJlc29sdmUgPSB0aGlzLnJlc29sdmUuYmluZCh0aGlzKVxuICAgICAgfVxuXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIGlmICghdGhpcy5zdGF0ZS5sb2FkZWQpXG4gICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgdmFyIHtzdGF0ZToge2RhdGF9LCByZXNvbHZlLCBhY3Rpb25zfSA9IHRoaXNcbiAgICAgICAgcmV0dXJuIDxXcmFwcGVkQ29tcG9uZW50IHsuLi5kYXRhfSB7Li4uYWN0aW9uc30gey4uLntyZXNvbHZlfX0gIC8+XG4gICAgICB9XG5cbiAgICAgIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgICAgICB0aGlzLnJlc29sdmUoKVxuICAgICAgfVxuXG4gICAgICByZXNvbHZlKGFyZykge1xuICAgICAgICB2YXIge3Byb3BzfSA9IHRoaXNcbiAgICAgICAgYXJnID0gT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIGFyZylcbiAgICAgICAgcHJvbWlzZShhcmcpLnRoZW4ocmVzdWx0ID0+IHtcbiAgICAgICAgICB0aGlzLnNldFN0YXRlKHtkYXRhOiB7W2tleV06IHJlc3VsdH0sIGxvYWRlZDogdHJ1ZX0pXG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHJlbW92ZShyZXN1bHQpIHtcbiAgICAgICAgdmFyIHtzdGF0ZToge2RhdGF9fSA9IHRoaXNcbiAgICAgICAgcmVtb3ZlKGRhdGFba2V5XSwgdiA9PiB2LmlkID09PSByZXN1bHQuaWQpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGF9KVxuICAgICAgfVxuXG4gICAgICBhZGQocmVzdWx0KSB7XG4gICAgICAgIHZhciB7c3RhdGU6IHtkYXRhfX0gPSB0aGlzXG4gICAgICAgIGRhdGFba2V5XS5wdXNoKHJlc3VsdClcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7ZGF0YX0pXG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShyZXN1bHQpIHtcbiAgICAgICAgdmFyIHtzdGF0ZToge2RhdGF9fSA9IHRoaXNcbiAgICAgICAgdmFyIGluZGV4ID0gZGF0YVtrZXldLmZpbmRJbmRleCh2ID0+IHYuaWQgPT09IHJlc3VsdC5pZClcbiAgICAgICAgaWYgKGluZGV4ICE9PSAtMSlcbiAgICAgICAgICBkYXRhW2tleV0uc3BsaWNlKGluZGV4LCAxLCByZXN1bHQpXG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe2RhdGF9KVxuICAgICAgfVxuXG4gICAgICBwcm9jZXNzQWN0aW9ucyhhY3Rpb25zKSB7XG4gICAgICAgIGZvckVhY2goYWN0aW9ucywgKGFjdGlvbiwgbmFtZSkgPT4ge1xuICAgICAgICAgIHZhciB0eXBlID0gQUNUSU9OX0FMSUFTW25hbWVdIHx8IG5hbWVcbiAgICAgICAgICBhY3Rpb25zW25hbWVdID0gKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIGFjdGlvbiguLi5hcmdzKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICAgICAgICAgIHRoaXNbdHlwZV0ocmVzdWx0KVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhY3Rpb25zXG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuXG4vKiogV0VCUEFDSyBGT09URVIgKipcbiAqKiBzcmMvcmVzb2x2ZS5qc1xuICoqLyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQTRCQTtBQUNBO0FBN0JBO0FBQ0E7Ozs7Ozs7OztBQUNBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQUNBO0FBSUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUtBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUpBO0FBQ0E7QUFGQTtBQUNBO0FBTUE7QUFDQTtBQUhBO0FBSUE7QUFDQTtBQVhBO0FBQUE7QUFBQTtBQWFBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFHQTtBQUNBO0FBakJBO0FBQUE7QUFBQTtBQW9CQTtBQUNBO0FBckJBO0FBQUE7QUFBQTtBQXVCQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3QkE7QUFBQTtBQUFBO0FBK0JBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBbkNBO0FBQUE7QUFBQTtBQXFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBekNBO0FBQUE7QUFBQTtBQTJDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBakRBO0FBQUE7QUFBQTtBQW1EQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUE3REE7QUFDQTtBQURBO0FBQUE7QUErREE7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {


/***/ },
/* 3 */
/***/ function(module, exports) {

	eval("module.exports = function(module) {\r\n\tif(!module.webpackPolyfill) {\r\n\t\tmodule.deprecate = function() {};\r\n\t\tmodule.paths = [];\r\n\t\t// module.parent = undefined by default\r\n\t\tmodule.children = [];\r\n\t\tmodule.webpackPolyfill = 1;\r\n\t}\r\n\treturn module;\r\n}\r\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9tb2R1bGUuanM/YzNjMiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKG1vZHVsZSkge1xyXG5cdGlmKCFtb2R1bGUud2VicGFja1BvbHlmaWxsKSB7XHJcblx0XHRtb2R1bGUuZGVwcmVjYXRlID0gZnVuY3Rpb24oKSB7fTtcclxuXHRcdG1vZHVsZS5wYXRocyA9IFtdO1xyXG5cdFx0Ly8gbW9kdWxlLnBhcmVudCA9IHVuZGVmaW5lZCBieSBkZWZhdWx0XHJcblx0XHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcclxuXHRcdG1vZHVsZS53ZWJwYWNrUG9seWZpbGwgPSAxO1xyXG5cdH1cclxuXHRyZXR1cm4gbW9kdWxlO1xyXG59XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogKHdlYnBhY2spL2J1aWxkaW4vbW9kdWxlLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ])
});
;