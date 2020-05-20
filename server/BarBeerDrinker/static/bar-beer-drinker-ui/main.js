(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
/* harmony import */ var _interface_interface_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./interface/interface.component */ "./src/app/interface/interface.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: 'static',
        pathMatch: 'full',
        redirectTo: 'bars'
    },
    {
        path: 'bars',
        pathMatch: 'full',
        component: _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"]
    },
    {
        path: 'bars/:bar',
        pathMatch: 'full',
        component: _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_3__["BarDetailsComponent"]
    },
    {
        path: 'beers',
        pathMatch: 'full',
        component: _beers_beers_component__WEBPACK_IMPORTED_MODULE_5__["BeersComponent"]
    },
    {
        path: 'beers/:beer',
        pathMatch: 'full',
        component: _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_4__["BeerDetailsComponent"]
    },
    {
        path: 'drinkers',
        pathMatch: 'full',
        component: _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_6__["DrinkersComponent"]
    },
    {
        path: 'drinkers/:drinker',
        pathMatch: 'full',
        component: _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_7__["DrinkerDetailsComponent"]
    },
    {
        path: 'modification',
        pathMatch: 'full',
        component: _modification_modification_component__WEBPACK_IMPORTED_MODULE_8__["ModificationComponent"]
    },
    {
        path: 'interface/:query',
        pathMatch: 'full',
        component: _interface_interface_component__WEBPACK_IMPORTED_MODULE_9__["InterfaceComponent"]
    },
    {
        path: 'interface',
        pathMatch: 'full',
        redirectTo: 'interface/SELECT name, addr, city, state FROM bar'
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Bar Beer Drinker</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n    <ul class=\"navbar-nav\">\n      <li class=\"nav-item\" routerLinkActive = \"active\">\n        <a class=\"nav-link\" routerLink=\"/bars\">Home</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive = \"active\"> \n        <a class=\"nav-link\" routerLink=\"/beers\">Beers</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive = \"active\"> \n        <a class=\"nav-link\" routerLink=\"/drinkers\">Drinkers</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive = \"active\"> \n        <a class=\"nav-link\" routerLink=\"/modification\">Modification</a>\n      </li>\n      <li class=\"nav-item\" routerLinkActive = \"active\"> \n          <a class=\"nav-link\" routerLink=\"/interface\">Interface</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'bar-beer-drinker-ui';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./welcome/welcome.component */ "./src/app/welcome/welcome.component.ts");
/* harmony import */ var _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./bar-details/bar-details.component */ "./src/app/bar-details/bar-details.component.ts");
/* harmony import */ var _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./beer-details/beer-details.component */ "./src/app/beer-details/beer-details.component.ts");
/* harmony import */ var _beers_beers_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./beers/beers.component */ "./src/app/beers/beers.component.ts");
/* harmony import */ var _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./drinkers/drinkers.component */ "./src/app/drinkers/drinkers.component.ts");
/* harmony import */ var _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./drinker-details/drinker-details.component */ "./src/app/drinker-details/drinker-details.component.ts");
/* harmony import */ var _modification_modification_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modification/modification.component */ "./src/app/modification/modification.component.ts");
/* harmony import */ var _interface_interface_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./interface/interface.component */ "./src/app/interface/interface.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _welcome_welcome_component__WEBPACK_IMPORTED_MODULE_6__["WelcomeComponent"],
                _bar_details_bar_details_component__WEBPACK_IMPORTED_MODULE_7__["BarDetailsComponent"],
                _beer_details_beer_details_component__WEBPACK_IMPORTED_MODULE_8__["BeerDetailsComponent"],
                _beers_beers_component__WEBPACK_IMPORTED_MODULE_9__["BeersComponent"],
                _drinkers_drinkers_component__WEBPACK_IMPORTED_MODULE_10__["DrinkersComponent"],
                _drinker_details_drinker_details_component__WEBPACK_IMPORTED_MODULE_11__["DrinkerDetailsComponent"],
                _modification_modification_component__WEBPACK_IMPORTED_MODULE_12__["ModificationComponent"],
                _interface_interface_component__WEBPACK_IMPORTED_MODULE_13__["InterfaceComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_3__["TableModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/bar-details/bar-details.component.css":
/*!*******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Jhci1kZXRhaWxzL2Jhci1kZXRhaWxzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.html":
/*!********************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ barName }}</h1>\n    <p class=\"bar-details\" *ngIf=\"barDetails\">\n    {{ barDetails?.addr }} <span *ngIf=\"barDetails.state && barDetails.city\"></span>\n    <br>\n    {{ barDetails?.city }}\n    {{ barDetails?.state }}\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Menu</h2>\n  <br>\n  <p-table [value]=\"menu\">\n  <ng-template pTemplate=\"header\">\n  <tr>\n  <th>Item</th>\n  <th>Price</th>\n  </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-item>\n  <tr>\n  <td>{{ item.item }}</td>\n  <td>{{ item.price | currency }}</td>\n  </tr>\n  </ng-template>\n  </p-table>\n  <br><br><br>\n  <div id=\"top-drinkers\"></div>\n  <br><br><br>\n  <div id=\"popular-beers\"></div>\n  <br><br><br>\n  <div id=\"popular-manf\"></div>\n  <br><br><br>\n  <div id=\"busiest-in-day\"></div>\n  <br><br><br>\n  <div id=\"busiest-of-week\"></div>\n  <br><br><br>\n </div>"

/***/ }),

/***/ "./src/app/bar-details/bar-details.component.ts":
/*!******************************************************!*\
  !*** ./src/app/bar-details/bar-details.component.ts ***!
  \******************************************************/
