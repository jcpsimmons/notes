"use strict";
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
exports.id = "pages/notes/[id]";
exports.ids = ["pages/notes/[id]"];
exports.modules = {

/***/ "./lib/constants.ts":
/*!**************************!*\
  !*** ./lib/constants.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"NOTES_DIRECTORY\": () => (/* binding */ NOTES_DIRECTORY)\n/* harmony export */ });\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_0__);\n\nconst NOTES_DIRECTORY = (0,path__WEBPACK_IMPORTED_MODULE_0__.join)(process.cwd(), \"_notes\");\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvY29uc3RhbnRzLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE0QjtBQUVyQixNQUFNQyxrQkFBa0JELDBDQUFJQSxDQUFDRSxRQUFRQyxHQUFHLElBQUksVUFBVSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVzLy4vbGliL2NvbnN0YW50cy50cz8wNzhlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGpvaW4gfSBmcm9tIFwicGF0aFwiO1xuXG5leHBvcnQgY29uc3QgTk9URVNfRElSRUNUT1JZID0gam9pbihwcm9jZXNzLmN3ZCgpLCBcIl9ub3Rlc1wiKTtcbiJdLCJuYW1lcyI6WyJqb2luIiwiTk9URVNfRElSRUNUT1JZIiwicHJvY2VzcyIsImN3ZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/constants.ts\n");

/***/ }),

