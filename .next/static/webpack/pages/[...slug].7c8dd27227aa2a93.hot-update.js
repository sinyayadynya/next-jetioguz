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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NodeArticle\": function() { return /* binding */ NodeArticle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_i18next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-i18next */ \"./node_modules/next-i18next/dist/esm/index.js\");\n/* harmony import */ var lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lib/utils */ \"./lib/utils.ts\");\n/* harmony import */ var components_formatted_text__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! components/formatted-text */ \"./components/formatted-text.tsx\");\n/* harmony import */ var components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! components/breadcrumbs */ \"./components/breadcrumbs.tsx\");\n/* harmony import */ var components_node_article_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! components/node--article--card */ \"./components/node--article--card.tsx\");\n/* harmony import */ var _paragraph_blog_section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./paragraph--blog-section */ \"./components/paragraph--blog-section.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nfunction NodeArticle(param) {\n    var node = param.node, additionalContent = param.additionalContent;\n    var _this = this;\n    var ref;\n    _s();\n    var t = (0,next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation)().t;\n    var field_paragraphs = node.field_paragraphs;\n    var paragraph = field_paragraphs.filter(function(paragraph) {\n        return paragraph.type === \"paragraph--blog_section\";\n    })[0];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_breadcrumbs__WEBPACK_IMPORTED_MODULE_5__.Breadcrumbs, {\n                items: [\n                    {\n                        title: t(\"articles\"),\n                        url: \"/articles\"\n                    },\n                    {\n                        title: node.title\n                    }, \n                ]\n            }, void 0, false, {\n                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                lineNumber: 28,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"article\", {\n                className: \"bg-white py-32 px-6 lg:px-8\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"mx-auto max-w-3xl text-base leading-7 text-gray-700\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-base font-semibold leading-7 text-primary-600\",\n                                children: \"Blog\"\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 42,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                className: \"mt-2 text-3xl font-serif font-bold tracking-tight text-gray-900 sm:text-4xl\",\n                                children: node.title\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 45,\n                                columnNumber: 21\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex items-center my-4 space-x-2 text-sm\",\n                                children: [\n                                    ((ref = node.uid) === null || ref === void 0 ? void 0 : ref.display_name) ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        children: [\n                                            t(\"by\"),\n                                            \" \",\n                                            node.uid.display_name\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                        lineNumber: 48,\n                                        columnNumber: 29\n                                    }, this) : null,\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"svg\", {\n                                        className: \"w-[6px] h-[6px] opacity-60 text-green-700\",\n                                        viewBox: \"0 0 24 24\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"circle\", {\n                                            cx: \"12\",\n                                            cy: \"12\",\n                                            r: \"12\",\n                                            fill: \"currentColor\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 56,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                        className: \"text-gray-500\",\n                                        children: (0,lib_utils__WEBPACK_IMPORTED_MODULE_3__.formatDate)(node.created)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                        lineNumber: 63,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 21\n                            }, this),\n                            node.field_media_image && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                                className: \"mb-10\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_1___default()), {\n                                    src: (0,lib_utils__WEBPACK_IMPORTED_MODULE_3__.absoluteURL)(node.field_media_image.field_media_image.uri.url),\n                                    alt: node.field_media_image.field_media_image.resourceIdObjMeta.alt,\n                                    width: 785,\n                                    height: 525,\n                                    layout: \"responsive\",\n                                    objectFit: \"cover\",\n                                    className: \"aspect-video rounded-xl bg-gray-50 object-cover\"\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 81,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 80,\n                                columnNumber: 25\n                            }, this),\n                            node.body && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-6 text-xl leading-8\",\n                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_formatted_text__WEBPACK_IMPORTED_MODULE_4__.FormattedText, {\n                                    text: node.body.processed\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 101,\n                                    columnNumber: 29\n                                }, this)\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 100,\n                                columnNumber: 25\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_paragraph_blog_section__WEBPACK_IMPORTED_MODULE_7__.ParagraphBlogSection, {\n                                paragraph: paragraph\n                            }, void 0, false, {\n                                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                lineNumber: 104,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                        lineNumber: 41,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                        className: \"bg-white pt-24 sm:pt-32\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mx-auto max-w-7xl px-6 lg:px-8\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mx-auto max-w-2xl text-center\",\n                                    children: [\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                            className: \"font-serif text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl\",\n                                            children: t(\"more-featured-articles\")\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 110,\n                                            columnNumber: 29\n                                        }, this),\n                                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                            className: \"mt-2 text-lg leading-8 text-gray-600\",\n                                            children: \"Read the last news about Jeti-Oguz.\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 113,\n                                            columnNumber: 29\n                                        }, this)\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 109,\n                                    columnNumber: 25\n                                }, this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-y-20 gap-x-8 lg:mx-0 lg:max-w-none lg:grid-cols-3\",\n                                    children: additionalContent.featuredArticles.map(function(node) {\n                                        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(components_node_article_card__WEBPACK_IMPORTED_MODULE_6__.NodeArticleCard, {\n                                            node: node\n                                        }, node.id, false, {\n                                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                            lineNumber: 119,\n                                            columnNumber: 33\n                                        }, _this);\n                                    })\n                                }, void 0, false, {\n                                    fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                                    lineNumber: 117,\n                                    columnNumber: 25\n                                }, this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                            lineNumber: 108,\n                            columnNumber: 21\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                        lineNumber: 107,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/denisloginov/Documents/Development/next-jetioguz-master/components/node--article.tsx\",\n        lineNumber: 27,\n        columnNumber: 9\n    }, this);\n// return node.field_paragraphs.map((paragraph) => {\n//     return <Paragraph key={paragraph.id} paragraph={paragraph} />\n// });\n}\n_s(NodeArticle, \"zlIdU9EjM2llFt74AbE2KsUJXyM=\", false, function() {\n    return [\n        next_i18next__WEBPACK_IMPORTED_MODULE_2__.useTranslation\n    ];\n});\n_c = NodeArticle;\nvar _c;\n$RefreshReg$(_c, \"NodeArticle\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUFBLFdBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9ub2RlLS1hcnRpY2xlLnRzeD9mMjZiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tICduZXh0L2ltYWdlJztcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgeyBEcnVwYWxOb2RlIH0gZnJvbSAnbmV4dC1kcnVwYWwnO1xuaW1wb3J0IHsgRHJ1cGFsUGFyYWdyYXBoIH0gZnJvbSAnbmV4dC1kcnVwYWwnO1xuXG5pbXBvcnQgeyB1c2VUcmFuc2xhdGlvbiB9IGZyb20gJ25leHQtaTE4bmV4dCc7XG5cbmltcG9ydCB7IGFic29sdXRlVVJMLCBmb3JtYXREYXRlIH0gZnJvbSAnbGliL3V0aWxzJztcbmltcG9ydCB7IEZvcm1hdHRlZFRleHQgfSBmcm9tICdjb21wb25lbnRzL2Zvcm1hdHRlZC10ZXh0JztcbmltcG9ydCB7IEJyZWFkY3J1bWJzIH0gZnJvbSAnY29tcG9uZW50cy9icmVhZGNydW1icyc7XG5pbXBvcnQgeyBQYXJhZ3JhcGggfSBmcm9tIFwiY29tcG9uZW50cy9wYXJhZ3JhcGhcIjtcbmltcG9ydCB7IE5vZGVBcnRpY2xlQ2FyZCB9IGZyb20gJ2NvbXBvbmVudHMvbm9kZS0tYXJ0aWNsZS0tY2FyZCc7XG5pbXBvcnQgeyBQYXJhZ3JhcGhCbG9nU2VjdGlvbiB9IGZyb20gJy4vcGFyYWdyYXBoLS1ibG9nLXNlY3Rpb24nO1xuXG5leHBvcnQgaW50ZXJmYWNlIE5vZGVBcnRpY2xlUHJvcHMge1xuICAgIG5vZGU6IERydXBhbE5vZGU7XG4gICAgYWRkaXRpb25hbENvbnRlbnQ6IHtcbiAgICAgICAgZmVhdHVyZWRBcnRpY2xlczogRHJ1cGFsTm9kZVtdO1xuICAgIH07XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBOb2RlQXJ0aWNsZSh7IG5vZGUsIGFkZGl0aW9uYWxDb250ZW50IH06IE5vZGVBcnRpY2xlUHJvcHMpIHtcbiAgICBjb25zdCB7IHQgfSA9IHVzZVRyYW5zbGF0aW9uKCk7XG4gICAgY29uc3QgZmllbGRfcGFyYWdyYXBoczogRHJ1cGFsUGFyYWdyYXBoW10gPSBub2RlLmZpZWxkX3BhcmFncmFwaHNcbiAgICBjb25zdCBwYXJhZ3JhcGg6IERydXBhbFBhcmFncmFwaCA9IGZpZWxkX3BhcmFncmFwaHMuZmlsdGVyKHBhcmFncmFwaCA9PiBwYXJhZ3JhcGgudHlwZSA9PT0gXCJwYXJhZ3JhcGgtLWJsb2dfc2VjdGlvblwiKVswXVxuICAgIHJldHVybiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8QnJlYWRjcnVtYnNcbiAgICAgICAgICAgICAgICBpdGVtcz17W1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogdCgnYXJ0aWNsZXMnKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHVybDogJy9hcnRpY2xlcycsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBub2RlLnRpdGxlLFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIF19XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8YXJ0aWNsZSBjbGFzc05hbWU9XCJiZy13aGl0ZSBweS0zMiBweC02IGxnOnB4LThcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctM3hsIHRleHQtYmFzZSBsZWFkaW5nLTcgdGV4dC1ncmF5LTcwMFwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWJhc2UgZm9udC1zZW1pYm9sZCBsZWFkaW5nLTcgdGV4dC1wcmltYXJ5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgQmxvZ1xuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJtdC0yIHRleHQtM3hsIGZvbnQtc2VyaWYgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgc206dGV4dC00eGxcIj57bm9kZS50aXRsZX08L2gxPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggaXRlbXMtY2VudGVyIG15LTQgc3BhY2UteC0yIHRleHQtc21cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtub2RlLnVpZD8uZGlzcGxheV9uYW1lID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7dCgnYnknKX0ge25vZGUudWlkLmRpc3BsYXlfbmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzdmdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LVs2cHhdIGgtWzZweF0gb3BhY2l0eS02MCB0ZXh0LWdyZWVuLTcwMFwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGNpcmNsZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjeD1cIjEyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3k9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHI9XCIxMlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpbGw9XCJjdXJyZW50Q29sb3JcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQtZ3JheS01MDBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zm9ybWF0RGF0ZShub2RlLmNyZWF0ZWQpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgey8qIHtub2RlLmZpZWxkX2NvdW50cnk/Lmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtYi02IHNwYWNlLXgtMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZm9udC1zZW1pYm9sZFwiPnt0KFwidGFnc1wiKX06IDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtub2RlLmZpZWxkX2NvdW50cnkubWFwKChjb3VudHJ5KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsga2V5PXtjb3VudHJ5LmlkfSBocmVmPXtjb3VudHJ5LnBhdGguYWxpYXN9IHBhc3NIcmVmPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInVuZGVybGluZSB0cmFuc2l0aW9uLWNvbG9ycyB0ZXh0LWdyZWVuLTcwMCBob3Zlcjp0ZXh0LXByaW1hcnktNTAwIGhvdmVyOmJnLWdyYXktNTBcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2NvdW50cnkubmFtZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9ICovfVxuICAgICAgICAgICAgICAgICAgICB7bm9kZS5maWVsZF9tZWRpYV9pbWFnZSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZmlndXJlIGNsYXNzTmFtZT1cIm1iLTEwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YWJzb2x1dGVVUkwoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBub2RlLmZpZWxkX21lZGlhX2ltYWdlLmZpZWxkX21lZGlhX2ltYWdlLnVyaVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC51cmxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuZmllbGRfbWVkaWFfaW1hZ2UuZmllbGRfbWVkaWFfaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAucmVzb3VyY2VJZE9iak1ldGEuYWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezc4NX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs1MjV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmplY3RGaXQ9XCJjb3ZlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImFzcGVjdC12aWRlbyByb3VuZGVkLXhsIGJnLWdyYXktNTAgb2JqZWN0LWNvdmVyXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9maWd1cmU+XG4gICAgICAgICAgICAgICAgICAgICl9XG5cbiAgICAgICAgICAgICAgICAgICAge25vZGUuYm9keSAmJiAoXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTYgdGV4dC14bCBsZWFkaW5nLThcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Rm9ybWF0dGVkVGV4dCB0ZXh0PXtub2RlLmJvZHkucHJvY2Vzc2VkfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgICAgICAgIDxQYXJhZ3JhcGhCbG9nU2VjdGlvbiBwYXJhZ3JhcGg9e3BhcmFncmFwaH0gLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cImJnLXdoaXRlIHB0LTI0IHNtOnB0LTMyXCI+XG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXgtYXV0byBtYXgtdy03eGwgcHgtNiBsZzpweC04XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm14LWF1dG8gbWF4LXctMnhsIHRleHQtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImZvbnQtc2VyaWYgdGV4dC0zeGwgZm9udC1ib2xkIHRyYWNraW5nLXRpZ2h0IHRleHQtZ3JheS05MDAgc206dGV4dC00eGxcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3QoJ21vcmUtZmVhdHVyZWQtYXJ0aWNsZXMnKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgdGV4dC1sZyBsZWFkaW5nLTggdGV4dC1ncmF5LTYwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBSZWFkIHRoZSBsYXN0IG5ld3MgYWJvdXQgSmV0aS1PZ3V6LlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJteC1hdXRvIG10LTE2IGdyaWQgbWF4LXctMnhsIGdyaWQtY29scy0xIGdhcC15LTIwIGdhcC14LTggbGc6bXgtMCBsZzptYXgtdy1ub25lIGxnOmdyaWQtY29scy0zXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2FkZGl0aW9uYWxDb250ZW50LmZlYXR1cmVkQXJ0aWNsZXMubWFwKChub2RlKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOb2RlQXJ0aWNsZUNhcmQga2V5PXtub2RlLmlkfSBub2RlPXtub2RlfSAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDwvc2VjdGlvbj5cblxuICAgICAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgICA8L2Rpdj5cbiAgICApO1xuXG4gICAgLy8gcmV0dXJuIG5vZGUuZmllbGRfcGFyYWdyYXBocy5tYXAoKHBhcmFncmFwaCkgPT4ge1xuICAgIC8vICAgICByZXR1cm4gPFBhcmFncmFwaCBrZXk9e3BhcmFncmFwaC5pZH0gcGFyYWdyYXBoPXtwYXJhZ3JhcGh9IC8+XG4gICAgLy8gfSk7XG59XG4iXSwibmFtZXMiOlsiSW1hZ2UiLCJ1c2VUcmFuc2xhdGlvbiIsImFic29sdXRlVVJMIiwiZm9ybWF0RGF0ZSIsIkZvcm1hdHRlZFRleHQiLCJCcmVhZGNydW1icyIsIk5vZGVBcnRpY2xlQ2FyZCIsIlBhcmFncmFwaEJsb2dTZWN0aW9uIiwiTm9kZUFydGljbGUiLCJub2RlIiwiYWRkaXRpb25hbENvbnRlbnQiLCJ0IiwiZmllbGRfcGFyYWdyYXBocyIsInBhcmFncmFwaCIsImZpbHRlciIsInR5cGUiLCJkaXYiLCJjbGFzc05hbWUiLCJpdGVtcyIsInRpdGxlIiwidXJsIiwiYXJ0aWNsZSIsInAiLCJoMSIsInVpZCIsImRpc3BsYXlfbmFtZSIsInNwYW4iLCJzdmciLCJ2aWV3Qm94IiwiY2lyY2xlIiwiY3giLCJjeSIsInIiLCJmaWxsIiwiY3JlYXRlZCIsImZpZWxkX21lZGlhX2ltYWdlIiwiZmlndXJlIiwic3JjIiwidXJpIiwiYWx0IiwicmVzb3VyY2VJZE9iak1ldGEiLCJ3aWR0aCIsImhlaWdodCIsImxheW91dCIsIm9iamVjdEZpdCIsImJvZHkiLCJ0ZXh0IiwicHJvY2Vzc2VkIiwic2VjdGlvbiIsImgyIiwiZmVhdHVyZWRBcnRpY2xlcyIsIm1hcCIsImlkIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/node--article.tsx\n"));

/***/ })

});