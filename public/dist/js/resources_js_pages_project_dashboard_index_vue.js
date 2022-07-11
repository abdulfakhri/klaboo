"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_project_dashboard_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/dashboard/index.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/dashboard/index.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! timeago.js */ "./node_modules/timeago.js/esm/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return generator._invoke = function (innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; }(innerFn, self, context), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == _typeof(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; this._invoke = function (method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); }; } function maybeInvokeDelegate(delegate, context) { var method = delegate.iterator[context.method]; if (undefined === method) { if (context.delegate = null, "throw" === context.method) { if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel; context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method"); } return ContinueSentinel; } var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (object) { var keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'ProjectDashboard',
  middleware: ['auth'],
  metaInfo: function metaInfo() {
    return {
      title: 'Project Dashboard'
    };
  },
  data: function data() {
    return {
      projects: null,
      bgBubble: 'blue',
      copyText: 'Copy',
      image: '/images/img-placeholder.png',
      networks: [{
        network: 'facebook',
        name: 'Facebook',
        icon: 'fa-brands:facebook-f'
      }, {
        network: 'telegram',
        name: 'Telegram',
        icon: 'fa-brands:telegram-plane'
      }, {
        network: 'twitter',
        name: 'Twitter',
        icon: 'fa-brands:twitter'
      }, {
        network: 'line',
        name: 'Line',
        icon: 'fa-brands:line'
      }, {
        network: 'whatsapp',
        name: 'Whatsapp',
        icon: 'fa-brands:whatsapp'
      } // { network: 'pinterest', name: 'Pinterest', icon: 'fa-brands:pinterest' },
      ]
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_1__.mapGetters)({
    project: 'visit/project',
    user: 'auth/user'
  })), {}, {
    members: function members() {
      if (this.project.project_team) return this.project.project_team.members;
      return [];
    },
    sharing: function sharing() {
      return {
        url: window.location.href,
        title: this.project.title ? this.project.title : 'undefined',
        description: this.project.description
      };
    },
    startSince: function startSince() {
      var date = new Date(this.project.start_time);
      var options = {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      };
      return date.toLocaleString('en-US', options);
    },
    summaries: function summaries() {
      return [{
        type: 'icon',
        icon: 'bi:brush',
        text: "Expertise in ".concat(this.expertiseIn)
      }, {
        type: 'icon',
        icon: 'fa-solid:dollar-sign',
        text: this.rewards
      }, {
        type: 'icon',
        icon: 'ic:round-access-time',
        text: "Posted ".concat(this.getHumanDate(this.project.created_at))
      }, {
        type: 'icon',
        icon: 'ic:baseline-work',
        text: "".concat(this.totalApplicants, " Total Applicants")
      }, {
        type: 'icon',
        icon: 'ant-design:star-filled',
        text: "Joining Project Grant up to ".concat(this.grantMaximumPoints, " Points")
      }, {
        type: 'icon',
        icon: 'ic:round-supervisor-account',
        text: this.maxPerson
      }, {
        type: 'text',
        icon: 'LVL',
        text: this.project.level_applicant
      }, {
        type: 'text',
        icon: 'Pts',
        text: "Require Minimal ".concat(this.minimumPoints, " Points for each Person")
      }];
    },
    grantMaximumPoints: function grantMaximumPoints() {
      if (this.project.level_applicant === 'Easy') return 2000;else if (this.project.level_applicant === 'Medium') return 2500;else if (this.project.level_applicant === 'Hard') return 4000;else if (this.project.level_applicant === 'Expert') return 5000;else return 0;
    },
    minimumPoints: function minimumPoints() {
      if (this.project.level_applicant === 'Easy') return 0;else if (this.project.level_applicant === 'Medium') return 1500;else if (this.project.level_applicant === 'Hard') return 4500;else if (this.project.level_applicant === 'Expert') return 9000;else return 0;
    },
    expertiseIn: function expertiseIn() {
      var expertises = [{
        name: 'UI/UX Designer',
        isRequired: this.project.ui_ux_designer
      }, {
        name: 'Frontend Engineer',
        isRequired: this.project.front_end_engineer
      }, {
        name: 'Backend Engineer',
        isRequired: this.project.back_end_engineer
      }, {
        name: 'Data Expert',
        isRequired: this.project.data_expert
      }].filter(function (expertise) {
        return expertise.isRequired === true;
      }).map(function (expertise) {
        return expertise.name;
      }).join(', ');
      return expertises;
    },
    rewards: function rewards() {
      if (this.project.salary) {
        var paymentType = this.project.payment_type === 'person' ? 'for each person' : 'for whole project';
        return "".concat(new Intl.NumberFormat('id-ID').format(this.project.salary_amount), ",- ").concat(this.project.currency, " ").concat(paymentType, " ").concat(this.project.certificate ? "+ Certificate" : '');
      }

      return 'Certificate';
    },
    maxPerson: function maxPerson() {
      var type = this.project.max_person === 1 ? 'Person' : 'Persons';
      return "Max. ".concat(this.project.max_person, " ").concat(type, " (").concat(this.project.applicant_type, ")");
    },
    totalApplicants: function totalApplicants() {
      return this.project.individual_applicants_count;
    },
    projectReview: function projectReview() {
      return {
        icon: 'whh:website',
        link: this.project.project_review.project_result ? this.project.project_review.project_result : '',
        linkFiltered: this.project.project_review.project_result ? this.filterLink(this.project.project_review.project_result) : ''
      };
    },
    isSelf: function isSelf() {
      if (this.user) return this.user.tagname === this.project.user.tagname;
      return false;
    }
  }),
  mounted: function mounted() {
    this.getDetails();
  },
  methods: {
    getDetails: function getDetails() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('visit/fetchVisitedProject', {
                  id: _this.$route.params.id
                });

              case 2:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    getHumanDate: function getHumanDate(date) {
      return timeago_js__WEBPACK_IMPORTED_MODULE_0__.format(date);
    },
    copyToClipboard: function copyToClipboard() {
      var el = document.createElement('textarea');
      el.value = window.location.href;
      el.setAttribute('readonly', '');
      el.style = {
        position: 'absolute',
        left: '-999.9rem'
      };
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
      this.copyText = 'Copied';
      this.snackbar.open('Project link copied');
    },
    filterLink: function filterLink(link) {
      if (link === '-') return null;
      var filter = link.split('//');
      return filter[filter.length - 1];
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/dashboard/index.vue?vue&type=template&id=6db0ee70&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/dashboard/index.vue?vue&type=template&id=6db0ee70& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "project-details--container"
  }, [_c("div", {
    staticClass: "details--top-container"
  }, [_c("div", [_c("div", {
    staticClass: "project-details--image-container"
  }, [_c("div", {
    staticClass: "project-details--image"
  }, [_c("expandable-image", {
    staticClass: "details__image",
    attrs: {
      src: _vm.project.thumbnail_url,
      "close-on-background-click": true
    }
  })], 1)])]), _vm._v(" "), _vm.$matchMedia.xl ? _c("div", {
    staticClass: "details__top--left"
  }, [_c("div", {
    staticClass: "z-1"
  }, [_c("h1", {
    staticClass: "project-details--h1 text-outline--thin"
  }, [_vm._v("\n          " + _vm._s(_vm.project.title) + "\n        ")]), _vm._v(" "), _c("p", {
    staticClass: "details__ongoing--p text-bold text-italic"
  }, [_vm._v("\n          On Going Project Since " + _vm._s(_vm.startSince) + "\n        ")]), _vm._v(" "), _c("p", {
    staticClass: "details__ongoing--p"
  }, [_vm._v("\n          Please contact your Employer for your further information about the\n          project.\n        ")])])]) : _c("div", {
    staticClass: "mb-2_5"
  }, [_c("h1", {
    staticClass: "project-details--h1"
  }, [_vm._v("\n        " + _vm._s(_vm.project.title) + "\n      ")])]), _vm._v(" "), !_vm.$matchMedia.xl ? _c("div", [_c("div", [_c("h3", {
    staticClass: "project-dashboard__h3"
  }, [_vm._v("\n          Project Participants\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "project-dashboard__list-team"
  }, _vm._l(_vm.members, function (e, index) {
    return _c("div", {
      key: "ProjectParticipant-".concat(index),
      staticClass: "project-dashboard__list-team--item"
    }, [_c("router-link", {
      attrs: {
        to: {
          path: "/@/" + e.member.tagname
        }
      }
    }, [_c("img", {
      staticClass: "project-dashboard__list-team--img",
      attrs: {
        src: e.member.avatar,
        alt: ""
      }
    })]), _vm._v(" "), _c("div", {}, [_c("p", {
      staticClass: "project-dashboard__list-team--name"
    }, [_vm._v("\n                " + _vm._s(e.member.full_name) + "\n              ")]), _vm._v(" "), _c("p", {
      staticClass: "project-dashboard__list-team--expertise"
    }, [_vm._v("\n                " + _vm._s(e.expertise) + "\n              ")])])], 1);
  }), 0), _vm._v(" "), _c("p", {
    staticClass: "details__ongoing--p"
  }, [_vm._v("\n          Please contact your Employer for your further information about the\n          project.\n        ")])])]) : _vm._e(), _vm._v(" "), !_vm.$matchMedia.xl ? _c("h2", {
    directives: [{
      name: "scroll-to",
      rawName: "v-scroll-to",
      value: "#project-details",
      expression: "'#project-details'"
    }],
    staticClass: "project-details--h2",
    attrs: {
      id: "project-details"
    }
  }, [_vm._m(0)]) : _vm._e()]), _vm._v(" "), _vm.$matchMedia.xl ? _c("hr", {
    staticClass: "form--hr"
  }) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "desktop-details__body"
  }, [_c("div", {
    staticClass: "project-details--main-body"
  }, [!_vm.$matchMedia.xl ? _c("div", {
    staticClass: "project-details__lecturer-info"
  }, [_c("div", {
    staticClass: "lecturer-info--left"
  }, [_c("div", {
    staticClass: "lecturer-info--image-container mr-1"
  }, [_c("router-link", {
    staticClass: "lencturer-text-link",
    attrs: {
      to: {
        path: "/@/" + _vm.project.user.tagname
      }
    }
  }, [_c("img", {
    attrs: {
      src: _vm.project.user.avatar,
      alt: "".concat(_vm.project.user.full_name, " Photo Profile")
    }
  })])], 1), _vm._v(" "), _c("div", [_vm._m(1), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.project.user.full_name))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.project.user.identity_number))]), _vm._v(" "), _c("div", [_vm._v(_vm._s(_vm.project.user.expertise))])])]), _vm._v(" "), _vm._m(2)]) : _vm._e(), _vm._v(" "), _c("div", [_vm.$matchMedia.xl ? _c("div", {
    staticClass: "mb-3"
  }, [_c("h3", {
    staticClass: "project-dashboard__h3 text-left"
  }, [_vm._v("\n            Project Participants\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "project-dashboard__list-team flex-start"
  }, _vm._l(_vm.members, function (e, index) {
    return _c("div", {
      key: "ProjectParticipant-".concat(index),
      staticClass: "project-dashboard__list-team--item"
    }, [_c("router-link", {
      attrs: {
        to: {
          path: "/@/" + e.member.tagname
        }
      }
    }, [_c("img", {
      staticClass: "project-dashboard__list-team--img",
      attrs: {
        src: e.member.avatar,
        alt: ""
      }
    })]), _vm._v(" "), _c("div", {}, [_c("p", {
      staticClass: "project-dashboard__list-team--name"
    }, [_vm._v("\n                  " + _vm._s(e.member.full_name) + "\n                ")]), _vm._v(" "), _c("p", {
      staticClass: "project-dashboard__list-team--expertise"
    }, [_vm._v("\n                  " + _vm._s(e.expertise) + "\n                ")])])], 1);
  }), 0)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "project-description"
  }, [_c("h3", [_vm._v("Description")]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.project.description))])]), _vm._v(" "), _c("div", [_c("div", {
    staticClass: "project-requirements"
  }, [_c("h3", [_vm._v("Requirements")]), _vm._v(" "), _c("ul", {
    staticClass: "requirements--container"
  }, _vm._l(_vm.project.requirements, function (req) {
    return _c("li", {
      key: req.id
    }, [_vm._v("\n                " + _vm._s(req.requirement) + "\n              ")]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "project-skills"
  }, [_c("h3", [_vm._v("Skills")]), _vm._v(" "), _c("div", {
    staticClass: "skills--container"
  }, _vm._l(_vm.project.skills, function (skill) {
    return _c("BubbleSkill", {
      key: skill.id,
      attrs: {
        color: _vm.bgBubble,
        name: skill.name
      }
    });
  }), 1)])])]), _vm._v(" "), !_vm.$matchMedia.xl ? _c("div", {
    staticClass: "project-summary"
  }, [_c("h2", {
    staticClass: "summary--h2"
  }, [_vm._v("\n          Summary Project\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "summary--items"
  }, _vm._l(_vm.summaries, function (summary, index) {
    return _c("div", {
      key: "SummaryItem-".concat(index),
      staticClass: "summary--item"
    }, [summary.type === "icon" ? [_c("div", {
      staticClass: "summary-icon"
    }, [_c("span", {
      staticClass: "iconify",
      attrs: {
        "data-icon": summary.icon,
        width: "15",
        height: "15"
      }
    })]), _vm._v("\n              " + _vm._s(summary.text) + "\n            ")] : [_c("div", {
      staticClass: "summary-icon"
    }, [_c("span", {
      staticClass: "summary--text-icon"
    }, [_vm._v(_vm._s(summary.icon))])]), _vm._v("\n              " + _vm._s(summary.text) + "\n            ")]], 2);
  }), 0)]) : _vm._e()]), _vm._v(" "), _c("div", {
    staticClass: "desktop__body--right"
  }, [_vm.$matchMedia.xl ? _c("div", {
    staticClass: "lecturer-info--left"
  }, [_c("div", {
    staticClass: "lecturer-info--image-container mr-1"
  }, [_c("router-link", {
    staticClass: "lencturer-text-link",
    attrs: {
      to: {
        path: "/@/" + _vm.project.user.tagname
      }
    }
  }, [_c("img", {
    attrs: {
      src: _vm.project.user.avatar,
      alt: "".concat(_vm.project.user.full_name, " Photo Profile")
    }
  })])], 1), _vm._v(" "), _c("div", {
    staticClass: "details__poster--info"
  }, [_vm._m(3), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.project.user.full_name))]), _vm._v(" "), _c("p", [_vm._v("NIP. " + _vm._s(_vm.project.user.identity_number))]), _vm._v(" "), _c("p", [_vm._v(_vm._s(_vm.project.user.expertise))])])]) : _vm._e(), _vm._v(" "), _c("router-link", {
    staticClass: "btn btn--blue btn--large",
    attrs: {
      to: {
        name: "message",
        params: {
          tagname: _vm.project.user.tagname
        }
      },
      tag: "button",
      disabled: _vm.isSelf
    }
  }, [_vm._v("\n        Contact Lecturer\n      ")]), _vm._v(" "), _vm.$matchMedia.xl ? _c("div", {
    staticClass: "project-summary"
  }, [_c("div", {
    staticClass: "details__share--container"
  }, [_c("h2", {}, [_vm._v("\n            Share\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "flex-row share__button--container"
  }, [_c("div", {
    staticClass: "details__share--button",
    on: {
      click: _vm.copyToClipboard
    }
  }, [_c("span", {
    staticClass: "iconify details__share--icon",
    attrs: {
      "data-icon": "ic:round-link"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.copyText))])]), _vm._v(" "), _vm._l(_vm.networks, function (network) {
    return _c("ShareNetwork", {
      key: network.network,
      "class": "details__share--button",
      attrs: {
        network: network.network,
        url: _vm.sharing.url,
        title: _vm.sharing.title,
        description: _vm.sharing.description
      }
    }, [_c("span", {
      staticClass: "iconify details__share--icon",
      attrs: {
        "data-icon": network.icon
      }
    }), _vm._v(" "), _c("span", [_vm._v(_vm._s(network.name))])]);
  })], 2)]), _vm._v(" "), _c("div", [_c("h2", {
    staticClass: "summary--h2"
  }, [_vm._v("\n            Summary Project\n          ")]), _vm._v(" "), _c("div", {
    staticClass: "summary--items"
  }, _vm._l(_vm.summaries, function (summary, index) {
    return _c("div", {
      key: "SummaryItem-".concat(index),
      staticClass: "summary--item"
    }, [summary.type === "icon" ? [_c("div", {
      staticClass: "summary-icon"
    }, [_c("span", {
      staticClass: "iconify",
      attrs: {
        "data-icon": summary.icon,
        width: "24",
        height: "24"
      }
    })]), _vm._v("\n                " + _vm._s(summary.text) + "\n              ")] : [_c("div", {
      staticClass: "summary-icon"
    }, [_c("span", {
      staticClass: "summary--text-icon"
    }, [_vm._v(_vm._s(summary.icon))])]), _vm._v("\n                " + _vm._s(summary.text) + "\n              ")]], 2);
  }), 0)])]) : _vm._e()], 1)])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("a", {
    staticClass: "button__project--more",
    attrs: {
      href: "#project-details"
    }
  }, [_c("span", {
    staticClass: "iconify",
    attrs: {
      "data-icon": "zmdi:more"
    }
  }), _vm._v(" "), _c("span", [_vm._v("Project Details")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", [_c("strong", [_vm._v("Posted By")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "lecturer-info--right"
  }, [_c("span", {
    staticClass: "iconify",
    attrs: {
      "data-icon": "dashicons:share",
      width: "30",
      height: "30"
    }
  })]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("p", [_c("strong", [_vm._v("Posted By")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/timeago.js/esm/format.js":
/*!***********************************************!*\
  !*** ./node_modules/timeago.js/esm/format.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "format": () => (/* binding */ format)
/* harmony export */ });
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/date */ "./node_modules/timeago.js/esm/utils/date.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register */ "./node_modules/timeago.js/esm/register.js");


/**
 * format a TDate into string
 * @param date
 * @param locale
 * @param opts
 */
var format = function (date, locale, opts) {
    // diff seconds
    var sec = (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.diffSec)(date, opts && opts.relativeDate);
    // format it with locale
    return (0,_utils_date__WEBPACK_IMPORTED_MODULE_0__.formatDiff)(sec, (0,_register__WEBPACK_IMPORTED_MODULE_1__.getLocale)(locale));
};
//# sourceMappingURL=format.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/index.js":
/*!**********************************************!*\
  !*** ./node_modules/timeago.js/esm/index.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancel": () => (/* reexport safe */ _realtime__WEBPACK_IMPORTED_MODULE_4__.cancel),
/* harmony export */   "format": () => (/* reexport safe */ _format__WEBPACK_IMPORTED_MODULE_3__.format),
/* harmony export */   "register": () => (/* reexport safe */ _register__WEBPACK_IMPORTED_MODULE_2__.register),
/* harmony export */   "render": () => (/* reexport safe */ _realtime__WEBPACK_IMPORTED_MODULE_4__.render)
/* harmony export */ });
/* harmony import */ var _lang_en_US__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lang/en_US */ "./node_modules/timeago.js/esm/lang/en_US.js");
/* harmony import */ var _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lang/zh_CN */ "./node_modules/timeago.js/esm/lang/zh_CN.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./node_modules/timeago.js/esm/register.js");
/* harmony import */ var _format__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./format */ "./node_modules/timeago.js/esm/format.js");
/* harmony import */ var _realtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./realtime */ "./node_modules/timeago.js/esm/realtime.js");
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */



