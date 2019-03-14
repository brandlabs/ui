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
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */,
/* 2 */,
/* 3 */,
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_bigcommerce_custom_fields_hierarchy__ = __webpack_require__(18);
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
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__specs_table_vue_vue_type_template_id_4223995c___ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__specs_table_vue_vue_type_script_lang_js___ = __webpack_require__(4);
/* empty harmony namespace reexport */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__node_modules_vue_loader_lib_runtime_componentNormalizer_js__ = __webpack_require__(0);





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

/* hot reload */
if (false) {
  var api = require("/Users/smog/projects/brandlabs/ui/node_modules/vue-hot-reload-api/dist/index.js")
  api.install(require('vue'))
  if (api.compatible) {
    module.hot.accept()
    if (!module.hot.data) {
      api.createRecord('4223995c', component.options)
    } else {
      api.reload('4223995c', component.options)
    }
    module.hot.accept("./specs-table.vue?vue&type=template&id=4223995c&", function () {
      api.rerender('4223995c', {
        render: render,
        staticRenderFns: staticRenderFns
      })
    })
  }
}
component.options.__file = "src/bigcommerce/specs-table.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_specs_table_vue_vue_type_template_id_4223995c___ = __webpack_require__(17);
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_specs_table_vue_vue_type_template_id_4223995c___["a"]; });
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_specs_table_vue_vue_type_template_id_4223995c___["b"]; });


/***/ }),
/* 17 */
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
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(19);

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["default"] = transformPathToHierarchy;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__polyfills__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Node__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils__ = __webpack_require__(22);



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
/* 20 */
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
/* 21 */
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
/* 22 */
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