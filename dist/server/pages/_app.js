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
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "__barrel_optimize__?names=Button,Grid!=!./node_modules/@mui/material/index.js":
/*!*************************************************************************************!*\
  !*** __barrel_optimize__?names=Button,Grid!=!./node_modules/@mui/material/index.js ***!
  \*************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Button: () => (/* reexport safe */ _Button_index_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]),\n/* harmony export */   Grid: () => (/* reexport safe */ _Grid_index_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])\n/* harmony export */ });\n/* harmony import */ var _Button_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Button/index.js */ \"./node_modules/@mui/material/Button/index.js\");\n/* harmony import */ var _Grid_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Grid/index.js */ \"./node_modules/@mui/material/Grid/index.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_Button_index_js__WEBPACK_IMPORTED_MODULE_0__, _Grid_index_js__WEBPACK_IMPORTED_MODULE_1__]);\n([_Button_index_js__WEBPACK_IMPORTED_MODULE_0__, _Grid_index_js__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19iYXJyZWxfb3B0aW1pemVfXz9uYW1lcz1CdXR0b24sR3JpZCE9IS4vbm9kZV9tb2R1bGVzL0BtdWkvbWF0ZXJpYWwvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFDcUQiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnVya2FcXE9uZURyaXZlXFxNYXNhw7xzdMO8XFxuZXh0XFxzb25cXG5vZGVfbW9kdWxlc1xcQG11aVxcbWF0ZXJpYWxcXGluZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBCdXR0b24gfSBmcm9tIFwiLi9CdXR0b24vaW5kZXguanNcIlxuZXhwb3J0IHsgZGVmYXVsdCBhcyBHcmlkIH0gZnJvbSBcIi4vR3JpZC9pbmRleC5qc1wiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///__barrel_optimize__?names=Button,Grid!=!./node_modules/@mui/material/index.js\n");

