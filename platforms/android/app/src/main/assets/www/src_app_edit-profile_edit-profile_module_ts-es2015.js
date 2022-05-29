(self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_edit-profile_edit-profile_module_ts"],{

/***/ 1871:
/*!*************************************************************!*\
  !*** ./src/app/edit-profile/edit-profile-routing.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageRoutingModule": function() { return /* binding */ EditProfilePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile.page */ 62613);




const routes = [
    {
        path: '',
        component: _edit_profile_page__WEBPACK_IMPORTED_MODULE_0__.EditProfilePage
    }
];
let EditProfilePageRoutingModule = class EditProfilePageRoutingModule {
};
EditProfilePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], EditProfilePageRoutingModule);



/***/ }),

/***/ 71241:
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.module.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePageModule": function() { return /* binding */ EditProfilePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit-profile-routing.module */ 1871);
/* harmony import */ var _edit_profile_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page */ 62613);







let EditProfilePageModule = class EditProfilePageModule {
};
EditProfilePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _edit_profile_routing_module__WEBPACK_IMPORTED_MODULE_0__.EditProfilePageRoutingModule
        ],
        declarations: [_edit_profile_page__WEBPACK_IMPORTED_MODULE_1__.EditProfilePage]
    })
], EditProfilePageModule);



/***/ }),

/***/ 62613:
/*!***************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EditProfilePage": function() { return /* binding */ EditProfilePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./edit-profile.page.html */ 9439);
/* harmony import */ var _edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./edit-profile.page.scss */ 25494);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/storage.service */ 55813);
/* harmony import */ var _service_controller_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/controller.service */ 26110);
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/crud.service */ 79928);








let EditProfilePage = class EditProfilePage {
    constructor(formBuilder, storage, control, crud) {
        this.formBuilder = formBuilder;
        this.storage = storage;
        this.control = control;
        this.crud = crud;
        this.userDetails = [];
        // this.control.route.queryParams.subscribe(params => {
        //   if (this.control.router.getCurrentNavigation().extras.state) {
        //     this.userDetails = this.control.router.getCurrentNavigation().extras.state.user;
        //     console.log('userDetails:',this.userDetails);
        //   }
        // });
    }
    ngOnInit() {
        var _a;
        this.editProfileForm = this.formBuilder.group({
            uid: [(_a = this.userDetails) === null || _a === void 0 ? void 0 : _a.uid],
            username: [''],
            email: [''],
            password: [''],
            district: ['Kollam'],
            city: ['Anchal'],
            code: ['+91'],
            alternate: [''],
            phone: [''],
            address: [''],
            landmark: [''],
            pincode: ['691306'],
            signUp: [''],
            signIn: [''],
            profileUpdate: [Date.now()]
        });
    }
    ionViewWillEnter() {
        this.getUserDetails();
    }
    getUserDetails() {
        this.storage.storage.get('USER_DETAILS').then((val) => {
            console.log('val:', val);
            this.userDetails = val;
        }).catch((err) => {
            console.log('Error', err);
        });
    }
    updateProfile() {
        console.log('Registration Details:', this.editProfileForm.value);
        this.storage.setStorage('USER_DETAILS', this.editProfileForm.value).then((res) => {
            console.log('Edit Profile Form Details:', res);
        }).catch((err) => {
            console.log('Error:', err);
        });
    }
};
EditProfilePage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormBuilder },
    { type: _service_storage_service__WEBPACK_IMPORTED_MODULE_2__.StorageService },
    { type: _service_controller_service__WEBPACK_IMPORTED_MODULE_3__.ControllerService },
    { type: _service_crud_service__WEBPACK_IMPORTED_MODULE_4__.CrudService }
];
EditProfilePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Component)({
        selector: 'app-edit-profile',
        template: _raw_loader_edit_profile_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_edit_profile_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], EditProfilePage);



/***/ }),

