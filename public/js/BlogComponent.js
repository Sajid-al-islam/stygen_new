"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["BlogComponent"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************/
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
  name: "BlogComponent",
  data: function data() {
    return {
      currentPage: 1
    };
  },
  computed: {
    blogs: function blogs() {
      return this.$store.getters['blog/getAllBlog'];
    }
  },
  methods: {
    getAllBlog: function getAllBlog() {
      this.$store.dispatch('blog/getAllBlog', this.currentPage);
    },
    paginationChange: function paginationChange() {
      this.$store.dispatch('blog/getAllBlog', this.currentPage);
    }
  },
  created: function created() {
    this.getAllBlog();
  },
  watch: {
    '$route': {
      handler: function handler(to, from) {
        document.title = 'Blog | Stygen';
      },
      immediate: true
    }
  }
});

/***/ }),

/***/ "./resources/js/components/frontend/blog/BlogComponent.vue":
/*!*****************************************************************!*\
  !*** ./resources/js/components/frontend/blog/BlogComponent.vue ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _BlogComponent_vue_vue_type_template_id_76e9f360_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./BlogComponent.vue?vue&type=template&id=76e9f360&scoped=true& */ "./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=template&id=76e9f360&scoped=true&");
/* harmony import */ var _BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./BlogComponent.vue?vue&type=script&lang=js& */ "./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=script&lang=js&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */
;
var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _BlogComponent_vue_vue_type_template_id_76e9f360_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _BlogComponent_vue_vue_type_template_id_76e9f360_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "76e9f360",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/frontend/blog/BlogComponent.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=script&lang=js&":
/*!******************************************************************************************!*\
  !*** ./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogComponent.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=template&id=76e9f360&scoped=true&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=template&id=76e9f360&scoped=true& ***!
  \************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_template_id_76e9f360_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_template_id_76e9f360_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_BlogComponent_vue_vue_type_template_id_76e9f360_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./BlogComponent.vue?vue&type=template&id=76e9f360&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=template&id=76e9f360&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=template&id=76e9f360&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/frontend/blog/BlogComponent.vue?vue&type=template&id=76e9f360&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { attrs: { id: "recipe" } }, [
    _c("div", { staticClass: "breadcrumb-area" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-12" }, [
            _c("div", { staticClass: "breadcrumb-content text-center" }, [
              _c("ul", [
                _c(
                  "li",
                  [
                    _c("router-link", { attrs: { to: { name: "landing" } } }, [
                      _vm._v("Home")
                    ])
                  ],
                  1
                ),
                _vm._v(" "),
                _c("li", { staticClass: "active" }, [_vm._v("Blog")])
              ])
            ])
          ])
        ])
      ])
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "blog-area mt-4" }, [
      _c("div", { staticClass: "container" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-lg-9 ml-auto mr-auto" }, [
            _c(
              "div",
              { staticClass: "blog_area" },
              _vm._l(_vm.blogs.data, function(blog) {
                return _c(
                  "article",
                  { key: blog.id, staticClass: "blog_single" },
                  [
                    _c("header", { staticClass: "entry-header" }, [
                      _c("h2", { staticClass: "entry-title" }, [
                        _c(
                          "a",
                          { attrs: { href: "/blog/" + blog.blog_slug } },
                          [_vm._v(_vm._s(blog.title))]
                        )
                      ]),
                      _vm._v(" "),
                      _vm._m(0, true),
                      _vm._v(" "),
                      _c("span", { staticClass: "post-separator" }, [
                        _vm._v("|")
                      ]),
                      _vm._v(" "),
                      _c("span", { staticClass: "blog-post-date" }, [
                        _c("i", { staticClass: "fas fa-calendar-alt" }),
                        _vm._v(
                          " " + _vm._s(_vm._f("timeFormat")(blog.created_at))
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "post-thumbnail" },
                      [
                        _c(
                          "router-link",
                          {
                            attrs: {
                              to: {
                                name: "singleBlog",
                                params: { blogSlug: blog.blog_slug }
                              }
                            }
                          },
                          [
                            _c("img", {
                              attrs: {
                                src: "/assets/uploads/blog/" + blog.image,
                                width: "60%",
                                alt: blog.title
                              }
                            })
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { staticClass: "postinfo-wrapper" }, [
                      _c("div", { staticClass: "post-info" }, [
                        _c(
                          "div",
                          { staticClass: "entry-summary" },
                          [
                            _c("p", {
                              domProps: {
                                innerHTML: _vm._f("sortlength")(
                                  blog.description,
                                  50,
                                  "..."
                                )
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "router-link",
                              {
                                staticClass: "default-btn",
                                attrs: {
                                  to: {
                                    name: "singleBlog",
                                    params: { blogSlug: blog.blog_slug }
                                  }
                                }
                              },
                              [_vm._v("Read More")]
                            )
                          ],
                          1
                        )
                      ])
                    ])
                  ]
                )
              }),
              0
            ),
            _vm._v(" "),
            _c("div", { staticClass: "row" }, [
              _c("div", { staticClass: "ml-auto mr-auto" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "pagination-product d-md-flex justify-content-md-between align-items-center"
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "page-list shop-paginate" },
                      [
                        _c("el-pagination", {
                          staticClass: "text-center mt-3",
                          attrs: {
                            background: "",
                            "current-page": _vm.currentPage,
                            "page-size": _vm.blogs.per_page,
                            layout: "prev, pager, next",
                            total: _vm.blogs.total
                          },
                          on: {
                            "current-change": _vm.paginationChange,
                            "update:currentPage": function($event) {
                              _vm.currentPage = $event
                            },
                            "update:current-page": function($event) {
                              _vm.currentPage = $event
                            }
                          }
                        })
                      ],
                      1
                    )
                  ]
                )
              ])
            ])
          ])
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
    return _c("span", { staticClass: "post-author" }, [
      _c("span", { staticClass: "post-by" }, [_vm._v(" Posts by : ")]),
      _vm._v(" admin ")
    ])
  }
]
render._withStripped = true



/***/ })

}]);