/*! exports provided: BarDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarDetailsComponent", function() { return BarDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BarDetailsComponent = /** @class */ (function () {
    function BarDetailsComponent(barService, route) {
        var _this = this;
        this.barService = barService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.barName = paramMap.get('bar');
            barService.getBar(_this.barName).subscribe(function (data) {
                _this.barDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Bar not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the browser console.');
                }
            });
            barService.getMenu(_this.barName).subscribe(function (data) {
                _this.menu = data;
            });
            _this.barService.getTopDrinkers(_this.barName).subscribe(function (data) {
                console.log(data);
                var drinkers = [];
                var spendings = [];
                data.forEach(function (i) {
                    drinkers.push(i.Drinker);
                    spendings.push(i.Spendings);
                });
                _this.renderTopDrinkersChart(drinkers, spendings);
            });
            _this.barService.getMostPopularBeers(_this.barName).subscribe(function (data) {
                console.log(data);
                var beers = [];
                var count = [];
                data.forEach(function (i) {
                    beers.push(i.beer);
                    count.push(i.count);
                });
                _this.renderPopularBeersChart(beers, count);
            });
            _this.barService.getMostPopularManf(_this.barName).subscribe(function (data) {
                console.log(data);
                var manf = [];
                var count = [];
                data.forEach(function (i) {
                    manf.push(i.Manufacturer);
                    count.push(i.Count);
                });
                _this.renderPopularManfChart(manf, count);
            });
            _this.barService.getBusiestInDay(_this.barName).subscribe(function (data) {
                console.log(data);
                var hour = [];
                var count = [];
                data.forEach(function (i) {
                    hour.push(i.Hour);
                    count.push(i.Count);
                });
                _this.renderBusiestInDayChart(hour, count);
            });
            _this.barService.getBusiestOfWeek(_this.barName).subscribe(function (data) {
                console.log(data);
                var day = [];
                var count = [];
                data.forEach(function (i) {
                    day.push(i.Day);
                    count.push(i.Count);
                });
                _this.renderBusiestOfWeekChart(day, count);
            });
        });
    }
    BarDetailsComponent.prototype.ngOnInit = function () { };
    BarDetailsComponent.prototype.renderTopDrinkersChart = function (drinkers, counts) {
        Highcharts.chart('top-drinkers', {
            chart: { type: 'column' },
            title: { text: 'Top Drinkers Who Are the Largest Spenders in this Bar' },
            xAxis: {
                categories: drinkers,
                title: { text: 'Drinker' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Total Spending ($)' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }]
        });
    };
    BarDetailsComponent.prototype.renderPopularBeersChart = function (beers, counts) {
        Highcharts.chart('popular-beers', {
            chart: { type: 'column' },
            title: { text: 'Most Popular Beers in this Bar' },
            xAxis: {
                categories: beers,
                title: { text: 'Beer' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Number Sold' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }]
        });
    };
    BarDetailsComponent.prototype.renderPopularManfChart = function (manf, counts) {
        Highcharts.chart('popular-manf', {
            chart: { type: 'column' },
            title: { text: 'Manufacturers Who Sell the Most Beers in this Bar' },
            xAxis: {
                categories: manf,
                title: { text: 'Manufacturer' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Number of Beers Sold' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }]
        });
    };
    BarDetailsComponent.prototype.renderBusiestInDayChart = function (hour, counts) {
        Highcharts.chart('busiest-in-day', {
            chart: { type: 'column' },
            title: { text: 'Busiest Periods of the Day' },
            xAxis: {
                categories: hour,
                title: { text: 'Hour' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Number of Items Sold' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }]
        });
    };
    BarDetailsComponent.prototype.renderBusiestOfWeekChart = function (day, counts) {
        Highcharts.chart('busiest-of-week', {
            chart: { type: 'column' },
            title: { text: 'Busiest Periods of the Week' },
            xAxis: {
                categories: day,
                title: { text: 'Day' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Number of Items Sold' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }]
        });
    };
    BarDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-bar-details',
            template: __webpack_require__(/*! ./bar-details.component.html */ "./src/app/bar-details/bar-details.component.html"),
            styles: [__webpack_require__(/*! ./bar-details.component.css */ "./src/app/bar-details/bar-details.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_2__["BarsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BarDetailsComponent);
    return BarDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bars.service.ts":
/*!*********************************!*\
  !*** ./src/app/bars.service.ts ***!
  \*********************************/
/*! exports provided: BarsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BarsService", function() { return BarsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BarsService = /** @class */ (function () {
    function BarsService(http) {
        this.http = http;
    }
    BarsService.prototype.getBars = function () {
        return this.http.get('/api/bar');
    };
    BarsService.prototype.getBar = function (bar) {
        return this.http.get('/api/bar/' + bar);
    };
    BarsService.prototype.getMenu = function (bar) {
        return this.http.get('/api/menu/' + bar);
    };
    BarsService.prototype.getTopDrinkers = function (bar) {
        return this.http.get('/api/top_drinkers/' + bar);
    };
    BarsService.prototype.getMostPopularBeers = function (bar) {
        return this.http.get('/api/most_popular_beers/' + bar);
    };
    BarsService.prototype.getMostPopularManf = function (bar) {
        return this.http.get('/api/most_popular_manf/' + bar);
    };
    BarsService.prototype.getBusiestInDay = function (bar) {
        return this.http.get('/api/busiest_in_day/' + bar);
    };
    BarsService.prototype.getBusiestOfWeek = function (bar) {
        return this.http.get('/api/busiest_of_week/' + bar);
    };
    BarsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BarsService);
    return BarsService;
}());



/***/ }),

/***/ "./src/app/beer-details/beer-details.component.css":
/*!*********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXItZGV0YWlscy9iZWVyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.html":
/*!**********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ beerName }}</h1>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Bars that Sell this Beer</h2>\n  <br>\n  <p-table [value]=\"beerBars\">\n  <ng-template pTemplate=\"header\">\n  <tr>\n  <th>Bar</th>\n  <th>Price</th>\n  </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-item>\n  <tr>\n  <td>{{ item.bar }}</td>\n  <td>{{ item.price | currency }}</td>\n  </tr>\n  </ng-template>\n  </p-table>\n  <br><br><br>\n  <div id=\"beer-most-bars\"></div>\n  <br><br><br>\n  <div id=\"beer-most-drinkers\"></div>\n  <br><br><br>\n  <div id=\"beer-hour-dist\"></div>\n  <br><br><br>\n  <div id=\"beer-day-dist\"></div>\n  <br><br><br>\n  <div id=\"beer-week-dist\"></div>\n  <br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/beer-details/beer-details.component.ts":
/*!********************************************************!*\
  !*** ./src/app/beer-details/beer-details.component.ts ***!
  \********************************************************/
/*! exports provided: BeerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeerDetailsComponent", function() { return BeerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BeerDetailsComponent = /** @class */ (function () {
    function BeerDetailsComponent(beerService, route) {
        var _this = this;
        this.beerService = beerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.beerName = paramMap.get('beer');
            beerService.getBeer(_this.beerName).subscribe(function (data) {
                _this.beerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Beer not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the browser console.');
                }
            });
            beerService.getBeerBars(_this.beerName).subscribe(function (data) {
                _this.beerBars = data;
            });
            _this.beerService.getBeerMostBars(_this.beerName).subscribe(function (data) {
                console.log(data);
                var bars = [];
                var count = [];
                data.forEach(function (i) {
                    bars.push(i.bar);
                    count.push(i.count);
                });
                _this.renderBeerMostBarsChart(bars, count);
            });
            _this.beerService.getBeerMostDrinkers(_this.beerName).subscribe(function (data) {
                console.log(data);
                var drinkers = [];
                var count = [];
                data.forEach(function (i) {
                    drinkers.push(i.Drinker);
                    count.push(i.Count);
                });
                _this.renderBeerMostDrinkersChart(drinkers, count);
            });
            _this.beerService.getBeerHourDist(_this.beerName).subscribe(function (data) {
                console.log(data);
                var hour = [];
                var count = [];
                data.forEach(function (i) {
                    hour.push(i.Hour);
                    count.push(i.Count);
                });
                _this.renderBeerHourDistChart(hour, count);
            });
            _this.beerService.getBeerDayDist(_this.beerName).subscribe(function (data) {
                console.log(data);
                var day = [];
                var count = [];
                data.forEach(function (i) {
                    day.push(i.Day);
                    count.push(i.Count);
                });
                _this.renderBeerDayDistChart(day, count);
            });
            _this.beerService.getBeerWeekDist(_this.beerName).subscribe(function (data) {
                console.log(data);
                var week = [];
                var count = [];
                data.forEach(function (i) {
                    week.push(i.Week);
                    count.push(i.Count);
                });
                _this.renderBeerWeekDistChart(week, count);
            });
        });
    }
    BeerDetailsComponent.prototype.ngOnInit = function () {
    };
    BeerDetailsComponent.prototype.renderBeerMostBarsChart = function (bars, counts) {
        Highcharts.chart('beer-most-bars', {
            chart: { type: 'column' },
            title: { text: 'Bars where this Beer Sells the Most ' },
            xAxis: {
                categories: bars,
                title: { text: 'Bar' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Number Sold' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }]
        });
    };
    BeerDetailsComponent.prototype.renderBeerMostDrinkersChart = function (drinkers, counts) {
        Highcharts.chart('beer-most-drinkers', {
            chart: { type: 'column' },
            title: { text: 'Drinkers who are the Biggest Consumers of this Beer' },
            xAxis: {
                categories: drinkers,
                title: { text: 'Drinker' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Number Purchased' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }]
        });
    };
    BeerDetailsComponent.prototype.renderBeerHourDistChart = function (hours, counts) {
        Highcharts.chart('beer-hour-dist', {
            chart: { type: 'column' },
            title: { text: 'Hour Distribution of when this Beer is Sold the Most' },
            xAxis: {
                categories: hours,
                title: { text: 'Hour' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Number Sold' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }]
        });
    };
    BeerDetailsComponent.prototype.renderBeerDayDistChart = function (day, counts) {
        Highcharts.chart('beer-day-dist', {
            chart: { type: 'column' },
            title: { text: 'Day Distribution of when this Beer is Sold the Most' },
            xAxis: {
                categories: day,
                title: { text: 'Day of the Week' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Number Sold' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }]
        });
    };
    BeerDetailsComponent.prototype.renderBeerWeekDistChart = function (week, counts) {
        Highcharts.chart('beer-week-dist', {
            chart: { type: 'column' },
            title: { text: 'Week Distribution of when this Beer is Sold the Most' },
            xAxis: {
                categories: week,
                title: { text: 'Week' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Number Sold' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }]
        });
    };
    BeerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beer-details',
            template: __webpack_require__(/*! ./beer-details.component.html */ "./src/app/beer-details/beer-details.component.html"),
            styles: [__webpack_require__(/*! ./beer-details.component.css */ "./src/app/beer-details/beer-details.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_2__["BeersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], BeerDetailsComponent);
    return BeerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/beers.service.ts":
/*!**********************************!*\
  !*** ./src/app/beers.service.ts ***!
  \**********************************/
/*! exports provided: BeersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersService", function() { return BeersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersService = /** @class */ (function () {
    function BeersService(http) {
        this.http = http;
    }
    BeersService.prototype.getBeers = function () {
        return this.http.get('/api/beer');
    };
    BeersService.prototype.getBeer = function (beer) {
        return this.http.get('/api/beer/' + beer);
    };
    BeersService.prototype.getBeerBars = function (beer) {
        return this.http.get('/api/beer_bars/' + beer);
    };
    BeersService.prototype.getBeerMostBars = function (beer) {
        return this.http.get('/api/beer_most_bars/' + beer);
    };
    BeersService.prototype.getBeerMostDrinkers = function (beer) {
        return this.http.get('/api/beer_most_drinkers/' + beer);
    };
    BeersService.prototype.getBeerHourDist = function (beer) {
        return this.http.get('/api/beer_hour_dist/' + beer);
    };
    BeersService.prototype.getBeerDayDist = function (beer) {
        return this.http.get('/api/beer_day_dist/' + beer);
    };
    BeersService.prototype.getBeerWeekDist = function (beer) {
        return this.http.get('/api/beer_week_dist/' + beer);
    };
    BeersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], BeersService);
    return BeersService;
}());



/***/ }),

/***/ "./src/app/beers/beers.component.css":
/*!*******************************************!*\
  !*** ./src/app/beers/beers.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JlZXJzL2JlZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/beers/beers.component.html":
/*!********************************************!*\
  !*** ./src/app/beers/beers.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to the Beer Page</h1>\n    <p class=\"lead\">Click on a beer to view beer details</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <p-table [value]=\"beers\" [paginator]=\"true\" [rows]=\"50\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Manufacturer</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-beer>\n      <tr>\n        <td>\n          <a routerLink=\"/beers/{{ beer.name }}\">{{ beer.name }}\n          </a>\n        </td>\n        <td>{{ beer.manf }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n<br><br><br>"

/***/ }),

/***/ "./src/app/beers/beers.component.ts":
/*!******************************************!*\
  !*** ./src/app/beers/beers.component.ts ***!
  \******************************************/
/*! exports provided: BeersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BeersComponent", function() { return BeersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _beers_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../beers.service */ "./src/app/beers.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BeersComponent = /** @class */ (function () {
    function BeersComponent(beerService) {
        this.beerService = beerService;
        this.getBeers();
    }
    BeersComponent.prototype.ngOnInit = function () {
    };
    BeersComponent.prototype.getBeers = function () {
        var _this = this;
        this.beerService.getBeers().subscribe(function (data) {
            _this.beers = data;
        }, function (error) {
            alert('Could not retrieve the list of beers.');
        });
    };
    BeersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-beers',
            template: __webpack_require__(/*! ./beers.component.html */ "./src/app/beers/beers.component.html"),
            styles: [__webpack_require__(/*! ./beers.component.css */ "./src/app/beers/beers.component.css")]
        }),
        __metadata("design:paramtypes", [_beers_service__WEBPACK_IMPORTED_MODULE_1__["BeersService"]])
    ], BeersComponent);
    return BeersComponent;
}());



/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.css":
/*!***************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXItZGV0YWlscy9kcmlua2VyLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.html":
/*!****************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">{{ drinkerName }}</h1>\n    <p class=\"drinker-details\" *ngIf=\"drinkerDetails\">\n    <span *ngIf=\"drinkerDetails.state\"></span>\n    {{ drinkerDetails?.state }}\n    <br>\n    <span *ngIf=\"drinkerDetails.phone\"></span>\n    {{ drinkerDetails?.phone }}\n    </p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <h2 class=\"text-center font-weight-light\">Transactions</h2>\n  <br>\n  <p-table [value]=\"trans\" [paginator]=\"true\" [rows]=\"10\">\n  <ng-template pTemplate=\"header\">\n  <tr>\n  <th>Bar</th>\n  <th>Transaction ID</th>\n  <th>Date</th>\n  <th>Time</th>\n  <th>Bill</th>\n  <th>Tax</th>\n  <th>Tip</th>\n  <th>Total Price</th>\n  </tr>\n  </ng-template>\n  <ng-template pTemplate=\"body\" let-item>\n  <tr>\n  <td>{{ item.bar }}</td>\n  <td>{{ item.transactionID }}</td>\n  <td>{{ item.date }}</td>\n  <td>{{ item.time }}</td>\n  <td>{{ item.bill | currency }}</td>\n  <td>{{ item.tax | currency }}</td>\n  <td>{{ item.tip | currency }}</td>\n  <td>{{ item.totalPrice | currency }}</td>\n  </tr>\n  </ng-template>\n  </p-table>\n  <br><br><br>\n  <div id=\"drinker-beer\"></div>\n  <br><br><br>\n  <div id=\"spending-bars\"></div>\n  <br><br><br>\n  <div id=\"spending-dates\"></div>\n  <br><br><br>\n  <div id=\"spending-weeks\"></div>\n  <br><br><br>\n  <div id=\"spending-months\"></div>\n  <br><br><br>\n</div>"

/***/ }),

/***/ "./src/app/drinker-details/drinker-details.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/drinker-details/drinker-details.component.ts ***!
  \**************************************************************/
/*! exports provided: DrinkerDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerDetailsComponent", function() { return DrinkerDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _drinker_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drinker.service */ "./src/app/drinker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DrinkerDetailsComponent = /** @class */ (function () {
    function DrinkerDetailsComponent(drinkerService, route) {
        var _this = this;
        this.drinkerService = drinkerService;
        this.route = route;
        route.paramMap.subscribe(function (paramMap) {
            _this.drinkerName = paramMap.get('drinker');
            drinkerService.getDrinker(_this.drinkerName).subscribe(function (data) {
                _this.drinkerDetails = data;
            }, function (error) {
                if (error.status === 404) {
                    alert('Drinker not found');
                }
                else {
                    console.error(error.status + ' - ' + error.body);
                    alert('An error occurred on the server. Please check the browser console.');
                }
            });
            drinkerService.getDrinkerTrans(_this.drinkerName).subscribe(function (data) {
                _this.trans = data;
            });
            _this.drinkerService.getSpendingBars(_this.drinkerName).subscribe(function (data) {
                console.log(data);
                var bar = [];
                var spending = [];
                data.forEach(function (i) {
                    bar.push(i.Bar);
                    spending.push(i.Spending);
                });
                _this.renderSpendingBarsChart(bar, spending);
            });
            _this.drinkerService.getSpendingDates(_this.drinkerName).subscribe(function (data) {
                console.log(data);
                var day = [];
                var spending = [];
                data.forEach(function (i) {
                    day.push(i.Day);
                    spending.push(i.Spending);
                });
                _this.renderSpendingDatesChart(day, spending);
            });
            _this.drinkerService.getSpendingWeeks(_this.drinkerName).subscribe(function (data) {
                console.log(data);
                var week = [];
                var spending = [];
                data.forEach(function (i) {
                    week.push(i.Week);
                    spending.push(i.Spending);
                });
                _this.renderSpendingWeeksChart(week, spending);
            });
            _this.drinkerService.getSpendingMonths(_this.drinkerName).subscribe(function (data) {
                console.log(data);
                var month = [];
                var spending = [];
                data.forEach(function (i) {
                    month.push(i.Months);
                    spending.push(i.Spending);
                });
                _this.renderSpendingMonthsChart(month, spending);
            });
        });
    }
    DrinkerDetailsComponent.prototype.ngOnInit = function () {
    };
    DrinkerDetailsComponent.prototype.renderDrinkerBeerChart = function (beers, counts) {
        Highcharts.chart('drinker-beer', {
            chart: { type: 'column' },
            title: { text: 'Beers S/He Orders the Most' },
            xAxis: {
                categories: beers,
                title: { text: 'Beer' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Number Ordered' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: counts }]
        });
    };
    DrinkerDetailsComponent.prototype.renderSpendingBarsChart = function (bars, spendings) {
        Highcharts.chart('spending-bars', {
            chart: { type: 'column' },
            title: { text: 'Total Spendings by Bar' },
            xAxis: {
                categories: bars,
                title: { text: 'Bar' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Spending' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: spendings }]
        });
    };
    DrinkerDetailsComponent.prototype.renderSpendingDatesChart = function (days, spendings) {
        Highcharts.chart('spending-dates', {
            chart: { type: 'column' },
            title: { text: 'Total Spendings by Date' },
            xAxis: {
                categories: days,
                title: { text: 'Date' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Spending' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: spendings }]
        });
    };
    DrinkerDetailsComponent.prototype.renderSpendingWeeksChart = function (weeks, spendings) {
        Highcharts.chart('spending-weeks', {
            chart: { type: 'column' },
            title: { text: 'Total Spendings by Week' },
            xAxis: {
                categories: weeks,
                title: { text: 'Week' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Spending' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: spendings }]
        });
    };
    DrinkerDetailsComponent.prototype.renderSpendingMonthsChart = function (months, spendings) {
        Highcharts.chart('spending-months', {
            chart: { type: 'column' },
            title: { text: 'Total Spendings by Month' },
            xAxis: {
                categories: months,
                title: { text: 'Month' }
            },
            yAxis: {
                min: 0,
                title: { text: 'Spending' },
                labels: { overflow: 'justify' }
            },
            plotOptions: {
                bar: {
                    dataLabels: { enabled: true }
                }
            },
            legend: { enabled: false },
            credits: { enabled: false },
            series: [{ data: spendings }]
        });
    };
    DrinkerDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinker-details',
            template: __webpack_require__(/*! ./drinker-details.component.html */ "./src/app/drinker-details/drinker-details.component.html"),
            styles: [__webpack_require__(/*! ./drinker-details.component.css */ "./src/app/drinker-details/drinker-details.component.css")]
        }),
        __metadata("design:paramtypes", [_drinker_service__WEBPACK_IMPORTED_MODULE_2__["DrinkerService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], DrinkerDetailsComponent);
    return DrinkerDetailsComponent;
}());



/***/ }),

/***/ "./src/app/drinker.service.ts":
/*!************************************!*\
  !*** ./src/app/drinker.service.ts ***!
  \************************************/
/*! exports provided: DrinkerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkerService", function() { return DrinkerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkerService = /** @class */ (function () {
    function DrinkerService(http) {
        this.http = http;
    }
    DrinkerService.prototype.getDrinkers = function () {
        return this.http.get('/api/drinker');
    };
    DrinkerService.prototype.getDrinker = function (drinker) {
        return this.http.get('/api/drinker/' + drinker);
    };
    DrinkerService.prototype.getDrinkerTrans = function (drinker) {
        return this.http.get('/api/drinker_trans/' + drinker);
    };
    DrinkerService.prototype.getDrinkerBeer = function (drinker) {
        return this.http.get('/api/drinker_beer/' + drinker);
    };
    DrinkerService.prototype.getSpendingBars = function (drinker) {
        return this.http.get('/api/spending_bars/' + drinker);
    };
    DrinkerService.prototype.getSpendingDates = function (drinker) {
        return this.http.get('/api/spending_dates/' + drinker);
    };
    DrinkerService.prototype.getSpendingWeeks = function (drinker) {
        return this.http.get('/api/spending_weeks/' + drinker);
    };
    DrinkerService.prototype.getSpendingMonths = function (drinker) {
        return this.http.get('/api/spending_months/' + drinker);
    };
    DrinkerService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], DrinkerService);
    return DrinkerService;
}());



/***/ }),

/***/ "./src/app/drinkers/drinkers.component.css":
/*!*************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RyaW5rZXJzL2RyaW5rZXJzLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.html":
/*!**************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to the Drinker Page</h1>\n    <p class=\"lead\">Click on a drinker to view drinker details</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <p-table [value]=\"drinkers\" [paginator]=\"true\" [rows]=\"50\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>State</th>\n        <th>Phone</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-drinker>\n      <tr>\n        <td>\n          <a routerLink=\"/drinkers/{{ drinker.name }}\">{{ drinker.name }}\n          </a>\n        </td>\n        <td>{{ drinker.state }}</td>\n        <td>{{ drinker.phone }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n<br><br><br>"

/***/ }),

/***/ "./src/app/drinkers/drinkers.component.ts":
/*!************************************************!*\
  !*** ./src/app/drinkers/drinkers.component.ts ***!
  \************************************************/
/*! exports provided: DrinkersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrinkersComponent", function() { return DrinkersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drinker_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../drinker.service */ "./src/app/drinker.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DrinkersComponent = /** @class */ (function () {
    function DrinkersComponent(drinkerService) {
        this.drinkerService = drinkerService;
        this.getDrinkers();
    }
    DrinkersComponent.prototype.ngOnInit = function () { };
    DrinkersComponent.prototype.getDrinkers = function () {
        var _this = this;
        this.drinkerService.getDrinkers().subscribe(function (data) {
            _this.drinkers = data;
        }, function (error) {
            alert('Could not retrieve the list of drinkers.');
        });
    };
    DrinkersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drinkers',
            template: __webpack_require__(/*! ./drinkers.component.html */ "./src/app/drinkers/drinkers.component.html"),
            styles: [__webpack_require__(/*! ./drinkers.component.css */ "./src/app/drinkers/drinkers.component.css")]
        }),
        __metadata("design:paramtypes", [_drinker_service__WEBPACK_IMPORTED_MODULE_1__["DrinkerService"]])
    ], DrinkersComponent);
    return DrinkersComponent;
}());



