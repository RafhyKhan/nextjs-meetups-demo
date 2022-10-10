/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n// our-domain/\n\n\n\n\n//DUMMY DATA\n// const DUMMY_MEETUPS = [{\n//     id:'m1',\n//     title: 'A First Meetup',\n//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n//     address: 'Some address 5(1), 12345 Some City',\n//     description: 'This is a first meet up'\n// },{\n//     id:'m2',\n//     title: 'A Second Meetup',\n//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n//     address: 'Some address 5(2), 12345 Some City',\n//     description: 'This is a second meet up'\n// }]\n//Next>js pre-redners but only the first execution, so you must call data on the first render so you can use it FAST\nfunction HomePage(props) {\n    //We are displaying a react component that is not a page componenet on this page. Import it than utilize\n    //Can still use Card/Layout function with props.children\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rafhy\\\\Documents\\\\Udemy Courses\\\\React - The Complete Guide (Maximillian)\\\\Section 23 - Introduction to Nextjs\\\\EXERCISE - nextjs-course-project-2.5\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 13\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n/*PROBELMs\r\n Data could be outdated, when you do build, this data becomes set\r\n        //Everytime you build app for production you have to change this pre-rendered data.\r\n        //revalidate property, when add this property to return object of this function, unlcoks feature: Incremental Static Generation\r\n        //revalidate: wants a number = number of second it will wait, until it regenerates again on server, if they are requests for page\r\n        //regenerates for build, than every 10secs if requests are coming in for page\r\n        //your data is never older than 10 seconds. Whats you data update frequency??? (once every hour, or every second)\r\n        //Regenrated on server after deployment, so you dont have to rebuild it everytime!\r\n*/ /*\r\nMETHOD:\r\n    //Context Paramter: gives you .req and .res \r\n    //Will always on the server after deployment\r\n    //Fetches data frm an API\r\n    //you can do backend/sever side code, it will never end up on the cilent side SAFE!\r\n    //RUNS for every incoming request for page\r\n*/ /*\r\nexport async function getServerSideProps(context) {\r\n\r\n\r\n\r\n    const req = context.req;\r\n    const res = context.res;\r\n\r\n    return {\r\n        props: {\r\n            meetups: DUMMY_MEETUPS\r\n        }\r\n    }\r\n}\r\n*/ /* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLGNBQWM7QUFDZDtBQUE2QjtBQUNlO0FBRWM7QUFFMUQsWUFBWTtBQUNaLDJCQUEyQjtBQUMzQixlQUFlO0FBQ2YsK0JBQStCO0FBQy9CLHVJQUF1STtBQUN2SSxxREFBcUQ7QUFDckQsNkNBQTZDO0FBQzdDLE1BQU07QUFDTixlQUFlO0FBQ2YsZ0NBQWdDO0FBQ2hDLHVJQUF1STtBQUN2SSxxREFBcUQ7QUFDckQsOENBQThDO0FBQzlDLEtBQUs7QUFJTCxvSEFBb0g7QUFFcEgsU0FBU0ksUUFBUSxDQUFDQyxLQUFLLEVBQUU7SUFHckIsd0dBQXdHO0lBQ3hHLHdEQUF3RDtJQUV4RCxxQkFDUSw4REFBQ0Ysc0VBQVU7UUFBQ0csT0FBTyxFQUFFRCxLQUFLLENBQUNDLE9BQU87Ozs7O1lBQUcsQ0FDNUM7QUFDTCxDQUFDO0FBVFFGLEtBQUFBLFFBQVE7O0FBZ0RqQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIG91ci1kb21haW4vXHJcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuXHJcbi8vRFVNTVkgREFUQVxyXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW3tcclxuLy8gICAgIGlkOidtMScsXHJcbi8vICAgICB0aXRsZTogJ0EgRmlyc3QgTWVldHVwJyxcclxuLy8gICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbi8vICAgICBhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDUoMSksIDEyMzQ1IFNvbWUgQ2l0eScsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBmaXJzdCBtZWV0IHVwJ1xyXG4vLyB9LHtcclxuLy8gICAgIGlkOidtMicsXHJcbi8vICAgICB0aXRsZTogJ0EgU2Vjb25kIE1lZXR1cCcsXHJcbi8vICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4vLyAgICAgYWRkcmVzczogJ1NvbWUgYWRkcmVzcyA1KDIpLCAxMjM0NSBTb21lIENpdHknLFxyXG4vLyAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgc2Vjb25kIG1lZXQgdXAnXHJcbi8vIH1dXHJcblxyXG5cclxuXHJcbi8vTmV4dD5qcyBwcmUtcmVkbmVycyBidXQgb25seSB0aGUgZmlyc3QgZXhlY3V0aW9uLCBzbyB5b3UgbXVzdCBjYWxsIGRhdGEgb24gdGhlIGZpcnN0IHJlbmRlciBzbyB5b3UgY2FuIHVzZSBpdCBGQVNUXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG5cclxuXHJcbiAgICAvL1dlIGFyZSBkaXNwbGF5aW5nIGEgcmVhY3QgY29tcG9uZW50IHRoYXQgaXMgbm90IGEgcGFnZSBjb21wb25lbmV0IG9uIHRoaXMgcGFnZS4gSW1wb3J0IGl0IHRoYW4gdXRpbGl6ZVxyXG4gICAgLy9DYW4gc3RpbGwgdXNlIENhcmQvTGF5b3V0IGZ1bmN0aW9uIHdpdGggcHJvcHMuY2hpbGRyZW5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfS8+XHJcbiAgICApXHJcbn1cclxuXHJcbi8qXHJcbk1FVEhPRDpcclxuICAgIC8vam9iIGlzIHRvIHByZXBhcmUgcHJvcHMgZm9yIHRoaXMgcGFnZS4gQ2FuIHJldHVybiBhIHByb21pc2Ugd2l0aCB0aGlzLiBJdCB3YWl0cyB1bnRpbCB5b3VyIGRhdGEgaXMgbG9hZGVkIGJlZm9yZSB5b3UgcmVuZGVyXHJcbiAgICAvL3lvdSBjYW4gZG8gYmFja2VuZC9zZXZlciBzaWRlIGNvZGUsIGl0IHdpbGwgbmV2ZXIgZW5kIHVwIG9uIHRoZSBjaWxlbnQgc2lkZVxyXG4gICAgLy9pbiB0aGUgYnVpbGQgcHJvZC5cclxuICAgIC8vRkVUQ0ggREFUQSBmcm9tIGFuIEFQSSBoZXJlLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxyXG4qL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblxyXG4gICAgLy9DT0RFIGluIGhlcmUgaXMgU2V2ZXIgc2lkZSFcclxuICAgIC8vd2FudCB0byBQVVNIIGFuZCByZS11cGRhdGUgdGhlIG1haW4gcGFnZSB3aXRoIG5ldyBkYXRhYmFzZSBlbnRyaWVzIG9mIG1lZXR1cHNcclxuICAgIGNvbnN0IHVybCA9IFwibW9uZ29kYitzcnY6Ly9tYW5nb1B1bmNoOkZQTk9XQXlaQXFRMHBnb0NAY2x1c3RlcjAucXljZjNlci5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVybCk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgY29uc3QgbWVldHVwc0NvbGxlY3Rpb24gPSBkYi5jb2xsZWN0aW9uKCdtZWV0dXBzJyk7XHJcbiAgICBjb25zdCBtZWV0dXBzID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uZmluZCgpLnRvQXJyYXkoKTsgLy9hcnJheXMgb2YgbWVldHVwcyBmcm9tIG1vbmdvREJcclxuICAgIC8vbWVldHVwcyB0aGUgY29sbGVjdGlvbiBpcyBhIGh1Z2UgYXJyYXkgb2Ygb2JqZWN0LCBlYWNoIG9iamVjdCBpcyB0aGUgZW50cnlcclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIC8vaGF2ZSB0byByZXR1cm4gYW4gb2JqZWN0IGhlcmVcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbWVldHVwczogbWVldHVwcy5tYXAobWVldHVwID0+ICh7XHJcbiAgICAgICAgICAgICAgICB0aXRsZTogbWVldHVwLnRpdGxlLFxyXG4gICAgICAgICAgICAgICAgYWRkcmVzczogbWVldHVwLmFkZHJlc3MsXHJcbiAgICAgICAgICAgICAgICBpbWFnZTogbWVldHVwLmltYWdlLFxyXG4gICAgICAgICAgICAgICAgaWQ6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkobWVldHVwLl9pZCkpXHJcbiAgICAgICAgICAgIH0pKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcmV2YWxpZGF0ZTogMVxyXG4gICAgfVxyXG5cclxuICAgIC8vIEhhZCB0byB1c2UgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShtZWV0dXAuX2lkKSkgdG8gZ2V0IElEIGludG8gc3RyaW5nIGZvcm1hdFxyXG4gICAgLy9CVUcsIGNvdWxkbnQgZG8gbWVldHVwLl9pZC50b1N0cmluZygpLCBoYWQgdG8gZG8gdXAgdG9wXHJcblxyXG59XHJcblxyXG4vKlBST0JFTE1zXHJcbiBEYXRhIGNvdWxkIGJlIG91dGRhdGVkLCB3aGVuIHlvdSBkbyBidWlsZCwgdGhpcyBkYXRhIGJlY29tZXMgc2V0XHJcbiAgICAgICAgLy9FdmVyeXRpbWUgeW91IGJ1aWxkIGFwcCBmb3IgcHJvZHVjdGlvbiB5b3UgaGF2ZSB0byBjaGFuZ2UgdGhpcyBwcmUtcmVuZGVyZWQgZGF0YS5cclxuICAgICAgICAvL3JldmFsaWRhdGUgcHJvcGVydHksIHdoZW4gYWRkIHRoaXMgcHJvcGVydHkgdG8gcmV0dXJuIG9iamVjdCBvZiB0aGlzIGZ1bmN0aW9uLCB1bmxjb2tzIGZlYXR1cmU6IEluY3JlbWVudGFsIFN0YXRpYyBHZW5lcmF0aW9uXHJcbiAgICAgICAgLy9yZXZhbGlkYXRlOiB3YW50cyBhIG51bWJlciA9IG51bWJlciBvZiBzZWNvbmQgaXQgd2lsbCB3YWl0LCB1bnRpbCBpdCByZWdlbmVyYXRlcyBhZ2FpbiBvbiBzZXJ2ZXIsIGlmIHRoZXkgYXJlIHJlcXVlc3RzIGZvciBwYWdlXHJcbiAgICAgICAgLy9yZWdlbmVyYXRlcyBmb3IgYnVpbGQsIHRoYW4gZXZlcnkgMTBzZWNzIGlmIHJlcXVlc3RzIGFyZSBjb21pbmcgaW4gZm9yIHBhZ2VcclxuICAgICAgICAvL3lvdXIgZGF0YSBpcyBuZXZlciBvbGRlciB0aGFuIDEwIHNlY29uZHMuIFdoYXRzIHlvdSBkYXRhIHVwZGF0ZSBmcmVxdWVuY3k/Pz8gKG9uY2UgZXZlcnkgaG91ciwgb3IgZXZlcnkgc2Vjb25kKVxyXG4gICAgICAgIC8vUmVnZW5yYXRlZCBvbiBzZXJ2ZXIgYWZ0ZXIgZGVwbG95bWVudCwgc28geW91IGRvbnQgaGF2ZSB0byByZWJ1aWxkIGl0IGV2ZXJ5dGltZSFcclxuKi9cclxuXHJcblxyXG5cclxuLypcclxuTUVUSE9EOlxyXG4gICAgLy9Db250ZXh0IFBhcmFtdGVyOiBnaXZlcyB5b3UgLnJlcSBhbmQgLnJlcyBcclxuICAgIC8vV2lsbCBhbHdheXMgb24gdGhlIHNlcnZlciBhZnRlciBkZXBsb3ltZW50XHJcbiAgICAvL0ZldGNoZXMgZGF0YSBmcm0gYW4gQVBJXHJcbiAgICAvL3lvdSBjYW4gZG8gYmFja2VuZC9zZXZlciBzaWRlIGNvZGUsIGl0IHdpbGwgbmV2ZXIgZW5kIHVwIG9uIHRoZSBjaWxlbnQgc2lkZSBTQUZFIVxyXG4gICAgLy9SVU5TIGZvciBldmVyeSBpbmNvbWluZyByZXF1ZXN0IGZvciBwYWdlXHJcbiovXHJcblxyXG4vKlxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcclxuXHJcblxyXG5cclxuICAgIGNvbnN0IHJlcSA9IGNvbnRleHQucmVxO1xyXG4gICAgY29uc3QgcmVzID0gY29udGV4dC5yZXM7XHJcblxyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICBtZWV0dXBzOiBEVU1NWV9NRUVUVVBTXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiovXHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lUGFnZSJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZWV0dXBMaXN0IiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("module.exports = __webpack_require__(/*! ./dist/shared/lib/head */ \"./node_modules/next/dist/shared/lib/head.js\")\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzLmpzIiwibWFwcGluZ3MiOiJBQUFBLGlIQUFrRCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9oZWFkLmpzPzg4NDkiXSwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3Qvc2hhcmVkL2xpYi9oZWFkJylcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/head.js\n"));

/***/ })

});