(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_notification_notification_module_ts"], {
    /***/
    89753:
    /*!*************************************************************!*\
      !*** ./src/app/notification/notification-routing.module.ts ***!
      \*************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPageRoutingModule": function NotificationPageRoutingModule() {
          return (
            /* binding */
            _NotificationPageRoutingModule
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


      var _notification_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notification.page */
      13320);

      var routes = [{
        path: '',
        component: _notification_page__WEBPACK_IMPORTED_MODULE_0__.NotificationPage
      }];

      var _NotificationPageRoutingModule = function NotificationPageRoutingModule() {
        _classCallCheck(this, NotificationPageRoutingModule);
      };

      _NotificationPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _NotificationPageRoutingModule);
      /***/
    },

    /***/
    22154:
    /*!*****************************************************!*\
      !*** ./src/app/notification/notification.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPageModule": function NotificationPageModule() {
          return (
            /* binding */
            _NotificationPageModule
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


      var _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./notification-routing.module */
      89753);
      /* harmony import */


      var _notification_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.page */
      13320);

      var _NotificationPageModule = function NotificationPageModule() {
        _classCallCheck(this, NotificationPageModule);
      };

      _NotificationPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _notification_routing_module__WEBPACK_IMPORTED_MODULE_0__.NotificationPageRoutingModule],
        declarations: [_notification_page__WEBPACK_IMPORTED_MODULE_1__.NotificationPage]
      })], _NotificationPageModule);
      /***/
    },

    /***/
    13320:
    /*!***************************************************!*\
      !*** ./src/app/notification/notification.page.ts ***!
      \***************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "NotificationPage": function NotificationPage() {
          return (
            /* binding */
            _NotificationPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./notification.page.html */
      89034);
      /* harmony import */


      var _notification_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./notification.page.scss */
      31435);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/controller.service */
      26110);
      /* eslint-disable arrow-body-style */


      var _NotificationPage = /*#__PURE__*/function () {
        function NotificationPage(control) {
          _classCallCheck(this, NotificationPage);

          this.control = control;
          this.notificationDetails = [];
        }

        _createClass(NotificationPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.notificationDetails = [{
              title: 'Lorem Ipsum is simply dummy text of the',
              content: 'Lorem Ipsum is simply dummy text of the printing',
              date: 'Today, 11:40 am',
              // eslint-disable-next-line @typescript-eslint/naming-convention
              seen_status: '0'
            }, {
              title: 'Lorem Ipsum is simply dummy text of the',
              content: 'Lorem Ipsum is simply dummy text of the printing',
              date: 'Today, 11:40 am',
              // eslint-disable-next-line @typescript-eslint/naming-convention
              seen_status: '1'
            }, {
              title: 'Lorem Ipsum is simply dummy text of the',
              content: 'Lorem Ipsum is simply dummy text of the printing',
              date: 'Today, 11:40 am',
              // eslint-disable-next-line @typescript-eslint/naming-convention
              seen_status: '1'
            }, {
              title: 'Lorem Ipsum is simply dummy text of the',
              content: 'Lorem Ipsum is simply dummy text of the printing',
              date: 'Today, 11:40 am',
              // eslint-disable-next-line @typescript-eslint/naming-convention
              seen_status: '0'
            }, {
              title: 'Lorem Ipsum is simply dummy text of the',
              content: 'Lorem Ipsum is simply dummy text of the printing',
              date: 'Today, 11:40 am',
              // eslint-disable-next-line @typescript-eslint/naming-convention
              seen_status: '1'
            }, {
              title: 'Lorem Ipsum is simply dummy text of the',
              content: 'Lorem Ipsum is simply dummy text of the printing',
              date: 'Today, 11:40 am',
              // eslint-disable-next-line @typescript-eslint/naming-convention
              seen_status: '1'
            }];
            this.getAllNotification();
          }
        }, {
          key: "getAllNotification",
          value: function getAllNotification() {
            var _this = this;

            this.control.fStore.collection('notification').snapshotChanges().subscribe(function (res) {
              // console.log('Res:',res);
              _this.allNotification = res.map(function (t) {
                return Object.assign({
                  id: t.payload.doc.id
                }, t.payload.doc.data());
              });
              console.log('allNotification:', _this.allNotification);
            });
          }
        }, {
          key: "getNotch",
          value: function getNotch(n) {
            console.log('n', n);
          }
        }]);

        return NotificationPage;
      }();

      _NotificationPage.ctorParameters = function () {
        return [{
          type: _service_controller_service__WEBPACK_IMPORTED_MODULE_2__.ControllerService
        }];
      };

      _NotificationPage = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-notification',
        template: _raw_loader_notification_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_notification_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _NotificationPage);
      /***/
    },

    /***/
    31435:
    /*!*****************************************************!*\
      !*** ./src/app/notification/notification.page.scss ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-title {\n  position: relative;\n  left: 0px;\n}\n\nion-content {\n  --background: #145374;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vdGlmaWNhdGlvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7QUFDSjs7QUFFQTtFQUNJLHFCQUFBO0FBQ0oiLCJmaWxlIjoibm90aWZpY2F0aW9uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi10aXRsZSB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGxlZnQ6IDBweDtcbn1cblxuaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogIzE0NTM3NDtcbn0iXX0= */";
      /***/
    },

    /***/
    89034:
    /*!*******************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notification/notification.page.html ***!
      \*******************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back\" defaultHref=\"/tabs/tab3\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Notification</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <div style=\"display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 10px 5px 20px;\">\n            <H5 style=\"margin: 0px;\n      font-family: 'PT_Sans_Bold'; color: white;\">Notifications ({{this.allNotification?.length}})</H5>\n            <img src=\"../../assets/icon/dlt1.png\" alt=\"\" style=\"height: 55px;\n      width: 55px;\">\n        </div>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <div>\n        <div *ngFor=\"let n of allNotification; let i = index;\" style=\"display: flex;\n    align-items: center;\n    justify-content: space-between;\n     border-bottom: .5px solid #48829E;\" [style.background]=\"n.seen_status==='0' ? '#48829E' : ''\" (click)=\"getNotch(n)\">\n            <div style=\"width: 50px;\n        height: 50px;\n        margin: 15px;\">\n                <img *ngIf=\"n.seen_status==='0'\" src=\"../../assets/icon/bell.png\" alt=\"\" style=\"height: 50px;\n            width: 50px;\">\n                <img *ngIf=\"n.seen_status!=='0'\" src=\"../../assets/icon/bell1.png\" alt=\"\" style=\"height: 50px;\n                            width: 50px;\">\n            </div>\n            <div style=\"margin: 0px 20px 0px 5px;\">\n                <p style=\"margin: 0px; color: white;\n            font-family: 'PT_Sans_Bold';\"> {{n.title}} </p>\n                <p style=\"margin: 0px; color: white;\n            font-size: 12px;\n            letter-spacing: 1px;\n            font-family: 'PT_Sans_Regular';\"> {{n.message}} </p>\n                <p style=\"margin: 0px; float: right; color: white;\n            font-size: 10px;\n            letter-spacing: 1px;\n            font-family: 'PT_Sans_Regular';\"> {{n.timestamb | date}} </p>\n            </div>\n        </div>\n    </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_notification_notification_module_ts-es5.js.map