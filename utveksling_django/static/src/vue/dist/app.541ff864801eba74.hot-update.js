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

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_LeafletMap_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/LeafletMap.vue */ \"./src/components/LeafletMap.vue\");\n/* harmony import */ var _components_DropdownTextfield_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/DropdownTextfield.vue */ \"./src/components/DropdownTextfield.vue\");\n/* harmony import */ var _components_UtvekslingLogo_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/UtvekslingLogo.vue */ \"./src/components/UtvekslingLogo.vue\");\n/* harmony import */ var _components_UniversityCards_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/UniversityCards.vue */ \"./src/components/UniversityCards.vue\");\n/* harmony import */ var _universities_csv__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./universities.csv */ \"./src/universities.csv\");\n/* harmony import */ var _programs_csv__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./programs.csv */ \"./src/programs.csv\");\n\n\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  name: 'App',\n  data() {\n    return {\n      last_input_program: '',\n      universities: []\n    };\n  },\n  async mounted() {\n    await this.read_universities();\n    await this.read_programs();\n  },\n  components: {\n    LeafletMap: _components_LeafletMap_vue__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n    DropdownTextfield: _components_DropdownTextfield_vue__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n    UtvekslingLogo: _components_UtvekslingLogo_vue__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    UniversityCards: _components_UniversityCards_vue__WEBPACK_IMPORTED_MODULE_3__[\"default\"]\n  },\n  methods: {\n    handleTextFieldEvent(event) {\n      this.last_input_program = event.name;\n      this.read_universities();\n    },\n    parseProgramsCSV(csvText) {\n      console.log(\"parsing csv\");\n      const csvData = this.$papa.parse(csvText, {\n        header: true,\n        skipEmptyLines: true\n      });\n      console.log(\"parsed csv\");\n      let programs = csvData.data.map(record => {\n        return {\n          name: record['program']\n        };\n      });\n      return programs;\n    },\n    parseUniversityCSV(csvText) {\n      const csvData = this.$papa.parse(csvText, {\n        header: true,\n        skipEmptyLines: true\n      });\n      let universities = csvData.data.map((record, i) => {\n        return {\n          lat: record['lat'],\n          lng: record['lng'],\n          number_id: i,\n          city: record['city'],\n          country: record['country'],\n          report_id_list: JSON.parse(record['programs'].replace(/'/g, '\"').replace(/,}/g, \"}\"))[this.last_input_program],\n          number_of_students: JSON.parse(record['programs'].replace(/'/g, '\"').replace(/,}/g, \"}\"))[this.last_input_program] ? JSON.parse(JSON.stringify(JSON.parse(record['programs'].replace(/'/g, '\"').replace(/,}/g, \"}\"))[this.last_input_program])).length : 0,\n          name: record['name']\n        };\n      });\n      return universities;\n    },\n    async read_programs() {\n      try {\n        console.log(\"trying to read programs\");\n        this.programs = this.parseProgramsCSV(_programs_csv__WEBPACK_IMPORTED_MODULE_5__[\"default\"]);\n        console.log(this.programs[20]);\n      } catch (error) {\n        console.error(\"Error fetching programs:\", error);\n      }\n    },\n    async read_universities() {\n      try {\n        console.log(\"trying to read universities\");\n        this.universities = this.parseUniversityCSV(_universities_csv__WEBPACK_IMPORTED_MODULE_4__[\"default\"]);\n        console.log(this.universities);\n        // Sort this.universities by number_of_students\n        // this.universities.sort((a, b) => {\n        //   return b.number_of_students - a.number_of_students;\n        // });\n      } catch (error) {\n        console.error(\"Error fetching universities:\", error);\n      }\n    }\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzBdLnVzZVswXSEuL3NyYy9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUEwQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC8uL3NyYy9BcHAudnVlPzkxYTAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8aGVhZD5cbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYnVsbWFAMC45LjAvY3NzL2J1bG1hLm1pbi5jc3NcIj5cbiAgICAgIDx0aXRsZT5VdHZla3NsaW5nPC90aXRsZT5cbiAgPC9oZWFkPlxuICA8ZGl2IGNsYXNzPVwiYXBwLWNvbnRhaW5lclwiIHN0eWxlPVwibWFyZ2luLXRvcDogMS4zcmVtO1wiPiA8IS0tIEFkZGVkIGEgY2xhc3MgZm9yIGNlbnRlcmluZyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY2VudGVyZWQtY29udGFpbmVyXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxcmVtO1wiPlxuICAgICAgPHV0dmVrc2xpbmctbG9nbyAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJlZC1jb250YWluZXJcIj4gPCEtLSBBZGRlZCBhIGNsYXNzIGZvciBjZW50ZXJpbmcgLS0+XG4gICAgICA8bGVhZmxldC1tYXAgOnVuaXZlcnNpdGllcz1cInRoaXMudW5pdmVyc2l0aWVzXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2VudGVyZWQtY29udGFpbmVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtO1wiPiA8IS0tIEFkZGVkIGEgY2xhc3MgZm9yIGNlbnRlcmluZyAtLT5cbiAgICAgIDxkcm9wZG93bi10ZXh0ZmllbGQgQGxhc3QtaW5wdXQtcHJvZ3JhbT1cImhhbmRsZVRleHRGaWVsZEV2ZW50XCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJlZC1jb250YWluZXJcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDFyZW07XCI+IDwhLS0gQWRkZWQgYSBjbGFzcyBmb3IgY2VudGVyaW5nIC0tPlxuICAgICAgPHVuaXZlcnNpdHktY2FyZHMgOmxhc3RfaW5wdXRfcHJvZ3JhbT1cInRoaXMubGFzdF9pbnB1dF9wcm9ncmFtXCIgOnVuaXZlcnNpdGllcz1cInRoaXMudW5pdmVyc2l0aWVzXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cblxuPHNjcmlwdD5cbmltcG9ydCBMZWFmbGV0TWFwIGZyb20gJy4vY29tcG9uZW50cy9MZWFmbGV0TWFwLnZ1ZSdcbmltcG9ydCBEcm9wZG93blRleHRmaWVsZCBmcm9tICcuL2NvbXBvbmVudHMvRHJvcGRvd25UZXh0ZmllbGQudnVlJ1xuaW1wb3J0IFV0dmVrc2xpbmdMb2dvIGZyb20gJy4vY29tcG9uZW50cy9VdHZla3NsaW5nTG9nby52dWUnXG5pbXBvcnQgVW5pdmVyc2l0eUNhcmRzIGZyb20gJy4vY29tcG9uZW50cy9Vbml2ZXJzaXR5Q2FyZHMudnVlJ1xuaW1wb3J0IFVuaXZlcnNpdGllc0NzdiBmcm9tICcuL3VuaXZlcnNpdGllcy5jc3YnXG5pbXBvcnQgUHJvZ3JhbXNDc3YgZnJvbSAnLi9wcm9ncmFtcy5jc3YnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0FwcCcsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhc3RfaW5wdXRfcHJvZ3JhbTogJycsXG4gICAgICB1bml2ZXJzaXRpZXM6IFtdLFxuICAgIH1cbiAgfSxcbiAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICBhd2FpdCB0aGlzLnJlYWRfdW5pdmVyc2l0aWVzKCk7XG4gICAgYXdhaXQgdGhpcy5yZWFkX3Byb2dyYW1zKCk7XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBMZWFmbGV0TWFwLFxuICAgIERyb3Bkb3duVGV4dGZpZWxkLFxuICAgIFV0dmVrc2xpbmdMb2dvLFxuICAgIFVuaXZlcnNpdHlDYXJkcyxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZVRleHRGaWVsZEV2ZW50KGV2ZW50KSB7XG4gICAgICB0aGlzLmxhc3RfaW5wdXRfcHJvZ3JhbSA9IGV2ZW50Lm5hbWVcbiAgICAgIHRoaXMucmVhZF91bml2ZXJzaXRpZXMoKTtcbiAgICB9LFxuICAgIHBhcnNlUHJvZ3JhbXNDU1YoY3N2VGV4dCkge1xuICAgICAgY29uc29sZS5sb2coXCJwYXJzaW5nIGNzdlwiKTtcbiAgICAgIGNvbnN0IGNzdkRhdGEgPSB0aGlzLiRwYXBhLnBhcnNlKGNzdlRleHQsIHtcbiAgICAgICAgaGVhZGVyOiB0cnVlLFxuICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJwYXJzZWQgY3N2XCIpO1xuXG4gICAgICBsZXQgcHJvZ3JhbXMgPSBjc3ZEYXRhLmRhdGEubWFwKChyZWNvcmQpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogcmVjb3JkWydwcm9ncmFtJ10sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvZ3JhbXM7XG4gICAgfSxcbiAgICBwYXJzZVVuaXZlcnNpdHlDU1YoY3N2VGV4dCkge1xuICAgICAgY29uc3QgY3N2RGF0YSA9IHRoaXMuJHBhcGEucGFyc2UoY3N2VGV4dCwge1xuICAgICAgICBoZWFkZXI6IHRydWUsXG4gICAgICAgIHNraXBFbXB0eUxpbmVzOiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICAgIGxldCB1bml2ZXJzaXRpZXMgPSBjc3ZEYXRhLmRhdGEubWFwKChyZWNvcmQsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGF0OiByZWNvcmRbJ2xhdCddLFxuICAgICAgICAgICAgbG5nOiByZWNvcmRbJ2xuZyddLFxuICAgICAgICAgICAgbnVtYmVyX2lkOiBpLFxuICAgICAgICAgICAgY2l0eTogcmVjb3JkWydjaXR5J10sXG4gICAgICAgICAgICBjb3VudHJ5OiByZWNvcmRbJ2NvdW50cnknXSxcbiAgICAgICAgICAgIHJlcG9ydF9pZF9saXN0OiBKU09OLnBhcnNlKHJlY29yZFsncHJvZ3JhbXMnXS5yZXBsYWNlKC8nL2csICdcIicpLnJlcGxhY2UoLyx9L2csIFwifVwiKSlbdGhpcy5sYXN0X2lucHV0X3Byb2dyYW1dLFxuICAgICAgICAgICAgbnVtYmVyX29mX3N0dWRlbnRzOiBKU09OLnBhcnNlKHJlY29yZFsncHJvZ3JhbXMnXS5yZXBsYWNlKC8nL2csICdcIicpLnJlcGxhY2UoLyx9L2csIFwifVwiKSlbdGhpcy5sYXN0X2lucHV0X3Byb2dyYW1dID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShKU09OLnBhcnNlKHJlY29yZFsncHJvZ3JhbXMnXS5yZXBsYWNlKC8nL2csICdcIicpLnJlcGxhY2UoLyx9L2csIFwifVwiKSlbdGhpcy5sYXN0X2lucHV0X3Byb2dyYW1dKSkubGVuZ3RoIDogMCxcbiAgICAgICAgICAgIG5hbWU6IHJlY29yZFsnbmFtZSddLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuIHVuaXZlcnNpdGllcztcbiAgICB9LFxuICAgIGFzeW5jIHJlYWRfcHJvZ3JhbXMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRyeWluZyB0byByZWFkIHByb2dyYW1zXCIpO1xuICAgICAgICB0aGlzLnByb2dyYW1zID0gdGhpcy5wYXJzZVByb2dyYW1zQ1NWKFByb2dyYW1zQ3N2KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9ncmFtc1syMF0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHByb2dyYW1zOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyByZWFkX3VuaXZlcnNpdGllcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJ5aW5nIHRvIHJlYWQgdW5pdmVyc2l0aWVzXCIpO1xuICAgICAgICB0aGlzLnVuaXZlcnNpdGllcyA9IHRoaXMucGFyc2VVbml2ZXJzaXR5Q1NWKFVuaXZlcnNpdGllc0Nzdik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudW5pdmVyc2l0aWVzKTtcbiAgICAgICAgLy8gU29ydCB0aGlzLnVuaXZlcnNpdGllcyBieSBudW1iZXJfb2Zfc3R1ZGVudHNcbiAgICAgICAgLy8gdGhpcy51bml2ZXJzaXRpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAvLyAgIHJldHVybiBiLm51bWJlcl9vZl9zdHVkZW50cyAtIGEubnVtYmVyX29mX3N0dWRlbnRzO1xuICAgICAgICAvLyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1bml2ZXJzaXRpZXM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gIH1cbn1cbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=script&lang=js\n");

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90 ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   render: function() { return /* binding */ render; }\n/* harmony export */ });\n/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ \"./node_modules/vue/dist/vue.esm-bundler.js\");\n\nconst _hoisted_1 = /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"head\", null, [/*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"meta\", {\n  charset: \"utf-8\"\n}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"meta\", {\n  name: \"viewport\",\n  content: \"width=device-width, initial-scale=1\"\n}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"link\", {\n  rel: \"stylesheet\",\n  href: \"https://cdn.jsdelivr.net/npm/bulma@0.9.0/css/bulma.min.css\"\n}), /*#__PURE__*/(0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"title\", null, \"Utveksling\")], -1 /* HOISTED */);\nconst _hoisted_2 = {\n  class: \"app-container\",\n  style: {\n    \"margin-top\": \"1.3rem\"\n  }\n};\nconst _hoisted_3 = {\n  class: \"centered-container\",\n  style: {\n    \"margin-bottom\": \"1rem\"\n  }\n};\nconst _hoisted_4 = {\n  class: \"centered-container\"\n};\nconst _hoisted_5 = {\n  class: \"centered-container\",\n  style: {\n    \"margin-top\": \"1rem\"\n  }\n};\nconst _hoisted_6 = {\n  class: \"centered-container\",\n  style: {\n    \"margin-top\": \"1rem\"\n  }\n};\nfunction render(_ctx, _cache, $props, $setup, $data, $options) {\n  const _component_utveksling_logo = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"utveksling-logo\");\n  const _component_leaflet_map = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"leaflet-map\");\n  const _component_dropdown_textfield = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"dropdown-textfield\");\n  const _component_university_cards = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)(\"university-cards\");\n  return (0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [_hoisted_1, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_2, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Added a class for centering \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_3, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_utveksling_logo)]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_4, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Added a class for centering \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_leaflet_map, {\n    universities: this.universities\n  }, null, 8 /* PROPS */, [\"universities\"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_5, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Added a class for centering \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_dropdown_textfield, {\n    onLastInputProgram: $options.handleTextFieldEvent\n  }, null, 8 /* PROPS */, [\"onLastInputProgram\"])]), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)(\"div\", _hoisted_6, [(0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(\" Added a class for centering \"), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_university_cards, {\n    last_input_program: this.last_input_program,\n    universities: this.universities\n  }, null, 8 /* PROPS */, [\"last_input_program\", \"universities\"])])])], 64 /* STABLE_FRAGMENT */);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcz8/Y2xvbmVkUnVsZVNldC00MC51c2VbMF0hLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3RlbXBsYXRlTG9hZGVyLmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzNdIS4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFswXS51c2VbMF0hLi9zcmMvQXBwLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD03YmE1YmQ5MCIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7O0FBRUE7QUFBQTtBQUFBO0FBQUE7OztBQUNBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUFBOztBQUdBO0FBQUE7QUFBQTtBQUFBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTs7Ozs7OztBQWhCQTtBQVdBO0FBRUE7QUFDQTtBQUFBO0FBR0E7QUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Z1ZWFwcC8uL3NyYy9BcHAudnVlPzkxYTAiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuICA8aGVhZD5cbiAgICAgIDxtZXRhIGNoYXJzZXQ9XCJ1dGYtOFwiPlxuICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCI+XG4gICAgICA8bGluayByZWw9XCJzdHlsZXNoZWV0XCIgaHJlZj1cImh0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9ucG0vYnVsbWFAMC45LjAvY3NzL2J1bG1hLm1pbi5jc3NcIj5cbiAgICAgIDx0aXRsZT5VdHZla3NsaW5nPC90aXRsZT5cbiAgPC9oZWFkPlxuICA8ZGl2IGNsYXNzPVwiYXBwLWNvbnRhaW5lclwiIHN0eWxlPVwibWFyZ2luLXRvcDogMS4zcmVtO1wiPiA8IS0tIEFkZGVkIGEgY2xhc3MgZm9yIGNlbnRlcmluZyAtLT5cbiAgICA8ZGl2IGNsYXNzPVwiY2VudGVyZWQtY29udGFpbmVyXCIgc3R5bGU9XCJtYXJnaW4tYm90dG9tOiAxcmVtO1wiPlxuICAgICAgPHV0dmVrc2xpbmctbG9nbyAvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJlZC1jb250YWluZXJcIj4gPCEtLSBBZGRlZCBhIGNsYXNzIGZvciBjZW50ZXJpbmcgLS0+XG4gICAgICA8bGVhZmxldC1tYXAgOnVuaXZlcnNpdGllcz1cInRoaXMudW5pdmVyc2l0aWVzXCIgLz5cbiAgICA8L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiY2VudGVyZWQtY29udGFpbmVyXCIgc3R5bGU9XCJtYXJnaW4tdG9wOiAxcmVtO1wiPiA8IS0tIEFkZGVkIGEgY2xhc3MgZm9yIGNlbnRlcmluZyAtLT5cbiAgICAgIDxkcm9wZG93bi10ZXh0ZmllbGQgQGxhc3QtaW5wdXQtcHJvZ3JhbT1cImhhbmRsZVRleHRGaWVsZEV2ZW50XCIvPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJjZW50ZXJlZC1jb250YWluZXJcIiBzdHlsZT1cIm1hcmdpbi10b3A6IDFyZW07XCI+IDwhLS0gQWRkZWQgYSBjbGFzcyBmb3IgY2VudGVyaW5nIC0tPlxuICAgICAgPHVuaXZlcnNpdHktY2FyZHMgOmxhc3RfaW5wdXRfcHJvZ3JhbT1cInRoaXMubGFzdF9pbnB1dF9wcm9ncmFtXCIgOnVuaXZlcnNpdGllcz1cInRoaXMudW5pdmVyc2l0aWVzXCIgLz5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3RlbXBsYXRlPlxuXG5cblxuPHNjcmlwdD5cbmltcG9ydCBMZWFmbGV0TWFwIGZyb20gJy4vY29tcG9uZW50cy9MZWFmbGV0TWFwLnZ1ZSdcbmltcG9ydCBEcm9wZG93blRleHRmaWVsZCBmcm9tICcuL2NvbXBvbmVudHMvRHJvcGRvd25UZXh0ZmllbGQudnVlJ1xuaW1wb3J0IFV0dmVrc2xpbmdMb2dvIGZyb20gJy4vY29tcG9uZW50cy9VdHZla3NsaW5nTG9nby52dWUnXG5pbXBvcnQgVW5pdmVyc2l0eUNhcmRzIGZyb20gJy4vY29tcG9uZW50cy9Vbml2ZXJzaXR5Q2FyZHMudnVlJ1xuaW1wb3J0IFVuaXZlcnNpdGllc0NzdiBmcm9tICcuL3VuaXZlcnNpdGllcy5jc3YnXG5pbXBvcnQgUHJvZ3JhbXNDc3YgZnJvbSAnLi9wcm9ncmFtcy5jc3YnXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgbmFtZTogJ0FwcCcsXG4gIGRhdGEoKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGxhc3RfaW5wdXRfcHJvZ3JhbTogJycsXG4gICAgICB1bml2ZXJzaXRpZXM6IFtdLFxuICAgIH1cbiAgfSxcbiAgYXN5bmMgbW91bnRlZCgpIHtcbiAgICBhd2FpdCB0aGlzLnJlYWRfdW5pdmVyc2l0aWVzKCk7XG4gICAgYXdhaXQgdGhpcy5yZWFkX3Byb2dyYW1zKCk7XG4gIH0sXG4gIGNvbXBvbmVudHM6IHtcbiAgICBMZWFmbGV0TWFwLFxuICAgIERyb3Bkb3duVGV4dGZpZWxkLFxuICAgIFV0dmVrc2xpbmdMb2dvLFxuICAgIFVuaXZlcnNpdHlDYXJkcyxcbiAgfSxcbiAgbWV0aG9kczoge1xuICAgIGhhbmRsZVRleHRGaWVsZEV2ZW50KGV2ZW50KSB7XG4gICAgICB0aGlzLmxhc3RfaW5wdXRfcHJvZ3JhbSA9IGV2ZW50Lm5hbWVcbiAgICAgIHRoaXMucmVhZF91bml2ZXJzaXRpZXMoKTtcbiAgICB9LFxuICAgIHBhcnNlUHJvZ3JhbXNDU1YoY3N2VGV4dCkge1xuICAgICAgY29uc29sZS5sb2coXCJwYXJzaW5nIGNzdlwiKTtcbiAgICAgIGNvbnN0IGNzdkRhdGEgPSB0aGlzLiRwYXBhLnBhcnNlKGNzdlRleHQsIHtcbiAgICAgICAgaGVhZGVyOiB0cnVlLFxuICAgICAgICBza2lwRW1wdHlMaW5lczogdHJ1ZSxcbiAgICAgIH0pO1xuICAgICAgY29uc29sZS5sb2coXCJwYXJzZWQgY3N2XCIpO1xuXG4gICAgICBsZXQgcHJvZ3JhbXMgPSBjc3ZEYXRhLmRhdGEubWFwKChyZWNvcmQpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogcmVjb3JkWydwcm9ncmFtJ10sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgICByZXR1cm4gcHJvZ3JhbXM7XG4gICAgfSxcbiAgICBwYXJzZVVuaXZlcnNpdHlDU1YoY3N2VGV4dCkge1xuICAgICAgY29uc3QgY3N2RGF0YSA9IHRoaXMuJHBhcGEucGFyc2UoY3N2VGV4dCwge1xuICAgICAgICBoZWFkZXI6IHRydWUsXG4gICAgICAgIHNraXBFbXB0eUxpbmVzOiB0cnVlLFxuICAgICAgfSk7XG5cbiAgICAgIGxldCB1bml2ZXJzaXRpZXMgPSBjc3ZEYXRhLmRhdGEubWFwKChyZWNvcmQsIGkpID0+IHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbGF0OiByZWNvcmRbJ2xhdCddLFxuICAgICAgICAgICAgbG5nOiByZWNvcmRbJ2xuZyddLFxuICAgICAgICAgICAgbnVtYmVyX2lkOiBpLFxuICAgICAgICAgICAgY2l0eTogcmVjb3JkWydjaXR5J10sXG4gICAgICAgICAgICBjb3VudHJ5OiByZWNvcmRbJ2NvdW50cnknXSxcbiAgICAgICAgICAgIHJlcG9ydF9pZF9saXN0OiBKU09OLnBhcnNlKHJlY29yZFsncHJvZ3JhbXMnXS5yZXBsYWNlKC8nL2csICdcIicpLnJlcGxhY2UoLyx9L2csIFwifVwiKSlbdGhpcy5sYXN0X2lucHV0X3Byb2dyYW1dLFxuICAgICAgICAgICAgbnVtYmVyX29mX3N0dWRlbnRzOiBKU09OLnBhcnNlKHJlY29yZFsncHJvZ3JhbXMnXS5yZXBsYWNlKC8nL2csICdcIicpLnJlcGxhY2UoLyx9L2csIFwifVwiKSlbdGhpcy5sYXN0X2lucHV0X3Byb2dyYW1dID8gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShKU09OLnBhcnNlKHJlY29yZFsncHJvZ3JhbXMnXS5yZXBsYWNlKC8nL2csICdcIicpLnJlcGxhY2UoLyx9L2csIFwifVwiKSlbdGhpcy5sYXN0X2lucHV0X3Byb2dyYW1dKSkubGVuZ3RoIDogMCxcbiAgICAgICAgICAgIG5hbWU6IHJlY29yZFsnbmFtZSddLFxuICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgICAgcmV0dXJuIHVuaXZlcnNpdGllcztcbiAgICB9LFxuICAgIGFzeW5jIHJlYWRfcHJvZ3JhbXMoKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zb2xlLmxvZyhcInRyeWluZyB0byByZWFkIHByb2dyYW1zXCIpO1xuICAgICAgICB0aGlzLnByb2dyYW1zID0gdGhpcy5wYXJzZVByb2dyYW1zQ1NWKFByb2dyYW1zQ3N2KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcm9ncmFtc1syMF0pO1xuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIkVycm9yIGZldGNoaW5nIHByb2dyYW1zOlwiLCBlcnJvcik7XG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyByZWFkX3VuaXZlcnNpdGllcygpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwidHJ5aW5nIHRvIHJlYWQgdW5pdmVyc2l0aWVzXCIpO1xuICAgICAgICB0aGlzLnVuaXZlcnNpdGllcyA9IHRoaXMucGFyc2VVbml2ZXJzaXR5Q1NWKFVuaXZlcnNpdGllc0Nzdik7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMudW5pdmVyc2l0aWVzKTtcbiAgICAgICAgLy8gU29ydCB0aGlzLnVuaXZlcnNpdGllcyBieSBudW1iZXJfb2Zfc3R1ZGVudHNcbiAgICAgICAgLy8gdGhpcy51bml2ZXJzaXRpZXMuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAvLyAgIHJldHVybiBiLm51bWJlcl9vZl9zdHVkZW50cyAtIGEubnVtYmVyX29mX3N0dWRlbnRzO1xuICAgICAgICAvLyB9KTtcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJFcnJvciBmZXRjaGluZyB1bml2ZXJzaXRpZXM6XCIsIGVycm9yKTtcbiAgICAgIH1cbiAgICB9LFxuXG4gIH1cbn1cbjwvc2NyaXB0PiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/babel-loader/lib/index.js??clonedRuleSet-40.use[0]!./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[3]!./node_modules/vue-loader/dist/index.js??ruleSet[0].use[0]!./src/App.vue?vue&type=template&id=7ba5bd90\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ !function() {
/******/ 	__webpack_require__.h = function() { return "2ddeede6898586e6"; }
/******/ }();
/******/ 
/******/ }
);