/***/ }),

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Login)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _barrel_optimize_names_Button_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! __barrel_optimize__?names=Button,Grid!=!@mui/material */ \"__barrel_optimize__?names=Button,Grid!=!./node_modules/@mui/material/index.js\");\n/* harmony import */ var _mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/Google */ \"./node_modules/@mui/icons-material/esm/Google.js\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/config */ \"./firebase/config.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase_config__WEBPACK_IMPORTED_MODULE_2__, _barrel_optimize_names_Button_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__]);\n([firebase_auth__WEBPACK_IMPORTED_MODULE_1__, _firebase_config__WEBPACK_IMPORTED_MODULE_2__, _barrel_optimize_names_Button_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\n\nfunction Login() {\n    const handleClick = ()=>{\n        (0,firebase_auth__WEBPACK_IMPORTED_MODULE_1__.signInWithPopup)(_firebase_config__WEBPACK_IMPORTED_MODULE_2__.auth, _firebase_config__WEBPACK_IMPORTED_MODULE_2__.provider);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__.Grid, {\n        container: true,\n        spacing: 0,\n        direction: \"column\",\n        alignItems: \"center\",\n        justifyContent: \"center\",\n        style: {\n            minHeight: '100vh'\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_barrel_optimize_names_Button_Grid_mui_material__WEBPACK_IMPORTED_MODULE_3__.Button, {\n            onClick: handleClick,\n            variant: \"contained\",\n            startIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_Google__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\furka\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\next\\\\son\\\\components\\\\Login.js\",\n                lineNumber: 14,\n                columnNumber: 70\n            }, void 0),\n            children: \"GOOGLE İLE GİRİŞ YAP\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\furka\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\next\\\\son\\\\components\\\\Login.js\",\n            lineNumber: 14,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\furka\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\next\\\\son\\\\components\\\\Login.js\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this);\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0xvZ2luLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQTRDO0FBQ1E7QUFDSjtBQUNJO0FBRXJDLFNBQVNNO0lBRXBCLE1BQU1DLGNBQVk7UUFDZEosOERBQWVBLENBQUNDLGtEQUFJQSxFQUFDQyxzREFBUUE7SUFDakM7SUFFRixxQkFDRSw4REFBQ0wsaUZBQUlBO1FBQUNRLFNBQVM7UUFBQ0MsU0FBUztRQUFHQyxXQUFVO1FBQVNDLFlBQVc7UUFBU0MsZ0JBQWU7UUFBU0MsT0FBTztZQUFDQyxXQUFVO1FBQU87a0JBQ2hILDRFQUFDYixtRkFBTUE7WUFBQ2MsU0FBU1I7WUFBYVMsU0FBUTtZQUFZQyx5QkFBVyw4REFBQ2Ysa0VBQVVBOzs7OztzQkFBSTs7Ozs7Ozs7Ozs7QUFHcEYiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnVya2FcXE9uZURyaXZlXFxNYXNhw7xzdMO8XFxuZXh0XFxzb25cXGNvbXBvbmVudHNcXExvZ2luLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEdyaWQsQnV0dG9uIH0gZnJvbSBcIkBtdWkvbWF0ZXJpYWxcIjtcclxuaW1wb3J0IEdvb2dsZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9Hb29nbGUnO1xyXG5pbXBvcnQgeyBzaWduSW5XaXRoUG9wdXAgfSBmcm9tIFwiZmlyZWJhc2UvYXV0aFwiO1xyXG5pbXBvcnQgeyBhdXRoLCBwcm92aWRlciB9IGZyb20gXCIuLi9maXJlYmFzZS9jb25maWdcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIExvZ2luKCkge1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrPSgpPT57XHJcbiAgICAgICAgc2lnbkluV2l0aFBvcHVwKGF1dGgscHJvdmlkZXIpO1xyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezB9IGRpcmVjdGlvbj1cImNvbHVtblwiIGFsaWduSXRlbXM9XCJjZW50ZXJcIiBqdXN0aWZ5Q29udGVudD1cImNlbnRlclwiIHN0eWxlPXt7bWluSGVpZ2h0OicxMDB2aCd9fSA+XHJcbiAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDbGlja30gdmFyaWFudD1cImNvbnRhaW5lZFwiIHN0YXJ0SWNvbj17PEdvb2dsZUljb24vPn0+R09PR0xFIMSwTEUgR8SwUsSwxZ4gWUFQPC9CdXR0b24+XHJcbiAgICA8L0dyaWQ+XHJcbiAgKVxyXG59XHJcbiJdLCJuYW1lcyI6WyJHcmlkIiwiQnV0dG9uIiwiR29vZ2xlSWNvbiIsInNpZ25JbldpdGhQb3B1cCIsImF1dGgiLCJwcm92aWRlciIsIkxvZ2luIiwiaGFuZGxlQ2xpY2siLCJjb250YWluZXIiLCJzcGFjaW5nIiwiZGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwic3R5bGUiLCJtaW5IZWlnaHQiLCJvbkNsaWNrIiwidmFyaWFudCIsInN0YXJ0SWNvbiJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Login.js\n");

/***/ }),

