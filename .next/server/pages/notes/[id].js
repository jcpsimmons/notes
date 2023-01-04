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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllNotesData\": () => (/* binding */ getAllNotesData),\n/* harmony export */   \"getNoteData\": () => (/* binding */ getNoteData),\n/* harmony export */   \"getNoteIds\": () => (/* binding */ getNoteIds),\n/* harmony export */   \"gitDateToUnixDate\": () => (/* binding */ gitDateToUnixDate)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./lib/constants.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ \"remark-html\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_2__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);\n([remark__WEBPACK_IMPORTED_MODULE_2__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst getNoteData = async (id)=>{\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(_constants__WEBPACK_IMPORTED_MODULE_0__.NOTES_DIRECTORY, `${id}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(fullPath, \"utf8\");\n    const modDate = await new Promise((resolve)=>{\n        (0,child_process__WEBPACK_IMPORTED_MODULE_6__.exec)(`git log -n 1 --pretty=format:%cd ${fullPath} | cat`, (_err, stdout)=>{\n            resolve(stdout.trim());\n        });\n    });\n    // Use gray-matter to parse the post metadata section\n    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_5___default()(fileContents);\n    // Use remark to convert markdown into HTML string\n    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_2__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).process(matterResult.content);\n    const contentHtml = processedContent.toString();\n    // https://github.com/jonschlinkert/gray-matter/issues/135\n    const title = matterResult.data?.title || \"\";\n    const tags = matterResult.data?.tags || \"\";\n    // Combine the data with the id and contentHtml\n    return {\n        id,\n        contentHtml,\n        title,\n        tags,\n        date: gitDateToUnixDate(modDate)\n    };\n};\nconst gitDateToUnixDate = (dateStr)=>{\n    const parsed = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.parse)(dateStr, \"E MMM d HH:mm:ss yyyy x\", new Date());\n    return (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.getUnixTime)(parsed);\n};\nconst getNoteIds = ()=>{\n    const rawNames = fs__WEBPACK_IMPORTED_MODULE_3___default().readdirSync(_constants__WEBPACK_IMPORTED_MODULE_0__.NOTES_DIRECTORY);\n    const parsedNames = rawNames.map((rawName)=>rawName.split(\".\")[0]);\n    return parsedNames;\n};\nconst getAllNotesData = async ()=>{\n    const noteIds = getNoteIds();\n    const noteData = await Promise.all(noteIds.map((nid)=>getNoteData(nid)));\n    const sortedNotes = noteData.sort((a, b)=>{\n        return b.date - a.date;\n    });\n    return sortedNotes;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbm90ZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDdEI7QUFDUTtBQUNaO0FBQ1c7QUFDRTtBQUNJO0FBQzJCO0FBRXpELE1BQU1TLGNBQWMsT0FBT0MsS0FBZTtJQUMvQyxNQUFNQyxXQUFXVixnREFBUyxDQUFDRCx1REFBZUEsRUFBRSxDQUFDLEVBQUVVLEdBQUcsR0FBRyxDQUFDO0lBQ3RELE1BQU1HLGVBQWVWLHNEQUFlLENBQUNRLFVBQVU7SUFFL0MsTUFBTUksVUFBVSxNQUFNLElBQUlDLFFBQWdCLENBQUNDLFVBQVk7UUFDckRYLG1EQUFJQSxDQUNGLENBQUMsaUNBQWlDLEVBQUVLLFNBQVMsTUFBTSxDQUFDLEVBQ3BELENBQUNPLE1BQU1DLFNBQVc7WUFDaEJGLFFBQVFFLE9BQU9DLElBQUk7UUFDckI7SUFFSjtJQUVBLHFEQUFxRDtJQUNyRCxNQUFNQyxlQUFlaEIsa0RBQU1BLENBQUNRO0lBRTVCLGtEQUFrRDtJQUNsRCxNQUFNUyxtQkFBbUIsTUFBTXBCLDhDQUFNQSxHQUNsQ3FCLEdBQUcsQ0FBQ25CLG1EQUFJQSxFQUNSb0IsT0FBTyxDQUFDSCxhQUFhSSxPQUFPO0lBQy9CLE1BQU1DLGNBQWNKLGlCQUFpQkssUUFBUTtJQUU3QywwREFBMEQ7SUFDMUQsTUFBTUMsUUFBU1AsYUFBYVEsSUFBSSxFQUFFRCxTQUFTO0lBQzNDLE1BQU1FLE9BQVFULGFBQWFRLElBQUksRUFBRUMsUUFBUTtJQUV6QywrQ0FBK0M7SUFDL0MsT0FBTztRQUNMcEI7UUFDQWdCO1FBQ0FFO1FBQ0FFO1FBQ0FDLE1BQU1DLGtCQUFrQmpCO0lBQzFCO0FBQ0YsRUFBRTtBQUVLLE1BQU1pQixvQkFBb0IsQ0FBQ0MsVUFBb0I7SUFDcEQsTUFBTUMsU0FBUzFCLCtDQUFLQSxDQUFDeUIsU0FBUywyQkFBMkIsSUFBSUU7SUFDN0QsT0FBTzVCLHFEQUFXQSxDQUFDMkI7QUFDckIsRUFBRTtBQUVLLE1BQU1FLGFBQWEsSUFBZ0I7SUFDeEMsTUFBTUMsV0FBV2xDLHFEQUFjLENBQUNILHVEQUFlQTtJQUMvQyxNQUFNdUMsY0FBY0YsU0FBU0csR0FBRyxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNuRSxPQUFPSDtBQUNULEVBQUU7QUFFSyxNQUFNSSxrQkFBa0IsVUFBNkI7SUFDMUQsTUFBTUMsVUFBVVI7SUFDaEIsTUFBTVMsV0FBVyxNQUFNN0IsUUFBUThCLEdBQUcsQ0FBQ0YsUUFBUUosR0FBRyxDQUFDLENBQUNPLE1BQVF0QyxZQUFZc0M7SUFDcEUsTUFBTUMsY0FBY0gsU0FBU0ksSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU07UUFDMUMsT0FBT0EsRUFBRXBCLElBQUksR0FBR21CLEVBQUVuQixJQUFJO0lBQ3hCO0lBQ0EsT0FBT2lCO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVzLy4vbGliL25vdGVzLnRzPzgxNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTk9URVNfRElSRUNUT1JZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgcmVtYXJrIH0gZnJvbSBcInJlbWFya1wiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IGh0bWwgZnJvbSBcInJlbWFyay1odG1sXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgeyBnZXRVbml4VGltZSwgcGFyc2UsIHBhcnNlSVNPLCB0b0RhdGUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGNvbnN0IGdldE5vdGVEYXRhID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oTk9URVNfRElSRUNUT1JZLCBgJHtpZH0ubWRgKTtcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCBcInV0ZjhcIik7XG5cbiAgY29uc3QgbW9kRGF0ZSA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHtcbiAgICBleGVjKFxuICAgICAgYGdpdCBsb2cgLW4gMSAtLXByZXR0eT1mb3JtYXQ6JWNkICR7ZnVsbFBhdGh9IHwgY2F0YCxcbiAgICAgIChfZXJyLCBzdGRvdXQpID0+IHtcbiAgICAgICAgcmVzb2x2ZShzdGRvdXQudHJpbSgpKTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcblxuICAvLyBVc2UgZ3JheS1tYXR0ZXIgdG8gcGFyc2UgdGhlIHBvc3QgbWV0YWRhdGEgc2VjdGlvblxuICBjb25zdCBtYXR0ZXJSZXN1bHQgPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcblxuICAvLyBVc2UgcmVtYXJrIHRvIGNvbnZlcnQgbWFya2Rvd24gaW50byBIVE1MIHN0cmluZ1xuICBjb25zdCBwcm9jZXNzZWRDb250ZW50ID0gYXdhaXQgcmVtYXJrKClcbiAgICAudXNlKGh0bWwpXG4gICAgLnByb2Nlc3MobWF0dGVyUmVzdWx0LmNvbnRlbnQpO1xuICBjb25zdCBjb250ZW50SHRtbCA9IHByb2Nlc3NlZENvbnRlbnQudG9TdHJpbmcoKTtcblxuICAvLyBodHRwczovL2dpdGh1Yi5jb20vam9uc2NobGlua2VydC9ncmF5LW1hdHRlci9pc3N1ZXMvMTM1XG4gIGNvbnN0IHRpdGxlID0gKG1hdHRlclJlc3VsdC5kYXRhPy50aXRsZSB8fCBcIlwiKSBhcyBzdHJpbmc7XG4gIGNvbnN0IHRhZ3MgPSAobWF0dGVyUmVzdWx0LmRhdGE/LnRhZ3MgfHwgXCJcIikgYXMgc3RyaW5nO1xuXG4gIC8vIENvbWJpbmUgdGhlIGRhdGEgd2l0aCB0aGUgaWQgYW5kIGNvbnRlbnRIdG1sXG4gIHJldHVybiB7XG4gICAgaWQsXG4gICAgY29udGVudEh0bWwsXG4gICAgdGl0bGUsXG4gICAgdGFncyxcbiAgICBkYXRlOiBnaXREYXRlVG9Vbml4RGF0ZShtb2REYXRlKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnaXREYXRlVG9Vbml4RGF0ZSA9IChkYXRlU3RyOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2UoZGF0ZVN0ciwgXCJFIE1NTSBkIEhIOm1tOnNzIHl5eXkgeFwiLCBuZXcgRGF0ZSgpKTtcbiAgcmV0dXJuIGdldFVuaXhUaW1lKHBhcnNlZCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Tm90ZUlkcyA9ICgpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IHJhd05hbWVzID0gZnMucmVhZGRpclN5bmMoTk9URVNfRElSRUNUT1JZKTtcbiAgY29uc3QgcGFyc2VkTmFtZXMgPSByYXdOYW1lcy5tYXAoKHJhd05hbWUpID0+IHJhd05hbWUuc3BsaXQoXCIuXCIpWzBdKTtcbiAgcmV0dXJuIHBhcnNlZE5hbWVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbE5vdGVzRGF0YSA9IGFzeW5jICgpOiBQcm9taXNlPE5vdGVbXT4gPT4ge1xuICBjb25zdCBub3RlSWRzID0gZ2V0Tm90ZUlkcygpO1xuICBjb25zdCBub3RlRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKG5vdGVJZHMubWFwKChuaWQpID0+IGdldE5vdGVEYXRhKG5pZCkpKTtcbiAgY29uc3Qgc29ydGVkTm90ZXMgPSBub3RlRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGIuZGF0ZSAtIGEuZGF0ZTtcbiAgfSk7XG4gIHJldHVybiBzb3J0ZWROb3Rlcztcbn07XG4iXSwibmFtZXMiOlsiTk9URVNfRElSRUNUT1JZIiwicGF0aCIsInJlbWFyayIsImZzIiwiaHRtbCIsIm1hdHRlciIsImV4ZWMiLCJnZXRVbml4VGltZSIsInBhcnNlIiwiZ2V0Tm90ZURhdGEiLCJpZCIsImZ1bGxQYXRoIiwiam9pbiIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlU3luYyIsIm1vZERhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9lcnIiLCJzdGRvdXQiLCJ0cmltIiwibWF0dGVyUmVzdWx0IiwicHJvY2Vzc2VkQ29udGVudCIsInVzZSIsInByb2Nlc3MiLCJjb250ZW50IiwiY29udGVudEh0bWwiLCJ0b1N0cmluZyIsInRpdGxlIiwiZGF0YSIsInRhZ3MiLCJkYXRlIiwiZ2l0RGF0ZVRvVW5peERhdGUiLCJkYXRlU3RyIiwicGFyc2VkIiwiRGF0ZSIsImdldE5vdGVJZHMiLCJyYXdOYW1lcyIsInJlYWRkaXJTeW5jIiwicGFyc2VkTmFtZXMiLCJtYXAiLCJyYXdOYW1lIiwic3BsaXQiLCJnZXRBbGxOb3Rlc0RhdGEiLCJub3RlSWRzIiwibm90ZURhdGEiLCJhbGwiLCJuaWQiLCJzb3J0ZWROb3RlcyIsInNvcnQiLCJhIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/notes.ts\n");

