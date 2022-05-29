(self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_tabs_tabs_module_ts"],{

/***/ 80530:
/*!*********************************************!*\
  !*** ./src/app/tabs/tabs-routing.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageRoutingModule": function() { return /* binding */ TabsPageRoutingModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 39895);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs.page */ 7942);




const routes = [
    {
        path: 'tabs',
        component: _tabs_page__WEBPACK_IMPORTED_MODULE_0__.TabsPage,
        children: [
            {
                path: 'tab1',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab1_tab1_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab1/tab1.module */ 2168)).then(m => m.Tab1PageModule)
            },
            {
                path: 'tab2',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab2_tab2_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab2/tab2.module */ 14608)).then(m => m.Tab2PageModule)
            },
            {
                path: 'tab3',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab3_tab3_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab3/tab3.module */ 53746)).then(m => m.Tab3PageModule)
            },
            {
                path: 'tab4',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab4_tab4_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab4/tab4.module */ 32486)).then(m => m.Tab4PageModule)
            },
            {
                path: 'tab5',
                loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("common"), __webpack_require__.e("src_app_tab5_tab5_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ../tab5/tab5.module */ 5184)).then(m => m.Tab5PageModule)
            },
            {
                path: '',
                redirectTo: '/tabs/tab1',
                pathMatch: 'full'
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full'
    }
];
let TabsPageRoutingModule = class TabsPageRoutingModule {
};
TabsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
    })
], TabsPageRoutingModule);



/***/ }),

/***/ 15564:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.module.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPageModule": function() { return /* binding */ TabsPageModule; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 80476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 38583);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 3679);
/* harmony import */ var _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tabs-routing.module */ 80530);
/* harmony import */ var _tabs_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page */ 7942);







let TabsPageModule = class TabsPageModule {
};
TabsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.IonicModule,
            _angular_common__WEBPACK_IMPORTED_MODULE_5__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _tabs_routing_module__WEBPACK_IMPORTED_MODULE_0__.TabsPageRoutingModule
        ],
        declarations: [_tabs_page__WEBPACK_IMPORTED_MODULE_1__.TabsPage]
    })
], TabsPageModule);



/***/ }),

/***/ 7942:
/*!***********************************!*\
  !*** ./src/app/tabs/tabs.page.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TabsPage": function() { return /* binding */ TabsPage; }
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 64762);
/* harmony import */ var _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !raw-loader!./tabs.page.html */ 97665);
/* harmony import */ var _tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tabs.page.scss */ 24427);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 37716);




let TabsPage = class TabsPage {
    constructor() { }
    ionViewDidEnter() {
        document.querySelector('#tab-button-tab3').shadowRoot.querySelector('.button-native').setAttribute('style', 'margin-top: -2px');
    }
};
TabsPage.ctorParameters = () => [];
TabsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-tabs',
        template: _raw_loader_tabs_page_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_tabs_page_scss__WEBPACK_IMPORTED_MODULE_1__.default]
    })
], TabsPage);



/***/ }),

