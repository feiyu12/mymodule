(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["feiyumodule"] = factory();
	else
		root["feiyumodule"] = factory();
})((typeof self !== 'undefined' ? self : this), function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	!function() {
/******/ 		__webpack_require__.p = "";
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BaseTable: function() { return /* reexport */ BaseTable; },
  "default": function() { return /* binding */ entry_lib; }
});

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@vue+cli-service@5.0.8_vue-template-compiler@2.7.16_vue@2.7.16/node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
/* eslint-disable no-var */
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (false) { var getCurrentScript; }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+thread-loader@3.0.4_webpack@5.90.3/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_@babel+core@7.24.0_webpack@5.90.3/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.3/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.3/node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/BaseTable/src/index.vue?vue&type=template&id=46300483&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-table', _vm._g(_vm._b({
    attrs: {
      "data": _vm.dataList
    }
  }, 'el-table', _vm.$attrs, false), _vm.$listeners), [_vm.isSelection ? _c('el-table-column', {
    attrs: {
      "type": "selection",
      "width": "55"
    }
  }) : _vm._e(), _vm.isExpand ? _c('el-table-column', {
    attrs: {
      "type": "expand",
      "fixed": ""
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (scope) {
        return _vm._t("expand", null, {
          "data": scope
        });
      }
    }], null, true)
  }) : _vm._e(), _vm.isIndex ? _c('el-table-column', {
    attrs: {
      "label": "序号",
      "type": "index",
      "width": "50"
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (scope) {
        return _vm._t("index", function () {
          return [_vm._v(_vm._s(scope.$index + 1))];
        }, {
          "data": scope
        });
      }
    }], null, true)
  }) : _vm._e(), _vm._l(_vm.header, function (item) {
    return [item.children ? _c('tableHeader', {
      attrs: {
        "headerRow": item
      },
      scopedSlots: _vm._u([{
        key: "header",
        fn: function (scope) {
          return [_vm._t(scope.slotName, null, {
            "column": scope.column,
            "row": scope.row,
            "index": scope.index
          })];
        }
      }, {
        key: "default",
        fn: function (scope) {
          return [_vm._t(scope.slotName, null, {
            "column": scope.column,
            "row": scope.row,
            "index": scope.index
          })];
        }
      }], null, true)
    }) : _c('el-table-column', {
      attrs: {
        "prop": item.prop,
        "label": item.label,
        "width": item.width || '',
        "min-width": item.minWidth || ''
      },
      scopedSlots: _vm._u([{
        key: "header",
        fn: function (scope) {
          return [_vm._t(`${item.prop}Header`, function () {
            return [_vm._v(" " + _vm._s(item.label) + " ")];
          }, {
            "column": scope.column,
            "index": scope.$index
          })];
        }
      }, {
        key: "default",
        fn: function (scope) {
          return [_vm._t(`${item.prop}`, function () {
            return [_vm._v(" " + _vm._s(scope.row[item.prop]) + " ")];
          }, {
            "column": scope.column,
            "row": scope.row,
            "index": scope.index
          })];
        }
      }], null, true)
    })];
  }), _vm.operation.show ? _c('el-table-column', {
    attrs: {
      "label": _vm.operation.label,
      "fixed": _vm.operation.fixed,
      "width": _vm.operation.width,
      "min-width": _vm.operation.minWidth
    },
    scopedSlots: _vm._u([{
      key: "default",
      fn: function (scope) {
        return _vm._t("default", null, {
          "data": scope
        });
      }
    }], null, true)
  }) : _vm._e()], 2);
};
var staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+thread-loader@3.0.4_webpack@5.90.3/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_@babel+core@7.24.0_webpack@5.90.3/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.3/node_modules/vue-loader/lib/loaders/templateLoader.js??ruleSet[1].rules[3]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.3/node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/BaseTable/src/tableHeader.vue?vue&type=template&id=82ddcd0a
var tableHeadervue_type_template_id_82ddcd0a_render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('el-table-column', {
    attrs: {
      "label": _vm.headerRow.label,
      "width": _vm.headerRow.width || '',
      "min-width": _vm.headerRow.minWidth || ''
    }
  }, [_vm._l(_vm.headerRow.children, function (item) {
    return [item.children ? _c('tableHeader', {
      attrs: {
        "headerRow": item
      },
      scopedSlots: _vm._u([{
        key: "header",
        fn: function (scope) {
          return [_vm._t("header", null, {
            "column": scope.column,
            "row": scope.row,
            "index": scope.index,
            "slotName": scope.slotName
          })];
        }
      }, {
        key: "default",
        fn: function (scope) {
          return [_vm._t("default", null, {
            "slotName": scope.slotName,
            "column": scope.column,
            "row": scope.row,
            "index": scope.index
          })];
        }
      }], null, true)
    }) : _c('el-table-column', {
      attrs: {
        "prop": item.prop,
        "label": item.label,
        "width": item.width || '',
        "min-width": item.minWidth || ''
      },
      scopedSlots: _vm._u([{
        key: "header",
        fn: function (scope) {
          return [_vm._t("header", function () {
            return [_vm._v(" " + _vm._s(item.label) + " ")];
          }, {
            "slotName": `${item.prop}Header`,
            "column": scope.column,
            "row": scope.row,
            "index": scope.$index
          })];
        }
      }, {
        key: "default",
        fn: function (scope) {
          return [_vm._t("default", function () {
            return [_vm._v(" " + _vm._s(scope.row[item.prop]) + " ")];
          }, {
            "slotName": `${item.prop}`,
            "column": scope.column,
            "row": scope.row,
            "index": scope.$index
          })];
        }
      }], null, true)
    })];
  })], 2);
};
var tableHeadervue_type_template_id_82ddcd0a_staticRenderFns = [];