/***/ }),

/***/ "./pages/notes/[id].tsx":
/*!******************************!*\
  !*** ./pages/notes/[id].tsx ***!
  \******************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/notes */ \"./lib/notes.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_notes__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_notes__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Post({ postData  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            postData.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/notes/[id].tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            postData.id,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/notes/[id].tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            postData.date,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/notes/[id].tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: postData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/notes/[id].tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jsimmons/Documents/github/notes/pages/notes/[id].tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps({ params  }) {\n    // Add the \"await\" keyword like this:\n    const postData = await (0,_lib_notes__WEBPACK_IMPORTED_MODULE_1__.getNoteData)(params.id);\n    return {\n        props: {\n            postData\n        }\n    };\n}\nasync function getStaticPaths() {\n    const noteIds = (0,_lib_notes__WEBPACK_IMPORTED_MODULE_1__.getNoteIds)();\n    console.log(\"noteIds\", noteIds);\n    return {\n        paths: noteIds.map((noteId)=>{\n            return {\n                params: {\n                    id: noteId\n                }\n            };\n        }),\n        fallback: false\n    };\n} // http://localhost:3000/notes/72336628-27dd-4666-acca-5fadf036772b\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3Rlcy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUEwRDtBQUUzQyxTQUFTRSxLQUFLLEVBQUVDLFNBQVEsRUFBRSxFQUFFO0lBQ3pDLHFCQUNFLDhEQUFDQzs7WUFDRUQsU0FBU0UsS0FBSzswQkFDZiw4REFBQ0M7Ozs7O1lBQ0FILFNBQVNJLEVBQUU7MEJBQ1osOERBQUNEOzs7OztZQUNBSCxTQUFTSyxJQUFJOzBCQUNkLDhEQUFDRjs7Ozs7MEJBQ0QsOERBQUNGO2dCQUFJSyx5QkFBeUI7b0JBQUVDLFFBQVFQLFNBQVNRLFdBQVc7Z0JBQUM7Ozs7Ozs7Ozs7OztBQUduRSxDQUFDO0FBRU0sZUFBZUMsZUFBZSxFQUFFQyxPQUFNLEVBQUUsRUFBRTtJQUMvQyxxQ0FBcUM7SUFDckMsTUFBTVYsV0FBVyxNQUFNSCx1REFBV0EsQ0FBQ2EsT0FBT04sRUFBRTtJQUU1QyxPQUFPO1FBQ0xPLE9BQU87WUFDTFg7UUFDRjtJQUNGO0FBQ0YsQ0FBQztBQUVNLGVBQWVZLGlCQUFpQjtJQUNyQyxNQUFNQyxVQUFVZixzREFBVUE7SUFDMUJnQixRQUFRQyxHQUFHLENBQUMsV0FBV0Y7SUFFdkIsT0FBTztRQUNMRyxPQUFPSCxRQUFRSSxHQUFHLENBQUMsQ0FBQ0MsU0FBVztZQUM3QixPQUFPO2dCQUNMUixRQUFRO29CQUNOTixJQUFJYztnQkFDTjtZQUNGO1FBQ0Y7UUFDQUMsVUFBVSxLQUFLO0lBQ2pCO0FBQ0YsQ0FBQyxDQUNELG1FQUFtRSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVzLy4vcGFnZXMvbm90ZXMvW2lkXS50c3g/MWZhNCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBnZXROb3RlRGF0YSwgZ2V0Tm90ZUlkcyB9IGZyb20gXCIuLi8uLi9saWIvbm90ZXNcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUG9zdCh7IHBvc3REYXRhIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge3Bvc3REYXRhLnRpdGxlfVxuICAgICAgPGJyIC8+XG4gICAgICB7cG9zdERhdGEuaWR9XG4gICAgICA8YnIgLz5cbiAgICAgIHtwb3N0RGF0YS5kYXRlfVxuICAgICAgPGJyIC8+XG4gICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcG9zdERhdGEuY29udGVudEh0bWwgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH0pIHtcbiAgLy8gQWRkIHRoZSBcImF3YWl0XCIga2V5d29yZCBsaWtlIHRoaXM6XG4gIGNvbnN0IHBvc3REYXRhID0gYXdhaXQgZ2V0Tm90ZURhdGEocGFyYW1zLmlkKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBwb3N0RGF0YSxcbiAgICB9LFxuICB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XG4gIGNvbnN0IG5vdGVJZHMgPSBnZXROb3RlSWRzKCk7XG4gIGNvbnNvbGUubG9nKFwibm90ZUlkc1wiLCBub3RlSWRzKTtcblxuICByZXR1cm4ge1xuICAgIHBhdGhzOiBub3RlSWRzLm1hcCgobm90ZUlkKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBpZDogbm90ZUlkLFxuICAgICAgICB9LFxuICAgICAgfTtcbiAgICB9KSxcbiAgICBmYWxsYmFjazogZmFsc2UsXG4gIH07XG59XG4vLyBodHRwOi8vbG9jYWxob3N0OjMwMDAvbm90ZXMvNzIzMzY2MjgtMjdkZC00NjY2LWFjY2EtNWZhZGYwMzY3NzJiXG4iXSwibmFtZXMiOlsiZ2V0Tm90ZURhdGEiLCJnZXROb3RlSWRzIiwiUG9zdCIsInBvc3REYXRhIiwiZGl2IiwidGl0bGUiLCJiciIsImlkIiwiZGF0ZSIsImRhbmdlcm91c2x5U2V0SW5uZXJIVE1MIiwiX19odG1sIiwiY29udGVudEh0bWwiLCJnZXRTdGF0aWNQcm9wcyIsInBhcmFtcyIsInByb3BzIiwiZ2V0U3RhdGljUGF0aHMiLCJub3RlSWRzIiwiY29uc29sZSIsImxvZyIsInBhdGhzIiwibWFwIiwibm90ZUlkIiwiZmFsbGJhY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/notes/[id].tsx\n");

/***/ }),

/***/ "date-fns":
/*!***************************!*\
  !*** external "date-fns" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("date-fns");

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

/***/ "child_process":
/*!********************************!*\
  !*** external "child_process" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("child_process");

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