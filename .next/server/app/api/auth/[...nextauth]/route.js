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
exports.id = "app/api/auth/[...nextauth]/route";
exports.ids = ["app/api/auth/[...nextauth]/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("mongoose");

/***/ }),

/***/ "../../client/components/action-async-storage.external":
/*!*******************************************************************************!*\
  !*** external "next/dist/client/components/action-async-storage.external.js" ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/action-async-storage.external.js");

/***/ }),

/***/ "../../client/components/request-async-storage.external":
/*!********************************************************************************!*\
  !*** external "next/dist/client/components/request-async-storage.external.js" ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/request-async-storage.external.js");

/***/ }),

/***/ "../../client/components/static-generation-async-storage.external":
/*!******************************************************************************************!*\
  !*** external "next/dist/client/components/static-generation-async-storage.external.js" ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/client/components/static-generation-async-storage.external.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("assert");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("buffer");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("events");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("http");

/***/ }),

/***/ "https":
/*!************************!*\
  !*** external "https" ***!
  \************************/
/***/ ((module) => {

module.exports = require("https");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("querystring");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=F%3A%5CIT%20WORK%5CNext%20JS%5CProject%5CCopy%5CGet-Me-a-Chai-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CIT%20WORK%5CNext%20JS%5CProject%5CCopy%5CGet-Me-a-Chai-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=F%3A%5CIT%20WORK%5CNext%20JS%5CProject%5CCopy%5CGet-Me-a-Chai-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CIT%20WORK%5CNext%20JS%5CProject%5CCopy%5CGet-Me-a-Chai-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   originalPathname: () => (/* binding */ originalPathname),\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   requestAsyncStorage: () => (/* binding */ requestAsyncStorage),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   staticGenerationAsyncStorage: () => (/* binding */ staticGenerationAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/future/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/future/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/future/route-kind */ \"(rsc)/./node_modules/next/dist/server/future/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var F_IT_WORK_Next_JS_Project_Copy_Get_Me_a_Chai_main_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/auth/[...nextauth]/route.js */ \"(rsc)/./src/app/api/auth/[...nextauth]/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_future_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/auth/[...nextauth]/route\",\n        pathname: \"/api/auth/[...nextauth]\",\n        filename: \"route\",\n        bundlePath: \"app/api/auth/[...nextauth]/route\"\n    },\n    resolvedPagePath: \"F:\\\\IT WORK\\\\Next JS\\\\Project\\\\Copy\\\\Get-Me-a-Chai-main\\\\src\\\\app\\\\api\\\\auth\\\\[...nextauth]\\\\route.js\",\n    nextConfigOutput,\n    userland: F_IT_WORK_Next_JS_Project_Copy_Get_Me_a_Chai_main_src_app_api_auth_nextauth_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { requestAsyncStorage, staticGenerationAsyncStorage, serverHooks } = routeModule;\nconst originalPathname = \"/api/auth/[...nextauth]/route\";\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        serverHooks,\n        staticGenerationAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIuanM/bmFtZT1hcHAlMkZhcGklMkZhdXRoJTJGJTVCLi4ubmV4dGF1dGglNUQlMkZyb3V0ZSZwYWdlPSUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlJmFwcFBhdGhzPSZwYWdlUGF0aD1wcml2YXRlLW5leHQtYXBwLWRpciUyRmFwaSUyRmF1dGglMkYlNUIuLi5uZXh0YXV0aCU1RCUyRnJvdXRlLmpzJmFwcERpcj1GJTNBJTVDSVQlMjBXT1JLJTVDTmV4dCUyMEpTJTVDUHJvamVjdCU1Q0NvcHklNUNHZXQtTWUtYS1DaGFpLW1haW4lNUNzcmMlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUYlM0ElNUNJVCUyMFdPUkslNUNOZXh0JTIwSlMlNUNQcm9qZWN0JTVDQ29weSU1Q0dldC1NZS1hLUNoYWktbWFpbiZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQXNHO0FBQ3ZDO0FBQ2M7QUFDcUQ7QUFDbEk7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdIQUFtQjtBQUMzQztBQUNBLGNBQWMseUVBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxpRUFBaUU7QUFDekU7QUFDQTtBQUNBLFdBQVcsNEVBQVc7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUN1SDs7QUFFdkgiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXQtbWUtYS1jaGFpLz9lNzcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9mdXR1cmUvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkY6XFxcXElUIFdPUktcXFxcTmV4dCBKU1xcXFxQcm9qZWN0XFxcXENvcHlcXFxcR2V0LU1lLWEtQ2hhaS1tYWluXFxcXHNyY1xcXFxhcHBcXFxcYXBpXFxcXGF1dGhcXFxcWy4uLm5leHRhdXRoXVxcXFxyb3V0ZS5qc1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJGOlxcXFxJVCBXT1JLXFxcXE5leHQgSlNcXFxcUHJvamVjdFxcXFxDb3B5XFxcXEdldC1NZS1hLUNoYWktbWFpblxcXFxzcmNcXFxcYXBwXFxcXGFwaVxcXFxhdXRoXFxcXFsuLi5uZXh0YXV0aF1cXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyByZXF1ZXN0QXN5bmNTdG9yYWdlLCBzdGF0aWNHZW5lcmF0aW9uQXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5jb25zdCBvcmlnaW5hbFBhdGhuYW1lID0gXCIvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS9yb3V0ZVwiO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICBzZXJ2ZXJIb29rcyxcbiAgICAgICAgc3RhdGljR2VuZXJhdGlvbkFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHJlcXVlc3RBc3luY1N0b3JhZ2UsIHN0YXRpY0dlbmVyYXRpb25Bc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBvcmlnaW5hbFBhdGhuYW1lLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=F%3A%5CIT%20WORK%5CNext%20JS%5CProject%5CCopy%5CGet-Me-a-Chai-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CIT%20WORK%5CNext%20JS%5CProject%5CCopy%5CGet-Me-a-Chai-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./src/app/api/auth/[...nextauth]/route.js":
/*!*************************************************!*\
  !*** ./src/app/api/auth/[...nextauth]/route.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   HEAD: () => (/* binding */ handler),\n/* harmony export */   OPTIONS: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler),\n/* harmony export */   runtime: () => (/* binding */ runtime)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _db_connectDB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/db/connectDB */ \"(rsc)/./src/db/connectDB.js\");\n\n\n\n\n\n// Timeout utility function\nconst withTimeout = (promise, ms)=>{\n    return Promise.race([\n        promise,\n        new Promise((_, reject)=>setTimeout(()=>reject(new Error(`Operation timed out after ${ms}ms`)), ms))\n    ]);\n};\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    scope: \"user:email\"\n                }\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    prompt: \"consent\",\n                    access_type: \"offline\",\n                    response_type: \"code\",\n                    scope: \"openid email profile\"\n                }\n            }\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    callbacks: {\n        async signIn ({ user, account, profile }) {\n            try {\n                // Basic validation\n                if (!user?.email) {\n                    throw new Error(\"Email required for authentication\");\n                }\n                // Prepare user data before DB operations\n                const userData = {\n                    email: user.email,\n                    name: user.name || profile?.name || \"User\",\n                    profilePic: user.image || profile?.picture || \"\",\n                    provider: account.provider,\n                    providerId: user.id\n                };\n                // Attempt DB connection with timeout\n                try {\n                    await withTimeout((0,_db_connectDB__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(), 3000);\n                } catch (err) {\n                    console.error(\"DB connection timeout:\", err.message);\n                    // Allow login without DB write\n                    return true;\n                }\n                // Fire-and-forget user upsert\n                _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].updateOne({\n                    email: user.email\n                }, {\n                    $setOnInsert: userData\n                }, {\n                    upsert: true\n                }).catch((err)=>console.error(\"User upsert error:\", err));\n                return true;\n            } catch (error) {\n                console.error(\"SignIn Error:\", error.message);\n                return true; // Always allow login\n            }\n        },\n        async session ({ session }) {\n            if (session?.user?.email) {\n                try {\n                    const dbUser = await withTimeout(_models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        email: session.user.email\n                    }).select(\"username name profilePic provider\").lean(), 2000);\n                    if (dbUser) {\n                        session.user = {\n                            ...session.user,\n                            ...dbUser\n                        };\n                    }\n                } catch (err) {\n                    console.error(\"Session DB error:\", err.message);\n                }\n            }\n            return session;\n        }\n    },\n    session: {\n        strategy: \"jwt\",\n        maxAge: 30 * 24 * 60 * 60\n    },\n    debug: \"development\" === \"development\"\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n// New Next.js 14 way to export route handlers\n\n// New way to specify runtime (replace the old config export)\nconst runtime = \"nodejs\"; // Explicitly set Node.js runtime\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBaUM7QUFDdUI7QUFDQTtBQUN2QjtBQUNNO0FBRXZDLDJCQUEyQjtBQUMzQixNQUFNSyxjQUFjLENBQUNDLFNBQVNDO0lBQzVCLE9BQU9DLFFBQVFDLElBQUksQ0FBQztRQUNsQkg7UUFDQSxJQUFJRSxRQUFRLENBQUNFLEdBQUdDLFNBQ2RDLFdBQVcsSUFBTUQsT0FBTyxJQUFJRSxNQUFNLENBQUMsMEJBQTBCLEVBQUVOLEdBQUcsRUFBRSxDQUFDLElBQUlBO0tBRTVFO0FBQ0g7QUFFQSxNQUFNTyxjQUFjO0lBQ2xCQyxXQUFXO1FBQ1RkLHNFQUFjQSxDQUFDO1lBQ2JlLFVBQVVDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO1lBQ3RDQyxjQUFjSCxRQUFRQyxHQUFHLENBQUNHLG9CQUFvQjtZQUM5Q0MsZUFBZTtnQkFBRUMsUUFBUTtvQkFBRUMsT0FBTztnQkFBYTtZQUFFO1FBQ25EO1FBQ0F0QixzRUFBY0EsQ0FBQztZQUNiYyxVQUFVQyxRQUFRQyxHQUFHLENBQUNPLGdCQUFnQjtZQUN0Q0wsY0FBY0gsUUFBUUMsR0FBRyxDQUFDUSxvQkFBb0I7WUFDOUNKLGVBQWU7Z0JBQ2JDLFFBQVE7b0JBQ05JLFFBQVE7b0JBQ1JDLGFBQWE7b0JBQ2JDLGVBQWU7b0JBQ2ZMLE9BQU87Z0JBQ1Q7WUFDRjtRQUNGO0tBQ0Q7SUFDRE0sUUFBUWIsUUFBUUMsR0FBRyxDQUFDYSxlQUFlO0lBQ25DQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0FDLFdBQVc7UUFDVCxNQUFNRixRQUFPLEVBQUVHLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUU7WUFDckMsSUFBSTtnQkFDRixtQkFBbUI7Z0JBQ25CLElBQUksQ0FBQ0YsTUFBTUcsT0FBTztvQkFDaEIsTUFBTSxJQUFJMUIsTUFBTTtnQkFDbEI7Z0JBRUEseUNBQXlDO2dCQUN6QyxNQUFNMkIsV0FBVztvQkFDZkQsT0FBT0gsS0FBS0csS0FBSztvQkFDakJFLE1BQU1MLEtBQUtLLElBQUksSUFBSUgsU0FBU0csUUFBUTtvQkFDcENDLFlBQVlOLEtBQUtPLEtBQUssSUFBSUwsU0FBU00sV0FBVztvQkFDOUNDLFVBQVVSLFFBQVFRLFFBQVE7b0JBQzFCQyxZQUFZVixLQUFLVyxFQUFFO2dCQUNyQjtnQkFFQSxxQ0FBcUM7Z0JBQ3JDLElBQUk7b0JBQ0YsTUFBTTFDLFlBQVlELHlEQUFTQSxJQUFJO2dCQUNqQyxFQUFFLE9BQU80QyxLQUFLO29CQUNaQyxRQUFRZixLQUFLLENBQUMsMEJBQTBCYyxJQUFJRSxPQUFPO29CQUNuRCwrQkFBK0I7b0JBQy9CLE9BQU87Z0JBQ1Q7Z0JBRUEsOEJBQThCO2dCQUM5Qi9DLG9EQUFJQSxDQUFDZ0QsU0FBUyxDQUNaO29CQUFFWixPQUFPSCxLQUFLRyxLQUFLO2dCQUFDLEdBQ3BCO29CQUFFYSxjQUFjWjtnQkFBUyxHQUN6QjtvQkFBRWEsUUFBUTtnQkFBSyxHQUNmQyxLQUFLLENBQUNOLENBQUFBLE1BQU9DLFFBQVFmLEtBQUssQ0FBQyxzQkFBc0JjO2dCQUVuRCxPQUFPO1lBQ1QsRUFBRSxPQUFPZCxPQUFPO2dCQUNkZSxRQUFRZixLQUFLLENBQUMsaUJBQWlCQSxNQUFNZ0IsT0FBTztnQkFDNUMsT0FBTyxNQUFNLHFCQUFxQjtZQUNwQztRQUNGO1FBQ0EsTUFBTUssU0FBUSxFQUFFQSxPQUFPLEVBQUU7WUFDdkIsSUFBSUEsU0FBU25CLE1BQU1HLE9BQU87Z0JBQ3hCLElBQUk7b0JBQ0YsTUFBTWlCLFNBQVMsTUFBTW5ELFlBQ25CRixvREFBSUEsQ0FBQ3NELE9BQU8sQ0FBQzt3QkFBRWxCLE9BQU9nQixRQUFRbkIsSUFBSSxDQUFDRyxLQUFLO29CQUFDLEdBQ3RDbUIsTUFBTSxDQUFDLHFDQUNQQyxJQUFJLElBQ1A7b0JBR0YsSUFBSUgsUUFBUTt3QkFDVkQsUUFBUW5CLElBQUksR0FBRzs0QkFBRSxHQUFHbUIsUUFBUW5CLElBQUk7NEJBQUUsR0FBR29CLE1BQU07d0JBQUM7b0JBQzlDO2dCQUNGLEVBQUUsT0FBT1IsS0FBSztvQkFDWkMsUUFBUWYsS0FBSyxDQUFDLHFCQUFxQmMsSUFBSUUsT0FBTztnQkFDaEQ7WUFDRjtZQUNBLE9BQU9LO1FBQ1Q7SUFDRjtJQUNBQSxTQUFTO1FBQ1BLLFVBQVU7UUFDVkMsUUFBUSxLQUFLLEtBQUssS0FBSztJQUN6QjtJQUNBQyxPQUFPN0Msa0JBQXlCO0FBQ2xDO0FBRUEsTUFBTThDLFVBQVUvRCxnREFBUUEsQ0FBQ2M7QUFFekIsOENBQThDO0FBTTVDO0FBRUYsNkRBQTZEO0FBQ3RELE1BQU1zRCxVQUFVLFNBQVMsQ0FBQyxpQ0FBaUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9nZXQtbWUtYS1jaGFpLy4vc3JjL2FwcC9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdL3JvdXRlLmpzPzIzMmQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5leHRBdXRoIGZyb20gJ25leHQtYXV0aCc7XG5pbXBvcnQgR2l0SHViUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWInO1xuaW1wb3J0IEdvb2dsZVByb3ZpZGVyIGZyb20gJ25leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlJztcbmltcG9ydCBVc2VyIGZyb20gJ0AvbW9kZWxzL1VzZXInO1xuaW1wb3J0IGNvbm5lY3REQiBmcm9tICdAL2RiL2Nvbm5lY3REQic7XG5cbi8vIFRpbWVvdXQgdXRpbGl0eSBmdW5jdGlvblxuY29uc3Qgd2l0aFRpbWVvdXQgPSAocHJvbWlzZSwgbXMpID0+IHtcbiAgcmV0dXJuIFByb21pc2UucmFjZShbXG4gICAgcHJvbWlzZSxcbiAgICBuZXcgUHJvbWlzZSgoXywgcmVqZWN0KSA9PiBcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gcmVqZWN0KG5ldyBFcnJvcihgT3BlcmF0aW9uIHRpbWVkIG91dCBhZnRlciAke21zfW1zYCkpLCBtcylcbiAgICApXG4gIF0pO1xufTtcblxuY29uc3QgYXV0aE9wdGlvbnMgPSB7XG4gIHByb3ZpZGVyczogW1xuICAgIEdpdEh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HSVRIVUJfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb246IHsgcGFyYW1zOiB7IHNjb3BlOiAndXNlcjplbWFpbCcgfSB9LFxuICAgIH0pLFxuICAgIEdvb2dsZVByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5HT09HTEVfQ0xJRU5UX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb246IHtcbiAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgcHJvbXB0OiBcImNvbnNlbnRcIixcbiAgICAgICAgICBhY2Nlc3NfdHlwZTogXCJvZmZsaW5lXCIsXG4gICAgICAgICAgcmVzcG9uc2VfdHlwZTogXCJjb2RlXCIsXG4gICAgICAgICAgc2NvcGU6ICdvcGVuaWQgZW1haWwgcHJvZmlsZScsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pLFxuICBdLFxuICBzZWNyZXQ6IHByb2Nlc3MuZW52Lk5FWFRBVVRIX1NFQ1JFVCxcbiAgcGFnZXM6IHtcbiAgICBzaWduSW46ICcvbG9naW4nLFxuICAgIGVycm9yOiAnL2xvZ2luJyxcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgc2lnbkluKHsgdXNlciwgYWNjb3VudCwgcHJvZmlsZSB9KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBCYXNpYyB2YWxpZGF0aW9uXG4gICAgICAgIGlmICghdXNlcj8uZW1haWwpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJFbWFpbCByZXF1aXJlZCBmb3IgYXV0aGVudGljYXRpb25cIik7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBQcmVwYXJlIHVzZXIgZGF0YSBiZWZvcmUgREIgb3BlcmF0aW9uc1xuICAgICAgICBjb25zdCB1c2VyRGF0YSA9IHtcbiAgICAgICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUgfHwgcHJvZmlsZT8ubmFtZSB8fCAnVXNlcicsXG4gICAgICAgICAgcHJvZmlsZVBpYzogdXNlci5pbWFnZSB8fCBwcm9maWxlPy5waWN0dXJlIHx8ICcnLFxuICAgICAgICAgIHByb3ZpZGVyOiBhY2NvdW50LnByb3ZpZGVyLFxuICAgICAgICAgIHByb3ZpZGVySWQ6IHVzZXIuaWRcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBBdHRlbXB0IERCIGNvbm5lY3Rpb24gd2l0aCB0aW1lb3V0XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgYXdhaXQgd2l0aFRpbWVvdXQoY29ubmVjdERCKCksIDMwMDApO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiREIgY29ubmVjdGlvbiB0aW1lb3V0OlwiLCBlcnIubWVzc2FnZSk7XG4gICAgICAgICAgLy8gQWxsb3cgbG9naW4gd2l0aG91dCBEQiB3cml0ZVxuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gRmlyZS1hbmQtZm9yZ2V0IHVzZXIgdXBzZXJ0XG4gICAgICAgIFVzZXIudXBkYXRlT25lKFxuICAgICAgICAgIHsgZW1haWw6IHVzZXIuZW1haWwgfSxcbiAgICAgICAgICB7ICRzZXRPbkluc2VydDogdXNlckRhdGEgfSxcbiAgICAgICAgICB7IHVwc2VydDogdHJ1ZSB9XG4gICAgICAgICkuY2F0Y2goZXJyID0+IGNvbnNvbGUuZXJyb3IoXCJVc2VyIHVwc2VydCBlcnJvcjpcIiwgZXJyKSk7XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBjb25zb2xlLmVycm9yKFwiU2lnbkluIEVycm9yOlwiLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgcmV0dXJuIHRydWU7IC8vIEFsd2F5cyBhbGxvdyBsb2dpblxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgc2Vzc2lvbih7IHNlc3Npb24gfSkge1xuICAgICAgaWYgKHNlc3Npb24/LnVzZXI/LmVtYWlsKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgY29uc3QgZGJVc2VyID0gYXdhaXQgd2l0aFRpbWVvdXQoXG4gICAgICAgICAgICBVc2VyLmZpbmRPbmUoeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0pXG4gICAgICAgICAgICAgIC5zZWxlY3QoJ3VzZXJuYW1lIG5hbWUgcHJvZmlsZVBpYyBwcm92aWRlcicpXG4gICAgICAgICAgICAgIC5sZWFuKCksXG4gICAgICAgICAgICAyMDAwXG4gICAgICAgICAgKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoZGJVc2VyKSB7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIgPSB7IC4uLnNlc3Npb24udXNlciwgLi4uZGJVc2VyIH07XG4gICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKFwiU2Vzc2lvbiBEQiBlcnJvcjpcIiwgZXJyLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICB9XG4gIH0sXG4gIHNlc3Npb246IHtcbiAgICBzdHJhdGVneTogXCJqd3RcIixcbiAgICBtYXhBZ2U6IDMwICogMjQgKiA2MCAqIDYwLFxuICB9LFxuICBkZWJ1ZzogcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcsXG59O1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuXG4vLyBOZXcgTmV4dC5qcyAxNCB3YXkgdG8gZXhwb3J0IHJvdXRlIGhhbmRsZXJzXG5leHBvcnQgeyBcbiAgaGFuZGxlciBhcyBHRVQsIFxuICBoYW5kbGVyIGFzIFBPU1QsXG4gIGhhbmRsZXIgYXMgT1BUSU9OUyxcbiAgaGFuZGxlciBhcyBIRUFEXG59O1xuXG4vLyBOZXcgd2F5IHRvIHNwZWNpZnkgcnVudGltZSAocmVwbGFjZSB0aGUgb2xkIGNvbmZpZyBleHBvcnQpXG5leHBvcnQgY29uc3QgcnVudGltZSA9ICdub2RlanMnOyAvLyBFeHBsaWNpdGx5IHNldCBOb2RlLmpzIHJ1bnRpbWUiXSwibmFtZXMiOlsiTmV4dEF1dGgiLCJHaXRIdWJQcm92aWRlciIsIkdvb2dsZVByb3ZpZGVyIiwiVXNlciIsImNvbm5lY3REQiIsIndpdGhUaW1lb3V0IiwicHJvbWlzZSIsIm1zIiwiUHJvbWlzZSIsInJhY2UiLCJfIiwicmVqZWN0Iiwic2V0VGltZW91dCIsIkVycm9yIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsInByb2Nlc3MiLCJlbnYiLCJHSVRIVUJfQ0xJRU5UX0lEIiwiY2xpZW50U2VjcmV0IiwiR0lUSFVCX0NMSUVOVF9TRUNSRVQiLCJhdXRob3JpemF0aW9uIiwicGFyYW1zIiwic2NvcGUiLCJHT09HTEVfQ0xJRU5UX0lEIiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJwcm9tcHQiLCJhY2Nlc3NfdHlwZSIsInJlc3BvbnNlX3R5cGUiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJwYWdlcyIsInNpZ25JbiIsImVycm9yIiwiY2FsbGJhY2tzIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiZW1haWwiLCJ1c2VyRGF0YSIsIm5hbWUiLCJwcm9maWxlUGljIiwiaW1hZ2UiLCJwaWN0dXJlIiwicHJvdmlkZXIiLCJwcm92aWRlcklkIiwiaWQiLCJlcnIiLCJjb25zb2xlIiwibWVzc2FnZSIsInVwZGF0ZU9uZSIsIiRzZXRPbkluc2VydCIsInVwc2VydCIsImNhdGNoIiwic2Vzc2lvbiIsImRiVXNlciIsImZpbmRPbmUiLCJzZWxlY3QiLCJsZWFuIiwic3RyYXRlZ3kiLCJtYXhBZ2UiLCJkZWJ1ZyIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIiwiT1BUSU9OUyIsIkhFQUQiLCJydW50aW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/db/connectDB.js":
/*!*****************************!*\
  !*** ./src/db/connectDB.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst MONGODB_URI = process.env.MONGODB_URI;\nif (!MONGODB_URI) {\n    throw new Error(\"Please define MONGODB_URI in .env.local\");\n}\n// Connection caching\nlet cached = global.mongoose || {\n    conn: null,\n    promise: null\n};\nconst DB_OPTIONS = {\n    useNewUrlParser: true,\n    useUnifiedTopology: true,\n    bufferCommands: false,\n    serverSelectionTimeoutMS: 3000,\n    socketTimeoutMS: 10000,\n    maxPoolSize: 1,\n    retryWrites: true,\n    connectTimeoutMS: 3000\n};\nasync function connectDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, DB_OPTIONS).then((mongoose)=>{\n            console.log(\"MongoDB connected\");\n            return mongoose;\n        }).catch((err)=>{\n            console.error(\"MongoDB connection error:\", err.message);\n            cached.promise = null;\n            throw err;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (err) {\n        cached.promise = null;\n        throw err;\n    }\n    return cached.conn;\n}\n// Serverless cleanup\nif (process.env.VERCEL_ENV) {\n    process.on(\"beforeExit\", async ()=>{\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 1) {\n            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().disconnect();\n            cached.conn = null;\n            cached.promise = null;\n        }\n    });\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGIvY29ubmVjdERCLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxjQUFjQyxRQUFRQyxHQUFHLENBQUNGLFdBQVc7QUFFM0MsSUFBSSxDQUFDQSxhQUFhO0lBQ2hCLE1BQU0sSUFBSUcsTUFBTTtBQUNsQjtBQUVBLHFCQUFxQjtBQUNyQixJQUFJQyxTQUFTQyxPQUFPTixRQUFRLElBQUk7SUFBRU8sTUFBTTtJQUFNQyxTQUFTO0FBQUs7QUFFNUQsTUFBTUMsYUFBYTtJQUNqQkMsaUJBQWlCO0lBQ2pCQyxvQkFBb0I7SUFDcEJDLGdCQUFnQjtJQUNoQkMsMEJBQTBCO0lBQzFCQyxpQkFBaUI7SUFDakJDLGFBQWE7SUFDYkMsYUFBYTtJQUNiQyxrQkFBa0I7QUFDcEI7QUFFQSxlQUFlQztJQUNiLElBQUliLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQkgsT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsYUFBYVEsWUFDNUNXLElBQUksQ0FBQ3BCLENBQUFBO1lBQ0pxQixRQUFRQyxHQUFHLENBQUM7WUFDWixPQUFPdEI7UUFDVCxHQUNDdUIsS0FBSyxDQUFDQyxDQUFBQTtZQUNMSCxRQUFRSSxLQUFLLENBQUMsNkJBQTZCRCxJQUFJRSxPQUFPO1lBQ3REckIsT0FBT0csT0FBTyxHQUFHO1lBQ2pCLE1BQU1nQjtRQUNSO0lBQ0o7SUFFQSxJQUFJO1FBQ0ZuQixPQUFPRSxJQUFJLEdBQUcsTUFBTUYsT0FBT0csT0FBTztJQUNwQyxFQUFFLE9BQU9nQixLQUFLO1FBQ1puQixPQUFPRyxPQUFPLEdBQUc7UUFDakIsTUFBTWdCO0lBQ1I7SUFFQSxPQUFPbkIsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLHFCQUFxQjtBQUNyQixJQUFJTCxRQUFRQyxHQUFHLENBQUN3QixVQUFVLEVBQUU7SUFDMUJ6QixRQUFRMEIsRUFBRSxDQUFDLGNBQWM7UUFDdkIsSUFBSTVCLDREQUFtQixDQUFDOEIsVUFBVSxLQUFLLEdBQUc7WUFDeEMsTUFBTTlCLDBEQUFtQjtZQUN6QkssT0FBT0UsSUFBSSxHQUFHO1lBQ2RGLE9BQU9HLE9BQU8sR0FBRztRQUNuQjtJQUNGO0FBQ0Y7QUFFQSxpRUFBZVUsU0FBU0EsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dldC1tZS1hLWNoYWkvLi9zcmMvZGIvY29ubmVjdERCLmpzPzUxYzgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gJ21vbmdvb3NlJztcblxuY29uc3QgTU9OR09EQl9VUkkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSTtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgTU9OR09EQl9VUkkgaW4gLmVudi5sb2NhbCcpO1xufVxuXG4vLyBDb25uZWN0aW9uIGNhY2hpbmdcbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2UgfHwgeyBjb25uOiBudWxsLCBwcm9taXNlOiBudWxsIH07XG5cbmNvbnN0IERCX09QVElPTlMgPSB7XG4gIHVzZU5ld1VybFBhcnNlcjogdHJ1ZSxcbiAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICBidWZmZXJDb21tYW5kczogZmFsc2UsXG4gIHNlcnZlclNlbGVjdGlvblRpbWVvdXRNUzogMzAwMCxcbiAgc29ja2V0VGltZW91dE1TOiAxMDAwMCxcbiAgbWF4UG9vbFNpemU6IDEsIC8vIFNpbmdsZSBjb25uZWN0aW9uIGZvciBzZXJ2ZXJsZXNzXG4gIHJldHJ5V3JpdGVzOiB0cnVlLFxuICBjb25uZWN0VGltZW91dE1TOiAzMDAwLFxufTtcblxuYXN5bmMgZnVuY3Rpb24gY29ubmVjdERCKCkge1xuICBpZiAoY2FjaGVkLmNvbm4pIHtcbiAgICByZXR1cm4gY2FjaGVkLmNvbm47XG4gIH1cblxuICBpZiAoIWNhY2hlZC5wcm9taXNlKSB7XG4gICAgY2FjaGVkLnByb21pc2UgPSBtb25nb29zZS5jb25uZWN0KE1PTkdPREJfVVJJLCBEQl9PUFRJT05TKVxuICAgICAgLnRoZW4obW9uZ29vc2UgPT4ge1xuICAgICAgICBjb25zb2xlLmxvZygnTW9uZ29EQiBjb25uZWN0ZWQnKTtcbiAgICAgICAgcmV0dXJuIG1vbmdvb3NlO1xuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdNb25nb0RCIGNvbm5lY3Rpb24gZXJyb3I6JywgZXJyLm1lc3NhZ2UpO1xuICAgICAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XG4gICAgICAgIHRocm93IGVycjtcbiAgICAgIH0pO1xuICB9XG5cbiAgdHJ5IHtcbiAgICBjYWNoZWQuY29ubiA9IGF3YWl0IGNhY2hlZC5wcm9taXNlO1xuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjYWNoZWQucHJvbWlzZSA9IG51bGw7XG4gICAgdGhyb3cgZXJyO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG4vLyBTZXJ2ZXJsZXNzIGNsZWFudXBcbmlmIChwcm9jZXNzLmVudi5WRVJDRUxfRU5WKSB7XG4gIHByb2Nlc3Mub24oJ2JlZm9yZUV4aXQnLCBhc3luYyAoKSA9PiB7XG4gICAgaWYgKG1vbmdvb3NlLmNvbm5lY3Rpb24ucmVhZHlTdGF0ZSA9PT0gMSkge1xuICAgICAgYXdhaXQgbW9uZ29vc2UuZGlzY29ubmVjdCgpO1xuICAgICAgY2FjaGVkLmNvbm4gPSBudWxsO1xuICAgICAgY2FjaGVkLnByb21pc2UgPSBudWxsO1xuICAgIH1cbiAgfSk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbm5lY3REQjsiXSwibmFtZXMiOlsibW9uZ29vc2UiLCJNT05HT0RCX1VSSSIsInByb2Nlc3MiLCJlbnYiLCJFcnJvciIsImNhY2hlZCIsImdsb2JhbCIsImNvbm4iLCJwcm9taXNlIiwiREJfT1BUSU9OUyIsInVzZU5ld1VybFBhcnNlciIsInVzZVVuaWZpZWRUb3BvbG9neSIsImJ1ZmZlckNvbW1hbmRzIiwic2VydmVyU2VsZWN0aW9uVGltZW91dE1TIiwic29ja2V0VGltZW91dE1TIiwibWF4UG9vbFNpemUiLCJyZXRyeVdyaXRlcyIsImNvbm5lY3RUaW1lb3V0TVMiLCJjb25uZWN0REIiLCJjb25uZWN0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJjYXRjaCIsImVyciIsImVycm9yIiwibWVzc2FnZSIsIlZFUkNFTF9FTlYiLCJvbiIsImNvbm5lY3Rpb24iLCJyZWFkeVN0YXRlIiwiZGlzY29ubmVjdCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/db/connectDB.js\n");

/***/ }),

