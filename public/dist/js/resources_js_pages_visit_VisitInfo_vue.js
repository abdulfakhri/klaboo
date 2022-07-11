"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_visit_VisitInfo_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/visit/VisitInfo.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/visit/VisitInfo.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var timeago_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! timeago.js */ "./node_modules/timeago.js/esm/index.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module '~/components/ExperienceItem'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'VisitedUserInfos',
  scrollToTop: false,
  components: {
    ExperienceItem: Object(function webpackMissingModule() { var e = new Error("Cannot find module '~/components/ExperienceItem'"); e.code = 'MODULE_NOT_FOUND'; throw e; }())
  },
  metaInfo: function metaInfo() {
    return {
      title: "".concat(this.data.user.full_name, " - Info")
    };
  },
  data: function data() {
    return {
      copyText: 'Copy'
    };
  },
  computed: _objectSpread({
    socmeds: function socmeds() {
      var socmeds = [{
        'icon': 'ant-design:behance-outlined',
        'link': this.data.user.behance ? this.data.user.behance : '',
        'linkFiltered': this.data.user.behance ? this.filterLink(this.data.user.behance) : ''
      }, {
        'icon': 'ant-design:github-filled',
        'link': this.data.user.github ? this.data.user.github : '',
        'linkFiltered': this.data.user.github ? this.filterLink(this.data.user.github) : ''
      }, {
        'icon': 'bx-bxl-linkedin',
        'link': this.data.user.linkedin ? this.data.user.linkedin : '',
        'linkFiltered': this.data.user.linkedin ? this.filterLink(this.data.user.linkedin) : ''
      }, {
        'icon': 'whh:dribbblealt',
        'link': this.data.user.dribbble ? this.data.user.dribbble : '',
        'linkFiltered': this.data.user.dribbble ? this.filterLink(this.data.user.dribbble) : ''
      }, {
        'icon': 'whh:website',
        'link': this.data.user.website ? this.data.user.website : '',
        'linkFiltered': this.data.user.website ? this.filterLink(this.data.user.website) : ''
      }];
      if (this.$matchMedia.xl) return socmeds.filter(function (e) {
        return e.link !== '';
      });
      return socmeds;
    },
    theStudentHighestPoints: function theStudentHighestPoints() {
      if (this.data.user && this.data.user.leaderboards) {
        return Math.max(this.data.user.leaderboards.map(function (e) {
          return e.points;
        }));
      }

      return 0;
    },
    level: function level() {
      if (this.theStudentHighestPoints < 2501) return 'Rookie';else if (this.theStudentHighestPoints < 7501) return 'Amateur';else if (this.theStudentHighestPoints < 15001) return 'Superior';
      return 'Expert';
    },
    records: function records() {
      if (this.data.user.role === 'Student') {
        return [{
          'icon': 'bx:bxs-id-card',
          'content': this.data.user.identity_number,
          'type': 'icon'
        }, {
          'icon': 'Pts',
          'content': "".concat(this.theStudentHighestPoints, " Points Collected"),
          'type': 'not-icon'
        }, {
          'icon': 'LVL',
          'content': this.level,
          'type': 'not-icon'
        }, {
          'icon': 'fa-solid:building',
          'content': "".concat(this.data.user.faculty, ", ").concat(this.data.user.university),
          'type': 'icon'
        }, {
          'icon': 'ic:baseline-card-membership',
          'content': "Joined since ".concat(timeago_js__WEBPACK_IMPORTED_MODULE_0__.format(this.data.user.joined_since)),
          'type': 'icon'
        }, {
          'icon': 'icons8:finish-flag',
          'content': "".concat(this.data.user.finished_project_count, " Finished Project"),
          'type': 'icon'
        }, {
          'icon': 'entypo:squared-cross',
          'content': '0 Failed Project',
          'type': 'icon'
        }];
      }

      return [{
        'icon': 'bx:bxs-id-card',
        'content': this.data.user.identity_number,
        'type': 'icon'
      }, {
        'icon': 'fa-solid:building',
        'content': "".concat(this.data.user.faculty, ", ").concat(this.data.user.university),
        'type': 'icon'
      }, {
        'icon': 'ic:baseline-card-membership',
        'content': "Joined since ".concat(timeago_js__WEBPACK_IMPORTED_MODULE_0__.format(this.data.user.joined_since)),
        'type': 'icon'
      }, {
        'icon': 'dashicons-admin-post',
        'content': "".concat(this.data.projects ? this.data.projects.length : 0, " Project Posted"),
        'type': 'icon'
      }, {
        'icon': 'entypo:squared-cross',
        'content': "0 Failed Project",
        'type': 'icon'
      }];
    }
  }, (0,vuex__WEBPACK_IMPORTED_MODULE_2__.mapGetters)({
    data: 'visit/user',
    snackbar: 'notification/snackbar'
  })),
  methods: {
    filterLink: function filterLink(link) {
      var filter = link.split('//');
      return filter[filter.length - 1];
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
      this.snackbar.open('User Profile link copied.');
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/visit/VisitInfo.vue?vue&type=template&id=5d8b67dc&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/visit/VisitInfo.vue?vue&type=template&id=5d8b67dc& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "info-container"
  }, [_c("div", {
    staticClass: "info--left"
  }, [_c("div", [_c("h3", {
    staticClass: "info__h3"
  }, [_vm._v("\n        Biography\n      ")]), _vm._v(" "), _c("p", {
    staticClass: "info__p"
  }, [_vm._v("\n        " + _vm._s(_vm.data.user.biography ? _vm.data.user.biography : "-") + "\n      ")])]), _vm._v(" "), _c("div", {
    staticClass: "info__sub--container"
  }, [_c("h3", {
    staticClass: "info__h3"
  }, [_vm._v("\n        Skills\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "info__skill-container"
  }, [_vm._l(_vm.data.user.skills, function (skill, index) {
    return _c("BubbleSkill", {
      key: "UserSkill-".concat(index),
      attrs: {
        color: "blue",
        name: skill.name
      }
    });
  }), _vm._v(" "), _vm.data.user.skills && _vm.data.user.skills.length === 0 ? _c("p", {
    staticClass: "info__p margin-0_5"
  }, [_vm._v("\n          No skills to show yet\n        ")]) : _vm._e()], 2)]), _vm._v(" "), !_vm.$matchMedia.xl ? _c("div", {
    staticClass: "info__sub--container"
  }, [_c("h3", {
    staticClass: "info__h3"
  }, [_vm._v("\n        Records\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "record--items"
  }, _vm._l(_vm.records, function (record, index) {
    return _c("div", {
      key: "Record-".concat(index),
      staticClass: "record--container"
    }, [_c("div", {
      staticClass: "record--icon-visited"
    }, [record.type === "icon" ? _c("span", {
      staticClass: "iconify",
      attrs: {
        "data-icon": record.icon,
        width: "20",
        height: "20"
      }
    }) : _c("span", {
      staticClass: "summary--text-icon"
    }, [_vm._v(_vm._s(record.icon))])]), _vm._v(" " + _vm._s(record.content) + "\n        ")]);
  }), 0)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "info__sub--container"
  }, [_c("h3", {
    staticClass: "info__h3"
  }, [_vm._v("\n        Experience\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "mb-2 experiences-list"
  }, [_vm._l(_vm.data.user.experiences, function (experience, index) {
    return _c("ExperienceItem", {
      key: "ExperienceItem-".concat(index),
      attrs: {
        data: experience
      }
    });
  }), _vm._v(" "), _vm.data.user.experiences && _vm.data.user.experiences.length === 0 ? _c("p", {
    staticClass: "info__p"
  }, [_vm._v("\n          No experiences to show yet\n        ")]) : _vm._e()], 2)])]), _vm._v(" "), _c("div", {
    staticClass: "info--right"
  }, [_vm.$matchMedia.xl ? _c("div", {
    staticClass: "flex-row space-between"
  }, [_c("h3", {
    staticClass: "info__h3 my-0"
  }, [_vm._v("\n        Share My Profile\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "info__share--button",
    on: {
      click: _vm.copyToClipboard
    }
  }, [_c("span", {
    staticClass: "iconify details__share--icon",
    attrs: {
      "data-icon": "ic:round-link"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.copyText))])])]) : _vm._e(), _vm._v(" "), _vm.$matchMedia.xl ? _c("div", {
    staticClass: "info__sub--container"
  }, [_c("h3", {
    staticClass: "info__h3"
  }, [_vm._v("\n        Records\n      ")]), _vm._v(" "), _c("div", {
    staticClass: "record--items"
  }, _vm._l(_vm.records, function (record, index) {
    return _c("div", {
      key: "Record-".concat(index),
      staticClass: "record--container"
    }, [_c("div", {
      staticClass: "record--icon-visited"
    }, [record.type === "icon" ? _c("span", {
      staticClass: "iconify",
      attrs: {
        "data-icon": record.icon,
        width: "24",
        height: "24"
      }
    }) : _c("span", {
      staticClass: "summary--text-icon"
    }, [_vm._v(_vm._s(record.icon))])]), _vm._v(" "), _c("span", [_vm._v(_vm._s(record.content))])]);
  }), 0)]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "info__sub--container"
  }, [_c("h3", {
    staticClass: "info__h3"
  }, [_vm._v("\n        Social Media\n      ")]), _vm._v(" "), _vm.$matchMedia.xl ? _c("div", {
    staticClass: "social-media__container"
  }, [_vm._l(_vm.socmeds, function (socmed, index) {
    return _c("div", {
      key: "SocialMedia-".concat(index),
      staticClass: "social-media__input-container"
    }, [_c("a", {
      staticClass: "social-media__a",
      attrs: {
        href: socmed.link,
        target: "_blank"
      }
    }, [_c("span", {
      staticClass: "iconify social-media__icon-visited",
      attrs: {
        "data-icon": socmed.icon
      }
    })])]);
  }), _vm._v(" "), _vm.socmeds.length === 0 ? _c("p", {
    staticClass: "info__p"
  }, [_vm._v("\n          No social medias to show yet\n        ")]) : _vm._e()], 2) : _c("div", {
    staticClass: "social-media__container"
  }, _vm._l(_vm.socmeds, function (socmed) {
    return _c("div", {
      key: "SocialMedia-".concat(socmed.icon),
      staticClass: "social-media__input-container"
    }, [_c("span", {
      staticClass: "iconify social-media__icon-visited",
      attrs: {
        "data-icon": socmed.icon
      }
    }), _vm._v(" "), socmed.link !== "" ? _c("a", {
      staticClass: "social-media__a",
      attrs: {
        href: socmed.link,
        target: "_blank"
      }
    }, [_c("input", {
      staticClass: "social-media__input",
      attrs: {
        type: "text",
        disabled: ""
      },
      domProps: {
        value: socmed.linkFiltered
      }
    })]) : _c("input", {
      staticClass: "social-media__input",
      attrs: {
        type: "text",
        value: "-",
        disabled: ""
      }
    })]);
  }), 0)]), _vm._v(" "), _c("div", {
    staticClass: "info__sub--container"
  }, [_c("h3", {
    staticClass: "info__h3"
  }, [_vm._v("\n        Curriculum Vitae\n      ")]), _vm._v(" "), _vm.data.user && _vm.data.user.cv ? _c("div", [_c("p", {
    staticClass: "info__cv--container pointer"
  }, [_c("Icon", {
    attrs: {
      icon: "bx-bxs-file-pdf",
      width: 32,
      height: 32
    }
  }), _vm._v(" "), _c("a", {
    staticClass: "info__cv--heading link--clean",
    attrs: {
      href: _vm.data.user.cv,
      target: "_blank"
    }
  }, [_vm._v(_vm._s(_vm.user.first_name) + " CV.pdf")])], 1)]) : _c("p", {
    staticClass: "info__p"
  }, [_vm._v("\n        He/She has not upload the CV yet.\n      ")])]), _vm._v(" "), !_vm.$matchMedia.xl ? _c("div", {
    staticClass: "info__sub--container"
  }, [_c("h3", {
    staticClass: "last-sub--h3"
  }, [_vm._v("\n        Tag Name\n      ")]), _vm._v(" "), _c("p", {
    staticClass: "info__p tagname"
  }, [_c("span", {
    staticClass: "iconify",
    attrs: {
      "data-icon": "entypo:email"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.data.user.tagname))])])]) : _vm._e()])]);
};

