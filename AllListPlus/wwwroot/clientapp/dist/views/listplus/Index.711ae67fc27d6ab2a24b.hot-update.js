"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateclientapp"]("listplus/Index",{

/***/ "./src/views/listplus/Index.js":
/*!*************************************!*\
  !*** ./src/views/listplus/Index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Index; }\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles.css */ \"./src/views/listplus/styles.css\");\n\n\n\n\n\n\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = (0,_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return (0,_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }\n\n\n\n\n\nvar Index = /*#__PURE__*/function (_React$Component) {\n  (0,_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(Index, _React$Component);\n\n  var _super = _createSuper(Index);\n\n  function Index(props) {\n    var _this;\n\n    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Index);\n\n    _this = _super.call(this, props);\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"add\", function () {\n      var tasksAux = _this.state.tasks;\n      if (_this.state.indexEdicao == -1) tasksAux.push(_this.state.task);else tasksAux[_this.state.indexEdicao] = _this.state.task;\n\n      _this.setState({\n        indexEdicao: -1,\n        id: \"\",\n        task: \"\",\n        tasks: tasksAux\n      });\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"delete\", function (i) {\n      var tasksAux = _this.state.tasks;\n      var index = -1;\n\n      for (var pos = 0; pos < tasksAux.length; pos++) {\n        if (tasksAux[pos] == i) index = pos;\n      }\n\n      if (index > -1) {\n        tasksAux.splice(index, 1);\n\n        _this.setState({\n          tasks: tasksAux\n        });\n      }\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"edit\", function (i) {\n      var tasksAux = _this.state.tasks;\n      var index = tasksAux.findIndex(function (task) {\n        return task == i;\n      });\n\n      if (index > -1) {\n        var taskAux = tasksAux[index];\n\n        _this.setState({\n          task: taskAux,\n          indexEdicao: index\n        });\n      }\n    });\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"search\", function (i) {});\n\n    (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_5__[\"default\"])((0,_babel_runtime_helpers_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_this), \"render\", function () {\n      var saida = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(react__WEBPACK_IMPORTED_MODULE_6__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        class: \"main-box\"\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"div\", {\n        class: true\n      }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"label\", null, \"ID: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"input\", {\n        type: \"text\",\n        value: _this.state.id,\n        onChange: function onChange(e) {\n          return _this.setState({\n            id: e.target.value\n          });\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"label\", null, \"Task: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"input\", {\n        type: \"text\",\n        value: _this.state.task,\n        onChange: function onChange(e) {\n          return _this.setState({\n            task: e.target.value\n          });\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"button\", {\n        type: \"button\",\n        onClick: function onClick() {\n          return _this.add();\n        }\n      }, \"Add\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"label\", null, \"Search: \"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"input\", {\n        type: \"text\",\n        value: _this.state.filter,\n        onChange: function onChange(e) {\n          return _this.setState({\n            filter: e.target.value\n          });\n        }\n      }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"button\", {\n        type: \"button\",\n        onClick: function onClick() {\n          return _this.search();\n        }\n      }, \"Search\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"table\", null, _this.state.tasks.map(function (i) {\n        return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"tr\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"td\", null, i), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"button\", {\n          type: \"button\",\n          onClick: function onClick() {\n            return _this.delete(i);\n          }\n        }, \"Delete\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"td\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(\"button\", {\n          type: \"button\",\n          onClick: function onClick() {\n            return _this.edit(i);\n          }\n        }, \"Edit\")));\n      }))));\n      return saida;\n    });\n\n    _this.state = {\n      id: \"\",\n      task: \"\",\n      tasks: [],\n      indexEdicao: -1,\n      filter: \"\"\n    };\n    return _this;\n  }\n\n  return Index;\n}(react__WEBPACK_IMPORTED_MODULE_6__.Component);\n\n\nreact_dom__WEBPACK_IMPORTED_MODULE_7__.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6__.createElement(Index, null), document.getElementById(\"root\"));\n\n//# sourceURL=webpack://clientapp/./src/views/listplus/Index.js?");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "f62df5fb710da6c64397"; }
/******/ }();
/******/ 
/******/ }
);