(0,_register__WEBPACK_IMPORTED_MODULE_2__.register)('en_US', _lang_en_US__WEBPACK_IMPORTED_MODULE_0__["default"]);
(0,_register__WEBPACK_IMPORTED_MODULE_2__.register)('zh_CN', _lang_zh_CN__WEBPACK_IMPORTED_MODULE_1__["default"]);



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/en_US.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/en_US.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var EN_US = ['second', 'minute', 'hour', 'day', 'week', 'month', 'year'];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {
    if (idx === 0)
        return ['just now', 'right now'];
    var unit = EN_US[Math.floor(idx / 2)];
    if (diff > 1)
        unit += 's';
    return [diff + " " + unit + " ago", "in " + diff + " " + unit];
}
//# sourceMappingURL=en_US.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/lang/zh_CN.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/lang/zh_CN.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* export default binding */ __WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var ZH_CN = ['秒', '分钟', '小时', '天', '周', '个月', '年'];
/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(diff, idx) {
    if (idx === 0)
        return ['刚刚', '片刻后'];
    var unit = ZH_CN[~~(idx / 2)];
    return [diff + " " + unit + "\u524D", diff + " " + unit + "\u540E"];
}
//# sourceMappingURL=zh_CN.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/realtime.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/realtime.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cancel": () => (/* binding */ cancel),
/* harmony export */   "render": () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var _utils_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/dom */ "./node_modules/timeago.js/esm/utils/dom.js");
/* harmony import */ var _utils_date__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/date */ "./node_modules/timeago.js/esm/utils/date.js");
/* harmony import */ var _register__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register */ "./node_modules/timeago.js/esm/register.js");



