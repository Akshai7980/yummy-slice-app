(self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_forgot-password_forgot-password_module_ts"],{

/***/ 53673:
/*!*******************************************************************!*\
  !*** ./src/app/forgot-password/forgot-password-routing.module.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageRoutingModule": function() { return /* binding */ ForgotPasswordPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password.page */ 72327);




const routes = [
    {
        path: '',
        component: _forgot_password_page__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPage
    }
];
let ForgotPasswordPageRoutingModule = class ForgotPasswordPageRoutingModule {
};
ForgotPasswordPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ForgotPasswordPageRoutingModule);



/***/ }),

/***/ 17157:
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPageModule": function() { return /* binding */ ForgotPasswordPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forgot-password-routing.module */ 53673);
/* harmony import */ var _forgot_password_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page */ 72327);







let ForgotPasswordPageModule = class ForgotPasswordPageModule {
};
ForgotPasswordPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _forgot_password_routing_module__WEBPACK_IMPORTED_MODULE_0__.ForgotPasswordPageRoutingModule
        ],
        declarations: [_forgot_password_page__WEBPACK_IMPORTED_MODULE_1__.ForgotPasswordPage]
    })
], ForgotPasswordPageModule);



/***/ }),

/***/ 72327:
/*!*********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ForgotPasswordPage": function() { return /* binding */ ForgotPasswordPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./forgot-password.page.html */ 82646);
/* harmony import */ var _forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./forgot-password.page.scss */ 76249);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _service_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/controller.service */ 26110);





let ForgotPasswordPage = class ForgotPasswordPage {
    constructor(control) {
        this.control = control;
    }
    ngOnInit() {
    }
    forgot() {
        this.control.fireauth.sendPasswordResetEmail(this.email)
            .then(data => {
            console.log(data);
        })
            .catch(err => {
            console.log(` failed ${err}`);
            this.error = err.message;
        });
    }
};
ForgotPasswordPage.ctorParameters = () => [
    { type: _service_controller_service__WEBPACK_IMPORTED_MODULE_2__.ControllerService }
];
ForgotPasswordPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-forgot-password',
        template: _raw_loader_forgot_password_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_forgot_password_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ForgotPasswordPage);



/***/ }),

/***/ 76249:
/*!***********************************************************!*\
  !*** ./src/app/forgot-password/forgot-password.page.scss ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb3Jnb3QtcGFzc3dvcmQucGFnZS5zY3NzIn0= */");

/***/ }),

/***/ 82646:
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot-password/forgot-password.page.html ***!
  \*************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Forgot Password</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    <div style=\"padding: 15px;\n\">\n        <div style=\"text-align: center;\n        padding: 15px;\n        background: white;\n        border-radius: 50%;\n        border: 1px solid #9e9e9e;\n        width: 350px;\n        height: 350px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n        box-shadow: 1px 1px 10px 3px lightgrey;\">\n            <img src=\"../../assets/image/forgot-password.gif\" alt=\"\" style=\"border-radius: 50%;\n        height: 300px;\n        width: 300px;\n        object-fit: cover;\">\n        </div>\n\n        <div style=\"text-align: center;\n        margin-top: 20px;\n        background: #afb3be;\n        padding: 15px;\n        border-radius: 10px;\">\n            <p style=\"color: black;\n            font-family: 'Fredoka_One';\n            letter-spacing: .5px;\n            text-align: left;\">That's Okay, it happens! Click on the button below to reset your password. We'll send an email with instructions to reset your password</p>\n\n            <ion-button shape=\"round\" style=\"--background: linear-gradient(to bottom, #E48720 10%, #D83128 80%);\n            margin-top: 30px;\n            font-family: 'Fredoka_One';\n            height: 45px;\n          \" (click)=\"forgot()\">Reset My Password</ion-button>\n        </div>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_forgot-password_forgot-password_module_ts-es2015.js.map