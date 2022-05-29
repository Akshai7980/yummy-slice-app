(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_tab5_tab5_module_ts"], {
    /***/
    26672:
    /*!*********************************************!*\
      !*** ./src/app/tab5/tab5-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab5PageRoutingModule": function Tab5PageRoutingModule() {
          return (
            /* binding */
            _Tab5PageRoutingModule
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


      var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab5.page */
      32584);

      var routes = [{
        path: '',
        component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
      }];

      var _Tab5PageRoutingModule = function Tab5PageRoutingModule() {
        _classCallCheck(this, Tab5PageRoutingModule);
      };

      _Tab5PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab5PageRoutingModule);
      /***/
    },

    /***/
    5184:
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab5PageModule": function Tab5PageModule() {
          return (
            /* binding */
            _Tab5PageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/router */
      39895);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _tab5_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab5.page */
      32584);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab5-routing.module */
      26672);

      var _Tab5PageModule = function Tab5PageModule() {
        _classCallCheck(this, Tab5PageModule);
      };

      _Tab5PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
          path: '',
          component: _tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page
        }]), _tab5_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab5PageRoutingModule],
        declarations: [_tab5_page__WEBPACK_IMPORTED_MODULE_0__.Tab5Page]
      })], _Tab5PageModule);
      /***/
    },

    /***/
    32584:
    /*!***********************************!*\
      !*** ./src/app/tab5/tab5.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab5Page": function Tab5Page() {
          return (
            /* binding */
            _Tab5Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab5.page.html */
      66717);
      /* harmony import */


      var _tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab5.page.scss */
      84966);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/controller.service */
      26110);
      /* harmony import */


      var _service_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/storage.service */
      55813);
      /* eslint-disable no-var */

      /* eslint-disable @typescript-eslint/quotes */

      /* eslint-disable @typescript-eslint/member-delimiter-style */

      /* eslint-disable arrow-body-style */

      /* eslint-disable @typescript-eslint/naming-convention */


      var _Tab5Page = /*#__PURE__*/function () {
        function Tab5Page(control, storage) {
          _classCallCheck(this, Tab5Page);

          this.control = control;
          this.storage = storage; // collectionName: string;
          // loggedIn: boolean;
          // user_displayName: any;

          this.userDetails = [];
        }

        _createClass(Tab5Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getUserDetails2",
          value: function getUserDetails2() {
            var _this = this;

            this.storage.storage.get('USER_DETAILS').then(function (val) {
              _this.userDetails = val;
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.getUserDetails2();
          }
        }, {
          key: "gotoPage",
          value: function gotoPage() {
            var navigationExtras = {
              state: {
                user: this.userDetails
              }
            };
            this.control.router.navigate(['edit-profile'], navigationExtras);
          }
        }]);

        return Tab5Page;
      }();

      _Tab5Page.ctorParameters = function () {
        return [{
          type: _service_controller_service__WEBPACK_IMPORTED_MODULE_2__.ControllerService
        }, {
          type: _service_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
        }];
      };

      _Tab5Page = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab5',
        template: _raw_loader_tab5_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab5_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab5Page);
      /***/
    },

    /***/
    84966:
    /*!*************************************!*\
      !*** ./src/app/tab5/tab5.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-button {\n  text-transform: none;\n  --border-color: linear-gradient(to bottom, #E48720 10%, #D83128 80%);\n  --color: white;\n  --box-shadow: transparent;\n}\n\n.input-field-container {\n  display: flex;\n  padding: 5px 5px 5px 5px;\n  background: #9e9e9e80;\n  align-items: center;\n  border-radius: 30px;\n  border-bottom: 2.5px solid black;\n  margin-bottom: 10px;\n  height: 50px;\n}\n\nion-input {\n  font-family: \"Fredoka_One\";\n  letter-spacing: 1px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7RUFDQSxvRUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLHdCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsZ0NBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0oiLCJmaWxlIjoidGFiNS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAtLWJvcmRlci1jb2xvcjogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgI0U0ODcyMCAxMCUsICNEODMxMjggODAlKTtcbiAgICAtLWNvbG9yOiB3aGl0ZTtcbiAgICAtLWJveC1zaGFkb3c6IHRyYW5zcGFyZW50O1xufVxuXG4uaW5wdXQtZmllbGQtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmc6IDVweCA1cHggNXB4IDVweDtcbiAgICBiYWNrZ3JvdW5kOiAjOWU5ZTllODA7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAzMHB4O1xuICAgIGJvcmRlci1ib3R0b206IDIuNXB4IHNvbGlkIGJsYWNrO1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgaGVpZ2h0OiA1MHB4O1xufVxuXG5pb24taW5wdXQge1xuICAgIGZvbnQtZmFtaWx5OiAnRnJlZG9rYV9PbmUnO1xuICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgY29sb3I6IHdoaXRlO1xufSJdfQ== */";
      /***/
    },

    /***/
    66717:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab5/tab5.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n\n        <div style=\"display: flex;\n        justify-content: space-between;\n        align-items: center;\">\n            <ion-buttons>\n                <ion-menu-button>\n                    <ion-icon name=\"menu\" color=\"dark\"></ion-icon>\n                </ion-menu-button>\n            </ion-buttons>\n\n            <ion-title >\n                Profile\n            </ion-title>\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div style=\"text-align: center;\">\n        <div>\n            <img src=\"../../assets/image/person-icon.png\" alt=\"\" style=\"height: 110px;\n            width: 110px;\n            object-fit: cover;\n            background-color: #556080;\n            border-radius: 50%;\n            padding: 5px;\">\n            <!-- <img src=\"../../assets/icon/camera.png\" alt=\"\" style=\"position: relative;\n            top: 20px;\n            right: 25px;\"> -->\n        </div>\n    </div>\n\n    <div style=\"margin: 25px; font-size: large;\">\n\n        <div>\n            <ion-label>Your Name</ion-label>\n            <p style=\"background-color: #ef621f45;\n            border-radius: 25px;\n            padding: 10px;\n            font-size: 15px;\n            line-height: 18px;\n            height: 40px;\n            color: #4F4F4F;\"> </p>\n        </div>\n\n        <div>\n            <ion-label>Email ID</ion-label>\n            <p style=\"background-color: #ef621f45;\n            border-radius: 25px;\n            padding: 10px;\n            font-size: 15px;\n            line-height: 18px;\n            font-family: 'Poppins_Regular';\n            height: 40px;\n            color: #4F4F4F;\"> </p>\n        </div>\n\n        <div>\n            <ion-label>Phone No</ion-label>\n            <p style=\"background-color: #ef621f45;\n            border-radius: 25px;\n            padding: 10px;\n            font-size: 15px;\n            line-height: 18px;\n            font-family: 'Poppins_Regular';\n            height: 40px;\n            color: #4F4F4F;\">+91 &nbsp;</p>\n        </div>\n\n        <div>\n            <ion-label>Licence Number</ion-label>\n            <p style=\"background-color: #ef621f45;\n            border-radius: 25px;\n            padding: 10px;\n            font-size: 15px;\n            font-family: 'Poppins_Regular';\n            height: 40px;\n            color: #4F4F4F;\"> </p>\n        </div>\n    </div>\n\n\n</ion-content>\n";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab5_tab5_module_ts-es5.js.map