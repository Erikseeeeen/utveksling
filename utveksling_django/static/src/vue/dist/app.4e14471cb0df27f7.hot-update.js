"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(typeof self !== 'undefined' ? self : this)["webpackHotUpdatevueapp"]("app",{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UtvekslingLogo.vue?vue&type=script&lang=js":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UtvekslingLogo.vue?vue&type=script&lang=js ***!
  \************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'UtvekslingLogo',\n  components: {},\n  data: () => {\n    return {\n      typeValue: \"\",\n      typeStatus: false,\n      displayTextArray: [\"exchange\", \"intercambio\", \"交流\", \"تبادل\", \"अदला-बदली\", \"আদান-প্রদান\", \"intercâmbio\", \"обмен\", \"交換\", \"ਅਦਲਾ ਬਦਲੀ\", \"Austausch\", \"tukar guling\", \"交換\", \"교환\", \"échange\", \"అద్దె\", \"एक्सचेंज\", \"பரிவர்த்தனை\", \"ایکسچینج\", \"değiş tokuş\", \"scambio\", \"trao đổi\", \"交流\", \"shirya\", \"แลกเปลี่ยน\", \"એક્સચેંજ\", \"ವಿನಿಮಯ\", \"обмін\", \"palitan\", \"အရေးချိုးစနစ်\", \"اشتراک\"],\n      typingSpeed: 100,\n      erasingSpeed: 100,\n      newTextDelay: 2000,\n      displayTextArrayIndex: 0,\n      charIndex: 0\n    };\n  },\n  methods: {\n    typeText() {\n      if (this.charIndex < this.displayTextArray[this.displayTextArrayIndex].length) {\n        if (!this.typeStatus) this.typeStatus = true;\n        this.typeValue += this.displayTextArray[this.displayTextArrayIndex].charAt(this.charIndex);\n        this.charIndex += 1;\n        setTimeout(this.typeText, this.typingSpeed);\n      } else {\n        this.typeStatus = false;\n        setTimeout(this.eraseText, this.newTextDelay);\n      }\n    },\n    eraseText() {\n      if (this.charIndex > 0) {\n        if (!this.typeStatus) this.typeStatus = true;\n        this.typeValue = this.displayTextArray[this.displayTextArrayIndex].substring(0, this.charIndex - 1);\n        this.charIndex -= 1;\n        setTimeout(this.eraseText, this.erasingSpeed);\n      } else {\n        this.typeStatus = false;\n        this.displayTextArrayIndex += 1;\n        if (this.displayTextArrayIndex >= this.displayTextArray.length) this.displayTextArrayIndex = 0;\n        setTimeout(this.typeText, this.typingSpeed + 1000);\n      }\n    }\n  },\n  created() {\n    setTimeout(this.typeText, this.newTextDelay + 200);\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1V0dmVrc2xpbmdMb2dvLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyIsIm1hcHBpbmdzIjoiO0FBaUJBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFpQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92dWVhcHAvLi9zcmMvY29tcG9uZW50cy9VdHZla3NsaW5nTG9nby52dWU/ZjUyNSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPGRpdiBjbGFzcz1cImFwcC1jb250YWluZXJcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImNlbnRlcmVkLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGgxIGNsYXNzPVwibG9nb1wiPlxuICAgICAgICAgICAgICAgIFV0dmVrc2xpbmdcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInR5cGVkLXRleHRcIj57eyB0eXBlVmFsdWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJibGlua2luZy1jdXJzb3JcIj58PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY3Vyc29yXCIgOmNsYXNzPVwieyB0eXBpbmc6IHR5cGVTdGF0dXMgfVwiPiZuYnNwOzwvc3Bhbj5cbiAgICAgICAgICAgIDwvaDE+XG4gICAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuPC90ZW1wbGF0ZT5cblxuXG5cbjxzY3JpcHQ+XG5cbmV4cG9ydCBkZWZhdWx0IHtcbm5hbWU6ICdVdHZla3NsaW5nTG9nbycsXG5jb21wb25lbnRzOiB7XG59LFxuZGF0YTogKCkgPT4ge1xuICAgIHJldHVybiB7XG4gICAgdHlwZVZhbHVlOiBcIlwiLFxuICAgIHR5cGVTdGF0dXM6IGZhbHNlLFxuICAgIGRpc3BsYXlUZXh0QXJyYXk6IFtcbiAgICBcImV4Y2hhbmdlXCIsXG4gICAgXCJpbnRlcmNhbWJpb1wiLFxuICAgIFwi5Lqk5rWBXCIsXG4gICAgXCLYqtio2KfYr9mEXCIsXG4gICAgXCLgpIXgpKbgpLLgpL4t4KSs4KSm4KSy4KWAXCIsXG4gICAgXCLgpobgpqbgpr7gpqgt4Kaq4KeN4Kaw4Kam4Ka+4KaoXCIsXG4gICAgXCJpbnRlcmPDom1iaW9cIixcbiAgICBcItC+0LHQvNC10L1cIixcbiAgICBcIuS6pOaPm1wiLFxuICAgIFwi4KiF4Kim4Kiy4Ki+IOCorOCopuCosuCpgFwiLFxuICAgIFwiQXVzdGF1c2NoXCIsXG4gICAgXCJ0dWthciBndWxpbmdcIixcbiAgICBcIuS6pOaPm1wiLFxuICAgIFwi6rWQ7ZmYXCIsXG4gICAgXCLDqWNoYW5nZVwiLFxuICAgIFwi4LCF4LCm4LGN4LCm4LGGXCIsXG4gICAgXCLgpI/gpJXgpY3gpLjgpJrgpYfgpILgpJxcIixcbiAgICBcIuCuquCusOCuv+CuteCusOCvjeCupOCvjeCupOCuqeCviFwiLFxuICAgIFwi2KfbjNqp2LPahtuM2YbYrFwiLFxuICAgIFwiZGXEn2nFnyB0b2t1xZ9cIixcbiAgICBcInNjYW1iaW9cIixcbiAgICBcInRyYW8gxJHhu5VpXCIsXG4gICAgXCLkuqTmtYFcIixcbiAgICBcInNoaXJ5YVwiLFxuICAgIFwi4LmB4Lil4LiB4LmA4Lib4Lil4Li14LmI4Lii4LiZXCIsXG4gICAgXCLgqo/gqpXgq43gqrjgqprgq4fgqoLgqpxcIixcbiAgICBcIuCyteCyv+CyqOCyv+CyruCyr1wiLFxuICAgIFwi0L7QsdC80ZbQvVwiLFxuICAgIFwicGFsaXRhblwiLFxuICAgIFwi4YCh4YCb4YCx4YC44YCB4YC74YCt4YCv4YC44YCF4YCU4YCF4YC6XCIsXG4gICAgXCLYp9i02KrYsdin2qlcIixcbiAgICBdLFxuICAgIHR5cGluZ1NwZWVkOiAxMDAsXG4gICAgZXJhc2luZ1NwZWVkOiAxMDAsXG4gICAgbmV3VGV4dERlbGF5OiAyMDAwLFxuICAgIGRpc3BsYXlUZXh0QXJyYXlJbmRleDogMCxcbiAgICBjaGFySW5kZXg6IDAsXG4gICAgfTtcbn0sXG5tZXRob2RzOiB7XG4gICAgdHlwZVRleHQoKSB7XG4gICAgaWYgKHRoaXMuY2hhckluZGV4IDwgdGhpcy5kaXNwbGF5VGV4dEFycmF5W3RoaXMuZGlzcGxheVRleHRBcnJheUluZGV4XS5sZW5ndGgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnR5cGVTdGF0dXMpIHRoaXMudHlwZVN0YXR1cyA9IHRydWU7XG4gICAgICAgIHRoaXMudHlwZVZhbHVlICs9IHRoaXMuZGlzcGxheVRleHRBcnJheVt0aGlzLmRpc3BsYXlUZXh0QXJyYXlJbmRleF0uY2hhckF0KFxuICAgICAgICB0aGlzLmNoYXJJbmRleFxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNoYXJJbmRleCArPSAxO1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMudHlwZVRleHQsIHRoaXMudHlwaW5nU3BlZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZVN0YXR1cyA9IGZhbHNlO1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuZXJhc2VUZXh0LCB0aGlzLm5ld1RleHREZWxheSk7XG4gICAgfVxuICAgIH0sXG4gICAgZXJhc2VUZXh0KCkge1xuICAgIGlmICh0aGlzLmNoYXJJbmRleCA+IDApIHtcbiAgICAgICAgaWYgKCF0aGlzLnR5cGVTdGF0dXMpIHRoaXMudHlwZVN0YXR1cyA9IHRydWU7XG4gICAgICAgIHRoaXMudHlwZVZhbHVlID0gdGhpcy5kaXNwbGF5VGV4dEFycmF5W3RoaXMuZGlzcGxheVRleHRBcnJheUluZGV4XS5zdWJzdHJpbmcoXG4gICAgICAgIDAsXG4gICAgICAgIHRoaXMuY2hhckluZGV4IC0gMVxuICAgICAgICApO1xuICAgICAgICB0aGlzLmNoYXJJbmRleCAtPSAxO1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMuZXJhc2VUZXh0LCB0aGlzLmVyYXNpbmdTcGVlZCk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy50eXBlU3RhdHVzID0gZmFsc2U7XG4gICAgICAgIHRoaXMuZGlzcGxheVRleHRBcnJheUluZGV4ICs9IDE7XG4gICAgICAgIGlmICh0aGlzLmRpc3BsYXlUZXh0QXJyYXlJbmRleCA+PSB0aGlzLmRpc3BsYXlUZXh0QXJyYXkubGVuZ3RoKVxuICAgICAgICB0aGlzLmRpc3BsYXlUZXh0QXJyYXlJbmRleCA9IDA7XG4gICAgICAgIHNldFRpbWVvdXQodGhpcy50eXBlVGV4dCwgdGhpcy50eXBpbmdTcGVlZCArIDEwMDApO1xuICAgIH1cbiAgICB9LFxufSxcbmNyZWF0ZWQoKSB7XG4gICAgc2V0VGltZW91dCh0aGlzLnR5cGVUZXh0LCB0aGlzLm5ld1RleHREZWxheSArIDIwMCk7XG59LFxufVxuPC9zY3JpcHQ+XG5cbjxzdHlsZSBzY29wZWQ+XG4ubG9nbyB7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZvbnQtc2l6ZTogM3JlbTtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgY29sb3I6ICMyYzNlNTA7XG59XG5cbi5hcHAtY29udGFpbmVyIHtcbmRpc3BsYXk6IGZsZXg7XG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIHRoZSBjb250ZW50IGhvcml6b250YWxseSAqL1xufVxuXG4uY2VudGVyZWQtY29udGFpbmVyIHtcbndpZHRoOiA4MCU7IC8qIEFkanVzdCB0aGUgd2lkdGggdG8geW91ciBwcmVmZXJlbmNlICovXG59XG5cbiNhcHAge1xuZm9udC1mYW1pbHk6IEF2ZW5pciwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbi13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbnRleHQtYWxpZ246IGNlbnRlcjtcbmNvbG9yOiAjMmMzZTUwO1xubWFyZ2luLXRvcDogNjBweDtcbn1cbjwvc3R5bGU+XG5cbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cbi5jb250YWluZXIge1xud2lkdGg6IDEwMCU7XG5kaXNwbGF5OiBmbGV4O1xuanVzdGlmeS1jb250ZW50OiBsZWZ0O1xuYWxpZ24taXRlbXM6IGxlZnQ7XG59XG5oMSB7XG5mb250LXNpemU6IDNyZW07XG5mb250LXdlaWdodDogbm9ybWFsO1xuc3Bhbi50eXBlZC10ZXh0IHtcbiAgICBjb2xvcjogI2QyYjk0Yjtcbn1cbn1cblxuLy8gQ3Vyc29yIGJsaW5raW5nIENTUyBTdGFydHMuLi5cbi5ibGlua2luZy1jdXJzb3Ige1xuZm9udC1zaXplOiAzcmVtO1xuY29sb3I6ICMyYzNlNTA7XG4td2Via2l0LWFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XG4tbW96LWFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XG4tbXMtYW5pbWF0aW9uOiAxcyBibGluayBzdGVwLWVuZCBpbmZpbml0ZTtcbi1vLWFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XG5hbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xufVxuQGtleWZyYW1lcyBibGluayB7XG5mcm9tLFxudG8ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjUwJSB7XG4gICAgY29sb3I6ICMyYzNlNTA7XG59XG59XG5ALW1vei1rZXlmcmFtZXMgYmxpbmsge1xuZnJvbSxcbnRvIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG41MCUge1xuICAgIGNvbG9yOiAjMmMzZTUwO1xufVxufVxuQC13ZWJraXQta2V5ZnJhbWVzIGJsaW5rIHtcbmZyb20sXG50byB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuNTAlIHtcbiAgICBjb2xvcjogIzJjM2U1MDtcbn1cbn1cbkAtbXMta2V5ZnJhbWVzIGJsaW5rIHtcbmZyb20sXG50byB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuNTAlIHtcbiAgICBjb2xvcjogIzJjM2U1MDtcbn1cbn1cbkAtby1rZXlmcmFtZXMgYmxpbmsge1xuZnJvbSxcbnRvIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG41MCUge1xuICAgIGNvbG9yOiAjMmMzZTUwO1xufVxufVxuLy8gQ3Vyc29yIGJsaW5raW5nIENTUyBFbmRzLi4uXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UtvekslingLogo.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UtvekslingLogo.vue?vue&type=template&id=348996e7&scoped=true":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UtvekslingLogo.vue?vue&type=template&id=348996e7&scoped=true ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _withScopeId = n => ((0,vue__WEBPACK_IMPORTED_MODULE_0__.pushScopeId)(\"data-v-348996e7\"), n = n(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.popScopeId)(), n);\nconst _hoisted_1 = {\n  class: \"app-container\"\n};\nconst _hoisted_2 = {\n  class: \"centered-container\"\n};\nconst _hoisted_3 = {\n  class: \"logo\"\n};\nconst _hoisted_4 = {\n  class: \"typed-text\"\n};\nconst _hoisted_5 = /*#__PURE__*/_withScopeId(() => /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n  class: \"blinking-cursor\"\n}, \"|\", -1 /* HOISTED */));\n\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(\"div\", _hoisted_1, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"h1\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)(\" Utveksling \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", _hoisted_4, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(_ctx.typeValue), 1 /* TEXT */), _hoisted_5, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"span\", {\n    class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([\"cursor\", {\n      typing: _ctx.typeStatus\n    }])\n  }, \" \", 2 /* CLASS */)])])]);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvY29tcG9uZW50cy9VdHZla3NsaW5nTG9nby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MzQ4OTk2ZTcmc2NvcGVkPXRydWUiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFDQTtBQUFBOztBQUNBO0FBQUE7O0FBQ0E7QUFBQTs7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUFBOzs7QUFMQTtBQU1BO0FBQUE7QUFBQTtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdnVlYXBwLy4vc3JjL2NvbXBvbmVudHMvVXR2ZWtzbGluZ0xvZ28udnVlP2Y1MjUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICAgIDxkaXYgY2xhc3M9XCJhcHAtY29udGFpbmVyXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJlZC1jb250YWluZXJcIj5cbiAgICAgICAgICAgIDxoMSBjbGFzcz1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICBVdHZla3NsaW5nXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0eXBlZC10ZXh0XCI+e3sgdHlwZVZhbHVlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmxpbmtpbmctY3Vyc29yXCI+fDwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImN1cnNvclwiIDpjbGFzcz1cInsgdHlwaW5nOiB0eXBlU3RhdHVzIH1cIj4mbmJzcDs8L3NwYW4+XG4gICAgICAgICAgICA8L2gxPlxuICAgICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cblxuXG48c2NyaXB0PlxuXG5leHBvcnQgZGVmYXVsdCB7XG5uYW1lOiAnVXR2ZWtzbGluZ0xvZ28nLFxuY29tcG9uZW50czoge1xufSxcbmRhdGE6ICgpID0+IHtcbiAgICByZXR1cm4ge1xuICAgIHR5cGVWYWx1ZTogXCJcIixcbiAgICB0eXBlU3RhdHVzOiBmYWxzZSxcbiAgICBkaXNwbGF5VGV4dEFycmF5OiBbXG4gICAgXCJleGNoYW5nZVwiLFxuICAgIFwiaW50ZXJjYW1iaW9cIixcbiAgICBcIuS6pOa1gVwiLFxuICAgIFwi2KrYqNin2K/ZhFwiLFxuICAgIFwi4KSF4KSm4KSy4KS+LeCkrOCkpuCksuClgFwiLFxuICAgIFwi4KaG4Kam4Ka+4KaoLeCmquCnjeCmsOCmpuCmvuCmqFwiLFxuICAgIFwiaW50ZXJjw6JtYmlvXCIsXG4gICAgXCLQvtCx0LzQtdC9XCIsXG4gICAgXCLkuqTmj5tcIixcbiAgICBcIuCoheCopuCosuCoviDgqKzgqKbgqLLgqYBcIixcbiAgICBcIkF1c3RhdXNjaFwiLFxuICAgIFwidHVrYXIgZ3VsaW5nXCIsXG4gICAgXCLkuqTmj5tcIixcbiAgICBcIuq1kO2ZmFwiLFxuICAgIFwiw6ljaGFuZ2VcIixcbiAgICBcIuCwheCwpuCxjeCwpuCxhlwiLFxuICAgIFwi4KSP4KSV4KWN4KS44KSa4KWH4KSC4KScXCIsXG4gICAgXCLgrqrgrrDgrr/grrXgrrDgr43grqTgr43grqTgrqngr4hcIixcbiAgICBcItin24zaqdiz2obbjNmG2KxcIixcbiAgICBcImRlxJ9pxZ8gdG9rdcWfXCIsXG4gICAgXCJzY2FtYmlvXCIsXG4gICAgXCJ0cmFvIMSR4buVaVwiLFxuICAgIFwi5Lqk5rWBXCIsXG4gICAgXCJzaGlyeWFcIixcbiAgICBcIuC5geC4peC4geC5gOC4m+C4peC4teC5iOC4ouC4mVwiLFxuICAgIFwi4KqP4KqV4KuN4Kq44Kqa4KuH4KqC4KqcXCIsXG4gICAgXCLgsrXgsr/gsqjgsr/gsq7gsq9cIixcbiAgICBcItC+0LHQvNGW0L1cIixcbiAgICBcInBhbGl0YW5cIixcbiAgICBcIuGAoeGAm+GAseGAuOGAgeGAu+GAreGAr+GAuOGAheGAlOGAheGAulwiLFxuICAgIFwi2KfYtNiq2LHYp9qpXCIsXG4gICAgXSxcbiAgICB0eXBpbmdTcGVlZDogMTAwLFxuICAgIGVyYXNpbmdTcGVlZDogMTAwLFxuICAgIG5ld1RleHREZWxheTogMjAwMCxcbiAgICBkaXNwbGF5VGV4dEFycmF5SW5kZXg6IDAsXG4gICAgY2hhckluZGV4OiAwLFxuICAgIH07XG59LFxubWV0aG9kczoge1xuICAgIHR5cGVUZXh0KCkge1xuICAgIGlmICh0aGlzLmNoYXJJbmRleCA8IHRoaXMuZGlzcGxheVRleHRBcnJheVt0aGlzLmRpc3BsYXlUZXh0QXJyYXlJbmRleF0ubGVuZ3RoKSB7XG4gICAgICAgIGlmICghdGhpcy50eXBlU3RhdHVzKSB0aGlzLnR5cGVTdGF0dXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnR5cGVWYWx1ZSArPSB0aGlzLmRpc3BsYXlUZXh0QXJyYXlbdGhpcy5kaXNwbGF5VGV4dEFycmF5SW5kZXhdLmNoYXJBdChcbiAgICAgICAgdGhpcy5jaGFySW5kZXhcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jaGFySW5kZXggKz0gMTtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLnR5cGVUZXh0LCB0aGlzLnR5cGluZ1NwZWVkKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnR5cGVTdGF0dXMgPSBmYWxzZTtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLmVyYXNlVGV4dCwgdGhpcy5uZXdUZXh0RGVsYXkpO1xuICAgIH1cbiAgICB9LFxuICAgIGVyYXNlVGV4dCgpIHtcbiAgICBpZiAodGhpcy5jaGFySW5kZXggPiAwKSB7XG4gICAgICAgIGlmICghdGhpcy50eXBlU3RhdHVzKSB0aGlzLnR5cGVTdGF0dXMgPSB0cnVlO1xuICAgICAgICB0aGlzLnR5cGVWYWx1ZSA9IHRoaXMuZGlzcGxheVRleHRBcnJheVt0aGlzLmRpc3BsYXlUZXh0QXJyYXlJbmRleF0uc3Vic3RyaW5nKFxuICAgICAgICAwLFxuICAgICAgICB0aGlzLmNoYXJJbmRleCAtIDFcbiAgICAgICAgKTtcbiAgICAgICAgdGhpcy5jaGFySW5kZXggLT0gMTtcbiAgICAgICAgc2V0VGltZW91dCh0aGlzLmVyYXNlVGV4dCwgdGhpcy5lcmFzaW5nU3BlZWQpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMudHlwZVN0YXR1cyA9IGZhbHNlO1xuICAgICAgICB0aGlzLmRpc3BsYXlUZXh0QXJyYXlJbmRleCArPSAxO1xuICAgICAgICBpZiAodGhpcy5kaXNwbGF5VGV4dEFycmF5SW5kZXggPj0gdGhpcy5kaXNwbGF5VGV4dEFycmF5Lmxlbmd0aClcbiAgICAgICAgdGhpcy5kaXNwbGF5VGV4dEFycmF5SW5kZXggPSAwO1xuICAgICAgICBzZXRUaW1lb3V0KHRoaXMudHlwZVRleHQsIHRoaXMudHlwaW5nU3BlZWQgKyAxMDAwKTtcbiAgICB9XG4gICAgfSxcbn0sXG5jcmVhdGVkKCkge1xuICAgIHNldFRpbWVvdXQodGhpcy50eXBlVGV4dCwgdGhpcy5uZXdUZXh0RGVsYXkgKyAyMDApO1xufSxcbn1cbjwvc2NyaXB0PlxuXG48c3R5bGUgc2NvcGVkPlxuLmxvZ28ge1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDNyZW07XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGNvbG9yOiAjMmMzZTUwO1xufVxuXG4uYXBwLWNvbnRhaW5lciB7XG5kaXNwbGF5OiBmbGV4O1xuZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbmFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgY29udGVudCBob3Jpem9udGFsbHkgKi9cbn1cblxuLmNlbnRlcmVkLWNvbnRhaW5lciB7XG53aWR0aDogODAlOyAvKiBBZGp1c3QgdGhlIHdpZHRoIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xufVxuXG4jYXBwIHtcbmZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XG4td2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbi1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG50ZXh0LWFsaWduOiBjZW50ZXI7XG5jb2xvcjogIzJjM2U1MDtcbm1hcmdpbi10b3A6IDYwcHg7XG59XG48L3N0eWxlPlxuXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uY29udGFpbmVyIHtcbndpZHRoOiAxMDAlO1xuZGlzcGxheTogZmxleDtcbmp1c3RpZnktY29udGVudDogbGVmdDtcbmFsaWduLWl0ZW1zOiBsZWZ0O1xufVxuaDEge1xuZm9udC1zaXplOiAzcmVtO1xuZm9udC13ZWlnaHQ6IG5vcm1hbDtcbnNwYW4udHlwZWQtdGV4dCB7XG4gICAgY29sb3I6ICNkMmI5NGI7XG59XG59XG5cbi8vIEN1cnNvciBibGlua2luZyBDU1MgU3RhcnRzLi4uXG4uYmxpbmtpbmctY3Vyc29yIHtcbmZvbnQtc2l6ZTogM3JlbTtcbmNvbG9yOiAjMmMzZTUwO1xuLXdlYmtpdC1hbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xuLW1vei1hbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xuLW1zLWFuaW1hdGlvbjogMXMgYmxpbmsgc3RlcC1lbmQgaW5maW5pdGU7XG4tby1hbmltYXRpb246IDFzIGJsaW5rIHN0ZXAtZW5kIGluZmluaXRlO1xuYW5pbWF0aW9uOiAxcyBibGluayBzdGVwLWVuZCBpbmZpbml0ZTtcbn1cbkBrZXlmcmFtZXMgYmxpbmsge1xuZnJvbSxcbnRvIHtcbiAgICBjb2xvcjogdHJhbnNwYXJlbnQ7XG59XG41MCUge1xuICAgIGNvbG9yOiAjMmMzZTUwO1xufVxufVxuQC1tb3ota2V5ZnJhbWVzIGJsaW5rIHtcbmZyb20sXG50byB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuNTAlIHtcbiAgICBjb2xvcjogIzJjM2U1MDtcbn1cbn1cbkAtd2Via2l0LWtleWZyYW1lcyBibGluayB7XG5mcm9tLFxudG8ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjUwJSB7XG4gICAgY29sb3I6ICMyYzNlNTA7XG59XG59XG5ALW1zLWtleWZyYW1lcyBibGluayB7XG5mcm9tLFxudG8ge1xuICAgIGNvbG9yOiB0cmFuc3BhcmVudDtcbn1cbjUwJSB7XG4gICAgY29sb3I6ICMyYzNlNTA7XG59XG59XG5ALW8ta2V5ZnJhbWVzIGJsaW5rIHtcbmZyb20sXG50byB7XG4gICAgY29sb3I6IHRyYW5zcGFyZW50O1xufVxuNTAlIHtcbiAgICBjb2xvcjogIzJjM2U1MDtcbn1cbn1cbi8vIEN1cnNvciBibGlua2luZyBDU1MgRW5kcy4uLlxuPC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UtvekslingLogo.vue?vue&type=template&id=348996e7&scoped=true\n");

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UtvekslingLogo.vue?vue&type=style&index=0&id=348996e7&scoped=true&lang=css":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UtvekslingLogo.vue?vue&type=style&index=0&id=348996e7&scoped=true&lang=css ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"\\n.logo[data-v-348996e7] {\\n  align-items: center;\\n  display: flex;\\n  flex-direction: column;\\n  font-size: 3rem;\\n  font-weight: normal;\\n  color: #2c3e50;\\n}\\n.app-container[data-v-348996e7] {\\ndisplay: flex;\\nflex-direction: column;\\nalign-items: center; /* Center the content horizontally */\\n}\\n.centered-container[data-v-348996e7] {\\nwidth: 80%; /* Adjust the width to your preference */\\n}\\n#app[data-v-348996e7] {\\nfont-family: Avenir, Helvetica, Arial, sans-serif;\\n-webkit-font-smoothing: antialiased;\\n-moz-osx-font-smoothing: grayscale;\\ntext-align: center;\\ncolor: #2c3e50;\\nmargin-top: 60px;\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMV0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9kaXN0L2Nqcy5qcz8/Y2xvbmVkUnVsZVNldC0xMi51c2VbMl0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9jb21wb25lbnRzL1V0dmVrc2xpbmdMb2dvLnZ1ZT92dWUmdHlwZT1zdHlsZSZpbmRleD0wJmlkPTM0ODk5NmU3JnNjb3BlZD10cnVlJmxhbmc9Y3NzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC8uL3NyYy9jb21wb25lbnRzL1V0dmVrc2xpbmdMb2dvLnZ1ZT83OGFkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9OT19TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvbm9Tb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfTk9fU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJcXG4ubG9nb1tkYXRhLXYtMzQ4OTk2ZTddIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBjb2xvcjogIzJjM2U1MDtcXG59XFxuLmFwcC1jb250YWluZXJbZGF0YS12LTM0ODk5NmU3XSB7XFxuZGlzcGxheTogZmxleDtcXG5mbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbmFsaWduLWl0ZW1zOiBjZW50ZXI7IC8qIENlbnRlciB0aGUgY29udGVudCBob3Jpem9udGFsbHkgKi9cXG59XFxuLmNlbnRlcmVkLWNvbnRhaW5lcltkYXRhLXYtMzQ4OTk2ZTddIHtcXG53aWR0aDogODAlOyAvKiBBZGp1c3QgdGhlIHdpZHRoIHRvIHlvdXIgcHJlZmVyZW5jZSAqL1xcbn1cXG4jYXBwW2RhdGEtdi0zNDg5OTZlN10ge1xcbmZvbnQtZmFtaWx5OiBBdmVuaXIsIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWY7XFxuLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxuLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXG50ZXh0LWFsaWduOiBjZW50ZXI7XFxuY29sb3I6ICMyYzNlNTA7XFxubWFyZ2luLXRvcDogNjBweDtcXG59XFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12.use[1]!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12.use[2]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/components/UtvekslingLogo.vue?vue&type=style&index=0&id=348996e7&scoped=true&lang=css\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "98c89d9cd9b8bdbe"; }
/******/ }();
/******/ 
/******/ }
);