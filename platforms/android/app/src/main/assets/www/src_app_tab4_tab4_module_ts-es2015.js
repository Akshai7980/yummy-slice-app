(self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_tab4_tab4_module_ts"],{

/***/ 35355:
/*!*********************************************!*\
  !*** ./src/app/tab4/tab4-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageRoutingModule": function() { return /* binding */ Tab4PageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);




const routes = [
    {
        path: '',
        component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page,
    }
];
let Tab4PageRoutingModule = class Tab4PageRoutingModule {
};
Tab4PageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], Tab4PageRoutingModule);



/***/ }),

/***/ 32486:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4PageModule": function() { return /* binding */ Tab4PageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tab4_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tab4.page */ 3631);
/* harmony import */ var _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../explore-container/explore-container.module */ 581);
/* harmony import */ var _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab4-routing.module */ 35355);









let Tab4PageModule = class Tab4PageModule {
};
Tab4PageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_6__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__.FormsModule,
            _explore_container_explore_container_module__WEBPACK_IMPORTED_MODULE_1__.ExploreContainerComponentModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_8__.RouterModule.forChild([{ path: '', component: _tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page }]),
            _tab4_routing_module__WEBPACK_IMPORTED_MODULE_2__.Tab4PageRoutingModule,
        ],
        declarations: [_tab4_page__WEBPACK_IMPORTED_MODULE_0__.Tab4Page]
    })
], Tab4PageModule);



/***/ }),

/***/ 3631:
/*!***********************************!*\
  !*** ./src/app/tab4/tab4.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Tab4Page": function() { return /* binding */ Tab4Page; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tab4.page.html */ 28203);
/* harmony import */ var _tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tab4.page.scss */ 35300);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _service_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/controller.service */ 26110);
/* harmony import */ var _service_crud_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/crud.service */ 79928);
/* harmony import */ var _service_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/storage.service */ 55813);



/* eslint-disable guard-for-in */
/* eslint-disable no-var */
/* eslint-disable no-underscore-dangle */
/* eslint-disable arrow-body-style */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable @typescript-eslint/semi */
/* eslint-disable @typescript-eslint/naming-convention */




let Tab4Page = class Tab4Page {
    constructor(crud, storage, control) {
        this.crud = crud;
        this.storage = storage;
        this.control = control;
        this.cartItems = [];
        this.userDetails = [];
        this.count = 0;
    }
    ionViewWillEnter() {
        this.cartItems = [
            {
                name: 'Leg piece',
                quantity: '5 Kg',
                stoke_status: 'In stoke',
                seen_status: '1',
                product_count: 0,
                rate: 99
            },
            {
                name: 'Leg piece',
                quantity: '5 Kg',
                stoke_status: 'In stoke',
                seen_status: '1',
                product_count: 0,
                rate: 'Rs: 99'
            },
            {
                name: 'Leg piece',
                quantity: '5 Kg',
                stoke_status: 'In stoke',
                seen_status: '1',
                product_count: 0,
                rate: 'Rs: 99'
            },
            {
                name: 'Leg piece',
                quantity: '5 Kg',
                stoke_status: 'In stoke',
                seen_status: '1',
                product_count: 0,
                rate: 'Rs: 99'
            },
            {
                name: 'Leg piece',
                quantity: '5 Kg',
                stoke_status: 'In stoke',
                seen_status: '1',
                product_count: 0,
                rate: 'Rs: 99'
            },
            {
                name: 'Leg piece',
                quantity: '5 Kg',
                stoke_status: 'In stoke',
                seen_status: '1',
                product_count: 0,
                rate: 'Rs: 99'
            },
        ];
        this.getUserDetails();
        this.getUserCart();
    }
    getUserDetails() {
        this.storage.storage.get('USER_DETAILS').then((val) => {
            console.log('val:', val);
            this.userDetails = val;
            console.log('userDetails:', this.userDetails);
        });
    }
    getUserCart() {
        const userCart = [];
        const cRef = this.crud.ngFirestore.collection('userCart');
        cRef.ref
            .where('userid', '==', this.control.userDetails.uid)
            .get()
            .then(querySnapshot => {
            querySnapshot
                .docs
                .map((t) => {
                console.log('t:', t);
            });
            // .forEach(doc =>  {
            //   userCart.push(doc.data());
            //   console.log('userCart:',userCart);
            //   this.cartItems = userCart;
            // });
        })
            .catch((err) => {
            console.log('e:', err);
        });
    }
    deleteProduct(c, i) {
        console.log(c, i);
    }
    toIncrement(c, i) {
        console.log(c, i);
        if (this.cartItems[i].product_count === 0) {
            this.cartItems[i].product_count = 1;
            console.log('count1', this.cartItems[i].product_count);
        }
        else {
            if (this.cartItems[i].product_count >= 5) {
                console.log('You have reached the maximum product quantity');
            }
            else {
                this.cartItems[i].product_count += 1;
                this.cartItems[i].rate = this.cartItems[i].rate * this.cartItems[i].product_count;
                console.log('count2', this.cartItems[i].product_count);
            }
        }
    }
    toDecrement(c, i) {
        console.log(c, i);
        if (this.cartItems[i].product_count === 0) {
            console.log('You have reached the minimum product quantity');
            // this.cartItems[i].product_count = 0;
            // console.log('count1',this.cartItems[i].product_count);
        }
        else {
            this.cartItems[i].product_count -= 1;
            this.cartItems[i].rate = this.cartItems[i].rate % this.cartItems[i].product_count;
            console.log('count2', this.cartItems[i].product_count);
        }
    }
};
Tab4Page.ctorParameters = () => [
    { type: _service_crud_service__WEBPACK_IMPORTED_MODULE_3__.CrudService },
    { type: _service_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService },
    { type: _service_controller_service__WEBPACK_IMPORTED_MODULE_2__.ControllerService }
];
Tab4Page = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-tab4',
        template: _raw_loader_tab4_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tab4_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], Tab4Page);



