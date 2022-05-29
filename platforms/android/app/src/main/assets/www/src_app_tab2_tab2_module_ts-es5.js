(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_tab2_tab2_module_ts"], {
    /***/
    93092:
    /*!*********************************************!*\
      !*** ./src/app/tab2/tab2-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2PageRoutingModule": function Tab2PageRoutingModule() {
          return (
            /* binding */
            _Tab2PageRoutingModule
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab2.page */
      70442);

      var routes = [{
        path: '',
        component: _tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page
      }];

      var _Tab2PageRoutingModule = function Tab2PageRoutingModule() {
        _classCallCheck(this, Tab2PageRoutingModule);
      };

      _Tab2PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab2PageRoutingModule);
      /***/
    },

    /***/
    14608:
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2PageModule": function Tab2PageModule() {
          return (
            /* binding */
            _Tab2PageModule
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


      var _tab2_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab2.page */
      70442);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab2-routing.module */
      93092);

      var _Tab2PageModule = function Tab2PageModule() {
        _classCallCheck(this, Tab2PageModule);
      };

      _Tab2PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _tab2_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab2PageRoutingModule],
        declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_0__.Tab2Page]
      })], _Tab2PageModule);
      /***/
    },

    /***/
    70442:
    /*!***********************************!*\
      !*** ./src/app/tab2/tab2.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab2Page": function Tab2Page() {
          return (
            /* binding */
            _Tab2Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab2.page.html */
      82477);
      /* harmony import */


      var _tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab2.page.scss */
      92055);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/crud.service */
      79928);
      /* harmony import */


      var _service_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/controller.service */
      26110);
      /* eslint-disable @typescript-eslint/no-unused-expressions */

      /* eslint-disable @typescript-eslint/semi */

      /* eslint-disable arrow-body-style */

      /* eslint-disable no-var */


      var _Tab2Page = /*#__PURE__*/function () {
        function Tab2Page(crud, control) {
          _classCallCheck(this, Tab2Page);

          this.crud = crud;
          this.control = control;
          this.allCart = [];
          this.personalCart = [];
        }

        _createClass(Tab2Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUserCartDetails();
            this.getCurrentUser();
          }
        }, {
          key: "get",
          value: function get() {// const collectionGroup = this.crud.ngFirestore.collectionGroup('product_details');
            // QuerySnapshot query = await collectionGroup.get();
            // above query will fetch all product_details for all users.
            // if you want to fetch the all product_details for a particular user,
            // then you have to add user_id to the product_details and use below
            // QuerySnapshot query =
            //     await collectionGroup.ref
            //     .where('user_id', isEqualTo: 'user_id').get();
          } //   get() {
          //     let ref = this.crud.ngFirestore.collection('userCart');
          //   ref.
          //   .on("value", ((snapshot) => {
          //  snapshot.forEach((childSnapshot) => {
          //   let childData = childSnapshot.val();
          //   console.log(childData.post);
          //  });
          // });
          //   }

        }, {
          key: "getUserCartDetails",
          value: function getUserCartDetails() {
            var id = '8HFpiMrxgGg5IHHjOyP1';
            this.crud.ngFirestore.collection('userCart').doc(id).snapshotChanges().subscribe(function (res) {
              console.log(' Get User Details Res:', res);
            }, function (err) {
              console.log('Error', err);
            });
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            var _this = this;

            this.control.fStore.collection('userCart').snapshotChanges().subscribe(function (res) {
              var _a;

              console.log('Res:', res);
              _this.allCart = res.map(function (t) {
                return Object.assign({
                  id: t.payload.doc.id
                }, t.payload.doc.data());
              });
              console.log('allCart:', _this.allCart);

              for (var i = 0; i < _this.allCart; _this.allCart.length) {
                if (((_a = _this.allCart) === null || _a === void 0 ? void 0 : _a.uid) === 'PLJ73pTONAWPqptY6wSFFQn3jSA3') {
                  _this.personalCart.push(_this.allCart);

                  console.log('personalCart:', _this.personalCart);
                }

                console.log('personalCart:', _this.personalCart);
              }

              console.log('personalCart:', _this.personalCart);
            });
          }
        }]);

        return Tab2Page;
      }();

      _Tab2Page.ctorParameters = function () {
        return [{
          type: _service_crud_service__WEBPACK_IMPORTED_MODULE_2__.CrudService
        }, {
          type: _service_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService
        }];
      };

      _Tab2Page = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-tab2',
        template: _raw_loader_tab2_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab2_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab2Page);
      /***/
    },

    /***/
    92055:
    /*!*************************************!*\
      !*** ./src/app/tab2/tab2.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWIyLnBhZ2Uuc2NzcyJ9 */";
      /***/
    },

    /***/
    82477:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab2/tab2.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <div style=\"display: flex; align-items: center;\">\n            <div>\n                <ion-buttons>\n                    <ion-menu-button>\n                        <ion-icon name=\"menu\" color=\"dark\"></ion-icon>\n                    </ion-menu-button>\n                </ion-buttons>\n            </div>\n\n            <div>\n                <ion-title>My Orders</ion-title>\n            </div>\n        </div>\n\n\n    </ion-toolbar>\n</ion-header>\n\n<!-- <ion-header class=\"ion-no-border\">\n    <img src=\"../../assets/image/orders.gif\" alt=\"\">\n</ion-header> -->\n\n<ion-content [fullscreen]=\"true\">\n\n    <div>\n        <img src=\"../../assets/image/orders.gif\" alt=\"\">\n    </div>\n\n    <div style=\"padding: 15px;\n    border-radius: 10px;\n    background: #afb3be;\n    margin: 10px;\">\n\n        <div>\n            <H6 style=\"margin: 0px; color: black; font-family: Fredoka_One\"> Your item is successfully ordered and on its way</H6>\n        </div>\n\n    </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab2_tab2_module_ts-es5.js.map