// all realtime timer
var TIMER_POOL = {};
/**
 * clear a timer from pool
 * @param tid
 */
var clear = function (tid) {
    clearTimeout(tid);
    delete TIMER_POOL[tid];
};
// run with timer(setTimeout)
function run(node, date, localeFunc, opts) {
    // clear the node's exist timer
    clear((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node));
    var relativeDate = opts.relativeDate, minInterval = opts.minInterval;
    // get diff seconds
    var diff = (0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.diffSec)(date, relativeDate);
    // render
    node.innerText = (0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.formatDiff)(diff, localeFunc);
    var tid = setTimeout(function () {
        run(node, date, localeFunc, opts);
    }, Math.min(Math.max((0,_utils_date__WEBPACK_IMPORTED_MODULE_1__.nextInterval)(diff), minInterval || 1) * 1000, 0x7fffffff));
    // there is no need to save node in object. Just save the key
    TIMER_POOL[tid] = 0;
    (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.setTimerId)(node, tid);
}
/**
 * cancel a timer or all timers
 * @param node - node hosting the time string
 */
function cancel(node) {
    // cancel one
    if (node)
        clear((0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getTimerId)(node));
    // cancel all
    // @ts-ignore
    else
        Object.keys(TIMER_POOL).forEach(clear);
}
/**
 * render a dom realtime
 * @param nodes
 * @param locale
 * @param opts
 */