/***/ "(rsc)/./src/models/User.js":
/*!****************************!*\
  !*** ./src/models/User.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst { Schema } = (mongoose__WEBPACK_IMPORTED_MODULE_0___default());\nconst userSchema = new Schema({\n    providerId: {\n        type: String\n    },\n    email: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    name: {\n        type: String,\n        required: true\n    },\n    username: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    profilePic: {\n        type: String,\n        default: \"\"\n    },\n    coverPic: {\n        type: String,\n        default: \"\"\n    },\n    emailVerified: {\n        type: Date\n    },\n    image: {\n        type: String\n    },\n    provider: {\n        type: String\n    }\n}, {\n    timestamps: true\n});\n// Add indexes for better performance\nuserSchema.index({\n    email: 1\n});\nuserSchema.index({\n    username: 1\n});\nuserSchema.index({\n    providerId: 1\n});\n// Prevent model overwrite in development\nconst User = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).User || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"User\", userSchema);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvbW9kZWxzL1VzZXIuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWdDO0FBQ2hDLE1BQU0sRUFBRUMsTUFBTSxFQUFFLEdBQUdELGlEQUFRQTtBQUUzQixNQUFNRSxhQUFhLElBQUlELE9BQ3JCO0lBQ0VFLFlBQVk7UUFBRUMsTUFBTUM7SUFBTztJQUMzQkMsT0FBTztRQUFFRixNQUFNQztRQUFRRSxVQUFVO1FBQU1DLFFBQVE7SUFBSztJQUNwREMsTUFBTTtRQUFFTCxNQUFNQztRQUFRRSxVQUFVO0lBQUs7SUFDckNHLFVBQVU7UUFBRU4sTUFBTUM7UUFBUUUsVUFBVTtRQUFNQyxRQUFRO0lBQUs7SUFDdkRHLFlBQVk7UUFBRVAsTUFBTUM7UUFBUU8sU0FBUztJQUFHO0lBQ3hDQyxVQUFVO1FBQUVULE1BQU1DO1FBQVFPLFNBQVM7SUFBRztJQUN0Q0UsZUFBZTtRQUFFVixNQUFNVztJQUFLO0lBQzVCQyxPQUFPO1FBQUVaLE1BQU1DO0lBQU87SUFDdEJZLFVBQVU7UUFBRWIsTUFBTUM7SUFBTztBQUMzQixHQUNBO0lBQ0VhLFlBQVk7QUFDZDtBQUdGLHFDQUFxQztBQUNyQ2hCLFdBQVdpQixLQUFLLENBQUM7SUFBRWIsT0FBTztBQUFFO0FBQzVCSixXQUFXaUIsS0FBSyxDQUFDO0lBQUVULFVBQVU7QUFBRTtBQUMvQlIsV0FBV2lCLEtBQUssQ0FBQztJQUFFaEIsWUFBWTtBQUFFO0FBRWpDLHlDQUF5QztBQUN6QyxNQUFNaUIsT0FBT3BCLHdEQUFlLENBQUNvQixJQUFJLElBQUlwQixxREFBYyxDQUFDLFFBQVFFO0FBRTVELGlFQUFla0IsSUFBSUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2dldC1tZS1hLWNoYWkvLi9zcmMvbW9kZWxzL1VzZXIuanM/N2QwYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XG5jb25zdCB7IFNjaGVtYSB9ID0gbW9uZ29vc2U7XG5cbmNvbnN0IHVzZXJTY2hlbWEgPSBuZXcgU2NoZW1hKFxuICB7XG4gICAgcHJvdmlkZXJJZDogeyB0eXBlOiBTdHJpbmcgfSwgLy8gRm9yIE9BdXRoIHByb3ZpZGVyc1xuICAgIGVtYWlsOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuICAgIG5hbWU6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxuICAgIHVzZXJuYW1lOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUsIHVuaXF1ZTogdHJ1ZSB9LFxuICAgIHByb2ZpbGVQaWM6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sIC8vIENoYW5nZWQgZnJvbSBwcm9maWxlcGljIHRvIHByb2ZpbGVQaWMgZm9yIGNvbnNpc3RlbmN5XG4gICAgY292ZXJQaWM6IHsgdHlwZTogU3RyaW5nLCBkZWZhdWx0OiBcIlwiIH0sIC8vIENoYW5nZWQgZnJvbSBjb3ZlcnBpYyB0byBjb3ZlclBpY1xuICAgIGVtYWlsVmVyaWZpZWQ6IHsgdHlwZTogRGF0ZSB9LCAvLyBSZXF1aXJlZCBmb3IgTmV4dEF1dGhcbiAgICBpbWFnZTogeyB0eXBlOiBTdHJpbmcgfSwgLy8gQWx0ZXJuYXRpdmUgZmllbGQgbmFtZSBmb3IgTmV4dEF1dGggY29tcGF0aWJpbGl0eVxuICAgIHByb3ZpZGVyOiB7IHR5cGU6IFN0cmluZyB9LCAvLyBUbyB0cmFjayB3aGljaCBPQXV0aCBwcm92aWRlciB3YXMgdXNlZFxuICB9LFxuICB7XG4gICAgdGltZXN0YW1wczogdHJ1ZSxcbiAgfVxuKTtcblxuLy8gQWRkIGluZGV4ZXMgZm9yIGJldHRlciBwZXJmb3JtYW5jZVxudXNlclNjaGVtYS5pbmRleCh7IGVtYWlsOiAxIH0pO1xudXNlclNjaGVtYS5pbmRleCh7IHVzZXJuYW1lOiAxIH0pO1xudXNlclNjaGVtYS5pbmRleCh7IHByb3ZpZGVySWQ6IDEgfSk7XG5cbi8vIFByZXZlbnQgbW9kZWwgb3ZlcndyaXRlIGluIGRldmVsb3BtZW50XG5jb25zdCBVc2VyID0gbW9uZ29vc2UubW9kZWxzLlVzZXIgfHwgbW9uZ29vc2UubW9kZWwoXCJVc2VyXCIsIHVzZXJTY2hlbWEpO1xuXG5leHBvcnQgZGVmYXVsdCBVc2VyOyJdLCJuYW1lcyI6WyJtb25nb29zZSIsIlNjaGVtYSIsInVzZXJTY2hlbWEiLCJwcm92aWRlcklkIiwidHlwZSIsIlN0cmluZyIsImVtYWlsIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJuYW1lIiwidXNlcm5hbWUiLCJwcm9maWxlUGljIiwiZGVmYXVsdCIsImNvdmVyUGljIiwiZW1haWxWZXJpZmllZCIsIkRhdGUiLCJpbWFnZSIsInByb3ZpZGVyIiwidGltZXN0YW1wcyIsImluZGV4IiwiVXNlciIsIm1vZGVscyIsIm1vZGVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/models/User.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/next-auth","vendor-chunks/@babel","vendor-chunks/jose","vendor-chunks/openid-client","vendor-chunks/uuid","vendor-chunks/oauth","vendor-chunks/@panva","vendor-chunks/yallist","vendor-chunks/preact-render-to-string","vendor-chunks/oidc-token-hash","vendor-chunks/preact","vendor-chunks/cookie"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader.js?name=app%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&page=%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fauth%2F%5B...nextauth%5D%2Froute.js&appDir=F%3A%5CIT%20WORK%5CNext%20JS%5CProject%5CCopy%5CGet-Me-a-Chai-main%5Csrc%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=F%3A%5CIT%20WORK%5CNext%20JS%5CProject%5CCopy%5CGet-Me-a-Chai-main&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();