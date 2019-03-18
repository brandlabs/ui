(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["brandlabs-ui"] = factory();
	else
		root["brandlabs-ui"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dynamic_tab_vue_vue_type_script_lang_js___ = __webpack_require__(1);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dynamic_tab_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__helpers__ = __webpack_require__(11);
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

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      tabs: [],
      activeTab: null
    };
  },
  created: function created() {
    this.parseDescription(this.description);
    this.injectTabs(this.selectorsToInject);
    this.activateFirstTab();
  },
  methods: {
    /**
     * pars description to extract tabs
     * catch all edgecage and render full descrion
     * as html if something goes wrong
     * @param {*} description
     */
    parseDescription: function parseDescription(description) {
      var parsedTabs = __WEBPACK_IMPORTED_MODULE_0__helpers__["a" /* default */].parseDescription(description);

      if (parsedTabs) {
        this.tabs = this.tabs.concat(parsedTabs);
      } else {
        this.tabs.push({
          key: this.defaultTabName,
          description: description
        });
      }
    },

    /**
     * Inject additional tab based on selector.
     * @param {*} selector
     */
    injectTabs: function injectTabs(selectors) {
      var _this = this;

      selectors.forEach(function (item) {
        var el = document.querySelector(item.selector);

        if (el) {
          _this.tabs.push({
            key: item.tabTitle,
            description: el.innerHTML
          });
        }
      });
    },

    /**
     * activate first tab in tabs array.
     */
    activateFirstTab: function activateFirstTab() {
      this.activeTab = this.tabs[0];
    }
  },
  props: {
    description: {
      type: String,
      required: true
    },
    selectorsToInject: {
      type: Array,
      required: false
    },
    defaultTabName: {
      type: String,
      required: true
    }
  }
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(13);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(15).default
var update = add("72b51fa0", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dynamic-tab.vue?vue&type=style&index=0&lang=scss&", function() {
     var newContent = require("!!../../node_modules/css-loader/dist/cjs.js!../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../node_modules/sass-loader/lib/loader.js!../../node_modules/vue-loader/lib/index.js??vue-loader-options!./dynamic-tab.vue?vue&type=style&index=0&lang=scss&");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = normalizeComponent;
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_specs_table_vue_vue_type_script_lang_js___ = __webpack_require__(5);
/* unused harmony namespace reexport */
 /* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0__node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_specs_table_vue_vue_type_script_lang_js___["a" /* default */]); 

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bigcommerce_custom_fields_hierarchy__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bigcommerce_custom_fields_hierarchy___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_bigcommerce_custom_fields_hierarchy__);
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      specs: []
    };
  },
  created: function created() {
    var _this = this;

    if (!this.productData.custom_fields) {
      return;
    }

    var customFieldsObj = __WEBPACK_IMPORTED_MODULE_0_bigcommerce_custom_fields_hierarchy___default()([this.productData], this.nameSpace);

    if (!customFieldsObj) {
      return;
    }

    customFieldsObj.forEach(function (s) {
      var key = "".concat(_this.nameSpace, " \\ ").concat(s.path);

      var customField = _this.productData.custom_fields.find(function (c) {
        return c.name === key;
      });

      if (customField) {
        _this.specs.push({
          key: s.path,
          value: customField.value
        });
      }
    });
  },
  methods: {
    getSpecs: function getSpecs() {
      if (!this.maxNumberOfSpecs) {
        return this.specs;
      }

      return this.specs.slice(0, this.maxNumberOfSpecs);
    }
  },
  props: {
    nameSpace: {
      type: String,
      required: true
    },
    maxNumberOfSpecs: {
      type: Number,
      required: false
    },
    productData: {
      type: Object,
      required: true
    }
  }
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(7);


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_bigcommerce_dynamic_tab_vue__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_bigcommerce_specs_table_vue__ = __webpack_require__(17);


/* harmony default export */ __webpack_exports__["default"] = ({
  dynamicTabs: __WEBPACK_IMPORTED_MODULE_0__src_bigcommerce_dynamic_tab_vue__["a" /* default */],
  specsTable: __WEBPACK_IMPORTED_MODULE_1__src_bigcommerce_specs_table_vue__["a" /* default */]
});

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dynamic_tab_vue_vue_type_template_id_8dc25cec___ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dynamic_tab_vue_vue_type_script_lang_js___ = __webpack_require__(0);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dynamic_tab_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(3);






/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_3__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__dynamic_tab_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__dynamic_tab_vue_vue_type_template_id_8dc25cec___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__dynamic_tab_vue_vue_type_template_id_8dc25cec___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

