"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[...slug]",{

/***/ "./components/node--article--card.tsx":
/*!********************************************!*\
  !*** ./components/node--article--card.tsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NodeArticleCard\": function() { return /* binding */ NodeArticleCard; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @swc/helpers/src/_object_spread.mjs */ \"./node_modules/@swc/helpers/src/_object_spread.mjs\");\n/* harmony import */ var _swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @swc/helpers/src/_object_spread_props.mjs */ \"./node_modules/@swc/helpers/src/_object_spread_props.mjs\");\n/* harmony import */ var _swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @swc/helpers/src/_object_without_properties.mjs */ \"./node_modules/@swc/helpers/src/_object_without_properties.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var components_media_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! components/media--image */ \"./components/media--image.tsx\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var components_formatted_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/formatted-text */ \"./components/formatted-text.tsx\");\n\n\n\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction NodeArticleCard(_param) {\n    var node = _param.node, props = (0,_swc_helpers_src_object_without_properties_mjs__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(_param, [\n        \"node\"\n    ]);\n    _s();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation)().t;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", (0,_swc_helpers_src_object_spread_props_mjs__WEBPACK_IMPORTED_MODULE_6__[\"default\"])((0,_swc_helpers_src_object_spread_mjs__WEBPACK_IMPORTED_MODULE_7__[\"default\"])({\n        className: \"flex flex-col items-start justify-between\"\n    }, props), {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_media_image__WEBPACK_IMPORTED_MODULE_2__.MediaImage, {\n                        media: node.field_media_image,\n                        width: 335,\n                        height: 225,\n                        className: \"[&>*]:aspect-[16/9] [&>*]:w-full [&>*]:rounded-2xl [&>*]:bg-gray-100 [&>*]:object-cover [&>*]:sm:aspect-[2/1] [&>*]:lg:aspect-[3/2]\"\n                    }, void 0, false, {\n                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10\"\n                    }, void 0, false, {\n                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"max-w-xl\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mt-8 flex items-center gap-x-4 text-xs\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-gray-500\",\n                            children: (0,lib_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(node.created)\n                        }, void 0, false, {\n                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                            lineNumber: 27,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"group relative\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                className: \"mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                    href: node.path.alias,\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"absolute inset-0\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 29\n                                    }, this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 25\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"mt-5 text-sm leading-6 text-gray-600 line-clamp-3\",\n                                children: node.body\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                                lineNumber: 44,\n                                columnNumber: 21\n                            }, this),\n                            node.body && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-5 text-sm leading-6 text-gray-600 line-clamp-3\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_formatted_text__WEBPACK_IMPORTED_MODULE_4__.FormattedText, {\n                                    text: node.body.processed\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                                    lineNumber: 48,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 25\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"relative mt-8 flex items-center gap-x-4\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-sm leading-6\"\n                        }, void 0, false, {\n                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                            lineNumber: 55,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n                lineNumber: 25,\n                columnNumber: 13\n            }, this)\n        ]\n    }), void 0, true, {\n        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article--card.tsx\",\n        lineNumber: 17,\n        columnNumber: 9\n    }, this);\n}\n_s(NodeArticleCard, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_1__.useTranslation\n    ];\n});\n_c = NodeArticleCard;\nvar _c;\n$RefreshReg$(_c, \"NodeArticleCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25vZGUtLWFydGljbGUtLWNhcmQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7QUFFNkM7QUFFTztBQUNkO0FBQ21CO0FBTWxELFNBQVNJLGVBQWUsQ0FBQyxNQUF3QyxFQUFFO1FBQXhDQyxJQUFJLEdBQU4sTUFBd0MsQ0FBdENBLElBQUksRUFBS0MsS0FBSyw4RkFBaEIsTUFBd0M7UUFBdENELE1BQUk7OztJQUNsQyxJQUFNLENBQUcsR0FBS0wsNERBQWMsRUFBRSxDQUF0Qk8sQ0FBQztJQUVULHFCQUNJLDhEQUFDQyxTQUFPO1FBQ0pDLFNBQVMsRUFBQywyQ0FBMkM7T0FDakRILEtBQUs7OzBCQUVULDhEQUFDSSxLQUFHO2dCQUFDRCxTQUFTLEVBQUMsaUJBQWlCOztrQ0FDNUIsOERBQUNSLDhEQUFVO3dCQUFDVSxLQUFLLEVBQUVOLElBQUksQ0FBQ08saUJBQWlCO3dCQUFFQyxLQUFLLEVBQUUsR0FBRzt3QkFBRUMsTUFBTSxFQUFFLEdBQUc7d0JBQUVMLFNBQVMsRUFBQyxxSUFBcUk7Ozs7OzRCQUFHO2tDQUN0Tiw4REFBQ0MsS0FBRzt3QkFBQ0QsU0FBUyxFQUFDLGlFQUFpRTs7Ozs7NEJBQUc7Ozs7OztvQkFDakY7MEJBQ04sOERBQUNDLEtBQUc7Z0JBQUNELFNBQVMsRUFBQyxVQUFVOztrQ0FDckIsOERBQUNDLEtBQUc7d0JBQUNELFNBQVMsRUFBQyx3Q0FBd0M7a0NBQ25ELDRFQUFDTSxNQUFJOzRCQUFDTixTQUFTLEVBQUMsZUFBZTtzQ0FDMUJQLHFEQUFVLENBQUNHLElBQUksQ0FBQ1csT0FBTyxDQUFDOzs7OztnQ0FDdEI7Ozs7OzRCQU9MO2tDQUNOLDhEQUFDTixLQUFHO3dCQUFDRCxTQUFTLEVBQUMsZ0JBQWdCOzswQ0FDM0IsOERBQUNRLElBQUU7Z0NBQUNSLFNBQVMsRUFBQyw4RUFBOEU7MENBQ3hGLDRFQUFDUyxHQUFDO29DQUFDQyxJQUFJLEVBQUVkLElBQUksQ0FBQ2UsSUFBSSxDQUFDQyxLQUFLOzhDQUNwQiw0RUFBQ04sTUFBSTt3Q0FBQ04sU0FBUyxFQUFDLGtCQUFrQjs7Ozs7NENBQUc7Ozs7O3dDQUVyQzs7Ozs7b0NBQ0g7MENBQ0wsOERBQUNhLEdBQUM7Z0NBQUNiLFNBQVMsRUFBQyxtREFBbUQ7MENBQUVKLElBQUksQ0FBQ2tCLElBQUk7Ozs7O29DQUFLOzRCQUUvRWxCLElBQUksQ0FBQ2tCLElBQUksa0JBQ04sOERBQUNiLEtBQUc7Z0NBQUNELFNBQVMsRUFBQyxtREFBbUQ7MENBQzlELDRFQUFDTixvRUFBYTtvQ0FBQ3FCLElBQUksRUFBRW5CLElBQUksQ0FBQ2tCLElBQUksQ0FBQ0UsU0FBUzs7Ozs7d0NBQUk7Ozs7O29DQUMxQzs7Ozs7OzRCQUdSO2tDQUNOLDhEQUFDZixLQUFHO3dCQUFDRCxTQUFTLEVBQUMseUNBQXlDO2tDQUVwRCw0RUFBQ0MsS0FBRzs0QkFBQ0QsU0FBUyxFQUFDLG1CQUFtQjs7Ozs7Z0NBVTVCOzs7Ozs0QkFDSjs7Ozs7O29CQUNKOzs7Ozs7WUFDQSxDQUNiO0FBQ0wsQ0FBQztHQXpEZUwsZUFBZTs7UUFDYkosd0RBQWM7OztBQURoQkksS0FBQUEsZUFBZSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL25vZGUtLWFydGljbGUtLWNhcmQudHN4P2NhMjMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXG5pbXBvcnQgeyBEcnVwYWxOb2RlIH0gZnJvbSBcIm5leHQtZHJ1cGFsXCJcbmltcG9ydCB7IHVzZVRyYW5zbGF0aW9uIH0gZnJvbSBcIm5leHQtaTE4bmV4dFwiXG5cbmltcG9ydCB7IE1lZGlhSW1hZ2UgfSBmcm9tIFwiY29tcG9uZW50cy9tZWRpYS0taW1hZ2VcIlxuaW1wb3J0IHsgZm9ybWF0RGF0ZSB9IGZyb20gXCJsaWIvdXRpbHNcIlxuaW1wb3J0IHsgRm9ybWF0dGVkVGV4dCB9IGZyb20gXCJjb21wb25lbnRzL2Zvcm1hdHRlZC10ZXh0XCJcblxuaW50ZXJmYWNlIE5vZGVBcnRpY2xlQ2FyZFByb3BzIHtcbiAgICBub2RlOiBEcnVwYWxOb2RlXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOb2RlQXJ0aWNsZUNhcmQoeyBub2RlLCAuLi5wcm9wcyB9OiBOb2RlQXJ0aWNsZUNhcmRQcm9wcykge1xuICAgIGNvbnN0IHsgdCB9ID0gdXNlVHJhbnNsYXRpb24oKVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGFydGljbGVcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtc3RhcnQganVzdGlmeS1iZXR3ZWVuXCJcbiAgICAgICAgICAgIHsuLi5wcm9wc31cbiAgICAgICAgPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWxhdGl2ZSB3LWZ1bGxcIj5cbiAgICAgICAgICAgICAgICA8TWVkaWFJbWFnZSBtZWRpYT17bm9kZS5maWVsZF9tZWRpYV9pbWFnZX0gd2lkdGg9ezMzNX0gaGVpZ2h0PXsyMjV9IGNsYXNzTmFtZT1cIlsmPipdOmFzcGVjdC1bMTYvOV0gWyY+Kl06dy1mdWxsIFsmPipdOnJvdW5kZWQtMnhsIFsmPipdOmJnLWdyYXktMTAwIFsmPipdOm9iamVjdC1jb3ZlciBbJj4qXTpzbTphc3BlY3QtWzIvMV0gWyY+Kl06bGc6YXNwZWN0LVszLzJdXCIgLz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgcm91bmRlZC0yeGwgcmluZy0xIHJpbmctaW5zZXQgcmluZy1ncmF5LTkwMC8xMFwiIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWF4LXcteGxcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTggZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtNCB0ZXh0LXhzXCI+XG4gICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKG5vZGUuY3JlYXRlZCl9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgey8qIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e3Bvc3QuY2F0ZWdvcnkuaHJlZn1cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicmVsYXRpdmUgei0xMCByb3VuZGVkLWZ1bGwgYmctZ3JheS01MCBweS0xLjUgcHgtMyBmb250LW1lZGl1bSB0ZXh0LWdyYXktNjAwIGhvdmVyOmJnLWdyYXktMTAwXCJcbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtwb3N0LmNhdGVnb3J5LnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvYT4gKi99XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncm91cCByZWxhdGl2ZVwiPlxuICAgICAgICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwibXQtMyB0ZXh0LWxnIGZvbnQtc2VtaWJvbGQgbGVhZGluZy02IHRleHQtZ3JheS05MDAgZ3JvdXAtaG92ZXI6dGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17bm9kZS5wYXRoLmFsaWFzfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Lyoge25vZGUudGl0bGV9ICovfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICA8L2gzPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC01IHRleHQtc20gbGVhZGluZy02IHRleHQtZ3JheS02MDAgbGluZS1jbGFtcC0zXCI+e25vZGUuYm9keX08L3A+XG5cbiAgICAgICAgICAgICAgICAgICAge25vZGUuYm9keSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTUgdGV4dC1zbSBsZWFkaW5nLTYgdGV4dC1ncmF5LTYwMCBsaW5lLWNsYW1wLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkVGV4dCB0ZXh0PXtub2RlLmJvZHkucHJvY2Vzc2VkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlbGF0aXZlIG10LTggZmxleCBpdGVtcy1jZW50ZXIgZ2FwLXgtNFwiPlxuICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9e3Bvc3QuYXV0aG9yLmltYWdlVXJsfSBhbHQ9XCJcIiBjbGFzc05hbWU9XCJoLTEwIHctMTAgcm91bmRlZC1mdWxsIGJnLWdyYXktMTAwXCIgLz4gKi99XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1zbSBsZWFkaW5nLTZcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkIHRleHQtZ3JheS05MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBpbnNldC0wXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bm9kZS51aWQ/LmRpc3BsYXlfbmFtZSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge25vZGUudWlkLmRpc3BsYXlfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgPC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNjAwXCI+e3Bvc3QuYXV0aG9yLnJvbGV9PC9wPiAqL31cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgIClcbn1cbiJdLCJuYW1lcyI6WyJ1c2VUcmFuc2xhdGlvbiIsIk1lZGlhSW1hZ2UiLCJmb3JtYXREYXRlIiwiRm9ybWF0dGVkVGV4dCIsIk5vZGVBcnRpY2xlQ2FyZCIsIm5vZGUiLCJwcm9wcyIsInQiLCJhcnRpY2xlIiwiY2xhc3NOYW1lIiwiZGl2IiwibWVkaWEiLCJmaWVsZF9tZWRpYV9pbWFnZSIsIndpZHRoIiwiaGVpZ2h0Iiwic3BhbiIsImNyZWF0ZWQiLCJoMyIsImEiLCJocmVmIiwicGF0aCIsImFsaWFzIiwicCIsImJvZHkiLCJ0ZXh0IiwicHJvY2Vzc2VkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/node--article--card.tsx\n"));

/***/ })

});