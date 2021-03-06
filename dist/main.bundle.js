webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div style=\"text-align:center\">\n\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__messages_list_messages_list_component__ = __webpack_require__("../../../../../src/app/messages-list/messages-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__message_add_message_add_component__ = __webpack_require__("../../../../../src/app/message-add/message-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__buttons_buttons_component__ = __webpack_require__("../../../../../src/app/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__buttons_add_buttons_add_component__ = __webpack_require__("../../../../../src/app/buttons-add/buttons-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_router__ = __webpack_require__("../../../../../src/app/app.router.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__messages_service__ = __webpack_require__("../../../../../src/app/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__buttons_service__ = __webpack_require__("../../../../../src/app/buttons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__mass_mass_component__ = __webpack_require__("../../../../../src/app/mass/mass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__reporting_reporting_component__ = __webpack_require__("../../../../../src/app/reporting/reporting.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_5__messages_list_messages_list_component__["a" /* MessagesListComponent */],
                __WEBPACK_IMPORTED_MODULE_6__message_add_message_add_component__["a" /* MessageAddComponent */],
                __WEBPACK_IMPORTED_MODULE_7__buttons_buttons_component__["a" /* ButtonsComponent */],
                __WEBPACK_IMPORTED_MODULE_8__buttons_add_buttons_add_component__["a" /* ButtonsAddComponent */],
                __WEBPACK_IMPORTED_MODULE_12__mass_mass_component__["a" /* MassComponent */],
                __WEBPACK_IMPORTED_MODULE_13__login_login_component__["a" /* LoginComponent */],
                __WEBPACK_IMPORTED_MODULE_16__reporting_reporting_component__["a" /* ReportingComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_9__app_router__["a" /* routes */],
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_10__messages_service__["a" /* MessagesService */], __WEBPACK_IMPORTED_MODULE_11__buttons_service__["a" /* ButtonsService */], __WEBPACK_IMPORTED_MODULE_15__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_14__auth_guard__["a" /* AuthGuard */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.router.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export router */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttons_buttons_component__ = __webpack_require__("../../../../../src/app/buttons/buttons.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_add_buttons_add_component__ = __webpack_require__("../../../../../src/app/buttons-add/buttons-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__messages_list_messages_list_component__ = __webpack_require__("../../../../../src/app/messages-list/messages-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__message_add_message_add_component__ = __webpack_require__("../../../../../src/app/message-add/message-add.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__mass_mass_component__ = __webpack_require__("../../../../../src/app/mass/mass.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__auth_guard__ = __webpack_require__("../../../../../src/app/auth.guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__reporting_reporting_component__ = __webpack_require__("../../../../../src/app/reporting/reporting.component.ts");









var router = [
    { path: '', component: __WEBPACK_IMPORTED_MODULE_3__messages_list_messages_list_component__["a" /* MessagesListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'messages-add', component: __WEBPACK_IMPORTED_MODULE_4__message_add_message_add_component__["a" /* MessageAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'messages-update/:id', component: __WEBPACK_IMPORTED_MODULE_4__message_add_message_add_component__["a" /* MessageAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'buttons', component: __WEBPACK_IMPORTED_MODULE_1__buttons_buttons_component__["a" /* ButtonsComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'buttons-update/:id', component: __WEBPACK_IMPORTED_MODULE_2__buttons_add_buttons_add_component__["a" /* ButtonsAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'buttons-add', component: __WEBPACK_IMPORTED_MODULE_2__buttons_add_buttons_add_component__["a" /* ButtonsAddComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'mass', component: __WEBPACK_IMPORTED_MODULE_5__mass_mass_component__["a" /* MassComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_6__auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_7__login_login_component__["a" /* LoginComponent */] },
    { path: 'reporting', component: __WEBPACK_IMPORTED_MODULE_8__reporting_reporting_component__["a" /* ReportingComponent */] }
];
var routes = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(router);


/***/ }),

/***/ "../../../../../src/app/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(router, route, loginService) {
        this.router = router;
        this.route = route;
        this.loginService = loginService;
    }
    AuthGuard.prototype.canActivate = function (next, state) {
        var _this = this;
        this.loginService.validationToken().subscribe(function (res) {
            if (!res.error) {
                console.log(res);
                return true;
            }
            else {
                _this.router.navigate(['/login']);
            }
        });
        return true;
    };
    AuthGuard = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "../../../../../src/app/buttons-add/buttons-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/buttons-add/buttons-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-sm-6 col-sm-push-3\">\n  <h2>Button# {{id}}</h2>\n  <div class=\"form-group\">\n    <h4>Buttons text</h4>\n    <input [(ngModel)]=\"button.message\" class=\"form-control\">\n  </div>\n\n  <div class=\"form-group\">\n    <h4>User profile input</h4>\n    <select [(ngModel)]=\"button.db_key\">\n      <option value=\"\"></option>\n      <option value=\"age\">Age</option>\n      <option value=\"nrc\">Nrc</option>\n      <option value=\"job\">Job</option>\n      <option value=\"noJob\">No Job</option>\n      <option value=\"nrc\">Nrc</option>\n      <option value=\"salary\">Salary</option>\n      <option value=\"hometown\">Hometown</option>\n      <option value=\"gender\">Gender</option>\n      <option value=\"location\">Location</option>\n      <option value=\"jobApply\">Job Apply</option>\n    </select>\n  </div>\n  <div class=\"form-group\">\n    <div *ngFor=\"let b of button.buttons\" class=\"col-sm-12\"\n         style=\"margin: 5px; border: 1px solid #FFF; border-radius: 3px;\">\n      <h3>button#{{b.ID}}</h3>\n      <h4>Name</h4>\n      <input [(ngModel)]=\"b.name\">\n      <h4>next</h4>\n      <input [(ngModel)]=\"b.next\">\n      <div class=\"form-group\">\n        <h4>next question or buttons</h4>\n        <select [(ngModel)]=\"b.type\">\n          <option value=\"0\">question</option>\n          <option value=\"1\">button</option>\n        </select>\n      </div>\n    </div>\n    <button (click)=\"addButton()\">Add Button</button>\n  </div>\n\n\n  <button (click)=\"saveButton()\" class=\"btn btn-default\">Submit</button>\n  <button class=\"btn btn-default\" [routerLink]=\"['/']\">Cancel</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/buttons-add/buttons-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__buttons_service__ = __webpack_require__("../../../../../src/app/buttons.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ButtonsAddComponent = (function () {
    function ButtonsAddComponent(buttonsService, route) {
        this.buttonsService = buttonsService;
        this.route = route;
        this.button = {
            buttons: [],
            message: '',
            db_key: ''
        };
        if (this.route.snapshot.params.id) {
            this.id = this.route.snapshot.params.id;
            this.getOneButton();
        }
    }
    ButtonsAddComponent.prototype.ngOnInit = function () {
    };
    ButtonsAddComponent.prototype.addButton = function () {
        if (this.button.buttons.length < 9) {
            this.button.buttons.push({
                ID: this.button.buttons.length + 1,
                next: null,
                type: null,
                name: ''
            });
        }
        else {
            alert('FB allows only 9 buttons');
        }
    };
    ButtonsAddComponent.prototype.saveButton = function () {
        if (this.id) {
            console.log(this.button);
            this.buttonsService.updateButton(this.button).subscribe(function (saved) {
                alert('updated');
            });
        }
        else {
            console.log(this.button);
            this.buttonsService.addButton(this.button).subscribe(function (saved) {
                alert('saved');
            });
        }
    };
    ButtonsAddComponent.prototype.getOneButton = function () {
        var _this = this;
        this.buttonsService.getOneButton(this.id).subscribe(function (button) {
            _this.button = button;
        });
    };
    ButtonsAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buttons-add',
            template: __webpack_require__("../../../../../src/app/buttons-add/buttons-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/buttons-add/buttons-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__buttons_service__["a" /* ButtonsService */],
            __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]])
    ], ButtonsAddComponent);
    return ButtonsAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/buttons.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ButtonsService = (function () {
    function ButtonsService(http) {
        this.http = http;
        this.botUrl = 'https://bot.good.com.mm';
    }
    ButtonsService.prototype.getAllButtons = function () {
        return this.http.get(this.botUrl + "/allButtons");
    };
    ButtonsService.prototype.addButton = function (data) {
        return this.http.post(this.botUrl + "/addButton", data);
    };
    ButtonsService.prototype.updateButton = function (data) {
        return this.http.post(this.botUrl + "/updateButton", data);
    };
    ButtonsService.prototype.getOneButton = function (id) {
        return this.http.get(this.botUrl + "/getOneButton/" + id);
    };
    ButtonsService.prototype.deleteButton = function (id) {
        return this.http.get(this.botUrl + "/deleteButton/" + id);
    };
    ButtonsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ButtonsService);
    return ButtonsService;
}());



/***/ }),

