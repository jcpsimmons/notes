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
exports.id = "pages/note/[id]";
exports.ids = ["pages/note/[id]"];
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

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllNotesData\": () => (/* binding */ getAllNotesData),\n/* harmony export */   \"getNoteData\": () => (/* binding */ getNoteData),\n/* harmony export */   \"getNoteIds\": () => (/* binding */ getNoteIds),\n/* harmony export */   \"gitDateToUnixDate\": () => (/* binding */ gitDateToUnixDate)\n/* harmony export */ });\n/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ \"./lib/constants.ts\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var remark__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! remark */ \"remark\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! fs */ \"fs\");\n/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var remark_html__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! remark-html */ \"remark-html\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gray-matter */ \"gray-matter\");\n/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! child_process */ \"child_process\");\n/* harmony import */ var child_process__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(child_process__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! date-fns */ \"date-fns\");\n/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_7__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([remark__WEBPACK_IMPORTED_MODULE_2__, remark_html__WEBPACK_IMPORTED_MODULE_4__]);\n([remark__WEBPACK_IMPORTED_MODULE_2__, remark_html__WEBPACK_IMPORTED_MODULE_4__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\n\n\n\nconst getNoteData = async (id)=>{\n    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default().join(_constants__WEBPACK_IMPORTED_MODULE_0__.NOTES_DIRECTORY, `${id}.md`);\n    const fileContents = fs__WEBPACK_IMPORTED_MODULE_3___default().readFileSync(fullPath, \"utf8\");\n    const modDate = await new Promise((resolve)=>{\n        (0,child_process__WEBPACK_IMPORTED_MODULE_6__.exec)(`git log -n 1 --pretty=format:%cd ${fullPath} | cat`, (_err, stdout)=>{\n            resolve(stdout.trim());\n        });\n    });\n    const matterResult = gray_matter__WEBPACK_IMPORTED_MODULE_5___default()(fileContents);\n    const processedContent = await (0,remark__WEBPACK_IMPORTED_MODULE_2__.remark)().use(remark_html__WEBPACK_IMPORTED_MODULE_4__[\"default\"]).process(matterResult.content);\n    const contentHtml = processedContent.toString();\n    // https://github.com/jonschlinkert/gray-matter/issues/135\n    const title = matterResult.data?.title || \"\";\n    const tags = matterResult.data?.tags || \"\";\n    return {\n        id,\n        contentHtml,\n        title,\n        tags,\n        date: modDate ? gitDateToUnixDate(modDate) : Date.now()\n    };\n};\nconst gitDateToUnixDate = (dateStr)=>{\n    const parsed = (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.parse)(dateStr, \"E MMM d HH:mm:ss yyyy x\", new Date());\n    return (0,date_fns__WEBPACK_IMPORTED_MODULE_7__.getUnixTime)(parsed);\n};\nconst getNoteIds = ()=>{\n    const rawNames = fs__WEBPACK_IMPORTED_MODULE_3___default().readdirSync(_constants__WEBPACK_IMPORTED_MODULE_0__.NOTES_DIRECTORY);\n    const parsedNames = rawNames.map((rawName)=>rawName.split(\".\")[0]);\n    return parsedNames;\n};\nconst getAllNotesData = async ()=>{\n    const noteIds = getNoteIds();\n    const noteData = await Promise.all(noteIds.map((nid)=>getNoteData(nid)));\n    const sortedNotes = noteData.sort((a, b)=>{\n        return b.date - a.date;\n    });\n    return sortedNotes;\n};\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbm90ZXMudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDdEI7QUFDUTtBQUNaO0FBQ1c7QUFDRTtBQUNJO0FBQzJCO0FBRXpELE1BQU1TLGNBQWMsT0FBT0MsS0FBZTtJQUMvQyxNQUFNQyxXQUFXVixnREFBUyxDQUFDRCx1REFBZUEsRUFBRSxDQUFDLEVBQUVVLEdBQUcsR0FBRyxDQUFDO0lBQ3RELE1BQU1HLGVBQWVWLHNEQUFlLENBQUNRLFVBQVU7SUFFL0MsTUFBTUksVUFBVSxNQUFNLElBQUlDLFFBQWdCLENBQUNDLFVBQVk7UUFDckRYLG1EQUFJQSxDQUNGLENBQUMsaUNBQWlDLEVBQUVLLFNBQVMsTUFBTSxDQUFDLEVBQ3BELENBQUNPLE1BQU1DLFNBQVc7WUFDaEJGLFFBQVFFLE9BQU9DLElBQUk7UUFDckI7SUFFSjtJQUVBLE1BQU1DLGVBQWVoQixrREFBTUEsQ0FBQ1E7SUFDNUIsTUFBTVMsbUJBQW1CLE1BQU1wQiw4Q0FBTUEsR0FDbENxQixHQUFHLENBQUNuQixtREFBSUEsRUFDUm9CLE9BQU8sQ0FBQ0gsYUFBYUksT0FBTztJQUMvQixNQUFNQyxjQUFjSixpQkFBaUJLLFFBQVE7SUFFN0MsMERBQTBEO0lBQzFELE1BQU1DLFFBQVNQLGFBQWFRLElBQUksRUFBRUQsU0FBUztJQUMzQyxNQUFNRSxPQUFRVCxhQUFhUSxJQUFJLEVBQUVDLFFBQVE7SUFFekMsT0FBTztRQUNMcEI7UUFDQWdCO1FBQ0FFO1FBQ0FFO1FBQ0FDLE1BQU1oQixVQUFVaUIsa0JBQWtCakIsV0FBV2tCLEtBQUtDLEdBQUcsRUFBRTtJQUN6RDtBQUNGLEVBQUU7QUFFSyxNQUFNRixvQkFBb0IsQ0FBQ0csVUFBb0I7SUFDcEQsTUFBTUMsU0FBUzVCLCtDQUFLQSxDQUFDMkIsU0FBUywyQkFBMkIsSUFBSUY7SUFDN0QsT0FBTzFCLHFEQUFXQSxDQUFDNkI7QUFDckIsRUFBRTtBQUVLLE1BQU1DLGFBQWEsSUFBZ0I7SUFDeEMsTUFBTUMsV0FBV25DLHFEQUFjLENBQUNILHVEQUFlQTtJQUMvQyxNQUFNd0MsY0FBY0YsU0FBU0csR0FBRyxDQUFDLENBQUNDLFVBQVlBLFFBQVFDLEtBQUssQ0FBQyxJQUFJLENBQUMsRUFBRTtJQUNuRSxPQUFPSDtBQUNULEVBQUU7QUFFSyxNQUFNSSxrQkFBa0IsVUFBNkI7SUFDMUQsTUFBTUMsVUFBVVI7SUFDaEIsTUFBTVMsV0FBVyxNQUFNOUIsUUFBUStCLEdBQUcsQ0FBQ0YsUUFBUUosR0FBRyxDQUFDLENBQUNPLE1BQVF2QyxZQUFZdUM7SUFDcEUsTUFBTUMsY0FBY0gsU0FBU0ksSUFBSSxDQUFDLENBQUNDLEdBQUdDLElBQU07UUFDMUMsT0FBT0EsRUFBRXJCLElBQUksR0FBR29CLEVBQUVwQixJQUFJO0lBQ3hCO0lBQ0EsT0FBT2tCO0FBQ1QsRUFBRSIsInNvdXJjZXMiOlsid2VicGFjazovL25vdGVzLy4vbGliL25vdGVzLnRzPzgxNTIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTk9URVNfRElSRUNUT1JZIH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xuaW1wb3J0IHsgcmVtYXJrIH0gZnJvbSBcInJlbWFya1wiO1xuaW1wb3J0IGZzIGZyb20gXCJmc1wiO1xuaW1wb3J0IGh0bWwgZnJvbSBcInJlbWFyay1odG1sXCI7XG5pbXBvcnQgbWF0dGVyIGZyb20gXCJncmF5LW1hdHRlclwiO1xuaW1wb3J0IHsgZXhlYyB9IGZyb20gXCJjaGlsZF9wcm9jZXNzXCI7XG5pbXBvcnQgeyBnZXRVbml4VGltZSwgcGFyc2UsIHBhcnNlSVNPLCB0b0RhdGUgfSBmcm9tIFwiZGF0ZS1mbnNcIjtcblxuZXhwb3J0IGNvbnN0IGdldE5vdGVEYXRhID0gYXN5bmMgKGlkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgZnVsbFBhdGggPSBwYXRoLmpvaW4oTk9URVNfRElSRUNUT1JZLCBgJHtpZH0ubWRgKTtcbiAgY29uc3QgZmlsZUNvbnRlbnRzID0gZnMucmVhZEZpbGVTeW5jKGZ1bGxQYXRoLCBcInV0ZjhcIik7XG5cbiAgY29uc3QgbW9kRGF0ZSA9IGF3YWl0IG5ldyBQcm9taXNlPHN0cmluZz4oKHJlc29sdmUpID0+IHtcbiAgICBleGVjKFxuICAgICAgYGdpdCBsb2cgLW4gMSAtLXByZXR0eT1mb3JtYXQ6JWNkICR7ZnVsbFBhdGh9IHwgY2F0YCxcbiAgICAgIChfZXJyLCBzdGRvdXQpID0+IHtcbiAgICAgICAgcmVzb2x2ZShzdGRvdXQudHJpbSgpKTtcbiAgICAgIH1cbiAgICApO1xuICB9KTtcblxuICBjb25zdCBtYXR0ZXJSZXN1bHQgPSBtYXR0ZXIoZmlsZUNvbnRlbnRzKTtcbiAgY29uc3QgcHJvY2Vzc2VkQ29udGVudCA9IGF3YWl0IHJlbWFyaygpXG4gICAgLnVzZShodG1sKVxuICAgIC5wcm9jZXNzKG1hdHRlclJlc3VsdC5jb250ZW50KTtcbiAgY29uc3QgY29udGVudEh0bWwgPSBwcm9jZXNzZWRDb250ZW50LnRvU3RyaW5nKCk7XG5cbiAgLy8gaHR0cHM6Ly9naXRodWIuY29tL2pvbnNjaGxpbmtlcnQvZ3JheS1tYXR0ZXIvaXNzdWVzLzEzNVxuICBjb25zdCB0aXRsZSA9IChtYXR0ZXJSZXN1bHQuZGF0YT8udGl0bGUgfHwgXCJcIikgYXMgc3RyaW5nO1xuICBjb25zdCB0YWdzID0gKG1hdHRlclJlc3VsdC5kYXRhPy50YWdzIHx8IFwiXCIpIGFzIHN0cmluZztcblxuICByZXR1cm4ge1xuICAgIGlkLFxuICAgIGNvbnRlbnRIdG1sLFxuICAgIHRpdGxlLFxuICAgIHRhZ3MsXG4gICAgZGF0ZTogbW9kRGF0ZSA/IGdpdERhdGVUb1VuaXhEYXRlKG1vZERhdGUpIDogRGF0ZS5ub3coKSxcbiAgfTtcbn07XG5cbmV4cG9ydCBjb25zdCBnaXREYXRlVG9Vbml4RGF0ZSA9IChkYXRlU3RyOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgcGFyc2VkID0gcGFyc2UoZGF0ZVN0ciwgXCJFIE1NTSBkIEhIOm1tOnNzIHl5eXkgeFwiLCBuZXcgRGF0ZSgpKTtcbiAgcmV0dXJuIGdldFVuaXhUaW1lKHBhcnNlZCk7XG59O1xuXG5leHBvcnQgY29uc3QgZ2V0Tm90ZUlkcyA9ICgpOiBzdHJpbmdbXSA9PiB7XG4gIGNvbnN0IHJhd05hbWVzID0gZnMucmVhZGRpclN5bmMoTk9URVNfRElSRUNUT1JZKTtcbiAgY29uc3QgcGFyc2VkTmFtZXMgPSByYXdOYW1lcy5tYXAoKHJhd05hbWUpID0+IHJhd05hbWUuc3BsaXQoXCIuXCIpWzBdKTtcbiAgcmV0dXJuIHBhcnNlZE5hbWVzO1xufTtcblxuZXhwb3J0IGNvbnN0IGdldEFsbE5vdGVzRGF0YSA9IGFzeW5jICgpOiBQcm9taXNlPE5vdGVbXT4gPT4ge1xuICBjb25zdCBub3RlSWRzID0gZ2V0Tm90ZUlkcygpO1xuICBjb25zdCBub3RlRGF0YSA9IGF3YWl0IFByb21pc2UuYWxsKG5vdGVJZHMubWFwKChuaWQpID0+IGdldE5vdGVEYXRhKG5pZCkpKTtcbiAgY29uc3Qgc29ydGVkTm90ZXMgPSBub3RlRGF0YS5zb3J0KChhLCBiKSA9PiB7XG4gICAgcmV0dXJuIGIuZGF0ZSAtIGEuZGF0ZTtcbiAgfSk7XG4gIHJldHVybiBzb3J0ZWROb3Rlcztcbn07XG4iXSwibmFtZXMiOlsiTk9URVNfRElSRUNUT1JZIiwicGF0aCIsInJlbWFyayIsImZzIiwiaHRtbCIsIm1hdHRlciIsImV4ZWMiLCJnZXRVbml4VGltZSIsInBhcnNlIiwiZ2V0Tm90ZURhdGEiLCJpZCIsImZ1bGxQYXRoIiwiam9pbiIsImZpbGVDb250ZW50cyIsInJlYWRGaWxlU3luYyIsIm1vZERhdGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsIl9lcnIiLCJzdGRvdXQiLCJ0cmltIiwibWF0dGVyUmVzdWx0IiwicHJvY2Vzc2VkQ29udGVudCIsInVzZSIsInByb2Nlc3MiLCJjb250ZW50IiwiY29udGVudEh0bWwiLCJ0b1N0cmluZyIsInRpdGxlIiwiZGF0YSIsInRhZ3MiLCJkYXRlIiwiZ2l0RGF0ZVRvVW5peERhdGUiLCJEYXRlIiwibm93IiwiZGF0ZVN0ciIsInBhcnNlZCIsImdldE5vdGVJZHMiLCJyYXdOYW1lcyIsInJlYWRkaXJTeW5jIiwicGFyc2VkTmFtZXMiLCJtYXAiLCJyYXdOYW1lIiwic3BsaXQiLCJnZXRBbGxOb3Rlc0RhdGEiLCJub3RlSWRzIiwibm90ZURhdGEiLCJhbGwiLCJuaWQiLCJzb3J0ZWROb3RlcyIsInNvcnQiLCJhIiwiYiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./lib/notes.ts\n");