/***/ 24427:
/*!*************************************!*\
  !*** ./src/app/tabs/tabs.page.scss ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-tab-button {\n  --color-selected: #ef621f;\n}\nion-tab-button::before {\n  background-color: transparent;\n  display: block;\n  content: \"\";\n  margin: 0 auto;\n  width: 20px;\n  height: 5px;\n  border-radius: 5px;\n  position: relative;\n  top: 7px;\n}\nion-tab-button.tab-selected::before {\n  background-color: var(--ion-color-light);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRhYnMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1LQTtFQUVJLHlCQUFBO0FBbktKO0FBcUtJO0VBQ0UsNkJBQUE7RUFDQSxjQUFBO0VBQ0EsV0FBQTtFQUNBLGNBQUE7RUFDQSxXQUFBO0VBQ0YsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0FBbktKO0FBc0tJO0VBQ0Usd0NBQUE7QUFwS04iLCJmaWxlIjoidGFicy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpb24tdGFicyB7XG4vLyAgICAgLy8gYmFja2dyb3VuZDogIzEyMTIxMjtcbi8vICAgICAvLyBiYWNrZ3JvdW5kOiAjMTQ1Mzc0O1xuLy8gICAgIGJhY2tncm91bmQ6ICM5MzBiM2Q7XG4vLyAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOTMwYjNkIDEwJSwgIzM1MEI0MCA4MCUpO1xuLy8gfVxuXG4vLyBpb24tdGFiLWJhciB7XG4vLyAgICAgLy8gYmFja2dyb3VuZDogIzEyMTIxMjtcbi8vICAgICAvLyBiYWNrZ3JvdW5kOiAjMTQ1Mzc0O1xuLy8gICAgIGJhY2tncm91bmQ6ICM5MzBiM2Q7XG4vLyAgICAgLy8gYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzkzMGIzZCAxMCUsICMzNTBCNDAgODAlKTtcbi8vICAgICB3aWR0aDogOTAlICFpbXBvcnRhbnQ7XG4vLyAgICAgbWF4LXdpZHRoOiA0MDBweCAhaW1wb3J0YW50O1xuLy8gICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4vLyAgICAgbWFyZ2luOiA1cHggMHB4IDVweCA1JSAhaW1wb3J0YW50O1xuLy8gICAgIG1heC1oZWlnaHQ6IDU2cHg7XG4vLyAgICAgaGVpZ2h0OiA5NXB4O1xuLy8gICAgIG1heC1oZWlnaHQ6IDg1cHg7XG4vLyAgICAgYm9yZGVyOiB1bnNldDtcbi8vIH1cblxuLy8gLnRhYi1zZWxlY3RlZCBpb24taWNvbiB7XG4vLyAgICAgY29sb3I6IHdoaXRlO1xuLy8gICAgIHBhZGRpbmctYm90dG9tOiA5cHg7XG4vLyB9XG5cbi8vIC50YWItc2VsZWN0ZWQsXG4vLyBpb24tdGFiLWJ1dHRvbiB7XG4vLyAgICAgYmFja2dyb3VuZDogIzJjMmMyYztcbi8vIH1cblxuLy8gI3RhYi1idXR0b24tdGFiMSxcbi8vICN0YWItYnV0dG9uLXRhYjIsXG4vLyAjdGFiLWJ1dHRvbi10YWIzLFxuLy8gI3RhYi1idXR0b24tdGFiNCxcbi8vICN0YWItYnV0dG9uLXRhYjUge1xuLy8gICAgIC8vIGJhY2tncm91bmQ6ICMyMzI3MmE7XG4vLyAgICAgYmFja2dyb3VuZDogIzZjMGIzZTtcbi8vICAgICAtd2Via2l0LWJveC1zaGFkb3c6IDVweCA1cHggMTVweCAtMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4vLyAgICAgLW1vei1ib3gtc2hhZG93OiA1cHggNXB4IDE1cHggLTE1cHggcmdiYSgwLCAwLCAwLCAwLjQpO1xuLy8gICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCAtMTVweCByZ2JhKDAsIDAsIDAsIDAuNCk7XG4vLyAgICAgLS1ib3JkZXI6IG5vbmU7XG4vLyAgICAgbWF4LWhlaWdodDogNTZweDtcbi8vICAgICBtYXJnaW4tdG9wOiAzOXB4O1xuLy8gfVxuXG4vLyBpb24tdGFiLWJ1dHRvbjpob3ZlciB7XG4vLyAgICAgaW9uLWljb24sXG4vLyAgICAgaW9uLWxhYmVsIHtcbi8vICAgICAgICAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgIC0taW9uLWNvbG9yLWJhc2U6IHdoaXRlICFpbXBvcnRhbnQ7XG4vLyAgICAgfVxuLy8gfVxuXG4vLyBpb24tdGFicyB7XG4vLyAgICAgLy9ub3Qgc2VsZWN0ZWQgY3VzdG9tIGltYWdlXG4vLyAgICAgaW9uLXRhYi1idXR0b24uY3VzdG9tLXByb2ZpbGU+aW9uLWljb24ge1xuLy8gICAgICAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9ibG9nLnBob3RvZmVlbGVyLmNvbS93cC1jb250ZW50L3VwbG9hZHMvMjAxNy8wOS9pbnN0YWdyYW0tcHJvZmlsZS1waWN0dXJlLW1ha2VyLmpwZyk7XG4vLyAgICAgfVxuLy8gICAgIC8vc2VsZWN0ZWQgY3VzdG9tIGltYWdlXG4vLyAgICAgaW9uLXRhYi1idXR0b24udGFiLXNlbGVjdGVkLmN1c3RvbS1wcm9maWxlPmlvbi1pY29uIHtcbi8vICAgICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vYmxvZy5waG90b2ZlZWxlci5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMTcvMDkvaW5zdGFncmFtLXByb2ZpbGUtcGljdHVyZS1tYWtlci5qcGcpO1xuLy8gICAgIH1cbi8vIH1cblxuLy8gI3RhYi1idXR0b24tdGFiMSB7XG4vLyAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMzBweDtcbi8vICAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAzMHB4O1xuLy8gfVxuXG4vLyAjdGFiLWJ1dHRvbi10YWIyIHtcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMTVweDtcbi8vIH1cblxuLy8gI3RhYi1idXR0b24tdGFiNCB7XG4vLyAgICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTVweDtcbi8vIH1cblxuLy8gI3RhYi1idXR0b24tdGFiMyB7XG4vLyAgICAgb3ZlcmZsb3c6IHZpc2libGUgIWltcG9ydGFudDtcbi8vICAgICBtYXgtaGVpZ2h0OiAxMjBweCAhaW1wb3J0YW50O1xuLy8gICAgIGhlaWdodDogMTIwcHggIWltcG9ydGFudDtcbi8vICAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAyMHB4O1xuLy8gICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAyMHB4O1xuLy8gICAgIGlvbi1pY29uIHtcbi8vICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwcHgsIDApO1xuLy8gICAgICAgICAvLyBiYWNrZ3JvdW5kOiBwdXJwbGU7XG4vLyAgICAgICAgIGJhY2tncm91bmQ6ICMzNTBiNDA7XG4vLyAgICAgICAgIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbi8vICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgIHdpZHRoOiA0MHB4ICFpbXBvcnRhbnQ7XG4vLyAgICAgICAgIGhlaWdodDogNDBweCAhaW1wb3J0YW50O1xuLy8gICAgICAgICBtYXJnaW4tdG9wOiAtNjBweCAhaW1wb3J0YW50O1xuLy8gICAgICAgICAvLyBib3gtc2hhZG93OiAwIDAgMCAxNXB4ICMxMjEyMTI7XG4vLyAgICAgICAgIGJveC1zaGFkb3c6IDAgMCAwIDE1cHggIzkzMGIzZDtcbi8vICAgICAgICAgYm9yZGVyOiB1bnNldDtcbi8vICAgICB9XG4vLyB9XG5cbi8vICN0YWItYnV0dG9uLXRhYjM6OnBhcnQoYSkge1xuLy8gICAgIC0tbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAjdGFiLWJ1dHRvbi10YWIzPmEge1xuLy8gICAgIC0tbWFyZ2luLXRvcDogLTJweCAhaW1wb3J0YW50O1xuLy8gfVxuXG4vLyAjdGFiLWJ1dHRvbi10YWI1IHtcbi8vICAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMzBweDtcbi8vICAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMzBweDtcbi8vICAgICBpb24taWNvbiB7XG4vLyAgICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4vLyAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbi8vICAgICAgICAgaGVpZ2h0OiAyNHB4O1xuLy8gICAgICAgICB3aWR0aDogMjRweDtcbi8vICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuLy8gICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4vLyAgICAgICAgIC13ZWJraXQtYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuLy8gICAgICAgICAtbW96LWJhY2tncm91bmQtc2l6ZTogY29udGFpbjtcbi8vICAgICAgICAgLW8tYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuLy8gICAgICAgICAmOmJlZm9yZSB7XG4vLyAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xuLy8gICAgICAgICB9XG4vLyAgICAgfVxuLy8gfVxuXG4vLyAjdGFiLWJ1dHRvbi10YWI1LnRhYi1zZWxlY3RlZCBpb24taWNvbiB7XG4vLyAgICAgcGFkZGluZy1ib3R0b206IDBweDtcbi8vIH1cblxuLy8gaW9uLWJhZGdlIHtcbi8vICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbi8vICAgICAtLWNvbG9yOiAjNmMwYjNlO1xuLy8gICAgIHdpZHRoOiAyM3B4O1xuLy8gICAgIGhlaWdodDogMjFweDtcbi8vICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuLy8gICAgIGZvbnQtc2l6ZTogMC44cmVtO1xuLy8gICAgIG1hcmdpbi10b3A6IC04cHg7XG4vLyAgICAgcGFkZGluZy10b3A6IDVweDtcbi8vIH1cblxuLy8gI3RhYi1idXR0b24tdGFiMT5pb24taWNvbjphZnRlcixcbi8vICN0YWItYnV0dG9uLXRhYjI+aW9uLWljb246YWZ0ZXIsXG4vLyAjdGFiLWJ1dHRvbi10YWI0Pmlvbi1pY29uOmFmdGVyIHtcbi8vICAgICBiYWNrZ3JvdW5kOiBub25lIHJlcGVhdCBzY3JvbGwgMCAwIHRyYW5zcGFyZW50O1xuLy8gICAgIGJvdHRvbTogMDtcbi8vICAgICBjb250ZW50OiBcIlwiO1xuLy8gICAgIGRpc3BsYXk6IGJsb2NrO1xuLy8gICAgIGhlaWdodDogN3B4O1xuLy8gICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbi8vICAgICB0cmFuc2l0aW9uOiB3aWR0aCAwLjRzIGVhc2UgMHMsIGJhY2tncm91bmQtY29sb3IgLjRzIGVhc2U7XG4vLyAgICAgd2lkdGg6IDA7XG4vLyAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuLy8gfVxuXG4vLyAjdGFiLWJ1dHRvbi10YWIxLnRhYi1zZWxlY3RlZD5pb24taWNvbjphZnRlcixcbi8vICN0YWItYnV0dG9uLXRhYjIudGFiLXNlbGVjdGVkPmlvbi1pY29uOmFmdGVyLFxuLy8gI3RhYi1idXR0b24tdGFiNC50YWItc2VsZWN0ZWQ+aW9uLWljb246YWZ0ZXIge1xuLy8gICAgIHdpZHRoOiAyNHB4O1xuLy8gICAgIGJhY2tncm91bmQ6ICMxNDUzNzQ7XG4vLyB9XG5cbmlvbi10YWItYnV0dG9uIHtcbiAgICAvLyAtLWNvbG9yOiBibGFjaztcbiAgICAtLWNvbG9yLXNlbGVjdGVkOiAjZWY2MjFmO1xuICBcbiAgICAmOjpiZWZvcmUge1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgIHdpZHRoOiAyMHB4O1xuICAgIGhlaWdodDogNXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgdG9wOiA3cHg7XG4gICAgfVxuICBcbiAgICAmLnRhYi1zZWxlY3RlZDo6YmVmb3JlIHtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWlvbi1jb2xvci1saWdodCk7XG4gICAgfVxuICB9Il19 */");

/***/ }),

/***/ 97665:
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tabs/tabs.page.html ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-tabs>\n  <ion-tab-bar slot=\"bottom\" color=\"purple\">\n    <ion-tab-button tab=\"tab1\">\n      <ion-icon name=\"call-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab2\">\n      <ion-icon name=\"reader-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab3\" class=\"custom-tab\">\n      <ion-icon name=\"home-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab4\">\n      <ion-icon name=\"cart-outline\"></ion-icon>\n    </ion-tab-button>\n\n    <ion-tab-button tab=\"tab5\" class=\"custom-profile\">\n      <ion-icon name=\"person-circle-outline\"></ion-icon>\n    </ion-tab-button>\n  </ion-tab-bar>\n</ion-tabs>\n");

/***/ })

}]);
//# sourceMappingURL=src_app_tabs_tabs_module_ts-es2015.js.map