var staticRenderFns = [];
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

/***/ "./resources/js/pages/visit/VisitInfo.vue":
/*!************************************************!*\
  !*** ./resources/js/pages/visit/VisitInfo.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _VisitInfo_vue_vue_type_template_id_5d8b67dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VisitInfo.vue?vue&type=template&id=5d8b67dc& */ "./resources/js/pages/visit/VisitInfo.vue?vue&type=template&id=5d8b67dc&");
/* harmony import */ var _VisitInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VisitInfo.vue?vue&type=script&lang=js& */ "./resources/js/pages/visit/VisitInfo.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VisitInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VisitInfo_vue_vue_type_template_id_5d8b67dc___WEBPACK_IMPORTED_MODULE_0__.render,
  _VisitInfo_vue_vue_type_template_id_5d8b67dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/visit/VisitInfo.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/visit/VisitInfo.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/pages/visit/VisitInfo.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisitInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/visit/VisitInfo.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/visit/VisitInfo.vue?vue&type=template&id=5d8b67dc&":
/*!*******************************************************************************!*\
  !*** ./resources/js/pages/visit/VisitInfo.vue?vue&type=template&id=5d8b67dc& ***!
  \*******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitInfo_vue_vue_type_template_id_5d8b67dc___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitInfo_vue_vue_type_template_id_5d8b67dc___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_VisitInfo_vue_vue_type_template_id_5d8b67dc___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./VisitInfo.vue?vue&type=template&id=5d8b67dc& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/visit/VisitInfo.vue?vue&type=template&id=5d8b67dc&");


/***/ })

}]);