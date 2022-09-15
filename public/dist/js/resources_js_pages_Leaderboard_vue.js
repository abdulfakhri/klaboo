"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_Leaderboard_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LeaderboardItem.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LeaderboardItem.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LeaderboardItem',
  props: {
    data: {
      type: Object,
      "default": null
    }
  },
  data: function data() {
    return {};
  },
  computed: {
    points: function points() {
      return (this.data.points / 1000).toFixed(0) + 'K';
    },
    projectCount: function projectCount() {
      return this.data.user.finished_project ? this.data.user.finished_project.length : 0;
    }
  },
  methods: {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardItem.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardItem.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TopBoardItem',
  props: {
    data: {
      type: Object,
      "default": function _default() {
        return {
          user: {
            avatar: '',
            tagname: 'initial'
          }
        };
      }
    },
    leader: {
      type: Object,
      "default": null
    },
    disabled: {
      type: Boolean,
      "default": true
    },
    leaderboard: {
      type: Boolean,
      "default": false
    },
    expertise: {
      type: Number,
      "default": null
    }
  },
  computed: {
    projectCount: function projectCount() {
      return this.data.user.finished_project ? this.data.user.finished_project.length : 0;
    }
  },
  methods: {
    changeExpertise: function changeExpertise() {
      if (this.leaderboard) {
        this.$emit('click', this.expertise);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardList.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardList.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TopBoardItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBoardItem */ "./resources/js/components/TopBoardItem.vue");
// import { mapGetters } from 'vuex'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'TopBoardList',
  components: {
    TopBoardItem: _TopBoardItem__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  props: {
    arrow: {
      type: Boolean,
      "default": true
    },
    differ: {
      type: Boolean,
      "default": true
    },
    showAll: {
      type: Boolean,
      "default": false
    },
    data: {
      type: Object,
      "default": null
    },
    leaderboard: {
      type: Boolean,
      "default": false
    }
  },
  data: function data() {
    return {
      expertise: 0,
      leader: [{
        icon: 'whh:painting',
        title: 'Picasso'
      }, {
        icon: 'bx:bx-code',
        title: 'Front Row'
      }, {
        icon: 'bx:bx-code-curly',
        title: 'Mastermind'
      }, {
        icon: 'bx:bxs-data',
        title: 'Snowden'
      }],
      dummyWidth: '',
      navPos: ''
    };
  },
  computed: {
    isDisabled: function isDisabled() {
      if (this.showAll) {
        return [{
          active: true,
          "class": 'opacity-1'
        }, {
          active: true,
          "class": 'opacity-1'
        }, {
          active: true,
          "class": 'opacity-1'
        }, {
          active: true,
          "class": 'opacity-1'
        }];
      }

      if (!this.differ) {
        return [{
          active: true,
          "class": 'leaderboard-item--active'
        }, {
          active: true,
          "class": 'leaderboard-item--active'
        }, {
          active: true,
          "class": 'leaderboard-item--active'
        }, {
          active: true,
          "class": 'leaderboard-item--active'
        }];
      }

      return [{
        active: this.expertise === 0,
        "class": this.expertise === 0 ? 'leaderboard-item--active' : ''
      }, {
        active: this.expertise === 1,
        "class": this.expertise === 1 ? 'leaderboard-item--active' : ''
      }, {
        active: this.expertise === 2,
        "class": this.expertise === 2 ? 'leaderboard-item--active' : ''
      }, {
        active: this.expertise === 3,
        "class": this.expertise === 3 ? 'leaderboard-item--active' : ''
      }];
    },
    topBoards: function topBoards() {
      return [{
        data: this.data.ui_ux_designer
      }, {
        data: this.data.frontend_engineer
      }, {
        data: this.data.backend_engineer
      }, {
        data: this.data.data_expert
      }];
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.onResize();
    this.$nextTick(function () {
      window.addEventListener('resize', _this.onResize);
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.onResize);
  },
  methods: {
    navigate: function navigate(direction) {
      if (direction === 'left') this.expertise--;else this.expertise++;
      this.$refs.topBoardList.scrollLeft = this.expertise * 235;
    },
    onResize: function onResize() {
      var app = document.querySelector('html');
      this.dummyWidth = (app.scrollWidth - 235) / 2;
      this.navPos = app.scrollWidth / 2 - 50;
    },
    swipeTopLeaderboard: function swipeTopLeaderboard(direction) {
      if (!this.$matchMedia.xl) {
        var expertise = this.expertise;
        if (direction === 'right' && expertise > 0) expertise--;else if (direction === 'left' && expertise < 3) expertise++;
        this.$refs.topBoardList.scrollLeft = expertise * 235; // setTimeout(() => {

        this.expertise = expertise; // }, 160)

        if (this.leaderboard) {
          this.$emit('change', this.expertise);
        }
      }
    },
    changeExpertise: function changeExpertise(e) {
      if (this.leaderboard && this.$matchMedia.xl) {
        this.expertise = e;
        this.$emit('change', e);
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Leaderboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Leaderboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_TopBoardList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/TopBoardList */ "./resources/js/components/TopBoardList.vue");
/* harmony import */ var _components_LeaderboardItem__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/LeaderboardItem */ "./resources/js/components/LeaderboardItem.vue");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'LeaderboardPage',
  components: {
    TopBoardList: _components_TopBoardList__WEBPACK_IMPORTED_MODULE_1__["default"],
    LeaderboardItem: _components_LeaderboardItem__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  metaInfo: function metaInfo() {
    return {
      title: 'Leaderboard',
      meta: [{
        name: 'description',
        content: 'PHive Leaderboard: Shows all the Top Student amongs expertises'
      }]
    };
  },
  data: function data() {
    return {
      loadMore: {
        can: true,
        link: ''
      },
      topLeaderboards: {},
      topBoards: {},
      currentExpertise: {},
      expertise: 'UI/UX Designer'
    };
  },
  computed: {
    title: function title() {
      if (this.expertise === 'UI/UX Designer') return 'Picasso';
      if (this.expertise === 'Frontend Engineer') return 'Front Row';
      if (this.expertise === 'Backend Engineer') return 'Mastermind';else return 'Snowden';
    }
  },
  mounted: function mounted() {
    this.getData();
  },
  methods: {
    getData: function getData() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_0___default().get("/api/leaderboards").then(function (_ref) {
                  var data = _ref.data;
                  _this.topBoards = {
                    ui_ux_designer: data.top_boards.ui_ux_designer.data.shift(),
                    frontend_engineer: data.top_boards.frontend_engineer.data.shift(),
                    backend_engineer: data.top_boards.backend_engineer.data.shift(),
                    data_expert: data.top_boards.data_expert.data.shift()
                  };
                  _this.topLeaderboards = data.top_boards;
                  _this.currentExpertise = _this.topLeaderboards.ui_ux_designer.data;
                  if (!_this.topLeaderboards.ui_ux_designer.next_page_url) _this.loadMore.can = false;else {
                    _this.loadMore.can = true;
                    _this.loadMore.link = _this.topLeaderboards.ui_ux_designer.next_page_url;
                  }
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    doLoadMore: function doLoadMore() {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return axios__WEBPACK_IMPORTED_MODULE_0___default().get(_this2.loadMore.link).then(function (_ref2) {
                  var _this2$topLeaderboard, _this2$topLeaderboard2, _this2$topLeaderboard3, _this2$topLeaderboard4;

                  var data = _ref2.data;
                  _this2.topLeaderboards.ui_ux_designer.next_page_url = data.top_boards.ui_ux_designer.next_page_url;
                  _this2.topLeaderboards.frontend_engineer.next_page_url = data.top_boards.frontend_engineer.next_page_url;
                  _this2.topLeaderboards.backend_engineer.next_page_url = data.top_boards.backend_engineer.next_page_url;
                  _this2.topLeaderboards.data_expert.next_page_url = data.top_boards.data_expert.next_page_url;

                  if (_this2.expertise === 'UI/UX Designer') {
                    if (!_this2.topLeaderboards.ui_ux_designer.next_page_url) _this2.loadMore.can = false;else {
                      _this2.loadMore.can = true;
                      _this2.loadMore.link = _this2.topLeaderboards.ui_ux_designer.next_page_url;
                    }
                  } else if (_this2.expertise === 'Frontend Engineer') {
                    if (!_this2.topLeaderboards.frontend_engineer.next_page_url) _this2.loadMore.can = false;else {
                      _this2.loadMore.can = true;
                      _this2.loadMore.link = _this2.topLeaderboards.frontend_engineer.next_page_url;
                    }
                  } else if (_this2.expertise === 'Backend Engineer') {
                    if (!_this2.topLeaderboards.backend_engineer.next_page_url) _this2.loadMore.can = false;else {
                      _this2.loadMore.can = true;
                      _this2.loadMore.link = _this2.topLeaderboards.backend_engineer.next_page_url;
                    }
                  } else if (_this2.expertise === 'Data Expert') {
                    if (!_this2.topLeaderboards.data_expert.next_page_url) _this2.loadMore.can = false;else {
                      _this2.loadMore.can = true;
                      _this2.loadMore.link = _this2.topLeaderboards.data_expert.next_page_url;
                    }
                  }

                  (_this2$topLeaderboard = _this2.topLeaderboards.ui_ux_designer.data).push.apply(_this2$topLeaderboard, _toConsumableArray(data.top_boards.ui_ux_designer.data));

                  (_this2$topLeaderboard2 = _this2.topLeaderboards.frontend_engineer.data).push.apply(_this2$topLeaderboard2, _toConsumableArray(data.top_boards.frontend_engineer.data));

                  (_this2$topLeaderboard3 = _this2.topLeaderboards.backend_engineer.data).push.apply(_this2$topLeaderboard3, _toConsumableArray(data.top_boards.backend_engineer.data));

                  (_this2$topLeaderboard4 = _this2.topLeaderboards.data_expert.data).push.apply(_this2$topLeaderboard4, _toConsumableArray(data.top_boards.data_expert.data));
                });

              case 2:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    changeExpertise: function changeExpertise(e) {
      if (e === 0) {
        this.currentExpertise = this.topLeaderboards.ui_ux_designer.data;
        this.expertise = this.topLeaderboards.ui_ux_designer.data[0].expertise;
        if (!this.topLeaderboards.ui_ux_designer.next_page_url) this.loadMore.can = false;else {
          this.loadMore.can = true;
          this.loadMore.link = this.topLeaderboards.ui_ux_designer.next_page_url;
        }
      } else if (e === 1) {
        this.currentExpertise = this.topLeaderboards.frontend_engineer.data;
        this.expertise = this.topLeaderboards.frontend_engineer.data[0].expertise;
        if (!this.topLeaderboards.frontend_engineer.next_page_url) this.loadMore.can = false;else {
          this.loadMore.can = true;
          this.loadMore.link = this.topLeaderboards.frontend_engineer.next_page_url;
        }
      } else if (e === 2) {
        this.currentExpertise = this.topLeaderboards.backend_engineer.data;
        this.expertise = this.topLeaderboards.backend_engineer.data[0].expertise;
        if (!this.topLeaderboards.backend_engineer.next_page_url) this.loadMore.can = false;else {
          this.loadMore.can = true;
          this.loadMore.link = this.topLeaderboards.backend_engineer.next_page_url;
        }
      } else if (e === 3) {
        this.currentExpertise = this.topLeaderboards.data_expert.data;
        this.expertise = this.topLeaderboards.data_expert.data[0].expertise;
        if (!this.topLeaderboards.data_expert.next_page_url) this.loadMore.can = false;else {
          this.loadMore.can = true;
          this.loadMore.link = this.topLeaderboards.data_expert.next_page_url;
        }
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LeaderboardItem.vue?vue&type=template&id=7a3e76d6&scoped=true&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LeaderboardItem.vue?vue&type=template&id=7a3e76d6&scoped=true& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "leaderboard-item__container"
  }, [_c("div", {
    staticClass: "leaderboard-item__left-container"
  }, [_c("router-link", {
    attrs: {
      to: {
        name: "@.info",
        params: {
          tagname: _vm.data.user.tagname
        }
      }
    }
  }, [_c("img", {
    staticClass: "leaderboard-item__img",
    attrs: {
      src: _vm.data.user.avatar,
      alt: ""
    }
  })]), _vm._v(" "), _c("div", {
    staticClass: "leaderboard-item__body"
  }, [_c("div", {
    staticClass: "leaderboard-item__body-top"
  }, [_c("div", {
    staticClass: "leaderboard-item__name"
  }, [_vm._v("\n          " + _vm._s(_vm.data.user.full_name) + "\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "leaderboard-item__expertise"
  }, [_vm._v("\n          " + _vm._s(_vm.data.expertise) + "\n        ")])]), _vm._v(" "), _c("div", {
    staticClass: "leaderboard-item__stat"
  }, [_c("span", {
    staticClass: "iconify leaderboard-item__stat-icon",
    attrs: {
      "data-icon": "ic:round-check-circle"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "leaderboard-item__stat-text"
  }, [_vm._v(_vm._s(_vm.projectCount) + " Project Finished")])])])], 1), _vm._v(" "), _c("div", {
    staticClass: "leaderboard-item__points-container"
  }, [_c("span", {
    staticClass: "leaderboard-item__points--number"
  }, [_vm._v(_vm._s(_vm.points))]), _vm._v(" "), _c("span", {
    staticClass: "leaderboard-item__points--text"
  }, [_vm._v("Points")])])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardItem.vue?vue&type=template&id=b80189a2&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardItem.vue?vue&type=template&id=b80189a2& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "topboard-item",
    "class": {
      "topboard-item--home": !_vm.leaderboard
    },
    on: {
      click: _vm.changeExpertise
    }
  }, [_c("div", [_c("div", {
    staticClass: "topboard-item__title--container"
  }, [_c("span", {
    staticClass: "iconify topboard-item__title--icon",
    attrs: {
      "data-icon": _vm.leader.icon
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "topboard-item__title--name"
  }, [_vm._v(_vm._s(_vm.leader.title))])]), _vm._v(" "), _c("div", {
    staticClass: "topboard-item__avatar--container"
  }, [_c("div", {
    staticClass: "topboard-item__avatar--rank"
  }, [_vm._v("\n        #1\n      ")]), _vm._v(" "), _c("img", {
    staticClass: "topboard-item__avatar--img",
    attrs: {
      src: _vm.data.user.avatar,
      alt: "",
      height: "108",
      width: "108"
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "topboard-item__avatar--points"
  }, [_vm._v("\n        " + _vm._s(_vm.data.points) + " Points\n      ")])]), _vm._v(" "), _c("div", {
    staticClass: "topboard-item__identifier"
  }, [_c("div", {
    staticClass: "topboard-item__identifier-name"
  }, [_vm._v("\n        " + _vm._s(_vm.data.user.full_name) + "\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "topboard-item__identifier-expertise"
  }, [_vm._v("\n        " + _vm._s(_vm.data.expertise) + "\n      ")])])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "topboard-item__fact"
  }, [_c("span", {
    staticClass: "iconify topboard-item__fact--icon",
    attrs: {
      "data-icon": "ic:round-check-circle"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "topboard-item__fact--name"
  }, [_vm._v(_vm._s(_vm.projectCount) + " Project Finished")])]), _vm._v(" "), _c("router-link", {
    staticClass: "topboard-item__view-button",
    attrs: {
      to: {
        name: "@.info",
        params: {
          tagname: _vm.data.user.tagname
        }
      },
      tag: "button",
      disabled: _vm.disabled
    }
  }, [_vm._v("\n      View Profile\n    ")])], 1)]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardList.vue?vue&type=template&id=a3f6998c&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardList.vue?vue&type=template&id=a3f6998c& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "topboard__container"
  }, [_c("div", {
    directives: [{
      name: "touch",
      rawName: "v-touch:swipe",
      value: _vm.swipeTopLeaderboard,
      expression: "swipeTopLeaderboard",
      arg: "swipe"
    }],
    ref: "topBoardList",
    staticClass: "topboard-list_container",
    "class": {
      "topboard-list--showAll": _vm.showAll,
      "topboard-list_container--leaderboard": _vm.leaderboard
    }
  }, [_c("div", {
    "class": {
      none: _vm.showAll
    },
    style: {
      "min-width": "".concat(_vm.dummyWidth / 10, "rem")
    }
  }), _vm._v(" "), _vm._l(_vm.topBoards, function (e, index) {
    return _c("TopBoardItem", {
      key: "TopBoardItem-".concat(index),
      "class": _vm.isDisabled[index]["class"],
      attrs: {
        data: e.data,
        leader: _vm.leader[index],
        disabled: !_vm.isDisabled[index].active,
        expertise: index,
        leaderboard: _vm.leaderboard
      },
      on: {
        click: _vm.changeExpertise
      }
    });
  }), _vm._v(" "), _c("div", {
    "class": {
      none: _vm.showAll
    },
    style: {
      "min-width": "".concat(_vm.dummyWidth / 10, "rem")
    }
  })], 2), _vm._v(" "), _vm.arrow ? _c("div", {
    staticClass: "topboard-list__nav--container"
  }, [_c("button", {
    staticClass: "btn--clear topboard-list__nav",
    "class": {
      invisible: _vm.expertise === 0
    },
    style: {
      right: "".concat(_vm.navPos / 10, "rem")
    },
    on: {
      click: function click($event) {
        return _vm.navigate("left");
      }
    }
  }, [_c("span", {
    staticClass: "iconify topboard-list__nav--item",
    attrs: {
      "data-icon": "bi:arrow-left-short"
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn--clear topboard-list__nav",
    "class": {
      invisible: _vm.expertise === 3
    },
    style: {
      left: "".concat(_vm.navPos / 10, "rem")
    },
    on: {
      click: function click($event) {
        return _vm.navigate("right");
      }
    }
  }, [_c("span", {
    staticClass: "iconify topboard-list__nav--item",
    attrs: {
      "data-icon": "bi-arrow-right-short"
    }
  })])]) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Leaderboard.vue?vue&type=template&id=6af0ea04&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Leaderboard.vue?vue&type=template&id=6af0ea04& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {}, [_vm.$matchMedia.xl ? _c("h2", {
    staticClass: "leaderboard__h1"
  }, [_vm._v("\n    Leaderboard\n  ")]) : _vm._e(), _vm._v(" "), _c("TopBoardList", {
    attrs: {
      leaderboard: true,
      arrow: false,
      data: _vm.topBoards
    },
    on: {
      change: _vm.changeExpertise
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "leaderboard-body__container"
  }, [_vm.$matchMedia.xl ? _c("h2", {
    staticClass: "leaderboard__h2"
  }, [_vm._v("\n      " + _vm._s(_vm.title) + "\n    ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "leaderboard-items__container"
  }, _vm._l(_vm.currentExpertise, function (e) {
    return _c("LeaderboardItem", {
      key: "LeaderboardItem-".concat(e.id),
      attrs: {
        data: e
      }
    });
  }), 1), _vm._v(" "), _vm.loadMore.can ? _c("button", {
    staticClass: "btn btn--blue mt-2 mx-auto",
    on: {
      click: _vm.doLoadMore
    }
  }, [_vm._v("\n      Load More\n    ")]) : _vm._e()])], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/components/LeaderboardItem.vue":
/*!*****************************************************!*\
  !*** ./resources/js/components/LeaderboardItem.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _LeaderboardItem_vue_vue_type_template_id_7a3e76d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LeaderboardItem.vue?vue&type=template&id=7a3e76d6&scoped=true& */ "./resources/js/components/LeaderboardItem.vue?vue&type=template&id=7a3e76d6&scoped=true&");
/* harmony import */ var _LeaderboardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./LeaderboardItem.vue?vue&type=script&lang=js& */ "./resources/js/components/LeaderboardItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _LeaderboardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _LeaderboardItem_vue_vue_type_template_id_7a3e76d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _LeaderboardItem_vue_vue_type_template_id_7a3e76d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "7a3e76d6",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/LeaderboardItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TopBoardItem.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/TopBoardItem.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TopBoardItem_vue_vue_type_template_id_b80189a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBoardItem.vue?vue&type=template&id=b80189a2& */ "./resources/js/components/TopBoardItem.vue?vue&type=template&id=b80189a2&");
/* harmony import */ var _TopBoardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBoardItem.vue?vue&type=script&lang=js& */ "./resources/js/components/TopBoardItem.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopBoardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBoardItem_vue_vue_type_template_id_b80189a2___WEBPACK_IMPORTED_MODULE_0__.render,
  _TopBoardItem_vue_vue_type_template_id_b80189a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TopBoardItem.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/TopBoardList.vue":
/*!**************************************************!*\
  !*** ./resources/js/components/TopBoardList.vue ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TopBoardList_vue_vue_type_template_id_a3f6998c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TopBoardList.vue?vue&type=template&id=a3f6998c& */ "./resources/js/components/TopBoardList.vue?vue&type=template&id=a3f6998c&");
/* harmony import */ var _TopBoardList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TopBoardList.vue?vue&type=script&lang=js& */ "./resources/js/components/TopBoardList.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TopBoardList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TopBoardList_vue_vue_type_template_id_a3f6998c___WEBPACK_IMPORTED_MODULE_0__.render,
  _TopBoardList_vue_vue_type_template_id_a3f6998c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/TopBoardList.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/Leaderboard.vue":
/*!********************************************!*\
  !*** ./resources/js/pages/Leaderboard.vue ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _Leaderboard_vue_vue_type_template_id_6af0ea04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Leaderboard.vue?vue&type=template&id=6af0ea04& */ "./resources/js/pages/Leaderboard.vue?vue&type=template&id=6af0ea04&");
/* harmony import */ var _Leaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Leaderboard.vue?vue&type=script&lang=js& */ "./resources/js/pages/Leaderboard.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Leaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Leaderboard_vue_vue_type_template_id_6af0ea04___WEBPACK_IMPORTED_MODULE_0__.render,
  _Leaderboard_vue_vue_type_template_id_6af0ea04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/Leaderboard.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/LeaderboardItem.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/components/LeaderboardItem.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaderboardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LeaderboardItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LeaderboardItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaderboardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TopBoardItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/TopBoardItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBoardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopBoardItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardItem.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBoardItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/TopBoardList.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/components/TopBoardList.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBoardList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopBoardList.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardList.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBoardList_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/Leaderboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************!*\
  !*** ./resources/js/pages/Leaderboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Leaderboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Leaderboard.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaderboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/LeaderboardItem.vue?vue&type=template&id=7a3e76d6&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/components/LeaderboardItem.vue?vue&type=template&id=7a3e76d6&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaderboardItem_vue_vue_type_template_id_7a3e76d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaderboardItem_vue_vue_type_template_id_7a3e76d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_LeaderboardItem_vue_vue_type_template_id_7a3e76d6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./LeaderboardItem.vue?vue&type=template&id=7a3e76d6&scoped=true& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/LeaderboardItem.vue?vue&type=template&id=7a3e76d6&scoped=true&");


/***/ }),

/***/ "./resources/js/components/TopBoardItem.vue?vue&type=template&id=b80189a2&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/TopBoardItem.vue?vue&type=template&id=b80189a2& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBoardItem_vue_vue_type_template_id_b80189a2___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBoardItem_vue_vue_type_template_id_b80189a2___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBoardItem_vue_vue_type_template_id_b80189a2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopBoardItem.vue?vue&type=template&id=b80189a2& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardItem.vue?vue&type=template&id=b80189a2&");


/***/ }),

/***/ "./resources/js/components/TopBoardList.vue?vue&type=template&id=a3f6998c&":
/*!*********************************************************************************!*\
  !*** ./resources/js/components/TopBoardList.vue?vue&type=template&id=a3f6998c& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBoardList_vue_vue_type_template_id_a3f6998c___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBoardList_vue_vue_type_template_id_a3f6998c___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TopBoardList_vue_vue_type_template_id_a3f6998c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./TopBoardList.vue?vue&type=template&id=a3f6998c& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/TopBoardList.vue?vue&type=template&id=a3f6998c&");


/***/ }),

/***/ "./resources/js/pages/Leaderboard.vue?vue&type=template&id=6af0ea04&":
/*!***************************************************************************!*\
  !*** ./resources/js/pages/Leaderboard.vue?vue&type=template&id=6af0ea04& ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaderboard_vue_vue_type_template_id_6af0ea04___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaderboard_vue_vue_type_template_id_6af0ea04___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Leaderboard_vue_vue_type_template_id_6af0ea04___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./Leaderboard.vue?vue&type=template&id=6af0ea04& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/Leaderboard.vue?vue&type=template&id=6af0ea04&");


/***/ })

}]);