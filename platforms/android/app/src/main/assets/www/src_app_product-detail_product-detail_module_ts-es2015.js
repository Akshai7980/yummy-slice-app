(self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_product-detail_product-detail_module_ts"],{

/***/ 130:
/*!*****************************************************!*\
  !*** ./src/app/components/badge/badge.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BadgeComponent": function() { return /* binding */ BadgeComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_badge_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./badge.component.html */ 36314);
/* harmony import */ var _badge_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./badge.component.scss */ 31419);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);




let BadgeComponent = class BadgeComponent {
    constructor() { }
    ngOnInit() { }
};
BadgeComponent.ctorParameters = () => [];
BadgeComponent.propDecorators = {
    icon: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }],
    text: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input }]
};
BadgeComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-badge',
        template: _raw_loader_badge_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_badge_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], BadgeComponent);



/***/ }),

/***/ 61354:
/*!*******************************************************!*\
  !*** ./src/app/components/button/button.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ButtonComponent": function() { return /* binding */ ButtonComponent; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_button_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./button.component.html */ 86262);
/* harmony import */ var _button_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./button.component.scss */ 22787);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let ButtonComponent = class ButtonComponent {
    constructor() { }
    ngOnInit() { }
};
ButtonComponent.ctorParameters = () => [];
ButtonComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-button',
        template: _raw_loader_button_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_button_component_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ButtonComponent);



/***/ }),

/***/ 71481:
/*!*****************************************************************!*\
  !*** ./src/app/product-detail/product-detail-routing.module.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPageRoutingModule": function() { return /* binding */ ProductDetailPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail.page */ 96055);




const routes = [
    {
        path: '',
        component: _product_detail_page__WEBPACK_IMPORTED_MODULE_0__.ProductDetailPage
    }
];
let ProductDetailPageRoutingModule = class ProductDetailPageRoutingModule {
};
ProductDetailPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ProductDetailPageRoutingModule);



/***/ }),

/***/ 21522:
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPageModule": function() { return /* binding */ ProductDetailPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./product-detail-routing.module */ 71481);
/* harmony import */ var _product_detail_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.page */ 96055);
/* harmony import */ var _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/badge/badge.component */ 130);
/* harmony import */ var _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../components/button/button.component */ 61354);









let ProductDetailPageModule = class ProductDetailPageModule {
};
ProductDetailPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule,
            _product_detail_routing_module__WEBPACK_IMPORTED_MODULE_0__.ProductDetailPageRoutingModule
        ],
        declarations: [_product_detail_page__WEBPACK_IMPORTED_MODULE_1__.ProductDetailPage, _components_badge_badge_component__WEBPACK_IMPORTED_MODULE_2__.BadgeComponent, _components_button_button_component__WEBPACK_IMPORTED_MODULE_3__.ButtonComponent]
    })
], ProductDetailPageModule);



/***/ }),

/***/ 96055:
/*!*******************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProductDetailPage": function() { return /* binding */ ProductDetailPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./product-detail.page.html */ 14099);
/* harmony import */ var _product_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./product-detail.page.scss */ 47441);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _service_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/controller.service */ 26110);
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/crud.service */ 79928);
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/storage.service */ 55813);



/* eslint-disable @typescript-eslint/naming-convention */




let ProductDetailPage = class ProductDetailPage {
    constructor(control, storage, crud) {
        this.control = control;
        this.storage = storage;
        this.crud = crud;
        this.productDetails = [];
        this.userDetails = [];
        this.control.route.queryParams.subscribe(params => {
            if (this.control.router.getCurrentNavigation().extras.state) {
                this.productDetails = this.control.router.getCurrentNavigation().extras.state.product;
                console.log('productDetails:', this.productDetails);
            }
        });
    }
    ngOnInit() {
        this.getUserDetails();
    }
    getUserDetails() {
        this.storage.storage.get('USER_DETAILS').then((val) => {
            console.log('val:', val);
            this.userDetails = val;
            console.log('userDetails:', this.userDetails);
        });
    }
    addItemToCart() {
        var _a, _b, _c, _d, _e, _f;
        const cartitem = {
            id: (_a = this.productDetails) === null || _a === void 0 ? void 0 : _a.id,
            name: (_b = this.productDetails) === null || _b === void 0 ? void 0 : _b.product,
            price: (_c = this.productDetails) === null || _c === void 0 ? void 0 : _c.rate,
            image: (_d = this.productDetails) === null || _d === void 0 ? void 0 : _d.image,
            count: 1,
            quantity: (_e = this.productDetails) === null || _e === void 0 ? void 0 : _e.quantity,
            created_at: Date.now(),
            userid: (_f = this.userDetails) === null || _f === void 0 ? void 0 : _f.uid
        };
        console.log('cartitem:', cartitem);
        this.crud.ngFirestore.collection('userCart').add(cartitem).then((res) => {
            console.log('Add To Cart Res:', res);
        });
    }
};
ProductDetailPage.ctorParameters = () => [
    { type: _service_controller_service__WEBPACK_IMPORTED_MODULE_2__.ControllerService },
    { type: _service_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _service_crud_service__WEBPACK_IMPORTED_MODULE_3__.CrudService }
];
ProductDetailPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-product-detail',
        template: _raw_loader_product_detail_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_product_detail_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ProductDetailPage);