/***/ "../../../../../src/app/buttons/buttons.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/buttons/buttons.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  buttons works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/buttons/buttons.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonsComponent = (function () {
    function ButtonsComponent() {
    }
    ButtonsComponent.prototype.ngOnInit = function () {
    };
    ButtonsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-buttons',
            template: __webpack_require__("../../../../../src/app/buttons/buttons.component.html"),
            styles: [__webpack_require__("../../../../../src/app/buttons/buttons.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ButtonsComponent);
    return ButtonsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/login.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = (function () {
    function LoginService(http) {
        this.http = http;
        this.botUrl = 'https://bot.good.com.mm';
    }
    LoginService.prototype.login = function (data) {
        return this.http.post(this.botUrl + "/login", data);
    };
    LoginService.prototype.validationToken = function () {
        return this.http.post(this.botUrl + "/checkToken", { token: localStorage.getItem('token') });
    };
    LoginService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".login-area {\n  margin-top: 150px;\n  border: 1px solid #767b7d;\n  border-radius: 10px;\n  background: #d5dee1;\n  padding-top: 20px;\n  padding-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"login-area col-sm-6 col-sm-push-3\">\n  <div class=\"form-group\">\n    <label for=\"email\">Username:</label>\n    <input [(ngModel)]=\"username\" type=\"email\" class=\"form-control\" id=\"email\">\n  </div>\n  <div class=\"form-group\">\n    <label for=\"pwd\">Password:</label>\n    <input [(ngModel)]=\"password\" type=\"password\" class=\"form-control\" id=\"pwd\">\n  </div>\n  <button (click)=\"logIn()\" type=\"submit\" class=\"btn btn-default\">Submit</button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__("../../../../../src/app/login.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.username = '';
        this.password = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logIn = function () {
        var _this = this;
        this.loginService.login({ username: this.username, password: this.password }).subscribe(function (res) {
            console.log(res);
            localStorage.setItem('token', res.token);
            _this.router.navigate(['/']);
        }, function (err) {
            alert('ERROR ON LOGGIN IN!');
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("../../../../../src/app/login/login.component.html"),
            styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/mass/mass.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/mass/mass.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-sm-6 col-sm-push-3\">\n    <h2>New mass message</h2>\n    <div class=\"form-group\">\n      <h4>Message text</h4>\n      <input [(ngModel)]=\"mass.message\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <h4>question or buttons</h4>\n      <select (change)=\"typeChange()\" [(ngModel)]=\"mass.type\">\n        <option value=1>question</option>\n        <option value=2>button</option>\n      </select>\n    </div>\n\n    <div *ngIf=\"mass.type === 2\" class=\"form-group\">\n      <div *ngFor=\"let b of mass.buttons\" class=\"col-sm-12\"\n           style=\"margin: 5px; border: 1px solid #FFF; border-radius: 3px;\">\n        <h3>button#{{b.ID}}</h3>\n        <h4>Name</h4>\n        <input [(ngModel)]=\"b.name\">\n        <h4>next</h4>\n        <input [(ngModel)]=\"b.next\">\n        <div class=\"form-group\">\n          <h4>next question or buttons</h4>\n          <select [(ngModel)]=\"b.type\">\n            <option value=\"0\">question</option>\n            <option value=\"1\">button</option>\n          </select>\n        </div>\n      </div>\n      <button (click)=\"addButton()\">Add Button</button>\n    </div>\n    <button (click)=\"sendMass()\" class=\"btn btn-default\">Submit</button>\n    <button class=\"btn btn-default\" [routerLink]=\"['/']\">Cancel</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/mass/mass.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MassComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_service__ = __webpack_require__("../../../../../src/app/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_service__ = __webpack_require__("../../../../../src/app/buttons.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MassComponent = (function () {
    function MassComponent(route, router, messagesService, buttonsService) {
        this.route = route;
        this.router = router;
        this.messagesService = messagesService;
        this.buttonsService = buttonsService;
        this.mass = {
            message: '',
            buttons: [],
            type: 1,
            query: null
        };
    }
    MassComponent.prototype.ngOnInit = function () {
        this.getAllMessages();
    };
    MassComponent.prototype.getAllMessages = function () {
        var _this = this;
        this.messagesService.getAllQuestions().subscribe(function (res) {
            _this.messages = res;
        });
    };
    MassComponent.prototype.sendMass = function () {
        this.messagesService.sendMass(this.mass).subscribe(function (data) {
            alert('Sending mass message');
        });
    };
    MassComponent.prototype.addButton = function () {
        if (this.mass.buttons.length < 9) {
            this.mass.buttons.push({
                ID: this.mass.buttons.length + 1,
                next: null,
                type: null,
                name: ''
            });
        }
        else {
            alert('FB allows only 9 buttons');
        }
    };
    MassComponent.prototype.typeChange = function () {
        this.mass.type = Number(this.mass.type);
        console.log(this.mass);
    };
    MassComponent.prototype.queryChange = function () {
        if (this.mass.query === '') {
            this.mass.query = null;
        }
    };
    MassComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-mass',
            template: __webpack_require__("../../../../../src/app/mass/mass.component.html"),
            styles: [__webpack_require__("../../../../../src/app/mass/mass.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__messages_service__["a" /* MessagesService */],
            __WEBPACK_IMPORTED_MODULE_3__buttons_service__["a" /* ButtonsService */]])
    ], MassComponent);
    return MassComponent;
}());



/***/ }),

/***/ "../../../../../src/app/message-add/message-add.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/message-add/message-add.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"col-sm-6 col-sm-push-3\">\n    <h2>Message# {{id}}</h2>\n    <div class=\"form-group\">\n      <h4>Message text</h4>\n      <input [(ngModel)]=\"message.message\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <h4>Description</h4>\n      <input [(ngModel)]=\"message.description\" class=\"form-control\">\n    </div>\n    <div class=\"form-group\">\n      <h4>next question ID</h4>\n      <input [(ngModel)]=\"message.next\">\n    </div>\n    <div class=\"form-group\">\n      <h4>next question or buttons</h4>\n      <select [(ngModel)]=\"message.type\">\n        <option value=\"0\">question</option>\n        <option value=\"1\">button</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <h4>user profile data</h4>\n      <select [(ngModel)]=\"message.db_key\">\n        <option value=''></option>\n        <option value='gender'>gender</option>\n        <option value='phone'>phone</option>\n        <option value='nrc'>NRC</option>\n        <option value='township'>township</option>\n        <option value='age'>Age</option>\n        <option value='salary'>salary</option>\n        <option value='full_name'>Full Name</option>\n      </select>\n    </div>\n    <div class=\"form-group\">\n      <h4>Input:After this the flow will wait for users input</h4>\n      <input [(ngModel)]=\"message.input\" type=\"checkbox\">\n    </div>\n    <button (click)=\"addUpdateMessage()\" class=\"btn btn-default\">Submit</button>\n    <button class=\"btn btn-default\" [routerLink]=\"['/']\">Cancel</button>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/message-add/message-add.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessageAddComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__messages_service__ = __webpack_require__("../../../../../src/app/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__buttons_service__ = __webpack_require__("../../../../../src/app/buttons.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var MessageAddComponent = (function () {
    function MessageAddComponent(route, router, messagesService, buttonsService) {
        this.route = route;
        this.router = router;
        this.messagesService = messagesService;
        this.buttonsService = buttonsService;
        this.message = {
            message: '',
            description: '',
            next: null,
            type: null,
            input: false,
            db_key: ''
        };
        if (this.route.snapshot.params.id) {
            this.id = this.route.snapshot.params.id;
            this.getOneMessage(this.id);
        }
    }
    MessageAddComponent.prototype.ngOnInit = function () {
        this.getAllMessages();
    };
    MessageAddComponent.prototype.getAllMessages = function () {
        var _this = this;
        this.messagesService.getAllQuestions().subscribe(function (res) {
            _this.messages = res;
        });
    };
    MessageAddComponent.prototype.getOneMessage = function (id) {
        var _this = this;
        this.messagesService.getOneQuestion(id).subscribe(function (res) {
            _this.message = res;
        });
    };
    MessageAddComponent.prototype.addUpdateMessage = function () {
        if (this.id) {
            this.messagesService.updateQuestion(this.message).subscribe(function (res) {
                alert('Updated ');
            });
        }
        else {
            this.messagesService.addQuestion(this.message).subscribe(function (res) {
                console.log(res);
                alert('Added');
            });
        }
    };
    MessageAddComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-message-add',
            template: __webpack_require__("../../../../../src/app/message-add/message-add.component.html"),
            styles: [__webpack_require__("../../../../../src/app/message-add/message-add.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */],
            __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */],
            __WEBPACK_IMPORTED_MODULE_2__messages_service__["a" /* MessagesService */],
            __WEBPACK_IMPORTED_MODULE_3__buttons_service__["a" /* ButtonsService */]])
    ], MessageAddComponent);
    return MessageAddComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages-list/messages-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-message {\n  width: 200px;\n}\n\n.list-description {\n  width: 200px;\n}\n.list-id {\n  width: 40px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/messages-list/messages-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"col-sm-12\">\n    <button  [routerLink]=\"['/mass']\" class=\"btn\">New Mass</button>\n    <button [routerLink]=\"['/reporting']\" class=\"btn\">Reports</button>\n  </div>\n  <div class=\"col-sm-12\">\n    <h2>FLOW</h2>\n    <table *ngFor=\"let flow of allFlow\" class=\"table\">\n      <thead>\n      <tr>\n        <th>ID</th>\n        <th>message</th>\n        <th>description</th>\n        <th *ngIf=\"!flow.buttons_next_button\">Next message</th>\n        <th *ngFor=\"let b of flow.buttons_next_button; let i = index\">Button/next message</th>\n      </tr>\n      </thead>\n      <tbody>\n      <tr>\n        <td class=\"list-id\">{{flow.id}}</td>\n        <td class=\"list-message\">{{flow.message}}</td>\n        <td class=\"list-description\">{{flow.description}}</td>\n        <td class=\"list-next\" *ngIf=\"!flow.buttons_next_button\">{{flow.message_next_id}}</td>\n        <td class=\"list-next\" *ngFor=\"let b of flow.buttons_next_button\">{{b.name}}/{{b.next}}</td>\n      </tr>\n      </tbody>\n    </table>\n  </div>\n\n  <h2>messages</h2>\n  <button [routerLink]=\"['/messages-add']\" class=\"btn\">Add message</button>\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>ID</th>\n      <th>Message</th>\n      <th>Description</th>\n      <th></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let message of allMessages\">\n      <td>{{message.id}}</td>\n      <td>{{message.message}}</td>\n      <td>{{message.description}}</td>\n      <td><i [routerLink]=\"['/messages-update/',message.id]\" class=\"fas fa-edit\"></i>\n        <i (click)=\"deleteMessage(message.id)\" class=\"fas fa-trash\"></i></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n\n\n<div class=\"container\">\n  <h2>Buttons</h2>\n  <button class=\"btn\" [routerLink]=\"['/buttons-add']\">Add button</button>\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th>ID</th>\n      <th>Message</th>\n      <th>Buttons</th>\n      <th>profile key</th>\n      <th></th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let button of allButtons\">\n      <td>{{button.id}}</td>\n      <td>{{button.message}}</td>\n      <td><span style=\"border: 2px solid green; border-radius: 3px\" *ngFor=\"let b of button.buttons\"> {{b.name}} </span>\n      </td>\n      <td><span style=\"border: 2px solid green; border-radius: 3px\"> {{button.db_key}} </span>\n      </td>\n      <td><i [routerLink]=\"['/buttons-update/',button.id]\" class=\"fas fa-edit\"></i>\n        <i (click)=\"geleteButton(button.id)\" class=\"fas fa-trash\"></i></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/messages-list/messages-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages_service__ = __webpack_require__("../../../../../src/app/messages.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__buttons_service__ = __webpack_require__("../../../../../src/app/buttons.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MessagesListComponent = (function () {
    function MessagesListComponent(messages, buttonsService) {
        this.messages = messages;
        this.buttonsService = buttonsService;
    }
    MessagesListComponent.prototype.ngOnInit = function () {
        this.getAllFlow();
        this.getAllButtons();
        this.getAllMessages();
    };
    /**
     * getting  all messages from API
     */
    MessagesListComponent.prototype.getAllMessages = function () {
        var _this = this;
        this.messages.getAllQuestions().subscribe(function (res) {
            _this.allMessages = res;
        });
    };
    /**
     * getting all buttons from API
     */
    MessagesListComponent.prototype.getAllButtons = function () {
        var _this = this;
        this.buttonsService.getAllButtons().subscribe(function (res) {
            _this.allButtons = res;
            console.log(_this.allButtons);
        });
    };
    MessagesListComponent.prototype.geleteButton = function (id) {
        var _this = this;
        this.buttonsService.deleteButton(id).subscribe(function (data) {
            alert('deleted');
            _this.getAllButtons();
        });
    };
    MessagesListComponent.prototype.deleteMessage = function (id) {
        var _this = this;
        this.messages.deleteMessage(id).subscribe(function (data) {
            alert('deleted');
            _this.getAllMessages();
        });
    };
    MessagesListComponent.prototype.getAllFlow = function () {
        var _this = this;
        this.messages.getAllFlow().subscribe(function (res) {
            _this.allFlow = res;
        });
    };
    MessagesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-messages-list',
            template: __webpack_require__("../../../../../src/app/messages-list/messages-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/messages-list/messages-list.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessagesService */],
            __WEBPACK_IMPORTED_MODULE_2__buttons_service__["a" /* ButtonsService */]])
    ], MessagesListComponent);
    return MessagesListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/messages.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MessagesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesService = (function () {
    function MessagesService(http) {
        this.http = http;
        this.botUrl = 'https://bot.good.com.mm';
    }
    MessagesService.prototype.getAllQuestions = function () {
        return this.http.get(this.botUrl + "/allMessages");
    };
    MessagesService.prototype.getOneQuestion = function (id) {
        return this.http.get(this.botUrl + "/message/" + id);
    };
    MessagesService.prototype.addQuestion = function (data) {
        return this.http.post(this.botUrl + "/messages/add", data);
    };
    MessagesService.prototype.updateQuestion = function (data) {
        return this.http.post(this.botUrl + "/messages/update", data);
    };
    MessagesService.prototype.deleteMessage = function (id) {
        return this.http.get(this.botUrl + "/deleteMessage/" + id);
    };
    MessagesService.prototype.getAllFlow = function () {
        return this.http.get(this.botUrl + "/getFlow");
    };
    MessagesService.prototype.sendMass = function (data) {
        return this.http.post(this.botUrl + "/sendMass", data);
    };
    MessagesService.prototype.getReportsTotal = function () {
        return this.http.get(this.botUrl + "/getUsersCount");
    };
    MessagesService.prototype.getAllReports = function () {
        return this.http.get(this.botUrl + "/allReports");
    };
    MessagesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], MessagesService);
    return MessagesService;
}());