/***/ }),

/***/ "./src/app/interface.service.ts":
/*!**************************************!*\
  !*** ./src/app/interface.service.ts ***!
  \**************************************/
/*! exports provided: InterfaceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfaceService", function() { return InterfaceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var InterfaceService = /** @class */ (function () {
    function InterfaceService(http) {
        this.http = http;
    }
    InterfaceService.prototype.getInterface = function (query) {
        return this.http.get('/api/interface/' + query);
    };
    InterfaceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], InterfaceService);
    return InterfaceService;
}());



/***/ }),

/***/ "./src/app/interface/interface.component.css":
/*!***************************************************!*\
  !*** ./src/app/interface/interface.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ludGVyZmFjZS9pbnRlcmZhY2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/interface/interface.component.html":
/*!****************************************************!*\
  !*** ./src/app/interface/interface.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h2 class=\"text-center font-weight-light\">Query Output</h2>\n    <h2 class=\"text-center font-weight-light\">This Page is under construction</h2>\n    <h2 class=\"text-center font-weight-light\">To run your query, go to /interface/your-query-here</h2>\n    <br>\n    <p>Database Schema is the following: </p>\n    <p>beers (name, manf)</p>\n    <p>bars (name, addr, city, state, license, openingTime, closingTime)</p>\n    <p>drinker (name, state, phone)</p>\n    <p>food (name)</p>\n    <p>frequents (drinker, bar)</p>\n    <p>generates (transactionID, bar, drinker)</p>\n    <p>item (name)</p>\n    <p>likes (drinker, beer)</p>\n    <p>orders (transactionID, bar, item)</p>\n    <p>sellsResult (bar, item, price)</p>\n    <p>transactions (bar, transactionID, date, time, bill, tax, tip, totalPrice)</p> \n\n</div>\n\n<p id=\"table\">\n<script>\n    var obj = { table: \"result\", limit: 50000 };\n    var myJSON = JSON.stringify(obj);\n    document.getElementById(\"table\").innerHTML = myJSON;\n</script>"

/***/ }),