;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+thread-loader@3.0.4_webpack@5.90.3/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_@babel+core@7.24.0_webpack@5.90.3/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.3/node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/BaseTable/src/tableHeader.vue?vue&type=script&lang=js
/* harmony default export */ var tableHeadervue_type_script_lang_js = ({
  name: "TableHeader",
  props: ["headerRow"]
});
;// CONCATENATED MODULE: ./packages/BaseTable/src/tableHeader.vue?vue&type=script&lang=js
 /* harmony default export */ var src_tableHeadervue_type_script_lang_js = (tableHeadervue_type_script_lang_js); 
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.3/node_modules/vue-loader/lib/runtime/componentNormalizer.js
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

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
  if (moduleIdentifier) {
    // server build
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
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}

;// CONCATENATED MODULE: ./packages/BaseTable/src/tableHeader.vue





/* normalize component */
;
var component = normalizeComponent(
  src_tableHeadervue_type_script_lang_js,
  tableHeadervue_type_template_id_82ddcd0a_render,
  tableHeadervue_type_template_id_82ddcd0a_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var tableHeader = (component.exports);
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+thread-loader@3.0.4_webpack@5.90.3/node_modules/thread-loader/dist/cjs.js!./node_modules/.pnpm/registry.npmmirror.com+babel-loader@8.3.0_@babel+core@7.24.0_webpack@5.90.3/node_modules/babel-loader/lib/index.js??clonedRuleSet-82.use[1]!./node_modules/.pnpm/registry.npmmirror.com+vue-loader@15.11.1_css-loader@6.10.0_vue-template-compiler@2.7.16_webpack@5.90.3/node_modules/vue-loader/lib/index.js??vue-loader-options!./packages/BaseTable/src/index.vue?vue&type=script&lang=js

/* harmony default export */ var srcvue_type_script_lang_js = ({
  name: "BaseTable",
  components: {
    tableHeader: tableHeader
  },
  props: {
    header: {
      type: Array,
      default: () => {
        return [];
      }
    },
    dataList: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // 是否有展看项
    isExpand: {
      type: Boolean,
      default: false
    },
    // 是否有索引
    isIndex: {
      type: Boolean,
      default: false
    },
    // 是否有索引
    isSelection: {
      type: Boolean,
      default: false
    },
    // 操作列显示的
    operation: {
      type: Object,
      default: () => {
        return {
          label: "操作",
          show: true,
          width: "170",
          mintWidth: "170",
          fixed: false
        };
      }
    }
  },
  methods: {
    getTableData(row, prop) {
      return row[prop];
    }
  }
});
;// CONCATENATED MODULE: ./packages/BaseTable/src/index.vue?vue&type=script&lang=js
 /* harmony default export */ var BaseTable_srcvue_type_script_lang_js = (srcvue_type_script_lang_js); 
;// CONCATENATED MODULE: ./packages/BaseTable/src/index.vue





/* normalize component */
;
var src_component = normalizeComponent(
  BaseTable_srcvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  null,
  "46300483",
  null
  
)

/* harmony default export */ var BaseTable_src = (src_component.exports);
;// CONCATENATED MODULE: ./packages/BaseTable/index.js
/*
 * @FileDescription: 
 * @Author: czh
 * @Date: 2024-03-15 17:05:22
 * @LastEditors: czh
 * @LastEditTime: 2024-03-16 13:19:00
 */

console.log(BaseTable_src);
/* istanbul ignore next */
BaseTable_src.install = function (Vue) {
  Vue.component(BaseTable_src.name, BaseTable_src);
};
/* harmony default export */ var BaseTable = (BaseTable_src);
;// CONCATENATED MODULE: ./packages/index.js
/*
 * @FileDescription: 
 * @Author: czh
 * @Date: 2024-03-15 17:09:52
 * @LastEditors: czh
 * @LastEditTime: 2024-03-16 13:16:37
 */

// 存储组件列表
const components = [BaseTable];

// 定义 install 方法，接收 Vue 作为参数。如果使用 use 注册插件，则所有的组件都将被注册
const install = function (Vue) {
  // 判断是否安装
  if (install.installed) return;
  install.installed = true;
  // 遍历注册全局组件
  components.map(component => Vue.component(component.name, component));
};

// 判断是否是直接引入文件
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}
// 按需引入

/* harmony default export */ var packages_0 = ({
  ...components,
  // 导出的对象必须具有 install，才能被 Vue.use() 方法安装
  install
});
;// CONCATENATED MODULE: ./node_modules/.pnpm/registry.npmmirror.com+@vue+cli-service@5.0.8_vue-template-compiler@2.7.16_vue@2.7.16/node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = (packages_0);


/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=feiyumodule.umd.js.map