/***/ 25494:
/*!*****************************************************!*\
  !*** ./src/app/edit-profile/edit-profile.page.scss ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-button {\n  text-transform: none;\n  --background: linear-gradient(to bottom, #E48720 10%, #D83128 80%);\n  --color: white;\n  --box-shadow: transparent;\n}\n\n.input-field-container {\n  display: flex;\n  padding: 5px 5px 5px 5px;\n  background: #9e9e9e80;\n  align-items: center;\n  border-radius: 30px;\n  border-bottom: 2.5px solid black;\n  margin-bottom: 10px;\n  height: 50px;\n}\n\nion-input {\n  font-family: \"Fredoka_One\";\n  letter-spacing: 1px;\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVkaXQtcHJvZmlsZS5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUNBLGtFQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQ0FBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSiIsImZpbGUiOiJlZGl0LXByb2ZpbGUucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbiB7XG4gICAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRTQ4NzIwIDEwJSwgI0Q4MzEyOCA4MCUpO1xuICAgIC0tY29sb3I6IHdoaXRlO1xuICAgIC0tYm94LXNoYWRvdzogdHJhbnNwYXJlbnQ7XG59XG5cbi5pbnB1dC1maWVsZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZzogNXB4IDVweCA1cHggNXB4O1xuICAgIGJhY2tncm91bmQ6ICM5ZTllOWU4MDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMi41cHggc29saWQgYmxhY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICBoZWlnaHQ6IDUwcHg7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgZm9udC1mYW1pbHk6ICdGcmVkb2thX09uZSc7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDFweDtcbiAgICBjb2xvcjogd2hpdGU7XG59Il19 */");

/***/ }),

/***/ 9439:
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit-profile/edit-profile.page.html ***!
  \*******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <ion-buttons slot=\"start\">\n            <ion-back-button icon=\"chevron-back\"></ion-back-button>\n        </ion-buttons>\n        <ion-title>Edit Profile</ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n\n    <div style=\"background-image: linear-gradient(to right, #930b3d 10%, #350B40 80%);\n  padding: 30px 20px;\n  margin: 10px;\n  border-radius: 10px;\">\n\n        <form [formGroup]=\"editProfileForm\" (ngSubmit)=\"updateProfile()\">\n\n            <div class=\"input-field-container\">\n                <ion-input placeholder=\"User Name\" formControlName=\"username\" type=\"text\" [value]=\"this.userDetails.username\" [readonly]=\"true\"></ion-input>\n                <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n            </div>\n\n            <!-- <div class=\"input-field-container\">\n                <ion-input placeholder=\"Gender\" formControlName=\"gender\" type=\"text\" autocapitalize=\"true\" autofill=\"false\"></ion-input>\n                <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n            </div> -->\n\n            <div class=\"input-field-container\">\n                <ion-input placeholder=\"Email\" formControlName=\"email\" type=\"email\" [value]=\"this.userDetails.email\" [readonly]=\"true\"></ion-input>\n                <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n            </div>\n\n            <div class=\"input-field-container\">\n                <ion-input type=\"text\" placeholder=\"District\" formControlName=\"district\" [value]=\"this.userDetails.district\" [readonly]=\"true\">\n                </ion-input>\n                <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n            </div>\n\n            <div class=\"input-field-container\">\n                <ion-input placeholder=\"Home Town / City\" formControlName=\"city\" type=\"text\" [value]=\"this.userDetails.city\" [readonly]=\"true\"></ion-input>\n                <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n            </div>\n\n            <div class=\"input-field-container\">\n                <ion-input placeholder=\"Alternate Mobile Number\" formControlName=\"alternate\" type=\"number\"></ion-input>\n                <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n            </div>\n\n            <div class=\"input-field-container\">\n                <ion-input placeholder=\"Mobile Number\" formControlName=\"phone\" type=\"number\" [value]=\"this.userDetails.phone\" [readonly]=\"true\"></ion-input>\n                <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n            </div>\n\n            <div class=\"input-field-container\">\n                <ion-textarea placeholder=\"Address\" formControlName=\"address\" type=\"text\" autocapitalize=\"true\" autofill=\"false\"></ion-textarea>\n                <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n            </div>\n\n            <div class=\"input-field-container\">\n                <ion-input placeholder=\"Landmark\" formControlName=\"landmark\" type=\"text\" autocapitalize=\"true\" autofill=\"false\"></ion-input>\n                <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n            </div>\n\n            <div class=\"input-field-container\">\n                <ion-input placeholder=\"Pincode\" formControlName=\"pincode\" type=\"number\" value=\"691306\"></ion-input>\n                <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n            </div>\n\n            <div style=\"text-align: center\">\n                <ion-button shape=\"round\" type=\"submit\">Proceed To Update</ion-button>\n            </div>\n\n        </form>\n\n    </div>\n\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_edit-profile_edit-profile_module_ts-es2015.js.map