/***/ "./src/app/interface/interface.component.ts":
/*!**************************************************!*\
  !*** ./src/app/interface/interface.component.ts ***!
  \**************************************************/
/*! exports provided: InterfaceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InterfaceComponent", function() { return InterfaceComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _interface_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../interface.service */ "./src/app/interface.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var InterfaceComponent = /** @class */ (function () {
    function InterfaceComponent(route, interfaceService) {
        var _this = this;
        this.route = route;
        this.interfaceService = interfaceService;
        route.paramMap.subscribe(function (paramMap) {
            _this.query = paramMap.get('query');
            interfaceService.getInterface(_this.query).subscribe(function (data) {
                _this.result = data;
            }, function (error) {
                alert('Could not retrieve the result of the query. Please check your syntax.');
            });
        });
    }
    InterfaceComponent.prototype.ngOnInit = function () {
    };
    InterfaceComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-interface',
            template: __webpack_require__(/*! ./interface.component.html */ "./src/app/interface/interface.component.html"),
            styles: [__webpack_require__(/*! ./interface.component.css */ "./src/app/interface/interface.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _interface_service__WEBPACK_IMPORTED_MODULE_1__["InterfaceService"]])
    ], InterfaceComponent);
    return InterfaceComponent;
}());



/***/ }),

