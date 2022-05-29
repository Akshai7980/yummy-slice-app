(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkYummySlice"] = self["webpackChunkYummySlice"] || []).push([["src_app_login_login_module_ts"], {
    /***/
    45393:
    /*!***********************************************!*\
      !*** ./src/app/login/login-routing.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageRoutingModule": function LoginPageRoutingModule() {
          return (
            /* binding */
            _LoginPageRoutingModule
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


      var _login_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login.page */
      66825);

      var routes = [{
        path: '',
        component: _login_page__WEBPACK_IMPORTED_MODULE_0__.LoginPage
      }];

      var _LoginPageRoutingModule = function LoginPageRoutingModule() {
        _classCallCheck(this, LoginPageRoutingModule);
      };

      _LoginPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _LoginPageRoutingModule);
      /***/
    },

    /***/
    80107:
    /*!***************************************!*\
      !*** ./src/app/login/login.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPageModule": function LoginPageModule() {
          return (
            /* binding */
            _LoginPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      38583);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      80476);
      /* harmony import */


      var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./login-routing.module */
      45393);
      /* harmony import */


      var _login_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page */
      66825);

      var _LoginPageModule = function LoginPageModule() {
        _classCallCheck(this, LoginPageModule);
      };

      _LoginPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginPageRoutingModule],
        declarations: [_login_page__WEBPACK_IMPORTED_MODULE_1__.LoginPage]
      })], _LoginPageModule);
      /***/
    },

    /***/
    66825:
    /*!*************************************!*\
      !*** ./src/app/login/login.page.ts ***!
      \*************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "LoginPage": function LoginPage() {
          return (
            /* binding */
            _LoginPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      64762);
      /* harmony import */


      var _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !raw-loader!./login.page.html */
      76770);
      /* harmony import */


      var _login_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./login.page.scss */
      21339);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      37716);
      /* harmony import */


      var _service_controller_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../service/controller.service */
      26110);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      3679);
      /* harmony import */


      var _service_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../service/storage.service */
      55813);
      /* eslint-disable @typescript-eslint/no-inferrable-types */


      var _LoginPage = /*#__PURE__*/function () {
        function LoginPage(formBuilder, control, storage) {
          _classCallCheck(this, LoginPage);

          this.formBuilder = formBuilder;
          this.control = control;
          this.storage = storage;
          this.isChecked = false;
        }

        _createClass(LoginPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.loginForm = this.formBuilder.group({
              email: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.email, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(12)]],
              password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.minLength(6)]]
            });
            this.fetchCheckedUserDetails();
            this.control.menu.swipeGesture(false);
          }
        }, {
          key: "onMyBooleanChange",
          value: function onMyBooleanChange() {
            console.log('isChecked:', this.isChecked);

            if (this.loginForm.valid) {
              if (this.isChecked) {
                var msg = 'Your Email and Password is stored in device successfully.';
                var time = 2000;
                this.storage.setStorage('USER_DETAILS_CHECKED', this.loginForm.valid)["catch"](function (err) {
                  console.log('Error', err);
                });
                console.log('User Email and Password securely stored in device');
                this.control.presentToast(msg, time);
              }
            } else {
              var _msg = 'Please enter valid details and then click checkbox';
              var _time = 2000;
              this.control.presentToast(_msg, _time);
            }
          }
        }, {
          key: "login",
          value: function login() {
            var _this = this;

            console.log('Details:', this.loginForm.value);
            this.control.fireauth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password).then(function (res) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
                var loaderMsg, loaderTime;
                return regeneratorRuntime.wrap(function _callee$(_context) {
                  while (1) {
                    switch (_context.prev = _context.next) {
                      case 0:
                        // const loaderMsg =  this.loginForm.value.email + 'successfully loggedIn to the app';
                        loaderMsg = '';
                        loaderTime = 3000;
                        this.control.presentLoading(loaderMsg, loaderTime);
                        this.storage.setStorage('USER_DETAILS', this.loginForm.value);

                        if (res.user) {
                          console.log(res.user);
                          this.control.router.navigate(['/landing']);
                        }

                      case 5:
                      case "end":
                        return _context.stop();
                    }
                  }
                }, _callee, this);
              }));
            })["catch"](function (err) {
              return (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__awaiter)(_this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
                var head;
                return regeneratorRuntime.wrap(function _callee2$(_context2) {
                  while (1) {
                    switch (_context2.prev = _context2.next) {
                      case 0:
                        console.log("login failed ".concat(err));
                        head = 'Failed!';
                        this.control.presentAlert(head, err === null || err === void 0 ? void 0 : err.message);

                      case 3:
                      case "end":
                        return _context2.stop();
                    }
                  }
                }, _callee2, this);
              }));
            });
          }
        }, {
          key: "fetchCheckedUserDetails",
          value: function fetchCheckedUserDetails() {
            var _this2 = this;

            this.storage.storage.get('USER_DETAILS_CHECKED').then(function (val) {
              console.log('Value:', val);

              if (!val) {
                console.log('No User Details Stored');
              } else {
                var msg = 'We found your stored Email and Password, would you like to continue with that';
                var time = 2000;

                _this2.control.presentToast(msg, time);
              }
            })["catch"](function (err) {
              console.log('Error:', err);
            });
          }
        }]);

        return LoginPage;
      }();

      _LoginPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder
        }, {
          type: _service_controller_service__WEBPACK_IMPORTED_MODULE_2__.ControllerService
        }, {
          type: _service_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService
        }];
      };

      _LoginPage = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-login',
        template: _raw_loader_login_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_login_page_scss__WEBPACK_IMPORTED_MODULE_1__["default"]]
      })], _LoginPage);
      /***/
    },

    /***/
    21339:
    /*!***************************************!*\
      !*** ./src/app/login/login.page.scss ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  --background: linear-gradient(to bottom, #930b3d 10%, #350B40 80%);\n}\n\n.input-field-container {\n  display: flex;\n  padding: 5px 5px 5px 5px;\n  background: #9e9e9e80;\n  align-items: center;\n  border-radius: 30px;\n  border: 1px solid black;\n  margin-bottom: 15px;\n  height: 50px;\n}\n\nion-input {\n  font-family: \"Fredoka_One\";\n  letter-spacing: 1px;\n  color: white;\n}\n\nion-checkbox {\n  margin-right: 10px;\n  --border-color: #e38120;\n  --background-checked: #d83128;\n  --border-color-checked: #e38120;\n}\n\nion-button {\n  --background: linear-gradient(to bottom, #E48720 10%, #D83128 80%);\n  font-family: \"Fredoka_One\";\n  --padding-start: 40px;\n  --padding-end: 40px;\n  height: 43px;\n  font-size: 18px;\n  --box-shadow: none;\n}\n\n.remember-me-container {\n  display: flex;\n  margin: 25px 0px 0px 0px;\n}\n\n.forgot-password-container {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-top: 20px;\n}\n\n.bottom-container {\n  display: flex;\n  float: right;\n  margin-top: 35%;\n}\n\n.bottom-content-container {\n  margin-right: 15px;\n}\n\nH6 {\n  margin: 0px;\n  color: white;\n  font-family: \"PT_Sans_Bold\";\n}\n\nH3 {\n  margin: 0px;\n  float: right;\n  color: white;\n  font-family: \"Fredoka_One\";\n}\n\n.bottom-forward-icon {\n  height: 35px;\n  width: 35px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtFQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0Esd0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksMEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFQTtFQUNJLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSw2QkFBQTtFQUNBLCtCQUFBO0FBQ0o7O0FBRUE7RUFDSSxrRUFBQTtFQUNBLDBCQUFBO0VBQ0EscUJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSx3QkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxnQkFBQTtBQUNKOztBQUVBO0VBQ0ksYUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxrQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtBQUNKOztBQUVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0EsMEJBQUE7QUFDSjs7QUFFQTtFQUNJLFlBQUE7RUFDQSxXQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAgIC0tYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgIzkzMGIzZCAxMCUsICMzNTBCNDAgODAlKTtcbn1cblxuLmlucHV0LWZpZWxkLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBwYWRkaW5nOiA1cHggNXB4IDVweCA1cHg7XG4gICAgYmFja2dyb3VuZDogIzllOWU5ZTgwO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcbiAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuaW9uLWlucHV0IHtcbiAgICBmb250LWZhbWlseTogJ0ZyZWRva2FfT25lJztcbiAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuaW9uLWNoZWNrYm94IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgLS1ib3JkZXItY29sb3I6ICNlMzgxMjA7XG4gICAgLS1iYWNrZ3JvdW5kLWNoZWNrZWQ6ICNkODMxMjg7XG4gICAgLS1ib3JkZXItY29sb3ItY2hlY2tlZDogI2UzODEyMDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgLS1iYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCAjRTQ4NzIwIDEwJSwgI0Q4MzEyOCA4MCUpO1xuICAgIGZvbnQtZmFtaWx5OiAnRnJlZG9rYV9PbmUnO1xuICAgIC0tcGFkZGluZy1zdGFydDogNDBweDtcbiAgICAtLXBhZGRpbmctZW5kOiA0MHB4O1xuICAgIGhlaWdodDogNDNweDtcbiAgICBmb250LXNpemU6IDE4cHg7XG4gICAgLS1ib3gtc2hhZG93OiBub25lO1xufVxuXG4ucmVtZW1iZXItbWUtY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIG1hcmdpbjogMjVweCAwcHggMHB4IDBweDtcbn1cblxuLmZvcmdvdC1wYXNzd29yZC1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJvdHRvbS1jb250YWluZXIge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxvYXQ6IHJpZ2h0O1xuICAgIG1hcmdpbi10b3A6IDM1JTtcbn1cblxuLmJvdHRvbS1jb250ZW50LWNvbnRhaW5lciB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xufVxuXG5INiB7XG4gICAgbWFyZ2luOiAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAnUFRfU2Fuc19Cb2xkJztcbn1cblxuSDMge1xuICAgIG1hcmdpbjogMHB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICdGcmVkb2thX09uZSc7XG59XG5cbi5ib3R0b20tZm9yd2FyZC1pY29uIHtcbiAgICBoZWlnaHQ6IDM1cHg7XG4gICAgd2lkdGg6IDM1cHg7XG59Il19 */";
      /***/
    },

    /***/
    76770:
    /*!*****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.page.html ***!
      \*****************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n    <div style=\"padding: 20% 12% 0% 12%;\">\n        <div>\n\n            <div style=\"text-align: center;\">\n                <img src=\"../../assets/image/chef.jpeg\" alt=\"\" style=\"border-radius: 50%;\n                height: 110px;\n                width: 110px;\">\n                <H1 style=\"color: white;\n                margin: 5px 0px 40px 0px;\n                font-family: 'Lobster-Regular';\n                font-size: 35px;\">Yummy Slice</H1>\n            </div>\n            <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n\n                <div class=\"input-field-container\">\n                    <ion-input placeholder=\"Email\" type=\"email\" formControlName=\"email\" autocapitalize=\"true\" autofill=\"false\" autocomplete=\"false\"></ion-input>\n                    <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n                </div>\n\n                <div class=\"input-field-container\">\n                    <ion-input placeholder=\"Password\" type=\"password\" formControlName=\"password\" autocapitalize=\"true\" autofill=\"false\"></ion-input>\n                    <img src=\"../../assets/icon/reg-ic1.png\" alt=\"\" style=\"height: 40px; width: 40px;\">\n                </div>\n\n                <div class=\"remember-me-container\">\n                    <ion-checkbox [(ngModel)]=\"isChecked\" (ionChange)=\"onMyBooleanChange()\" [ngModelOptions]=\"{standalone: true}\"></ion-checkbox>\n                    <H6>Remember Password</H6>\n                </div>\n\n                <div class=\"forgot-password-container\">\n                    <ion-button shape=\"round\" type=\"submit\" style=\"--background: linear-gradient(to bottom, #E48720 10%, #D83128 80%);\n            \"> Login </ion-button>\n                    <H6 routerLink=\"/forgot-password\">Forgot Password?</H6>\n                </div>\n            </form>\n\n            <div class=\"bottom-container\">\n                <div class=\"bottom-content-container\">\n                    <H6>Don't have account ?</H6>\n                    <H3>Register</H3>\n                </div>\n                <div>\n                    <img src=\"../../assets/icon/reg-ic.png\" alt=\"\" routerLink=\"/register\" class=\"bottom-forward-icon\">\n                </div>\n            </div>\n        </div>\n    </div>\n\n</ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_login_login_module_ts-es5.js.map