/***/ "./lib/notes.ts":
/*!**********************!*\
  !*** ./lib/notes.ts ***!
  \**********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getNoteData\": () => (/* binding */ getNoteData),\n/* harmony export */   \"getNoteIds\": () => (/* binding */ getNoteIds)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./lib/constants.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ \"remark-html\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_5__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_2__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);\n([remark__WEBPACK_IMPORTED_MODULE_2__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\nconst getNoteData = async (id)=>{\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(_constants__WEBPACK_IMPORTED_MODULE_0__.NOTES_DIRECTORY, `${id}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(fullPath, \"utf8\");\n    // Use gray-matter to parse the post metadata section\n    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_5___default()(fileContents);\n    // Use remark to convert markdown into HTML string\n    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_2__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).process(matterResult.content);\n    const contentHtml = processedContent.toString();\n    // Combine the data with the id and contentHtml\n    return {\n        id,\n        contentHtml,\n        ...matterResult.data\n    };\n};\nconst getNoteIds = ()=>{\n    const rawNames = fs__WEBPACK_IMPORTED_MODULE_3___default().readdirSync(_constants__WEBPACK_IMPORTED_MODULE_0__.NOTES_DIRECTORY);\n    const parsedNames = rawNames.map((rawName)=>rawName.split(\".\")[0]);\n    return parsedNames;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbm90ZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDdEI7QUFDUTtBQUNaO0FBQ1c7QUFDRTtBQUUxQixNQUFNTSxjQUFjLE9BQU9DLEtBQWU7SUFDL0MsTUFBTUMsV0FBV1AsZ0RBQVMsQ0FBQ0QsdURBQWVBLEVBQUUsQ0FBQyxFQUFFTyxHQUFHLEdBQUcsQ0FBQztJQUN0RCxNQUFNRyxlQUFlUCxzREFBZSxDQUFDSyxVQUFVO0lBRS9DLHFEQUFxRDtJQUNyRCxNQUFNSSxlQUFlUCxrREFBTUEsQ0FBQ0s7SUFFNUIsa0RBQWtEO0lBQ2xELE1BQU1HLG1CQUFtQixNQUFNWCw4Q0FBTUEsR0FDbENZLEdBQUcsQ0FBQ1YsbURBQUlBLEVBQ1JXLE9BQU8sQ0FBQ0gsYUFBYUksT0FBTztJQUMvQixNQUFNQyxjQUFjSixpQkFBaUJLLFFBQVE7SUFFN0MsK0NBQStDO0lBQy9DLE9BQU87UUFDTFg7UUFDQVU7UUFDQSxHQUFHTCxhQUFhTyxJQUFJO0lBQ3RCO0FBQ0YsRUFBRTtBQUVLLE1BQU1DLGFBQWEsSUFBZ0I7SUFDeEMsTUFBTUMsV0FBV2xCLHFEQUFjLENBQUNILHVEQUFlQTtJQUMvQyxNQUFNdUIsY0FBY0YsU0FBU0csR0FBRyxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNuRSxPQUFPSDtBQUNULEVBQUUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ub3Rlcy8uL2xpYi9ub3Rlcy50cz84MTUyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5PVEVTX0RJUkVDVE9SWSB9IGZyb20gXCIuL2NvbnN0YW50c1wiO1xuaW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIjtcbmltcG9ydCB7IHJlbWFyayB9IGZyb20gXCJyZW1hcmtcIjtcbmltcG9ydCBmcyBmcm9tIFwiZnNcIjtcbmltcG9ydCBodG1sIGZyb20gXCJyZW1hcmstaHRtbFwiO1xuaW1wb3J0IG1hdHRlciBmcm9tIFwiZ3JheS1tYXR0ZXJcIjtcblxuZXhwb3J0IGNvbnN0IGdldE5vdGVEYXRhID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oTk9URVNfRElSRUNUT1JZLCBgJHtpZH0ubWRgKTtcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCBcInV0ZjhcIik7XG5cbiAgLy8gVXNlIGdyYXktbWF0dGVyIHRvIHBhcnNlIHRoZSBwb3N0IG1ldGFkYXRhIHNlY3Rpb25cbiAgY29uc3QgbWF0dGVyUmVzdWx0ID0gbWF0dGVyKGZpbGVDb250ZW50cyk7XG5cbiAgLy8gVXNlIHJlbWFyayB0byBjb252ZXJ0IG1hcmtkb3duIGludG8gSFRNTCBzdHJpbmdcbiAgY29uc3QgcHJvY2Vzc2VkQ29udGVudCA9IGF3YWl0IHJlbWFyaygpXG4gICAgLnVzZShodG1sKVxuICAgIC5wcm9jZXNzKG1hdHRlclJlc3VsdC5jb250ZW50KTtcbiAgY29uc3QgY29udGVudEh0bWwgPSBwcm9jZXNzZWRDb250ZW50LnRvU3RyaW5nKCk7XG5cbiAgLy8gQ29tYmluZSB0aGUgZGF0YSB3aXRoIHRoZSBpZCBhbmQgY29udGVudEh0bWxcbiAgcmV0dXJuIHtcbiAgICBpZCxcbiAgICBjb250ZW50SHRtbCxcbiAgICAuLi5tYXR0ZXJSZXN1bHQuZGF0YSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnZXROb3RlSWRzID0gKCk6IHN0cmluZ1tdID0+IHtcbiAgY29uc3QgcmF3TmFtZXMgPSBmcy5yZWFkZGlyU3luYyhOT1RFU19ESVJFQ1RPUlkpO1xuICBjb25zdCBwYXJzZWROYW1lcyA9IHJhd05hbWVzLm1hcCgocmF3TmFtZSkgPT4gcmF3TmFtZS5zcGxpdChcIi5cIilbMF0pO1xuICByZXR1cm4gcGFyc2VkTmFtZXM7XG59O1xuIl0sIm5hbWVzIjpbIk5PVEVTX0RJUkVDVE9SWSIsInBhdGgiLCJyZW1hcmsiLCJmcyIsImh0bWwiLCJtYXR0ZXIiLCJnZXROb3RlRGF0YSIsImlkIiwiZnVsbFBhdGgiLCJqb2luIiwiZmlsZUNvbnRlbnRzIiwicmVhZEZpbGVTeW5jIiwibWF0dGVyUmVzdWx0IiwicHJvY2Vzc2VkQ29udGVudCIsInVzZSIsInByb2Nlc3MiLCJjb250ZW50IiwiY29udGVudEh0bWwiLCJ0b1N0cmluZyIsImRhdGEiLCJnZXROb3RlSWRzIiwicmF3TmFtZXMiLCJyZWFkZGlyU3luYyIsInBhcnNlZE5hbWVzIiwibWFwIiwicmF3TmFtZSIsInNwbGl0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./lib/notes.ts\n");

/***/ }),