/***/ "./src/app/modification.service.ts":
/*!*****************************************!*\
  !*** ./src/app/modification.service.ts ***!
  \*****************************************/
/*! exports provided: ModificationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationService", function() { return ModificationService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificationService = /** @class */ (function () {
    function ModificationService(http) {
        this.http = http;
    }
    ModificationService.prototype.getModification = function () {
        return this.http.get('/api/modification');
    };
    ModificationService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ModificationService);
    return ModificationService;
}());



/***/ }),

/***/ "./src/app/modification/modification.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modification/modification.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZGlmaWNhdGlvbi9tb2RpZmljYXRpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modification/modification.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modification/modification.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to the Modification Page</h1>\n    <p class=\"lead\">This page is currently under construction</p>\n  </div>\n</div>  \n\n<form action=\"\" method=\"POST\">\n  <p>beer</p>\n  <input type=\"text\" placeholder=\"old name\" name=\"beer_old_name\"/><br><br>\n  <input type=\"text\" placeholder=\"new name\" name=\"beer_new_name\"/><br><br>\n  <input type=\"text\" placeholder=\"new manf\" name=\"beer_new_manf\"/><br><br>\n  <input type=\"submit\" value=\"Modify\">\n</form>\n<br><br>\n<form action=\"\" method=\"POST\">\n  <p>bar</p>\n  <input type=\"text\" placeholder=\"old name\" name=\"bar_old_name\"/><br><br>\n  <input type=\"text\" placeholder=\"new name\" name=\"bar_new_name\"/><br><br>\n  <input type=\"text\" placeholder=\"new addr\" name=\"bar_new_addr\"/><br><br>\n  <input type=\"text\" placeholder=\"new city\" name=\"bar_new_city\"/><br><br>\n  <input type=\"text\" placeholder=\"new state\" name=\"bar_new_state\"/><br><br>\n  <input type=\"text\" placeholder=\"new license\" name=\"bar_new_license\"/><br><br>\n  <input type=\"text\" placeholder=\"new openingTime\" name=\"bar_new_openingTime\"/><br><br>\n  <input type=\"text\" placeholder=\"new closingTime\" name=\"bar_new_closingTime\"/><br><br>\n  <input type=\"submit\" value=\"Modify\">\n</form>\n<br><br>\n<form action=\"\" method=\"POST\">\n  <p>drinker</p>\n  <input type=\"text\" placeholder=\"old name\" name=\"bar_old_name\"/><br><br>\n  <input type=\"text\" placeholder=\"new name\" name=\"bar_new_name\"/><br><br>\n  <input type=\"text\" placeholder=\"new state\" name=\"bar_new_state\"/><br><br>\n  <input type=\"text\" placeholder=\"new phone\" name=\"bar_new_phone\"/><br><br>\n  <input type=\"submit\" value=\"Modify\">\n</form>\n<br><br>\n<form action=\"\" method=\"POST\">\n  <p>food</p>\n  <input type=\"text\" placeholder=\"old name\" name=\"food_old_name\"/><br><br>\n  <input type=\"text\" placeholder=\"new name\" name=\"food_new_name\"/><br><br>\n  <input type=\"submit\" value=\"Modify\">\n</form>\n<br><br>\n<form action=\"\" method=\"POST\">\n  <p>frequents</p>\n  <input type=\"text\" placeholder=\"old drinker\" name=\"frequents_old_drinker\"/><br><br>\n  <input type=\"text\" placeholder=\"old bar\" name=\"frequents_old_bar\"/><br><br>\n  <input type=\"text\" placeholder=\"new drinker\" name=\"frequents_new_drinker\"/><br><br>\n  <input type=\"text\" placeholder=\"new bar\" name=\"frequents_new_bar\"/><br><br>\n  <input type=\"submit\" value=\"Modify\">\n</form>\n<br><br>\n<form action=\"\" method=\"POST\">\n    <p>generates</p>\n    <input type=\"text\" placeholder=\"old transactionID\" name=\"generates_old_transactionID\"/><br><br>\n    <input type=\"text\" placeholder=\"old bar\" name=\"generates_old_bar\"/><br><br>\n    <input type=\"text\" placeholder=\"old drinker\" name=\"generates_old_drinker\"/><br><br>\n    <input type=\"text\" placeholder=\"new transactionID\" name=\"generates_new_transactionID\"/><br><br>\n    <input type=\"text\" placeholder=\"new bar\" name=\"generates_new_bar\"/><br><br>\n    <input type=\"text\" placeholder=\"new drinker\" name=\"generates_new_drinker\"/><br><br>\n    <input type=\"submit\" value=\"Modify\">\n  </form>\n  <br><br>\n<form action=\"\" method=\"POST\">\n    <p>item</p>\n    <input type=\"text\" placeholder=\"old name\" name=\"item_old_name\"/><br><br>\n    <input type=\"text\" placeholder=\"new name\" name=\"item_new_name\"/><br><br>\n    <input type=\"submit\" value=\"Modify\">\n  </form>\n<br><br>\n<form action=\"\" method=\"POST\">\n    <p>likes</p>\n    <input type=\"text\" placeholder=\"old drinker\" name=\"likes_old_drinker\"/><br><br>\n    <input type=\"text\" placeholder=\"old beer\" name=\"likes_old_beer\"/><br><br>\n    <input type=\"text\" placeholder=\"new drinker\" name=\"likes_new_drinker\"/><br><br>\n    <input type=\"text\" placeholder=\"new beer\" name=\"likes_new_beer\"/><br><br>\n    <input type=\"submit\" value=\"Modify\">\n  </form>\n  <br><br>\n<form action=\"\" method=\"POST\">\n    <p>orders</p>\n    <input type=\"text\" placeholder=\"old transactionID\" name=\"orders_old_transactionID\"/><br><br>\n    <input type=\"text\" placeholder=\"old bar\" name=\"orders_old_bar\"/><br><br>\n    <input type=\"text\" placeholder=\"old item\" name=\"orders_old_item\"/><br><br>\n    <input type=\"text\" placeholder=\"new transactionID\" name=\"orders_new_transactionID\"/><br><br>\n    <input type=\"text\" placeholder=\"new bar\" name=\"orders_new_bar\"/><br><br>\n    <input type=\"text\" placeholder=\"new item\" name=\"orders_new_item\"/><br><br>\n    <input type=\"submit\" value=\"Modify\">\n  </form>\n  <br><br>\n<form action=\"\" method=\"POST\">\n    <p>sellsResult</p>\n    <input type=\"text\" placeholder=\"old bar\" name=\"sellsResult_old_bar\"/><br><br>\n    <input type=\"text\" placeholder=\"old item\" name=\"sellsResult_old_item\"/><br><br>\n    <input type=\"text\" placeholder=\"new bar\" name=\"sellsResult_new_bar\"/><br><br>\n    <input type=\"text\" placeholder=\"new item\" name=\"sellsResult_new_item\"/><br><br>\n    <input type=\"text\" placeholder=\"new price\" name=\"sellsResult_new_price\"/><br><br>\n    <input type=\"submit\" value=\"Modify\">\n  </form>\n  <br><br>\n<form action=\"\" method=\"POST\">\n  <p>transactions</p>\n  <input type=\"text\" placeholder=\"old bar\" name=\"transactions_old_bar\"/><br><br>\n  <input type=\"text\" placeholder=\"old transactionID\" name=\"transactions_old_transactionID\"/><br><br>\n  <input type=\"text\" placeholder=\"new bar\" name=\"transactions_new_bar\"/><br><br>\n  <input type=\"text\" placeholder=\"new transactionID\" name=\"transactions_new_transactionID\"/><br><br>\n  <input type=\"text\" placeholder=\"new date\" name=\"transactions_new_date\"/><br><br>\n  <input type=\"text\" placeholder=\"new time\" name=\"transactions_new_time\"/><br><br>\n  <input type=\"text\" placeholder=\"new bill\" name=\"transactions_new_bill\"/><br><br>\n  <input type=\"text\" placeholder=\"new tax\" name=\"transactions_new_tax\"/><br><br>\n  <input type=\"text\" placeholder=\"new tip\" name=\"transactions_new_tip\"/><br><br>\n  <input type=\"text\" placeholder=\"new totalPrice\" name=\"transactions_new_totalPrice\"/><br><br>\n  <input type=\"submit\" value=\"Modify\">\n</form>\n<br><br>"