function render(nodes, locale, opts) {
    // by .length
    // @ts-ignore
    var nodeList = nodes.length ? nodes : [nodes];
    nodeList.forEach(function (node) {
        run(node, (0,_utils_dom__WEBPACK_IMPORTED_MODULE_0__.getDateAttribute)(node), (0,_register__WEBPACK_IMPORTED_MODULE_2__.getLocale)(locale), opts || {});
    });
    return nodeList;
}
//# sourceMappingURL=realtime.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/register.js":
/*!*************************************************!*\
  !*** ./node_modules/timeago.js/esm/register.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getLocale": () => (/* binding */ getLocale),
/* harmony export */   "register": () => (/* binding */ register)
/* harmony export */ });
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
/**
 * All supported locales
 */
var Locales = {};
/**
 * register a locale
 * @param locale
 * @param func
 */
var register = function (locale, func) {
    Locales[locale] = func;
};
/**
 * get a locale, default is en_US
 * @param locale
 * @returns {*}
 */
var getLocale = function (locale) {
    return Locales[locale] || Locales['en_US'];
};
//# sourceMappingURL=register.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/date.js":
/*!***************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/date.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "diffSec": () => (/* binding */ diffSec),
/* harmony export */   "formatDiff": () => (/* binding */ formatDiff),
/* harmony export */   "nextInterval": () => (/* binding */ nextInterval),
/* harmony export */   "toDate": () => (/* binding */ toDate)
/* harmony export */ });
/**
 * Created by hustcc on 18/5/20.
 * Contract: i@hust.cc
 */
