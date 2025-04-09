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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ handler),\n/* harmony export */   POST: () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"(rsc)/./node_modules/next-auth/index.js\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/github */ \"(rsc)/./node_modules/next-auth/providers/github.js\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/google */ \"(rsc)/./node_modules/next-auth/providers/google.js\");\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/models/User */ \"(rsc)/./src/models/User.js\");\n/* harmony import */ var _db_connectDB__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/db/connectDB */ \"(rsc)/./src/db/connectDB.js\");\n\n\n\n\n\n// Validate critical environment variables\nconst requiredEnvVars = [\n    \"GITHUB_CLIENT_ID\",\n    \"GITHUB_CLIENT_SECRET\",\n    \"GOOGLE_CLIENT_ID\",\n    \"GOOGLE_CLIENT_SECRET\",\n    \"NEXTAUTH_SECRET\",\n    \"NEXTAUTH_URL\"\n];\nfor (const envVar of requiredEnvVars){\n    if (!process.env[envVar]) {\n        throw new Error(`Missing required environment variable: ${envVar}`);\n    }\n}\nconst authOptions = {\n    providers: [\n        (0,next_auth_providers_github__WEBPACK_IMPORTED_MODULE_1__[\"default\"])({\n            clientId: process.env.GITHUB_CLIENT_ID,\n            clientSecret: process.env.GITHUB_CLIENT_SECRET,\n            authorization: {\n                params: {\n                    redirect_uri: `${process.env.NEXTAUTH_URL}/api/auth/callback/github`\n                }\n            }\n        }),\n        (0,next_auth_providers_google__WEBPACK_IMPORTED_MODULE_2__[\"default\"])({\n            clientId: process.env.GOOGLE_CLIENT_ID,\n            clientSecret: process.env.GOOGLE_CLIENT_SECRET\n        })\n    ],\n    secret: process.env.NEXTAUTH_SECRET,\n    pages: {\n        signIn: \"/login\",\n        error: \"/login\"\n    },\n    callbacks: {\n        async signIn ({ user, account, profile }) {\n            try {\n                await (0,_db_connectDB__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                if (!user?.email) {\n                    throw new Error(\"Email required for authentication\");\n                }\n                const existingUser = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                    email: user.email\n                });\n                if (!existingUser) {\n                    const username = account.provider === \"github\" ? profile?.login : user.email.split(\"@\")[0].replace(/[^a-zA-Z0-9_]/g, \"_\");\n                    await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].create({\n                        providerId: user.id,\n                        email: user.email,\n                        name: user.name || profile?.name || profile?.login || \"User\",\n                        username: username.substring(0, 20),\n                        profilePic: user.image || profile?.avatar_url || \"\",\n                        provider: account.provider\n                    });\n                }\n                return true;\n            } catch (error) {\n                console.error(\"Authentication Error:\", error);\n                return `/login?error=${encodeURIComponent(error.message || \"Authentication failed\")}`;\n            }\n        },\n        async session ({ session }) {\n            try {\n                await (0,_db_connectDB__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\n                if (session?.user?.email) {\n                    const dbUser = await _models_User__WEBPACK_IMPORTED_MODULE_3__[\"default\"].findOne({\n                        email: session.user.email\n                    }).select(\"_id username name profilePic\").lean();\n                    if (dbUser) {\n                        session.user.id = dbUser._id.toString();\n                        session.user.username = dbUser.username;\n                        session.user.name = dbUser.name;\n                        session.user.image = dbUser.profilePic;\n                    }\n                }\n                return session;\n            } catch (error) {\n                console.error(\"Session Error:\", error);\n                return session;\n            }\n        },\n        async jwt ({ token, user }) {\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        }\n    }\n};\nconst handler = next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUM7QUFDdUI7QUFDQTtBQUN2QjtBQUNNO0FBRXZDLDBDQUEwQztBQUMxQyxNQUFNSyxrQkFBa0I7SUFDdEI7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0NBQ0Q7QUFFRCxLQUFLLE1BQU1DLFVBQVVELGdCQUFpQjtJQUNwQyxJQUFJLENBQUNFLFFBQVFDLEdBQUcsQ0FBQ0YsT0FBTyxFQUFFO1FBQ3hCLE1BQU0sSUFBSUcsTUFBTSxDQUFDLHVDQUF1QyxFQUFFSCxPQUFPLENBQUM7SUFDcEU7QUFDRjtBQUVBLE1BQU1JLGNBQWM7SUFDbEJDLFdBQVc7UUFDVFYsc0VBQWNBLENBQUM7WUFDYlcsVUFBVUwsUUFBUUMsR0FBRyxDQUFDSyxnQkFBZ0I7WUFDdENDLGNBQWNQLFFBQVFDLEdBQUcsQ0FBQ08sb0JBQW9CO1lBQzlDQyxlQUFlO2dCQUNiQyxRQUFRO29CQUNOQyxjQUFjLENBQUMsRUFBRVgsUUFBUUMsR0FBRyxDQUFDVyxZQUFZLENBQUMseUJBQXlCLENBQUM7Z0JBQ3RFO1lBQ0Y7UUFDRjtRQUNBakIsc0VBQWNBLENBQUM7WUFDYlUsVUFBVUwsUUFBUUMsR0FBRyxDQUFDWSxnQkFBZ0I7WUFDdENOLGNBQWNQLFFBQVFDLEdBQUcsQ0FBQ2Esb0JBQW9CO1FBQ2hEO0tBQ0Q7SUFDREMsUUFBUWYsUUFBUUMsR0FBRyxDQUFDZSxlQUFlO0lBQ25DQyxPQUFPO1FBQ0xDLFFBQVE7UUFDUkMsT0FBTztJQUNUO0lBQ0FDLFdBQVc7UUFDVCxNQUFNRixRQUFPLEVBQUVHLElBQUksRUFBRUMsT0FBTyxFQUFFQyxPQUFPLEVBQUU7WUFDckMsSUFBSTtnQkFDRixNQUFNMUIseURBQVNBO2dCQUVmLElBQUksQ0FBQ3dCLE1BQU1HLE9BQU87b0JBQ2hCLE1BQU0sSUFBSXRCLE1BQU07Z0JBQ2xCO2dCQUVBLE1BQU11QixlQUFlLE1BQU03QixvREFBSUEsQ0FBQzhCLE9BQU8sQ0FBQztvQkFBRUYsT0FBT0gsS0FBS0csS0FBSztnQkFBQztnQkFFNUQsSUFBSSxDQUFDQyxjQUFjO29CQUNqQixNQUFNRSxXQUFXTCxRQUFRTSxRQUFRLEtBQUssV0FDbENMLFNBQVNNLFFBQ1RSLEtBQUtHLEtBQUssQ0FBQ00sS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUNDLE9BQU8sQ0FBQyxrQkFBa0I7b0JBRXZELE1BQU1uQyxvREFBSUEsQ0FBQ29DLE1BQU0sQ0FBQzt3QkFDaEJDLFlBQVlaLEtBQUthLEVBQUU7d0JBQ25CVixPQUFPSCxLQUFLRyxLQUFLO3dCQUNqQlcsTUFBTWQsS0FBS2MsSUFBSSxJQUFJWixTQUFTWSxRQUFRWixTQUFTTSxTQUFTO3dCQUN0REYsVUFBVUEsU0FBU1MsU0FBUyxDQUFDLEdBQUc7d0JBQ2hDQyxZQUFZaEIsS0FBS2lCLEtBQUssSUFBSWYsU0FBU2dCLGNBQWM7d0JBQ2pEWCxVQUFVTixRQUFRTSxRQUFRO29CQUM1QjtnQkFDRjtnQkFFQSxPQUFPO1lBQ1QsRUFBRSxPQUFPVCxPQUFPO2dCQUNkcUIsUUFBUXJCLEtBQUssQ0FBQyx5QkFBeUJBO2dCQUN2QyxPQUFPLENBQUMsYUFBYSxFQUFFc0IsbUJBQW1CdEIsTUFBTXVCLE9BQU8sSUFBSSx5QkFBeUIsQ0FBQztZQUN2RjtRQUNGO1FBQ0EsTUFBTUMsU0FBUSxFQUFFQSxPQUFPLEVBQUU7WUFDdkIsSUFBSTtnQkFDRixNQUFNOUMseURBQVNBO2dCQUNmLElBQUk4QyxTQUFTdEIsTUFBTUcsT0FBTztvQkFDeEIsTUFBTW9CLFNBQVMsTUFBTWhELG9EQUFJQSxDQUFDOEIsT0FBTyxDQUFDO3dCQUFFRixPQUFPbUIsUUFBUXRCLElBQUksQ0FBQ0csS0FBSztvQkFBQyxHQUMzRHFCLE1BQU0sQ0FBQyxnQ0FDUEMsSUFBSTtvQkFFUCxJQUFJRixRQUFRO3dCQUNWRCxRQUFRdEIsSUFBSSxDQUFDYSxFQUFFLEdBQUdVLE9BQU9HLEdBQUcsQ0FBQ0MsUUFBUTt3QkFDckNMLFFBQVF0QixJQUFJLENBQUNNLFFBQVEsR0FBR2lCLE9BQU9qQixRQUFRO3dCQUN2Q2dCLFFBQVF0QixJQUFJLENBQUNjLElBQUksR0FBR1MsT0FBT1QsSUFBSTt3QkFDL0JRLFFBQVF0QixJQUFJLENBQUNpQixLQUFLLEdBQUdNLE9BQU9QLFVBQVU7b0JBQ3hDO2dCQUNGO2dCQUNBLE9BQU9NO1lBQ1QsRUFBRSxPQUFPeEIsT0FBTztnQkFDZHFCLFFBQVFyQixLQUFLLENBQUMsa0JBQWtCQTtnQkFDaEMsT0FBT3dCO1lBQ1Q7UUFDRjtRQUNBLE1BQU1NLEtBQUksRUFBRUMsS0FBSyxFQUFFN0IsSUFBSSxFQUFFO1lBQ3ZCLElBQUlBLE1BQU07Z0JBQ1I2QixNQUFNaEIsRUFBRSxHQUFHYixLQUFLYSxFQUFFO1lBQ3BCO1lBQ0EsT0FBT2dCO1FBQ1Q7SUFDRjtBQUNGO0FBRUEsTUFBTUMsVUFBVTFELGdEQUFRQSxDQUFDVTtBQUNrQiIsInNvdXJjZXMiOlsid2VicGFjazovL2dldC1tZS1hLWNoYWkvLi9zcmMvYXBwL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0vcm91dGUuanM/MjMyZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGggZnJvbSAnbmV4dC1hdXRoJztcbmltcG9ydCBHaXRIdWJQcm92aWRlciBmcm9tICduZXh0LWF1dGgvcHJvdmlkZXJzL2dpdGh1Yic7XG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSAnbmV4dC1hdXRoL3Byb3ZpZGVycy9nb29nbGUnO1xuaW1wb3J0IFVzZXIgZnJvbSAnQC9tb2RlbHMvVXNlcic7XG5pbXBvcnQgY29ubmVjdERCIGZyb20gJ0AvZGIvY29ubmVjdERCJztcblxuLy8gVmFsaWRhdGUgY3JpdGljYWwgZW52aXJvbm1lbnQgdmFyaWFibGVzXG5jb25zdCByZXF1aXJlZEVudlZhcnMgPSBbXG4gICdHSVRIVUJfQ0xJRU5UX0lEJyxcbiAgJ0dJVEhVQl9DTElFTlRfU0VDUkVUJyxcbiAgJ0dPT0dMRV9DTElFTlRfSUQnLFxuICAnR09PR0xFX0NMSUVOVF9TRUNSRVQnLFxuICAnTkVYVEFVVEhfU0VDUkVUJyxcbiAgJ05FWFRBVVRIX1VSTCdcbl07XG5cbmZvciAoY29uc3QgZW52VmFyIG9mIHJlcXVpcmVkRW52VmFycykge1xuICBpZiAoIXByb2Nlc3MuZW52W2VudlZhcl0pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoYE1pc3NpbmcgcmVxdWlyZWQgZW52aXJvbm1lbnQgdmFyaWFibGU6ICR7ZW52VmFyfWApO1xuICB9XG59XG5cbmNvbnN0IGF1dGhPcHRpb25zID0ge1xuICBwcm92aWRlcnM6IFtcbiAgICBHaXRIdWJQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR0lUSFVCX0NMSUVOVF9TRUNSRVQsXG4gICAgICBhdXRob3JpemF0aW9uOiB7XG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHJlZGlyZWN0X3VyaTogYCR7cHJvY2Vzcy5lbnYuTkVYVEFVVEhfVVJMfS9hcGkvYXV0aC9jYWxsYmFjay9naXRodWJgLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KSxcbiAgICBHb29nbGVQcm92aWRlcih7XG4gICAgICBjbGllbnRJZDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX0NMSUVOVF9TRUNSRVQsXG4gICAgfSksXG4gIF0sXG4gIHNlY3JldDogcHJvY2Vzcy5lbnYuTkVYVEFVVEhfU0VDUkVULFxuICBwYWdlczoge1xuICAgIHNpZ25JbjogJy9sb2dpbicsXG4gICAgZXJyb3I6ICcvbG9naW4nLFxuICB9LFxuICBjYWxsYmFja3M6IHtcbiAgICBhc3luYyBzaWduSW4oeyB1c2VyLCBhY2NvdW50LCBwcm9maWxlIH0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xuICAgICAgICBcbiAgICAgICAgaWYgKCF1c2VyPy5lbWFpbCkge1xuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkVtYWlsIHJlcXVpcmVkIGZvciBhdXRoZW50aWNhdGlvblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVXNlciA9IGF3YWl0IFVzZXIuZmluZE9uZSh7IGVtYWlsOiB1c2VyLmVtYWlsIH0pO1xuXG4gICAgICAgIGlmICghZXhpc3RpbmdVc2VyKSB7XG4gICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSBhY2NvdW50LnByb3ZpZGVyID09PSAnZ2l0aHViJyBcbiAgICAgICAgICAgID8gcHJvZmlsZT8ubG9naW4gXG4gICAgICAgICAgICA6IHVzZXIuZW1haWwuc3BsaXQoJ0AnKVswXS5yZXBsYWNlKC9bXmEtekEtWjAtOV9dL2csICdfJyk7XG4gICAgICAgICAgICBcbiAgICAgICAgICBhd2FpdCBVc2VyLmNyZWF0ZSh7XG4gICAgICAgICAgICBwcm92aWRlcklkOiB1c2VyLmlkLFxuICAgICAgICAgICAgZW1haWw6IHVzZXIuZW1haWwsXG4gICAgICAgICAgICBuYW1lOiB1c2VyLm5hbWUgfHwgcHJvZmlsZT8ubmFtZSB8fCBwcm9maWxlPy5sb2dpbiB8fCAnVXNlcicsXG4gICAgICAgICAgICB1c2VybmFtZTogdXNlcm5hbWUuc3Vic3RyaW5nKDAsIDIwKSxcbiAgICAgICAgICAgIHByb2ZpbGVQaWM6IHVzZXIuaW1hZ2UgfHwgcHJvZmlsZT8uYXZhdGFyX3VybCB8fCAnJyxcbiAgICAgICAgICAgIHByb3ZpZGVyOiBhY2NvdW50LnByb3ZpZGVyXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkF1dGhlbnRpY2F0aW9uIEVycm9yOlwiLCBlcnJvcik7XG4gICAgICAgIHJldHVybiBgL2xvZ2luP2Vycm9yPSR7ZW5jb2RlVVJJQ29tcG9uZW50KGVycm9yLm1lc3NhZ2UgfHwgXCJBdXRoZW50aWNhdGlvbiBmYWlsZWRcIil9YDtcbiAgICAgIH1cbiAgICB9LFxuICAgIGFzeW5jIHNlc3Npb24oeyBzZXNzaW9uIH0pIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGNvbm5lY3REQigpO1xuICAgICAgICBpZiAoc2Vzc2lvbj8udXNlcj8uZW1haWwpIHtcbiAgICAgICAgICBjb25zdCBkYlVzZXIgPSBhd2FpdCBVc2VyLmZpbmRPbmUoeyBlbWFpbDogc2Vzc2lvbi51c2VyLmVtYWlsIH0pXG4gICAgICAgICAgICAuc2VsZWN0KCdfaWQgdXNlcm5hbWUgbmFtZSBwcm9maWxlUGljJylcbiAgICAgICAgICAgIC5sZWFuKCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICBpZiAoZGJVc2VyKSB7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIuaWQgPSBkYlVzZXIuX2lkLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIudXNlcm5hbWUgPSBkYlVzZXIudXNlcm5hbWU7XG4gICAgICAgICAgICBzZXNzaW9uLnVzZXIubmFtZSA9IGRiVXNlci5uYW1lO1xuICAgICAgICAgICAgc2Vzc2lvbi51c2VyLmltYWdlID0gZGJVc2VyLnByb2ZpbGVQaWM7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBzZXNzaW9uO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlNlc3Npb24gRXJyb3I6XCIsIGVycm9yKTtcbiAgICAgICAgcmV0dXJuIHNlc3Npb247XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBqd3QoeyB0b2tlbiwgdXNlciB9KSB7XG4gICAgICBpZiAodXNlcikge1xuICAgICAgICB0b2tlbi5pZCA9IHVzZXIuaWQ7XG4gICAgICB9XG4gICAgICByZXR1cm4gdG9rZW47XG4gICAgfVxuICB9XG59O1xuXG5jb25zdCBoYW5kbGVyID0gTmV4dEF1dGgoYXV0aE9wdGlvbnMpO1xuZXhwb3J0IHsgaGFuZGxlciBhcyBHRVQsIGhhbmRsZXIgYXMgUE9TVCB9OyJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdpdEh1YlByb3ZpZGVyIiwiR29vZ2xlUHJvdmlkZXIiLCJVc2VyIiwiY29ubmVjdERCIiwicmVxdWlyZWRFbnZWYXJzIiwiZW52VmFyIiwicHJvY2VzcyIsImVudiIsIkVycm9yIiwiYXV0aE9wdGlvbnMiLCJwcm92aWRlcnMiLCJjbGllbnRJZCIsIkdJVEhVQl9DTElFTlRfSUQiLCJjbGllbnRTZWNyZXQiLCJHSVRIVUJfQ0xJRU5UX1NFQ1JFVCIsImF1dGhvcml6YXRpb24iLCJwYXJhbXMiLCJyZWRpcmVjdF91cmkiLCJORVhUQVVUSF9VUkwiLCJHT09HTEVfQ0xJRU5UX0lEIiwiR09PR0xFX0NMSUVOVF9TRUNSRVQiLCJzZWNyZXQiLCJORVhUQVVUSF9TRUNSRVQiLCJwYWdlcyIsInNpZ25JbiIsImVycm9yIiwiY2FsbGJhY2tzIiwidXNlciIsImFjY291bnQiLCJwcm9maWxlIiwiZW1haWwiLCJleGlzdGluZ1VzZXIiLCJmaW5kT25lIiwidXNlcm5hbWUiLCJwcm92aWRlciIsImxvZ2luIiwic3BsaXQiLCJyZXBsYWNlIiwiY3JlYXRlIiwicHJvdmlkZXJJZCIsImlkIiwibmFtZSIsInN1YnN0cmluZyIsInByb2ZpbGVQaWMiLCJpbWFnZSIsImF2YXRhcl91cmwiLCJjb25zb2xlIiwiZW5jb2RlVVJJQ29tcG9uZW50IiwibWVzc2FnZSIsInNlc3Npb24iLCJkYlVzZXIiLCJzZWxlY3QiLCJsZWFuIiwiX2lkIiwidG9TdHJpbmciLCJqd3QiLCJ0b2tlbiIsImhhbmRsZXIiLCJHRVQiLCJQT1NUIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/auth/[...nextauth]/route.js\n");