/***/ }),

/***/ "./src/app/modification/modification.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modification/modification.component.ts ***!
  \********************************************************/
/*! exports provided: ModificationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModificationComponent", function() { return ModificationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _modification_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../modification.service */ "./src/app/modification.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModificationComponent = /** @class */ (function () {
    function ModificationComponent(modificationService) {
        this.modificationService = modificationService;
    }
    ModificationComponent.prototype.ngOnInit = function () {
    };
    ModificationComponent.prototype.getModification = function () {
        this.modificationService.getModification().subscribe();
    };
    ModificationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modification',
            template: __webpack_require__(/*! ./modification.component.html */ "./src/app/modification/modification.component.html"),
            styles: [__webpack_require__(/*! ./modification.component.css */ "./src/app/modification/modification.component.css")]
        }),
        __metadata("design:paramtypes", [_modification_service__WEBPACK_IMPORTED_MODULE_1__["ModificationService"]])
    ], ModificationComponent);
    return ModificationComponent;
}());



/***/ }),

/***/ "./src/app/welcome/welcome.component.css":
/*!***********************************************!*\
  !*** ./src/app/welcome/welcome.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/welcome/welcome.component.html":
/*!************************************************!*\
  !*** ./src/app/welcome/welcome.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"jumbotron jumbotron-fluid\">\n  <div class=\"container\">\n    <h1 class=\"display-4\">Welcome to the Bar Page</h1>\n    <p class=\"lead\">Click on a bar to view bar details</p>\n  </div>\n</div>\n\n<div class=\"container\">\n  <p-table [value]=\"bars\" [paginator]=\"true\" [rows]=\"50\">\n    <ng-template pTemplate=\"header\">\n      <tr>\n        <th>Name</th>\n        <th>Address</th>\n        <th>City</th>\n        <th>State</th>\n        <th>License</th>\n        <th>Opening Time</th>\n        <th>Closing Time</th>\n      </tr>\n    </ng-template>\n    <ng-template pTemplate=\"body\" let-bar>\n      <tr>\n        <td>\n          <a routerLink=\"/bars/{{ bar.name }}\">{{ bar.name }}\n          </a>\n        </td>\n        <td>{{ bar.addr }}</td>\n        <td>{{ bar.city }}</td>\n        <td>{{ bar.state }}</td>\n        <td>{{ bar.license }}</td>\n        <td>{{ bar.openingTime }}</td>\n        <td>{{ bar.closingTime }}</td>\n      </tr>\n    </ng-template>\n  </p-table>\n</div>\n\n<br><br><br>"

/***/ }),

/***/ "./src/app/welcome/welcome.component.ts":
/*!**********************************************!*\
  !*** ./src/app/welcome/welcome.component.ts ***!
  \**********************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _bars_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../bars.service */ "./src/app/bars.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(barService) {
        this.barService = barService;
        this.getBars();
    }
    WelcomeComponent.prototype.ngOnInit = function () { };
    WelcomeComponent.prototype.getBars = function () {
        var _this = this;
        this.barService.getBars().subscribe(function (data) {
            _this.bars = data;
        }, function (error) {
            alert('Could not retrieve the list of bars.');
        });
    };
    WelcomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! ./welcome.component.html */ "./src/app/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/welcome/welcome.component.css")]
        }),
        __metadata("design:paramtypes", [_bars_service__WEBPACK_IMPORTED_MODULE_1__["BarsService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\kwo\Desktop\database project\bar-beer-drinker-ui\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map