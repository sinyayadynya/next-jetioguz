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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NodeArticle\": function() { return /* binding */ NodeArticle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var components_formatted_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/formatted-text */ \"./components/formatted-text.tsx\");\n/* harmony import */ var components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/breadcrumbs */ \"./components/breadcrumbs.tsx\");\n/* harmony import */ var components_paragraph__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/paragraph */ \"./components/paragraph.tsx\");\n/* harmony import */ var components_node_article_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! components/node--article--card */ \"./components/node--article--card.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction NodeArticle(param) {\n    var node = param.node, additionalContent = param.additionalContent;\n    var _this = this;\n    var ref;\n    _s();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)().t;\n    console.log(\"-+-+-\", node);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__.Breadcrumbs, {\n                items: [\n                    {\n                        title: t(\"articles\"),\n                        url: \"/articles\"\n                    },\n                    {\n                        title: node.title\n                    }, \n                ]\n            }, void 0, false, {\n                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                lineNumber: 24,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"bg-white py-32 px-6 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-3xl text-base leading-7 text-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base font-semibold leading-7 text-primary-600\",\n                                children: \"Blog\"\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 38,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"mt-2 text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl\",\n                                children: node.title\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 41,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center my-4 space-x-2 text-sm\",\n                                children: [\n                                    ((ref = node.uid) === null || ref === void 0 ? void 0 : ref.display_name) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            t(\"by\"),\n                                            \" \",\n                                            node.uid.display_name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                        lineNumber: 44,\n                                        columnNumber: 29\n                                    }, this) : null,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-[6px] h-[6px] opacity-60 text-green-700\",\n                                        viewBox: \"0 0 24 24\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                            cx: \"12\",\n                                            cy: \"12\",\n                                            r: \"12\",\n                                            fill: \"currentColor\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 52,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-500\",\n                                        children: (0,lib_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(node.created)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                        lineNumber: 59,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, this),\n                            node.field_media_image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                className: \"mb-10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: (0,lib_utils__WEBPACK_IMPORTED_MODULE_3__.absoluteURL)(node.field_media_image.field_media_image.uri.url),\n                                    alt: node.field_media_image.field_media_image.resourceIdObjMeta.alt,\n                                    width: 785,\n                                    height: 525,\n                                    layout: \"responsive\",\n                                    objectFit: \"cover\",\n                                    className: \"aspect-video rounded-xl bg-gray-50 object-cover\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 77,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 25\n                            }, this),\n                            node.body && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-6 text-xl leading-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_formatted_text__WEBPACK_IMPORTED_MODULE_4__.FormattedText, {\n                                    text: node.body.processed\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 97,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 96,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_paragraph__WEBPACK_IMPORTED_MODULE_6__.Paragraph, {\n                                paragraph: node.field_paragraphs.filter(function(paragraph1) {\n                                    return paragraph1.type === \"paragraph--blog-section\";\n                                })\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 22\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                        lineNumber: 37,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"bg-white pt-24 sm:pt-32\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto max-w-7xl px-6 lg:px-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mx-auto max-w-2xl text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl\",\n                                            children: t(\"more-featured-articles\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 106,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mt-2 text-lg leading-8 text-gray-600\",\n                                            children: \"Read the last news about Jeti-Oguz.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 109,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 105,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3\",\n                                    children: additionalContent.featuredArticles.map(function(node) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_node_article_card__WEBPACK_IMPORTED_MODULE_7__.NodeArticleCard, {\n                                            node: node\n                                        }, node.id, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 115,\n                                            columnNumber: 33\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 113,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                            lineNumber: 104,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                        lineNumber: 103,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                lineNumber: 36,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n        lineNumber: 23,\n        columnNumber: 9\n    }, this);\n// return node.field_paragraphs.map((paragraph) => {\n//     return <Paragraph key={paragraph.id} paragraph={paragraph} />\n// });\n}\n_s(NodeArticle, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation\n    ];\n});\n_c = NodeArticle;\nvar _c;\n$RefreshReg$(_c, \"NodeArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub2RlLS1hcnRpY2xlLnRzeD9mMjZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBEcnVwYWxOb2RlIH0gZnJvbSAnbmV4dC1kcnVwYWwnO1xuaW1wb3J0IHsgdXNlVHJhbnNsYXRpb24gfSBmcm9tICduZXh0LWkxOG5leHQnO1xuXG5pbXBvcnQgeyBhYnNvbHV0ZVVSTCwgZm9ybWF0RGF0ZSB9IGZyb20gJ2xpYi91dGlscyc7XG5pbXBvcnQgeyBGb3JtYXR0ZWRUZXh0IH0gZnJvbSAnY29tcG9uZW50cy9mb3JtYXR0ZWQtdGV4dCc7XG5pbXBvcnQgeyBCcmVhZGNydW1icyB9IGZyb20gJ2NvbXBvbmVudHMvYnJlYWRjcnVtYnMnO1xuaW1wb3J0IHsgUGFyYWdyYXBoIH0gZnJvbSBcImNvbXBvbmVudHMvcGFyYWdyYXBoXCI7XG5pbXBvcnQgeyBOb2RlQXJ0aWNsZUNhcmQgfSBmcm9tICdjb21wb25lbnRzL25vZGUtLWFydGljbGUtLWNhcmQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVBcnRpY2xlUHJvcHMge1xuICAgIG5vZGU6IERydXBhbE5vZGU7XG4gICAgYWRkaXRpb25hbENvbnRlbnQ6IHtcbiAgICAgICAgZmVhdHVyZWRBcnRpY2xlczogRHJ1cGFsTm9kZVtdO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOb2RlQXJ0aWNsZSh7IG5vZGUsIGFkZGl0aW9uYWxDb250ZW50IH06IE5vZGVBcnRpY2xlUHJvcHMpIHtcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc29sZS5sb2coXCItKy0rLVwiLCBub2RlKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYnNcbiAgICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdCgnYXJ0aWNsZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hcnRpY2xlcycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBub2RlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0zMiBweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctM3hsIHRleHQtYmFzZSBsZWFkaW5nLTcgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTcgdGV4dC1wcmltYXJ5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC0yIHRleHQtM3hsIGZvbnQtc2VyaWYgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgc206dGV4dC00eGxcIj57bm9kZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG15LTQgc3BhY2UteC0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtub2RlLnVpZD8uZGlzcGxheV9uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnYnknKX0ge25vZGUudWlkLmRpc3BsYXlfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs2cHhdIGgtWzZweF0gb3BhY2l0eS02MCB0ZXh0LWdyZWVuLTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3k9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShub2RlLmNyZWF0ZWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIHtub2RlLmZpZWxkX2NvdW50cnk/Lmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi02IHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnt0KFwidGFnc1wiKX06IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtub2RlLmZpZWxkX2NvdW50cnkubWFwKChjb3VudHJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtjb3VudHJ5LmlkfSBocmVmPXtjb3VudHJ5LnBhdGguYWxpYXN9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVuZGVybGluZSB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LWdyZWVuLTcwMCBob3Zlcjp0ZXh0LXByaW1hcnktNTAwIGhvdmVyOmJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50cnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9ICovfVxuICAgICAgICAgICAgICAgICAgICB7bm9kZS5maWVsZF9tZWRpYV9pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YWJzb2x1dGVVUkwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmZpZWxkX21lZGlhX2ltYWdlLmZpZWxkX21lZGlhX2ltYWdlLnVyaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZmllbGRfbWVkaWFfaW1hZ2UuZmllbGRfbWVkaWFfaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzb3VyY2VJZE9iak1ldGEuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezc4NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC12aWRlbyByb3VuZGVkLXhsIGJnLWdyYXktNTAgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAge25vZGUuYm9keSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdGV4dC14bCBsZWFkaW5nLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkVGV4dCB0ZXh0PXtub2RlLmJvZHkucHJvY2Vzc2VkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIHs8UGFyYWdyYXBoIHBhcmFncmFwaD17bm9kZS5maWVsZF9wYXJhZ3JhcGhzLmZpbHRlcigocGFyYWdyYXBoMSkgPT4gcGFyYWdyYXBoMS50eXBlID09PSAncGFyYWdyYXBoLS1ibG9nLXNlY3Rpb24nKX0gLz59XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJiZy13aGl0ZSBwdC0yNCBzbTpwdC0zMlwiPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctN3hsIHB4LTYgbGc6cHgtOFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG1heC13LTJ4bCB0ZXh0LWNlbnRlclwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJmb250LXNlcmlmIHRleHQtM3hsIGZvbnQtYm9sZCB0cmFja2luZy10aWdodCB0ZXh0LWdyYXktOTAwIHNtOnRleHQtNHhsXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHt0KCdtb3JlLWZlYXR1cmVkLWFydGljbGVzJyl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIHRleHQtbGcgbGVhZGluZy04IHRleHQtZ3JheS02MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVhZCB0aGUgbGFzdCBuZXdzIGFib3V0IEpldGktT2d1ei5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtdC0xNiBncmlkIG1heC13LTJ4bCBncmlkLWNvbHMtMSBnYXAteS0yMCBnYXAteC04IGxnOm14LTAgbGc6bWF4LXctbm9uZSBsZzpncmlkLWNvbHMtM1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHthZGRpdGlvbmFsQ29udGVudC5mZWF0dXJlZEFydGljbGVzLm1hcCgobm9kZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Tm9kZUFydGljbGVDYXJkIGtleT17bm9kZS5pZH0gbm9kZT17bm9kZX0gLz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L3NlY3Rpb24+XG5cbiAgICAgICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgICAgPC9kaXY+XG4gICAgKTtcblxuICAgIC8vIHJldHVybiBub2RlLmZpZWxkX3BhcmFncmFwaHMubWFwKChwYXJhZ3JhcGgpID0+IHtcbiAgICAvLyAgICAgcmV0dXJuIDxQYXJhZ3JhcGgga2V5PXtwYXJhZ3JhcGguaWR9IHBhcmFncmFwaD17cGFyYWdyYXBofSAvPlxuICAgIC8vIH0pO1xufVxuIl0sIm5hbWVzIjpbIkltYWdlIiwidXNlVHJhbnNsYXRpb24iLCJhYnNvbHV0ZVVSTCIsImZvcm1hdERhdGUiLCJGb3JtYXR0ZWRUZXh0IiwiQnJlYWRjcnVtYnMiLCJQYXJhZ3JhcGgiLCJOb2RlQXJ0aWNsZUNhcmQiLCJOb2RlQXJ0aWNsZSIsIm5vZGUiLCJhZGRpdGlvbmFsQ29udGVudCIsInQiLCJjb25zb2xlIiwibG9nIiwiZGl2IiwiY2xhc3NOYW1lIiwiaXRlbXMiLCJ0aXRsZSIsInVybCIsImFydGljbGUiLCJwIiwiaDEiLCJ1aWQiLCJkaXNwbGF5X25hbWUiLCJzcGFuIiwic3ZnIiwidmlld0JveCIsImNpcmNsZSIsImN4IiwiY3kiLCJyIiwiZmlsbCIsImNyZWF0ZWQiLCJmaWVsZF9tZWRpYV9pbWFnZSIsImZpZ3VyZSIsInNyYyIsInVyaSIsImFsdCIsInJlc291cmNlSWRPYmpNZXRhIiwid2lkdGgiLCJoZWlnaHQiLCJsYXlvdXQiLCJvYmplY3RGaXQiLCJib2R5IiwidGV4dCIsInByb2Nlc3NlZCIsInBhcmFncmFwaCIsImZpZWxkX3BhcmFncmFwaHMiLCJmaWx0ZXIiLCJwYXJhZ3JhcGgxIiwidHlwZSIsInNlY3Rpb24iLCJoMiIsImZlYXR1cmVkQXJ0aWNsZXMiLCJtYXAiLCJpZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/node--article.tsx\n"));

/***/ })

});