/***/ }),

/***/ "(rsc)/./src/db/connectDB.js":
/*!*****************************!*\
  !*** ./src/db/connectDB.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n// db/connectDB.js\n\nconst MONGODB_URI = process.env.MONGODB_URI || \"mongodb://localhost:27017/getmeachai\";\nif (!MONGODB_URI) {\n    throw new Error(\"Please define the MONGODB_URI environment variable\");\n}\nlet cached = global.mongoose;\nif (!cached) {\n    cached = global.mongoose = {\n        conn: null,\n        promise: null\n    };\n}\nasync function connectDB() {\n    if (cached.conn) {\n        return cached.conn;\n    }\n    if (!cached.promise) {\n        const opts = {\n            useNewUrlParser: true,\n            useUnifiedTopology: true,\n            bufferCommands: false\n        };\n        cached.promise = mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(MONGODB_URI, opts).then((mongoose)=>{\n            return mongoose;\n        });\n    }\n    try {\n        cached.conn = await cached.promise;\n    } catch (e) {\n        cached.promise = null;\n        throw e;\n    }\n    return cached.conn;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (connectDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvZGIvY29ubmVjdERCLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLGtCQUFrQjtBQUNjO0FBRWhDLE1BQU1DLGNBQWNDLFFBQVFDLEdBQUcsQ0FBQ0YsV0FBVyxJQUFJO0FBRS9DLElBQUksQ0FBQ0EsYUFBYTtJQUNoQixNQUFNLElBQUlHLE1BQU07QUFDbEI7QUFFQSxJQUFJQyxTQUFTQyxPQUFPTixRQUFRO0FBRTVCLElBQUksQ0FBQ0ssUUFBUTtJQUNYQSxTQUFTQyxPQUFPTixRQUFRLEdBQUc7UUFBRU8sTUFBTTtRQUFNQyxTQUFTO0lBQUs7QUFDekQ7QUFFQSxlQUFlQztJQUNiLElBQUlKLE9BQU9FLElBQUksRUFBRTtRQUNmLE9BQU9GLE9BQU9FLElBQUk7SUFDcEI7SUFFQSxJQUFJLENBQUNGLE9BQU9HLE9BQU8sRUFBRTtRQUNuQixNQUFNRSxPQUFPO1lBQ1hDLGlCQUFpQjtZQUNqQkMsb0JBQW9CO1lBQ3BCQyxnQkFBZ0I7UUFDbEI7UUFFQVIsT0FBT0csT0FBTyxHQUFHUix1REFBZ0IsQ0FBQ0MsYUFBYVMsTUFBTUssSUFBSSxDQUFDLENBQUNmO1lBQ3pELE9BQU9BO1FBQ1Q7SUFDRjtJQUVBLElBQUk7UUFDRkssT0FBT0UsSUFBSSxHQUFHLE1BQU1GLE9BQU9HLE9BQU87SUFDcEMsRUFBRSxPQUFPUSxHQUFHO1FBQ1ZYLE9BQU9HLE9BQU8sR0FBRztRQUNqQixNQUFNUTtJQUNSO0lBRUEsT0FBT1gsT0FBT0UsSUFBSTtBQUNwQjtBQUVBLGlFQUFlRSxTQUFTQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2V0LW1lLWEtY2hhaS8uL3NyYy9kYi9jb25uZWN0REIuanM/NTFjOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBkYi9jb25uZWN0REIuanNcbmltcG9ydCBtb25nb29zZSBmcm9tICdtb25nb29zZSc7XG5cbmNvbnN0IE1PTkdPREJfVVJJID0gcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkgfHwgXCJtb25nb2RiOi8vbG9jYWxob3N0OjI3MDE3L2dldG1lYWNoYWlcIjtcblxuaWYgKCFNT05HT0RCX1VSSSkge1xuICB0aHJvdyBuZXcgRXJyb3IoJ1BsZWFzZSBkZWZpbmUgdGhlIE1PTkdPREJfVVJJIGVudmlyb25tZW50IHZhcmlhYmxlJyk7XG59XG5cbmxldCBjYWNoZWQgPSBnbG9iYWwubW9uZ29vc2U7XG5cbmlmICghY2FjaGVkKSB7XG4gIGNhY2hlZCA9IGdsb2JhbC5tb25nb29zZSA9IHsgY29ubjogbnVsbCwgcHJvbWlzZTogbnVsbCB9O1xufVxuXG5hc3luYyBmdW5jdGlvbiBjb25uZWN0REIoKSB7XG4gIGlmIChjYWNoZWQuY29ubikge1xuICAgIHJldHVybiBjYWNoZWQuY29ubjtcbiAgfVxuXG4gIGlmICghY2FjaGVkLnByb21pc2UpIHtcbiAgICBjb25zdCBvcHRzID0ge1xuICAgICAgdXNlTmV3VXJsUGFyc2VyOiB0cnVlLFxuICAgICAgdXNlVW5pZmllZFRvcG9sb2d5OiB0cnVlLFxuICAgICAgYnVmZmVyQ29tbWFuZHM6IGZhbHNlLFxuICAgIH07XG5cbiAgICBjYWNoZWQucHJvbWlzZSA9IG1vbmdvb3NlLmNvbm5lY3QoTU9OR09EQl9VUkksIG9wdHMpLnRoZW4oKG1vbmdvb3NlKSA9PiB7XG4gICAgICByZXR1cm4gbW9uZ29vc2U7XG4gICAgfSk7XG4gIH1cbiAgXG4gIHRyeSB7XG4gICAgY2FjaGVkLmNvbm4gPSBhd2FpdCBjYWNoZWQucHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGNhY2hlZC5wcm9taXNlID0gbnVsbDtcbiAgICB0aHJvdyBlO1xuICB9XG5cbiAgcmV0dXJuIGNhY2hlZC5jb25uO1xufVxuXG5leHBvcnQgZGVmYXVsdCBjb25uZWN0REI7Il0sIm5hbWVzIjpbIm1vbmdvb3NlIiwiTU9OR09EQl9VUkkiLCJwcm9jZXNzIiwiZW52IiwiRXJyb3IiLCJjYWNoZWQiLCJnbG9iYWwiLCJjb25uIiwicHJvbWlzZSIsImNvbm5lY3REQiIsIm9wdHMiLCJ1c2VOZXdVcmxQYXJzZXIiLCJ1c2VVbmlmaWVkVG9wb2xvZ3kiLCJidWZmZXJDb21tYW5kcyIsImNvbm5lY3QiLCJ0aGVuIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/db/connectDB.js\n");

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