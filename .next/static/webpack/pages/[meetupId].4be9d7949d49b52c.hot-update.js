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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/meetups/MeetupDetail */ \"./components/meetups/MeetupDetail.js\");\n// our-domain.com/{props.id}\n\n\n\n\nfunction MeetupDetails(props) {\n    //calling componnet with prop\n    props.meetupData.image = \"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg\";\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupDetail__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        image: props.meetupData.image,\n        title: props.meetupData.title,\n        address: props.meetupData.address,\n        description: props.meetupData.description\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rafhy\\\\Documents\\\\Udemy Courses\\\\React - The Complete Guide (Maximillian)\\\\Section 23 - Introduction to Nextjs\\\\EXERCISE - nextjs-course-project-2.5\\\\pages\\\\[meetupId]\\\\index.js\",\n        lineNumber: 16,\n        columnNumber: 9\n    }, this);\n}\n_c = MeetupDetails;\nvar __N_SSG = true;\n/* harmony default export */ __webpack_exports__[\"default\"] = (MeetupDetails);\nvar _c;\n$RefreshReg$(_c, \"MeetupDetails\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUEsNEJBQTRCO0FBQzVCO0FBQXdDO0FBQ1A7QUFFZ0M7QUFJakUsU0FBU0csYUFBYSxDQUFDQyxLQUFLLEVBQUU7SUFDMUIsNkJBQTZCO0lBRzdCQSxLQUFLLENBQUNDLFVBQVUsQ0FBQ0MsS0FBSyxHQUFHLHdIQUF3SCxDQUFDO0lBRWxKLHFCQUNJLDhEQUFDSix3RUFBWTtRQUNUSSxLQUFLLEVBQUdGLEtBQUssQ0FBQ0MsVUFBVSxDQUFDQyxLQUFLO1FBQzlCQyxLQUFLLEVBQUdILEtBQUssQ0FBQ0MsVUFBVSxDQUFDRSxLQUFLO1FBQzlCQyxPQUFPLEVBQUdKLEtBQUssQ0FBQ0MsVUFBVSxDQUFDRyxPQUFPO1FBQ2xDQyxXQUFXLEVBQUdMLEtBQUssQ0FBQ0MsVUFBVSxDQUFDSSxXQUFXOzs7OztZQUM1QyxDQUNMO0FBQ0wsQ0FBQztBQWRRTixLQUFBQSxhQUFhOztBQW9GdEIsK0RBQWVBLGFBQWEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9bbWVldHVwSWRdL2luZGV4LmpzPzhmZjIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gb3VyLWRvbWFpbi5jb20ve3Byb3BzLmlkfVxyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgRnJhZ21lbnQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgTW9uZ29DbGllbnQsIE9iamVjdElkIH0gZnJvbSBcIm1vbmdvZGJcIjtcclxuaW1wb3J0IE1lZXR1cERldGFpbCBmcm9tIFwiLi4vLi4vY29tcG9uZW50cy9tZWV0dXBzL01lZXR1cERldGFpbFwiO1xyXG5cclxuXHJcblxyXG5mdW5jdGlvbiBNZWV0dXBEZXRhaWxzKHByb3BzKSB7XHJcbiAgICAvL2NhbGxpbmcgY29tcG9ubmV0IHdpdGggcHJvcFxyXG5cclxuXHJcbiAgICBwcm9wcy5tZWV0dXBEYXRhLmltYWdlID0gJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPE1lZXR1cERldGFpbCBcclxuICAgICAgICAgICAgaW1hZ2U9IHtwcm9wcy5tZWV0dXBEYXRhLmltYWdlfSBcclxuICAgICAgICAgICAgdGl0bGU9IHtwcm9wcy5tZWV0dXBEYXRhLnRpdGxlfSBcclxuICAgICAgICAgICAgYWRkcmVzcz0ge3Byb3BzLm1lZXR1cERhdGEuYWRkcmVzc30gXHJcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uPSB7cHJvcHMubWVldHVwRGF0YS5kZXNjcmlwdGlvbn1cclxuICAgICAgICAvPlxyXG4gICAgKVxyXG59XHJcblxyXG5cclxuLypcclxuTUVUSE9EOlxyXG4gICAgLy93aWxsIHJldHVybnMgYW4gb2JqZWN0IHRoYXQgY29udGFpbnMgYWxsIGlkcyBvZiBkeWFubWljIHBhZ2VzIHRoYXQgd2lsbCBuZWVkIHRvIGJlIHByZSBnZW5lcmF0ZWRcclxuICAgIC8vZmFsbGJhY2tcclxuICAgIC8vZmFsc2UsIG1lYW5zIGlmIHRoZSB1c2VyIGNhbnQgYWNjZXNzIGFueSBvZiB0aGUgcGFnZXMgbm8gc3VwcG9ydCBoZXIsIHRoZXkgd2lsbCByZWNlaWV2ZSBhIDQwNCBlcnJvclxyXG4gICAgLy90cnVlLCB3aWxsIHRyeSBnbmVyYXRlIGEgcGFnZSBmb3IgdGhpcyBpZCwgZHluYW1pY2FsbHkgYmFzZWQgb24gdGhlIHJlcXVlc3RcclxuICAgIC8vQWxsb3dzIHlvdSB0byBwcmVnZW5lcmF0ZSB0aGUgbXNvdCBwdXBvbGFyIHBhZ2VzLCB0aGFuIHRoZSBsZXNzZXIgdXNlZCBvbmVzIGlmIG5lZWQgYmVcclxuXHJcbiovXHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUGF0aHMoKSB7XHJcblxyXG5cclxuICAgIC8vd2FudCB0byB1cGxvYWQgYWxsIGRldGFpbHMgb2YgbWVldHVwcyB0byBkYXRhYmFzZVxyXG4gICAgY29uc3QgdXJsID0gXCJtb25nb2RiK3NydjovL21hbmdvUHVuY2g6RlBOT1dBeVpBcVEwcGdvQ0BjbHVzdGVyMC5xeWNmM2VyLm1vbmdvZGIubmV0Lz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIjtcclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJsKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuXHJcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCh7fSwge19pZDogMX0pLnRvQXJyYXkoKTsgLy8oe30gd2hpY2ggb25lLCB7fSB3aGljaCBmaWVsZHMpXHJcbiAgICAgICAgLy93ZSBhcmUgZmV0Y2hpbmcgZG9jdW1lbnQgb2JqZWN0cyBidXQgZWFjaCBvbmx5IGNvbnRhaW4gdGhlIGlkXHJcblxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBmYWxsYmFjazogZmFsc2UsXHJcbiAgICAgICAgcGF0aHM6ICBtZWV0dXBzLm1hcChtZWV0dXAgPT4gKHsgcGFyYW1zOiB7IG1lZXR1cElkOiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG1lZXR1cC5faWQpKSB9fSkpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKGNvbnRleHQpIHtcclxuICAgIC8vZmV0Y2ggZGF0YSBmb3Igc2luZ2xlIG1lZXR1cFxyXG4gICAgLy9wYWdlIGlzIHByZSBnZW5lcmF0ZWQgZHVyaW5nIHRoZSBidWlsZCBqcyAoYWxsIHZlcnNpb25zIG9mIHRoaXMgZHluYW1pYyBwYWdlIHNob3VsZCBiZSBnZW5lcmF0ZWQsIG5lZWQgdmVyc2lvbnMgdG8gcHJlIGdlbmVyYXRlKVxyXG5cclxuXHJcbiAgICBjb25zdCBtZWV0dXBJZCA9IGNvbnRleHQucGFyYW1zLm1lZXR1cElkO1xyXG4gICAgY29uc29sZS5sb2cobWVldHVwSWQpOyAgLy9ydW5zIG9uIGRldmVsb3BlciBzZXJ2ZXIgc2lkZSwgc28gd29udCBzaG93IGluIGRldmVsb3BlciBjb25zb2xlLCBvbmx5IGluIENNRFxyXG5cclxuXHJcblxyXG4gICAgLy93YW50IHRvIHVwbG9hZCBlYWNoIGVudHJpZXMsIG1lZXR1cHMgZGV0YWlscyBzbyB3aGVuIHlvdSBjbGljayBkZXRhaWxzIHlvdSBzZWUgdGhvb3NlIG9mIHRoYXQgc3BlY2lmaWMgZW50cnlcclxuICAgIGNvbnN0IHVybCA9IFwibW9uZ29kYitzcnY6Ly9tYW5nb1B1bmNoOkZQTk9XQXlaQXFRMHBnb0NAY2x1c3RlcjAucXljZjNlci5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVybCk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcblxyXG4gICAgLy9tdXN0IFxyXG4gICAgY29uc3Qgc2VsZWN0ZWRNZWV0dXAgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5maW5kT25lKHtfaWQ6IE9iamVjdElkKG1lZXR1cElkKX0pXHJcblxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbWVldHVwRGF0YToge1xyXG4gICAgICAgICAgICAgICAgaWQ6IHNlbGVjdGVkTWVldHVwLl9pZC50b1N0cmluZygpLFxyXG4gICAgICAgICAgICAgICAgdGl0bGU6IHNlbGVjdGVkTWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogc2VsZWN0ZWRNZWV0dXAuYWRkcmVzcyxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzZWxlY3RlZE1lZXR1cC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1lZXR1cERldGFpbHM7Il0sIm5hbWVzIjpbInVzZVJvdXRlciIsIkZyYWdtZW50IiwiTWVldHVwRGV0YWlsIiwiTWVldHVwRGV0YWlscyIsInByb3BzIiwibWVldHVwRGF0YSIsImltYWdlIiwidGl0bGUiLCJhZGRyZXNzIiwiZGVzY3JpcHRpb24iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[meetupId]/index.js\n"));

/***/ })

});