/***/ }),

/***/ 31419:
/*!*******************************************************!*\
  !*** ./src/app/components/badge/badge.component.scss ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".badge {\n  margin-right: 1rem;\n  background: #6b45bc;\n  color: #fff;\n  font-size: 1.2rem;\n  display: flex;\n  align-items: center;\n  padding: 0.6rem;\n  border-radius: 1rem;\n}\n.badge ion-icon {\n  margin-right: 0.3rem;\n  font-size: 1.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJhZGdlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksa0JBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUNKO0FBQUk7RUFDSSxvQkFBQTtFQUNBLGlCQUFBO0FBRVIiLCJmaWxlIjoiYmFkZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYmFkZ2Uge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgICBiYWNrZ3JvdW5kOiAjNmI0NWJjO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAwLjZyZW07XG4gICAgYm9yZGVyLXJhZGl1czogMXJlbTtcbiAgICBpb24taWNvbiB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMC4zcmVtO1xuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgICB9XG59Il19 */");

/***/ }),

/***/ 22787:
/*!*********************************************************!*\
  !*** ./src/app/components/button/button.component.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  --box-shadow: none;\n  --border-radius: 1.8rem;\n  --background: #6b45bc;\n  text-transform: none;\n  text-transform: initial;\n  font-size: 1.2rem;\n  font-weight: 600;\n  height: 70px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJ1dHRvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxxQkFBQTtFQUNBLG9CQUFBO0VBQUEsdUJBQUE7RUFDQSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQUNKIiwiZmlsZSI6ImJ1dHRvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1idXR0b24ge1xuICAgIC0tYm94LXNoYWRvdzogbm9uZTtcbiAgICAtLWJvcmRlci1yYWRpdXM6IDEuOHJlbTtcbiAgICAtLWJhY2tncm91bmQ6ICM2YjQ1YmM7XG4gICAgdGV4dC10cmFuc2Zvcm06IGluaXRpYWw7XG4gICAgZm9udC1zaXplOiAxLjJyZW07XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBoZWlnaHQ6IDcwcHg7XG59Il19 */");

/***/ }),