/***/ }),

/***/ 35300:
/*!*************************************!*\
  !*** ./src/app/tab4/tab4.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0YWI0LnBhZ2Uuc2NzcyJ9 */");

/***/ }),

/***/ 28203:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab4/tab4.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n\n        <div style=\"display: flex; align-items: center;\">\n            <div>\n                <ion-buttons>\n                    <ion-menu-button>\n                        <ion-icon name=\"menu\" color=\"dark\"></ion-icon>\n                    </ion-menu-button>\n                </ion-buttons>\n            </div>\n\n            <div>\n                <ion-title>My Cart</ion-title>\n            </div>\n        </div>\n\n\n    </ion-toolbar>\n</ion-header>\n\n<!-- <ion-header class=\"ion-no-border\">\n    <ion-toolbar>\n        <div style=\"display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: 5px 10px 5px 20px;\">\n            <H5 style=\"margin: 0px;\n      font-family: 'PT_Sans_Bold'; color: white;\">Cart Items (0)</H5>\n            <p style=\"margin: 0px; color: white; font-family: 'PT_Sans_Bold';\">Rs: 0</p>\n        </div>\n    </ion-toolbar>\n</ion-header> -->\n\n<ion-content>\n\n    <div>\n        <div *ngFor=\"let c of cartItems; let i = index;\" style=\"display: flex;\n        align-items: center;\n        padding: 20px 0px 20px 0px;\n        justify-content: space-evenly;\n        margin: 15px;\n        box-shadow: 1px 1px 10px 1px #9e9e9e;\n        border-radius: 5px;\" [style.background]=\"c.seen_status==='0' ? '#48829E' : ''\">\n            <div style=\"width: 60px;\n            height: 60px;\">\n                <!-- <img *ngIf=\"c.seen_status==='0'\" src=\"../../assets/icon/bell.png\" alt=\"\" style=\"height: 50px;\n            width: 50px;\">\n                <img *ngIf=\"c.seen_status!=='0'\" src=\"../../assets/icon/bell1.png\" alt=\"\" style=\"height: 50px;\n                            width: 50px;\"> -->\n                <img src=\"../../assets/image/Sampleimages/img1.jpeg\" alt=\"\" style=\"height: 55px;\n                width: 55px;\n                object-fit: cover;\">\n            </div>\n            <div style=\"margin: 0px 20px 0px 5px;\">\n                <p style=\"margin: 0px; color: black;\n            font-family: 'Fredoka_One';\"> {{c.name}} </p>\n                <p style=\"color: black;\n                font-size: 12px;\n                letter-spacing: 1px;\n                font-family: 'PT_Sans_Bold';\"> {{c.quantity}} </p>\n                <p style=\"color: black;\n                font-size: 12px;\n                letter-spacing: 1px;\n                font-family: 'PT_Sans_Bold';\"> {{c.stoke_status}} </p>\n                <p style=\"margin: 0px;\n                color: black;\n                font-size: 15px;\n                font-weight: 600;\n                letter-spacing: 2px;\n                font-family: 'Fredoka_One';\"> Rs:{{c.rate}} </p>\n                <div style=\"display: flex; align-items: center; margin-top: 15px;\">\n                    <!-- <ion-button shape=\"round\" size=\"small\" style=\"height: 30px;\n                    --border-radius: 50%;\"> -->\n                    <ion-icon name=\"add\" style=\"color: white;\n                    background-image: linear-gradient(to bottom, #E48720 10%, #D83128 80%);\n                    border-radius: 50%;\n                    height: 25px;\n                    width: 25px;\" (click)=\"toIncrement(c,i)\"></ion-icon>\n                    <!-- </ion-button> -->\n\n                    <H6 style=\"margin: 0px 10px 0px 10px;\n                    color: black;\n                    font-weight: 600;\"> {{c.product_count}} </H6>\n\n                    <!-- <ion-button shape=\"round\" size=\"small\" style=\"height: 30px;\n                    --border-radius: 50%;\"> -->\n                    <ion-icon name=\"remove\" style=\"color: white;\n                    background-image: linear-gradient(to bottom, #E48720 10%, #D83128 80%);\n                    border-radius: 50%;\n                    height: 25px;\n                    width: 25px;\" (click)=\"toDecrement(c,i)\"></ion-icon>\n                    <!-- </ion-button> -->\n                </div>\n            </div>\n\n            <div>\n                <img src=\"../../assets/icon/dlt1.png\" alt=\"\" style=\"height: 55px;\n                width: 55px;\" (click)=\"deleteProduct(c,i)\">\n            </div>\n        </div>\n    </div>\n\n</ion-content>\n\n<ion-footer>\n    <ion-toolbar>\n        <div style=\" margin: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\">\n            <div>\n                <p>Total</p>\n                <p>Rs: 299</p>\n            </div>\n            <ion-button shape=\"round\" expand=\"block\" style=\"--background: linear-gradient(to bottom, #E48720 10%, #D83128 80%);\n        \">CheckOut</ion-button>\n        </div>\n\n    </ion-toolbar>\n</ion-footer>");

/***/ })

}]);
//# sourceMappingURL=src_app_tab4_tab4_module_ts-es2015.js.map