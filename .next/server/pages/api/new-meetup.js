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
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// /api/new-meet-up\n// POST/api/new-meetup\n/*\r\nThis function is to send data of new entries(meetups) to the database to be stored\r\n\r\n*/ \n//to connect\nasync function handler(req, res, data) {\n    const url = \"mongodb+srv://BobAllan:b5tIpzAWNw8mFonS@cluster0.gmozk8w.mongodb.net/react-meetups?retryWrites=true&w=majority\";\n    const data2 = req.body;\n    console.log(\"${req.method = POST}\");\n    //if statement of req.method === \"POST\" didnt work for some reason\n    //req, data about incoming request\n    //res, needed to send back response\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(url);\n    const db = client.db();\n    //connecting to mongodb database, string is given by website\n    //YOU NEVER want to code on the cilent side, since your password is in the STRING!!! \n    const meetupsCollection = db.collection(\"meetups\");\n    //creates collection called meetups\n    const result = await meetupsCollection.insertOne(data2);\n    //inserts a document(object) into meetupsCOllection\n    console.log(result);\n    client.close();\n    res.status(201).json({\n        message: \"Meetup inserted!\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCO0FBTUEsWUFBWTtBQUlaO0dBRWdCO0lBR1osTUFBTU07SUFDTkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNwQyxrRUFBa0U7SUFFbEU7SUFDQSxtQ0FBbUM7SUFFbkMsTUFBTUMsTUFBTSxHQUFHLE1BQU1WLFdBQVcsQ0FBQ1csT0FBTyxDQUFDTixHQUFHLENBQUM7SUFDN0MsTUFBTU8sRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtJQUV0QjtJQUNBO0lBRUEsTUFBTUMsaUJBQWlCO0lBQ3ZCLG1DQUFtQztJQUVuQyxNQUFNRSxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1YsS0FBSyxDQUFDO0lBQ3ZELG1EQUFtRDtJQUVuREUsT0FBTyxDQUFDQyxHQUFHLENBQUNNLE1BQU0sQ0FBQyxDQUFDO0lBR3BCTCxNQUFNLENBQUNPLEtBQUssRUFBRSxDQUFDO0lBRWZkLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBQ0MsT0FBTyxFQUFFO0tBQW1CLENBQUMsQ0FBQztBQUd4RCxDQUFDO0FBRUQsZUFBZW5CLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcm9qZWN0Mi41Ly4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gL2FwaS9uZXctbWVldC11cFxyXG4vLyBQT1NUL2FwaS9uZXctbWVldHVwXHJcbi8qXHJcblRoaXMgZnVuY3Rpb24gaXMgdG8gc2VuZCBkYXRhIG9mIG5ldyBlbnRyaWVzKG1lZXR1cHMpIHRvIHRoZSBkYXRhYmFzZSB0byBiZSBzdG9yZWRcclxuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbi8vdG8gY29ubmVjdFxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcywgZGF0YSkge1xyXG5cclxuICAgIGNvbnN0IHVybCA9IFwibW9uZ29kYitzcnY6Ly9Cb2JBbGxhbjpiNXRJcHpBV053OG1Gb25TQGNsdXN0ZXIwLmdtb3prOHcubW9uZ29kYi5uZXQvcmVhY3QtbWVldHVwcz9yZXRyeVdyaXRlcz10cnVlJnc9bWFqb3JpdHlcIjtcclxuXHJcblxyXG4gICAgY29uc3QgZGF0YTIgPSByZXEuYm9keTsgXHJcbiAgICBjb25zb2xlLmxvZyhcIiR7cmVxLm1ldGhvZCA9IFBPU1R9XCIpO1xyXG4gICAgLy9pZiBzdGF0ZW1lbnQgb2YgcmVxLm1ldGhvZCA9PT0gXCJQT1NUXCIgZGlkbnQgd29yayBmb3Igc29tZSByZWFzb25cclxuXHJcbiAgICAvL3JlcSwgZGF0YSBhYm91dCBpbmNvbWluZyByZXF1ZXN0XHJcbiAgICAvL3JlcywgbmVlZGVkIHRvIHNlbmQgYmFjayByZXNwb25zZVxyXG5cclxuICAgIGNvbnN0IGNsaWVudCA9IGF3YWl0IE1vbmdvQ2xpZW50LmNvbm5lY3QodXJsKTtcclxuICAgIGNvbnN0IGRiID0gY2xpZW50LmRiKCk7XHJcbiAgICBcclxuICAgIC8vY29ubmVjdGluZyB0byBtb25nb2RiIGRhdGFiYXNlLCBzdHJpbmcgaXMgZ2l2ZW4gYnkgd2Vic2l0ZVxyXG4gICAgLy9ZT1UgTkVWRVIgd2FudCB0byBjb2RlIG9uIHRoZSBjaWxlbnQgc2lkZSwgc2luY2UgeW91ciBwYXNzd29yZCBpcyBpbiB0aGUgU1RSSU5HISEhIFxyXG5cclxuICAgIGNvbnN0IG1lZXR1cHNDb2xsZWN0aW9uID0gZGIuY29sbGVjdGlvbignbWVldHVwcycpO1xyXG4gICAgLy9jcmVhdGVzIGNvbGxlY3Rpb24gY2FsbGVkIG1lZXR1cHNcclxuXHJcbiAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBtZWV0dXBzQ29sbGVjdGlvbi5pbnNlcnRPbmUoZGF0YTIpO1xyXG4gICAgLy9pbnNlcnRzIGEgZG9jdW1lbnQob2JqZWN0KSBpbnRvIG1lZXR1cHNDT2xsZWN0aW9uXHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzdWx0KTtcclxuXHJcblxyXG4gICAgY2xpZW50LmNsb3NlKCk7XHJcblxyXG4gICAgcmVzLnN0YXR1cygyMDEpLmpzb24oe21lc3NhZ2U6ICdNZWV0dXAgaW5zZXJ0ZWQhJ30pO1xyXG5cclxuXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGhhbmRsZXI7XHJcbiJdLCJuYW1lcyI6WyJNb25nb0NsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJkYXRhIiwidXJsIiwiZGF0YTIiLCJib2R5IiwiY29uc29sZSIsImxvZyIsImNsaWVudCIsImNvbm5lY3QiLCJkYiIsIm1lZXR1cHNDb2xsZWN0aW9uIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsImNsb3NlIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();