/***/ "./pages/notes/[id].tsx":
/*!******************************!*\
  !*** ./pages/notes/[id].tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/notes */ \"./lib/notes.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_notes__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_notes__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Post({ postData  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            postData.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/notes/[id].tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            postData.id,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/notes/[id].tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            postData.date,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/notes/[id].tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/notes/[id].tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jsimmons/Documents/github/notes/pages/notes/[id].tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps({ params  }) {\n    // Add the \"await\" keyword like this:\n    const postData = await (0,_lib_notes__WEBPACK_IMPORTED_MODULE_1__.getNoteData)(params.id);\n    return {\n        props: {\n            postData\n        }\n    };\n}\nasync function getStaticPaths() {\n    const noteIds = (0,_lib_notes__WEBPACK_IMPORTED_MODULE_1__.getNoteIds)();\n    console.log(\"noteIds\", noteIds);\n    return {\n        paths: noteIds.map((noteId)=>{\n            return {\n                params: {\n                    id: noteId\n                }\n            };\n        }),\n        fallback: false\n    };\n} // http://localhost:3000/notes/72336628-27dd-4666-acca-5fadf036772b\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3Rlcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwRDtBQUUzQyxTQUFTRSxLQUFLLEVBQUVDLFNBQVEsRUFBRSxFQUFFO0lBQ3pDLHFCQUNFLDhEQUFDQzs7WUFDRUQsU0FBU0UsS0FBSzswQkFDZiw4REFBQ0M7Ozs7O1lBQ0FILFNBQVNJLEVBQUU7MEJBQ1osOERBQUNEOzs7OztZQUNBSCxTQUFTSyxJQUFJOzBCQUNkLDhEQUFDRjs7Ozs7MEJBQ0QsOERBQUNGO2dCQUFJSyx5QkFBeUI7b0JBQUVDLFFBQVFQLFNBQVNRLFdBQVc7Z0JBQUM7Ozs7Ozs7Ozs7OztBQUduRSxDQUFDO0FBRU0sZUFBZUMsZUFBZSxFQUFFQyxPQUFNLEVBQUUsRUFBRTtJQUMvQyxxQ0FBcUM7SUFDckMsTUFBTVYsV0FBVyxNQUFNSCx1REFBV0EsQ0FBQ2EsT0FBT04sRUFBRTtJQUU1QyxPQUFPO1FBQ0xPLE9BQU87WUFDTFg7UUFDRjtJQUNGO0FBQ0YsQ0FBQztBQUVNLGVBQWVZLGlCQUFpQjtJQUNyQyxNQUFNQyxVQUFVZixzREFBVUE7SUFDMUJnQixRQUFRQyxHQUFHLENBQUMsV0FBV0Y7SUFFdkIsT0FBTztRQUNMRyxPQUFPSCxRQUFRSSxHQUFHLENBQUMsQ0FBQ0MsU0FBVztZQUM3QixPQUFPO2dCQUNMUixRQUFRO29CQUNOTixJQUFJYztnQkFDTjtZQUNGO1FBQ0Y7UUFDQUMsVUFBVSxLQUFLO0lBQ2pCO0FBQ0YsQ0FBQyxDQUNELG1FQUFtRSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVzLy4vcGFnZXMvbm90ZXMvW2lkXS50c3g/MWZhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXROb3RlRGF0YSwgZ2V0Tm90ZUlkcyB9IGZyb20gXCIuLi8uLi9saWIvbm90ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3REYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Bvc3REYXRhLnRpdGxlfVxuICAgICAgPGJyIC8+XG4gICAgICB7cG9zdERhdGEuaWR9XG4gICAgICA8YnIgLz5cbiAgICAgIHtwb3N0RGF0YS5kYXRlfVxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgLy8gQWRkIHRoZSBcImF3YWl0XCIga2V5d29yZCBsaWtlIHRoaXM6XG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0Tm90ZURhdGEocGFyYW1zLmlkKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IG5vdGVJZHMgPSBnZXROb3RlSWRzKCk7XG4gIGNvbnNvbGUubG9nKFwibm90ZUlkc1wiLCBub3RlSWRzKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBub3RlSWRzLm1hcCgobm90ZUlkKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBpZDogbm90ZUlkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvbm90ZXMvNzIzMzY2MjgtMjdkZC00NjY2LWFjY2EtNWZhZGYwMzY3NzJiXG4iXSwibmFtZXMiOlsiZ2V0Tm90ZURhdGEiLCJnZXROb3RlSWRzIiwiUG9zdCIsInBvc3REYXRhIiwiZGl2IiwidGl0bGUiLCJiciIsImlkIiwiZGF0ZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY29udGVudEh0bWwiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJub3RlSWRzIiwiY29uc29sZSIsImxvZyIsInBhdGhzIiwibWFwIiwibm90ZUlkIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/notes/[id].tsx\n");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("gray-matter");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "remark":
/*!*************************!*\
  !*** external "remark" ***!
  \*************************/
/***/ ((module) => {

module.exports = import("remark");;

/***/ }),

/***/ "remark-html":
/*!******************************!*\
  !*** external "remark-html" ***!
  \******************************/
/***/ ((module) => {

module.exports = import("remark-html");;

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/notes/[id].tsx"));
module.exports = __webpack_exports__;

})();