var SEC_ARRAY = [
    60,
    60,
    24,
    7,
    365 / 7 / 12,
    12,
];
/**
 * format Date / string / timestamp to timestamp
 * @param input
 * @returns {*}
 */
function toDate(input) {
    if (input instanceof Date)
        return input;
    // @ts-ignore
    if (!isNaN(input) || /^\d+$/.test(input))
        return new Date(parseInt(input));
    input = (input || '')
        // @ts-ignore
        .trim()
        .replace(/\.\d+/, '') // remove milliseconds
        .replace(/-/, '/')
        .replace(/-/, '/')
        .replace(/(\d)T(\d)/, '$1 $2')
        .replace(/Z/, ' UTC') // 2017-2-5T3:57:52Z -> 2017-2-5 3:57:52UTC
        .replace(/([+-]\d\d):?(\d\d)/, ' $1$2'); // -04:00 -> -0400
    return new Date(input);
}
/**
 * format the diff second to *** time ago, with setting locale
 * @param diff
 * @param localeFunc
 * @returns
 */
function formatDiff(diff, localeFunc) {
    /**
     * if locale is not exist, use defaultLocale.
     * if defaultLocale is not exist, use build-in `en`.
     * be sure of no error when locale is not exist.
     *
     * If `time in`, then 1
     * If `time ago`, then 0
     */
    var agoIn = diff < 0 ? 1 : 0;
    /**
     * Get absolute value of number (|diff| is non-negative) value of x
     * |diff| = diff if diff is positive
     * |diff| = -diff if diff is negative
     * |0| = 0
     */
    diff = Math.abs(diff);
    /**
     * Time in seconds
     */
    var totalSec = diff;
    /**
     * Unit of time
     */
    var idx = 0;
    for (; diff >= SEC_ARRAY[idx] && idx < SEC_ARRAY.length; idx++) {
        diff /= SEC_ARRAY[idx];
    }
    /**
     * Math.floor() is alternative of ~~
     *
     * The differences and bugs:
     * Math.floor(3.7) -> 4 but ~~3.7 -> 3
     * Math.floor(1559125440000.6) -> 1559125440000 but ~~1559125440000.6 -> 52311552
     *
     * More information about the performance of algebraic:
     * https://www.youtube.com/watch?v=65-RbBwZQdU
     */
    diff = Math.floor(diff);
    idx *= 2;
    if (diff > (idx === 0 ? 9 : 1))
        idx += 1;
    return localeFunc(diff, idx, totalSec)[agoIn].replace('%s', diff.toString());
}
/**
 * calculate the diff second between date to be formatted an now date.
 * @param date
 * @param relativeDate
 * @returns {number}
 */