component.options.__file = "src/bigcommerce/dynamic-tab.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dynamic_tab_vue_vue_type_template_id_8dc25cec___ = __webpack_require__(10);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dynamic_tab_vue_vue_type_template_id_8dc25cec___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_dynamic_tab_vue_vue_type_template_id_8dc25cec___["b"]; });


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "dynamicTab" } },
    [
      _c(
        "div",
        { staticClass: "tab-header" },
        _vm._l(_vm.tabs, function(tab) {
          return _c(
            "button",
            {
              staticClass: "tab-button",
              class: { active: tab === _vm.activeTab },
              on: {
                click: function($event) {
                  _vm.activeTab = tab
                }
              }
            },
            [_vm._v("\n            " + _vm._s(tab.key) + "\n        ")]
          )
        }),
        0
      ),
      _vm._v(" "),
      _vm._l(_vm.tabs, function(tab) {
        return _c(
          "div",
          {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: tab === _vm.activeTab,
                expression: "tab === activeTab"
              }
            ],
            ref: tab.key,
            refInFor: true,
            staticClass: "tab-body active",
            attrs: { id: tab.key }
          },
          [_c("div", { domProps: { innerHTML: _vm._s(tab.description) } })]
        )
      })
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var Helpers = {
  /**
   * parsing description and extracting tabs
   * @param {*} description
   * @returns array of parsed tabs or null
   */
  parseDescription: function parseDescription(description) {
    var tabs = [];
    var el = document.createElement('div');
    el.innerHTML = description;
    var rows = el.querySelectorAll('div >  table > tbody > tr');

    if (!rows || rows.length === 0) {
      return null;
    }

    Array.from(rows).forEach(function (r) {
      var cells = r.querySelectorAll('td');

      if (cells.length < 2) {
        return null;
      }

      return tabs.push({
        key: cells[0].innerHTML,
        description: cells[1].innerHTML
      });
    });
    return tabs;
  }
};
/* harmony default export */ __webpack_exports__["a"] = (Helpers);

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dynamic_tab_vue_vue_type_style_index_0_lang_scss___ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dynamic_tab_vue_vue_type_style_index_0_lang_scss____default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dynamic_tab_vue_vue_type_style_index_0_lang_scss___);
/* unused harmony reexport namespace */
 /* unused harmony default export */ var _unused_webpack_default_export = (__WEBPACK_IMPORTED_MODULE_0__node_modules_vue_style_loader_index_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_sass_loader_lib_loader_js_node_modules_vue_loader_lib_index_js_vue_loader_options_dynamic_tab_vue_vue_type_style_index_0_lang_scss____default.a); 

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(14)(false);
// Module
exports.push([module.i, ".tab-header {\n  background-color: black;\n  color: white;\n}\n.tab-button {\n  padding: 15px;\n}\n.tab-body {\n  padding: 15px;\n}\n", ""]);



/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader

module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = addStylesClient;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__listToStyles__ = __webpack_require__(16);
/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/



var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

function addStylesClient (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = Object(__WEBPACK_IMPORTED_MODULE_0__listToStyles__["a" /* default */])(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listToStyles;
/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
function listToStyles(parentId, list) {
  var styles = [];
  var newStyles = {};

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = item[0];
    var css = item[1];
    var media = item[2];
    var sourceMap = item[3];
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    };

    if (!newStyles[id]) {
      styles.push(newStyles[id] = {
        id: id,
        parts: [part]
      });
    } else {
      newStyles[id].parts.push(part);
    }
  }

  return styles;
}

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__specs_table_vue_vue_type_template_id_4223995c___ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__specs_table_vue_vue_type_script_lang_js___ = __webpack_require__(4);
/* unused harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(3);





/* normalize component */

var component = Object(__WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__["a" /* default */])(
  __WEBPACK_IMPORTED_MODULE_1__specs_table_vue_vue_type_script_lang_js___["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_0__specs_table_vue_vue_type_template_id_4223995c___["a" /* render */],
  __WEBPACK_IMPORTED_MODULE_0__specs_table_vue_vue_type_template_id_4223995c___["b" /* staticRenderFns */],
  false,
  null,
  null,
  null
  
)

component.options.__file = "src/bigcommerce/specs-table.vue"
/* harmony default export */ __webpack_exports__["a"] = (component.exports);

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_specs_table_vue_vue_type_template_id_4223995c___ = __webpack_require__(19);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_specs_table_vue_vue_type_template_id_4223995c___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_specs_table_vue_vue_type_template_id_4223995c___["b"]; });


/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "specs-table" },
    _vm._l(_vm.getSpecs(), function(spec) {
      return _c("div", { staticClass: "specs-row" }, [
        _c("dt", { staticClass: "specs-item productView-info-name" }, [
          _vm._v(_vm._s(spec.key) + ":")
        ]),
        _vm._v(" "),
        _c("dd", { staticClass: "specs-item productView-info-value" }, [
          _vm._v(_vm._s(spec.value))
        ])
      ])
    }),
    0
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(21);

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = transformPathToHierarchy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Node__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(24);



