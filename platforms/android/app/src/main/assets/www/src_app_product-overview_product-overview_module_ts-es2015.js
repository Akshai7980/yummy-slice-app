(self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_product-overview_product-overview_module_ts"],{

/***/ 95404:
/*!*********************************************************************!*\
  !*** ./src/app/product-overview/product-overview-routing.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOverviewPageRoutingModule": function() { return /* binding */ ProductOverviewPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _product_overview_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-overview.page */ 60480);




const routes = [
    {
        path: '',
        component: _product_overview_page__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewPage
    }
];
let ProductOverviewPageRoutingModule = class ProductOverviewPageRoutingModule {
};
ProductOverviewPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductOverviewPageRoutingModule);



/***/ }),

/***/ 61287:
/*!*************************************************************!*\
  !*** ./src/app/product-overview/product-overview.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOverviewPageModule": function() { return /* binding */ ProductOverviewPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _product_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-overview-routing.module */ 95404);
/* harmony import */ var _product_overview_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-overview.page */ 60480);







let ProductOverviewPageModule = class ProductOverviewPageModule {
};
ProductOverviewPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _product_overview_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductOverviewPageRoutingModule
        ],
        declarations: [_product_overview_page__WEBPACK_IMPORTED_MODULE_1__.ProductOverviewPage]
    })
], ProductOverviewPageModule);



/***/ }),

/***/ 60480:
/*!***********************************************************!*\
  !*** ./src/app/product-overview/product-overview.page.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductOverviewPage": function() { return /* binding */ ProductOverviewPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_product_overview_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-overview.page.html */ 26247);
/* harmony import */ var _product_overview_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-overview.page.scss */ 47439);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ProductOverviewPage = class ProductOverviewPage {
    constructor() { }
    ngOnInit() {
    }
};
ProductOverviewPage.ctorParameters = () => [];
ProductOverviewPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-product-overview',
        template: _raw_loader_product_overview_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_overview_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductOverviewPage);



/***/ }),

/***/ 47439:
/*!*************************************************************!*\
  !*** ./src/app/product-overview/product-overview.page.scss ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-card {\n  border-radius: 10px;\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 3px 5px 0px, rgba(0, 0, 0, 0.14) 0px 2px 2px 0px, rgba(0, 0, 0, 0.12) 0px 1px 5px 0px;\n  border-bottom: 5px solid #EF621F;\n  font-family: PT_Sans_Bold;\n  margin-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3Qtb3ZlcnZpZXcucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSx3SEFBQTtFQUNBLGdDQUFBO0VBQ0EseUJBQUE7RUFDQSxtQkFBQTtBQUNKIiwiZmlsZSI6InByb2R1Y3Qtb3ZlcnZpZXcucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNhcmQge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggM3B4IDVweCAwcHgsIHJnYigwIDAgMCAvIDE0JSkgMHB4IDJweCAycHggMHB4LCByZ2IoMCAwIDAgLyAxMiUpIDBweCAxcHggNXB4IDBweDtcbiAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI0VGNjIxRjtcbiAgICBmb250LWZhbWlseTogUFRfU2Fuc19Cb2xkO1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59Il19 */");

/***/ }),

/***/ 26247:
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-overview/product-overview.page.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button icon=\"chevron-back\" defaultHref=\"/tabs/tab3\"></ion-back-button>\n  </ion-buttons>\n    <ion-title>Product Overview</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Different chicken cuts</ion-card-title>\n      <ion-card-subtitle\n        >A chicken can either be used as a whole bird or be divided into four\n        different cuts – the drumstick, wing, thigh and breast. Let’s look at\n        each one of these different cuts and what they are commonly used\n        for.</ion-card-subtitle\n      >\n    </ion-card-header>\n\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Whole bird</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      The whole chicken can be used for making chicken stock. You would roast or\n      poach the chicken with vegetables and could then use the cooked meat for\n      sandwiches and salads. Alternatively, you could flatten the chicken. This\n      is a great way to barbecue a whole chicken, finishing it off in a closed\n      barbecue to cook through.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Breast and tenderloin</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      Chicken breast must be the most versatile meat.  It is a white meat with very little fat and it is the perfect cut to slice up in stir-fries, marinate and grill, pan-fry or oven roast, filled with your favourite filling. Chicken breasts can also be baked or poached and used in salad, sandwiches or shredded and put into soups.\nTenderloins are a good option too. They are slightly more tender than the whole breast and are great crumbed and baked, or quickly chargrilled and tossed in a hot salad.\nBuy as single chicken breasts fillets without the skin, with tenderloin attached, or with skin on. A supreme cut is the chicken breast with wingette attached and skin on.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Thighs</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      Chicken thighs can be bought as thigh fillets with skin and bone removed, or thigh cutlets, with bone and skin still attached. Chicken thigh meat is brown and has a little more fat then the breast, but also slightly more flavour.\nThigh fillets are great sliced or chopped in stir-fries, or in casseroles. Use the thigh cutlet in casseroles or bakes.\nChicken Maryland is the thigh with the drumstick attached. Maryland is great for roasting and baking and can also be used on the barbeque or char-grill.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Drumsticks, wings</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      Chicken wings and drumsticks are usually cheaper cuts of chicken. They are great baked in a sticky glaze or marinade and eaten in your fingers.\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card>\n    <ion-card-header>\n      <ion-card-title>Mince</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      Chicken mince can be used for rissoles, burgers, meatballs, or cooked in a Vietnamese larb salad. You can use chicken mince instead of beef mince in tacos or enchiladas.    </ion-card-content>\n  </ion-card>\n</ion-content>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_product-overview_product-overview_module_ts-es2015.js.map