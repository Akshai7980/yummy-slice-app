(self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_image-slide_image-slide_module_ts"],{

/***/ 53842:
/*!***********************************************************!*\
  !*** ./src/app/image-slide/image-slide-routing.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSlidePageRoutingModule": function() { return /* binding */ ImageSlidePageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _image_slide_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-slide.page */ 15932);




const routes = [
    {
        path: '',
        component: _image_slide_page__WEBPACK_IMPORTED_MODULE_0__.ImageSlidePage
    }
];
let ImageSlidePageRoutingModule = class ImageSlidePageRoutingModule {
};
ImageSlidePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ImageSlidePageRoutingModule);



/***/ }),

/***/ 39045:
/*!***************************************************!*\
  !*** ./src/app/image-slide/image-slide.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSlidePageModule": function() { return /* binding */ ImageSlidePageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _image_slide_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./image-slide-routing.module */ 53842);
/* harmony import */ var _image_slide_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-slide.page */ 15932);







let ImageSlidePageModule = class ImageSlidePageModule {
};
ImageSlidePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _image_slide_routing_module__WEBPACK_IMPORTED_MODULE_0__.ImageSlidePageRoutingModule
        ],
        declarations: [_image_slide_page__WEBPACK_IMPORTED_MODULE_1__.ImageSlidePage]
    })
], ImageSlidePageModule);



/***/ }),

/***/ 15932:
/*!*************************************************!*\
  !*** ./src/app/image-slide/image-slide.page.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ImageSlidePage": function() { return /* binding */ ImageSlidePage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_image_slide_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./image-slide.page.html */ 44382);
/* harmony import */ var _image_slide_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./image-slide.page.scss */ 72791);
/* harmony import */ var _service_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../service/controller.service */ 26110);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/device/ngx */ 77668);
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/crud.service */ 79928);



/* eslint-disable id-blacklist */
/* eslint-disable @typescript-eslint/quotes */




let ImageSlidePage = class ImageSlidePage {
    constructor(device, control, crud) {
        this.device = device;
        this.control = control;
        this.crud = crud;
        this.deviceDetails = {
            uuid: '',
            cordova: '',
            isVirtual: '',
            manufacturer: '',
            model: '',
            platform: '',
            serial: '',
            version: '',
            time: Date.now(),
        };
        this.webDetails = {
            uuid: 'cd347902-d2b3-11eb-b8bc-0242ac130003',
            cordova: '',
            isVirtual: '',
            manufacturer: '',
            model: '',
            platform: 'web',
            serial: '',
            version: '',
            time: Date.now(),
        };
    }
    ngOnInit() {
        // console.log('Device UUID is: ' + this.device.uuid);
        // console.log('Device cordova is: ' + this.device.cordova);
        // console.log('Device isVirtual is: ' + this.device.isVirtual);
        // console.log('Device manufacturer is: ' + this.device.manufacturer);
        // console.log('Device model is: ' + this.device.model);
        // console.log('Device platform is: ' + this.device.platform);
        // console.log('Device serial is: ' + this.device.serial);
        // console.log('Device version is: ' + this.device.version);
        // this.userDeviceDetails();
    }
    userDeviceDetails() {
        if (this.control.platform.is("capacitor" || 0)) {
            this.deviceDetails.uuid = this.device.uuid;
            this.deviceDetails.cordova = this.device.cordova;
            // this.deviceDetails.isVirtual = this.device.isVirtual;
            this.deviceDetails.manufacturer = this.device.manufacturer;
            this.deviceDetails.model = this.device.model;
            this.deviceDetails.platform = this.device.platform;
            this.deviceDetails.serial = this.device.serial;
            this.deviceDetails.version = this.device.version;
            // this.deviceDetails.time = this.device.version;
            // this.deviceDetails = {
            //   uuid : this.device.uuid,
            //   cordova : this.device.cordova,
            //   isVirtual : '',
            //   manufacturer : this.device.manufacturer,
            //   model : this.device.model,
            //   platform : this.device.platform,
            //   serial : this.device.serial,
            //   version : this.device.version,
            //   time : Date.now(),
            // };
            console.log('This is a mobile view');
            this.crud.userDeviceDetails(this.deviceDetails)
                .then(() => {
            }).catch((err) => {
                console.log(err);
            });
        }
        else {
            console.log('This is a web view');
            this.crud.userDeviceDetails(this.webDetails)
                .then(() => {
            }).catch((err) => {
                console.log(err);
            });
        }
        ;
    }
};
ImageSlidePage.ctorParameters = () => [
    { type: _ionic_native_device_ngx__WEBPACK_IMPORTED_MODULE_3__.Device },
    { type: _service_controller_service__WEBPACK_IMPORTED_MODULE_2__.ControllerService },
    { type: _service_crud_service__WEBPACK_IMPORTED_MODULE_4__.CrudService }
];
ImageSlidePage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-image-slide',
        template: _raw_loader_image_slide_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_image_slide_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], ImageSlidePage);



