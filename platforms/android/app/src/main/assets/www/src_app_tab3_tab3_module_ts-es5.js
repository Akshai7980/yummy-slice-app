(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_tab3_tab3_module_ts"], {
    /***/
    99818:
    /*!*********************************************!*\
      !*** ./src/app/tab3/tab3-routing.module.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab3PageRoutingModule": function Tab3PageRoutingModule() {
          return (
            /* binding */
            _Tab3PageRoutingModule
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab3.page */
      78592);

      var routes = [{
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page
      }];

      var _Tab3PageRoutingModule = function Tab3PageRoutingModule() {
        _classCallCheck(this, Tab3PageRoutingModule);
      };

      _Tab3PageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _Tab3PageRoutingModule);
      /***/
    },

    /***/
    53746:
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.module.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab3PageModule": function Tab3PageModule() {
          return (
            /* binding */
            _Tab3PageModule
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


      var _tab3_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./tab3.page */
      78592);
      /* harmony import */


      var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../explore-container/explore-container.module */
      581);
      /* harmony import */


      var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./tab3-routing.module */
      99818);

      var _Tab3PageModule = function Tab3PageModule() {
        _classCallCheck(this, Tab3PageModule);
      };

      _Tab3PageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [_ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule, _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule, _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule, _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{
          path: '',
          component: _tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page
        }]), _tab3_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab3PageRoutingModule],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_0__.Tab3Page]
      })], _Tab3PageModule);
      /***/
    },

    /***/
    78592:
    /*!***********************************!*\
      !*** ./src/app/tab3/tab3.page.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "Tab3Page": function Tab3Page() {
          return (
            /* binding */
            _Tab3Page
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./tab3.page.html */
      64255);
      /* harmony import */


      var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./tab3.page.scss */
      90943);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_crud_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/crud.service */
      79928);
      /* harmony import */


      var swiper_swiper_bundle_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! swiper/swiper-bundle.css */
      45353);
      /* harmony import */


      var _service_controller_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../service/controller.service */
      26110);
      /* harmony import */


      var _service_storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../service/storage.service */
      55813);
      /* eslint-disable @typescript-eslint/quotes */

      /* eslint-disable max-len */

      /* eslint-disable no-trailing-spaces */

      /* eslint-disable @typescript-eslint/naming-convention */
      // const swiper = new Swiper(...);


      var _Tab3Page = /*#__PURE__*/function () {
        function Tab3Page(crud, control, storage) {
          _classCallCheck(this, Tab3Page);

          this.crud = crud;
          this.control = control;
          this.storage = storage;
          this.slideOpts = {
            // effect: 'flip',
            // initialSlide: 1,
            // speed: 500,
            // autoplay: {
            //   delay: 2000
            // },
            slidePreView: 1.05,
            spaceBetween: 10,
            centeredSlides: true,
            loop: true
          };
          this.productDetails = [];
          this.category = [];
          this.products = [];
          this.deals = [];
        }

        _createClass(Tab3Page, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.isUserEnteredIntoHome = true;
            this.getCurrentUser();
            this.category.length = 1;
            this.products.length = 4;
            this.deals.length = 4;
            this.blurBg = [["../../assets/image/blur1.jpeg"], ["../../assets/image/blur2.jpeg"], ["../../assets/image/blur3.jpeg"]];
          }
        }, {
          key: "getCurrentUser",
          value: function getCurrentUser() {
            var _this = this;

            this.control.fireauth.onAuthStateChanged(function (user) {
              if (user != null) {
                _this.userId = user.uid;
              } else {
                console.log('Get User Details Res:');
              }
            });
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            this.productDetails = [{
              id: 1,
              product: 'Leg Piece',
              image: '../../assets/image/Sampleimages/img1.jpeg',
              rate: '150',
              offer: '200',
              offer_perc: '15%',
              quantity: '500g',
              description: 'Meat, the flesh or other edible parts of animals (usually domesticated cattle, swine, and sheep) used for food, including not only the muscles and fat but also the tendons and ligaments. ... meat for human consumption.'
            }, {
              id: 2,
              product: 'Leg Piece',
              image: '../../assets/image/Sampleimages/img1.jpeg',
              rate: '150',
              offer: '200',
              offer_perc: '15%',
              quantity: '500g',
              description: 'Meat, the flesh or other edible parts of animals (usually domesticated cattle, swine, and sheep) used for food, including not only the muscles and fat but also the tendons and ligaments. ... meat for human consumption.'
            }, {
              id: 3,
              product: 'Leg Piece',
              image: '../../assets/image/Sampleimages/img1.jpeg',
              rate: '150',
              offer: '200',
              offer_perc: '15%',
              quantity: '500g',
              description: 'Meat, the flesh or other edible parts of animals (usually domesticated cattle, swine, and sheep) used for food, including not only the muscles and fat but also the tendons and ligaments. ... meat for human consumption.'
            }, {
              id: 4,
              product: 'Leg Piece',
              image: '../../assets/image/Sampleimages/img1.jpeg',
              rate: '150',
              offer: '200',
              offer_perc: '15%',
              quantity: '500g',
              description: 'Meat, the flesh or other edible parts of animals (usually domesticated cattle, swine, and sheep) used for food, including not only the muscles and fat but also the tendons and ligaments. ... meat for human consumption.'
            }, {
              id: 5,
              product: 'Leg Piece',
              image: '../../assets/image/Sampleimages/img1.jpeg',
              rate: '150',
              offer: '200',
              offer_perc: '15%',
              quantity: '500g',
              description: 'Meat, the flesh or other edible parts of animals (usually domesticated cattle, swine, and sheep) used for food, including not only the muscles and fat but also the tendons and ligaments. ... meat for human consumption.'
            }];
            this.storage.setStorage('isUserEnteredIntoHome', this.isUserEnteredIntoHome);
          }
        }, {
          key: "gotoPage",
          value: function gotoPage(p) {
            var navigationExtras = {
              state: {
                product: p
              }
            };
            this.control.router.navigate(['product-detail'], navigationExtras);
          }
        }, {
          key: "addToCart",
          value: function addToCart(p, i) {
            var _this2 = this;

            console.log('P:', p);
            var params = {
              userid: this.userId,
              created_at: Date.now(),
              product: p.product,
              rate: p.rate,
              quantity: p.quantity,
              product_offer: p.offer,
              wished_status: '1',
              product_rating: '',
              product_id: i
            };
            var cRef = this.crud.ngFirestore.collection('userCart');
            cRef.ref.where('userid', '==', this.userId).where('product_id', '==', i).get().then(function (querySnapshot) {
              console.log('length:', querySnapshot.docs.length);

              if (querySnapshot.docs.length == null) {
                console.log('Itz null');
              }

              if (querySnapshot.docs.length > 0) {
                console.log('entry found');
              }

              if (!querySnapshot.docs.length) {
                console.log('no entry');

                _this2.sendCartLogs(params);
              }

              querySnapshot.forEach(function (doc) {
                console.log(doc.id, '=>', doc.data());
              });
            })["catch"](function (err) {
              console.log('e:', err);
            });
          }
        }, {
          key: "sendCartLogs",
          value: function sendCartLogs(params) {
            return this.crud.ngFirestore.collection('userCart').add(params).then(function (res) {
              console.log('Add To Cart Res:', res);
            });
          }
        }, {
          key: "buyNow",
          value: function buyNow(p) {
            console.log('P:', p);
            p.uid = this.userId;
            p.createdAt = Date.now();
            return this.crud.ngFirestore.collection('userBuyNowList').add(p).then(function (res) {
              console.log('Buy Now Res:', res);
            });
          }
        }, {
          key: "addToWishlist",
          value: function addToWishlist(p, i) {
            var _this3 = this;

            console.log('P:', p);
            var params = {
              userid: this.userId,
              created_at: Date.now(),
              product: p.product,
              rate: p.rate,
              quantity: p.quantity,
              product_offer: p.offer,
              wished_status: '1',
              product_rating: '',
              product_id: i
            };
            console.log('params:', params);
            var cRef = this.crud.ngFirestore.collection('userWishList');
            cRef.ref.where('userid', '==', this.userId).where('product_id', '==', i).get().then(function (querySnapshot) {
              console.log('length:', querySnapshot.docs.length);

              if (querySnapshot.docs.length == null) {
                console.log('Itz null');
              }

              if (querySnapshot.docs.length > 0) {
                console.log('entry found');
              }

              if (!querySnapshot.docs.length) {
                console.log('no entry');

                _this3.sendWishListLog(params);
              }

              querySnapshot.forEach(function (doc) {
                console.log(doc.id, '=>', doc.data());
              });
            })["catch"](function (err) {
              console.log('e:', err);
            });
          }
        }, {
          key: "sendWishListLog",
          value: function sendWishListLog(params) {
            return this.crud.ngFirestore.collection('userWishList').add(params).then(function (res) {
              console.log('Product Successfully Added To Wishlist:', res);
            })["catch"](function (err) {
              console.log('e:', err);
            });
          }
        }]);

        return Tab3Page;
      }();

      _Tab3Page.ctorParameters = function () {
        return [{
          type: _service_crud_service__WEBPACK_IMPORTED_MODULE_2__.CrudService
        }, {
          type: _service_controller_service__WEBPACK_IMPORTED_MODULE_4__.ControllerService
        }, {
          type: _service_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService
        }];
      };

      _Tab3Page = (0, tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _Tab3Page);
      /***/
    },

    /***/
    45353:
    /*!***********************************************!*\
      !*** ./node_modules/swiper/swiper-bundle.css ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "/**\n * Swiper 6.7.1\n * Most modern mobile touch slider and framework with hardware accelerated transitions\n * https://swiperjs.com\n *\n * Copyright 2014-2021 Vladimir Kharlampidi\n *\n * Released under the MIT License\n *\n * Released on: June 23, 2021\n */\n\n@font-face {\n  font-family: 'swiper-icons';\n  src: url('data:application/font-woff;charset=utf-8;base64, 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') format('woff');\n  font-weight: 400;\n  font-style: normal;\n}\n\n:root {\n  --swiper-theme-color: #007aff;\n}\n\n.swiper-container {\n  margin-left: auto;\n  margin-right: auto;\n  position: relative;\n  overflow: hidden;\n  list-style: none;\n  padding: 0;\n  /* Fix of Webkit flickering */\n  z-index: 1;\n}\n\n.swiper-container-vertical > .swiper-wrapper {\n  flex-direction: column;\n}\n\n.swiper-wrapper {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  z-index: 1;\n  display: flex;\n  transition-property: transform;\n  box-sizing: content-box;\n}\n\n.swiper-container-android .swiper-slide,\n.swiper-wrapper {\n  transform: translate3d(0px, 0, 0);\n}\n\n.swiper-container-multirow > .swiper-wrapper {\n  flex-wrap: wrap;\n}\n\n.swiper-container-multirow-column > .swiper-wrapper {\n  flex-wrap: wrap;\n  flex-direction: column;\n}\n\n.swiper-container-free-mode > .swiper-wrapper {\n  transition-timing-function: ease-out;\n  margin: 0 auto;\n}\n\n.swiper-container-pointer-events {\n  touch-action: pan-y;\n}\n\n.swiper-container-pointer-events.swiper-container-vertical {\n  touch-action: pan-x;\n}\n\n.swiper-slide {\n  flex-shrink: 0;\n  width: 100%;\n  height: 100%;\n  position: relative;\n  transition-property: transform;\n}\n\n.swiper-slide-invisible-blank {\n  visibility: hidden;\n}\n\n/* Auto Height */\n\n.swiper-container-autoheight,\n.swiper-container-autoheight .swiper-slide {\n  height: auto;\n}\n\n.swiper-container-autoheight .swiper-wrapper {\n  align-items: flex-start;\n  transition-property: transform, height;\n}\n\n/* 3D Effects */\n\n.swiper-container-3d {\n  perspective: 1200px;\n}\n\n.swiper-container-3d .swiper-wrapper,\n.swiper-container-3d .swiper-slide,\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom,\n.swiper-container-3d .swiper-cube-shadow {\n  transform-style: preserve-3d;\n}\n\n.swiper-container-3d .swiper-slide-shadow-left,\n.swiper-container-3d .swiper-slide-shadow-right,\n.swiper-container-3d .swiper-slide-shadow-top,\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  pointer-events: none;\n  z-index: 10;\n}\n\n.swiper-container-3d .swiper-slide-shadow-left {\n  background-image: linear-gradient(to left, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-container-3d .swiper-slide-shadow-right {\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-container-3d .swiper-slide-shadow-top {\n  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n.swiper-container-3d .swiper-slide-shadow-bottom {\n  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0));\n}\n\n/* CSS Mode */\n\n.swiper-container-css-mode > .swiper-wrapper {\n  overflow: auto;\n  scrollbar-width: none;\n  /* For Firefox */\n  -ms-overflow-style: none;\n  /* For Internet Explorer and Edge */\n}\n\n.swiper-container-css-mode > .swiper-wrapper::-webkit-scrollbar {\n  display: none;\n}\n\n.swiper-container-css-mode > .swiper-wrapper > .swiper-slide {\n  scroll-snap-align: start start;\n}\n\n.swiper-container-horizontal.swiper-container-css-mode > .swiper-wrapper {\n  -ms-scroll-snap-type: x mandatory;\n      scroll-snap-type: x mandatory;\n}\n\n.swiper-container-vertical.swiper-container-css-mode > .swiper-wrapper {\n  -ms-scroll-snap-type: y mandatory;\n      scroll-snap-type: y mandatory;\n}\n\n:root {\n  --swiper-navigation-size: 44px;\n  /*\n  --swiper-navigation-color: var(--swiper-theme-color);\n  */\n}\n\n.swiper-button-prev,\n.swiper-button-next {\n  position: absolute;\n  top: 50%;\n  width: calc(44px / 44 * 27);\n  width: calc(var(--swiper-navigation-size) / 44 * 27);\n  height: 44px;\n  height: var(--swiper-navigation-size);\n  margin-top: calc(0px - (44px / 2));\n  margin-top: calc(0px - (var(--swiper-navigation-size) / 2));\n  z-index: 10;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--swiper-theme-color);\n  color: var(--swiper-navigation-color, var(--swiper-theme-color));\n}\n\n.swiper-button-prev.swiper-button-disabled,\n.swiper-button-next.swiper-button-disabled {\n  opacity: 0.35;\n  cursor: auto;\n  pointer-events: none;\n}\n\n.swiper-button-prev:after,\n.swiper-button-next:after {\n  font-family: swiper-icons;\n  font-size: 44px;\n  font-size: var(--swiper-navigation-size);\n  text-transform: none !important;\n  letter-spacing: 0;\n  text-transform: none;\n  font-feature-settings: normal, ;\n  font-variant: normal;\n  font-variant: initial;\n  line-height: 1;\n}\n\n.swiper-button-prev,\n.swiper-container-rtl .swiper-button-next {\n  left: 10px;\n  right: auto;\n}\n\n.swiper-button-prev:after,\n.swiper-container-rtl .swiper-button-next:after {\n  content: 'prev';\n}\n\n.swiper-button-next,\n.swiper-container-rtl .swiper-button-prev {\n  right: 10px;\n  left: auto;\n}\n\n.swiper-button-next:after,\n.swiper-container-rtl .swiper-button-prev:after {\n  content: 'next';\n}\n\n.swiper-button-prev.swiper-button-white,\n.swiper-button-next.swiper-button-white {\n  --swiper-navigation-color: #ffffff;\n}\n\n.swiper-button-prev.swiper-button-black,\n.swiper-button-next.swiper-button-black {\n  --swiper-navigation-color: #000000;\n}\n\n.swiper-button-lock {\n  display: none;\n}\n\n:root {\n  /*\n  --swiper-pagination-color: var(--swiper-theme-color);\n  */\n}\n\n.swiper-pagination {\n  position: absolute;\n  text-align: center;\n  transition: 300ms opacity;\n  transform: translate3d(0, 0, 0);\n  z-index: 10;\n}\n\n.swiper-pagination.swiper-pagination-hidden {\n  opacity: 0;\n}\n\n/* Common Styles */\n\n.swiper-pagination-fraction,\n.swiper-pagination-custom,\n.swiper-container-horizontal > .swiper-pagination-bullets {\n  bottom: 10px;\n  left: 0;\n  width: 100%;\n}\n\n/* Bullets */\n\n.swiper-pagination-bullets-dynamic {\n  overflow: hidden;\n  font-size: 0;\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transform: scale(0.33);\n  position: relative;\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active {\n  transform: scale(1);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-main {\n  transform: scale(1);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev {\n  transform: scale(0.66);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-prev-prev {\n  transform: scale(0.33);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next {\n  transform: scale(0.66);\n}\n\n.swiper-pagination-bullets-dynamic .swiper-pagination-bullet-active-next-next {\n  transform: scale(0.33);\n}\n\n.swiper-pagination-bullet {\n  width: 8px;\n  height: 8px;\n  display: inline-block;\n  border-radius: 50%;\n  background: #000;\n  opacity: 0.2;\n}\n\nbutton.swiper-pagination-bullet {\n  border: none;\n  margin: 0;\n  padding: 0;\n  box-shadow: none;\n  -webkit-appearance: none;\n          -moz-appearance: none;\n       appearance: none;\n}\n\n.swiper-pagination-clickable .swiper-pagination-bullet {\n  cursor: pointer;\n}\n\n.swiper-pagination-bullet-active {\n  opacity: 1;\n  background: var(--swiper-theme-color);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n}\n\n.swiper-container-vertical > .swiper-pagination-bullets {\n  right: 10px;\n  top: 50%;\n  transform: translate3d(0px, -50%, 0);\n}\n\n.swiper-container-vertical > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 6px 0;\n  display: block;\n}\n\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  top: 50%;\n  transform: translateY(-50%);\n  width: 8px;\n}\n\n.swiper-container-vertical > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  display: inline-block;\n  transition: 200ms transform, 200ms top;\n}\n\n.swiper-container-horizontal > .swiper-pagination-bullets .swiper-pagination-bullet {\n  margin: 0 4px;\n}\n\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic {\n  left: 50%;\n  transform: translateX(-50%);\n  white-space: nowrap;\n}\n\n.swiper-container-horizontal > .swiper-pagination-bullets.swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms left;\n}\n\n.swiper-container-horizontal.swiper-container-rtl > .swiper-pagination-bullets-dynamic .swiper-pagination-bullet {\n  transition: 200ms transform, 200ms right;\n}\n\n/* Progress */\n\n.swiper-pagination-progressbar {\n  background: rgba(0, 0, 0, 0.25);\n  position: absolute;\n}\n\n.swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  background: var(--swiper-theme-color);\n  background: var(--swiper-pagination-color, var(--swiper-theme-color));\n  position: absolute;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  transform: scale(0);\n  transform-origin: left top;\n}\n\n.swiper-container-rtl .swiper-pagination-progressbar .swiper-pagination-progressbar-fill {\n  transform-origin: right top;\n}\n\n.swiper-container-horizontal > .swiper-pagination-progressbar,\n.swiper-container-vertical > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 100%;\n  height: 4px;\n  left: 0;\n  top: 0;\n}\n\n.swiper-container-vertical > .swiper-pagination-progressbar,\n.swiper-container-horizontal > .swiper-pagination-progressbar.swiper-pagination-progressbar-opposite {\n  width: 4px;\n  height: 100%;\n  left: 0;\n  top: 0;\n}\n\n.swiper-pagination-white {\n  --swiper-pagination-color: #ffffff;\n}\n\n.swiper-pagination-black {\n  --swiper-pagination-color: #000000;\n}\n\n.swiper-pagination-lock {\n  display: none;\n}\n\n/* Scrollbar */\n\n.swiper-scrollbar {\n  border-radius: 10px;\n  position: relative;\n  -ms-touch-action: none;\n  background: rgba(0, 0, 0, 0.1);\n}\n\n.swiper-container-horizontal > .swiper-scrollbar {\n  position: absolute;\n  left: 1%;\n  bottom: 3px;\n  z-index: 50;\n  height: 5px;\n  width: 98%;\n}\n\n.swiper-container-vertical > .swiper-scrollbar {\n  position: absolute;\n  right: 3px;\n  top: 1%;\n  z-index: 50;\n  width: 5px;\n  height: 98%;\n}\n\n.swiper-scrollbar-drag {\n  height: 100%;\n  width: 100%;\n  position: relative;\n  background: rgba(0, 0, 0, 0.5);\n  border-radius: 10px;\n  left: 0;\n  top: 0;\n}\n\n.swiper-scrollbar-cursor-drag {\n  cursor: move;\n}\n\n.swiper-scrollbar-lock {\n  display: none;\n}\n\n.swiper-zoom-container {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  text-align: center;\n}\n\n.swiper-zoom-container > img,\n.swiper-zoom-container > svg,\n.swiper-zoom-container > canvas {\n  max-width: 100%;\n  max-height: 100%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.swiper-slide-zoomed {\n  cursor: move;\n}\n\n/* Preloader */\n\n:root {\n  /*\n  --swiper-preloader-color: var(--swiper-theme-color);\n  */\n}\n\n.swiper-lazy-preloader {\n  width: 42px;\n  height: 42px;\n  position: absolute;\n  left: 50%;\n  top: 50%;\n  margin-left: -21px;\n  margin-top: -21px;\n  z-index: 10;\n  transform-origin: 50%;\n  -webkit-animation: swiper-preloader-spin 1s infinite linear;\n          animation: swiper-preloader-spin 1s infinite linear;\n  box-sizing: border-box;\n  border: 4px solid var(--swiper-theme-color);\n  border: 4px solid var(--swiper-preloader-color, var(--swiper-theme-color));\n  border-radius: 50%;\n  border-top-color: transparent;\n}\n\n.swiper-lazy-preloader-white {\n  --swiper-preloader-color: #fff;\n}\n\n.swiper-lazy-preloader-black {\n  --swiper-preloader-color: #000;\n}\n\n@-webkit-keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes swiper-preloader-spin {\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n/* a11y */\n\n.swiper-container .swiper-notification {\n  position: absolute;\n  left: 0;\n  top: 0;\n  pointer-events: none;\n  opacity: 0;\n  z-index: -1000;\n}\n\n.swiper-container-fade.swiper-container-free-mode .swiper-slide {\n  transition-timing-function: ease-out;\n}\n\n.swiper-container-fade .swiper-slide {\n  pointer-events: none;\n  transition-property: opacity;\n}\n\n.swiper-container-fade .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n\n.swiper-container-fade .swiper-slide-active,\n.swiper-container-fade .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n\n.swiper-container-cube {\n  overflow: visible;\n}\n\n.swiper-container-cube .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n  visibility: hidden;\n  transform-origin: 0 0;\n  width: 100%;\n  height: 100%;\n}\n\n.swiper-container-cube .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n\n.swiper-container-cube.swiper-container-rtl .swiper-slide {\n  transform-origin: 100% 0;\n}\n\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n\n.swiper-container-cube .swiper-slide-active,\n.swiper-container-cube .swiper-slide-next,\n.swiper-container-cube .swiper-slide-prev,\n.swiper-container-cube .swiper-slide-next + .swiper-slide {\n  pointer-events: auto;\n  visibility: visible;\n}\n\n.swiper-container-cube .swiper-slide-shadow-top,\n.swiper-container-cube .swiper-slide-shadow-bottom,\n.swiper-container-cube .swiper-slide-shadow-left,\n.swiper-container-cube .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n.swiper-container-cube .swiper-cube-shadow {\n  position: absolute;\n  left: 0;\n  bottom: 0px;\n  width: 100%;\n  height: 100%;\n  opacity: 0.6;\n  z-index: 0;\n}\n\n.swiper-container-cube .swiper-cube-shadow:before {\n  content: '';\n  background: #000;\n  position: absolute;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  right: 0;\n  filter: blur(50px);\n}\n\n.swiper-container-flip {\n  overflow: visible;\n}\n\n.swiper-container-flip .swiper-slide {\n  pointer-events: none;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n  z-index: 1;\n}\n\n.swiper-container-flip .swiper-slide .swiper-slide {\n  pointer-events: none;\n}\n\n.swiper-container-flip .swiper-slide-active,\n.swiper-container-flip .swiper-slide-active .swiper-slide-active {\n  pointer-events: auto;\n}\n\n.swiper-container-flip .swiper-slide-shadow-top,\n.swiper-container-flip .swiper-slide-shadow-bottom,\n.swiper-container-flip .swiper-slide-shadow-left,\n.swiper-container-flip .swiper-slide-shadow-right {\n  z-index: 0;\n  -webkit-backface-visibility: hidden;\n          backface-visibility: hidden;\n}\n\n/*# sourceMappingURL=data:application/json;base64,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Q0E7RUFDRSxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixPQUFPO0VBQ1AsTUFBTTtFQUNOLFNBQVM7RUFDVCxRQUFRO0VBQ1Isa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLG1DQUFtQztVQUMzQiwyQkFBMkI7RUFDbkMsVUFBVTtBQUNaOztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUNBOztFQUVFLG9CQUFvQjtBQUN0Qjs7QUFDQTs7OztFQUlFLFVBQVU7RUFDVixtQ0FBbUM7VUFDM0IsMkJBQTJCO0FBQ3JDIiwiZmlsZSI6InN3aXBlci1idW5kbGUuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBTd2lwZXIgNi43LjFcbiAqIE1vc3QgbW9kZXJuIG1vYmlsZSB0b3VjaCBzbGlkZXIgYW5kIGZyYW1ld29yayB3aXRoIGhhcmR3YXJlIGFjY2VsZXJhdGVkIHRyYW5zaXRpb25zXG4gKiBodHRwczovL3N3aXBlcmpzLmNvbVxuICpcbiAqIENvcHlyaWdodCAyMDE0LTIwMjEgVmxhZGltaXIgS2hhcmxhbXBpZGlcbiAqXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBSZWxlYXNlZCBvbjogSnVuZSAyMywgMjAyMVxuICovXG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ3N3aXBlci1pY29ucyc7XG4gIHNyYzogdXJsKCdkYXRhOmFwcGxpY2F0aW9uL2ZvbnQtd29mZjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwgZDA5R1JnQUJBQUFBQUFaZ0FCQUFBQUFBREFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUJHUmxSTkFBQUdSQUFBQUJvQUFBQWNpNnFIa1VkRVJVWUFBQVdnQUFBQUl3QUFBQ1FBWUFCWFIxQlBVd0FBQmhRQUFBQXVBQUFBTnVBWTcreEhVMVZDQUFBRnhBQUFBRkFBQUFCbTJmUGN6VTlUTHpJQUFBSGNBQUFBU2dBQUFHQlA5VjVSWTIxaGNBQUFBa1FBQUFDSUFBQUJZdDZGMGNCamRuUWdBQUFDekFBQUFBUUFBQUFFQUJFQlJHZGhjM0FBQUFXWUFBQUFDQUFBQUFqLy93QURaMng1WmdBQUF5d0FBQURNQUFBRDJNSHRyeVZvWldGa0FBQUJiQUFBQURBQUFBQTJFMitlb1dob1pXRUFBQUdjQUFBQUh3QUFBQ1FDOWdEemFHMTBlQUFBQWlnQUFBQVpBQUFBcmdKa0FCRnNiMk5oQUFBQzBBQUFBRm9BQUFCYUZRQVVHRzFoZUhBQUFBRzhBQUFBSHdBQUFDQUFjQUJBYm1GdFpRQUFBL2dBQUFFNUFBQUNYdkZkQndsd2IzTjBBQUFGTkFBQUFHSUFBQUNFNXM3NGhYamFZMkJrWUdBQVlwZjVIdS9qK1cyK01uQXpNWURBemFYNlFqRDYvNC8vQnhqNUdBOEF1UndNWUdrQVB5d0wxM2phWTJCa1lHQTg4UDhBZ3g0aisvOGZRRFlmQTFBRUJXZ0RBSUIyQk9vQWVOcGpZR1JnWU5CaDRHZGdZZ0FCRU1uSUFCSnpZTkFEQ1FBQUNXZ0FzUUI0Mm1OZ1lmekNPSUdCbFlHQjBZY3hqWUdCd1IxS2YyV1FaR2hoWUdCaVlHVm1nQUZHQmlRUWtPYWF3dERBb01CUXhYamcvd0VHUGNZRERBNHdOVUEyQ0Nnd3NBQUFPNEVMNmdBQWVOcGoyTTBneUFBQ3F4Z0dOV0JrWjJENC93TUEreGtEZGdBQUFIamFZMkJnWUdhQVlCa0dSZ1lRaUFIeUdNRjhGZ1lISU0zRHdNSEFCR1FyTU9neVdETEVNMVQ5L3c4VUJmRU1nTHpFLy8vL1AvNS8vZi9WL3h2K3I0ZWFBQWVNYkF4d0lVWW1JTUhFZ0tZQVlqVWNzREF3c0xLeGMzQnljZlB3OGpFUUEvZ1pCQVNGaEVWRXhjUWxKS1drWldUbDVCVVVsWlJWVk5YVU5UUVpCZ01BQU1SK0UrZ0FFUUZFQUFBQUtnQXFBQ29BTkFBK0FFZ0FVZ0JjQUdZQWNBQjZBSVFBamdDWUFLSUFyQUMyQU1BQXlnRFVBTjRBNkFEeUFQd0JCZ0VRQVJvQkpBRXVBVGdCUWdGTUFWWUJZQUZxQVhRQmZnR0lBWklCbkFHbUFiSUJ6Z0hzQUFCNDJ1Mk5NUTZDVUF5R1c1Njh4OUFuZVlZZ200TUpiaEtGYUV4SU9BVlg4QXBld1N0NEJpYzRBZmVBaWQzVk9CaXhEeGZQWUV6YTVPK1hmaTA0WUFEZ2dpVUlVTEN1RUpLOFZoTzRiU3ZwZG5rdEhJNVFDWXRkaTJzbDhablhhSGxxVXJOS3pkS2NUOGNqbHErcndaU3ZJVmN6TmllenNmblAvdXpubWZQRkJOT0RNMks3TVRRNDVZRUFacUdQODFBbUdHY0YzaVBxT29wMHIxU1BUYVRiVmtmVWU0SFhqOTd3WUUreU53V1l4d1d1NHYxdWdXSGdvM1MxWGRaRVZxV003RVQwY2ZuTEd4V2ZrZ1I0Mm8yUHZXckRNQlNGai9JSExhRjB6S2pSZ2RpVk13U2NOUkFvV1VvSDc4WTJpY0IveUlZMDlBbjZBSDJCZHUvVUIreXhvcFlzaFFpRXZudnUwZFVSZ0R0OFFlQzhQRHc3RnBqaTNmRUE0ei9QRUo2WU9CNWhLaDRkajNFdlhoeFBxSC9TS1VZM3JKN3NyWjRGWm5oMVBNQXRQaHdQNmZsMlBNSk1QRGdlUTRyWThZVDZHemFvMGVBRUE0MDlEdWdnbVRuRm5PY1NDaUVpTE1neENpVEk2Q3E1RFpVZDNRbXAxMHZPMExhTFRkMmNqTjRmT3VtbGM3bFVZYlNRY1pGa3V0Ukc3ZzZKS1pLeTBSbWRMWTY4MENEbkVKK1VNa3BGRmUxUk43bnhkVnBYckM0YVR0bmF1ck9uWWVyY1pnMllWbUxOL2QvZ2N6ZkVpbXJFL2ZzL2JPdXEyOVptbjh0bG9PUmFYZ1pnR2E3OHlPOS9jblhtMkJwYUd2cTI1RHY5UzRFOSs1U0ljOVBxdXBKS2hZRlNTbDQ3K1FjcjFtWU5BQUFBZU5wdHcwY0t3a0FBQU1EWkpBOFE3T1VKdmtMc1BmWjZ6RlZFUlB5OHFIaDJZRVIrM2kvQlA4M3ZJQkxMeVNzb0tpbXJxS3FwYTJocDYranE2UnNZR2htYm1KcVpTeTBzcmF4dGJPM3NIUnlkbkVNVTR1UjZ5eDdKSlh2ZVA3V3JEeWNBQUFBQUFBSC8vd0FDZU5wallHUmdZT0FCWWhrZ1pnSkNaZ1pOQmtZR0xRWnRJSnNGTE1ZQUFBdzNBTGdBZU5vbGl6RUtnREFRQkNjaFJiQzJzRkVSMFlENnFWUWlCQ3YvSDllekdJNlo1WEJBdzhDQksvbTVpUVFWYXVWYlhMbk9yTVp2Mm9MZEtGYThQanVydTJoSnpHYWJtT1NMek5NenZ1dHBCM040Mm1OZ1pHQmc0R0tRWXpCaFlNeEpMTWxqNEdCZ0FZb3cvUC9QQUpKaExNNnNTb1dLZldDQUF3REFqZ2JSQUFCNDJtTmdZR0JrQUlJYkNabzVJUHJtVW4waEdBMEFPOEVGVFFBQScpIGZvcm1hdCgnd29mZicpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG46cm9vdCB7XG4gIC0tc3dpcGVyLXRoZW1lLWNvbG9yOiAjMDA3YWZmO1xufVxuLnN3aXBlci1jb250YWluZXIge1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG4gIHBhZGRpbmc6IDA7XG4gIC8qIEZpeCBvZiBXZWJraXQgZmxpY2tlcmluZyAqL1xuICB6LWluZGV4OiAxO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLnN3aXBlci13cmFwcGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB6LWluZGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiB0cmFuc2Zvcm07XG4gIGJveC1zaXppbmc6IGNvbnRlbnQtYm94O1xufVxuLnN3aXBlci1jb250YWluZXItYW5kcm9pZCAuc3dpcGVyLXNsaWRlLFxuLnN3aXBlci13cmFwcGVyIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwcHgsIDAsIDApO1xufVxuLnN3aXBlci1jb250YWluZXItbXVsdGlyb3cgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1tdWx0aXJvdy1jb2x1bW4gPiAuc3dpcGVyLXdyYXBwZXIge1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICB0cmFuc2l0aW9uLXRpbWluZy1mdW5jdGlvbjogZWFzZS1vdXQ7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuLnN3aXBlci1jb250YWluZXItcG9pbnRlci1ldmVudHMge1xuICB0b3VjaC1hY3Rpb246IHBhbi15O1xufVxuLnN3aXBlci1jb250YWluZXItcG9pbnRlci1ldmVudHMuc3dpcGVyLWNvbnRhaW5lci12ZXJ0aWNhbCB7XG4gIHRvdWNoLWFjdGlvbjogcGFuLXg7XG59XG4uc3dpcGVyLXNsaWRlIHtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgdHJhbnNpdGlvbi1wcm9wZXJ0eTogdHJhbnNmb3JtO1xufVxuLnN3aXBlci1zbGlkZS1pbnZpc2libGUtYmxhbmsge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG4vKiBBdXRvIEhlaWdodCAqL1xuLnN3aXBlci1jb250YWluZXItYXV0b2hlaWdodCxcbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci1zbGlkZSB7XG4gIGhlaWdodDogYXV0bztcbn1cbi5zd2lwZXItY29udGFpbmVyLWF1dG9oZWlnaHQgLnN3aXBlci13cmFwcGVyIHtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIHRyYW5zaXRpb24tcHJvcGVydHk6IHRyYW5zZm9ybSwgaGVpZ2h0O1xufVxuLyogM0QgRWZmZWN0cyAqL1xuLnN3aXBlci1jb250YWluZXItM2Qge1xuICBwZXJzcGVjdGl2ZTogMTIwMHB4O1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci13cmFwcGVyLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZSxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4uc3dpcGVyLWNvbnRhaW5lci0zZCAuc3dpcGVyLXNsaWRlLXNoYWRvdy1yaWdodCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXRvcCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItY3ViZS1zaGFkb3cge1xuICB0cmFuc2Zvcm0tc3R5bGU6IHByZXNlcnZlLTNkO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0LFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctYm90dG9tIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB6LWluZGV4OiAxMDtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQodG8gbGVmdCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCByZ2JhKDAsIDAsIDAsIDAuNSksIHJnYmEoMCwgMCwgMCwgMCkpO1xufVxuLnN3aXBlci1jb250YWluZXItM2QgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgcmdiYSgwLCAwLCAwLCAwLjUpLCByZ2JhKDAsIDAsIDAsIDApKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLTNkIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIHJnYmEoMCwgMCwgMCwgMC41KSwgcmdiYSgwLCAwLCAwLCAwKSk7XG59XG4vKiBDU1MgTW9kZSAqL1xuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXIge1xuICBvdmVyZmxvdzogYXV0bztcbiAgc2Nyb2xsYmFyLXdpZHRoOiBub25lO1xuICAvKiBGb3IgRmlyZWZveCAqL1xuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7XG4gIC8qIEZvciBJbnRlcm5ldCBFeHBsb3JlciBhbmQgRWRnZSAqL1xufVxuLnN3aXBlci1jb250YWluZXItY3NzLW1vZGUgPiAuc3dpcGVyLXdyYXBwZXI6Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWNzcy1tb2RlID4gLnN3aXBlci13cmFwcGVyID4gLnN3aXBlci1zbGlkZSB7XG4gIHNjcm9sbC1zbmFwLWFsaWduOiBzdGFydCBzdGFydDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWhvcml6b250YWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHggbWFuZGF0b3J5O1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwuc3dpcGVyLWNvbnRhaW5lci1jc3MtbW9kZSA+IC5zd2lwZXItd3JhcHBlciB7XG4gIHNjcm9sbC1zbmFwLXR5cGU6IHkgbWFuZGF0b3J5O1xufVxuOnJvb3Qge1xuICAtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemU6IDQ0cHg7XG4gIC8qXG4gIC0tc3dpcGVyLW5hdmlnYXRpb24tY29sb3I6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XG4gICovXG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2LFxuLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIHdpZHRoOiBjYWxjKHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpIC8gNDQgKiAyNyk7XG4gIGhlaWdodDogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7XG4gIG1hcmdpbi10b3A6IGNhbGMoMHB4IC0gKHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLXNpemUpIC8gMikpO1xuICB6LWluZGV4OiAxMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgY29sb3I6IHZhcigtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yLCB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtcbn1cbi5zd2lwZXItYnV0dG9uLXByZXYuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCxcbi5zd2lwZXItYnV0dG9uLW5leHQuc3dpcGVyLWJ1dHRvbi1kaXNhYmxlZCB7XG4gIG9wYWNpdHk6IDAuMzU7XG4gIGN1cnNvcjogYXV0bztcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2OmFmdGVyLFxuLnN3aXBlci1idXR0b24tbmV4dDphZnRlciB7XG4gIGZvbnQtZmFtaWx5OiBzd2lwZXItaWNvbnM7XG4gIGZvbnQtc2l6ZTogdmFyKC0tc3dpcGVyLW5hdmlnYXRpb24tc2l6ZSk7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lICFpbXBvcnRhbnQ7XG4gIGxldHRlci1zcGFjaW5nOiAwO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgZm9udC12YXJpYW50OiBpbml0aWFsO1xuICBsaW5lLWhlaWdodDogMTtcbn1cbi5zd2lwZXItYnV0dG9uLXByZXYsXG4uc3dpcGVyLWNvbnRhaW5lci1ydGwgLnN3aXBlci1idXR0b24tbmV4dCB7XG4gIGxlZnQ6IDEwcHg7XG4gIHJpZ2h0OiBhdXRvO1xufVxuLnN3aXBlci1idXR0b24tcHJldjphZnRlcixcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyIHtcbiAgY29udGVudDogJ3ByZXYnO1xufVxuLnN3aXBlci1idXR0b24tbmV4dCxcbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLWJ1dHRvbi1wcmV2IHtcbiAgcmlnaHQ6IDEwcHg7XG4gIGxlZnQ6IGF1dG87XG59XG4uc3dpcGVyLWJ1dHRvbi1uZXh0OmFmdGVyLFxuLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItYnV0dG9uLXByZXY6YWZ0ZXIge1xuICBjb250ZW50OiAnbmV4dCc7XG59XG4uc3dpcGVyLWJ1dHRvbi1wcmV2LnN3aXBlci1idXR0b24td2hpdGUsXG4uc3dpcGVyLWJ1dHRvbi1uZXh0LnN3aXBlci1idXR0b24td2hpdGUge1xuICAtLXN3aXBlci1uYXZpZ2F0aW9uLWNvbG9yOiAjZmZmZmZmO1xufVxuLnN3aXBlci1idXR0b24tcHJldi5zd2lwZXItYnV0dG9uLWJsYWNrLFxuLnN3aXBlci1idXR0b24tbmV4dC5zd2lwZXItYnV0dG9uLWJsYWNrIHtcbiAgLS1zd2lwZXItbmF2aWdhdGlvbi1jb2xvcjogIzAwMDAwMDtcbn1cbi5zd2lwZXItYnV0dG9uLWxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuOnJvb3Qge1xuICAvKlxuICAtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yOiB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpO1xuICAqL1xufVxuLnN3aXBlci1wYWdpbmF0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDMwMG1zIG9wYWNpdHk7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCk7XG4gIHotaW5kZXg6IDEwO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLnN3aXBlci1wYWdpbmF0aW9uLWhpZGRlbiB7XG4gIG9wYWNpdHk6IDA7XG59XG4vKiBDb21tb24gU3R5bGVzICovXG4uc3dpcGVyLXBhZ2luYXRpb24tZnJhY3Rpb24sXG4uc3dpcGVyLXBhZ2luYXRpb24tY3VzdG9tLFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzIHtcbiAgYm90dG9tOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB3aWR0aDogMTAwJTtcbn1cbi8qIEJ1bGxldHMgKi9cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBmb250LXNpemU6IDA7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxKTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbWFpbiB7XG4gIHRyYW5zZm9ybTogc2NhbGUoMSk7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQtYWN0aXZlLXByZXYge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuNjYpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1wcmV2LXByZXYge1xuICB0cmFuc2Zvcm06IHNjYWxlKDAuMzMpO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZS1uZXh0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjY2KTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldC1hY3RpdmUtbmV4dC1uZXh0IHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgwLjMzKTtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB3aWR0aDogOHB4O1xuICBoZWlnaHQ6IDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJhY2tncm91bmQ6ICMwMDA7XG4gIG9wYWNpdHk6IDAuMjtcbn1cbmJ1dHRvbi5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBib3JkZXI6IG5vbmU7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm94LXNoYWRvdzogbm9uZTtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tY2xpY2thYmxlIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0LWFjdGl2ZSB7XG4gIG9wYWNpdHk6IDE7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN3aXBlci1wYWdpbmF0aW9uLWNvbG9yLCB2YXIoLS1zd2lwZXItdGhlbWUtY29sb3IpKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMge1xuICByaWdodDogMTBweDtcbiAgdG9wOiA1MCU7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMHB4LCAtNTAlLCAwKTtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIG1hcmdpbjogNnB4IDA7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMge1xuICB0b3A6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xuICB3aWR0aDogOHB4O1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXRzLWR5bmFtaWMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyB0b3A7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMgLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldCB7XG4gIG1hcmdpbjogMCA0cHg7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIHtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0cy1keW5hbWljIC5zd2lwZXItcGFnaW5hdGlvbi1idWxsZXQge1xuICB0cmFuc2l0aW9uOiAyMDBtcyB0cmFuc2Zvcm0sIDIwMG1zIGxlZnQ7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsLnN3aXBlci1jb250YWluZXItcnRsID4gLnN3aXBlci1wYWdpbmF0aW9uLWJ1bGxldHMtZHluYW1pYyAuc3dpcGVyLXBhZ2luYXRpb24tYnVsbGV0IHtcbiAgdHJhbnNpdGlvbjogMjAwbXMgdHJhbnNmb3JtLCAyMDBtcyByaWdodDtcbn1cbi8qIFByb2dyZXNzICovXG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIge1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMjUpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvciwgdmFyKC0tc3dpcGVyLXRoZW1lLWNvbG9yKSk7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0cmFuc2Zvcm06IHNjYWxlKDApO1xuICB0cmFuc2Zvcm0tb3JpZ2luOiBsZWZ0IHRvcDtcbn1cbi5zd2lwZXItY29udGFpbmVyLXJ0bCAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIgLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLWZpbGwge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiByaWdodCB0b3A7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLFxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXIuc3dpcGVyLXBhZ2luYXRpb24tcHJvZ3Jlc3NiYXItb3Bwb3NpdGUge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0cHg7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5zd2lwZXItY29udGFpbmVyLXZlcnRpY2FsID4gLnN3aXBlci1wYWdpbmF0aW9uLXByb2dyZXNzYmFyLFxuLnN3aXBlci1jb250YWluZXItaG9yaXpvbnRhbCA+IC5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci5zd2lwZXItcGFnaW5hdGlvbi1wcm9ncmVzc2Jhci1vcHBvc2l0ZSB7XG4gIHdpZHRoOiA0cHg7XG4gIGhlaWdodDogMTAwJTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xufVxuLnN3aXBlci1wYWdpbmF0aW9uLXdoaXRlIHtcbiAgLS1zd2lwZXItcGFnaW5hdGlvbi1jb2xvcjogI2ZmZmZmZjtcbn1cbi5zd2lwZXItcGFnaW5hdGlvbi1ibGFjayB7XG4gIC0tc3dpcGVyLXBhZ2luYXRpb24tY29sb3I6ICMwMDAwMDA7XG59XG4uc3dpcGVyLXBhZ2luYXRpb24tbG9jayB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG4vKiBTY3JvbGxiYXIgKi9cbi5zd2lwZXItc2Nyb2xsYmFyIHtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAtbXMtdG91Y2gtYWN0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1ob3Jpem9udGFsID4gLnN3aXBlci1zY3JvbGxiYXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDElO1xuICBib3R0b206IDNweDtcbiAgei1pbmRleDogNTA7XG4gIGhlaWdodDogNXB4O1xuICB3aWR0aDogOTglO1xufVxuLnN3aXBlci1jb250YWluZXItdmVydGljYWwgPiAuc3dpcGVyLXNjcm9sbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDNweDtcbiAgdG9wOiAxJTtcbiAgei1pbmRleDogNTA7XG4gIHdpZHRoOiA1cHg7XG4gIGhlaWdodDogOTglO1xufVxuLnN3aXBlci1zY3JvbGxiYXItZHJhZyB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG59XG4uc3dpcGVyLXNjcm9sbGJhci1jdXJzb3ItZHJhZyB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbi5zd2lwZXItc2Nyb2xsYmFyLWxvY2sge1xuICBkaXNwbGF5OiBub25lO1xufVxuLnN3aXBlci16b29tLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4uc3dpcGVyLXpvb20tY29udGFpbmVyID4gaW1nLFxuLnN3aXBlci16b29tLWNvbnRhaW5lciA+IHN2Zyxcbi5zd2lwZXItem9vbS1jb250YWluZXIgPiBjYW52YXMge1xuICBtYXgtd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDEwMCU7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG4uc3dpcGVyLXNsaWRlLXpvb21lZCB7XG4gIGN1cnNvcjogbW92ZTtcbn1cbi8qIFByZWxvYWRlciAqL1xuOnJvb3Qge1xuICAvKlxuICAtLXN3aXBlci1wcmVsb2FkZXItY29sb3I6IHZhcigtLXN3aXBlci10aGVtZS1jb2xvcik7XG4gICovXG59XG4uc3dpcGVyLWxhenktcHJlbG9hZGVyIHtcbiAgd2lkdGg6IDQycHg7XG4gIGhlaWdodDogNDJweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiA1MCU7XG4gIHRvcDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTIxcHg7XG4gIG1hcmdpbi10b3A6IC0yMXB4O1xuICB6LWluZGV4OiAxMDtcbiAgdHJhbnNmb3JtLW9yaWdpbjogNTAlO1xuICBhbmltYXRpb246IHN3aXBlci1wcmVsb2FkZXItc3BpbiAxcyBpbmZpbml0ZSBsaW5lYXI7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGJvcmRlcjogNHB4IHNvbGlkIHZhcigtLXN3aXBlci1wcmVsb2FkZXItY29sb3IsIHZhcigtLXN3aXBlci10aGVtZS1jb2xvcikpO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIGJvcmRlci10b3AtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuLnN3aXBlci1sYXp5LXByZWxvYWRlci13aGl0ZSB7XG4gIC0tc3dpcGVyLXByZWxvYWRlci1jb2xvcjogI2ZmZjtcbn1cbi5zd2lwZXItbGF6eS1wcmVsb2FkZXItYmxhY2sge1xuICAtLXN3aXBlci1wcmVsb2FkZXItY29sb3I6ICMwMDA7XG59XG5Aa2V5ZnJhbWVzIHN3aXBlci1wcmVsb2FkZXItc3BpbiB7XG4gIDEwMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cbn1cbi8qIGExMXkgKi9cbi5zd2lwZXItY29udGFpbmVyIC5zd2lwZXItbm90aWZpY2F0aW9uIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICBvcGFjaXR5OiAwO1xuICB6LWluZGV4OiAtMTAwMDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZhZGUuc3dpcGVyLWNvbnRhaW5lci1mcmVlLW1vZGUgLnN3aXBlci1zbGlkZSB7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBlYXNlLW91dDtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xuICB0cmFuc2l0aW9uLXByb3BlcnR5OiBvcGFjaXR5O1xufVxuLnN3aXBlci1jb250YWluZXItZmFkZSAuc3dpcGVyLXNsaWRlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZhZGUgLnN3aXBlci1zbGlkZS1hY3RpdmUsXG4uc3dpcGVyLWNvbnRhaW5lci1mYWRlIC5zd2lwZXItc2xpZGUtYWN0aXZlIC5zd2lwZXItc2xpZGUtYWN0aXZlIHtcbiAgcG9pbnRlci1ldmVudHM6IGF1dG87XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIHtcbiAgb3ZlcmZsb3c6IHZpc2libGU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICB6LWluZGV4OiAxO1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlLnN3aXBlci1jb250YWluZXItcnRsIC5zd2lwZXItc2xpZGUge1xuICB0cmFuc2Zvcm0tb3JpZ2luOiAxMDAlIDA7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSxcbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1uZXh0LFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXByZXYsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtbmV4dCArIC5zd2lwZXItc2xpZGUge1xuICBwb2ludGVyLWV2ZW50czogYXV0bztcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWN1YmUgLnN3aXBlci1zbGlkZS1zaGFkb3ctdG9wLFxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLXNsaWRlLXNoYWRvdy1ib3R0b20sXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LWxlZnQsXG4uc3dpcGVyLWNvbnRhaW5lci1jdWJlIC5zd2lwZXItc2xpZGUtc2hhZG93LXJpZ2h0IHtcbiAgei1pbmRleDogMDtcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgICAgICAgYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLWN1YmUtc2hhZG93IHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDBweDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgb3BhY2l0eTogMC42O1xuICB6LWluZGV4OiAwO1xufVxuLnN3aXBlci1jb250YWluZXItY3ViZSAuc3dpcGVyLWN1YmUtc2hhZG93OmJlZm9yZSB7XG4gIGNvbnRlbnQ6ICcnO1xuICBiYWNrZ3JvdW5kOiAjMDAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYm90dG9tOiAwO1xuICByaWdodDogMDtcbiAgZmlsdGVyOiBibHVyKDUwcHgpO1xufVxuLnN3aXBlci1jb250YWluZXItZmxpcCB7XG4gIG92ZXJmbG93OiB2aXNpYmxlO1xufVxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICAgICAgICAgIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgei1pbmRleDogMTtcbn1cbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZSAuc3dpcGVyLXNsaWRlIHtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtYWN0aXZlLFxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLWFjdGl2ZSAuc3dpcGVyLXNsaWRlLWFjdGl2ZSB7XG4gIHBvaW50ZXItZXZlbnRzOiBhdXRvO1xufVxuLnN3aXBlci1jb250YWluZXItZmxpcCAuc3dpcGVyLXNsaWRlLXNoYWRvdy10b3AsXG4uc3dpcGVyLWNvbnRhaW5lci1mbGlwIC5zd2lwZXItc2xpZGUtc2hhZG93LWJvdHRvbSxcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctbGVmdCxcbi5zd2lwZXItY29udGFpbmVyLWZsaXAgLnN3aXBlci1zbGlkZS1zaGFkb3ctcmlnaHQge1xuICB6LWluZGV4OiAwO1xuICAtd2Via2l0LWJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcbiAgICAgICAgICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG4iXX0= */";
      /***/
    },

    /***/
    90943:
    /*!*************************************!*\
      !*** ./src/app/tab3/tab3.page.scss ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".header-banner {\n  min-height: 200px;\n  background: transparent;\n  padding: 7px;\n}\n.header-banner img {\n  border-radius: 5px;\n}\n.category-container {\n  border: 0.5px solid #9e9e9e;\n  border-radius: 5px;\n  margin: 10px;\n  padding: 10px;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.category-container h6 {\n  color: black;\n  font-family: \"PT_Sans_Bold\" !important;\n}\n.category-container .looping {\n  border: 0.1px solid #000000ab;\n  border-radius: 5px;\n  margin: 15px 5px;\n  padding: 10px;\n  width: 90px;\n  height: 95px;\n  text-align: center;\n  background-color: #ffffffa8;\n}\n.category-container .looping p {\n  font-size: 12px;\n  margin: 0px;\n  color: black !important;\n}\n.slide-zoom {\n  height: 100%;\n}\nion-slides {\n  height: 200px;\n}\nion-button {\n  text-transform: none;\n  --background: linear-gradient(to bottom, #930b3d 10%, #350B40 80%);\n  font-size: 20px;\n  --box-shadow: transparent;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQUE7RUFDQSx1QkFBQTtFQUNBLFlBQUE7QUFDSjtBQUFJO0VBQ0ksa0JBQUE7QUFFUjtBQUVBO0VBQ0ksMkJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQUk7RUFDSSxZQUFBO0VBQ0Esc0NBQUE7QUFFUjtBQUFJO0VBQ0ksNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSwyQkFBQTtBQUVSO0FBRFE7RUFDSSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0FBR1o7QUFFQTtFQUNJLFlBQUE7QUFDSjtBQUVBO0VBQ0ksYUFBQTtBQUNKO0FBRUE7RUFDSSxvQkFBQTtFQUVBLGtFQUFBO0VBRUEsZUFBQTtFQUNBLHlCQUFBO0FBREoiLCJmaWxlIjoidGFiMy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyLWJhbm5lciB7XG4gICAgbWluLWhlaWdodDogMjAwcHg7XG4gICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQ7XG4gICAgcGFkZGluZzogN3B4O1xuICAgIGltZyB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICB9XG59XG5cbi5jYXRlZ29yeS1jb250YWluZXIge1xuICAgIGJvcmRlcjogMC41cHggc29saWQgIzllOWU5ZTtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgbWFyZ2luOiAxMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGg2IHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICBmb250LWZhbWlseTogJ1BUX1NhbnNfQm9sZCcgIWltcG9ydGFudDtcbiAgICB9XG4gICAgLmxvb3Bpbmcge1xuICAgICAgICBib3JkZXI6IDAuMXB4IHNvbGlkICMwMDAwMDBhYjtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBtYXJnaW46IDE1cHggNXB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICB3aWR0aDogOTBweDtcbiAgICAgICAgaGVpZ2h0OiA5NXB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmZhODtcbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgICAgIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xuICAgICAgICB9XG4gICAgfVxufVxuXG4uc2xpZGUtem9vbSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xufVxuXG5pb24tc2xpZGVzIHtcbiAgICBoZWlnaHQ6IDIwMHB4O1xufVxuXG5pb24tYnV0dG9uIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgICAvLyAtLWJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sICNFNDg3MjAgMTAlLCAjRDgzMTI4IDgwJSk7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjOTMwYjNkIDEwJSwgIzM1MEI0MCA4MCUpO1xuICAgIC8vIGhlaWdodDogNTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgLS1ib3gtc2hhZG93OiB0cmFuc3BhcmVudDtcbn0iXX0= */";
      /***/
    },

    /***/
    64255:
    /*!***************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
      \***************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n\n        <div style=\"display: flex;\n        justify-content: space-between;\n        align-items: center;\">\n            <ion-buttons>\n                <ion-menu-button>\n                    <ion-icon name=\"menu\" color=\"dark\"></ion-icon>\n                    <!-- <img src=\"../../assets/icon/tog-menu-icn.png\" alt=\"\"> -->\n                </ion-menu-button>\n            </ion-buttons>\n\n            <ion-title style=\"text-align: start;\n            color: black;\n            font-size: 15px;\n            font-family: 'PT_Sans_Bold';\">\n                Hai, Akshay Mohan\n            </ion-title>\n\n            <div>\n                <!-- <ion-badge style=\"position: absolute;\n                border-radius: 50%;\n                height: 20px;\n                width: 20px;\n                --background: #f16a9b;\">6</ion-badge> -->\n                <ion-icon name=\"notifications\" color=\"dark\" style=\"font-size: 25px; margin-right: 15px;\"></ion-icon>\n                <!-- <img src=\"../../assets/icon/icons8-notification-48.png\" alt=\"\" style=\"height: 30px;\n                margin-right: 20px;\" routerLink=\"/notification\"> -->\n            </div>\n        </div>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <div style=\"display: flex; align-items: center; justify-content: space-around;\">\n            <ion-icon name=\"location-outline\" slot=\"start\" style=\"color: red;\n            font-size: 30px;\"></ion-icon>\n            <div style=\"text-align: start;\n            position: relative;\n            right: 35px;\">\n                <h6 style=\"color: red;\n                font-family: 'PT_Sans_Bold';\">Anchal</h6>\n                <ion-note color=\"dark\" style=\"font-family: 'PT_Sans_Bold';\">Kollam, Kerala 691309</ion-note>\n            </div>\n            <ion-avatar slot=\"end\" style=\"height: 50px;\n            width: 50px;\n            border: 1px solid lightgrey;\n            padding: 1px;\">\n                <img src=\"../../assets/image/person-icon.png\" alt=\"\">\n            </ion-avatar>\n        </div>\n\n        <div style=\"text-align: start;\n        padding: 5px 0px 5px 10px;\">\n            <h1 style=\"margin: 0px;\n            color: black;\n            font-family: 'PT_Sans_Bold';\">What would you</h1>\n            <h1 style=\"margin: 0px;\n            color: black;\n            font-family: 'PT_Sans_Bold';\">like to eat?</h1>\n        </div>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"header-banner\">\n        <img src=\"../../assets/image/meat-hd.jpeg\">\n        <!-- <ion-slides loop=\"true\" [options]=\"slideOpts\">\n            <ion-slide>\n                <img src=\"../../assets/image/Sampleimages/img1.jpeg\" alt=\"\" style=\"padding: 5px 5px 5px 5px;\n                border-radius: 20px;\">\n            </ion-slide>\n\n            <ion-slide>\n                <img src=\"../../assets/image/Sampleimages/img2.png\" alt=\"\" style=\"padding: 5px 5px 5px 5px;\n                border-radius: 20px;\">\n            </ion-slide>\n\n            <ion-slide>\n                <img src=\"../../assets/image/Sampleimages/img3.jpeg\" alt=\"\" style=\"padding: 5px 5px 5px 5px;\n                border-radius: 20px;\">\n            </ion-slide>\n\n            <ion-slide>\n                <img src=\"../../assets/image/Sampleimages/img4.jpeg\" alt=\"\" style=\"padding: 5px 5px 5px 5px;\n                border-radius: 20px;\">\n            </ion-slide>\n\n            <ion-slide>\n                <img src=\"../../assets/image/Sampleimages/img5.jpeg\" alt=\"\" style=\"padding: 5px 5px 5px 5px;\n                border-radius: 20px;\">\n            </ion-slide>\n\n            <ion-slide>\n                <img src=\"../../assets/image/Sampleimages/img6.jpeg\" alt=\"\" style=\"padding: 5px 5px 5px 5px;\n                border-radius: 20px;\">\n            </ion-slide>\n\n        </ion-slides> -->\n    </div>\n\n\n    <div class=\"category-container\" [style]=\"'background-image: url('+this.blurBg[0]+')'\">\n        <h5 style=\"margin-top: 0px;\">Shop by category</h5>\n        <div *ngFor=\"let c of category\" class=\"looping\">\n            <img src=\"../../assets/icon/meat.png\" alt=\"\">\n            <p>Meat</p>\n        </div>\n    </div>\n\n    <div class=\"category-container\" [style]=\"'background-image: url('+this.blurBg[1]+')'\">\n        <h5 style=\"margin-top: 0px;\">Featured Products</h5>\n        <div style=\"display: flex; align-items: center; overflow-x: overlay;\">\n            <div *ngFor=\"let c of products\" class=\"looping\">\n                <img src=\"../../assets/icon/meat.png\" alt=\"\">\n                <p>Meat</p>\n            </div>\n        </div>\n\n    </div>\n\n    <div class=\"category-container\" [style]=\"'background-image: url('+this.blurBg[2]+')'\">\n        <div style=\"display: flex;\n        align-items: center;\n        justify-content: space-between;\">\n            <h5 style=\"margin-top: 0px;\">Top Deals</h5>\n            <p style=\"color: #205449 !important;\">View all</p>\n        </div>\n        <div style=\"display: flex; align-items: center; overflow-x: overlay;\">\n\n            <div *ngFor=\"let c of deals\" class=\"looping\">\n                <img src=\"../../assets/icon/meat.png\" alt=\"\">\n                <p>Meat</p>\n            </div>\n        </div>\n\n    </div>\n\n\n\n    <!-- <div>\n\n        <H4 style=\"background: #afb3be;\n        border-radius: 0px 20px 20px 0px;\n        height: 40px;\n        display: flex;\n        align-items: center;\n        padding: 0px 15px;\n        font-family: 'Fredoka_One';\n        width: 210px;\n        border-right: 5px solid #494848;\">Our Products</H4>\n\n\n        <div style=\"padding: 10px;\" *ngFor=\"let p of productDetails; let i = index;\" (click)=\"gotoPage(p)\">\n            <div>\n                <div style=\"display: flex;\n                align-items: center;\n                justify-content: space-around;\n                position: absolute;\n                right: 10px;\">\n                    <div style=\"padding: 10px;\n                    background: #0000006b;\n                    \">\n                        <ion-icon name=\"heart\" style=\"color: white;\n                        font-size: 2rem;\" (click)=\"addToWishlist(p, i)\"></ion-icon>\n                    </div>\n\n                </div>\n                <img src=\"../../assets/image/Sampleimages/img3.jpeg\" alt=\"\">\n            </div>\n            <div style=\"background: #040202b8;\n          border-radius: 0px 0px 10px 10px;\n          padding: 10px;\">\n                <p style=\"margin: 0px; font-family: 'Fredoka_One'; color: white; font-size: 20px;\"> {{p.product}} </p>\n                <span style=\"color: white;\">₹</span> <span style=\"color: white; font-family: 'PT_Sans_Bold';\"> {{p.rate}} </span> <span style=\"color: white;\">₹</span> <span style=\"color: white; font-family: 'PT_Sans_Bold';\"> {{p.offer}} </span>\n                <p style=\"margin: 0px; color: white; font-family: 'PT_Sans_Bold';\"> {{p.quantity}} </p>\n                <!-- <div style=\"display: flex; justify-content: space-evenly;\">\n                    <ion-button shape=\"round\" size=\"small\" (click)=\"addToCart(p, i)\">Add To Cart</ion-button>\n                    <ion-button shape=\"round\" size=\"small\" (click)=\"buyNow(p)\">Buy Now</ion-button>\n                </div> -->\n    <!-- </div>\n        </div>\n\n    </div> -->\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_tab3_tab3_module_ts-es5.js.map