/***/ 47441:
/*!*********************************************************!*\
  !*** ./src/app/product-detail/product-detail.page.scss ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: #6b45bc;\n  position: relative;\n}\nion-content .header {\n  display: flex;\n  justify-content: space-between;\n  padding: 1rem 0.5rem;\n}\nion-content .header ion-button {\n  height: 60px;\n  width: 60px;\n}\nion-content .header ion-button ion-icon {\n  font-size: 2rem;\n}\nion-content .card {\n  height: 75%;\n  width: 100%;\n  background: #fff;\n  position: absolute;\n  bottom: 0;\n  border-radius: 3rem 3rem 0 0;\n  padding: 1rem;\n}\nion-content .card .image {\n  position: absolute;\n  top: -6.5rem;\n  width: 50%;\n  left: 50%;\n  transform: translateX(-50%);\n}\nion-content .card .card-title {\n  margin-top: 35%;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1.2rem;\n}\nion-content .card .card-title h1 {\n  font-weight: 700;\n  font-size: 2.1rem;\n}\nion-content .card .card-title p {\n  font-size: 2.2rem;\n  font-weight: 700;\n  color: #ffb800;\n}\nion-content .card .card-title p sup {\n  font-size: 1.2rem;\n  margin-right: -0.5rem;\n}\nion-content .card .rates {\n  display: flex;\n  align-items: center;\n  margin-bottom: 3rem;\n}\nion-content .card .about {\n  margin-bottom: 2.5rem;\n}\nion-content .card .about h1 {\n  font-weight: 600;\n}\nion-content .card .about p {\n  font-size: 1.1rem;\n  line-height: 1.6;\n  color: #b9b9b9;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHFCQUFBO0VBQ0Esa0JBQUE7QUFDSjtBQUFJO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0Esb0JBQUE7QUFFUjtBQURRO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFHWjtBQUZZO0VBQ0ksZUFBQTtBQUloQjtBQUFJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLDRCQUFBO0VBQ0EsYUFBQTtBQUVSO0FBRFE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLDJCQUFBO0FBR1o7QUFEUTtFQUNJLGVBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FBR1o7QUFGWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFJaEI7QUFGWTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSWhCO0FBSGdCO0VBQ0ksaUJBQUE7RUFDQSxxQkFBQTtBQUtwQjtBQURRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7QUFHWjtBQURRO0VBQ0kscUJBQUE7QUFHWjtBQUZZO0VBQ0ksZ0JBQUE7QUFJaEI7QUFGWTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBSWhCIiwiZmlsZSI6InByb2R1Y3QtZGV0YWlsLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICAtLWJhY2tncm91bmQ6ICM2YjQ1YmM7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIC5oZWFkZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIHBhZGRpbmc6IDFyZW0gMC41cmVtO1xuICAgICAgICBpb24tYnV0dG9uIHtcbiAgICAgICAgICAgIGhlaWdodDogNjBweDtcbiAgICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICAgICAgaW9uLWljb24ge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAuY2FyZCB7XG4gICAgICAgIGhlaWdodDogNzUlO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBib3R0b206IDA7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNyZW0gM3JlbSAwIDA7XG4gICAgICAgIHBhZGRpbmc6IDFyZW07XG4gICAgICAgIC5pbWFnZSB7XG4gICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICB0b3A6IC02LjVyZW07XG4gICAgICAgICAgICB3aWR0aDogNTAlO1xuICAgICAgICAgICAgbGVmdDogNTAlO1xuICAgICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xuICAgICAgICB9XG4gICAgICAgIC5jYXJkLXRpdGxlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDM1JTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMS4ycmVtO1xuICAgICAgICAgICAgaDEge1xuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAyLjFyZW07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDIuMnJlbTtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNzAwO1xuICAgICAgICAgICAgICAgIGNvbG9yOiAjZmZiODAwO1xuICAgICAgICAgICAgICAgIHN1cCB7XG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IC0wLjVyZW07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5yYXRlcyB7XG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDNyZW07XG4gICAgICAgIH1cbiAgICAgICAgLmFib3V0IHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgICAgICAgICAgIGgxIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcCB7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNjtcbiAgICAgICAgICAgICAgICBjb2xvcjogI2I5YjliOTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ 36314:
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/badge/badge.component.html ***!
  \*********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"badge\">\n    <ion-icon [name]=\"icon\"></ion-icon> {{text}}\n</div>");

/***/ }),

/***/ 86262:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/button/button.component.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-button expand=\"block\">\n    <ng-content></ng-content>\n</ion-button>");

/***/ }),

/***/ 14099:
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/product-detail/product-detail.page.html ***!
  \***********************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <div class=\"header\">\n        <ion-buttons>\n            <ion-button routerLink=\"/tabs/tab3\">\n                <ion-icon slot=\"icon-only\" color='light' name=\"arrow-back\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n        <ion-buttons>\n            <ion-button>\n                <ion-icon slot=\"icon-only\" color='light' name=\"heart\"></ion-icon>\n            </ion-button>\n        </ion-buttons>\n    </div>\n\n    <!-- FOOD DETAIL CARD -->\n    <div class=\"card\">\n        <div class=\"image\">\n            <ion-avatar style=\"height: 200px;\n            width: 200px;\n            border: 5px solid #6b45bc;\n            padding: 0px;\">\n                <ion-img [src]=\"productDetails?.image\"></ion-img>\n            </ion-avatar>\n        </div>\n\n        <div class=\"card-content\">\n            <div class=\"card-title\">\n                <h1 class=\"ion-no-margin\">{{productDetails?.product}}</h1>\n                <p class=\"ion-no-margin\"><sup>$</sup> {{productDetails?.rate | number: '1.2'}}</p>\n            </div>\n        </div>\n\n        <div class=\"rates\">\n            <app-badge icon=\"d-time-forward\" text=\"30m\"></app-badge>\n            <app-badge icon=\"star-outline\" text=\"4.5\"></app-badge>\n        </div>\n\n        <div class=\"about\">\n            <h1>About</h1>\n            <p>{{productDetails?.description}}</p>\n        </div>\n\n        <app-button (click)=\"addItemToCart()\">Add to Cart</app-button>\n    </div>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_product-detail_product-detail_module_ts-es2015.js.map