/***/ }),

/***/ "../../../../../src/app/reporting/reporting.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/reporting/reporting.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h2>Reporting</h2>\n  <div>total Mails: {{total[0].c}}</div>\n  <div>total Females: {{total[1].c}}</div>\n  <button class=\"btn\" [routerLink]=\"['/']\">Home</button>\n  <table class=\"table\">\n    <thead>\n    <tr>\n      <th></th>\n      <th>CreatedAt</th>\n      <th>step 1</th>\n      <th>step 2</th>\n      <th>step 3</th>\n      <th>step 4</th>\n      <th>step 5</th>\n      <th>step 6</th>\n      <th>step 7</th>\n      <th>step 8</th>\n      <th>step 9</th>\n      <th>step 10</th>\n      <th>step 11</th>\n      <th>step 12</th>\n      <th>step 13</th>\n      <th>step 14</th>\n      <th>step 15</th>\n      <th>step 16</th>\n      <th>step 17</th>\n      <th>step 18</th>\n      <th>step 19</th>\n      <th>step 20</th>\n    </tr>\n    </thead>\n    <tbody>\n    <tr></tr>\n    <tr *ngFor=\"let data of reports\">\n      <th>\n        <div>Total/Female</div>\n      </th>\n      <td>{{data.createdAt}}</td>\n      <td>{{getNumberForStep(data.id, '1')}}</td>\n      <td>{{getNumberForStep(data.id, '2')}}</td>\n      <td>{{getNumberForStep(data.id, '3')}}</td>\n      <td>{{getNumberForStep(data.id, '4')}}</td>\n      <td>{{getNumberForStep(data.id, '5')}}</td>\n      <td>{{getNumberForStep(data.id, '6')}}</td>\n      <td>{{getNumberForStep(data.id, '7')}}</td>\n      <td>{{getNumberForStep(data.id, '8')}}</td>\n      <td>{{getNumberForStep(data.id, '9')}}</td>\n      <td>{{getNumberForStep(data.id, '10')}}</td>\n      <td>{{getNumberForStep(data.id, '11')}}</td>\n      <td>{{getNumberForStep(data.id, '12')}}</td>\n      <td>{{getNumberForStep(data.id, '13')}}</td>\n      <td>{{getNumberForStep(data.id, '14')}}</td>\n      <td>{{getNumberForStep(data.id, '15')}}</td>\n      <td>{{getNumberForStep(data.id, '16')}}</td>\n      <td>{{getNumberForStep(data.id, '17')}}</td>\n      <td>{{getNumberForStep(data.id, '18')}}</td>\n      <td>{{getNumberForStep(data.id, '19')}}</td>\n      <td>{{getNumberForStep(data.id, '20')}}</td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/reporting/reporting.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ReportingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__messages_service__ = __webpack_require__("../../../../../src/app/messages.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ReportingComponent = (function () {
    function ReportingComponent(messagesSerive) {
        this.messagesSerive = messagesSerive;
        this.total = [];
        this.reports = [];
    }
    ReportingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.messagesSerive.getReportsTotal().subscribe(function (data) {
            _this.total = data;
        });
        this.messagesSerive.getAllReports().subscribe(function (data) {
            _this.reports = data;
        });
    };
    ReportingComponent.prototype.getNumberForStep = function (id, step) {
        step = Number(step);
        var num = this.reports.filter(function (o) {
            return o.id === id;
        })[0]
            .data
            .filter(function (n) {
            return n.step === step;
        })[0];
        console.log(num);
        return num.count + '/' + num.f;
    };
    ReportingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-reporting',
            template: __webpack_require__("../../../../../src/app/reporting/reporting.component.html"),
            styles: [__webpack_require__("../../../../../src/app/reporting/reporting.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__messages_service__["a" /* MessagesService */]])
    ], ReportingComponent);
    return ReportingComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map