function diffSec(date, relativeDate) {
    var relDate = relativeDate ? toDate(relativeDate) : new Date();
    return (+relDate - +toDate(date)) / 1000;
}
/**
 * nextInterval: calculate the next interval time.
 * - diff: the diff sec between now and date to be formatted.
 *
 * What's the meaning?
 * diff = 61 then return 59
 * diff = 3601 (an hour + 1 second), then return 3599
 * make the interval with high performance.
 **/
function nextInterval(diff) {
    var rst = 1, i = 0, d = Math.abs(diff);
    for (; diff >= SEC_ARRAY[i] && i < SEC_ARRAY.length; i++) {
        diff /= SEC_ARRAY[i];
        rst *= SEC_ARRAY[i];
    }
    d = d % rst;
    d = d ? rst - d : rst;
    return Math.ceil(d);
}
//# sourceMappingURL=date.js.map

/***/ }),

/***/ "./node_modules/timeago.js/esm/utils/dom.js":
/*!**************************************************!*\
  !*** ./node_modules/timeago.js/esm/utils/dom.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getDateAttribute": () => (/* binding */ getDateAttribute),
/* harmony export */   "getTimerId": () => (/* binding */ getTimerId),
/* harmony export */   "setTimerId": () => (/* binding */ setTimerId)
/* harmony export */ });
var ATTR_TIMEAGO_TID = 'timeago-id';
/**
 * get the datetime attribute, `datetime` are supported.
 * @param node
 * @returns {*}
 */