/***/ "./contexts/AuthContext.js":
/*!*********************************!*\
  !*** ./contexts/AuthContext.js ***!
  \*********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AuthContext: () => (/* binding */ AuthContext),\n/* harmony export */   \"default\": () => (/* binding */ AuthContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _firebase_config__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../firebase/config */ \"./firebase/config.js\");\n/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Login */ \"./components/Login.js\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_firebase_config__WEBPACK_IMPORTED_MODULE_2__, _components_Login__WEBPACK_IMPORTED_MODULE_3__]);\n([_firebase_config__WEBPACK_IMPORTED_MODULE_2__, _components_Login__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\n\nconst AuthContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();\nfunction AuthContextProvider({ children }) {\n    const [googleUser, setGoogleUser] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [email, setEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"AuthContextProvider.useEffect\": ()=>{\n            return _firebase_config__WEBPACK_IMPORTED_MODULE_2__.auth.onIdTokenChanged({\n                \"AuthContextProvider.useEffect\": async (user)=>{\n                    if (!user) {\n                        console.log(\"kullanıcı bulunamadı\");\n                        setGoogleUser(null);\n                        return;\n                    }\n                    const token = await user.getIdToken();\n                    console.log(\"token:\" + token);\n                    setGoogleUser(user);\n                    setEmail(user.email);\n                    console.log(\"user:\" + user);\n                }\n            }[\"AuthContextProvider.useEffect\"]);\n        }\n    }[\"AuthContextProvider.useEffect\"], []);\n    if (!googleUser) {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Login__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n            fileName: \"C:\\\\Users\\\\furka\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\next\\\\son\\\\contexts\\\\AuthContext.js\",\n            lineNumber: 34,\n            columnNumber: 16\n        }, this);\n    } else {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AuthContext.Provider, {\n            value: {\n                googleUser,\n                email\n            },\n            children: children\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\furka\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\next\\\\son\\\\contexts\\\\AuthContext.js\",\n            lineNumber: 37,\n            columnNumber: 16\n        }, this);\n    }\n}\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9BdXRoQ29udGV4dC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBMkQ7QUFDakI7QUFDRjtBQUVqQyxNQUFNSyw0QkFBY0wsb0RBQWFBLEdBQUc7QUFHNUIsU0FBU00sb0JBQW9CLEVBQUNDLFFBQVEsRUFBQztJQUVsRCxNQUFNLENBQUNDLFlBQVdDLGNBQWMsR0FBR1AsK0NBQVFBLENBQUM7SUFDNUMsTUFBTSxDQUFDUSxPQUFNQyxTQUFTLEdBQUdULCtDQUFRQSxDQUFDO0lBRWxDRCxnREFBU0E7eUNBQUM7WUFDTixPQUFPRSxrREFBSUEsQ0FBQ1MsZ0JBQWdCO2lEQUFDLE9BQU1DO29CQUMvQixJQUFHLENBQUNBLE1BQUs7d0JBQ0xDLFFBQVFDLEdBQUcsQ0FBQzt3QkFDWk4sY0FBYzt3QkFDZDtvQkFDSjtvQkFFSSxNQUFNTyxRQUFRLE1BQU1ILEtBQUtJLFVBQVU7b0JBQ25DSCxRQUFRQyxHQUFHLENBQUMsV0FBU0M7b0JBQ3JCUCxjQUFjSTtvQkFDZEYsU0FBU0UsS0FBS0gsS0FBSztvQkFDbkJJLFFBQVFDLEdBQUcsQ0FBQyxVQUFVRjtnQkFJOUI7O1FBRUo7d0NBQUUsRUFBRTtJQUVKLElBQUcsQ0FBQ0wsWUFBVztRQUNYLHFCQUFPLDhEQUFDSix5REFBS0E7Ozs7O0lBQ2pCLE9BQ0k7UUFDQSxxQkFBTyw4REFBQ0MsWUFBWWEsUUFBUTtZQUFDQyxPQUFPO2dCQUFDWDtnQkFBV0U7WUFBSztzQkFDNUNIOzs7Ozs7SUFFYjtBQUVKIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXGZ1cmthXFxPbmVEcml2ZVxcTWFzYcO8c3TDvFxcbmV4dFxcc29uXFxjb250ZXh0c1xcQXV0aENvbnRleHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBhdXRoIH0gZnJvbSBcIi4uL2ZpcmViYXNlL2NvbmZpZ1wiO1xyXG5pbXBvcnQgTG9naW4gZnJvbSBcIi4uL2NvbXBvbmVudHMvTG9naW5cIjtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoQ29udGV4dFByb3ZpZGVyKHtjaGlsZHJlbn0pe1xyXG4gICAgXHJcbiAgICBjb25zdCBbZ29vZ2xlVXNlcixzZXRHb29nbGVVc2VyXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gICAgY29uc3QgW2VtYWlsLHNldEVtYWlsXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG5cclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgIHJldHVybiBhdXRoLm9uSWRUb2tlbkNoYW5nZWQoYXN5bmModXNlcik9PntcclxuICAgICAgICAgICAgaWYoIXVzZXIpe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJrdWxsYW7EsWPEsSBidWx1bmFtYWTEsVwiKVxyXG4gICAgICAgICAgICAgICAgc2V0R29vZ2xlVXNlcihudWxsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdXNlci5nZXRJZFRva2VuKCk7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRva2VuOlwiK3Rva2VuKVxyXG4gICAgICAgICAgICAgICAgc2V0R29vZ2xlVXNlcih1c2VyKTtcclxuICAgICAgICAgICAgICAgIHNldEVtYWlsKHVzZXIuZW1haWwpO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJ1c2VyOlwiICsgdXNlcilcclxuICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgfSxbXSlcclxuICBcclxuICAgIGlmKCFnb29nbGVVc2VyKXtcclxuICAgICAgICByZXR1cm4gPExvZ2luLz5cclxuICAgIH1cclxuICAgIGVsc2V7XHJcbiAgICAgICAgcmV0dXJuIDxBdXRoQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2dvb2dsZVVzZXIsZW1haWx9fT5cclxuICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICAgIDwvQXV0aENvbnRleHQuUHJvdmlkZXI+XHJcbiAgICB9XHJcblxyXG59Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsImF1dGgiLCJMb2dpbiIsIkF1dGhDb250ZXh0IiwiQXV0aENvbnRleHRQcm92aWRlciIsImNoaWxkcmVuIiwiZ29vZ2xlVXNlciIsInNldEdvb2dsZVVzZXIiLCJlbWFpbCIsInNldEVtYWlsIiwib25JZFRva2VuQ2hhbmdlZCIsInVzZXIiLCJjb25zb2xlIiwibG9nIiwidG9rZW4iLCJnZXRJZFRva2VuIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./contexts/AuthContext.js\n");

