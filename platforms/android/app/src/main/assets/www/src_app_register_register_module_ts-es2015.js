(self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_register_register_module_ts"],{

/***/ 23963:
/*!*****************************************************!*\
  !*** ./src/app/register/register-routing.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageRoutingModule": function() { return /* binding */ RegisterPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register.page */ 98135);




const routes = [
    {
        path: '',
        component: _register_page__WEBPACK_IMPORTED_MODULE_0__.RegisterPage
    }
];
let RegisterPageRoutingModule = class RegisterPageRoutingModule {
};
RegisterPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], RegisterPageRoutingModule);



/***/ }),

/***/ 18723:
/*!*********************************************!*\
  !*** ./src/app/register/register.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPageModule": function() { return /* binding */ RegisterPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _register_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./register-routing.module */ 23963);
/* harmony import */ var _register_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page */ 98135);







let RegisterPageModule = class RegisterPageModule {
};
RegisterPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _register_routing_module__WEBPACK_IMPORTED_MODULE_0__.RegisterPageRoutingModule
        ],
        declarations: [_register_page__WEBPACK_IMPORTED_MODULE_1__.RegisterPage]
    })
], RegisterPageModule);



/***/ }),

/***/ 98135:
/*!*******************************************!*\
  !*** ./src/app/register/register.page.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "RegisterPage": function() { return /* binding */ RegisterPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./register.page.html */ 29200);
/* harmony import */ var _register_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./register.page.scss */ 69728);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _service_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/controller.service */ 26110);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/crud.service */ 79928);
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/storage.service */ 55813);



/* eslint-disable max-len */
/* eslint-disable id-blacklist */





let RegisterPage = class RegisterPage {
    constructor(control, formBuilder, storage, crud) {
        this.control = control;
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.crud = crud;
        this.error = '';
    }
    ngOnInit() {
        this.registrationForm = this.formBuilder.group({
            uid: [''],
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(3)]],
            email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(12)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(6)]],
            district: ['Kollam'],
            city: ['Anchal'],
            phone: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.Validators.minLength(10)]],
            signUp: [Date.now()],
        });
    }
    register() {
        console.log('Registration Details:', this.registrationForm.value);
        if (!this.registrationForm.valid) {
            return false;
        }
        else {
            this.control.fireauth
                .createUserWithEmailAndPassword(this.registrationForm.value.email, this.registrationForm.value.password)
                .then((res) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                const loaderMsg = '';
                const loaderTime = 2000;
                this.control.presentLoading(loaderMsg, loaderTime);
                if (res.user) {
                    console.log('user', res.user);
                    console.log('uid', res.user.uid);
                    this.registrationForm.value.uid = res.user.uid;
                    const toastHead = 'User Alert!';
                    const toastMsg = 'User registration successfully completed, Please Login with the same email and password to continue to the App';
                    this.control.presentToastWithOptions(toastHead, toastMsg);
                    this.control.navController.navigateRoot(['/login']);
                    this.createUserDetails();
                }
            }))
                .catch((err) => (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
                console.log(`login failed ${err}`);
                this.error = err.message;
            }));
        }
    }
    createUserDetails() {
        this.storage.storage.set('USER_DETAILS', this.registrationForm.value);
        this.crud.createUser(this.registrationForm.value)
            .then(() => {
            this.registrationForm.reset();
        }).catch((err) => {
            console.log(err);
        });
    }
};
RegisterPage.ctorParameters = () => [
    { type: _service_controller_service__WEBPACK_IMPORTED_MODULE_2__.ControllerService },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _service_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _service_crud_service__WEBPACK_IMPORTED_MODULE_3__.CrudService }
];
RegisterPage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-register',
        template: _raw_loader_register_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_register_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], RegisterPage);



/***/ }),

