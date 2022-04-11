/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ 744:
/***/ ((__unused_webpack_module, exports) => {

var __webpack_unused_export__;

__webpack_unused_export__ = ({ value: true });
// runtime helper for setting properties on components
// in a tree-shakable way
exports.Z = (sfc, props) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props) {
        target[key] = val;
    }
    return target;
};


/***/ }),

/***/ 291:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AboutView)
});

// EXTERNAL MODULE: external "vue/server-renderer"
var server_renderer_ = __webpack_require__(259);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AboutView.vue?vue&type=template&id=39c6b183

function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<article${(0,server_renderer_.ssrRenderAttrs)(_attrs)}><p>age: ${(0,server_renderer_.ssrInterpolate)($options.age)}</p><button>过年了</button></article>`);
}
;// CONCATENATED MODULE: ./src/views/AboutView.vue?vue&type=template&id=39c6b183

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/AboutView.vue?vue&type=script&lang=js
/* harmony default export */ const AboutViewvue_type_script_lang_js = ({
  name: 'About-View',
  computed: {
    age() {
      return this.$store.state.age;
    }

  },

  // 服务端渲染上下文没有this.$store，所以我们在调用时需要将store传进来
  async asyncData({
    store
  }) {
    store.dispatch('getUserInfo');
  },

  methods: {
    onClick() {
      this.$store.commit('addAge');
    }

  }
});
;// CONCATENATED MODULE: ./src/views/AboutView.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/views/AboutView.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(AboutViewvue_type_script_lang_js, [['ssrRender',ssrRender]])

/* harmony default export */ const AboutView = (__exports__);

/***/ }),

/***/ 259:
/***/ ((module) => {

module.exports = require("vue/server-renderer");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ createApp)
});

;// CONCATENATED MODULE: external "vue"
const external_vue_namespaceObject = require("vue");
;// CONCATENATED MODULE: external "vue-router"
const external_vue_router_namespaceObject = require("vue-router");
// EXTERNAL MODULE: external "vue/server-renderer"
var server_renderer_ = __webpack_require__(259);
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=template&id=325572e8

function ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<article${(0,server_renderer_.ssrRenderAttrs)(_attrs)}> name: ${(0,server_renderer_.ssrInterpolate)($data.name)}</article>`);
}
;// CONCATENATED MODULE: ./src/views/HomeView.vue?vue&type=template&id=325572e8

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/views/HomeView.vue?vue&type=script&lang=js
/* harmony default export */ const HomeViewvue_type_script_lang_js = ({
  name: 'Home-View',

  data() {
    return {
      name: 'test'
    };
  }

});
;// CONCATENATED MODULE: ./src/views/HomeView.vue?vue&type=script&lang=js
 
// EXTERNAL MODULE: ./node_modules/vue-loader/dist/exportHelper.js
var exportHelper = __webpack_require__(744);
;// CONCATENATED MODULE: ./src/views/HomeView.vue




;
const __exports__ = /*#__PURE__*/(0,exportHelper/* default */.Z)(HomeViewvue_type_script_lang_js, [['ssrRender',ssrRender]])

/* harmony default export */ const HomeView = (__exports__);
;// CONCATENATED MODULE: ./src/router/index.js


const routes = [{
  path: '/',
  name: 'home',
  component: HomeView
}, {
  path: '/about',
  name: 'about',
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  component: () => Promise.resolve(/* import() | about */).then(__webpack_require__.bind(__webpack_require__, 291))
}];
/* harmony default export */ function src_router(history) {
  return (0,external_vue_router_namespaceObject.createRouter)({
    history,
    routes
  });
}
;// CONCATENATED MODULE: external "vuex"
const external_vuex_namespaceObject = require("vuex");
;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
;// CONCATENATED MODULE: ./src/store/index.js


/* harmony default export */ function src_store() {
  return (0,external_vuex_namespaceObject.createStore)({
    state: {
      age: 22,
      name: 'test'
    },
    mutations: {
      addAge(state) {
        state.age++;
      },

      setUserInfo(state, {
        name,
        age
      }) {
        state.age = age;
        state.name = name;
      }

    },
    actions: {
      async getUserInfo(context) {
        try {
          const res = await external_axios_default().get('http://localhost:1234/api/getUserInfo');
          const {
            name,
            age
          } = res.data.data;
          context.commit('setUserInfo', {
            name,
            age
          });
        } catch (err) {}
      }

    },
    modules: {}
  });
}
;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=29048c96


function Appvue_type_template_id_29048c96_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_router_link = (0,external_vue_namespaceObject.resolveComponent)("router-link");

  const _component_router_view = (0,external_vue_namespaceObject.resolveComponent)("router-view");

  _push(`<article${(0,server_renderer_.ssrRenderAttrs)(_attrs)}><nav>`);

  _push((0,server_renderer_.ssrRenderComponent)(_component_router_link, {
    to: "/"
  }, {
    default: (0,external_vue_namespaceObject.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`Home`);
      } else {
        return [(0,external_vue_namespaceObject.createTextVNode)("Home")];
      }
    }),
    _: 1
  }, _parent));

  _push(` | `);

  _push((0,server_renderer_.ssrRenderComponent)(_component_router_link, {
    to: "/about"
  }, {
    default: (0,external_vue_namespaceObject.withCtx)((_, _push, _parent, _scopeId) => {
      if (_push) {
        _push(`About`);
      } else {
        return [(0,external_vue_namespaceObject.createTextVNode)("About")];
      }
    }),
    _: 1
  }, _parent));

  _push(`</nav>`);

  _push((0,server_renderer_.ssrRenderComponent)(_component_router_view, null, null, _parent));

  _push(`</article>`);
}
;// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=29048c96

;// CONCATENATED MODULE: ./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[1]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js
/* harmony default export */ const Appvue_type_script_lang_js = ({
  name: 'App'
});
;// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js
 
;// CONCATENATED MODULE: ./src/App.vue




;
const App_exports_ = /*#__PURE__*/(0,exportHelper/* default */.Z)(Appvue_type_script_lang_js, [['ssrRender',Appvue_type_template_id_29048c96_ssrRender]])

/* harmony default export */ const App = (App_exports_);
;// CONCATENATED MODULE: ./src/entry-server.js





async function createApp({
  url
}) {
  const app = (0,external_vue_namespaceObject.createSSRApp)(App);
  const router = src_router((0,external_vue_router_namespaceObject.createMemoryHistory)());
  const store = src_store();
  router.push(url);
  await router.isReady(); // vue-router 4.x版本使用这样的方式来获取匹配路由组件

  const matched = router.currentRoute.value.matched.flatMap(record => Object.values(record.components)); // 获取接口数据并添加到store中

  await Promise.all(matched.filter(item => item.asyncData).map(item => item.asyncData({
    store
  })));
  app.use(router);
  app.use(store);
  return {
    app,
    router,
    store
  };
}
})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=app.a8f4f64d.js.map