/***/ }),

/***/ "./firebase/config.js":
/*!****************************!*\
  !*** ./firebase/config.js ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   auth: () => (/* binding */ auth),\n/* harmony export */   db: () => (/* binding */ db),\n/* harmony export */   provider: () => (/* binding */ provider)\n/* harmony export */ });\n/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ \"firebase/app\");\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"firebase/firestore\");\n/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ \"firebase/auth\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__]);\n([firebase_app__WEBPACK_IMPORTED_MODULE_0__, firebase_firestore__WEBPACK_IMPORTED_MODULE_1__, firebase_auth__WEBPACK_IMPORTED_MODULE_2__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);\n\n\n\nconst firebaseConfig = {\n    apiKey: \"AIzaSyALimi6tc76YPZwzMjKe9eGqCQpUm2H2x8\",\n    authDomain: \"modern-react-app-a9bcd.firebaseapp.com\",\n    projectId: \"modern-react-app-a9bcd\",\n    storageBucket: \"modern-react-app-a9bcd.firebasestorage.app\",\n    messagingSenderId: \"18914204349\",\n    appId: \"1:18914204349:web:008ce68bd7e0325e5cb5d4\"\n};\n// Initialize Firebase\nconst app = (0,firebase_app__WEBPACK_IMPORTED_MODULE_0__.initializeApp)(firebaseConfig);\nconst db = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getFirestore)(app);\nconst auth = (0,firebase_auth__WEBPACK_IMPORTED_MODULE_2__.getAuth)();\nconst provider = new firebase_auth__WEBPACK_IMPORTED_MODULE_2__.GoogleAuthProvider();\n\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9maXJlYmFzZS9jb25maWcuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQzZDO0FBQ0s7QUFDVTtBQUM1RCxNQUFNSSxpQkFBaUI7SUFDckJDLFFBQVE7SUFDUkMsWUFBWTtJQUNaQyxXQUFXO0lBQ1hDLGVBQWU7SUFDZkMsbUJBQW1CO0lBQ25CQyxPQUFPO0FBQ1Q7QUFFQSxzQkFBc0I7QUFDdEIsTUFBTUMsTUFBTVgsMkRBQWFBLENBQUNJO0FBQzFCLE1BQU1RLEtBQUtYLGdFQUFZQSxDQUFDVTtBQUN4QixNQUFNRSxPQUFPWCxzREFBT0E7QUFDcEIsTUFBTVksV0FBVyxJQUFJWCw2REFBa0JBO0FBRWQiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcZnVya2FcXE9uZURyaXZlXFxNYXNhw7xzdMO8XFxuZXh0XFxzb25cXGZpcmViYXNlXFxjb25maWcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXHJcbmltcG9ydCB7IGluaXRpYWxpemVBcHAgfSBmcm9tIFwiZmlyZWJhc2UvYXBwXCI7XHJcbmltcG9ydCB7IGdldEZpcmVzdG9yZSB9IGZyb20gXCJmaXJlYmFzZS9maXJlc3RvcmVcIjtcclxuaW1wb3J0IHsgZ2V0QXV0aCwgR29vZ2xlQXV0aFByb3ZpZGVyIH0gZnJvbSBcImZpcmViYXNlL2F1dGhcIjtcclxuY29uc3QgZmlyZWJhc2VDb25maWcgPSB7XHJcbiAgYXBpS2V5OiBcIkFJemFTeUFMaW1pNnRjNzZZUFp3ek1qS2U5ZUdxQ1FwVW0ySDJ4OFwiLFxyXG4gIGF1dGhEb21haW46IFwibW9kZXJuLXJlYWN0LWFwcC1hOWJjZC5maXJlYmFzZWFwcC5jb21cIixcclxuICBwcm9qZWN0SWQ6IFwibW9kZXJuLXJlYWN0LWFwcC1hOWJjZFwiLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IFwibW9kZXJuLXJlYWN0LWFwcC1hOWJjZC5maXJlYmFzZXN0b3JhZ2UuYXBwXCIsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IFwiMTg5MTQyMDQzNDlcIixcclxuICBhcHBJZDogXCIxOjE4OTE0MjA0MzQ5OndlYjowMDhjZTY4YmQ3ZTAzMjVlNWNiNWQ0XCJcclxufTtcclxuXHJcbi8vIEluaXRpYWxpemUgRmlyZWJhc2VcclxuY29uc3QgYXBwID0gaW5pdGlhbGl6ZUFwcChmaXJlYmFzZUNvbmZpZyk7XHJcbmNvbnN0IGRiID0gZ2V0RmlyZXN0b3JlKGFwcCk7XHJcbmNvbnN0IGF1dGggPSBnZXRBdXRoKCk7XHJcbmNvbnN0IHByb3ZpZGVyID0gbmV3IEdvb2dsZUF1dGhQcm92aWRlcigpO1xyXG5cclxuZXhwb3J0IHtkYixhdXRoLHByb3ZpZGVyfSJdLCJuYW1lcyI6WyJpbml0aWFsaXplQXBwIiwiZ2V0RmlyZXN0b3JlIiwiZ2V0QXV0aCIsIkdvb2dsZUF1dGhQcm92aWRlciIsImZpcmViYXNlQ29uZmlnIiwiYXBpS2V5IiwiYXV0aERvbWFpbiIsInByb2plY3RJZCIsInN0b3JhZ2VCdWNrZXQiLCJtZXNzYWdpbmdTZW5kZXJJZCIsImFwcElkIiwiYXBwIiwiZGIiLCJhdXRoIiwicHJvdmlkZXIiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./firebase/config.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../contexts/AuthContext */ \"./contexts/AuthContext.js\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_2__);\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__]);\n_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n\nfunction MyApp({ Component, pageProps }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_AuthContext__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\furka\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\next\\\\son\\\\pages\\\\_app.js\",\n            lineNumber: 6,\n            columnNumber: 13\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\furka\\\\OneDrive\\\\Masa\\xfcst\\xfc\\\\next\\\\son\\\\pages\\\\_app.js\",\n        lineNumber: 5,\n        columnNumber: 11\n    }, this);\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBeUQ7QUFDM0I7QUFFOUIsU0FBU0MsTUFBTSxFQUFFQyxTQUFTLEVBQUVDLFNBQVMsRUFBRTtJQUNyQyxxQkFBUSw4REFBQ0gsNkRBQW1CQTtrQkFDbEIsNEVBQUNFO1lBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7QUFFcEM7QUFFQSxpRUFBZUYsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxmdXJrYVxcT25lRHJpdmVcXE1hc2HDvHN0w7xcXG5leHRcXHNvblxccGFnZXNcXF9hcHAuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEF1dGhDb250ZXh0UHJvdmlkZXIgZnJvbSAnLi4vY29udGV4dHMvQXV0aENvbnRleHQnXG5pbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLmNzcydcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoPEF1dGhDb250ZXh0UHJvdmlkZXI+XG4gICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgICAgICAgPC9BdXRoQ29udGV4dFByb3ZpZGVyPilcbn1cblxuZXhwb3J0IGRlZmF1bHQgTXlBcHBcbiJdLCJuYW1lcyI6WyJBdXRoQ29udGV4dFByb3ZpZGVyIiwiTXlBcHAiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "@mui/system":