/***/ 69728:
/*!*********************************************!*\
  !*** ./src/app/register/register.page.scss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --background: linear-gradient(to bottom, #930b3d 10%, #350B40 80%);\n}\n\n.input-field-container {\n  display: flex;\n  padding: 5px 5px 5px 5px;\n  background: #9e9e9e80;\n  align-items: center;\n  border-radius: 30px;\n  border: 1px solid black;\n  margin-bottom: 10px;\n  height: 50px;\n}\n\nion-input {\n  font-family: \"Fredoka_One\";\n  letter-spacing: 1px;\n  color: white;\n}\n\nion-checkbox {\n  margin-right: 10px;\n  --border-color: #e38120;\n  --background-checked: #d83128;\n  --border-color-checked: #e38120;\n}\n\nion-button {\n  --background: linear-gradient(to bottom, #E48720 10%, #D83128 80%);\n  font-family: \"Fredoka_One\";\n  --padding-start: 40px;\n  --padding-end: 40px;\n  height: 43px;\n  font-size: 18px;\n  --box-shadow: none;\n}\n\n.remember-me-container {\n  display: flex;\n  margin: 25px 0px 0px 0px;\n}\n\n.forgot-password-container {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: 10px;\n}\n\n.bottom-container {\n  display: flex;\n  float: right;\n  margin-top: 10%;\n}\n\n.bottom-content-container {\n  margin-right: 15px;\n}\n\nH6 {\n  margin: 0px;\n  color: white;\n  font-family: \"PT_Sans_Bold\" !important;\n}\n\nH3 {\n  margin: 0px;\n  float: right;\n  color: white;\n  font-family: \"Fredoka_One\" !important;\n}\n\n.bottom-forward-icon {\n  height: 35px;\n  width: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtFQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrRUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxzQ0FBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EscUNBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoicmVnaXN0ZXIucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzkzMGIzZCAxMCUsICMzNTBCNDAgODAlKTtcbn1cblxuLmlucHV0LWZpZWxkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZDogIzllOWU5ZTgwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBmb250LWZhbWlseTogJ0ZyZWRva2FfT25lJztcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgLS1ib3JkZXItY29sb3I6ICNlMzgxMjA7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNkODMxMjg7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2UzODEyMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRTQ4NzIwIDEwJSwgI0Q4MzEyOCA4MCUpO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJlZG9rYV9PbmUnO1xuICAgIC0tcGFkZGluZy1zdGFydDogNDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0MHB4O1xuICAgIGhlaWdodDogNDNweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4ucmVtZW1iZXItbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMjVweCAwcHggMHB4IDBweDtcbn1cblxuLmZvcmdvdC1wYXNzd29yZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uYm90dG9tLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgbWFyZ2luLXRvcDogMTAlO1xufVxuXG4uYm90dG9tLWNvbnRlbnQtY29udGFpbmVyIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG59XG5cbkg2IHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdQVF9TYW5zX0JvbGQnICFpbXBvcnRhbnQ7XG59XG5cbkgzIHtcbiAgICBtYXJnaW46IDBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJlZG9rYV9PbmUnICFpbXBvcnRhbnQ7XG59XG5cbi5ib3R0b20tZm9yd2FyZC1pY29uIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG59Il19 */");

/***/ }),

/***/ 29200:
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.page.html ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n\n    <div style=\"padding: 3% 12% 0% 12%;\">\n\n        <div>\n            <form [formGroup]=\"registrationForm\" (ngSubmit)=\"register()\">\n\n                <div style=\"text-align: center;\">\n                    <img src=\"../../assets/image/chef.jpeg\" alt=\"\" style=\"border-radius: 50%;\n                    height: 110px;\n                    width: 110px;\">\n                    <H1 style=\"color: white;\n                    margin: 0px 0px 20px 0px;\n                    font-family: Lobster-Regular;\n                    font-size: 35px;\">Yummy Slice</H1>\n                </div>\n\n                <div class=\"input-field-container\">\n                    <ion-input placeholder=\"User Name\" type=\"text\" formControlName=\"username\" autocapitalize=\"true\" autofill=\"false\"></ion-input>\n                    <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n                </div>\n\n                <div class=\"input-field-container\">\n                    <ion-input placeholder=\"Email\" type=\"email\" formControlName=\"email\" autocapitalize=\"true\" autofill=\"false\"></ion-input>\n                    <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n                </div>\n\n                <div class=\"input-field-container\">\n                    <ion-input type=\"text\" placeholder=\"District\" formControlName=\"district\" [readonly]=\"true\">\n                    </ion-input>\n                    <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n                </div>\n\n                <div class=\"input-field-container\">\n                    <ion-input placeholder=\"Home Town / City\" type=\"text\" formControlName=\"city\" [readonly]=\"true\"></ion-input>\n                    <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n                </div>\n\n                <div class=\"input-field-container\">\n                    <ion-input placeholder=\"Mobile Number\" type=\"number\" formControlName=\"phone\" autocapitalize=\"true\" autofill=\"false\"></ion-input>\n                    <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n                </div>\n\n                <div class=\"input-field-container\">\n                    <ion-input placeholder=\"Password\" type=\"password\" formControlName=\"password\" autocapitalize=\"true\" autofill=\"false\"></ion-input>\n                    <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n                </div>\n\n                <div class=\"forgot-password-container\">\n                    <ion-button shape=\"round\" type=\"submit\" style=\"--background: linear-gradient(to bottom, #E48720 10%, #D83128 80%);\n        \"> Register </ion-button>\n                </div>\n\n                <div class=\"bottom-container\">\n                    <div class=\"bottom-content-container\">\n                        <H6>Already have an account ?</H6>\n                        <H3>Login</H3>\n                    </div>\n                    <div>\n                        <img src=\"../../assets/icon/reg-ic.png\" alt=\"\" routerLink=\"/login\" class=\"bottom-forward-icon\">\n                    </div>\n                </div>\n            </form>\n        </div>\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_register_register_module_ts-es2015.js.map