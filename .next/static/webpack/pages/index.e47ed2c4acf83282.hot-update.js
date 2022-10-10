"use strict";
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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"__N_SSG\": function() { return /* binding */ __N_SSG; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/meetups/MeetupList */ \"./components/meetups/MeetupList.js\");\n// our-domain/\n\n\n\n//DUMMY DATA\n// const DUMMY_MEETUPS = [{\n//     id:'m1',\n//     title: 'A First Meetup',\n//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n//     address: 'Some address 5(1), 12345 Some City',\n//     description: 'This is a first meet up'\n// },{\n//     id:'m2',\n//     title: 'A Second Meetup',\n//     image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',\n//     address: 'Some address 5(2), 12345 Some City',\n//     description: 'This is a second meet up'\n// }]\n//Next>js pre-redners but only the first execution, so you must call data on the first render so you can use it FAST\nfunction HomePage(props) {\n    //We are displaying a react component that is not a page componenet on this page. Import it than utilize\n    //Can still use Card/Layout function with props.children\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_meetups_MeetupList__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        meetups: props.meetups\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Rafhy\\\\Documents\\\\Udemy Courses\\\\React - The Complete Guide (Maximillian)\\\\Section 23 - Introduction to Nextjs\\\\EXERCISE - nextjs-course-project-2.5\\\\pages\\\\index.js\",\n        lineNumber: 33,\n        columnNumber: 13\n    }, this);\n}\n_c = HomePage;\nvar __N_SSG = true;\n/*PROBELMs\r\n Data could be outdated, when you do build, this data becomes set\r\n        //Everytime you build app for production you have to change this pre-rendered data.\r\n        //revalidate property, when add this property to return object of this function, unlcoks feature: Incremental Static Generation\r\n        //revalidate: wants a number = number of second it will wait, until it regenerates again on server, if they are requests for page\r\n        //regenerates for build, than every 10secs if requests are coming in for page\r\n        //your data is never older than 10 seconds. Whats you data update frequency??? (once every hour, or every second)\r\n        //Regenrated on server after deployment, so you dont have to rebuild it everytime!\r\n*/ /*\r\nMETHOD:\r\n    //Context Paramter: gives you .req and .res \r\n    //Will always on the server after deployment\r\n    //Fetches data frm an API\r\n    //you can do backend/sever side code, it will never end up on the cilent side SAFE!\r\n    //RUNS for every incoming request for page\r\n*/ /*\r\nexport async function getServerSideProps(context) {\r\n\r\n\r\n\r\n    const req = context.req;\r\n    const res = context.res;\r\n\r\n    return {\r\n        props: {\r\n            meetups: DUMMY_MEETUPS\r\n        }\r\n    }\r\n}\r\n*/ /* harmony default export */ __webpack_exports__[\"default\"] = (HomePage);\nvar _c;\n$RefreshReg$(_c, \"HomePage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSxjQUFjO0FBRWQ7QUFBNEM7QUFFYztBQUUxRCxZQUFZO0FBQ1osMkJBQTJCO0FBQzNCLGVBQWU7QUFDZiwrQkFBK0I7QUFDL0IsdUlBQXVJO0FBQ3ZJLHFEQUFxRDtBQUNyRCw2Q0FBNkM7QUFDN0MsTUFBTTtBQUNOLGVBQWU7QUFDZixnQ0FBZ0M7QUFDaEMsdUlBQXVJO0FBQ3ZJLHFEQUFxRDtBQUNyRCw4Q0FBOEM7QUFDOUMsS0FBSztBQUlMLG9IQUFvSDtBQUVwSCxTQUFTRyxRQUFRLENBQUNDLEtBQUssRUFBRTtJQUdyQix3R0FBd0c7SUFDeEcsd0RBQXdEO0lBRXhELHFCQUNRLDhEQUFDRixzRUFBVTtRQUFDRyxPQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FBTzs7Ozs7WUFBRyxDQUM1QztBQUNMLENBQUM7QUFUUUYsS0FBQUEsUUFBUTs7QUErQ2pCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gb3VyLWRvbWFpbi9cclxuXHJcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IE1vbmdvQ2xpZW50IH0gZnJvbSAnbW9uZ29kYic7XHJcbmltcG9ydCBNZWV0dXBMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvbWVldHVwcy9NZWV0dXBMaXN0JztcclxuXHJcbi8vRFVNTVkgREFUQVxyXG4vLyBjb25zdCBEVU1NWV9NRUVUVVBTID0gW3tcclxuLy8gICAgIGlkOidtMScsXHJcbi8vICAgICB0aXRsZTogJ0EgRmlyc3QgTWVldHVwJyxcclxuLy8gICAgIGltYWdlOiAnaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy90aHVtYi9kL2QzL1N0YWR0YmlsZF9NJUMzJUJDbmNoZW4uanBnLzEyODBweC1TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZycsXHJcbi8vICAgICBhZGRyZXNzOiAnU29tZSBhZGRyZXNzIDUoMSksIDEyMzQ1IFNvbWUgQ2l0eScsXHJcbi8vICAgICBkZXNjcmlwdGlvbjogJ1RoaXMgaXMgYSBmaXJzdCBtZWV0IHVwJ1xyXG4vLyB9LHtcclxuLy8gICAgIGlkOidtMicsXHJcbi8vICAgICB0aXRsZTogJ0EgU2Vjb25kIE1lZXR1cCcsXHJcbi8vICAgICBpbWFnZTogJ2h0dHBzOi8vdXBsb2FkLndpa2ltZWRpYS5vcmcvd2lraXBlZGlhL2NvbW1vbnMvdGh1bWIvZC9kMy9TdGFkdGJpbGRfTSVDMyVCQ25jaGVuLmpwZy8xMjgwcHgtU3RhZHRiaWxkX00lQzMlQkNuY2hlbi5qcGcnLFxyXG4vLyAgICAgYWRkcmVzczogJ1NvbWUgYWRkcmVzcyA1KDIpLCAxMjM0NSBTb21lIENpdHknLFxyXG4vLyAgICAgZGVzY3JpcHRpb246ICdUaGlzIGlzIGEgc2Vjb25kIG1lZXQgdXAnXHJcbi8vIH1dXHJcblxyXG5cclxuXHJcbi8vTmV4dD5qcyBwcmUtcmVkbmVycyBidXQgb25seSB0aGUgZmlyc3QgZXhlY3V0aW9uLCBzbyB5b3UgbXVzdCBjYWxsIGRhdGEgb24gdGhlIGZpcnN0IHJlbmRlciBzbyB5b3UgY2FuIHVzZSBpdCBGQVNUXHJcblxyXG5mdW5jdGlvbiBIb21lUGFnZShwcm9wcykge1xyXG5cclxuXHJcbiAgICAvL1dlIGFyZSBkaXNwbGF5aW5nIGEgcmVhY3QgY29tcG9uZW50IHRoYXQgaXMgbm90IGEgcGFnZSBjb21wb25lbmV0IG9uIHRoaXMgcGFnZS4gSW1wb3J0IGl0IHRoYW4gdXRpbGl6ZVxyXG4gICAgLy9DYW4gc3RpbGwgdXNlIENhcmQvTGF5b3V0IGZ1bmN0aW9uIHdpdGggcHJvcHMuY2hpbGRyZW5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TWVldHVwTGlzdCBtZWV0dXBzPXtwcm9wcy5tZWV0dXBzfS8+XHJcbiAgICApXHJcbn1cclxuXHJcbi8qXHJcbk1FVEhPRDpcclxuICAgIC8vam9iIGlzIHRvIHByZXBhcmUgcHJvcHMgZm9yIHRoaXMgcGFnZS4gQ2FuIHJldHVybiBhIHByb21pc2Ugd2l0aCB0aGlzLiBJdCB3YWl0cyB1bnRpbCB5b3VyIGRhdGEgaXMgbG9hZGVkIGJlZm9yZSB5b3UgcmVuZGVyXHJcbiAgICAvL3lvdSBjYW4gZG8gYmFja2VuZC9zZXZlciBzaWRlIGNvZGUsIGl0IHdpbGwgbmV2ZXIgZW5kIHVwIG9uIHRoZSBjaWxlbnQgc2lkZVxyXG4gICAgLy9pbiB0aGUgYnVpbGQgcHJvZC5cclxuICAgIC8vRkVUQ0ggREFUQSBmcm9tIGFuIEFQSSBoZXJlLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLlxyXG4qL1xyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcblxyXG4gICAgLy9DT0RFIGluIGhlcmUgaXMgU2V2ZXIgc2lkZSFcclxuICAgIC8vd2FudCB0byByZXVwbG9kIHRoZSBtYWluIHBhZ2Ugd2l0aCBuZXcgZGF0YWJhc2UgZW50cmllcyBvZiBtZWV0dXBzXHJcbiAgICBjb25zdCB1cmwgPSBcIm1vbmdvZGIrc3J2Oi8vbWFuZ29QdW5jaDpGUE5PV0F5WkFxUTBwZ29DQGNsdXN0ZXIwLnF5Y2YzZXIubW9uZ29kYi5uZXQvP3JldHJ5V3JpdGVzPXRydWUmdz1tYWpvcml0eVwiO1xyXG4gICAgY29uc3QgY2xpZW50ID0gYXdhaXQgTW9uZ29DbGllbnQuY29ubmVjdCh1cmwpO1xyXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoKTtcclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gICAgY29uc3QgbWVldHVwcyA9IGF3YWl0IG1lZXR1cHNDb2xsZWN0aW9uLmZpbmQoKS50b0FycmF5KCk7IC8vYXJyYXlzIG9mIG1lZXR1cHMgZnJvbSBtb25nb0RCXHJcbiAgICBjbGllbnQuY2xvc2UoKTtcclxuXHJcbiAgICBjb25zb2xlLmxvZyhtZWV0dXBzLnRpdGxlKTtcclxuXHJcbiAgICAvL2hhdmUgdG8gcmV0dXJuIGFuIG9iamVjdCBoZXJlXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgIG1lZXR1cHM6IG1lZXR1cHMubWFwKG1lZXR1cCA9PiAoe1xyXG4gICAgICAgICAgICAgICAgdGl0bGU6IG1lZXR1cC50aXRsZSxcclxuICAgICAgICAgICAgICAgIGFkZHJlc3M6IG1lZXR1cC5hZGRyZXNzLFxyXG4gICAgICAgICAgICAgICAgaW1hZ2U6IG1lZXR1cC5pbWFnZSxcclxuICAgICAgICAgICAgICAgIGlkOiBtZWV0dXBzX2lkLnRvU3RyaW5nKClcclxuICAgICAgICAgICAgfSkpXHJcbiAgICAgICAgfSxcclxuICAgICAgICByZXZhbGlkYXRlOiAxXHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuLypQUk9CRUxNc1xyXG4gRGF0YSBjb3VsZCBiZSBvdXRkYXRlZCwgd2hlbiB5b3UgZG8gYnVpbGQsIHRoaXMgZGF0YSBiZWNvbWVzIHNldFxyXG4gICAgICAgIC8vRXZlcnl0aW1lIHlvdSBidWlsZCBhcHAgZm9yIHByb2R1Y3Rpb24geW91IGhhdmUgdG8gY2hhbmdlIHRoaXMgcHJlLXJlbmRlcmVkIGRhdGEuXHJcbiAgICAgICAgLy9yZXZhbGlkYXRlIHByb3BlcnR5LCB3aGVuIGFkZCB0aGlzIHByb3BlcnR5IHRvIHJldHVybiBvYmplY3Qgb2YgdGhpcyBmdW5jdGlvbiwgdW5sY29rcyBmZWF0dXJlOiBJbmNyZW1lbnRhbCBTdGF0aWMgR2VuZXJhdGlvblxyXG4gICAgICAgIC8vcmV2YWxpZGF0ZTogd2FudHMgYSBudW1iZXIgPSBudW1iZXIgb2Ygc2Vjb25kIGl0IHdpbGwgd2FpdCwgdW50aWwgaXQgcmVnZW5lcmF0ZXMgYWdhaW4gb24gc2VydmVyLCBpZiB0aGV5IGFyZSByZXF1ZXN0cyBmb3IgcGFnZVxyXG4gICAgICAgIC8vcmVnZW5lcmF0ZXMgZm9yIGJ1aWxkLCB0aGFuIGV2ZXJ5IDEwc2VjcyBpZiByZXF1ZXN0cyBhcmUgY29taW5nIGluIGZvciBwYWdlXHJcbiAgICAgICAgLy95b3VyIGRhdGEgaXMgbmV2ZXIgb2xkZXIgdGhhbiAxMCBzZWNvbmRzLiBXaGF0cyB5b3UgZGF0YSB1cGRhdGUgZnJlcXVlbmN5Pz8/IChvbmNlIGV2ZXJ5IGhvdXIsIG9yIGV2ZXJ5IHNlY29uZClcclxuICAgICAgICAvL1JlZ2VucmF0ZWQgb24gc2VydmVyIGFmdGVyIGRlcGxveW1lbnQsIHNvIHlvdSBkb250IGhhdmUgdG8gcmVidWlsZCBpdCBldmVyeXRpbWUhXHJcbiovXHJcblxyXG5cclxuXHJcbi8qXHJcbk1FVEhPRDpcclxuICAgIC8vQ29udGV4dCBQYXJhbXRlcjogZ2l2ZXMgeW91IC5yZXEgYW5kIC5yZXMgXHJcbiAgICAvL1dpbGwgYWx3YXlzIG9uIHRoZSBzZXJ2ZXIgYWZ0ZXIgZGVwbG95bWVudFxyXG4gICAgLy9GZXRjaGVzIGRhdGEgZnJtIGFuIEFQSVxyXG4gICAgLy95b3UgY2FuIGRvIGJhY2tlbmQvc2V2ZXIgc2lkZSBjb2RlLCBpdCB3aWxsIG5ldmVyIGVuZCB1cCBvbiB0aGUgY2lsZW50IHNpZGUgU0FGRSFcclxuICAgIC8vUlVOUyBmb3IgZXZlcnkgaW5jb21pbmcgcmVxdWVzdCBmb3IgcGFnZVxyXG4qL1xyXG5cclxuLypcclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFNlcnZlclNpZGVQcm9wcyhjb250ZXh0KSB7XHJcblxyXG5cclxuXHJcbiAgICBjb25zdCByZXEgPSBjb250ZXh0LnJlcTtcclxuICAgIGNvbnN0IHJlcyA9IGNvbnRleHQucmVzO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgbWVldHVwczogRFVNTVlfTUVFVFVQU1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4qL1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgSG9tZVBhZ2UiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNZWV0dXBMaXN0IiwiSG9tZVBhZ2UiLCJwcm9wcyIsIm1lZXR1cHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});