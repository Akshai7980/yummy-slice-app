(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_landing_landing_module_ts"], {
    /***/
    96990:
    /*!***************************************************!*\
      !*** ./src/app/landing/landing-routing.module.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LandingPageRoutingModule": function LandingPageRoutingModule() {
          return (
            /* binding */
            _LandingPageRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _landing_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./landing.page */
      75970);

      var routes = [{
        path: '',
        component: _landing_page__WEBPACK_IMPORTED_MODULE_0__.LandingPage
      }];

      var _LandingPageRoutingModule = function LandingPageRoutingModule() {
        _classCallCheck(this, LandingPageRoutingModule);
      };

      _LandingPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LandingPageRoutingModule);
      /***/
    },

    /***/
    68721:
    /*!*******************************************!*\
      !*** ./src/app/landing/landing.module.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LandingPageModule": function LandingPageModule() {
          return (
            /* binding */
            _LandingPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./landing-routing.module */
      96990);
      /* harmony import */


      var _landing_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./landing.page */
      75970);

      var _LandingPageModule = function LandingPageModule() {
        _classCallCheck(this, LandingPageModule);
      };

      _LandingPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _landing_routing_module__WEBPACK_IMPORTED_MODULE_0__.LandingPageRoutingModule],
        declarations: [_landing_page__WEBPACK_IMPORTED_MODULE_1__.LandingPage]
      })], _LandingPageModule);
      /***/
    },

    /***/
    75970:
    /*!*****************************************!*\
      !*** ./src/app/landing/landing.page.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LandingPage": function LandingPage() {
          return (
            /* binding */
            _LandingPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./landing.page.html */
      48258);
      /* harmony import */


      var _landing_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./landing.page.scss */
      86919);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);

      var _LandingPage = /*#__PURE__*/function () {
        function LandingPage() {
          _classCallCheck(this, LandingPage);
        }

        _createClass(LandingPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return LandingPage;
      }();

      _LandingPage.ctorParameters = function () {
        return [];
      };

      _LandingPage = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-landing',
        template: _raw_loader_landing_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_landing_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LandingPage);
      /***/
    },

    /***/
    86919:
    /*!*******************************************!*\
      !*** ./src/app/landing/landing.page.scss ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  -webkit-animation: slideInUp;\n          animation: slideInUp;\n  -webkit-animation-duration: 3s;\n          animation-duration: 3s;\n  --box-shadow: 0px;\n  font-size: 17px;\n  height: 45px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhbmRpbmcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQUE7VUFBQSxvQkFBQTtFQUNBLDhCQUFBO1VBQUEsc0JBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoibGFuZGluZy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICBhbmltYXRpb246IHNsaWRlSW5VcDtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDNzO1xuICAgIC0tYm94LXNoYWRvdzogMHB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBoZWlnaHQ6IDQ1cHg7XG59Il19 */";
      /***/
    },

    /***/
    48258:
    /*!*********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/landing/landing.page.html ***!
      \*********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<!-- <ion-header>\n  <ion-toolbar>\n    <ion-title>landing</ion-title>\n  </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n    <div style=\"text-align: center; margin-top: 30%;\">\n        <img src=\"../../assets/image/chef.jpeg\" alt=\"\" style=\"height: 300px; width: 335px;\" class=\"animate__animated animate__zoomIn animate__delay-1s\">\n        <div>\n            <H1 style=\"color: black; color: black;\n            font-family: 'Lobster-Regular';\n            font-size: 45px;\" class=\"animate__animated animate__fadeIn animate__zoomIn animate__delay-1s\"> Yummy Slice </H1>\n        </div>\n\n        <div style=\"margin-top: 15%;\">\n            <ion-button shape=\"round\" routerLink=\"/image-slide\">Start Shopping</ion-button>\n        </div>\n    </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_landing_landing_module_ts-es5.js.map