/*!******************************!*\
  !*** external "@mui/system" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system");

/***/ }),

/***/ "@mui/system/DefaultPropsProvider":
/*!***************************************************!*\
  !*** external "@mui/system/DefaultPropsProvider" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/DefaultPropsProvider");

/***/ }),

/***/ "@mui/system/colorManipulator":
/*!***********************************************!*\
  !*** external "@mui/system/colorManipulator" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/colorManipulator");

/***/ }),

/***/ "@mui/system/createStyled":
/*!*******************************************!*\
  !*** external "@mui/system/createStyled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createStyled");

/***/ }),

/***/ "@mui/system/createTheme":
/*!******************************************!*\
  !*** external "@mui/system/createTheme" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/createTheme");

/***/ }),

/***/ "@mui/system/cssVars":
/*!**************************************!*\
  !*** external "@mui/system/cssVars" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/cssVars");

/***/ }),

/***/ "@mui/system/spacing":
/*!**************************************!*\
  !*** external "@mui/system/spacing" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/spacing");

/***/ }),

/***/ "@mui/system/styleFunctionSx":
/*!**********************************************!*\
  !*** external "@mui/system/styleFunctionSx" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/system/styleFunctionSx");

/***/ }),

/***/ "@mui/utils":
/*!*****************************!*\
  !*** external "@mui/utils" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils");

/***/ }),

