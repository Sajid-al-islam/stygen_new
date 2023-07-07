"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["userLogin"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "UserLoginComponent",
  data: function data() {
    return {
      errors: {},
      form: {}
    };
  },
  methods: {
    userLogin: function userLogin() {
      var _this = this;

      axios.post('/login', this.form).then(function (result) {
        localStorage.setItem('userLoggedIn', true);

        _this.$router.push({
          name: 'userDashboard'
        });

        _this.$message({
          showClose: true,
          message: 'Congrats, Login successful. Redirecting...',
          type: 'success'
        });
      })["catch"](function (error) {
        _this.errors = error.response.data.errors;
      });
    }
  },
  watch: {
    '$route': {
      handler: function handler(to, from) {
        document.title = 'Login | Stygen';
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/auth/UserLoginComponent.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/components/frontend/auth/UserLoginComponent.vue ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _UserLoginComponent_vue_vue_type_template_id_185c8a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserLoginComponent.vue?vue&type=template&id=185c8a18&scoped=true& */ "./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=template&id=185c8a18&scoped=true&");
/* harmony import */ var _UserLoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserLoginComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserLoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserLoginComponent_vue_vue_type_template_id_185c8a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _UserLoginComponent_vue_vue_type_template_id_185c8a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "185c8a18",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/auth/UserLoginComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLoginComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=template&id=185c8a18&scoped=true&":
/*!*****************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=template&id=185c8a18&scoped=true& ***!
  \*****************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginComponent_vue_vue_type_template_id_185c8a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginComponent_vue_vue_type_template_id_185c8a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_UserLoginComponent_vue_vue_type_template_id_185c8a18_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./UserLoginComponent.vue?vue&type=template&id=185c8a18&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=template&id=185c8a18&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=template&id=185c8a18&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/auth/UserLoginComponent.vue?vue&type=template&id=185c8a18&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { attrs: { id: "user_login" } }, [
    _c("div", { staticClass: "login-area" }, [
      _c("div", { staticClass: "container login-page-main" }, [
        _c("div", { staticClass: "row" }, [
          _c(
            "div",
            {
              staticClass: "col-md-12 col-12 col-lg-6 col-xl-6 ml-auto mr-auto"
            },
            [
              _c("div", { staticClass: "login" }, [
                _c("div", { staticClass: "login-form-container" }, [
                  _vm._m(0),
                  _vm._v(" "),
                  _c("div", { staticClass: "login-form" }, [
                    _c(
                      "form",
                      {
                        attrs: { action: "#" },
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.userLogin()
                          }
                        }
                      },
                      [
                        _vm._m(1),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.email,
                              expression: "form.email"
                            }
                          ],
                          attrs: {
                            type: "text",
                            placeholder: "e.g. example@example.com"
                          },
                          domProps: { value: _vm.form.email },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(_vm.form, "email", $event.target.value)
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors["email"]
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors["email"][0]))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("br"),
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.form.password,
                              expression: "form.password"
                            }
                          ],
                          attrs: {
                            type: "password",
                            placeholder: "e.g. ********"
                          },
                          domProps: { value: _vm.form.password },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.form,
                                "password",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _vm.errors["password"]
                          ? _c("span", { staticClass: "text-danger" }, [
                              _vm._v(_vm._s(_vm.errors["password"][0]))
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "button-box" }, [
                          _c(
                            "div",
                            { staticClass: "login-toggle-btn" },
                            [
                              _c("input", { attrs: { type: "checkbox" } }),
                              _vm._v(" "),
                              _c("label", [_vm._v("Remember me")]),
                              _vm._v(" "),
                              _c(
                                "router-link",
                                {
                                  attrs: { to: { name: "userForgotPassword" } }
                                },
                                [_vm._v("Forgot Password?")]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "button",
                            {
                              staticClass: "default-btn user-login-btn",
                              attrs: { type: "submit" }
                            },
                            [_vm._v("Login")]
                          )
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "no-account" },
                      [
                        _c(
                          "router-link",
                          {
                            staticClass: "default-btn user-login-btn",
                            attrs: { to: { name: "userRegister" } }
                          },
                          [_vm._v("No account? Create one here")]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ]
          )
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "container login-container" }, [
      _c("div", { staticClass: "row" }, [
        _c("div", { staticClass: "col-sm-12 col-md-12" }, [
          _c("div", { staticClass: "row text-center" }, [
            _c("h3", { staticClass: "landing-login-title-tag" }, [
              _vm._v("LOGIN TO STYGEN")
            ])
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_vm._v("Email"), _c("span", [_vm._v("*")])])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("label", [_vm._v("Password"), _c("span", [_vm._v("*")])])
  }
]
render._withStripped = true



/***/ })

}]);