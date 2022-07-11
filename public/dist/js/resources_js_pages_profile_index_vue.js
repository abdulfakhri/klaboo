"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_profile_index_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/index.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/index.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'UserProfileIndex',
  middleware: ['auth'],
  computed: _objectSpread(_objectSpread({}, (0,vuex__WEBPACK_IMPORTED_MODULE_0__.mapGetters)({
    user: 'auth/user'
  })), {}, {
    tabs: function tabs() {
      if (this.user.role === 'Student') {
        return [{
          name: 'Projects',
          route: 'profile.projects'
        }, {
          name: 'Wishlist',
          route: 'profile.wishlist'
        }, {
          name: 'Info',
          route: 'profile.info'
        }];
      }

      return [{
        name: 'Projects',
        route: 'profile.projects'
      }, {
        name: 'Info',
        route: 'profile.info'
      }];
    },
    major: function major() {
      if (this.user.role === 'Student') return this.user.major + ' Major';else return this.user.major;
    },
    userStatus: function userStatus() {
      if (this.user.role === 'Student') {
        return {
          "class": this.user.is_open_hired ? 'profile__info--available' : 'profile__info--unavailable',
          text: this.user.is_open_hired ? 'Available' : 'Unavailable'
        };
      }

      return {
        "class": 'profile__info--verified',
        text: 'Verified'
      };
    }
  })
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/index.vue?vue&type=template&id=f5e22f5a&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/index.vue?vue&type=template&id=f5e22f5a& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "profile--container"
  }, [_c("div", {
    staticClass: "profile__info--container"
  }, [_c("img", {
    staticClass: "profile__info--img",
    attrs: {
      src: _vm.user.avatar,
      alt: ""
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "profile__info--desc"
  }, [_c("p", {
    staticClass: "profile__info--name"
  }, [_vm._v("\n        " + _vm._s(_vm.user.full_name) + "\n      ")]), _vm._v(" "), !_vm.$matchMedia.xl ? _c("p", {
    staticClass: "profile__info--occupation"
  }, [_vm._v("\n        " + _vm._s(_vm.major) + " "), _c("br"), _vm._v("\n        " + _vm._s(_vm.user.university) + " "), _c("br"), _vm._v("\n        " + _vm._s(_vm.user.location) + "\n      ")]) : _c("p", {
    staticClass: "profile__info--occupation"
  }, [_vm._v("\n        " + _vm._s(_vm.major) + " / " + _vm._s(_vm.user.university) + " "), _c("br"), _vm._v("\n        " + _vm._s(_vm.user.location) + "\n      ")]), _vm._v(" "), _c("p", {
    staticClass: "profile__info--expertise"
  }, [_c("span", {
    staticClass: "iconify",
    attrs: {
      "data-icon": "fa-solid:paint-brush",
      width: "15",
      height: "10"
    }
  }), _vm._v(" " + _vm._s(_vm.user.expertise) + "\n      ")]), _vm._v(" "), _vm.$matchMedia.xl ? _c("div", {
    staticClass: "profile__info--buttons"
  }, [_c("router-link", {
    staticClass: "profile__info--edit-profile",
    attrs: {
      to: {
        path: "/profile/edit"
      },
      tag: "button"
    }
  }, [_vm._v("\n          Edit Profile\n        ")])], 1) : _vm._e(), _vm._v(" "), _vm.user.role === "Student" ? _c("p", {
    "class": _vm.userStatus["class"]
  }, [_c("span", {
    staticClass: "iconify profile__info--icon",
    attrs: {
      "data-icon": "carbon:dot-mark"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.userStatus.text))])]) : _vm.user.role === "Lecturer" ? _c("p", {
    "class": _vm.userStatus["class"]
  }, [_c("span", {
    staticClass: "iconify profile__info--icon",
    attrs: {
      "data-icon": "bi:shield-fill-check"
    }
  }), _vm._v(" "), _c("span", [_vm._v(_vm._s(_vm.userStatus.text))])]) : _vm._e()])]), _vm._v(" "), !_vm.$matchMedia.xl ? _c("router-link", {
    staticClass: "edit-profile__link",
    attrs: {
      to: {
        path: "/profile/edit"
      }
    }
  }, [_c("div", {
    staticClass: "profile__info--edit-profile"
  }, [_vm._v("\n      Edit Profile\n    ")])]) : _vm._e(), _vm._v(" "), !_vm.$matchMedia.xl ? _c("div", {
    staticClass: "user__sub-menu--container"
  }, _vm._l(_vm.tabs, function (tab) {
    return _c("router-link", {
      key: tab.route,
      staticClass: "user__sub-menu--item",
      attrs: {
        to: {
          name: tab.route
        },
        "active-class": "user__sub-menu--active"
      }
    }, [_vm._v("\n      " + _vm._s(tab.name) + "\n    ")]);
  }), 1) : _vm._e(), _vm._v(" "), _vm.$matchMedia.xl ? _c("div", {
    staticClass: "user__sub-menu"
  }, [_c("div", {
    staticClass: "user__sub-menu--left"
  }, _vm._l(_vm.tabs, function (tab) {
    return _c("router-link", {
      key: tab.route,
      staticClass: "user__sub-menu--item",
      attrs: {
        to: {
          name: tab.route
        },
        "active-class": "user__sub-menu--active"
      }
    }, [_vm._v("\n        " + _vm._s(tab.name) + "\n      ")]);
  }), 1)]) : _vm._e(), _vm._v(" "), _vm.$matchMedia.xl ? _c("hr", {
    staticClass: "separator-short mt-2_5 mb-3"
  }) : _vm._e(), _vm._v(" "), _c("div", {}, [_c("transition", {
    attrs: {
      name: "fade",
      mode: "out-in"
    }
  }, [_c("router-view")], 1)], 1)], 1);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./resources/js/pages/profile/index.vue":
/*!**********************************************!*\
  !*** ./resources/js/pages/profile/index.vue ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _index_vue_vue_type_template_id_f5e22f5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=f5e22f5a& */ "./resources/js/pages/profile/index.vue?vue&type=template&id=f5e22f5a&");
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ "./resources/js/pages/profile/index.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_f5e22f5a___WEBPACK_IMPORTED_MODULE_0__.render,
  _index_vue_vue_type_template_id_f5e22f5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/profile/index.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/profile/index.vue?vue&type=script&lang=js&":
/*!***********************************************************************!*\
  !*** ./resources/js/pages/profile/index.vue?vue&type=script&lang=js& ***!
  \***********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/index.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/profile/index.vue?vue&type=template&id=f5e22f5a&":
/*!*****************************************************************************!*\
  !*** ./resources/js/pages/profile/index.vue?vue&type=template&id=f5e22f5a& ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f5e22f5a___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f5e22f5a___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_use_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ruleSet_1_rules_2_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_f5e22f5a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./index.vue?vue&type=template&id=f5e22f5a& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5.use[0]!./node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[2]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/profile/index.vue?vue&type=template&id=f5e22f5a&");


/***/ })

}]);