const delimiter = ' \\ ';
/* harmony export (immutable) */ __webpack_exports__["delimiter"] = delimiter;

/**
 * Checks whether namespace exists and matches the custom field namespace
 * @param {Object} field
 * @param {string} namespace - user provided namespace
 * @returns {Boolean}
 */

const belongsToNamespace = (field, namespace) => namespace && field.name.trim().startsWith(namespace);
/**
 * Removes namespace from all of the custom fields
 * @param {Array} customFields
 */


const removeNamespaces = customFields => customFields.map(field => field.substring(field.indexOf(delimiter) + delimiter.length));
/**
 * Get node formatted path
 * @param {Object} node
 */


const getPath = node => node.path.trim();
/**
 * Checks if a node list contains a certain node
 * @param {Array} nodeList
 * @param {Object} childNode
 */


const nodeExists = (nodeList, childNode) => nodeList.some(rootNode => getPath(rootNode) === getPath(childNode));
/**
 * Get the unique custom fields sorted based on the initial order and filtered based on the provided namespace
 * @param {Array} products
 * @param {string} namespace
 */


function formatCustomFields(products, namespace) {
  return products.reduce((fields, product) => {
    product.custom_fields.forEach((field, index) => {
      if (!fields.includes(field.name) && belongsToNamespace(field, namespace)) {
        fields = Object(__WEBPACK_IMPORTED_MODULE_2__utils__["a" /* insert */])(fields, index, field.name);
      }
    });
    return fields;
  }, []);
}

class CustomFieldsHierarchy {
  constructor(customFields) {
    this.customFields = customFields;
    this.hierarchy = [];
    this.constructHierarchy();
  }

  getHierarchy() {
    return this.hierarchy;
  }

  constructHierarchy() {
    this.customFields.forEach(field => this.populateHierarchy(field));
  }
  /**
   * Recursively traverses the hierarchy until it finds the desired parent node
   * @param {string} parentPath
   * @param {Array} nodeList
   * @returns {Node}
   */


  getParent(parentPath, nodeList) {
    for (const currentNode of nodeList) {
      if (parentPath.trim() === getPath(currentNode)) {
        return currentNode;
      }

      const parent = this.getParent(parentPath, currentNode.children);

      if (parent) {
        return parent;
      }
    }
  }
  /**
   * Adds all the nodes to the hierarchy
   * @param {string} fullPath
   */


  populateHierarchy(fullPath) {
    const fields = fullPath.split(delimiter);
    fields.forEach((field, index) => {
      const currentPath = fields.slice(0, index + 1);
      const node = new __WEBPACK_IMPORTED_MODULE_1__Node__["a" /* default */](field, currentPath.join(delimiter), []);

      if (index === 0 && !nodeExists(this.hierarchy, node)) {
        this.hierarchy.push(node);
      } else {
        this.populateChildren(fields, index, node);
      }
    });
  }
  /**
   * Adds all the child nodes to the hierarchy
   * @param {Array} fields
   * @param {number} index
   * @param {Node} node
   */


  populateChildren(fields, index, node) {
    const parentPath = fields.slice(0, index).join(delimiter);
    const parentNode = this.getParent(parentPath, this.hierarchy);

    if (parentNode && !nodeExists(parentNode.children, node)) {
      parentNode.children.push(node);
    }
  }

}
/**
 * Transforms products custom fields paths into Javascript object
 * @param {Array}   products - products that are coming from BigCommerce context
 * @param {string}  namespace - only transform custom fields which have this namespace
 * @returns {Array}
 */


function transformPathToHierarchy(products, namespace) {
  const customFields = removeNamespaces(formatCustomFields(products, namespace));
  const hierarchy = new CustomFieldsHierarchy(customFields);
  return hierarchy.getHierarchy();
}

/***/ }),
/* 22 */
/***/ (function(module, exports) {

/**
 * polyfill for ES2015 `startsWith` string method
 */
if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (search, pos) {
    return this.substr(!pos || pos < 0 ? 0 : +pos, search.length) === search;
  };
}

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
class Node {
  constructor(name, path, children) {
    this.name = name;
    this.path = path;
    this.children = children;
  }

}
/* harmony export (immutable) */ __webpack_exports__["a"] = Node;


/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = insert;
/**
 * Inserts a new element in an array at specific index
 * @param {Array} original array
 * @param {number} index
 * @param {*} a new element
 * @returns A shallow copied new array filled with the new element
 */
function insert(original, index, newElement) {
  const result = original.slice(0);
  result.splice(index, 0, newElement);
  return result;
}

/***/ })
/******/ ]);
});