/***/ "@mui/utils/capitalize":
/*!****************************************!*\
  !*** external "@mui/utils/capitalize" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/capitalize");

/***/ }),

/***/ "@mui/utils/composeClasses":
/*!********************************************!*\
  !*** external "@mui/utils/composeClasses" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/composeClasses");

/***/ }),

/***/ "@mui/utils/createChainedFunction":
/*!***************************************************!*\
  !*** external "@mui/utils/createChainedFunction" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/createChainedFunction");

/***/ }),

/***/ "@mui/utils/debounce":
/*!**************************************!*\
  !*** external "@mui/utils/debounce" ***!
  \**************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/debounce");

/***/ }),

/***/ "@mui/utils/deepmerge":
/*!***************************************!*\
  !*** external "@mui/utils/deepmerge" ***!
  \***************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deepmerge");

/***/ }),

/***/ "@mui/utils/deprecatedPropType":
/*!************************************************!*\
  !*** external "@mui/utils/deprecatedPropType" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/deprecatedPropType");

/***/ }),

/***/ "@mui/utils/elementTypeAcceptingRef":
/*!*****************************************************!*\
  !*** external "@mui/utils/elementTypeAcceptingRef" ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/elementTypeAcceptingRef");

/***/ }),

/***/ "@mui/utils/formatMuiErrorMessage":
/*!***************************************************!*\
  !*** external "@mui/utils/formatMuiErrorMessage" ***!
  \***************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/formatMuiErrorMessage");

/***/ }),

