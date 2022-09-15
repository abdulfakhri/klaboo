(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_project_ProjectEdit_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/ProjectEdit.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/ProjectEdit.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vform */ "./node_modules/vform/dist/vform.common.js");
/* harmony import */ var vform__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vform__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! object-to-formdata */ "./node_modules/object-to-formdata/src/index.js");
/* harmony import */ var object_to_formdata__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(object_to_formdata__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 //import RequirementItem from '~/components/RequirementItem'

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'EditPostedProject',
  layout: 'back',
  middleware: ['auth', 'lecturer'],
  components: {
    RequirementItem: RequirementItem
  },
  metaInfo: function metaInfo() {
    return {
      title: 'Edit Posted Project'
    };
  },
  data: function data() {
    return {
      form: new (vform__WEBPACK_IMPORTED_MODULE_0___default())({
        title: '',
        location: 'Malang, Indonesia',
        level_applicant: 'Easy',
        max_person: 4,
        ui_ux_designer: false,
        front_end_engineer: false,
        back_end_engineer: false,
        data_expert: false,
        applicant_type: 'Individual & Team',
        description: '',
        interest: '',
        min_points: '',
        skills: [],
        requirements: [],
        salary: false,
        currency: 'IDR',
        salary_amount: '',
        payment_type: 'person',
        certificate: false,
        thumbnail: null
      }),
      form2: new (vform__WEBPACK_IMPORTED_MODULE_0___default())({
        file: null
      }),
      salary: false,
      skillLength: 0,
      anotherSkills: '',
      anotherRequirements: ''
    };
  },
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    snackbar: 'notification/snackbar',
    project: 'visit/project'
  })), {}, {
    heading: function heading() {
      if (this.form.status === 'Draft') return 'Post Your Project!';else return 'Edit Posted Project';
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
                _this.form = new (vform__WEBPACK_IMPORTED_MODULE_0___default())(_objectSpread(_objectSpread({}, _this.form), _this.project));

                if (_this.project.thumbnail_url.includes('storage')) {
                  _this.form.thumbnail = _this.project.thumbnail_url;
                }

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    },
    uploadThumbnail: function uploadThumbnail(e) {
      var _this2 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var file;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                file = e.target.files[0];
                _this2.form2.file = file;

                _this2.form2.submit('post', '/api/project/' + _this2.project.project_url + '/thumbnail', {
                  transformRequest: [function (data, headers) {
                    return (0,object_to_formdata__WEBPACK_IMPORTED_MODULE_1__.serialize)(data);
                  }]
                }).then(function (_ref) {
                  var data = _ref.data;
                  _this2.form.thumbnail = data.thumbnail;

                  _this2.snackbar.open(data.message);
                });

              case 3:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2);
      }))();
    },
    deleteThumbnail: function deleteThumbnail() {
      var _this3 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _this3.form2.file = null;

                _this3.form2.submit('delete', '/api/project/' + _this3.project.project_url + '/thumbnail').then(function (_ref2) {
                  var data = _ref2.data;
                  _this3.form.thumbnail = data.thumbnail;

                  _this3.snackbar.open(data.message);
                });

              case 2:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3);
      }))();
    },
    showAddSkill: function showAddSkill() {
      this.$refs.addSkillModal.openModal();
      this.skillLength = this.form.skills.length;
    },
    showAddRequirement: function showAddRequirement() {
      this.$refs.addRequirementModal.openModal();
    },
    addSkill: function addSkill() {
      var oldSkills = this.form.skills.map(function (skill) {
        return skill.name;
      });
      oldSkills.push.apply(oldSkills, _toConsumableArray(this.anotherSkills.split(',').map(function (skill) {
        return skill.trim();
      }).filter(function (skill) {
        return skill !== '';
      })));
      var skillSet = new Set(oldSkills);

      if (skillSet.size > 20) {
        this.snackbar.open('Can\'t add more than 20 skills');
        return;
      }

      var anotherSkills = _toConsumableArray(skillSet).map(function (skill) {
        return {
          name: skill
        };
      });

      this.form.skills = anotherSkills;
      this.$refs.addSkillModal.closeModal();
      this.anotherSkills = '';
    },
    addRequirement: function addRequirement() {
      var _this4 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
        var _this4$form$requireme;

        var requirementSet, anotherRequirements;
        return _regeneratorRuntime().wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                requirementSet = new Set(_this4.anotherRequirements.split('.'));
                anotherRequirements = _toConsumableArray(requirementSet).map(function (requirement) {
                  return {
                    requirement: requirement
                  };
                }).filter(function (e) {
                  return e.requirement !== '';
                });

                (_this4$form$requireme = _this4.form.requirements).push.apply(_this4$form$requireme, _toConsumableArray(anotherRequirements));

                _this4.$refs.addRequirementModal.closeModal();

                _this4.anotherRequirements = '';

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4);
      }))();
    },
    saveProject: function saveProject(status) {
      var _this5 = this;

      return _asyncToGenerator( /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
        return _regeneratorRuntime().wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this5.form.status = status;

                _this5.form.submit('post', '/api/project/' + _this5.project.project_url + '/save').then(function (_ref3) {
                  var data = _ref3.data;

                  _this5.snackbar.open(data.message);

                  _this5.$router.push({
                    name: 'projectbox'
                  });
                })["catch"](function (e) {
                  _this5.snackbar.open(e.response.data.message);
                });

              case 2:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5);
      }))();
    },
    deleteSkill: function deleteSkill(e) {
      var abc = this.form.skills.filter(function (a) {
        return a.name !== e;
      });
      this.form.skills = abc;
    },
    deleteRequirement: function deleteRequirement(index) {
      this.form.requirements.splice(index, 1);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/ProjectEdit.vue?vue&type=template&id=d217c358&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/ProjectEdit.vue?vue&type=template&id=d217c358& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "edit-profile__container"
  }, [_c("TopImage", {
    attrs: {
      type: 2
    }
  }), _vm._v(" "), _c("h2", {
    staticClass: "post__h1"
  }, [_vm._v("\n    " + _vm._s(_vm.heading) + "\n  ")]), _vm._v(" "), _c("div", {
    staticClass: "form-group__container mb-2_5"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n      Project Thumbnail\n    ")]), _vm._v(" "), _c("div", {
    staticClass: "form-avatar-group__container"
  }, [_c("img", {
    staticClass: "edit-profile--img",
    attrs: {
      src: _vm.form.thumbnail ? _vm.form.thumbnail : "/images/post-placeholder-img.png",
      alt: ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "form__file-container"
  }, [_c("div", [_c("label", {
    staticClass: "btn btn--blue",
    attrs: {
      "for": "form2.thumbnail"
    }
  }, [_vm._v("Upload Photo")]), _vm._v(" "), _c("input", {
    staticClass: "form__input-file",
    attrs: {
      id: "form2.thumbnail",
      name: "form2.thumbnail",
      type: "file"
    },
    on: {
      change: _vm.uploadThumbnail
    }
  })]), _vm._v(" "), _c("button", {
    staticClass: "btn btn--grey",
    on: {
      click: _vm.deleteThumbnail
    }
  }, [_vm._v("\n          Delete\n        ")])])]), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form2,
      field: "file"
    }
  }), _vm._v(" "), _c("p", {
    staticClass: "form-group__input-info mb-2"
  }, [_vm._v("\n      Max thumbnail size is 516KB\n    ")])], 1), _vm._v(" "), _c("form", {
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        "";
      }
    }
  }, [_c("div", {}, [_c("div", {
    staticClass: "form-group__container"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n          Project Title\n        ")]), _vm._v(" "), _c("div", {}, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.title,
      expression: "form.title"
    }],
    staticClass: "form-group__input-text",
    attrs: {
      placeholder: "Type your project title"
    },
    domProps: {
      value: _vm.form.title
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "title", $event.target.value);
      }
    }
  })]), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "title"
    }
  })], 1), _vm._v(" "), _c("div", {
    staticClass: "form-group__container"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n          Location\n        ")]), _vm._v(" "), _c("div", {}, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.location,
      expression: "form.location"
    }],
    staticClass: "form-group__input-text",
    attrs: {
      placeholder: "Type your location"
    },
    domProps: {
      value: _vm.form.location
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "location", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group__container"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n          Expertise Role\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "checkbox-group"
  }, [_c("label", {
    staticClass: "checkbox-container checkbox-container--post"
  }, [_vm._v("UI / UX Designer\n            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.ui_ux_designer,
      expression: "form.ui_ux_designer"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.ui_ux_designer) ? _vm._i(_vm.form.ui_ux_designer, null) > -1 : _vm.form.ui_ux_designer
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.ui_ux_designer,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "ui_ux_designer", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "ui_ux_designer", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "ui_ux_designer", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "checkbox-checkmark"
  })]), _vm._v(" "), _c("label", {
    staticClass: "checkbox-container checkbox-container--post"
  }, [_vm._v("Frontend Engineer\n            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.front_end_engineer,
      expression: "form.front_end_engineer"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.front_end_engineer) ? _vm._i(_vm.form.front_end_engineer, null) > -1 : _vm.form.front_end_engineer
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.front_end_engineer,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "front_end_engineer", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "front_end_engineer", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "front_end_engineer", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "checkbox-checkmark"
  })]), _vm._v(" "), _c("label", {
    staticClass: "checkbox-container checkbox-container--post"
  }, [_vm._v("Backend Engineer\n            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.back_end_engineer,
      expression: "form.back_end_engineer"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.back_end_engineer) ? _vm._i(_vm.form.back_end_engineer, null) > -1 : _vm.form.back_end_engineer
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.back_end_engineer,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "back_end_engineer", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "back_end_engineer", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "back_end_engineer", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "checkbox-checkmark"
  })]), _vm._v(" "), _c("label", {
    staticClass: "checkbox-container checkbox-container--post"
  }, [_vm._v("Data Expert\n            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.data_expert,
      expression: "form.data_expert"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.data_expert) ? _vm._i(_vm.form.data_expert, null) > -1 : _vm.form.data_expert
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.data_expert,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "data_expert", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "data_expert", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "data_expert", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "checkbox-checkmark"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group__container"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n          Quota\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "select"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.max_person,
      expression: "form.max_person"
    }],
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.form, "max_person", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "99"
    }
  }, [_vm._v("\n              Not Specified\n            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "1"
    }
  }, [_vm._v("\n              1 Person\n            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "2"
    }
  }, [_vm._v("\n              2 Persons\n            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "3"
    }
  }, [_vm._v("\n              3 Persons\n            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "4"
    }
  }, [_vm._v("\n              4 Persons\n            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "5"
    }
  }, [_vm._v("\n              5 Persons\n            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "6"
    }
  }, [_vm._v("\n              6 Persons\n            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "7"
    }
  }, [_vm._v("\n              7 Persons\n            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "8"
    }
  }, [_vm._v("\n              8 Persons\n            ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "9"
    }
  }, [_vm._v("\n              9 Persons\n            ")])]), _vm._v(" "), _c("span", {
    staticClass: "focus"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "form-group__container"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n        Applicant Type\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "select"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.applicant_type,
      expression: "form.applicant_type"
    }],
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.form, "applicant_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "Individual"
    }
  }, [_vm._v("\n            Individual\n          ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Team"
    }
  }, [_vm._v("\n            Team\n          ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "Individual & Team"
    }
  }, [_vm._v("\n            Individual & Team\n          ")])]), _vm._v(" "), _c("span", {
    staticClass: "focus"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group__container"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n        Project Difficulty\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "select"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.level_applicant,
      expression: "form.level_applicant"
    }],
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.form, "level_applicant", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", [_vm._v("\n            Easy\n          ")]), _vm._v(" "), _c("option", [_vm._v("\n            Medium\n          ")]), _vm._v(" "), _c("option", [_vm._v("\n            Hard\n          ")]), _vm._v(" "), _c("option", [_vm._v("\n            Expert\n          ")])]), _vm._v(" "), _c("span", {
    staticClass: "focus"
  })])]), _vm._v(" "), _c("hr", {
    staticClass: "form--hr"
  }), _vm._v(" "), _c("div", {
    staticClass: "form-group__container"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n        Project Description\n      ")]), _vm._v(" "), _c("div", {}, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.description,
      expression: "form.description"
    }],
    staticClass: "form-group__input-textarea",
    attrs: {
      placeholder: "Max. 500 words",
      rows: "5"
    },
    domProps: {
      value: _vm.form.description
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "description", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group__container mb-3"
  }, [_vm._m(0), _vm._v(" "), _c("div", {}, [_vm.form.requirements && _vm.form.requirements.length === 0 ? _c("p", {
    staticClass: "info__p"
  }, [_vm._v("\n          Let's add some detailed requirements\n        ")]) : _vm._e(), _vm._v(" "), _c("ul", {
    staticClass: "post__requirements"
  }, _vm._l(_vm.form.requirements, function (requirement, index) {
    return _c("RequirementItem", {
      key: "requirements-".concat(index),
      attrs: {
        data: requirement,
        deletable: true,
        index: index
      },
      on: {
        click: _vm.deleteRequirement
      }
    });
  }), 1), _vm._v(" "), _c("div", {
    staticClass: "flex-center unselectable post__add-skill pointer",
    on: {
      click: _vm.showAddRequirement
    }
  }, [_c("span", {
    staticClass: "iconify button__add-skill--icon mr-0_5",
    attrs: {
      "data-icon": "ic:round-add-circle"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "button__add-skill--text"
  }, [_vm._v("Add Requirements")])]), _vm._v(" "), _c("Modal", {
    ref: "addRequirementModal",
    attrs: {
      type: "medium"
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("h4", {
          staticClass: "post__modal--h4 my-0"
        }, [_vm._v("\n              Add Requirements\n            ")])];
      },
      proxy: true
    }, {
      key: "body",
      fn: function fn() {
        return [_c("div", [_c("hr", {
          staticClass: "my-0 mb-2_5"
        }), _vm._v(" "), _c("div", {}, [_c("textarea", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.anotherRequirements,
            expression: "anotherRequirements"
          }],
          staticClass: "form-group__input-textarea",
          attrs: {
            placeholder: "Max. 500 words",
            rows: "5"
          },
          domProps: {
            value: _vm.anotherRequirements
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.anotherRequirements = $event.target.value;
            }
          }
        }), _vm._v(" "), _c("p", {
          staticClass: "info__p"
        }, [_vm._v("\n                  You can add multiple requirements separated by dot ("), _c("span", {
          staticClass: "iconify",
          attrs: {
            "data-icon": "carbon:dot-mark",
            width: "12",
            height: "12"
          }
        }), _vm._v(")\n                ")])])])];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_c("div", {
          staticClass: "btn btn--blue ml-auto",
          on: {
            click: _vm.addRequirement
          }
        }, [_vm._v("\n              Add Requirements\n            ")])];
      },
      proxy: true
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group__container"
  }, [_c("div", {
    staticClass: "flex-row space-between"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n          Skills Required\n        ")]), _vm._v(" "), _c("div", {
    staticClass: "flex-row unselectable post__add-skill pointer",
    on: {
      click: _vm.showAddSkill
    }
  }, [_c("span", {
    staticClass: "iconify button__add-skill--icon mr-0_5",
    attrs: {
      "data-icon": "ic:round-add-circle"
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "button__add-skill--text"
  }, [_vm._v("Add Skills")])])]), _vm._v(" "), _c("div", {}, [_c("div", {
    staticClass: "form-group__input-select info__skill-container"
  }, [_vm.form.skills.length === 0 ? _c("p", {
    staticClass: "info__p"
  }, [_vm._v("\n            Let's add your project required skills\n          ")]) : _vm._e(), _vm._v(" "), _vm._l(_vm.form.skills, function (skill) {
    return _c("BubbleSkill", {
      key: "skill-".concat(skill.name),
      attrs: {
        color: "blue",
        name: skill.name,
        deletable: true
      },
      on: {
        click: _vm.deleteSkill
      }
    });
  })], 2), _vm._v(" "), _c("Modal", {
    ref: "addSkillModal",
    attrs: {
      type: "small"
    },
    scopedSlots: _vm._u([{
      key: "header",
      fn: function fn() {
        return [_c("div", [_c("h4", {
          staticClass: "post__modal--h4 my-0"
        }, [_vm._v("\n                Add Skills\n              ")])])];
      },
      proxy: true
    }, {
      key: "body",
      fn: function fn() {
        return [_c("div", [_c("hr", {
          staticClass: "my-0 mb-2_5"
        }), _vm._v(" "), _c("div", [_c("div", {}, [_c("input", {
          directives: [{
            name: "model",
            rawName: "v-model",
            value: _vm.anotherSkills,
            expression: "anotherSkills"
          }],
          staticClass: "form-group__input-text mb-0_5",
          attrs: {
            placeholder: "e.g., Communication, Laravel, VueJS"
          },
          domProps: {
            value: _vm.anotherSkills
          },
          on: {
            input: function input($event) {
              if ($event.target.composing) return;
              _vm.anotherSkills = $event.target.value;
            }
          }
        }), _vm._v(" "), _c("p", {
          staticClass: "info__p"
        }, [_vm._v("\n                    Add multiple Skills separated by comma ("), _c("span", {
          staticClass: "iconify",
          attrs: {
            "data-icon": "mdi:comma",
            width: "12",
            height: "12"
          }
        }), _vm._v(")\n                  ")]), _vm._v(" "), _c("p", {
          staticClass: "info__p"
        }, [_vm._v("\n                    Can add " + _vm._s(20 - _vm.skillLength) + " more skills\n                  ")])])])])];
      },
      proxy: true
    }, {
      key: "footer",
      fn: function fn() {
        return [_c("div", {
          staticClass: "btn btn--blue ml-auto",
          on: {
            click: _vm.addSkill
          }
        }, [_vm._v("\n              Add Skills\n            ")])];
      },
      proxy: true
    }])
  })], 1)]), _vm._v(" "), _c("div", {
    staticClass: "form-group__container"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n        Rewards\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "checkbox-group"
  }, [_c("div", {}, [_c("label", {
    staticClass: "checkbox-container checkbox-container--post"
  }, [_vm._v("Salary\n            "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.salary,
      expression: "form.salary"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.salary) ? _vm._i(_vm.form.salary, null) > -1 : _vm.form.salary
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.salary,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "salary", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "salary", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "salary", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "checkbox-checkmark"
  })]), _vm._v(" "), _c("div", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.form.salary,
      expression: "form.salary"
    }],
    staticClass: "post__form--parent post-salary__group"
  }, [_c("div", {
    staticClass: "form-group__container"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n                Currency\n              ")]), _vm._v(" "), _c("div", {
    staticClass: "select"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.currency,
      expression: "form.currency"
    }],
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.form, "currency", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "IDR"
    }
  }, [_vm._v("\n                    IDR\n                  ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "USD"
    }
  }, [_vm._v("\n                    USD\n                  ")])]), _vm._v(" "), _c("span", {
    staticClass: "focus"
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group__container"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n                Amount\n              ")]), _vm._v(" "), _c("div", {}, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.salary_amount,
      expression: "form.salary_amount"
    }],
    staticClass: "form-group__input-text",
    attrs: {
      placeholder: "Give your best offer",
      type: "number",
      min: "0",
      step: "500"
    },
    domProps: {
      value: _vm.form.salary_amount
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.form, "salary_amount", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "form-group__container"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n                Payment Type\n              ")]), _vm._v(" "), _c("div", {
    staticClass: "select"
  }, [_c("select", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.payment_type,
      expression: "form.payment_type"
    }],
    on: {
      change: function change($event) {
        var $$selectedVal = Array.prototype.filter.call($event.target.options, function (o) {
          return o.selected;
        }).map(function (o) {
          var val = "_value" in o ? o._value : o.value;
          return val;
        });

        _vm.$set(_vm.form, "payment_type", $event.target.multiple ? $$selectedVal : $$selectedVal[0]);
      }
    }
  }, [_c("option", {
    attrs: {
      value: "person"
    }
  }, [_vm._v("\n                    For Each Person\n                  ")]), _vm._v(" "), _c("option", {
    attrs: {
      value: "project"
    }
  }, [_vm._v("\n                    For Whole Project\n                  ")])]), _vm._v(" "), _c("span", {
    staticClass: "focus"
  })])])]), _vm._v(" "), _c("has-error", {
    attrs: {
      form: _vm.form,
      field: "salary_amount"
    }
  })], 1), _vm._v(" "), _c("label", {
    staticClass: "checkbox-container checkbox-container--post"
  }, [_vm._v("Certificate\n          "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.form.certificate,
      expression: "form.certificate"
    }],
    attrs: {
      type: "checkbox"
    },
    domProps: {
      checked: Array.isArray(_vm.form.certificate) ? _vm._i(_vm.form.certificate, null) > -1 : _vm.form.certificate
    },
    on: {
      change: function change($event) {
        var $$a = _vm.form.certificate,
            $$el = $event.target,
            $$c = $$el.checked ? true : false;

        if (Array.isArray($$a)) {
          var $$v = null,
              $$i = _vm._i($$a, $$v);

          if ($$el.checked) {
            $$i < 0 && _vm.$set(_vm.form, "certificate", $$a.concat([$$v]));
          } else {
            $$i > -1 && _vm.$set(_vm.form, "certificate", $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
          }
        } else {
          _vm.$set(_vm.form, "certificate", $$c);
        }
      }
    }
  }), _vm._v(" "), _c("span", {
    staticClass: "checkbox-checkmark"
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "mt-5"
  }, [_vm.form.status === "Draft" ? _c("div", {
    staticClass: "btn--group"
  }, [_c("button", {
    staticClass: "btn btn--large btn--grey mb-1_5",
    on: {
      click: function click($event) {
        return _vm.saveProject("Draft");
      }
    }
  }, [_vm._v("\n          Save as Draft\n        ")]), _vm._v(" "), _c("button", {
    staticClass: "btn btn--large btn--blue ml-auto",
    on: {
      click: function click($event) {
        return _vm.saveProject("Publish");
      }
    }
  }, [_vm._v("\n          Post Project\n        ")])]) : _c("div", {
    staticClass: "btn btn--large btn--blue ml-auto",
    on: {
      click: function click($event) {
        return _vm.saveProject("Save Changes");
      }
    }
  }, [_vm._v("\n        Save Changes\n      ")])])])], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "flex-row space-between"
  }, [_c("h4", {
    staticClass: "form-group__input-name"
  }, [_vm._v("\n          Requirements\n        ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/object-to-formdata/src/index.js":
/*!******************************************************!*\
  !*** ./node_modules/object-to-formdata/src/index.js ***!
  \******************************************************/
/***/ ((module) => {

function isUndefined(value) {
  return value === undefined;
}

function isNull(value) {
  return value === null;
}

function isBoolean(value) {
  return typeof value === 'boolean';
}

function isObject(value) {
  return value === Object(value);
}

function isArray(value) {
  return Array.isArray(value);
}

function isDate(value) {
  return value instanceof Date;
}

function isBlob(value, isReactNative) {
  return isReactNative
    ? isObject(value) && !isUndefined(value.uri)
    : isObject(value) &&
        typeof value.size === 'number' &&
        typeof value.type === 'string' &&
        typeof value.slice === 'function';
}

function isFile(value, isReactNative) {
  return (
    isBlob(value, isReactNative) &&
    typeof value.name === 'string' &&
    (isObject(value.lastModifiedDate) || typeof value.lastModified === 'number')
  );
}

function initCfg(value) {
  return isUndefined(value) ? false : value;
}

function serialize(obj, cfg, fd, pre) {
  cfg = cfg || {};
  fd = fd || new FormData();

  cfg.indices = initCfg(cfg.indices);
  cfg.nullsAsUndefineds = initCfg(cfg.nullsAsUndefineds);
  cfg.booleansAsIntegers = initCfg(cfg.booleansAsIntegers);
  cfg.allowEmptyArrays = initCfg(cfg.allowEmptyArrays);
  cfg.noFilesWithArrayNotation = initCfg(cfg.noFilesWithArrayNotation);
  cfg.dotsForObjectNotation = initCfg(cfg.dotsForObjectNotation);

  const isReactNative = typeof fd.getParts === 'function';

  if (isUndefined(obj)) {
    return fd;
  } else if (isNull(obj)) {
    if (!cfg.nullsAsUndefineds) {
      fd.append(pre, '');
    }
  } else if (isBoolean(obj)) {
    if (cfg.booleansAsIntegers) {
      fd.append(pre, obj ? 1 : 0);
    } else {
      fd.append(pre, obj);
    }
  } else if (isArray(obj)) {
    if (obj.length) {
      obj.forEach((value, index) => {
        let key = pre + '[' + (cfg.indices ? index : '') + ']';

        if (cfg.noFilesWithArrayNotation && isFile(value, isReactNative)) {
          key = pre;
        }

        serialize(value, cfg, fd, key);
      });
    } else if (cfg.allowEmptyArrays) {
      fd.append(pre + '[]', '');
    }
  } else if (isDate(obj)) {
    fd.append(pre, obj.toISOString());
  } else if (isObject(obj) && !isBlob(obj, isReactNative)) {
    Object.keys(obj).forEach((prop) => {
      const value = obj[prop];

      if (isArray(value)) {
        while (prop.length > 2 && prop.lastIndexOf('[]') === prop.length - 2) {
          prop = prop.substring(0, prop.length - 2);
        }
      }

      const key = pre
        ? cfg.dotsForObjectNotation
          ? pre + '.' + prop
          : pre + '[' + prop + ']'
        : prop;

      serialize(value, cfg, fd, key);
    });
  } else {
    fd.append(pre, obj);
  }

  return fd;
}

module.exports = {
  serialize,
};


/***/ }),

/***/ "./resources/js/pages/project/ProjectEdit.vue":
/*!****************************************************!*\
  !*** ./resources/js/pages/project/ProjectEdit.vue ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ProjectEdit_vue_vue_type_template_id_d217c358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProjectEdit.vue?vue&type=template&id=d217c358& */ "./resources/js/pages/project/ProjectEdit.vue?vue&type=template&id=d217c358&");
/* harmony import */ var _ProjectEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProjectEdit.vue?vue&type=script&lang=js& */ "./resources/js/pages/project/ProjectEdit.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ProjectEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProjectEdit_vue_vue_type_template_id_d217c358___WEBPACK_IMPORTED_MODULE_0__.render,
  _ProjectEdit_vue_vue_type_template_id_d217c358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/project/ProjectEdit.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/project/ProjectEdit.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/project/ProjectEdit.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectEdit.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/ProjectEdit.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectEdit_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/project/ProjectEdit.vue?vue&type=template&id=d217c358&":
/*!***********************************************************************************!*\
  !*** ./resources/js/pages/project/ProjectEdit.vue?vue&type=template&id=d217c358& ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectEdit_vue_vue_type_template_id_d217c358___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectEdit_vue_vue_type_template_id_d217c358___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProjectEdit_vue_vue_type_template_id_d217c358___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./ProjectEdit.vue?vue&type=template&id=d217c358& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/project/ProjectEdit.vue?vue&type=template&id=d217c358&");


/***/ })

}]);