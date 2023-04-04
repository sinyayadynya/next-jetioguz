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

/***/ "./components/node--article.tsx":
/*!**************************************!*\
  !*** ./components/node--article.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NodeArticle\": function() { return /* binding */ NodeArticle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var components_formatted_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/formatted-text */ \"./components/formatted-text.tsx\");\n/* harmony import */ var components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/breadcrumbs */ \"./components/breadcrumbs.tsx\");\n/* harmony import */ var components_node_article_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/node--article--card */ \"./components/node--article--card.tsx\");\n/* harmony import */ var _paragraph_blog_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paragraph--blog-section */ \"./components/paragraph--blog-section.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction NodeArticle(param) {\n    var node = param.node, additionalContent = param.additionalContent;\n    var _this = this;\n    var ref;\n    _s();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)().t;\n    var field_paragraphs = node.field_paragraphs;\n    console.log(field_paragraphs);\n    var paragraph = field_paragraphs.filter(function(paragraph) {\n        return paragraph.type === \"paragraph--blog_section\";\n    })[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__.Breadcrumbs, {\n                items: [\n                    {\n                        title: t(\"articles\"),\n                        url: \"/articles\"\n                    },\n                    {\n                        title: node.title\n                    }, \n                ]\n            }, void 0, false, {\n                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                lineNumber: 29,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"bg-white py-32 px-6 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-3xl text-base leading-7 text-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base font-semibold leading-7 text-primary-600\",\n                                children: \"Blog\"\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 43,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"mt-2 text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl\",\n                                children: node.title\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center my-4 space-x-2 text-sm\",\n                                children: [\n                                    ((ref = node.uid) === null || ref === void 0 ? void 0 : ref.display_name) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            t(\"by\"),\n                                            \" \",\n                                            node.uid.display_name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                        lineNumber: 49,\n                                        columnNumber: 29\n                                    }, this) : null,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-[6px] h-[6px] opacity-60 text-green-700\",\n                                        viewBox: \"0 0 24 24\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                            cx: \"12\",\n                                            cy: \"12\",\n                                            r: \"12\",\n                                            fill: \"currentColor\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 57,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                        lineNumber: 53,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-500\",\n                                        children: (0,lib_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(node.created)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                        lineNumber: 64,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 47,\n                                columnNumber: 21\n                            }, this),\n                            node.field_media_image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                className: \"mb-10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: (0,lib_utils__WEBPACK_IMPORTED_MODULE_3__.absoluteURL)(node.field_media_image.field_media_image.uri.url),\n                                    alt: node.field_media_image.field_media_image.resourceIdObjMeta.alt,\n                                    width: 785,\n                                    height: 525,\n                                    layout: \"responsive\",\n                                    objectFit: \"cover\",\n                                    className: \"aspect-video rounded-xl bg-gray-50 object-cover\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 82,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 25\n                            }, this),\n                            node.body && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-6 text-xl leading-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_formatted_text__WEBPACK_IMPORTED_MODULE_4__.FormattedText, {\n                                    text: node.body.processed\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 102,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paragraph_blog_section__WEBPACK_IMPORTED_MODULE_7__.ParagraphBlogSection, {\n                                paragraph: paragraph\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 105,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                        lineNumber: 42,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"bg-white pt-24 sm:pt-32\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto max-w-7xl px-6 lg:px-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mx-auto max-w-2xl text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl\",\n                                            children: t(\"more-featured-articles\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 111,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mt-2 text-lg leading-8 text-gray-600\",\n                                            children: \"Read the last news about Jeti-Oguz.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 114,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 110,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3\",\n                                    children: additionalContent.featuredArticles.map(function(nodeArticles) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_node_article_card__WEBPACK_IMPORTED_MODULE_6__.NodeArticleCard, {\n                                            nodeArticles: nodeArticles\n                                        }, node.id, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 120,\n                                            columnNumber: 33\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 118,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                            lineNumber: 109,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                        lineNumber: 108,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n        lineNumber: 28,\n        columnNumber: 9\n    }, this);\n// return node.field_paragraphs.map((paragraph) => {\n//     return <Paragraph key={paragraph.id} paragraph={paragraph} />\n// });\n}\n_s(NodeArticle, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation\n    ];\n});\n_c = NodeArticle;\nvar _c;\n$RefreshReg$(_c, \"NodeArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL25vZGUtLWFydGljbGUudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQStCO0FBS2U7QUFFTTtBQUNNO0FBQ0w7QUFFWTtBQUNBO0FBUzFELFNBQVNRLFdBQVcsQ0FBQyxLQUE2QyxFQUFFO1FBQTdDQyxJQUFJLEdBQU4sS0FBNkMsQ0FBM0NBLElBQUksRUFBRUMsaUJBQWlCLEdBQXpCLEtBQTZDLENBQXJDQSxpQkFBaUI7O1FBMEI1QkQsR0FBUTs7SUF6QjdCLElBQU0sQ0FBRyxHQUFLUiw0REFBYyxFQUFFLENBQXRCVSxDQUFDO0lBQ1QsSUFBTUMsZ0JBQWdCLEdBQXNCSCxJQUFJLENBQUNHLGdCQUFnQjtJQUNqRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNGLGdCQUFnQixDQUFDO0lBQzdCLElBQU1HLFNBQVMsR0FBb0JILGdCQUFnQixDQUFDSSxNQUFNLENBQUNELFNBQUFBLFNBQVM7ZUFBSUEsU0FBUyxDQUFDRSxJQUFJLEtBQUsseUJBQXlCO0tBQUEsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN4SCxxQkFDSSw4REFBQ0MsS0FBRztRQUFDQyxTQUFTLEVBQUMsV0FBVzs7MEJBQ3RCLDhEQUFDZCwrREFBVztnQkFDUmUsS0FBSyxFQUFFO29CQUNIO3dCQUNJQyxLQUFLLEVBQUVWLENBQUMsQ0FBQyxVQUFVLENBQUM7d0JBQ3BCVyxHQUFHLEVBQUUsV0FBVztxQkFDbkI7b0JBQ0Q7d0JBQ0lELEtBQUssRUFBRVosSUFBSSxDQUFDWSxLQUFLO3FCQUNwQjtpQkFDSjs7Ozs7b0JBQ0g7MEJBRUYsOERBQUNFLFNBQU87Z0JBQUNKLFNBQVMsRUFBQyw2QkFBNkI7O2tDQUM1Qyw4REFBQ0QsS0FBRzt3QkFBQ0MsU0FBUyxFQUFDLHFEQUFxRDs7MENBQ2hFLDhEQUFDSyxHQUFDO2dDQUFDTCxTQUFTLEVBQUMsb0RBQW9EOzBDQUFDLE1BRWxFOzs7OztvQ0FBSTswQ0FDSiw4REFBQ00sSUFBRTtnQ0FBQ04sU0FBUyxFQUFDLDZFQUE2RTswQ0FBRVYsSUFBSSxDQUFDWSxLQUFLOzs7OztvQ0FBTTswQ0FDN0csOERBQUNILEtBQUc7Z0NBQUNDLFNBQVMsRUFBQywwQ0FBMEM7O29DQUNwRFYsQ0FBQUEsQ0FBQUEsR0FBUSxHQUFSQSxJQUFJLENBQUNpQixHQUFHLGNBQVJqQixHQUFRLFdBQWMsR0FBdEJBLEtBQUFBLENBQXNCLEdBQXRCQSxHQUFRLENBQUVrQixZQUFZLGtCQUNuQiw4REFBQ0MsTUFBSTs7NENBQ0FqQixDQUFDLENBQUMsSUFBSSxDQUFDOzRDQUFDLEdBQUM7NENBQUNGLElBQUksQ0FBQ2lCLEdBQUcsQ0FBQ0MsWUFBWTs7Ozs7OzRDQUM3QixHQUNQLElBQUk7a0RBQ1IsOERBQUNFLEtBQUc7d0NBQ0FWLFNBQVMsRUFBQywyQ0FBMkM7d0NBQ3JEVyxPQUFPLEVBQUMsV0FBVztrREFFbkIsNEVBQUNDLFFBQU07NENBQ0hDLEVBQUUsRUFBQyxJQUFJOzRDQUNQQyxFQUFFLEVBQUMsSUFBSTs0Q0FDUEMsQ0FBQyxFQUFDLElBQUk7NENBQ05DLElBQUksRUFBQyxjQUFjOzs7OztnREFDckI7Ozs7OzRDQUNBO2tEQUNOLDhEQUFDUCxNQUFJO3dDQUFDVCxTQUFTLEVBQUMsZUFBZTtrREFDMUJoQixxREFBVSxDQUFDTSxJQUFJLENBQUMyQixPQUFPLENBQUM7Ozs7OzRDQUN0Qjs7Ozs7O29DQUNMOzRCQWFMM0IsSUFBSSxDQUFDNEIsaUJBQWlCLGtCQUNuQiw4REFBQ0MsUUFBTTtnQ0FBQ25CLFNBQVMsRUFBQyxPQUFPOzBDQUNyQiw0RUFBQ25CLG1EQUFLO29DQUNGdUMsR0FBRyxFQUFFckMsc0RBQVcsQ0FDWk8sSUFBSSxDQUFDNEIsaUJBQWlCLENBQUNBLGlCQUFpQixDQUFDRyxHQUFHLENBQ3ZDbEIsR0FBRyxDQUNYO29DQUNEbUIsR0FBRyxFQUNDaEMsSUFBSSxDQUFDNEIsaUJBQWlCLENBQUNBLGlCQUFpQixDQUNuQ0ssaUJBQWlCLENBQUNELEdBQUc7b0NBRTlCRSxLQUFLLEVBQUUsR0FBRztvQ0FDVkMsTUFBTSxFQUFFLEdBQUc7b0NBQ1hDLE1BQU0sRUFBQyxZQUFZO29DQUNuQkMsU0FBUyxFQUFDLE9BQU87b0NBQ2pCM0IsU0FBUyxFQUFDLGlEQUFpRDs7Ozs7d0NBQzdEOzs7OztvQ0FDRzs0QkFHWlYsSUFBSSxDQUFDc0MsSUFBSSxrQkFDTiw4REFBQzdCLEtBQUc7Z0NBQUNDLFNBQVMsRUFBQyx3QkFBd0I7MENBQ25DLDRFQUFDZixvRUFBYTtvQ0FBQzRDLElBQUksRUFBRXZDLElBQUksQ0FBQ3NDLElBQUksQ0FBQ0UsU0FBUzs7Ozs7d0NBQUk7Ozs7O29DQUMxQzswQ0FFViw4REFBQzFDLHlFQUFvQjtnQ0FBQ1EsU0FBUyxFQUFFQSxTQUFTOzs7OztvQ0FBSTs7Ozs7OzRCQUM1QztrQ0FFTiw4REFBQ21DLFNBQU87d0JBQUMvQixTQUFTLEVBQUMseUJBQXlCO2tDQUN4Qyw0RUFBQ0QsS0FBRzs0QkFBQ0MsU0FBUyxFQUFDLGdDQUFnQzs7OENBQzNDLDhEQUFDRCxLQUFHO29DQUFDQyxTQUFTLEVBQUMsK0JBQStCOztzREFDMUMsOERBQUNnQyxJQUFFOzRDQUFDaEMsU0FBUyxFQUFDLHdFQUF3RTtzREFDakZSLENBQUMsQ0FBQyx3QkFBd0IsQ0FBQzs7Ozs7Z0RBQzNCO3NEQUNMLDhEQUFDYSxHQUFDOzRDQUFDTCxTQUFTLEVBQUMsc0NBQXNDO3NEQUFDLHFDQUVwRDs7Ozs7Z0RBQUk7Ozs7Ozt3Q0FDRjs4Q0FDTiw4REFBQ0QsS0FBRztvQ0FBQ0MsU0FBUyxFQUFDLGdHQUFnRzs4Q0FDMUdULGlCQUFpQixDQUFDMEMsZ0JBQWdCLENBQUNDLEdBQUcsQ0FBQyxTQUFDQyxZQUFZOzZEQUNqRCw4REFBQ2hELHlFQUFlOzRDQUFlZ0QsWUFBWSxFQUFFQSxZQUFZOzJDQUFuQzdDLElBQUksQ0FBQzhDLEVBQUU7Ozs7aURBQWdDO3FDQUNoRSxDQUFDOzs7Ozt3Q0FDQTs7Ozs7O2dDQUNKOzs7Ozs0QkFDQTs7Ozs7O29CQUVKOzs7Ozs7WUFDUixDQUNSO0FBRUYsb0RBQW9EO0FBQ3BELG9FQUFvRTtBQUNwRSxNQUFNO0FBQ1YsQ0FBQztHQS9HZS9DLFdBQVc7O1FBQ1RQLHdEQUFjOzs7QUFEaEJPLEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub2RlLS1hcnRpY2xlLnRzeD9mMjZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBEcnVwYWxOb2RlIH0gZnJvbSAnbmV4dC1kcnVwYWwnO1xuaW1wb3J0IHsgRHJ1cGFsUGFyYWdyYXBoIH0gZnJvbSAnbmV4dC1kcnVwYWwnO1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCc7XG5cbmltcG9ydCB7IGFic29sdXRlVVJMLCBmb3JtYXREYXRlIH0gZnJvbSAnbGliL3V0aWxzJztcbmltcG9ydCB7IEZvcm1hdHRlZFRleHQgfSBmcm9tICdjb21wb25lbnRzL2Zvcm1hdHRlZC10ZXh0JztcbmltcG9ydCB7IEJyZWFkY3J1bWJzIH0gZnJvbSAnY29tcG9uZW50cy9icmVhZGNydW1icyc7XG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tIFwiY29tcG9uZW50cy9wYXJhZ3JhcGhcIjtcbmltcG9ydCB7IE5vZGVBcnRpY2xlQ2FyZCB9IGZyb20gJ2NvbXBvbmVudHMvbm9kZS0tYXJ0aWNsZS0tY2FyZCc7XG5pbXBvcnQgeyBQYXJhZ3JhcGhCbG9nU2VjdGlvbiB9IGZyb20gJy4vcGFyYWdyYXBoLS1ibG9nLXNlY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVBcnRpY2xlUHJvcHMge1xuICAgIG5vZGU6IERydXBhbE5vZGU7XG4gICAgYWRkaXRpb25hbENvbnRlbnQ6IHtcbiAgICAgICAgZmVhdHVyZWRBcnRpY2xlczogRHJ1cGFsTm9kZVtdO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOb2RlQXJ0aWNsZSh7IG5vZGUsIGFkZGl0aW9uYWxDb250ZW50IH06IE5vZGVBcnRpY2xlUHJvcHMpIHtcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgZmllbGRfcGFyYWdyYXBoczogRHJ1cGFsUGFyYWdyYXBoW10gPSBub2RlLmZpZWxkX3BhcmFncmFwaHNcbiAgICBjb25zb2xlLmxvZyhmaWVsZF9wYXJhZ3JhcGhzKVxuICAgIGNvbnN0IHBhcmFncmFwaDogRHJ1cGFsUGFyYWdyYXBoID0gZmllbGRfcGFyYWdyYXBocy5maWx0ZXIocGFyYWdyYXBoID0+IHBhcmFncmFwaC50eXBlID09PSBcInBhcmFncmFwaC0tYmxvZ19zZWN0aW9uXCIpWzBdXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxCcmVhZGNydW1ic1xuICAgICAgICAgICAgICAgIGl0ZW1zPXtbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiB0KCdhcnRpY2xlcycpLFxuICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiAnL2FydGljbGVzJyxcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IG5vZGUudGl0bGUsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgXX1cbiAgICAgICAgICAgIC8+XG5cbiAgICAgICAgICAgIDxhcnRpY2xlIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB5LTMyIHB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0zeGwgdGV4dC1iYXNlIGxlYWRpbmctNyB0ZXh0LWdyYXktNzAwXCI+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtYmFzZSBmb250LXNlbWlib2xkIGxlYWRpbmctNyB0ZXh0LXByaW1hcnktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICBCbG9nXG4gICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT1cIm10LTIgdGV4dC0zeGwgZm9udC1zZXJpZiBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bFwiPntub2RlLnRpdGxlfTwvaDE+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBpdGVtcy1jZW50ZXIgbXktNCBzcGFjZS14LTIgdGV4dC1zbVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge25vZGUudWlkPy5kaXNwbGF5X25hbWUgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdieScpfSB7bm9kZS51aWQuZGlzcGxheV9uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICAgICAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctWzZweF0gaC1bNnB4XSBvcGFjaXR5LTYwIHRleHQtZ3JlZW4tNzAwXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2aWV3Qm94PVwiMCAwIDI0IDI0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Y2lyY2xlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN4PVwiMTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeT1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcj1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmlsbD1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidGV4dC1ncmF5LTUwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtmb3JtYXREYXRlKG5vZGUuY3JlYXRlZCl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB7Lyoge25vZGUuZmllbGRfY291bnRyeT8ubGVuZ3RoID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IG1iLTYgc3BhY2UteC0yXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJmb250LXNlbWlib2xkXCI+e3QoXCJ0YWdzXCIpfTogPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAge25vZGUuZmllbGRfY291bnRyeS5tYXAoKGNvdW50cnkpID0+IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBrZXk9e2NvdW50cnkuaWR9IGhyZWY9e2NvdW50cnkucGF0aC5hbGlhc30gcGFzc0hyZWY+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidW5kZXJsaW5lIHRyYW5zaXRpb24tY29sb3JzIHRleHQtZ3JlZW4tNzAwIGhvdmVyOnRleHQtcHJpbWFyeS01MDAgaG92ZXI6YmctZ3JheS01MFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Y291bnRyeS5uYW1lfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICApIDogbnVsbH0gKi99XG4gICAgICAgICAgICAgICAgICAgIHtub2RlLmZpZWxkX21lZGlhX2ltYWdlICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPVwibWItMTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXthYnNvbHV0ZVVSTChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZmllbGRfbWVkaWFfaW1hZ2UuZmllbGRfbWVkaWFfaW1hZ2UudXJpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnVybFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5maWVsZF9tZWRpYV9pbWFnZS5maWVsZF9tZWRpYV9pbWFnZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5yZXNvdXJjZUlkT2JqTWV0YS5hbHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD17Nzg1fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ9ezUyNX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9iamVjdEZpdD1cImNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYXNwZWN0LXZpZGVvIHJvdW5kZWQteGwgYmctZ3JheS01MCBvYmplY3QtY292ZXJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2ZpZ3VyZT5cbiAgICAgICAgICAgICAgICAgICAgKX1cblxuICAgICAgICAgICAgICAgICAgICB7bm9kZS5ib2R5ICYmIChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNiB0ZXh0LXhsIGxlYWRpbmctOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGb3JtYXR0ZWRUZXh0IHRleHQ9e25vZGUuYm9keS5wcm9jZXNzZWR9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgPFBhcmFncmFwaEJsb2dTZWN0aW9uIHBhcmFncmFwaD17cGFyYWdyYXBofSAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiYmctd2hpdGUgcHQtMjQgc206cHQtMzJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTd4bCBweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy0yeGwgdGV4dC1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiZm9udC1zZXJpZiB0ZXh0LTN4bCBmb250LWJvbGQgdHJhY2tpbmctdGlnaHQgdGV4dC1ncmF5LTkwMCBzbTp0ZXh0LTR4bFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnbW9yZS1mZWF0dXJlZC1hcnRpY2xlcycpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiB0ZXh0LWxnIGxlYWRpbmctOCB0ZXh0LWdyYXktNjAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWQgdGhlIGxhc3QgbmV3cyBhYm91dCBKZXRpLU9ndXouXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbXQtMTYgZ3JpZCBtYXgtdy0yeGwgZ3JpZC1jb2xzLTEgZ2FwLXktMjAgZ2FwLXgtOCBsZzpteC0wIGxnOm1heC13LW5vbmUgbGc6Z3JpZC1jb2xzLTNcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YWRkaXRpb25hbENvbnRlbnQuZmVhdHVyZWRBcnRpY2xlcy5tYXAoKG5vZGVBcnRpY2xlcykgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZUFydGljbGVDYXJkIGtleT17bm9kZS5pZH0gbm9kZUFydGljbGVzPXtub2RlQXJ0aWNsZXN9IC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgICAgICA8L2FydGljbGU+XG4gICAgICAgIDwvZGl2PlxuICAgICk7XG5cbiAgICAvLyByZXR1cm4gbm9kZS5maWVsZF9wYXJhZ3JhcGhzLm1hcCgocGFyYWdyYXBoKSA9PiB7XG4gICAgLy8gICAgIHJldHVybiA8UGFyYWdyYXBoIGtleT17cGFyYWdyYXBoLmlkfSBwYXJhZ3JhcGg9e3BhcmFncmFwaH0gLz5cbiAgICAvLyB9KTtcbn1cbiJdLCJuYW1lcyI6WyJJbWFnZSIsInVzZVRyYW5zbGF0aW9uIiwiYWJzb2x1dGVVUkwiLCJmb3JtYXREYXRlIiwiRm9ybWF0dGVkVGV4dCIsIkJyZWFkY3J1bWJzIiwiTm9kZUFydGljbGVDYXJkIiwiUGFyYWdyYXBoQmxvZ1NlY3Rpb24iLCJOb2RlQXJ0aWNsZSIsIm5vZGUiLCJhZGRpdGlvbmFsQ29udGVudCIsInQiLCJmaWVsZF9wYXJhZ3JhcGhzIiwiY29uc29sZSIsImxvZyIsInBhcmFncmFwaCIsImZpbHRlciIsInR5cGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpdGVtcyIsInRpdGxlIiwidXJsIiwiYXJ0aWNsZSIsInAiLCJoMSIsInVpZCIsImRpc3BsYXlfbmFtZSIsInNwYW4iLCJzdmciLCJ2aWV3Qm94IiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJmaWxsIiwiY3JlYXRlZCIsImZpZWxkX21lZGlhX2ltYWdlIiwiZmlndXJlIiwic3JjIiwidXJpIiwiYWx0IiwicmVzb3VyY2VJZE9iak1ldGEiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsIm9iamVjdEZpdCIsImJvZHkiLCJ0ZXh0IiwicHJvY2Vzc2VkIiwic2VjdGlvbiIsImgyIiwiZmVhdHVyZWRBcnRpY2xlcyIsIm1hcCIsIm5vZGVBcnRpY2xlcyIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/node--article.tsx\n"));

/***/ })

});