/***/ "@mui/utils/generateUtilityClass":
/*!**************************************************!*\
  !*** external "@mui/utils/generateUtilityClass" ***!
  \**************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClass");

/***/ }),

/***/ "@mui/utils/generateUtilityClasses":
/*!****************************************************!*\
  !*** external "@mui/utils/generateUtilityClasses" ***!
  \****************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/generateUtilityClasses");

/***/ }),

/***/ "@mui/utils/isFocusVisible":
/*!********************************************!*\
  !*** external "@mui/utils/isFocusVisible" ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isFocusVisible");

/***/ }),

/***/ "@mui/utils/isMuiElement":
/*!******************************************!*\
  !*** external "@mui/utils/isMuiElement" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/isMuiElement");

/***/ }),

/***/ "@mui/utils/ownerDocument":
/*!*******************************************!*\
  !*** external "@mui/utils/ownerDocument" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerDocument");

/***/ }),

/***/ "@mui/utils/ownerWindow":
/*!*****************************************!*\
  !*** external "@mui/utils/ownerWindow" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/ownerWindow");

/***/ }),

/***/ "@mui/utils/refType":
/*!*************************************!*\
  !*** external "@mui/utils/refType" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/refType");

/***/ }),

/***/ "@mui/utils/requirePropFactory":
/*!************************************************!*\
  !*** external "@mui/utils/requirePropFactory" ***!
  \************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/requirePropFactory");

/***/ }),

/***/ "@mui/utils/resolveProps":
/*!******************************************!*\
  !*** external "@mui/utils/resolveProps" ***!
  \******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/resolveProps");

/***/ }),

/***/ "@mui/utils/setRef":
/*!************************************!*\
  !*** external "@mui/utils/setRef" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/setRef");

/***/ }),

/***/ "@mui/utils/unsupportedProp":
/*!*********************************************!*\
  !*** external "@mui/utils/unsupportedProp" ***!
  \*********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/unsupportedProp");

/***/ }),

/***/ "@mui/utils/useControlled":
/*!*******************************************!*\
  !*** external "@mui/utils/useControlled" ***!
  \*******************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useControlled");

/***/ }),

/***/ "@mui/utils/useEnhancedEffect":
/*!***********************************************!*\
  !*** external "@mui/utils/useEnhancedEffect" ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEnhancedEffect");

/***/ }),

/***/ "@mui/utils/useEventCallback":
/*!**********************************************!*\
  !*** external "@mui/utils/useEventCallback" ***!
  \**********************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useEventCallback");

/***/ }),

/***/ "@mui/utils/useForkRef":
/*!****************************************!*\
  !*** external "@mui/utils/useForkRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useForkRef");

/***/ }),

/***/ "@mui/utils/useId":
/*!***********************************!*\
  !*** external "@mui/utils/useId" ***!
  \***********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useId");

/***/ }),

/***/ "@mui/utils/useLazyRef":
/*!****************************************!*\
  !*** external "@mui/utils/useLazyRef" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useLazyRef");

/***/ }),

/***/ "@mui/utils/useTimeout":
/*!****************************************!*\
  !*** external "@mui/utils/useTimeout" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("@mui/utils/useTimeout");

/***/ }),

/***/ "clsx?ce27":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("clsx");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = require("prop-types");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-transition-group":
/*!*****************************************!*\
  !*** external "react-transition-group" ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-transition-group");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "clsx?9dfb":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = import("clsx");;

/***/ }),

/***/ "firebase/app":
/*!*******************************!*\
  !*** external "firebase/app" ***!
  \*******************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/app");;

/***/ }),

/***/ "firebase/auth":
/*!********************************!*\
  !*** external "firebase/auth" ***!
  \********************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/auth");;

/***/ }),

/***/ "firebase/firestore":
/*!*************************************!*\
  !*** external "firebase/firestore" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = import("firebase/firestore");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/@mui","vendor-chunks/@babel"], () => (__webpack_exec__("./pages/_app.js")));
module.exports = __webpack_exports__;

})();