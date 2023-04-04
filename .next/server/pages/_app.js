/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/react */ \"next-auth/react\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tanstack/react-query */ \"@tanstack/react-query\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-i18next */ \"next-i18next\");\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_i18next__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! nprogress */ \"nprogress\");\n/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! nprogress/nprogress.css */ \"./node_modules/nprogress/nprogress.css\");\n/* harmony import */ var nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var styles_globals_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(styles_globals_css__WEBPACK_IMPORTED_MODULE_8__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__]);\n_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\n\n\n\n\n\n\nnprogress__WEBPACK_IMPORTED_MODULE_6___default().configure({\n    showSpinner: false\n});\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeStart\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().start());\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeComplete\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().done());\nnext_router__WEBPACK_IMPORTED_MODULE_2___default().events.on(\"routeChangeError\", ()=>nprogress__WEBPACK_IMPORTED_MODULE_6___default().done());\nfunction App({ Component , pageProps: { session , ...pageProps }  }) {\n    const queryClientRef = react__WEBPACK_IMPORTED_MODULE_1__.useRef();\n    if (!queryClientRef.current) {\n        queryClientRef.current = new _tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClient();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.QueryClientProvider, {\n        client: queryClientRef.current,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_tanstack_react_query__WEBPACK_IMPORTED_MODULE_4__.Hydrate, {\n            state: pageProps.dehydratedState,\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_auth_react__WEBPACK_IMPORTED_MODULE_3__.SessionProvider, {\n                session: session,\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/pages/_app.tsx\",\n                    lineNumber: 26,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/pages/_app.tsx\",\n                lineNumber: 25,\n                columnNumber: 9\n            }, this)\n        }, void 0, false, {\n            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/pages/_app.tsx\",\n            lineNumber: 24,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/pages/_app.tsx\",\n        lineNumber: 23,\n        columnNumber: 5\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_i18next__WEBPACK_IMPORTED_MODULE_5__.appWithTranslation)(App));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUE4QjtBQUNFO0FBQ2lCO0FBQ2dDO0FBQ2hDO0FBQ2hCO0FBQ0Q7QUFFTDtBQUUzQk8sMERBQW1CLENBQUM7SUFBRUUsV0FBVyxFQUFFLEtBQUs7Q0FBRSxDQUFDO0FBRTNDUiw0REFBZ0IsQ0FBQyxrQkFBa0IsRUFBRSxJQUFNTSxzREFBZSxFQUFFLENBQUM7QUFDN0ROLDREQUFnQixDQUFDLHFCQUFxQixFQUFFLElBQU1NLHFEQUFjLEVBQUUsQ0FBQztBQUMvRE4sNERBQWdCLENBQUMsa0JBQWtCLEVBQUUsSUFBTU0scURBQWMsRUFBRSxDQUFDO0FBRTVELFNBQVNPLEdBQUcsQ0FBQyxFQUFFQyxTQUFTLEdBQUVDLFNBQVMsRUFBRSxFQUFFQyxPQUFPLEdBQUUsR0FBR0QsU0FBUyxFQUFFLEdBQUUsRUFBRTtJQUNoRSxNQUFNRSxjQUFjLEdBQUdsQix5Q0FBWSxFQUFlO0lBQ2xELElBQUksQ0FBQ2tCLGNBQWMsQ0FBQ0UsT0FBTyxFQUFFO1FBQzNCRixjQUFjLENBQUNFLE9BQU8sR0FBRyxJQUFJakIsOERBQVcsRUFBRTtJQUM1QyxDQUFDO0lBQ0QscUJBQ0UsOERBQUNDLHNFQUFtQjtRQUFDaUIsTUFBTSxFQUFFSCxjQUFjLENBQUNFLE9BQU87a0JBQ2pELDRFQUFDZiwwREFBTztZQUFDaUIsS0FBSyxFQUFFTixTQUFTLENBQUNPLGVBQWU7c0JBQ3ZDLDRFQUFDckIsNERBQWU7Z0JBQUNlLE9BQU8sRUFBRUEsT0FBTzswQkFDL0IsNEVBQUNGLFNBQVM7b0JBQUUsR0FBR0MsU0FBUzs7Ozs7d0JBQUk7Ozs7O29CQUNaOzs7OztnQkFDVjs7Ozs7WUFDVSxDQUN2QjtBQUNILENBQUM7QUFFRCxpRUFBZVYsZ0VBQWtCLENBQUNRLEdBQUcsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2pldGktb2d1ei1kZXN0aW5hdGlvbi8uL3BhZ2VzL19hcHAudHN4PzJmYmUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCJcbmltcG9ydCBSb3V0ZXIgZnJvbSBcIm5leHQvcm91dGVyXCJcbmltcG9ydCB7IFNlc3Npb25Qcm92aWRlciB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIlxuaW1wb3J0IHsgUXVlcnlDbGllbnQsIFF1ZXJ5Q2xpZW50UHJvdmlkZXIsIEh5ZHJhdGUgfSBmcm9tIFwiQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5XCJcbmltcG9ydCB7IGFwcFdpdGhUcmFuc2xhdGlvbiB9IGZyb20gXCJuZXh0LWkxOG5leHRcIlxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tIFwibnByb2dyZXNzXCJcbmltcG9ydCBcIm5wcm9ncmVzcy9ucHJvZ3Jlc3MuY3NzXCJcblxuaW1wb3J0IFwic3R5bGVzL2dsb2JhbHMuY3NzXCJcblxuTlByb2dyZXNzLmNvbmZpZ3VyZSh7IHNob3dTcGlubmVyOiBmYWxzZSB9KVxuXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VTdGFydFwiLCAoKSA9PiBOUHJvZ3Jlc3Muc3RhcnQoKSlcblJvdXRlci5ldmVudHMub24oXCJyb3V0ZUNoYW5nZUNvbXBsZXRlXCIsICgpID0+IE5Qcm9ncmVzcy5kb25lKCkpXG5Sb3V0ZXIuZXZlbnRzLm9uKFwicm91dGVDaGFuZ2VFcnJvclwiLCAoKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpKVxuXG5mdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wczogeyBzZXNzaW9uLCAuLi5wYWdlUHJvcHMgfSB9KSB7XG4gIGNvbnN0IHF1ZXJ5Q2xpZW50UmVmID0gUmVhY3QudXNlUmVmPFF1ZXJ5Q2xpZW50PigpXG4gIGlmICghcXVlcnlDbGllbnRSZWYuY3VycmVudCkge1xuICAgIHF1ZXJ5Q2xpZW50UmVmLmN1cnJlbnQgPSBuZXcgUXVlcnlDbGllbnQoKVxuICB9XG4gIHJldHVybiAoXG4gICAgPFF1ZXJ5Q2xpZW50UHJvdmlkZXIgY2xpZW50PXtxdWVyeUNsaWVudFJlZi5jdXJyZW50fT5cbiAgICAgIDxIeWRyYXRlIHN0YXRlPXtwYWdlUHJvcHMuZGVoeWRyYXRlZFN0YXRlfT5cbiAgICAgICAgPFNlc3Npb25Qcm92aWRlciBzZXNzaW9uPXtzZXNzaW9ufT5cbiAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgIDwvU2Vzc2lvblByb3ZpZGVyPlxuICAgICAgPC9IeWRyYXRlPlxuICAgIDwvUXVlcnlDbGllbnRQcm92aWRlcj5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBhcHBXaXRoVHJhbnNsYXRpb24oQXBwKVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiUm91dGVyIiwiU2Vzc2lvblByb3ZpZGVyIiwiUXVlcnlDbGllbnQiLCJRdWVyeUNsaWVudFByb3ZpZGVyIiwiSHlkcmF0ZSIsImFwcFdpdGhUcmFuc2xhdGlvbiIsIk5Qcm9ncmVzcyIsImNvbmZpZ3VyZSIsInNob3dTcGlubmVyIiwiZXZlbnRzIiwib24iLCJzdGFydCIsImRvbmUiLCJBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJzZXNzaW9uIiwicXVlcnlDbGllbnRSZWYiLCJ1c2VSZWYiLCJjdXJyZW50IiwiY2xpZW50Iiwic3RhdGUiLCJkZWh5ZHJhdGVkU3RhdGUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/***/ (() => {



/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "next-auth/react":
/*!**********************************!*\
  !*** external "next-auth/react" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-auth/react");

/***/ }),

/***/ "next-i18next":
/*!*******************************!*\
  !*** external "next-i18next" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-i18next");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/***/ ((module) => {

"use strict";
module.exports = require("nprogress");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "@tanstack/react-query":
/*!****************************************!*\
  !*** external "@tanstack/react-query" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = import("@tanstack/react-query");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();