/***/ }),

/***/ 72791:
/*!***************************************************!*\
  !*** ./src/app/image-slide/image-slide.page.scss ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("H1 {\n  font-family: Lobster-Regular;\n}\n\np {\n  font-family: Lobster-Regular;\n}\n\n.slides-md {\n  --bullet-background: #205449;\n  --bullet-background-active: #205449;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImltYWdlLXNsaWRlLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDRCQUFBO0FBQ0o7O0FBRUE7RUFDSSw0QkFBQTtBQUNKOztBQUVBO0VBQ0ksNEJBQUE7RUFDQSxtQ0FBQTtBQUNKIiwiZmlsZSI6ImltYWdlLXNsaWRlLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkgxIHtcbiAgICBmb250LWZhbWlseTogTG9ic3Rlci1SZWd1bGFyO1xufVxuXG5wIHtcbiAgICBmb250LWZhbWlseTogTG9ic3Rlci1SZWd1bGFyO1xufVxuXG4uc2xpZGVzLW1kIHtcbiAgICAtLWJ1bGxldC1iYWNrZ3JvdW5kOiAjMjA1NDQ5O1xuICAgIC0tYnVsbGV0LWJhY2tncm91bmQtYWN0aXZlOiAjMjA1NDQ5O1xufSJdfQ== */");

/***/ }),

/***/ 44382:
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/image-slide/image-slide.page.html ***!
  \*****************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n    <ion-slides pager=\"true\" style=\"height: 100%\">\n\n        <ion-slide>\n\n            <div style=\"text-align: center;padding: 30px;margin: 30px;\">\n                <img src=\"../../assets/image/easy-order.jpeg\" alt=\"\" style=\"border-radius: 50%;\n            width: auto;\n            object-fit: contain;\">\n                <H1 style=\"margin: 0px;\n                font-size: 20px; font-family: 'PT_Sans_Bold' !important;\">Easy to order homely meat</H1>\n                <p style=\"font-size: 12px;\n                color: grey; font-family: 'Fredoka_One' !important;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n                    book.\n                </p>\n            </div>\n\n        </ion-slide>\n\n        <ion-slide>\n            <div style=\"text-align: center;padding: 30px;margin: 30px;\">\n                <img src=\"../../assets/image/delivery-boy.png\" alt=\"\" style=\"border-radius: 50%;\n            width: auto;\n            object-fit: contain;\">\n                <H1 style=\"margin: 0px;\n                font-size: 20px; font-family: 'PT_Sans_Bold' !important;\">The order will be delivered to the address directly</H1>\n                <p style=\"font-size: 12px;\n                                            color: grey; font-family: 'Fredoka_One' !important;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n                    book.\n                </p>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div style=\"text-align: center;padding: 30px;margin: 30px;\">\n                <img src=\"../../assets/image/benefits.jpeg\" alt=\"\" style=\"border-radius: 50%;\n          width: auto;\n          object-fit: contain;\">\n                <H1 style=\"margin: 0px;\n                font-size: 20px; font-family: 'PT_Sans_Bold' !important;\">Will get more benefits</H1>\n                <p style=\"font-size: 12px;\n                              color: grey; font-family: 'Fredoka_One' !important;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n                    book.\n                </p>\n            </div>\n        </ion-slide>\n\n        <ion-slide>\n            <div style=\"text-align: center;padding: 30px;margin: 30px;\">\n                <img src=\"../../assets/image/fresh-meat.jpeg\" alt=\"\" style=\"border-radius: 50%;\n          width: auto;\n          object-fit: contain;\">\n                <H1 style=\"margin: 0px;\n                font-size: 20px; font-family: 'PT_Sans_Bold' !important;\">Fresh products</H1>\n                <p style=\"font-size: 12px;\n                              color: grey; font-family: 'Fredoka_One' !important;\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen\n                    book.\n                </p>\n\n                <div style=\"float: right;\">\n                    <ion-button shape=\"round\" routerLink=\"/tabs/tab3\" style=\"margin-top: 25%;\">Continue\n                        <ion-icon name=\"arrow-forward-outline\" style=\"margin-left: 10px;\"></ion-icon>\n                    </ion-button>\n                </div>\n            </div>\n        </ion-slide>\n\n    </ion-slides>\n</ion-content>");

/***/ })

}]);
//# sourceMappingURL=src_app_image-slide_image-slide_module_ts-es2015.js.map