/***/ }),

/***/ "./pages/note/[id].tsx":
/*!*****************************!*\
  !*** ./pages/note/[id].tsx ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Post),\n/* harmony export */   \"getStaticPaths\": () => (/* binding */ getStaticPaths),\n/* harmony export */   \"getStaticProps\": () => (/* binding */ getStaticProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _lib_notes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../lib/notes */ \"./lib/notes.ts\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_notes__WEBPACK_IMPORTED_MODULE_1__]);\n_lib_notes__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\nfunction Post({ noteData  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            noteData.title,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/note/[id].tsx\",\n                lineNumber: 7,\n                columnNumber: 7\n            }, this),\n            noteData.id,\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/note/[id].tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            noteData.date,\n            \"w\",\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/note/[id].tsx\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                dangerouslySetInnerHTML: {\n                    __html: noteData.contentHtml\n                }\n            }, void 0, false, {\n                fileName: \"/Users/jsimmons/Documents/github/notes/pages/note/[id].tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/jsimmons/Documents/github/notes/pages/note/[id].tsx\",\n        lineNumber: 5,\n        columnNumber: 5\n    }, this);\n}\nasync function getStaticProps({ params  }) {\n    const noteData = await (0,_lib_notes__WEBPACK_IMPORTED_MODULE_1__.getNoteData)(params.id);\n    return {\n        props: {\n            noteData\n        }\n    };\n}\nasync function getStaticPaths() {\n    const noteIds = (0,_lib_notes__WEBPACK_IMPORTED_MODULE_1__.getNoteIds)();\n    console.log(\"noteIds\", noteIds);\n    return {\n        paths: noteIds.map((noteId)=>{\n            return {\n                params: {\n                    id: noteId\n                }\n            };\n        }),\n        fallback: false\n    };\n} // http://localhost:3000/notes/72336628-27dd-4666-acca-5fadf036772b\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9ub3RlL1tpZF0udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQTBEO0FBRTNDLFNBQVNFLEtBQUssRUFBRUMsU0FBUSxFQUFzQixFQUFFO0lBQzdELHFCQUNFLDhEQUFDQzs7WUFDRUQsU0FBU0UsS0FBSzswQkFDZiw4REFBQ0M7Ozs7O1lBQ0FILFNBQVNJLEVBQUU7MEJBQ1osOERBQUNEOzs7OztZQUNBSCxTQUFTSyxJQUFJO1lBQUM7MEJBQ2YsOERBQUNGOzs7OzswQkFDRCw4REFBQ0Y7Z0JBQUlLLHlCQUF5QjtvQkFBRUMsUUFBUVAsU0FBU1EsV0FBVztnQkFBQzs7Ozs7Ozs7Ozs7O0FBR25FLENBQUM7QUFFTSxlQUFlQyxlQUFlLEVBQUVDLE9BQU0sRUFBOEIsRUFBRTtJQUMzRSxNQUFNVixXQUFXLE1BQU1ILHVEQUFXQSxDQUFDYSxPQUFPTixFQUFFO0lBRTVDLE9BQU87UUFDTE8sT0FBTztZQUNMWDtRQUNGO0lBQ0Y7QUFDRixDQUFDO0FBRU0sZUFBZVksaUJBQWlCO0lBQ3JDLE1BQU1DLFVBQVVmLHNEQUFVQTtJQUMxQmdCLFFBQVFDLEdBQUcsQ0FBQyxXQUFXRjtJQUV2QixPQUFPO1FBQ0xHLE9BQU9ILFFBQVFJLEdBQUcsQ0FBQyxDQUFDQyxTQUFXO1lBQzdCLE9BQU87Z0JBQ0xSLFFBQVE7b0JBQ05OLElBQUljO2dCQUNOO1lBQ0Y7UUFDRjtRQUNBQyxVQUFVLEtBQUs7SUFDakI7QUFDRixDQUFDLENBQ0QsbUVBQW1FIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbm90ZXMvLi9wYWdlcy9ub3RlL1tpZF0udHN4PzY0ZTgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgZ2V0Tm90ZURhdGEsIGdldE5vdGVJZHMgfSBmcm9tIFwiLi4vLi4vbGliL25vdGVzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBvc3QoeyBub3RlRGF0YSB9OiB7IG5vdGVEYXRhOiBOb3RlIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAge25vdGVEYXRhLnRpdGxlfVxuICAgICAgPGJyIC8+XG4gICAgICB7bm90ZURhdGEuaWR9XG4gICAgICA8YnIgLz5cbiAgICAgIHtub3RlRGF0YS5kYXRlfXdcbiAgICAgIDxiciAvPlxuICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IG5vdGVEYXRhLmNvbnRlbnRIdG1sIH19IC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcyh7IHBhcmFtcyB9OiB7IHBhcmFtczogeyBpZDogc3RyaW5nIH0gfSkge1xuICBjb25zdCBub3RlRGF0YSA9IGF3YWl0IGdldE5vdGVEYXRhKHBhcmFtcy5pZCk7XG5cbiAgcmV0dXJuIHtcbiAgICBwcm9wczoge1xuICAgICAgbm90ZURhdGEsXG4gICAgfSxcbiAgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBub3RlSWRzID0gZ2V0Tm90ZUlkcygpO1xuICBjb25zb2xlLmxvZyhcIm5vdGVJZHNcIiwgbm90ZUlkcyk7XG5cbiAgcmV0dXJuIHtcbiAgICBwYXRoczogbm90ZUlkcy5tYXAoKG5vdGVJZCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgaWQ6IG5vdGVJZCxcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSksXG4gICAgZmFsbGJhY2s6IGZhbHNlLFxuICB9O1xufVxuLy8gaHR0cDovL2xvY2FsaG9zdDozMDAwL25vdGVzLzcyMzM2NjI4LTI3ZGQtNDY2Ni1hY2NhLTVmYWRmMDM2NzcyYlxuIl0sIm5hbWVzIjpbImdldE5vdGVEYXRhIiwiZ2V0Tm90ZUlkcyIsIlBvc3QiLCJub3RlRGF0YSIsImRpdiIsInRpdGxlIiwiYnIiLCJpZCIsImRhdGUiLCJkYW5nZXJvdXNseVNldElubmVySFRNTCIsIl9faHRtbCIsImNvbnRlbnRIdG1sIiwiZ2V0U3RhdGljUHJvcHMiLCJwYXJhbXMiLCJwcm9wcyIsImdldFN0YXRpY1BhdGhzIiwibm90ZUlkcyIsImNvbnNvbGUiLCJsb2ciLCJwYXRocyIsIm1hcCIsIm5vdGVJZCIsImZhbGxiYWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/note/[id].tsx\n");

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
var __webpack_exports__ = (__webpack_exec__("./pages/note/[id].tsx"));
module.exports = __webpack_exports__;

})();