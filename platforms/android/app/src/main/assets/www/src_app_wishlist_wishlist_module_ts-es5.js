(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_wishlist_wishlist_module_ts"], {
    /***/
    78608:
    /*!*****************************************************!*\
      !*** ./src/app/wishlist/wishlist-routing.module.ts ***!
      \*****************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WishlistPageRoutingModule": function WishlistPageRoutingModule() {
          return (
            /* binding */
            _WishlistPageRoutingModule
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


      var _wishlist_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./wishlist.page */
      69533);

      var routes = [{
        path: '',
        component: _wishlist_page__WEBPACK_IMPORTED_MODULE_0__.WishlistPage
      }];

      var _WishlistPageRoutingModule = function WishlistPageRoutingModule() {
        _classCallCheck(this, WishlistPageRoutingModule);
      };

      _WishlistPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _WishlistPageRoutingModule);
      /***/
    },

    /***/
    90582:
    /*!*********************************************!*\
      !*** ./src/app/wishlist/wishlist.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WishlistPageModule": function WishlistPageModule() {
          return (
            /* binding */
            _WishlistPageModule
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


      var _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./wishlist-routing.module */
      78608);
      /* harmony import */


      var _wishlist_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./wishlist.page */
      69533);

      var _WishlistPageModule = function WishlistPageModule() {
        _classCallCheck(this, WishlistPageModule);
      };

      _WishlistPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _wishlist_routing_module__WEBPACK_IMPORTED_MODULE_0__.WishlistPageRoutingModule],
        declarations: [_wishlist_page__WEBPACK_IMPORTED_MODULE_1__.WishlistPage]
      })], _WishlistPageModule);
      /***/
    },

    /***/
    69533:
    /*!*******************************************!*\
      !*** ./src/app/wishlist/wishlist.page.ts ***!
      \*******************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "WishlistPage": function WishlistPage() {
          return (
            /* binding */
            _WishlistPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_wishlist_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./wishlist.page.html */
      89671);
      /* harmony import */


      var _wishlist_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./wishlist.page.scss */
      1545);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/controller.service */
      26110);
      /* harmony import */


      var _service_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/crud.service */
      79928);
      /* eslint-disable arrow-body-style */

      /* eslint-disable @typescript-eslint/no-unused-expressions */

      /* eslint-disable @typescript-eslint/semi */


      var _WishlistPage = /*#__PURE__*/function () {
        function WishlistPage(control, crud) {
          var _this = this;

          _classCallCheck(this, WishlistPage);

          this.control = control;
          this.crud = crud;
          this.userWishList = [];
          this.allWishList = [];
          this.control.route.queryParams.subscribe(function (params) {
            if (_this.control.router.getCurrentNavigation().extras.state) {
              _this.userid = _this.control.router.getCurrentNavigation().extras.state.userId;
              console.log('userid:', _this.userid);
            }
          });
        }

        _createClass(WishlistPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.allWishList = [];
            this.userWishList = [];
            this.getAllWishList();
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.skeleton = [{
              skeleton: ''
            }, {
              skeleton: ''
            }, {
              skeleton: ''
            }];
          }
        }, {
          key: "getAllWishList",
          value: function getAllWishList() {
            var _this2 = this;

            this.crud.ngFirestore.collection('userWishList').snapshotChanges().subscribe(function (res) {
              _this2.allWishList = res.map(function (t) {
                return Object.assign({
                  id: t.payload.doc.id
                }, t.payload.doc.data());
              });

              _this2.filterWishList();
            }, function (err) {
              console.log('Error', err);
            });
          }
        }, {
          key: "filterWishList",
          value: function filterWishList() {
            var _a, _b;

            for (var i = 0; i <= ((_a = this.allWishList) === null || _a === void 0 ? void 0 : _a.length); i++) {
              if (((_b = this.allWishList[i]) === null || _b === void 0 ? void 0 : _b.userid) === this.userid) {
                this.userWishList.push(this.allWishList[i]);
              } else {
                console.log('No wishlist');
              }
            }

            ;
            console.log('userWishList:', this.userWishList);
          }
        }, {
          key: "toDeleteItem",
          value: function toDeleteItem(u, i) {
            console.log('w:', u, i);
            var id = u.id;
            this.crud.ngFirestore.collection('userWishList').doc(id)["delete"]();
          }
        }]);

        return WishlistPage;
      }();

      _WishlistPage.ctorParameters = function () {
        return [{
          type: _service_controller_service__WEBPACK_IMPORTED_MODULE_2__.ControllerService
        }, {
          type: _service_crud_service__WEBPACK_IMPORTED_MODULE_3__.CrudService
        }];
      };

      _WishlistPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-wishlist',
        template: _raw_loader_wishlist_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_wishlist_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _WishlistPage);
      /***/
    },

    /***/
    1545:
    /*!*********************************************!*\
      !*** ./src/app/wishlist/wishlist.page.scss ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ3aXNobGlzdC5wYWdlLnNjc3MifQ== */";
      /***/
    },

    /***/
    89671:
    /*!***********************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/wishlist/wishlist.page.html ***!
      \***********************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header  class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back\" defaultHref=\"/tabs/tab3\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>My Wishlist</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <!-- Skeleton screen -->\n\n    <div *ngIf=\"!userWishList\">\n        <div class=\"ion-padding custom-skeleton\" *ngFor=\"let s of skeleton;\">\n            <ion-skeleton-text animated style=\"width: 100%;\n                height: 100px;\n                border-radius: 10px 10px 0px 0px;\"></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n            <ion-skeleton-text animated></ion-skeleton-text>\n\n            <ion-item>\n                <ion-avatar slot=\"start\">\n                    <ion-skeleton-text animated></ion-skeleton-text>\n                </ion-avatar>\n                <ion-label>\n                    <p>\n                        <ion-skeleton-text animated style=\"width: 80%\"></ion-skeleton-text>\n                    </p>\n                    <p>\n                        <ion-skeleton-text animated style=\"width: 60%\"></ion-skeleton-text>\n                    </p>\n                </ion-label>\n\n                <ion-avatar slot=\"end\">\n                    <ion-skeleton-text animated></ion-skeleton-text>\n                </ion-avatar>\n                <ion-avatar slot=\"end\">\n                    <ion-skeleton-text animated></ion-skeleton-text>\n                </ion-avatar>\n            </ion-item>\n\n        </div>\n\n    </div>\n\n    <!-- Skeleton screen -->\n\n    <div style=\"text-align: center; margin-top: 35%;\" *ngIf=\"this.userWishList?.length===0\">\n        <img src=\"../../assets/icon/icons8-heart-100.png\" alt=\"\" style=\"height: 200px; width: 200px;\">\n        <p style=\"color: black;\">Your Wishlist Is Empty</p>\n    </div>\n\n    <div *ngFor=\"let u of userWishList; let i = index;\" style=\"border-radius: 10px;\n    border: 1px solid grey;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    padding: 10px;\n    margin: 10px;\">\n\n        <div>\n            <img src=\"../../assets/image/Sampleimages/img1.jpeg\" alt=\"\" style=\"height: 100px;\n            width: 100px;\n            object-fit: contain;\">\n        </div>\n\n        <div>\n            <H4> {{ u.product }} </H4>\n            <p style=\"color: black;\"> {{ u.quantity }} </p>\n            <H5> {{ u.rate }} </H5>\n        </div>\n\n        <div>\n            <ion-icon name=\"trash\" style=\"font-size: 1.7rem;\n            background-color: lightgrey;\n            border-radius: 50%;\n            padding: 7px;\" (click)=\"toDeleteItem(u, i)\"></ion-icon>\n        </div>\n\n    </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_wishlist_wishlist_module_ts-es5.js.map