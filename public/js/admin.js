/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/admin.js":
/*!*******************************!*\
  !*** ./resources/js/admin.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\resources\\js\\admin.js: Unexpected token (7:0)\n\n\u001b[0m \u001b[90m  5 |\u001b[39m \u001b[90m */\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  6 |\u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m  7 |\u001b[39m \u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<<\u001b[39m\u001b[33m<\u001b[39m \u001b[33mHEAD\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m    |\u001b[39m \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  8 |\u001b[39m require(\u001b[32m'./bootstrap'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m  9 |\u001b[39m \u001b[33m===\u001b[39m\u001b[33m===\u001b[39m\u001b[33m=\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 10 |\u001b[39m  require(\u001b[32m'./bootstrap'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n    at instantiate (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:72:32)\n    at constructor (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:358:12)\n    at Parser.raise (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:3335:19)\n    at Parser.unexpected (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:3373:16)\n    at Parser.parseExprAtom (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:13015:22)\n    at Parser.parseExprSubscripts (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:12540:23)\n    at Parser.parseUpdate (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:12519:21)\n    at Parser.parseMaybeUnary (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:12490:23)\n    at Parser.parseMaybeUnaryOrPrivate (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:12284:61)\n    at Parser.parseExprOps (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:12291:23)\n    at Parser.parseMaybeConditional (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:12261:23)\n    at Parser.parseMaybeAssign (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:12214:21)\n    at Parser.parseExpressionBase (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:12150:23)\n    at C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:12144:39\n    at Parser.allowInAnd (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:14236:16)\n    at Parser.parseExpression (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:12144:17)\n    at Parser.parseStatementContent (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:14676:23)\n    at Parser.parseStatement (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:14533:17)\n    at Parser.parseBlockOrModuleBlockBody (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:15176:25)\n    at Parser.parseBlockBody (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:15167:10)\n    at Parser.parseProgram (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:14451:10)\n    at Parser.parseTopLevel (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:14438:25)\n    at Parser.parse (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:16401:10)\n    at parse (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\parser\\lib\\index.js:16453:38)\n    at parser (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\core\\lib\\parser\\index.js:52:34)\n    at parser.next (<anonymous>)\n    at normalizeFile (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:87:38)\n    at normalizeFile.next (<anonymous>)\n    at run (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\core\\lib\\transformation\\index.js:31:50)\n    at run.next (<anonymous>)\n    at Function.transform (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\@babel\\core\\lib\\transform.js:25:41)\n    at transform.next (<anonymous>)\n    at step (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\gensync\\index.js:261:32)\n    at C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\gensync\\index.js:273:13\n    at async.call.result.err.err (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\gensync\\index.js:223:11)");

/***/ }),

/***/ "./resources/sass/app.scss":
/*!*********************************!*\
  !*** ./resources/sass/app.scss ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./resources/sass/front.scss":
/*!***********************************!*\
  !*** ./resources/sass/front.scss ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/css-loader/index.js):\nModuleBuildError: Module build failed (from ./node_modules/sass-loader/dist/cjs.js):\nSassError: expected \"{\".\n   ╷\n26 │ >>>>>>> 482b0535c1d047182c164bd751b194c3d3d17862\r\n   │                                                 ^\n   ╵\n  C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\resources\\sass\\front.scss 26:49  root stylesheet\n    at C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\webpack\\lib\\NormalModule.js:316:20\n    at C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\loader-runner\\lib\\LoaderRunner.js:367:11\n    at C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\loader-runner\\lib\\LoaderRunner.js:233:18\n    at context.callback (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\loader-runner\\lib\\LoaderRunner.js:111:13)\n    at C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass-loader\\dist\\index.js:73:7\n    at Function.call$2 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:99807:16)\n    at render_closure1.call$2 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:85345:12)\n    at _RootZone.runBinary$3$3 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:29712:18)\n    at _FutureListener.handleError$1 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:28226:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:28533:49)\n    at Object._Future__propagateToListeners (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:3936:77)\n    at _Future._completeError$2 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:28379:9)\n    at _AsyncAwaitCompleter.completeError$2 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:28024:12)\n    at Object._asyncRethrow (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:3712:17)\n    at C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:19922:20\n    at _wrapJsFunctionForAsync_closure.$protected (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:3737:15)\n    at _wrapJsFunctionForAsync_closure.call$2 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:28043:12)\n    at _awaitOnObject_closure0.call$2 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:28037:25)\n    at _RootZone.runBinary$3$3 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:29712:18)\n    at _FutureListener.handleError$1 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:28226:21)\n    at _Future__propagateToListeners_handleError.call$0 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:28533:49)\n    at Object._Future__propagateToListeners (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:3936:77)\n    at _Future._completeError$2 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:28379:9)\n    at _Future__asyncCompleteError_closure.call$0 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:28463:18)\n    at Object._microtaskLoop (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:3992:24)\n    at StaticClosure._startMicrotaskLoop (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:3998:11)\n    at _AsyncRun__scheduleImmediateJsOverride_internalCallback.call$0 (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:27944:21)\n    at invokeClosure (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:1455:26)\n    at Immediate.<anonymous> (C:\\Boolean\\Esercizi\\LARAVEL\\laravel-api\\node_modules\\sass\\sass.dart.js:1476:18)\n    at processImmediate (node:internal/timers:466:21)");

/***/ }),

/***/ 0:
/*!*******************************************************************************************!*\
  !*** multi ./resources/js/admin.js ./resources/sass/app.scss ./resources/sass/front.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! C:\Boolean\Esercizi\LARAVEL\laravel-api\resources\js\admin.js */"./resources/js/admin.js");
__webpack_require__(/*! C:\Boolean\Esercizi\LARAVEL\laravel-api\resources\sass\app.scss */"./resources/sass/app.scss");
module.exports = __webpack_require__(/*! C:\Boolean\Esercizi\LARAVEL\laravel-api\resources\sass\front.scss */"./resources/sass/front.scss");


/***/ })

/******/ });