function getDateAttribute(node) {
    return node.getAttribute('datetime');
}
/**
 * set the node attribute, native DOM
 * @param node
 * @param timerId
 * @returns {*}
 */
function setTimerId(node, timerId) {
    // @ts-ignore
    node.setAttribute(ATTR_TIMEAGO_TID, timerId);
}
/**
 * get the timer id
 * @param node
 */
function getTimerId(node) {
    return parseInt(node.getAttribute(ATTR_TIMEAGO_TID));
}
//# sourceMappingURL=dom.js.map

/***/ }),

/***/ "./resources/js/pages/project/dashboard/index.vue":
/*!********************************************************!*\
  !*** ./resources/js/pages/project/dashboard/index.vue ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_6db0ee70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=6db0ee70& */ "./resources/js/pages/project/dashboard/index.vue?vue&type=template&id=6db0ee70&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/project/dashboard/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_6db0ee70___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_6db0ee70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/project/dashboard/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/project/dashboard/index.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/pages/project/dashboard/index.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/dashboard/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/project/dashboard/index.vue?vue&type=template&id=6db0ee70&":
/*!***************************************************************************************!*\
  !*** ./resources/js/pages/project/dashboard/index.vue?vue&type=template&id=6db0ee70& ***!
  \***************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6db0ee70___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6db0ee70___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_6db0ee70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=6db0ee70& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/dashboard/index.vue?vue&type=template&id=6db0ee70&");


/***/ })

}]);