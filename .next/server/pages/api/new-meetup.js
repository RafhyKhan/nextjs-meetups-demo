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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n// /api/new-meet-up\n// POST/api/new-meetup\n/*\r\nThis function is to send data of new entries(meetups) to the database to be stored\r\n\r\n*/ \n//to connect\nasync function handler(req, res, data) {\n    const url = \"mongodb+srv://mangoPunch:FPNOWAyZAqQ0pgoC@cluster0.qycf3er.mongodb.net/?retryWrites=true&w=majority\";\n    const data2 = req.body;\n    console.log(\"${req.method = POST}\");\n    //if statement of req.method === \"POST\" didnt work for some reason\n    //req, data about incoming request\n    //res, needed to send back response\n    const client = await mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient.connect(url);\n    const db = client.db();\n    //connecting to mongodb database, string is given by website\n    //YOU NEVER want to code on the cilent side, since your password is in the STRING!!! \n    const meetupsCollection = db.collection(\"meetups\");\n    //creates collection called meetups\n    const result = await meetupsCollection.insertOne(data2);\n    //inserts a document(object) into meetupsCOllection\n    console.log(result);\n    client.close();\n    res.status(201).json({\n        message: \"Meetup inserted!\"\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQSxtQkFBbUI7QUFDbkIsc0JBQXNCO0FBQ3RCO0FBTUEsWUFBWTtBQUlaO0dBRWdCO0lBR1osTUFBTU07SUFDTkUsT0FBTyxDQUFDQyxHQUFHLENBQUMsc0JBQXNCLENBQUMsQ0FBQztJQUNwQyxrRUFBa0U7SUFFbEU7SUFDQSxtQ0FBbUM7SUFFbkMsTUFBTUMsTUFBTSxHQUFHLE1BQU1WLFdBQVcsQ0FBQ1csT0FBTyxDQUFDTixHQUFHLENBQUM7SUFDN0MsTUFBTU8sRUFBRSxHQUFHRixNQUFNLENBQUNFLEVBQUUsRUFBRTtJQUV0QjtJQUNBO0lBRUEsTUFBTUMsaUJBQWlCO0lBQ3ZCLG1DQUFtQztJQUVuQyxNQUFNRSxNQUFNLEdBQUcsTUFBTUYsaUJBQWlCLENBQUNHLFNBQVMsQ0FBQ1YsS0FBSyxDQUFDO0lBQ3ZELG1EQUFtRDtJQUVuREUsT0FBTyxDQUFDQyxHQUFHLENBQUNNLE1BQU0sQ0FBQyxDQUFDO0lBR3BCTCxNQUFNLENBQUNPLEtBQUssRUFBRSxDQUFDO0lBRWZkLEdBQUcsQ0FBQ2UsTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUM7UUFBQ0MsT0FBTyxFQUFFO0tBQW1CLENBQUMsQ0FBQztBQUd4RCxDQUFDO0FBRUQsZUFBZW5CLE9BQU8sQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1wcm9qZWN0Mi41Ly4vcGFnZXMvYXBpL25ldy1tZWV0dXAuanM/NzM5NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLy8gL2FwaS9uZXctbWVldC11cFxyXG4vLyBQT1NUL2FwaS9uZXctbWVldHVwXHJcbi8qXHJcblRoaXMgZnVuY3Rpb24gaXMgdG8gc2VuZCBkYXRhIG9mIG5ldyBlbnRyaWVzKG1lZXR1cHMpIHRvIHRoZSBkYXRhYmFzZSB0byBiZSBzdG9yZWRcclxuXHJcbiovXHJcblxyXG5pbXBvcnQgeyBNb25nb0NsaWVudCB9IGZyb20gXCJtb25nb2RiXCI7XHJcbi8vdG8gY29ubmVjdFxyXG5cclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyIChyZXEsIHJlcywgZGF0YSkge1xyXG5cclxuICAgIGNvbnN0IHVybCA9IFwibW9uZ29kYitzcnY6Ly9tYW5nb1B1bmNoOkZQTk9XQXlaQXFRMHBnb0NAY2x1c3RlcjAucXljZjNlci5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XHJcblxyXG5cclxuICAgIGNvbnN0IGRhdGEyID0gcmVxLmJvZHk7IFxyXG4gICAgY29uc29sZS5sb2coXCIke3JlcS5tZXRob2QgPSBQT1NUfVwiKTtcclxuICAgIC8vaWYgc3RhdGVtZW50IG9mIHJlcS5tZXRob2QgPT09IFwiUE9TVFwiIGRpZG50IHdvcmsgZm9yIHNvbWUgcmVhc29uXHJcblxyXG4gICAgLy9yZXEsIGRhdGEgYWJvdXQgaW5jb21pbmcgcmVxdWVzdFxyXG4gICAgLy9yZXMsIG5lZWRlZCB0byBzZW5kIGJhY2sgcmVzcG9uc2VcclxuXHJcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBNb25nb0NsaWVudC5jb25uZWN0KHVybCk7XHJcbiAgICBjb25zdCBkYiA9IGNsaWVudC5kYigpO1xyXG4gICAgXHJcbiAgICAvL2Nvbm5lY3RpbmcgdG8gbW9uZ29kYiBkYXRhYmFzZSwgc3RyaW5nIGlzIGdpdmVuIGJ5IHdlYnNpdGVcclxuICAgIC8vWU9VIE5FVkVSIHdhbnQgdG8gY29kZSBvbiB0aGUgY2lsZW50IHNpZGUsIHNpbmNlIHlvdXIgcGFzc3dvcmQgaXMgaW4gdGhlIFNUUklORyEhISBcclxuXHJcbiAgICBjb25zdCBtZWV0dXBzQ29sbGVjdGlvbiA9IGRiLmNvbGxlY3Rpb24oJ21lZXR1cHMnKTtcclxuICAgIC8vY3JlYXRlcyBjb2xsZWN0aW9uIGNhbGxlZCBtZWV0dXBzXHJcblxyXG4gICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwc0NvbGxlY3Rpb24uaW5zZXJ0T25lKGRhdGEyKTtcclxuICAgIC8vaW5zZXJ0cyBhIGRvY3VtZW50KG9iamVjdCkgaW50byBtZWV0dXBzQ09sbGVjdGlvblxyXG5cclxuICAgIGNvbnNvbGUubG9nKHJlc3VsdCk7XHJcblxyXG5cclxuICAgIGNsaWVudC5jbG9zZSgpO1xyXG5cclxuICAgIHJlcy5zdGF0dXMoMjAxKS5qc29uKHttZXNzYWdlOiAnTWVldHVwIGluc2VydGVkISd9KTtcclxuXHJcblxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBoYW5kbGVyO1xyXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJoYW5kbGVyIiwicmVxIiwicmVzIiwiZGF0YSIsInVybCIsImRhdGEyIiwiYm9keSIsImNvbnNvbGUiLCJsb2ciLCJjbGllbnQiLCJjb25uZWN0IiwiZGIiLCJtZWV0dXBzQ29sbGVjdGlvbiIsImNvbGxlY3Rpb24iLCJyZXN1bHQiLCJpbnNlcnRPbmUiLCJjbG9zZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

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