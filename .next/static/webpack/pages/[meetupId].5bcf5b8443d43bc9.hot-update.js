"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/[meetupId]",{

/***/ "./pages/[meetupId]/index.js":
/*!***********************************!*\
  !*** ./pages/[meetupId]/index.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n// our-domain.com/{props.id}\n\n\n\n\n//DUMMY DATA\nvar DUMMY_MEETUPS = [\n    {\n        id: \"m1\",\n        title: \"A First Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 5(1), 12345 Some City\",\n        description: \"This is a first meet up\"\n    },\n    {\n        id: \"m2\",\n        title: \"A Second Meetup\",\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n        address: \"Some address 5(2), 12345 Some City\",\n        description: \"This is a second meet up\"\n    }\n];\nfunction MeetupDetails() {\n    //calling componnet with prop\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        image: \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\",\n        title: \"A First Meetup\",\n        address: \"Some Steet 5, Some City\",\n        description: \" This is a first meet upd\"\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rafhy\\\\Documents\\\\Udemy Courses\\\\React - The Complete Guide (Maximillian)\\\\Section 23 - Introduction to Nextjs\\\\EXERCISE - nextjs-course-project-2.5\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 9\n    }, this);\n}\n_c = MeetupDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNEJBQTRCO0FBQzVCO0FBQXdDO0FBQ1A7QUFFZ0M7QUFFakUsWUFBWTtBQUNaLElBQU1HLGFBQWEsR0FBRztJQUFDO1FBQ25CQyxFQUFFLEVBQUMsSUFBSTtRQUNQQyxLQUFLLEVBQUUsZ0JBQWdCO1FBQ3ZCQyxLQUFLLEVBQUUsd0hBQXdIO1FBQy9IQyxPQUFPLEVBQUUsb0NBQW9DO1FBQzdDQyxXQUFXLEVBQUUseUJBQXlCO0tBQ3pDO0lBQUM7UUFDRUosRUFBRSxFQUFDLElBQUk7UUFDUEMsS0FBSyxFQUFFLGlCQUFpQjtRQUN4QkMsS0FBSyxFQUFFLHdIQUF3SDtRQUMvSEMsT0FBTyxFQUFFLG9DQUFvQztRQUM3Q0MsV0FBVyxFQUFFLDBCQUEwQjtLQUMxQztDQUFDO0FBRUYsU0FBU0MsYUFBYSxHQUFHO0lBQ3JCLDZCQUE2QjtJQUU3QixxQkFDSSw4REFBQ1Asd0VBQVk7UUFDVEksS0FBSyxFQUFDLHdIQUF3SDtRQUM5SEQsS0FBSyxFQUFDLGdCQUFnQjtRQUN0QkUsT0FBTyxFQUFDLHlCQUF5QjtRQUNqQ0MsV0FBVyxFQUFDLDJCQUEyQjs7Ozs7WUFDekMsQ0FDTDtBQUNMLENBQUM7QUFYUUMsS0FBQUEsYUFBYTs7QUFnRnRCLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvW21lZXR1cElkXS9pbmRleC5qcz84ZmYyIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIG91ci1kb21haW4uY29tL3twcm9wcy5pZH1cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XHJcbmltcG9ydCB7IEZyYWdtZW50IH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xyXG5cclxuLy9EVU1NWSBEQVRBXHJcbmNvbnN0IERVTU1ZX01FRVRVUFMgPSBbe1xyXG4gICAgaWQ6J20xJyxcclxuICAgIHRpdGxlOiAnQSBGaXJzdCBNZWV0dXAnLFxyXG4gICAgaW1hZ2U6ICdodHRwczovL3VwbG9hZC53aWtpbWVkaWEub3JnL3dpa2lwZWRpYS9jb21tb25zL3RodW1iL2QvZDMvU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcvMTI4MHB4LVN0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnJyxcclxuICAgIGFkZHJlc3M6ICdTb21lIGFkZHJlc3MgNSgxKSwgMTIzNDUgU29tZSBDaXR5JyxcclxuICAgIGRlc2NyaXB0aW9uOiAnVGhpcyBpcyBhIGZpcnN0IG1lZXQgdXAnXHJcbn0se1xyXG4gICAgaWQ6J20yJyxcclxuICAgIHRpdGxlOiAnQSBTZWNvbmQgTWVldHVwJyxcclxuICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbiAgICBhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDUoMiksIDEyMzQ1IFNvbWUgQ2l0eScsXHJcbiAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBzZWNvbmQgbWVldCB1cCdcclxufV1cclxuXHJcbmZ1bmN0aW9uIE1lZXR1cERldGFpbHMoKSB7XHJcbiAgICAvL2NhbGxpbmcgY29tcG9ubmV0IHdpdGggcHJvcFxyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lZXR1cERldGFpbCBcclxuICAgICAgICAgICAgaW1hZ2U9J2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnIFxyXG4gICAgICAgICAgICB0aXRsZT0nQSBGaXJzdCBNZWV0dXAnIFxyXG4gICAgICAgICAgICBhZGRyZXNzPSdTb21lIFN0ZWV0IDUsIFNvbWUgQ2l0eScgXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPScgVGhpcyBpcyBhIGZpcnN0IG1lZXQgdXBkJ1xyXG4gICAgICAgIC8+XHJcbiAgICApXHJcbn1cclxuXHJcblxyXG4vKlxyXG5NRVRIT0Q6XHJcbiAgICAvL3dpbGwgcmV0dXJucyBhbiBvYmplY3QgdGhhdCBjb250YWlucyBhbGwgaWRzIG9mIGR5YW5taWMgcGFnZXMgdGhhdCB3aWxsIG5lZWQgdG8gYmUgcHJlIGdlbmVyYXRlZFxyXG4gICAgLy9mYWxsYmFja1xyXG4gICAgLy9mYWxzZSwgbWVhbnMgaWYgdGhlIHVzZXIgY2FudCBhY2Nlc3MgYW55IG9mIHRoZSBwYWdlcyBubyBzdXBwb3J0IGhlciwgdGhleSB3aWxsIHJlY2VpZXZlIGEgNDA0IGVycm9yXHJcbiAgICAvL3RydWUsIHdpbGwgdHJ5IGduZXJhdGUgYSBwYWdlIGZvciB0aGlzIGlkLCBkeW5hbWljYWxseSBiYXNlZCBvbiB0aGUgcmVxdWVzdFxyXG4gICAgLy9BbGxvd3MgeW91IHRvIHByZWdlbmVyYXRlIHRoZSBtc290IHB1cG9sYXIgcGFnZXMsIHRoYW4gdGhlIGxlc3NlciB1c2VkIG9uZXMgaWYgbmVlZCBiZVxyXG5cclxuKi9cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQYXRocygpIHtcclxuXHJcblxyXG4gICAgLy93YW50IHRvIHVwbG9hZCBhbGwgZGV0YWlscyBvZiBtZWV0dXBzIHRvIGRhdGFiYXNlXHJcbiAgICBjb25zdCB1cmwgPSBcIm1vbmdvZGIrc3J2Oi8vbWFuZ29QdW5jaDpGUE5PV0F5WkFxUTBwZ29DQGNsdXN0ZXIwLnF5Y2YzZXIubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiO1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmwpO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG5cclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kKHt9LCB7X2lkOiAxfSkudG9BcnJheSgpOyAvLyh7fSB3aGljaCBvbmUsIHt9IHdoaWNoIGZpZWxkcylcclxuICAgICAgICAvL3dlIGFyZSBmZXRjaGluZyBkb2N1bWVudCBvYmplY3RzIGJ1dCBlYWNoIG9ubHkgY29udGFpbiB0aGUgaWRcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGZhbGxiYWNrOiBmYWxzZSxcclxuICAgICAgICBwYXRoczogIG1lZXR1cHMubWFwKG1lZXR1cCA9PiAoeyBwYXJhbXM6IHsgbWVldHVwSWQ6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVldHVwLl9pZCkpIH19KSlcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoY29udGV4dCkge1xyXG4gICAgLy9mZXRjaCBkYXRhIGZvciBzaW5nbGUgbWVldHVwXHJcbiAgICAvL3BhZ2UgaXMgcHJlIGdlbmVyYXRlZCBkdXJpbmcgdGhlIGJ1aWxkIGpzIChhbGwgdmVyc2lvbnMgb2YgdGhpcyBkeW5hbWljIHBhZ2Ugc2hvdWxkIGJlIGdlbmVyYXRlZCwgbmVlZCB2ZXJzaW9ucyB0byBwcmUgZ2VuZXJhdGUpXHJcblxyXG5cclxuICAgIGNvbnN0IG1lZXR1cElkID0gY29udGV4dC5wYXJhbXMubWVldHVwSWQ7XHJcbiAgICBjb25zb2xlLmxvZyhtZWV0dXBJZCk7ICAvL3J1bnMgb24gZGV2ZWxvcGVyIHNlcnZlciBzaWRlLCBzbyB3b250IHNob3cgaW4gZGV2ZWxvcGVyIGNvbnNvbGUsIG9ubHkgaW4gQ01EXHJcblxyXG5cclxuICAgIC8vd2FudCB0byB1cGxvYWQgZWFjaCBlbnRyaWVzLCBtZWV0dXBzIGRldGFpbHMgc28gd2hlbiB5b3UgY2xpY2sgZGV0YWlscyB5b3Ugc2VlIHRob29zZSBvZiB0aGF0IHNwZWNpZmljIGVudHJ5XHJcbiAgICBjb25zdCB1cmwgPSBcIm1vbmdvZGIrc3J2Oi8vbWFuZ29QdW5jaDpGUE5PV0F5WkFxUTBwZ29DQGNsdXN0ZXIwLnF5Y2YzZXIubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiO1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmwpO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG5cclxuICAgIGNvbnN0IG1lZXR1cHMgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHtfaWQ6IG1lZXR1cElkfSlcclxuXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZWV0dXBEYXRhOiB7XHJcbiAgICAgICAgICAgICAgICBpbWFnZTonaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbiAgICAgICAgICAgICAgICBpZDptZWV0dXBJZCxcclxuICAgICAgICAgICAgICAgIHRpdGxlOidBIEZpcnN0IE1lZXR1cCcsXHJcbiAgICAgICAgICAgICAgICBhZGRyZXNzOidTb21lIFN0ZWV0IDUsIFNvbWUgQ2l0eScsXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjonIFRoaXMgaXMgYSBmaXJzdCBtZWV0IHVwJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkZyYWdtZW50IiwiTWVldHVwRGV0YWlsIiwiRFVNTVlfTUVFVFVQUyIsImlkIiwidGl0bGUiLCJpbWFnZSIsImFkZHJlc3MiLCJkZXNjcmlwdGlvbiIsIk1lZXR1cERldGFpbHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ })

});