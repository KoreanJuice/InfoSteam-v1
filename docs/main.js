(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "/pWa":
/*!********************************************!*\
  !*** ./src/app/shared/modules/material.ts ***!
  \********************************************/
/*! exports provided: material */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "material", function() { return material; });
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");










const material = [
    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_0__["MatExpansionModule"],
    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_1__["MatFormFieldModule"],
    _angular_material_select__WEBPACK_IMPORTED_MODULE_2__["MatSelectModule"],
    _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
    _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
    _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
    _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
    _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
    _angular_material_divider__WEBPACK_IMPORTED_MODULE_8__["MatDividerModule"],
    _angular_material_card__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
];


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marcos\Documents\www\InfoSteam\src\main.ts */"zUnb");


/***/ }),

/***/ "1LmZ":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_helpers_user_reg_exp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/user-reg-exp */ "QmdZ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_steam_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/steam-user.service */ "sBxo");
/* harmony import */ var _components_game_search_game_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/game-search/game-search.component */ "Tdce");
/* harmony import */ var _components_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/user-search/user-search.component */ "hGRI");
/* harmony import */ var _components_recommended_games_recommended_games_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/recommended-games/recommended-games.component */ "A5G5");









class HomeComponent {
    constructor(router, steamUser) {
        this.router = router;
        this.steamUser = steamUser;
    }
    ngOnInit() {
    }
    gameSearch(event) {
        this.appid = parseInt(event, 10);
        this.router.navigate([`/game/${this.appid}`]);
    }
    userSearch(event) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (Object(_shared_helpers_user_reg_exp__WEBPACK_IMPORTED_MODULE_2__["notIdUserRegExp"])(event)) {
                const { response } = yield this.steamUser.resolveVanityURL(event);
                if (response.success === 1) {
                    this.steamid = response.steamid;
                }
                else {
                    // TODO: consider send params to "page not found" to show error
                    this.router.navigate([`User_Not_Found`]);
                }
            }
            this.router.navigate([`/user/${this.steamid}`]);
        });
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_steam_user_service__WEBPACK_IMPORTED_MODULE_4__["SteamUserService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, consts: [[1, "page-container"], ["src", "../../../assets/Icon-InfoSteam.png", "alt", "InfoSteam icon"], [3, "gameSearch"], [3, "userSearch"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Welcome to InfoSteam!");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "app-game-search", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gameSearch", function HomeComponent_Template_app_game_search_gameSearch_4_listener($event) { return ctx.gameSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "app-user-search", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("userSearch", function HomeComponent_Template_app_user_search_userSearch_5_listener($event) { return ctx.userSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](6, "app-recommended-games");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } }, directives: [_components_game_search_game_search_component__WEBPACK_IMPORTED_MODULE_5__["GameSearchComponent"], _components_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_6__["UserSearchComponent"], _components_recommended_games_recommended_games_component__WEBPACK_IMPORTED_MODULE_7__["RecommendedGamesComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQSIsImZpbGUiOiJob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIC0tLS0tLS0tLVxyXG4gICAgVkFSSUFCTEVTXHJcbiAgICAtLS0tLS0tLS1cclxuKi9cclxuXHJcbiRoZWFkZXItYmctY29sb3I6ICMyMTIxMjE7XHJcbiRzaWRlbmF2LWJnLWNvbG9yOiAjMjUyNTI1O1xyXG4kYm9keS1iZy1jb2xvcjogIzMwMzAzMDtcclxuJGV4dHJhLWNvbG9yOiAjNGY0ZjRmO1xyXG4kdGV4dC1jb2xvcjogI2ZmZjtcclxuJGVycm9yLWNvbG9yOiAjZjQ0MzM2O1xyXG4kcGVyZmVjdC1jb2xvcjogI2ZlY2MwOTtcclxuJHN1Y2Nlc3MtY29sb3I6ICNhNWM5M2E7XHJcbiRncmVhdC1jb2xvcjogI2RhOTUyZjtcclxuJGluZm8tY29sb3I6ICM1NWFlY2U7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _shared_services_steam_user_service__WEBPACK_IMPORTED_MODULE_4__["SteamUserService"] }]; }, null); })();


/***/ }),

/***/ "5e9R":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/steam-news.service.ts ***!
  \*******************************************************/
/*! exports provided: SteamNewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteamNewsService", function() { return SteamNewsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config.json */ "fcXd");
var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config.json */ "fcXd", 1);
/* harmony import */ var _abstract_services_abstract_steam_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-services/abstract-steam-news-service */ "6oTa");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class SteamNewsService extends _abstract_services_abstract_steam_news_service__WEBPACK_IMPORTED_MODULE_2__["AbstractSteamNewsService"] {
    constructor(http) {
        super();
        this.http = http;
        this.INTERFACE = 'ISteamNews';
    }
    /**
     * Get the news for the specified app.
     * @param appid AppID to retrieve news for
     * @param maxlength Max length for the content to return, if this is 0 the full content is returned, if it's less then a blurb is generated to fit.
     * @param count number of posts to retrieve (default 20)
     * @param enddate Retrieve posts earlier than this date (unix epoch timestamp)
     * @param feeds Comma-seperated list of feed names to return news for
     */
    getNewsForApp(appid, maxlength = 0, count = 1, enddate, feeds) {
        let urlParams = '';
        if (maxlength) {
            urlParams += `&maxlength=${maxlength}`;
        }
        if (count) {
            urlParams += `&count=${count}`;
        }
        if (enddate) {
            urlParams += `&enddate=${enddate}`;
        }
        if (feeds) {
            urlParams += `&feeds=${feeds}`;
        }
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_1__["STEAM_API_URL"]}/${this.INTERFACE}/GetNewsForApp/v2/?appid=${appid}${urlParams}`)
            .toPromise();
    }
}
SteamNewsService.ɵfac = function SteamNewsService_Factory(t) { return new (t || SteamNewsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SteamNewsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SteamNewsService, factory: SteamNewsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SteamNewsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "6oTa":
/*!*************************************************************************!*\
  !*** ./src/app/shared/abstract-services/abstract-steam-news-service.ts ***!
  \*************************************************************************/
/*! exports provided: AbstractSteamNewsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSteamNewsService", function() { return AbstractSteamNewsService; });
class AbstractSteamNewsService {
}


/***/ }),

/***/ "7yAP":
/*!**********************************************!*\
  !*** ./src/app/pages/news/news.component.ts ***!
  \**********************************************/
/*! exports provided: NewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsComponent", function() { return NewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/steam-apps.service */ "W7QX");
/* harmony import */ var _components_game_search_game_search_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../components/game-search/game-search.component */ "Tdce");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_game_news_game_news_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/game-news/game-news.component */ "NMsC");







function NewsComponent_h2_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](2, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](2, 1, ctx_r0.gameName));
} }
class NewsComponent {
    constructor(steamApps) {
        this.steamApps = steamApps;
    }
    ngOnInit() {
        this.nNews = 5;
    }
    gameSearch(event) {
        this.appid = parseInt(event, 10);
        this.getNameApp();
    }
    getNameApp() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { applist: { apps } } = yield this.steamApps.getAppList();
            const { name } = apps.find((app) => app.appid === this.appid);
            this.gameName = name;
        });
    }
}
NewsComponent.ɵfac = function NewsComponent_Factory(t) { return new (t || NewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_2__["SteamAppsService"])); };
NewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: NewsComponent, selectors: [["app-news"]], decls: 4, vars: 3, consts: [[1, "page-container"], [3, "gameSearch"], [4, "ngIf"], [3, "appid", "nNews"]], template: function NewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "app-game-search", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("gameSearch", function NewsComponent_Template_app_game_search_gameSearch_1_listener($event) { return ctx.gameSearch($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, NewsComponent_h2_2_Template, 3, 3, "h2", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "app-game-news", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gameName);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appid", ctx.appid)("nNews", ctx.nNews);
    } }, directives: [_components_game_search_game_search_component__WEBPACK_IMPORTED_MODULE_3__["GameSearchComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _components_game_news_game_news_component__WEBPACK_IMPORTED_MODULE_5__["GameNewsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["UpperCasePipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJuZXdzLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](NewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-news',
                templateUrl: './news.component.html',
                styleUrls: ['./news.component.scss']
            }]
    }], function () { return [{ type: _shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_2__["SteamAppsService"] }]; }, null); })();


/***/ }),

/***/ "A5G5":
/*!*****************************************************************************!*\
  !*** ./src/app/components/recommended-games/recommended-games.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecommendedGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecommendedGamesComponent", function() { return RecommendedGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_helpers_get_game_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/get-game-data */ "upGS");
/* harmony import */ var _shared_services_steam_user_stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/steam-user-stats.service */ "j7YI");
/* harmony import */ var _shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/steam-apps.service */ "W7QX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");









function RecommendedGamesComponent_div_1_mat_card_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 19);
} if (rf & 2) {
    const gameData_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", gameData_r4.gameImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", gameData_r4.gameName, " image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", gameData_r4.gameName);
} }
function RecommendedGamesComponent_div_1_mat_card_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 20);
} }
function RecommendedGamesComponent_div_1_mat_card_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameData_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gameData_r4.game.availableGameStats.achievements.length, " ");
} }
function RecommendedGamesComponent_div_1_mat_card_1_div_18_img_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 25);
} if (rf & 2) {
    const achievement_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", achievement_r13.icon, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("alt", achievement_r13.displayName);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", achievement_r13.displayName);
} }
function RecommendedGamesComponent_div_1_mat_card_1_div_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendedGamesComponent_div_1_mat_card_1_div_18_img_1_Template, 1, 3, "img", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameData_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", gameData_r4.game.availableGameStats.achievements);
} }
const _c0 = function (a1) { return ["/game/", a1]; };
function RecommendedGamesComponent_div_1_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RecommendedGamesComponent_div_1_mat_card_1_img_4_Template, 1, 3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RecommendedGamesComponent_div_1_mat_card_1_ng_template_5_Template, 1, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " InfoSteam page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RecommendedGamesComponent_div_1_mat_card_1_div_17_Template, 3, 1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, RecommendedGamesComponent_div_1_mat_card_1_div_18_Template, 2, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const gameData_r4 = ctx.$implicit;
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", gameData_r4.gameImage)("ngIfElse", _r6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://store.steampowered.com/app/", gameData_r4.appid, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gameData_r4.gameName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](8, _c0, gameData_r4.appid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", gameData_r4.player_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", gameData_r4.game.availableGameStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", gameData_r4.game.availableGameStats);
} }
function RecommendedGamesComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendedGamesComponent_div_1_mat_card_1_Template, 19, 10, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.games);
} }
function RecommendedGamesComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "We could not fetch any game right now.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class RecommendedGamesComponent {
    constructor(steamUserStats, steamApps) {
        this.steamUserStats = steamUserStats;
        this.steamApps = steamApps;
        this.recommendedGames = [524220, 237930, 312750, 987720];
        this.games = [];
    }
    ngOnInit() {
        this.getGamesData();
    }
    getGamesData() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            for (const game of this.recommendedGames) {
                const gameData = yield Object(_shared_helpers_get_game_data__WEBPACK_IMPORTED_MODULE_2__["getGameData"])(game, this.steamUserStats, this.steamApps);
                this.games.push(gameData);
            }
        });
    }
}
RecommendedGamesComponent.ɵfac = function RecommendedGamesComponent_Factory(t) { return new (t || RecommendedGamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_steam_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["SteamUserStatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_4__["SteamAppsService"])); };
RecommendedGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecommendedGamesComponent, selectors: [["app-recommended-games"]], decls: 4, vars: 2, consts: [[1, "component-container"], [4, "ngIf", "ngIfElse"], ["gameEmpty", ""], ["class", "game-card", 4, "ngFor", "ngForOf"], [1, "game-card"], [1, "card-content"], [1, "data"], [1, "game-image"], ["class", "header-img", 3, "src", "alt", "title", 4, "ngIf", "ngIfElse"], ["imageEmpty", ""], [1, "game-desc"], [1, "desc-link"], ["target", "_blank", 1, "link", "infoColor", 3, "href"], [1, "fas", "fa-external-link-alt", "infoColor"], [1, "innerLink", "link", "infoColor", 3, "routerLink"], ["title", "Online users playing the game", 1, "desc-players", "successColor"], [1, "fas", "fa-users", "successColor"], ["class", "desc-achievements perfectColor", "title", "Total game achievements", 4, "ngIf"], ["class", "achievements", 4, "ngIf"], [1, "header-img", 3, "src", "alt", "title"], ["src", "../../../assets/image-not-found.jpg", "alt", "image not found", "title", "image not found", 1, "header-img"], ["title", "Total game achievements", 1, "desc-achievements", "perfectColor"], [1, "fas", "fa-trophy", "perfectColor"], [1, "achievements"], [3, "src", "alt", "title", 4, "ngFor", "ngForOf"], [3, "src", "alt", "title"], [1, "game-empty", "game-card"]], template: function RecommendedGamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecommendedGamesComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecommendedGamesComponent_ng_template_2_Template, 3, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.games.length > 0)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterLinkWithHref"]], styles: [".game-card[_ngcontent-%COMP%] {\n  margin: 1em 0;\n}\n.card-content[_ngcontent-%COMP%]   .game-image[_ngcontent-%COMP%] {\n  display: flex;\n}\n.card-content[_ngcontent-%COMP%]   .game-image[_ngcontent-%COMP%]   .header-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 1em auto;\n  font-size: 1.1em;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%] {\n  width: 60%;\n  text-align: left;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 0.4em;\n  vertical-align: super;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%]   .innerLink[_ngcontent-%COMP%] {\n  display: none;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-players[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-achievements[_ngcontent-%COMP%] {\n  width: 20%;\n  text-align: right;\n}\n.card-content[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%] {\n  display: flex;\n  width: 100%;\n  overflow-y: auto;\n}\n.card-content[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 0.5em;\n  width: 64px;\n}\n.game-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 15px;\n}\n\n@media only screen and (min-width: 768px) {\n  .component-container[_ngcontent-%COMP%] {\n    margin: 1em auto;\n    width: 80%;\n  }\n  .component-container[_ngcontent-%COMP%]   .game-card[_ngcontent-%COMP%] {\n    margin: 1em auto;\n  }\n\n  .card-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    margin-bottom: 1em;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-image[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%] {\n    display: flex;\n    width: 60%;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    margin: auto 0 auto 2em;\n    text-align: left;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%]   .innerLink[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-players[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-achievements[_ngcontent-%COMP%] {\n    margin: auto;\n    text-align: center;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n    overflow-y: auto;\n    align-self: flex-end;\n    margin-top: 1em;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .achievements[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    margin-right: 0.5em;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .component-container[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .component-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .game-image[_ngcontent-%COMP%] {\n    width: 347px;\n  }\n  .component-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .game-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 347px;\n  }\n  .component-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .component-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxccmVjb21tZW5kZWQtZ2FtZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQTtBQ0VBOzs7O0NBQUE7QUFLQTtFQUFhLGFBQUE7QUFLYjtBQUZJO0VBQ0ksYUFBQTtBQUtSO0FBSlE7RUFBYyxXQUFBO0FBT3RCO0FBSkk7RUFDSSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtBQU1SO0FBSlE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7QUFNWjtBQUpZO0VBQ0kscUJBQUE7QUFNaEI7QUFMZ0I7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBT3BCO0FBSlk7RUFBYSxhQUFBO0FBT3pCO0FBSlE7O0VBRUksVUFBQTtFQUNBLGlCQUFBO0FBTVo7QUFGSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7QUFJUjtBQUhRO0VBQ0ksbUJBQUE7RUFDQSxXQUFBO0FBS1o7QUFBQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQUdKO0FBQUE7Ozs7Q0FBQTtBQU1BO0VBQ0k7SUFDSSxnQkFBQTtJQUNBLFVBQUE7RUFFTjtFQUFNO0lBQ0ksZ0JBQUE7RUFFVjs7RUFFRTtJQUNJLGFBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFDTjtFQUNNO0lBQ0ksYUFBQTtJQUNBLFdBQUE7SUFDQSxrQkFBQTtFQUNWO0VBQ1U7SUFBYyxVQUFBO0VBRXhCO0VBQVU7SUFDSSxhQUFBO0lBQ0EsVUFBQTtFQUVkO0VBQWM7SUFDSSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSw2QkFBQTtFQUVsQjtFQUFrQjtJQUNJLHVCQUFBO0lBQ0EsZ0JBQUE7RUFFdEI7RUFBa0I7SUFBYSxlQUFBO0VBRy9CO0VBQWM7O0lBRUksWUFBQTtJQUNBLGtCQUFBO0VBRWxCO0VBRVU7SUFDSSxhQUFBO0lBQ0EsV0FBQTtJQUNBLGdCQUFBO0lBQ0Esb0JBQUE7SUFDQSxlQUFBO0VBQWQ7RUFDYztJQUFNLG1CQUFBO0VBRXBCO0FBQ0Y7QUFHQTtFQUNJO0lBQ0ksVUFBQTtFQUROO0VBR1U7SUFDSSxZQUFBO0VBRGQ7RUFFYztJQUFNLFlBQUE7RUFDcEI7RUFDVTtJQUFhLGdCQUFBO0VBRXZCO0VBQ2tCO0lBQWEsbUJBQUE7RUFFL0I7QUFDRiIsImZpbGUiOiJyZWNvbW1lbmRlZC1nYW1lcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qXHJcbiAgICAtLS0tLS0tLS1cclxuICAgIFZBUklBQkxFU1xyXG4gICAgLS0tLS0tLS0tXHJcbiovXHJcblxyXG4kaGVhZGVyLWJnLWNvbG9yOiAjMjEyMTIxO1xyXG4kc2lkZW5hdi1iZy1jb2xvcjogIzI1MjUyNTtcclxuJGJvZHktYmctY29sb3I6ICMzMDMwMzA7XHJcbiRleHRyYS1jb2xvcjogIzRmNGY0ZjtcclxuJHRleHQtY29sb3I6ICNmZmY7XHJcbiRlcnJvci1jb2xvcjogI2Y0NDMzNjtcclxuJHBlcmZlY3QtY29sb3I6ICNmZWNjMDk7XHJcbiRzdWNjZXNzLWNvbG9yOiAjYTVjOTNhO1xyXG4kZ3JlYXQtY29sb3I6ICNkYTk1MmY7XHJcbiRpbmZvLWNvbG9yOiAjNTVhZWNlO1xyXG4iLCJAaW1wb3J0ICcuLi8uLi8uLi92YXJpYWJsZXMnO1xyXG5cclxuLypcclxuICAgIC0tLS0tLS0tLVxyXG4gICAgQ0FSRFxyXG4gICAgLS0tLS0tLS0tXHJcbiovXHJcbi5nYW1lLWNhcmQgeyBtYXJnaW46IDFlbSAwOyB9XHJcblxyXG4uY2FyZC1jb250ZW50IHtcclxuICAgIC5nYW1lLWltYWdlIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIC5oZWFkZXItaW1nIHsgd2lkdGg6IDEwMCU7IH1cclxuICAgIH1cclxuXHJcbiAgICAuZ2FtZS1kZXNjIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjFlbTtcclxuXHJcbiAgICAgICAgLmRlc2MtbGluayB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAuZmFzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuaW5uZXJMaW5rIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLmRlc2MtcGxheWVycyxcclxuICAgICAgICAuZGVzYy1hY2hpZXZlbWVudHMge1xyXG4gICAgICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFjaGlldmVtZW50cyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgIGltZyB7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogLjVlbTtcclxuICAgICAgICAgICAgd2lkdGg6IDY0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZ2FtZS1lbXB0eSB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbn1cclxuXHJcbi8qXHJcbiAgICAtLS0tLS0tLS1cclxuICAgIFJFU1BPTlNJVkVcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbXBvbmVudC1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbjogMWVtIGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuXHJcbiAgICAgICAgLmdhbWUtY2FyZCB7IFxyXG4gICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICBcclxuICAgICAgICAuZGF0YSB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcblxyXG4gICAgICAgICAgICAuZ2FtZS1pbWFnZSB7IHdpZHRoOiA0MCU7IH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5nYW1lLWRlc2Mge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA2MCU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmRlc2MtbGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogYXV0byAwIGF1dG8gMmVtO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAuaW5uZXJMaW5rIHsgZGlzcGxheTogaW5saW5lOyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRlc2MtcGxheWVycyxcclxuICAgICAgICAgICAgICAgIC5kZXNjLWFjaGlldmVtZW50cyB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLmFjaGlldmVtZW50cyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgICAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgICAgICAgICAgICAgICBpbWcgeyBtYXJnaW4tcmlnaHQ6IDAuNWVtOyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY29tcG9uZW50LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgLmdhbWUtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM0N3B4O1xyXG4gICAgICAgICAgICAgICAgaW1nIHsgd2lkdGg6IDM0N3B4OyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmdhbWUtZGVzYyB7IGZvbnQtc2l6ZTogMS4yZW07IH1cclxuICAgICAgICAgICAgLmRhdGEge1xyXG4gICAgICAgICAgICAgICAgLmdhbWUtZGVzYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmRlc2MtbGluayB7IGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecommendedGamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-recommended-games',
                templateUrl: './recommended-games.component.html',
                styleUrls: ['./recommended-games.component.scss']
            }]
    }], function () { return [{ type: _shared_services_steam_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["SteamUserStatsService"] }, { type: _shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_4__["SteamAppsService"] }]; }, null); })();


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "BgzB":
/*!******************************************************************!*\
  !*** ./src/app/pages/page-not-found/page-not-found.component.ts ***!
  \******************************************************************/
/*! exports provided: PageNotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function() { return PageNotFoundComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



const _c0 = function () { return [""]; };
class PageNotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
}
PageNotFoundComponent.ɵfac = function PageNotFoundComponent_Factory(t) { return new (t || PageNotFoundComponent)(); };
PageNotFoundComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PageNotFoundComponent, selectors: [["app-page-not-found"]], decls: 9, vars: 2, consts: [[1, "page-container"], [1, "error"], [1, "btnBack", 3, "routerLink"]], template: function PageNotFoundComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "ERROR 404!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Page not found.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Back to home page! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "o((>\u03C9< ))o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](1, _c0));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLink"]], styles: [".error[_ngcontent-%COMP%] {\n  color: #f44336;\n}\nh1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.btnBack[_ngcontent-%COMP%] {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 2em auto;\n  padding: 1em;\n  background-color: #252525;\n  border-radius: 4px;\n}\n.btnBack[_ngcontent-%COMP%]:hover {\n  background-color: #4f4f4f;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxccGFnZS1ub3QtZm91bmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQTtBQ0VBO0VBQ0ksY0RRVTtBQ0pkO0FBREE7O0VBRUksZ0JBQUE7QUFJSjtBQURBO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJEUmU7RUNTZixrQkFBQTtBQUlKO0FBRkk7RUFDSSx5QkRWTTtBQ2NkIiwiZmlsZSI6InBhZ2Utbm90LWZvdW5kLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIC0tLS0tLS0tLVxyXG4gICAgVkFSSUFCTEVTXHJcbiAgICAtLS0tLS0tLS1cclxuKi9cclxuXHJcbiRoZWFkZXItYmctY29sb3I6ICMyMTIxMjE7XHJcbiRzaWRlbmF2LWJnLWNvbG9yOiAjMjUyNTI1O1xyXG4kYm9keS1iZy1jb2xvcjogIzMwMzAzMDtcclxuJGV4dHJhLWNvbG9yOiAjNGY0ZjRmO1xyXG4kdGV4dC1jb2xvcjogI2ZmZjtcclxuJGVycm9yLWNvbG9yOiAjZjQ0MzM2O1xyXG4kcGVyZmVjdC1jb2xvcjogI2ZlY2MwOTtcclxuJHN1Y2Nlc3MtY29sb3I6ICNhNWM5M2E7XHJcbiRncmVhdC1jb2xvcjogI2RhOTUyZjtcclxuJGluZm8tY29sb3I6ICM1NWFlY2U7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcyc7XHJcblxyXG4uZXJyb3Ige1xyXG4gICAgY29sb3I6ICRlcnJvci1jb2xvcjtcclxufVxyXG5cclxuaDEsXHJcbmgyIHtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi5idG5CYWNrIHtcclxuICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgIG1hcmdpbjogMmVtIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxZW07XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkc2lkZW5hdi1iZy1jb2xvcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuXHJcbiAgICAmOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZXh0cmEtY29sb3I7XHJcbiAgICB9XHJcbn1cclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PageNotFoundComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-page-not-found',
                templateUrl: './page-not-found.component.html',
                styleUrls: ['./page-not-found.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "KSFr":
/*!************************************************!*\
  !*** ./src/app/shared/pipes/safe-html.pipe.ts ***!
  \************************************************/
/*! exports provided: SafeHtmlPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SafeHtmlPipe", function() { return SafeHtmlPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");



class SafeHtmlPipe {
    constructor(sanitizer) {
        this.sanitizer = sanitizer;
    }
    transform(html) {
        return this.sanitizer.bypassSecurityTrustHtml(html);
    }
}
SafeHtmlPipe.ɵfac = function SafeHtmlPipe_Factory(t) { return new (t || SafeHtmlPipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"])); };
SafeHtmlPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "safeHtml", type: SafeHtmlPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafeHtmlPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'safeHtml'
            }]
    }], function () { return [{ type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }]; }, null); })();


/***/ }),

/***/ "NMsC":
/*!*************************************************************!*\
  !*** ./src/app/components/game-news/game-news.component.ts ***!
  \*************************************************************/
/*! exports provided: GameNewsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameNewsComponent", function() { return GameNewsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_services_steam_news_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/services/steam-news.service */ "5e9R");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/pipes/safe-html.pipe */ "KSFr");







function GameNewsComponent_div_1_mat_card_1_div_9_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](tag_r7);
} }
function GameNewsComponent_div_1_mat_card_1_div_9_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Tags: ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, GameNewsComponent_div_1_mat_card_1_div_9_div_3_Template, 2, 1, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", news_r4.tags);
} }
function GameNewsComponent_div_1_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-title", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Author:");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](9, GameNewsComponent_div_1_mat_card_1_div_9_Template, 4, 1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](10, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](11, "safeHtml");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " Follow the news ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const news_r4 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 5, news_r4.title));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](news_r4.author);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", news_r4.tags);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("innerHTML", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](11, 7, news_r4.contents), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeHtml"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", news_r4.url, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
} }
function GameNewsComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameNewsComponent_div_1_mat_card_1_Template, 16, 9, "mat-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.gameNews.appnews.newsitems);
} }
function GameNewsComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "We could not fetch any news for game right now.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
class GameNewsComponent {
    constructor(steamNews) {
        this.steamNews = steamNews;
    }
    ngOnChanges() {
        if (this.appid) {
            this.getGameNews();
        }
    }
    getGameNews() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.gameNews = yield this.steamNews.getNewsForApp(this.appid, 0, this.nNews);
        });
    }
}
GameNewsComponent.ɵfac = function GameNewsComponent_Factory(t) { return new (t || GameNewsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_steam_news_service__WEBPACK_IMPORTED_MODULE_2__["SteamNewsService"])); };
GameNewsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameNewsComponent, selectors: [["app-game-news"]], inputs: { nNews: "nNews", appid: "appid" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 4, vars: 2, consts: [[1, "component-container"], [4, "ngIf", "ngIfElse"], ["newsEmpty", ""], ["class", "news-card", 4, "ngFor", "ngForOf"], [1, "news-card"], [1, "title"], [1, "card-content"], [1, "author"], [1, "thin"], ["class", "tags", 4, "ngIf"], [1, "content", 3, "innerHTML"], [1, "footer"], ["target", "_blank", 1, "link", "infoColor", 3, "href"], [1, "fas", "fa-external-link-alt", "infoColor"], [1, "tags"], ["class", "tag", 4, "ngFor", "ngForOf"], [1, "tag"], [1, "news-empty", "news-card"]], template: function GameNewsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameNewsComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, GameNewsComponent_ng_template_2_Template, 4, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gameNews)("ngIfElse", _r1);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardContent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["UpperCasePipe"], _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_5__["SafeHtmlPipe"]], styles: ["/*\n    ---------\n    VARIABLES\n    ---------\n*/\n/*\n    ---------\n    CARD\n    ---------\n*/\n.news-card {\n  margin: 1em 0;\n}\n.news-card .title {\n  text-align: center;\n}\n.news-card .card-content .author {\n  margin: 1em 0;\n  font-weight: 500;\n  text-align: left;\n}\n.news-card .card-content .author .thin {\n  font-weight: 400;\n  margin-right: 5px;\n}\n.news-card .card-content .tags {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 1em 0;\n}\n.news-card .card-content .tags div:first-child {\n  padding: 0.5em 0;\n}\n.news-card .card-content .tags .tag {\n  width: -webkit-fit-content;\n  width: -moz-fit-content;\n  width: fit-content;\n  margin: 0.3em;\n  padding: 0.5em;\n  border-radius: 15px;\n  background-color: #4f4f4f;\n  cursor: default;\n}\n.news-card .card-content .content {\n  margin: 0 0 1em;\n  padding: 1em;\n  text-align: left;\n  line-height: 1.7;\n  border-radius: 5px;\n  background-color: #4f4f4f;\n  overflow-y: auto;\n}\n.news-card .card-content .content img {\n  width: 100%;\n  height: auto;\n}\n.news-card .card-content .content a {\n  color: #55aece;\n  text-decoration: none;\n}\n.news-card .card-content .content a * {\n  color: #55aece;\n  text-decoration: none;\n}\n.news-card .card-content .footer {\n  text-align: center;\n}\n.news-card .card-content .footer .link {\n  text-decoration: none;\n}\n.news-card .card-content .footer .link .fas {\n  font-size: 0.5em;\n  vertical-align: super;\n}\n.news-empty {\n  text-align: center;\n  height: 15px;\n}\n/*\n    ---------\n    RESPONSIVE\n    ---------\n*/\n@media only screen and (min-width: 768px) {\n  .component-container {\n    margin: 1em auto;\n    width: 80%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .component-container {\n    width: 70%;\n  }\n  .component-container .news-card .card-content .content img {\n    width: 800px;\n    margin: 0px calc(50% - 400px);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcZ2FtZS1uZXdzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0NBQUE7QUNFQTs7OztDQUFBO0FBTUE7RUFDSSxhQUFBO0FBR0o7QUFESTtFQUNJLGtCQUFBO0FBR1I7QUFDUTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FBQ1o7QUFDWTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7QUFDaEI7QUFHUTtFQUNJLGFBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtBQURaO0FBR1k7RUFDSSxnQkFBQTtBQURoQjtBQUlZO0VBQ0ksMEJBQUE7RUFBQSx1QkFBQTtFQUFBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHlCRGhDRjtFQ2lDRSxlQUFBO0FBRmhCO0FBTVE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRDNDRTtFQzRDRixnQkFBQTtBQUpaO0FBS1k7RUFDSSxXQUFBO0VBQ0EsWUFBQTtBQUhoQjtBQUtZO0VBQ0ksY0Q1Q0g7RUM2Q0cscUJBQUE7QUFIaEI7QUFJZ0I7RUFDSSxjRC9DUDtFQ2dETyxxQkFBQTtBQUZwQjtBQU9RO0VBQ0ksa0JBQUE7QUFMWjtBQU9ZO0VBQ0kscUJBQUE7QUFMaEI7QUFPZ0I7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBTHBCO0FBWUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFUSjtBQVlBOzs7O0NBQUE7QUFNQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0VBVk47QUFDRjtBQWFBO0VBQ0k7SUFDSSxVQUFBO0VBWE47RUFla0I7SUFDSSxZQUFBO0lBQ0EsNkJBQUE7RUFidEI7QUFDRiIsImZpbGUiOiJnYW1lLW5ld3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBWQVJJQUJMRVNcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuJGhlYWRlci1iZy1jb2xvcjogIzIxMjEyMTtcclxuJHNpZGVuYXYtYmctY29sb3I6ICMyNTI1MjU7XHJcbiRib2R5LWJnLWNvbG9yOiAjMzAzMDMwO1xyXG4kZXh0cmEtY29sb3I6ICM0ZjRmNGY7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmO1xyXG4kZXJyb3ItY29sb3I6ICNmNDQzMzY7XHJcbiRwZXJmZWN0LWNvbG9yOiAjZmVjYzA5O1xyXG4kc3VjY2Vzcy1jb2xvcjogI2E1YzkzYTtcclxuJGdyZWF0LWNvbG9yOiAjZGE5NTJmO1xyXG4kaW5mby1jb2xvcjogIzU1YWVjZTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbi8qXHJcbiAgICAtLS0tLS0tLS1cclxuICAgIENBUkRcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuLm5ld3MtY2FyZCB7XHJcbiAgICBtYXJnaW46IDFlbSAwO1xyXG5cclxuICAgIC50aXRsZSB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIC5hdXRob3Ige1xyXG4gICAgICAgICAgICBtYXJnaW46IDFlbSAwO1xyXG4gICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5cclxuICAgICAgICAgICAgLnRoaW4ge1xyXG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAudGFncyB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgICAgICAgICAgbWFyZ2luOiAxZW0gMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGRpdjpmaXJzdC1jaGlsZCB7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAwLjVlbSAwO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAudGFnIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBmaXQtY29udGVudDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMC4zZW07XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuNWVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRleHRyYS1jb2xvcjtcclxuICAgICAgICAgICAgICAgIGN1cnNvcjogZGVmYXVsdFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMCAwIDFlbTtcclxuICAgICAgICAgICAgcGFkZGluZzogMWVtO1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS43O1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRleHRyYS1jb2xvcjtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGEge1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICRpbmZvLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgKiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRpbmZvLWNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICAuZm9vdGVyIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxuICAgICAgICAgICAgLmxpbmsge1xyXG4gICAgICAgICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAuZmFzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNWVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLm5ld3MtZW1wdHkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4vKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBSRVNQT05TSVZFXHJcbiAgICAtLS0tLS0tLS1cclxuKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb21wb25lbnQtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY29tcG9uZW50LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAubmV3cy1jYXJkIHtcclxuICAgICAgICAgICAgLmNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAuY29udGVudCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDgwMHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDBweCBjYWxjKDUwJSAtIDQwMHB4KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn1cclxuIl19 */"], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameNewsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-game-news',
                templateUrl: './game-news.component.html',
                styleUrls: ['./game-news.component.scss'],
                encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
            }]
    }], function () { return [{ type: _shared_services_steam_news_service__WEBPACK_IMPORTED_MODULE_2__["SteamNewsService"] }]; }, { nNews: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], appid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "OwCk":
/*!*******************************************************************!*\
  !*** ./src/app/components/recent-games/recent-games.component.ts ***!
  \*******************************************************************/
/*! exports provided: RecentGamesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecentGamesComponent", function() { return RecentGamesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_helpers_get_game_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/get-game-data */ "upGS");
/* harmony import */ var _shared_services_steam_user_stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/services/steam-user-stats.service */ "j7YI");
/* harmony import */ var _shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/steam-apps.service */ "W7QX");
/* harmony import */ var _shared_services_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/player.service */ "dY/6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_pipes_short_decimals_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipes/short-decimals.pipe */ "cJ7f");











function RecentGamesComponent_div_0_div_1_mat_card_1_img_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 24);
} if (rf & 2) {
    const game_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", game_r5.data.gameImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", game_r5.data.gameName, " header image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", game_r5.data.gameName);
} }
function RecentGamesComponent_div_0_div_1_mat_card_1_ng_template_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 25);
} }
function RecentGamesComponent_div_0_div_1_mat_card_1_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "i", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", game_r5.data.game.availableGameStats.achievements.length, " ");
} }
const _c0 = function (a1) { return ["/game/", a1]; };
function RecentGamesComponent_div_0_div_1_mat_card_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "mat-card-content", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, RecentGamesComponent_div_0_div_1_mat_card_1_img_4_Template, 1, 3, "img", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, RecentGamesComponent_div_0_div_1_mat_card_1_ng_template_5_Template, 1, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " InfoSteam page ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](16, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](17, RecentGamesComponent_div_0_div_1_mat_card_1_div_17_Template, 3, 1, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](20, "shortDecimals");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " Last 2 weeks ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](26, "shortDecimals");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "p", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, " Total ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const game_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", game_r5.data.gameImage)("ngIfElse", _r7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://store.steampowered.com/app/", game_r5.data.appid, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", game_r5.data.gameName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c0, game_r5.data.appid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", game_r5.data.player_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", game_r5.data.game.availableGameStats);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" + ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](20, 9, game_r5.recentData.playtime_2weeks / 60), " h ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](26, 11, game_r5.recentData.playtime_forever / 60), " h ");
} }
function RecentGamesComponent_div_0_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecentGamesComponent_div_0_div_1_mat_card_1_Template, 30, 15, "mat-card", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r1.games);
} }
function RecentGamesComponent_div_0_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "mat-card", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "This user haven't play any game in two weeks.");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function RecentGamesComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, RecentGamesComponent_div_0_div_1_Template, 2, 1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, RecentGamesComponent_div_0_ng_template_2_Template, 3, 0, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](3);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.games.length > 0)("ngIfElse", _r2);
} }
class RecentGamesComponent {
    constructor(steamUserStats, steamApps, player) {
        this.steamUserStats = steamUserStats;
        this.steamApps = steamApps;
        this.player = player;
    }
    ngOnChanges() {
        this.getRecentlyPlayedGames(this.steamid, this.nGames);
    }
    getRecentlyPlayedGames(steamid, nGames) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const { response } = yield this.player.getRecentlyPlayedGames(steamid, nGames);
            const { games } = response;
            const recentGames = [];
            if (response.total_count > 0) {
                for (const game of games) {
                    const gameData = yield Object(_shared_helpers_get_game_data__WEBPACK_IMPORTED_MODULE_2__["getGameData"])(game.appid, this.steamUserStats, this.steamApps);
                    recentGames.push({
                        recentData: game,
                        data: gameData,
                    });
                }
            }
            this.games = recentGames;
        });
    }
}
RecentGamesComponent.ɵfac = function RecentGamesComponent_Factory(t) { return new (t || RecentGamesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_steam_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["SteamUserStatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_4__["SteamAppsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"])); };
RecentGamesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: RecentGamesComponent, selectors: [["app-recent-games"]], inputs: { steamid: "steamid", nGames: "nGames" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]], decls: 1, vars: 1, consts: [["class", "component-container", 4, "ngIf"], [1, "component-container"], [4, "ngIf", "ngIfElse"], ["gameEmpty", ""], ["class", "game-card", 4, "ngFor", "ngForOf"], [1, "game-card"], [1, "card-content"], [1, "data"], [1, "game-image"], ["class", "header-img", 3, "src", "alt", "title", 4, "ngIf", "ngIfElse"], ["imageEmpty", ""], [1, "game-desc"], [1, "desc-link"], ["target", "_blank", 1, "link", "infoColor", 3, "href"], [1, "fas", "fa-external-link-alt", "infoColor"], [1, "link", "infoColor", 3, "routerLink"], ["title", "Online users playing the game", 1, "desc-players", "successColor"], [1, "fas", "fa-users", "successColor"], ["class", "desc-achievements perfectColor", "title", "Total game achievements", 4, "ngIf"], ["title", "Hours played last 2 weeks", 1, "desc-time2Weeks", "successColor"], [1, "fas", "fa-calendar-week", "successColor"], [1, "w-md", "successColor"], ["title", "Total hours played", 1, "desc-timeForever", "successColor"], [1, "fas", "fa-hourglass-half", "successColor"], [1, "header-img", 3, "src", "alt", "title"], ["src", "../../../assets/image-not-found.jpg", "alt", "image not found", "title", "image not found", 1, "header-img"], ["title", "Total game achievements", 1, "desc-achievements", "perfectColor"], [1, "fas", "fa-trophy", "perfectColor"], [1, "game-empty", "game-card"]], template: function RecentGamesComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RecentGamesComponent_div_0_Template, 4, 2, "div", 0);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.games);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterLinkWithHref"]], pipes: [_shared_pipes_short_decimals_pipe__WEBPACK_IMPORTED_MODULE_9__["ShortDecimalsPipe"]], styles: [".game-card[_ngcontent-%COMP%] {\n  margin: 1em 0;\n}\n.card-content[_ngcontent-%COMP%]   .game-image[_ngcontent-%COMP%] {\n  display: flex;\n}\n.card-content[_ngcontent-%COMP%]   .game-image[_ngcontent-%COMP%]   .header-img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  margin: 1em auto 0;\n  font-size: 1.1em;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-around;\n  width: 100%;\n  margin-bottom: 1em;\n  text-align: left;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 0.4em;\n  vertical-align: super;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%]   .w-md[_ngcontent-%COMP%] {\n  display: none;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-players[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-achievements[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-time2Weeks[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-timeForever[_ngcontent-%COMP%] {\n  margin: auto 0;\n  width: 25%;\n  text-align: center;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-players[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-achievements[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-time2Weeks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-timeForever[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-players[_ngcontent-%COMP%]   .w-md[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-achievements[_ngcontent-%COMP%]   .w-md[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-time2Weeks[_ngcontent-%COMP%]   .w-md[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-timeForever[_ngcontent-%COMP%]   .w-md[_ngcontent-%COMP%] {\n  display: none;\n}\n.game-empty[_ngcontent-%COMP%] {\n  text-align: center;\n  height: 15px;\n}\n\n@media only screen and (min-width: 768px) {\n  .component-container[_ngcontent-%COMP%] {\n    margin: 1em auto;\n    width: 80%;\n  }\n  .component-container[_ngcontent-%COMP%]   .game-card[_ngcontent-%COMP%] {\n    margin: 1em auto;\n  }\n\n  .card-content[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    display: flex;\n    width: 100%;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-image[_ngcontent-%COMP%] {\n    width: 40%;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%] {\n    display: flex;\n    width: 60%;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-evenly;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n    margin: auto 0 auto 2em;\n    text-align: left;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%]   .w-md[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-players[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-achievements[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-time2Weeks[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-timeForever[_ngcontent-%COMP%] {\n    margin: auto 0;\n    width: 25%;\n    text-align: center;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-players[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-achievements[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-time2Weeks[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-timeForever[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n    font-size: 0.8em;\n    margin-bottom: 0;\n  }\n  .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-players[_ngcontent-%COMP%]   .w-md[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-achievements[_ngcontent-%COMP%]   .w-md[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-time2Weeks[_ngcontent-%COMP%]   .w-md[_ngcontent-%COMP%], .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-timeForever[_ngcontent-%COMP%]   .w-md[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .component-container[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .component-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .game-image[_ngcontent-%COMP%] {\n    width: 347px;\n  }\n  .component-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .game-image[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 347px;\n  }\n  .component-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%] {\n    font-size: 1.2em;\n  }\n  .component-container[_ngcontent-%COMP%]   .card-content[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .game-desc[_ngcontent-%COMP%]   .desc-link[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxccmVjZW50LWdhbWVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0NBQUE7QUNFQTs7OztDQUFBO0FBTUE7RUFBYSxhQUFBO0FBSWI7QUFESTtFQUNJLGFBQUE7QUFJUjtBQUhRO0VBQWMsV0FBQTtBQU10QjtBQUhJO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBS1I7QUFIUTtFQUNJLGFBQUE7RUFDQSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBS1o7QUFIWTtFQUNJLHFCQUFBO0FBS2hCO0FBSmdCO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQU1wQjtBQUhZO0VBQVEsYUFBQTtBQU1wQjtBQUhROzs7O0VBSUksY0FBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQUtaO0FBSlk7Ozs7RUFBSSxTQUFBO0FBVWhCO0FBVFk7Ozs7RUFBUSxhQUFBO0FBZXBCO0FBVkE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUFhSjtBQVZBOzs7O0NBQUE7QUFNQTtFQUNJO0lBQ0ksZ0JBQUE7SUFDQSxVQUFBO0VBWU47RUFWTTtJQUNJLGdCQUFBO0VBWVY7O0VBUkU7SUFDSSxhQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBV047RUFUTTtJQUNJLGFBQUE7SUFDQSxXQUFBO0VBV1Y7RUFUVTtJQUFjLFVBQUE7RUFZeEI7RUFWVTtJQUNJLGFBQUE7SUFDQSxVQUFBO0VBWWQ7RUFWYztJQUNJLGFBQUE7SUFDQSxzQkFBQTtJQUNBLDZCQUFBO0VBWWxCO0VBVmtCO0lBQ0ksdUJBQUE7SUFDQSxnQkFBQTtFQVl0QjtFQVZrQjtJQUFRLGVBQUE7RUFhMUI7RUFWYzs7OztJQUlJLGNBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUFZbEI7RUFYa0I7Ozs7SUFDSSxnQkFBQTtJQUNBLGdCQUFBO0VBZ0J0QjtFQWRrQjs7OztJQUNJLGNBQUE7RUFtQnRCO0FBQ0Y7QUFaQTtFQUNJO0lBQ0ksVUFBQTtFQWNOO0VBWlU7SUFDSSxZQUFBO0VBY2Q7RUFiYztJQUFNLFlBQUE7RUFnQnBCO0VBZFU7SUFBYSxnQkFBQTtFQWlCdkI7RUFka0I7SUFBYSxtQkFBQTtFQWlCL0I7QUFDRiIsImZpbGUiOiJyZWNlbnQtZ2FtZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBWQVJJQUJMRVNcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuJGhlYWRlci1iZy1jb2xvcjogIzIxMjEyMTtcclxuJHNpZGVuYXYtYmctY29sb3I6ICMyNTI1MjU7XHJcbiRib2R5LWJnLWNvbG9yOiAjMzAzMDMwO1xyXG4kZXh0cmEtY29sb3I6ICM0ZjRmNGY7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmO1xyXG4kZXJyb3ItY29sb3I6ICNmNDQzMzY7XHJcbiRwZXJmZWN0LWNvbG9yOiAjZmVjYzA5O1xyXG4kc3VjY2Vzcy1jb2xvcjogI2E1YzkzYTtcclxuJGdyZWF0LWNvbG9yOiAjZGE5NTJmO1xyXG4kaW5mby1jb2xvcjogIzU1YWVjZTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbi8qXHJcbiAgICAtLS0tLS0tLS1cclxuICAgIENBUkRcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuLmdhbWUtY2FyZCB7IG1hcmdpbjogMWVtIDA7IH1cclxuXHJcbi5jYXJkLWNvbnRlbnQge1xyXG4gICAgLmdhbWUtaW1hZ2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgLmhlYWRlci1pbWcgeyB3aWR0aDogMTAwJTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC5nYW1lLWRlc2Mge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgIG1hcmdpbjogMWVtIGF1dG8gMDtcclxuICAgICAgICBmb250LXNpemU6IDEuMWVtO1xyXG5cclxuICAgICAgICAuZGVzYy1saW5rIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxZW07XHJcbiAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcblxyXG4gICAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICAgICAgICAgICAgICAuZmFzIHtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuNGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAudy1tZCB7IGRpc3BsYXk6IG5vbmU7IH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5kZXNjLXBsYXllcnMsXHJcbiAgICAgICAgLmRlc2MtYWNoaWV2ZW1lbnRzLFxyXG4gICAgICAgIC5kZXNjLXRpbWUyV2Vla3MsXHJcbiAgICAgICAgLmRlc2MtdGltZUZvcmV2ZXIge1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG8gMDtcclxuICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBwIHsgbWFyZ2luOiAwOyB9XHJcbiAgICAgICAgICAgIC53LW1kIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmdhbWUtZW1wdHkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgaGVpZ2h0OiAxNXB4O1xyXG59XHJcblxyXG4vKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBSRVNQT05TSVZFXHJcbiAgICAtLS0tLS0tLS1cclxuKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb21wb25lbnQtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcblxyXG4gICAgICAgIC5nYW1lLWNhcmQgeyBcclxuICAgICAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgXHJcbiAgICAgICAgLmRhdGEge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuXHJcbiAgICAgICAgICAgIC5nYW1lLWltYWdlIHsgd2lkdGg6IDQwJTsgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgLmdhbWUtZGVzYyB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuXHJcbiAgICAgICAgICAgICAgICAuZGVzYy1saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDAgYXV0byAyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIC53LW1kIHsgZGlzcGxheTogaW5saW5lOyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLmRlc2MtcGxheWVycyxcclxuICAgICAgICAgICAgICAgIC5kZXNjLWFjaGlldmVtZW50cyxcclxuICAgICAgICAgICAgICAgIC5kZXNjLXRpbWUyV2Vla3MsXHJcbiAgICAgICAgICAgICAgICAuZGVzYy10aW1lRm9yZXZlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1JTtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgcCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjhlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLnctbWQge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuY29tcG9uZW50LWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICAuY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgLmdhbWUtaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDM0N3B4O1xyXG4gICAgICAgICAgICAgICAgaW1nIHsgd2lkdGg6IDM0N3B4OyB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLmdhbWUtZGVzYyB7IGZvbnQtc2l6ZTogMS4yZW07IH1cclxuICAgICAgICAgICAgLmRhdGEge1xyXG4gICAgICAgICAgICAgICAgLmdhbWUtZGVzYyB7XHJcbiAgICAgICAgICAgICAgICAgICAgLmRlc2MtbGluayB7IGZsZXgtZGlyZWN0aW9uOiByb3c7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](RecentGamesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-recent-games',
                templateUrl: './recent-games.component.html',
                styleUrls: ['./recent-games.component.scss']
            }]
    }], function () { return [{ type: _shared_services_steam_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["SteamUserStatsService"] }, { type: _shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_4__["SteamAppsService"] }, { type: _shared_services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"] }]; }, { steamid: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }], nGames: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }] }); })();


/***/ }),

/***/ "QmdZ":
/*!************************************************!*\
  !*** ./src/app/shared/helpers/user-reg-exp.ts ***!
  \************************************************/
/*! exports provided: notIdUserRegExp */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "notIdUserRegExp", function() { return notIdUserRegExp; });
function notIdUserRegExp(str) {
    const nonDigitRegExp = /[^\d]+/g;
    if (str.match(nonDigitRegExp)) {
        return str.match(nonDigitRegExp)[0];
    }
    else {
        return '';
    }
}


/***/ }),

/***/ "Ra3v":
/*!*************************************************!*\
  !*** ./src/app/shared/helpers/get-user-data.ts ***!
  \*************************************************/
/*! exports provided: getUserData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserData", function() { return getUserData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

function getUserData(steamid, steamUser, player) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const { response: { players } } = yield steamUser.getPlayerSummaries(steamid.toString());
        const { response: { player_level } } = yield player.getSteamLevel(steamid);
        const { response: { game_count } } = yield player.getOwnedGames(steamid, true, false);
        const { friendslist: { friends } } = yield steamUser.getFriendList(steamid);
        let steamids = '';
        for (const friend of friends) {
            steamids += `${friend.steamid},`;
        }
        const { response } = yield steamUser.getPlayerSummaries(steamids);
        return {
            player: Object.assign({}, players)[0],
            player_level,
            game_count,
            friends: response,
        };
    });
}


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");









const _c0 = function () { return [""]; };
const _c1 = function () { return ["news"]; };
const _c2 = function () { return ["help"]; };
class AppComponent {
    constructor() {
        this.title = 'InfoSteam';
    }
    ngOnInit() {
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 25, vars: 13, consts: [[1, "toolbar", "headerBgColor"], ["mat-icon-button", "", 1, "btnMenuIcon", 3, "click"], [1, "fas", "fa-bars"], [1, "btn", "title", 3, "routerLink"], [1, "drawer-container", 3, "hasBackdrop"], [1, "drawer", "sidenavBgColor", 3, "mode"], ["drawer", ""], ["role", "list"], ["role", "navigation", 1, "btn", "drawer-item", 3, "routerLink", "click"], [1, "fas", "fa-search"], [1, "fas", "fa-newspaper"], [1, "fas", "fa-info"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-toolbar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "uppercase");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-drawer-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-drawer", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-list", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Home ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "mat-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_15_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Game news ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "mat-list-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_mat_list_item_click_19_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r1); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9); return _r0.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Help ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "mat-drawer-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](9, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx.title));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("hasBackdrop", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("mode", "over");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](10, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](11, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c2));
    } }, directives: [_angular_material_toolbar__WEBPACK_IMPORTED_MODULE_1__["MatToolbar"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContainer"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawer"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatList"], _angular_material_list__WEBPACK_IMPORTED_MODULE_5__["MatListItem"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_6__["MatDivider"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_4__["MatDrawerContent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["UpperCasePipe"]], styles: [".toolbar[_ngcontent-%COMP%] {\n  padding: 0 10px;\n  height: 64px;\n}\n.btnMenuIcon[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n}\n.title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  margin-top: 5px;\n}\n\n  .mat-drawer-backdrop.mat-drawer-shown {\n  background-color: #303030;\n  opacity: 0.6;\n}\n.drawer-container[_ngcontent-%COMP%] {\n  height: calc(100% - 64px);\n}\n.drawer[_ngcontent-%COMP%] {\n  width: 70%;\n}\n.drawer-item[_ngcontent-%COMP%] {\n  font-size: 20px;\n  outline: none;\n}\n.drawer-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  width: 24px;\n  height: 20px;\n  padding-right: 5px;\n  text-align: center;\n  font-size: 18px;\n  opacity: 0.35;\n}\n.drawer-item[_ngcontent-%COMP%]:hover {\n  background-color: #303030;\n}\n\n@media only screen and (min-width: 768px) {\n  .drawer[_ngcontent-%COMP%] {\n    width: 33%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .drawer[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXF92YXJpYWJsZXMuc2NzcyIsIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0NBQUE7QUNFQTs7OztDQUFBO0FBTUE7RUFDSSxlQUFBO0VBQ0EsWUFBQTtBQUdKO0FBQUE7RUFDSSxpQkFBQTtBQUdKO0FBQUE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUFHSjtBQUFBOzs7O0NBQUE7QUFNQTtFQUNJLHlCRHJCWTtFQ3NCWixZQUFBO0FBRUo7QUFDQTtFQUNJLHlCQUFBO0FBRUo7QUFDQTtFQUNJLFVBQUE7QUFFSjtBQUNBO0VBQ0ksZUFBQTtFQUNBLGFBQUE7QUFFSjtBQUFJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QUFFUjtBQUNJO0VBQ0kseUJEL0NRO0FDZ0RoQjtBQUdBOzs7O0NBQUE7QUFNQTtFQUNJO0lBQVUsVUFBQTtFQUFaO0FBQ0Y7QUFFQTtFQUNJO0lBQVUsVUFBQTtFQUNaO0FBQ0YiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIC0tLS0tLS0tLVxyXG4gICAgVkFSSUFCTEVTXHJcbiAgICAtLS0tLS0tLS1cclxuKi9cclxuXHJcbiRoZWFkZXItYmctY29sb3I6ICMyMTIxMjE7XHJcbiRzaWRlbmF2LWJnLWNvbG9yOiAjMjUyNTI1O1xyXG4kYm9keS1iZy1jb2xvcjogIzMwMzAzMDtcclxuJGV4dHJhLWNvbG9yOiAjNGY0ZjRmO1xyXG4kdGV4dC1jb2xvcjogI2ZmZjtcclxuJGVycm9yLWNvbG9yOiAjZjQ0MzM2O1xyXG4kcGVyZmVjdC1jb2xvcjogI2ZlY2MwOTtcclxuJHN1Y2Nlc3MtY29sb3I6ICNhNWM5M2E7XHJcbiRncmVhdC1jb2xvcjogI2RhOTUyZjtcclxuJGluZm8tY29sb3I6ICM1NWFlY2U7XHJcbiIsIkBpbXBvcnQgJy4uL3ZhcmlhYmxlcyc7XHJcblxyXG4vKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBUT09MQkFSXHJcbiAgICAtLS0tLS0tLS1cclxuKi9cclxuXHJcbi50b29sYmFyIHtcclxuICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIGhlaWdodDogNjRweDtcclxufVxyXG5cclxuLmJ0bk1lbnVJY29uIHtcclxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuXHJcbi8qXHJcbiAgICAtLS0tLS0tLS1cclxuICAgIFNJREVOQVZcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuOjpuZy1kZWVwIC5tYXQtZHJhd2VyLWJhY2tkcm9wLm1hdC1kcmF3ZXItc2hvd24ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJvZHktYmctY29sb3I7XHJcbiAgICBvcGFjaXR5OiAuNjtcclxufVxyXG5cclxuLmRyYXdlci1jb250YWluZXIge1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcclxufVxyXG5cclxuLmRyYXdlciB7XHJcbiAgICB3aWR0aDogNzAlO1xyXG59XHJcblxyXG4uZHJhd2VyLWl0ZW0ge1xyXG4gICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuXHJcbiAgICBpIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgb3BhY2l0eTogLjM1O1xyXG4gICAgfVxyXG5cclxuICAgICY6aG92ZXIge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRib2R5LWJnLWNvbG9yO1xyXG4gICAgfVxyXG59XHJcblxyXG4vKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBSRVNQT05TSVZFXHJcbiAgICAtLS0tLS0tLS1cclxuKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5kcmF3ZXIgeyB3aWR0aDogMzMlOyB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTAyNHB4KSB7XHJcbiAgICAuZHJhd2VyIHsgd2lkdGg6IDI1JTsgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "TJDw":
/*!*********************************************************************!*\
  !*** ./src/app/shared/abstract-services/abstract-player-service.ts ***!
  \*********************************************************************/
/*! exports provided: AbstractPlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractPlayerService", function() { return AbstractPlayerService; });
class AbstractPlayerService {
}


/***/ }),

/***/ "Tdce":
/*!*****************************************************************!*\
  !*** ./src/app/components/game-search/game-search.component.ts ***!
  \*****************************************************************/
/*! exports provided: GameSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameSearchComponent", function() { return GameSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");







class GameSearchComponent {
    constructor(fb) {
        this.fb = fb;
        this.gameSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.formInit();
    }
    formInit() {
        this.form = this.fb.group({ gameSearch: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].pattern(/\d+/g)] });
    }
    onSendClick() {
        if (this.form.valid) {
            const gameSearch = this.form.get('gameSearch').value;
            this.gameSearch.emit(gameSearch);
        }
    }
}
GameSearchComponent.ɵfac = function GameSearchComponent_Factory(t) { return new (t || GameSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
GameSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameSearchComponent, selectors: [["app-game-search"]], outputs: { gameSearch: "gameSearch" }, decls: 12, vars: 1, consts: [[1, "component-container"], [3, "formGroup"], ["appearance", "standard", 1, "searchBar"], ["matInput", "", "formControlName", "gameSearch", "placeholder", "appid: 524220, 237930, ..."], ["matSuffix", "", "mat-raised-button", "", 3, "click"], [1, "fas", "fa-search"]], template: function GameSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Game search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GameSearchComponent_Template_button_click_6_listener() { return ctx.onSendClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Format for appid is numeric (524220, 237930, ...)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search a game.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatHint"]], styles: [".searchBar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n  .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #4f4f4f;\n}\n\n@media only screen and (min-width: 768px) {\n  .component-container[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 80%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .component-container[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcZ2FtZS1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQTtBQ0VBOzs7O0NBQUE7QUFNQTtFQUNJLFdBQUE7QUFHSjtBQUFBO0VBQ0kseUJESlU7QUNPZDtBQUFBOzs7O0NBQUE7QUFNQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUFFTjtBQUNGO0FBQ0E7RUFDSTtJQUF1QixVQUFBO0VBRXpCO0FBQ0YiLCJmaWxlIjoiZ2FtZS1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBWQVJJQUJMRVNcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuJGhlYWRlci1iZy1jb2xvcjogIzIxMjEyMTtcclxuJHNpZGVuYXYtYmctY29sb3I6ICMyNTI1MjU7XHJcbiRib2R5LWJnLWNvbG9yOiAjMzAzMDMwO1xyXG4kZXh0cmEtY29sb3I6ICM0ZjRmNGY7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmO1xyXG4kZXJyb3ItY29sb3I6ICNmNDQzMzY7XHJcbiRwZXJmZWN0LWNvbG9yOiAjZmVjYzA5O1xyXG4kc3VjY2Vzcy1jb2xvcjogI2E1YzkzYTtcclxuJGdyZWF0LWNvbG9yOiAjZGE5NTJmO1xyXG4kaW5mby1jb2xvcjogIzU1YWVjZTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbi8qXHJcbiAgICAtLS0tLS0tLS1cclxuICAgIFNFQVJDSEJBUlxyXG4gICAgLS0tLS0tLS0tXHJcbiovXHJcblxyXG4uc2VhcmNoQmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGV4dHJhLWNvbG9yO1xyXG59XHJcblxyXG4vKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBSRVNQT05TSVZFXHJcbiAgICAtLS0tLS0tLS1cclxuKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb21wb25lbnQtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5jb21wb25lbnQtY29udGFpbmVyIHsgd2lkdGg6IDcwJTsgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-game-search',
                templateUrl: './game-search.component.html',
                styleUrls: ['./game-search.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { gameSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "ToQW":
/*!************************************************************!*\
  !*** ./src/app/pages/game-detail/game-detail.component.ts ***!
  \************************************************************/
/*! exports provided: GameDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameDetailComponent", function() { return GameDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_helpers_get_game_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/get-game-data */ "upGS");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_steam_user_stats_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/steam-user-stats.service */ "j7YI");
/* harmony import */ var _shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/steam-apps.service */ "W7QX");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_game_news_game_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/game-news/game-news.component */ "NMsC");









function GameDetailComponent_div_1_img_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 17);
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r1.gameData.gameImage, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r1.gameData.gameName, " image");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("title", ctx_r1.gameData.gameName);
} }
function GameDetailComponent_div_1_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "img", 18);
} }
function GameDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h1");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "uppercase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, GameDetailComponent_div_1_img_6_Template, 1, 3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, GameDetailComponent_div_1_ng_template_7_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](12, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](15, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](18, " Steam store ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](19, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](22, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](26, "app-game-news", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](8);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 10, ctx_r0.gameData.gameName));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.gameData.gameImage)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Steam appid ", ctx_r0.gameData.appid, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Game ver. ", ctx_r0.gameData.game.gameVersion, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("href", "https://store.steampowered.com/app/", ctx_r0.gameData.appid, "", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Active players ", ctx_r0.gameData.player_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Achievements ", ctx_r0.gameData.game.availableGameStats.achievements.length, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("appid", ctx_r0.appid)("nNews", ctx_r0.nNews);
} }
class GameDetailComponent {
    constructor(route, router, steamUserStats, steamApps) {
        this.route = route;
        this.router = router;
        this.steamUserStats = steamUserStats;
        this.steamApps = steamApps;
    }
    ngOnInit() {
        this.nNews = 3;
        this.route.params
            .subscribe(params => {
            this.appid = parseInt(params.appid, 10);
            this.getGameData(this.appid);
        });
    }
    getGameData(appid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.gameData = yield Object(_shared_helpers_get_game_data__WEBPACK_IMPORTED_MODULE_2__["getGameData"])(appid, this.steamUserStats, this.steamApps);
            }
            catch (error) {
                console.error('Error while retrieving game data', error);
                this.router.navigate(['Page_Not_Found']);
            }
        });
    }
}
GameDetailComponent.ɵfac = function GameDetailComponent_Factory(t) { return new (t || GameDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_steam_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["SteamUserStatsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_5__["SteamAppsService"])); };
GameDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: GameDetailComponent, selectors: [["app-game-detail"]], decls: 2, vars: 1, consts: [[1, "page-container"], ["class", "game", 4, "ngIf"], [1, "game"], [1, "data"], [1, "image"], ["class", "header-img", 3, "src", "alt", "title", 4, "ngIf", "ngIfElse"], ["imageEmpty", ""], [1, "info"], [1, "fab", "fa-steam-symbol"], [1, "fas", "fa-code-branch"], ["target", "_blank", 1, "link", "infoColor", 3, "href"], [1, "fas", "fa-external-link-alt", "infoColor"], [1, "successColor"], [1, "fas", "fa-users", "successColor"], [1, "perfectColor"], [1, "fas", "fa-trophy", "perfectColor"], [3, "appid", "nNews"], [1, "header-img", 3, "src", "alt", "title"], ["src", "../../../assets/image-not-found.jpg", "alt", "image not found", "title", "image not found", 1, "header-img"]], template: function GameDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, GameDetailComponent_div_1_Template, 27, 12, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.gameData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _components_game_news_game_news_component__WEBPACK_IMPORTED_MODULE_7__["GameNewsComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["UpperCasePipe"]], styles: [".page-container[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  margin-top: 0;\n}\n.page-container[_ngcontent-%COMP%]   .header-img[_ngcontent-%COMP%] {\n  width: 100%;\n  border-radius: 4px;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin: 1em auto;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n  vertical-align: super;\n}\n\n@media only screen and (min-width: 768px) {\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    width: 80%;\n    margin: auto;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 60%;\n    align-self: flex-end;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .header-img[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: 0;\n    text-align: left;\n    align-self: center;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: 0.75em 0;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n    margin-top: 0;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n  .page-container[_ngcontent-%COMP%]   .achievement[_ngcontent-%COMP%] {\n    width: 80%;\n    margin: 1em auto;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .header-img[_ngcontent-%COMP%] {\n    width: 400px;\n  }\n  .page-container[_ngcontent-%COMP%]   .achievement[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcZ2FtZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQTtBQ0VBOzs7O0NBQUE7QUFPSTtFQUFLLGFBQUE7QUFHVDtBQURJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0FBR1I7QUFBSTtFQUNJLGdCQUFBO0FBRVI7QUFBUTtFQUNJLGVBQUE7QUFFWjtBQUFZO0VBQU8sZ0JBQUE7QUFHbkI7QUFEWTtFQUNJLHFCQUFBO0FBR2hCO0FBRmdCO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtBQUlwQjtBQUtBOzs7O0NBQUE7QUFNQTtFQUVRO0lBQ0ksYUFBQTtJQUNBLDJCQUFBO0lBQ0EsVUFBQTtJQUNBLFlBQUE7RUFKVjtFQU1VO0lBQ0ksVUFBQTtJQUNBLG9CQUFBO0VBSmQ7RUFLYztJQUFjLFdBQUE7RUFGNUI7RUFLVTtJQUNJLFVBQUE7SUFDQSxTQUFBO0lBQ0EsZ0JBQUE7SUFDQSxrQkFBQTtFQUhkO0VBSWM7SUFDSSxnQkFBQTtFQUZsQjtFQUdrQjtJQUFnQixhQUFBO0VBQWxDO0VBQ2tCO0lBQWUsZ0JBQUE7RUFFakM7RUFHTTtJQUNJLFVBQUE7SUFDQSxnQkFBQTtFQURWO0FBQ0Y7QUFLQTtFQUVRO0lBQ0ksVUFBQTtFQUpWO0VBTWM7SUFBYyxZQUFBO0VBSDVCO0VBTU07SUFBZSxVQUFBO0VBSHJCO0FBQ0YiLCJmaWxlIjoiZ2FtZS1kZXRhaWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBWQVJJQUJMRVNcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuJGhlYWRlci1iZy1jb2xvcjogIzIxMjEyMTtcclxuJHNpZGVuYXYtYmctY29sb3I6ICMyNTI1MjU7XHJcbiRib2R5LWJnLWNvbG9yOiAjMzAzMDMwO1xyXG4kZXh0cmEtY29sb3I6ICM0ZjRmNGY7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmO1xyXG4kZXJyb3ItY29sb3I6ICNmNDQzMzY7XHJcbiRwZXJmZWN0LWNvbG9yOiAjZmVjYzA5O1xyXG4kc3VjY2Vzcy1jb2xvcjogI2E1YzkzYTtcclxuJGdyZWF0LWNvbG9yOiAjZGE5NTJmO1xyXG4kaW5mby1jb2xvcjogIzU1YWVjZTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbi8qXHJcbiAgICAtLS0tLS0tLS1cclxuICAgIE1BSU4gQ09OVEVOVFxyXG4gICAgLS0tLS0tLS0tXHJcbiovXHJcblxyXG4ucGFnZS1jb250YWluZXIge1xyXG4gICAgaDEgeyBtYXJnaW4tdG9wOiAwOyB9XHJcblxyXG4gICAgLmhlYWRlci1pbWcge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIH1cclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVlbSAwO1xyXG5cclxuICAgICAgICAgICAgLmZhcyB7IGZvbnQtc2l6ZTogMC45ZW07IH1cclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIC5saW5rIHtcclxuICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgIC5mYXMge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMC41ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IHN1cGVyO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIC5hY2hpZXZlbWVudCB7IH1cclxufVxyXG5cclxuLypcclxuICAgIC0tLS0tLS0tLVxyXG4gICAgUkVTUE9OU0lWRVxyXG4gICAgLS0tLS0tLS0tXHJcbiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucGFnZS1jb250YWluZXIge1xyXG4gICAgICAgIC5kYXRhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbWcgeyB3aWR0aDogMTAwJTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAuNzVlbSAwO1xyXG4gICAgICAgICAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQgeyBtYXJnaW4tdG9wOiAwOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgJjpsYXN0LWNoaWxkIHsgbWFyZ2luLWJvdHRvbTogMDsgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuYWNoaWV2ZW1lbnQge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmRhdGEge1xyXG4gICAgICAgICAgICB3aWR0aDogNzAlO1xyXG4gICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgLmhlYWRlci1pbWcgeyB3aWR0aDogNDAwcHg7fVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5hY2hpZXZlbWVudCB7IHdpZHRoOiA3MCU7IH1cclxuICAgIH1cclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GameDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-game-detail',
                templateUrl: './game-detail.component.html',
                styleUrls: ['./game-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _shared_services_steam_user_stats_service__WEBPACK_IMPORTED_MODULE_4__["SteamUserStatsService"] }, { type: _shared_services_steam_apps_service__WEBPACK_IMPORTED_MODULE_5__["SteamAppsService"] }]; }, null); })();


/***/ }),

/***/ "W7QX":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/steam-apps.service.ts ***!
  \*******************************************************/
/*! exports provided: SteamAppsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteamAppsService", function() { return SteamAppsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../config.json */ "fcXd");
var _config_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config.json */ "fcXd", 1);
/* harmony import */ var _abstract_services_abstract_steam_apps_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../abstract-services/abstract-steam-apps-service */ "xCw1");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





class SteamAppsService extends _abstract_services_abstract_steam_apps_service__WEBPACK_IMPORTED_MODULE_2__["AbstractSteamAppsService"] {
    constructor(http) {
        super();
        this.http = http;
        this.INTERFACE = 'ISteamApps';
        this.appList = null;
    }
    /**
     * Gets the complete list of public apps.
     * @return IGetAppList => applist: { apps: [{ appid: number, name: string }] }
     */
    getAppList() {
        if (this.appList) {
            return this.appList;
        }
        else {
            this.appList = this.http
                .get(`${_config_json__WEBPACK_IMPORTED_MODULE_1__["STEAM_API_URL"]}/${this.INTERFACE}/GetAppList/v2/`)
                .toPromise();
            return this.appList;
        }
    }
    /**
     * @param addr IP or IP:queryport to list
     */
    getServersAtAddress(addr) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_1__["STEAM_API_URL"]}/${this.INTERFACE}/GetServersAtAddress/v1/?addr=${addr}`)
            .toPromise();
    }
    /**
     * @param appid AppID of game
     * @param version The installed version of the game
     */
    upToDateCheck(appid, version) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_1__["STEAM_API_URL"]}/${this.INTERFACE}/UpToDateCheck/v1/?appid=${appid}&version=${version}`)
            .toPromise();
    }
}
SteamAppsService.ɵfac = function SteamAppsService_Factory(t) { return new (t || SteamAppsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
SteamAppsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SteamAppsService, factory: SteamAppsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SteamAppsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Y0ul":
/*!*******************************************************************************!*\
  !*** ./src/app/shared/abstract-services/abstract-steam-user-stats-service.ts ***!
  \*******************************************************************************/
/*! exports provided: AbstractSteamUserStatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSteamUserStatsService", function() { return AbstractSteamUserStatsService; });
class AbstractSteamUserStatsService {
}


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _shared_modules_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./shared/modules/material */ "/pWa");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/news/news.component */ "7yAP");
/* harmony import */ var _pages_game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/game-detail/game-detail.component */ "ToQW");
/* harmony import */ var _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/user-detail/user-detail.component */ "x5jG");
/* harmony import */ var _pages_help_help_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/help/help.component */ "kOAU");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "BgzB");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_game_news_game_news_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/game-news/game-news.component */ "NMsC");
/* harmony import */ var _components_recommended_games_recommended_games_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/recommended-games/recommended-games.component */ "A5G5");
/* harmony import */ var _components_game_search_game_search_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/game-search/game-search.component */ "Tdce");
/* harmony import */ var _components_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/user-search/user-search.component */ "hGRI");
/* harmony import */ var _components_recent_games_recent_games_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/recent-games/recent-games.component */ "OwCk");
/* harmony import */ var _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./shared/pipes/safe-html.pipe */ "KSFr");
/* harmony import */ var _shared_pipes_short_decimals_pipe__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./shared/pipes/short-decimals.pipe */ "cJ7f");
/* harmony import */ var _shared_pipes_show_utc_time_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./shared/pipes/show-utc-time.pipe */ "qzhZ");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "7EHt");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/select */ "d3UM");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/toolbar */ "/t3+");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/sidenav */ "XhcP");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/button */ "bTqV");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/list */ "MutI");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
// Angular





// Modules


// Pages components






// Components






// Pipes














class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            ..._shared_modules_material__WEBPACK_IMPORTED_MODULE_6__["material"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
        _components_recommended_games_recommended_games_component__WEBPACK_IMPORTED_MODULE_15__["RecommendedGamesComponent"],
        _pages_help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"],
        _pages_game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_9__["GameDetailComponent"],
        _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"],
        _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
        _components_game_search_game_search_component__WEBPACK_IMPORTED_MODULE_16__["GameSearchComponent"],
        _components_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_17__["UserSearchComponent"],
        _pages_news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
        _components_game_news_game_news_component__WEBPACK_IMPORTED_MODULE_14__["GameNewsComponent"],
        _components_recent_games_recent_games_component__WEBPACK_IMPORTED_MODULE_18__["RecentGamesComponent"],
        _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_19__["SafeHtmlPipe"],
        _shared_pipes_short_decimals_pipe__WEBPACK_IMPORTED_MODULE_20__["ShortDecimalsPipe"],
        _shared_pipes_show_utc_time_pipe__WEBPACK_IMPORTED_MODULE_21__["ShowUTCTimePipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_23__["MatFormFieldModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_24__["MatSelectModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_25__["MatToolbarModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_26__["MatSidenavModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_27__["MatButtonModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_28__["MatListModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_29__["MatInputModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_30__["MatDividerModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_31__["MatCardModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
                    _components_recommended_games_recommended_games_component__WEBPACK_IMPORTED_MODULE_15__["RecommendedGamesComponent"],
                    _pages_help_help_component__WEBPACK_IMPORTED_MODULE_11__["HelpComponent"],
                    _pages_game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_9__["GameDetailComponent"],
                    _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_10__["UserDetailComponent"],
                    _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_12__["PageNotFoundComponent"],
                    _components_game_search_game_search_component__WEBPACK_IMPORTED_MODULE_16__["GameSearchComponent"],
                    _components_user_search_user_search_component__WEBPACK_IMPORTED_MODULE_17__["UserSearchComponent"],
                    _pages_news_news_component__WEBPACK_IMPORTED_MODULE_8__["NewsComponent"],
                    _components_game_news_game_news_component__WEBPACK_IMPORTED_MODULE_14__["GameNewsComponent"],
                    _components_recent_games_recent_games_component__WEBPACK_IMPORTED_MODULE_18__["RecentGamesComponent"],
                    _shared_pipes_safe_html_pipe__WEBPACK_IMPORTED_MODULE_19__["SafeHtmlPipe"],
                    _shared_pipes_short_decimals_pipe__WEBPACK_IMPORTED_MODULE_20__["ShortDecimalsPipe"],
                    _shared_pipes_show_utc_time_pipe__WEBPACK_IMPORTED_MODULE_21__["ShowUTCTimePipe"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                    ..._shared_modules_material__WEBPACK_IMPORTED_MODULE_6__["material"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "aQlU":
/*!********************!*\
  !*** ./src/key.ts ***!
  \********************/
/*! exports provided: key */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "key", function() { return key; });
// Remove sample. from file name (✿◡‿◡) and type your STEAM API KEY here
const key = 'YOUR-STEAM-API-KEY';
/*
  -- Sample for user --
  personaname : Monorata2
  steamid : 76561198094709860
  customURL : http://steamcommunity.com/id/monorata2
  profile : http://steamcommunity.com/profiles/76561198094709860

  -- Samples for apps --
  524220 : Nier: Automata,
  237930 : Transistor,
  312750 : Final Fantasy IV,
  987720 : Oninaki
*/


/***/ }),

/***/ "cJ7f":
/*!*****************************************************!*\
  !*** ./src/app/shared/pipes/short-decimals.pipe.ts ***!
  \*****************************************************/
/*! exports provided: ShortDecimalsPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShortDecimalsPipe", function() { return ShortDecimalsPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ShortDecimalsPipe {
    transform(num) {
        return num.toFixed(1);
    }
}
ShortDecimalsPipe.ɵfac = function ShortDecimalsPipe_Factory(t) { return new (t || ShortDecimalsPipe)(); };
ShortDecimalsPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "shortDecimals", type: ShortDecimalsPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShortDecimalsPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'shortDecimals'
            }]
    }], null, null); })();


/***/ }),

/***/ "dY/6":
/*!***************************************************!*\
  !*** ./src/app/shared/services/player.service.ts ***!
  \***************************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../key */ "aQlU");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.json */ "fcXd");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config.json */ "fcXd", 1);
/* harmony import */ var _abstract_services_abstract_player_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-services/abstract-player-service */ "TJDw");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class PlayerService extends _abstract_services_abstract_player_service__WEBPACK_IMPORTED_MODULE_3__["AbstractPlayerService"] {
    constructor(http) {
        super();
        this.http = http;
        this.INTERFACE = 'IPlayerService';
    }
    /**
     * Gets information about a player's recently played games
     * @param steamid The player we're asking about
     * @param count The number of games to return (0/unset: all)
     */
    getRecentlyPlayedGames(steamid, count) {
        let urlParams = '';
        if (count) {
            urlParams += `&count=${count}`;
        }
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetRecentlyPlayedGames/v1/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamid=${steamid}${urlParams}`)
            .toPromise();
    }
    /**
     * Return a list of games owned by the player
     * @param steamid The player we're asking about
     * @param includeAppinfo true if we want additional details (name, icon) about each game
     * @param includePlayedFreeGames Free games are excluded by default. If this is set, free games the user has played will be returned.
     * @param appidsFilter if set, restricts result set to the passed in apps
     */
    getOwnedGames(steamid, includeAppinfo, includePlayedFreeGames, appidsFilter) {
        let urlParams = '';
        if (includePlayedFreeGames !== undefined) {
            urlParams += `&include_played_free_games=${includePlayedFreeGames}`;
        }
        if (appidsFilter) {
            urlParams += `&appids_filter=${appidsFilter}`;
        }
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetOwnedGames/v1/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamid=${steamid}&include_appinfo=${includeAppinfo}${urlParams}`)
            .toPromise();
    }
    /**
     * Returns the Steam Level of a user
     * @param steamid The player we're asking about
     */
    getSteamLevel(steamid) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetSteamLevel/v1/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamid=${steamid}`)
            .toPromise();
    }
    /**
     * Gets badges that are owned by a specific user
     * @param steamid The player we're asking about
     */
    getBadges(steamid) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetBadges/v1/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamid=${steamid}`)
            .toPromise();
    }
    /**
     * Gets all the quests needed to get the specified badge, and which are completed
     * @param steamid The player we're asking about
     * @param badgeid The badge we're asking about
     */
    getCommunityBadgeProgress(steamid, badgeid) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetCommunityBadgeProgress/v1/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamid=${steamid}&badgeid=${badgeid}`)
            .toPromise();
    }
    /**
     * Returns valid lender SteamID if game currently played is borrowed
     * @param steamid The player we're asking about
     * @param appidPlaying The game player is currently playing
     */
    isPlayingSharedGame(steamid, appidPlaying) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/IsPlayingSharedGame/v1/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamid=${steamid}&appid_playing=${appidPlaying}`)
            .toPromise();
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
PlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "fcXd":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/*! exports provided: STEAM_API_URL, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"STEAM_API_URL\":\"https://api.steampowered.com\"}");

/***/ }),

/***/ "hGRI":
/*!*****************************************************************!*\
  !*** ./src/app/components/user-search/user-search.component.ts ***!
  \*****************************************************************/
/*! exports provided: UserSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserSearchComponent", function() { return UserSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/form-field */ "kmnG");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/input */ "qFsG");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "bTqV");






class UserSearchComponent {
    constructor(fb) {
        this.fb = fb;
        this.userSearch = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.formInit();
    }
    formInit() {
        this.form = this.fb.group({ userSearch: [''] });
    }
    onSendClick() {
        if (this.form.valid) {
            const userSearch = this.form.get('userSearch').value;
            this.userSearch.emit(userSearch);
        }
    }
}
UserSearchComponent.ɵfac = function UserSearchComponent_Factory(t) { return new (t || UserSearchComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
UserSearchComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UserSearchComponent, selectors: [["app-user-search"]], outputs: { userSearch: "userSearch" }, decls: 12, vars: 1, consts: [[1, "component-container"], [3, "formGroup"], ["appearance", "standard", 1, "searchBar"], ["matInput", "", "formControlName", "userSearch", "placeholder", "steamid"], ["matSuffix", "", "mat-raised-button", "", 3, "click"], [1, "fas", "fa-search"]], template: function UserSearchComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "User search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UserSearchComponent_Template_button_click_6_listener() { return ctx.onSendClick(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-error");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Format for steamid is numeric.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-hint");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Search a user.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_3__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatSuffix"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatError"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_2__["MatHint"]], styles: [".searchBar[_ngcontent-%COMP%] {\n  width: 100%;\n}\n  .mat-form-field.mat-focused .mat-form-field-ripple {\n  background-color: #4f4f4f;\n}\n\n@media only screen and (min-width: 768px) {\n  .component-container[_ngcontent-%COMP%] {\n    margin: auto;\n    width: 80%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .component-container[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdXNlci1zZWFyY2guY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQTtBQ0VBOzs7O0NBQUE7QUFNQTtFQUNJLFdBQUE7QUFHSjtBQUFBO0VBQ0kseUJESlU7QUNPZDtBQUFBOzs7O0NBQUE7QUFNQTtFQUNJO0lBQ0ksWUFBQTtJQUNBLFVBQUE7RUFFTjtBQUNGO0FBQ0E7RUFDSTtJQUF1QixVQUFBO0VBRXpCO0FBQ0YiLCJmaWxlIjoidXNlci1zZWFyY2guY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBWQVJJQUJMRVNcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuJGhlYWRlci1iZy1jb2xvcjogIzIxMjEyMTtcclxuJHNpZGVuYXYtYmctY29sb3I6ICMyNTI1MjU7XHJcbiRib2R5LWJnLWNvbG9yOiAjMzAzMDMwO1xyXG4kZXh0cmEtY29sb3I6ICM0ZjRmNGY7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmO1xyXG4kZXJyb3ItY29sb3I6ICNmNDQzMzY7XHJcbiRwZXJmZWN0LWNvbG9yOiAjZmVjYzA5O1xyXG4kc3VjY2Vzcy1jb2xvcjogI2E1YzkzYTtcclxuJGdyZWF0LWNvbG9yOiAjZGE5NTJmO1xyXG4kaW5mby1jb2xvcjogIzU1YWVjZTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbi8qXHJcbiAgICAtLS0tLS0tLS1cclxuICAgIFNFQVJDSEJBUlxyXG4gICAgLS0tLS0tLS0tXHJcbiovXHJcblxyXG4uc2VhcmNoQmFyIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGV4dHJhLWNvbG9yO1xyXG59XHJcblxyXG4vKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBSRVNQT05TSVZFXHJcbiAgICAtLS0tLS0tLS1cclxuKi9cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb21wb25lbnQtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW46IGF1dG87XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5jb21wb25lbnQtY29udGFpbmVyIHsgd2lkdGg6IDcwJTsgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserSearchComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-user-search',
                templateUrl: './user-search.component.html',
                styleUrls: ['./user-search.component.scss']
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, { userSearch: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "j7YI":
/*!*************************************************************!*\
  !*** ./src/app/shared/services/steam-user-stats.service.ts ***!
  \*************************************************************/
/*! exports provided: SteamUserStatsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteamUserStatsService", function() { return SteamUserStatsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../key */ "aQlU");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.json */ "fcXd");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config.json */ "fcXd", 1);
/* harmony import */ var _abstract_services_abstract_steam_user_stats_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-services/abstract-steam-user-stats-service */ "Y0ul");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class SteamUserStatsService extends _abstract_services_abstract_steam_user_stats_service__WEBPACK_IMPORTED_MODULE_3__["AbstractSteamUserStatsService"] {
    constructor(http) {
        super();
        this.http = http;
        this.INTERFACE = 'ISteamUserStats';
    }
    /**
     * Retrieves the global achievement percentages for the specified app.
     * @param gameid GameID to retrieve the achievement percentages for
     */
    getGlobalAchievementPercentagesForApp(gameid) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetGlobalAchievementPercentagesForApp/v2/?gameid=${gameid}`)
            .toPromise();
    }
    /**
     * Retrieves the global stats percentages for the specified app.
     * @param appid AppID that we're getting global stats for
     * @param count Number of stats get data for
     * @param statName Names of stat to get data for
     * @param startdate Start date for daily totals (unix epoch timestamp)
     * @param enddate End date for daily totals (unix epoch timestamp)
     */
    getGlobalStatsForGame(appid, count, statName, startdate, enddate) {
        let urlParams = '';
        if (startdate) {
            urlParams += `&startdate=${startdate}`;
        }
        if (enddate) {
            urlParams += `&enddate=${enddate}`;
        }
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetGlobalStatsForGame/v1/?appid=${appid}&count=${count}&name[0]=${statName}${urlParams}`)
            .toPromise();
    }
    /**
     * Gets the total number of players currently active in the specified app on Steam.
     * @param appid AppID that we're getting user count for
     */
    getNumberOfCurrentPlayers(appid) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetNumberOfCurrentPlayers/v1/?appid=${appid}`)
            .toPromise();
    }
    /**
     * Gets the list of achievements the specified user has unlocked in an app.
     * @param steamid SteamID of user
     * @param appid AppID to get achievements for
     * @param lang Language to return strings for
     */
    getPlayerAchievements(steamid, appid, lang) {
        let urlParams = '';
        if (lang) {
            urlParams += `&l=${lang}`;
        }
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetPlayerAchievements/v1/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamid=${steamid}&appid=${appid}${urlParams}`)
            .toPromise();
    }
    /**
     * Gets the complete list of stats and achievements for the specified game.
     * @param appid appid of game
     * @param lang localized language to return (english, french, etc.)
     */
    getSchemaForGame(appid, lang) {
        let urlParams = '';
        if (lang) {
            urlParams += `&l=${lang}`;
        }
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetSchemaForGame/v2/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&appid=${appid}${urlParams}`)
            .toPromise();
    }
    /**
     * Gets the list of stats that the specified user has set in an app.
     * @param steamid SteamID of user
     * @param appid appid of game
     */
    getUserStatsForGame(steamid, appid) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetUserStatsForGame/v2/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamid=${steamid}&appid=${appid}`)
            .toPromise();
    }
}
SteamUserStatsService.ɵfac = function SteamUserStatsService_Factory(t) { return new (t || SteamUserStatsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SteamUserStatsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SteamUserStatsService, factory: SteamUserStatsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SteamUserStatsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "kOAU":
/*!**********************************************!*\
  !*** ./src/app/pages/help/help.component.ts ***!
  \**********************************************/
/*! exports provided: HelpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HelpComponent", function() { return HelpComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/divider */ "f0Cb");



class HelpComponent {
    constructor() { }
    ngOnInit() {
    }
}
HelpComponent.ɵfac = function HelpComponent_Factory(t) { return new (t || HelpComponent)(); };
HelpComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HelpComponent, selectors: [["app-help"]], decls: 75, vars: 0, consts: [[1, "page-container"], [1, "perfectColor"], [1, "fab", "fa-github", "infoColor"], ["href", "https://github.com/KoreanJuice/InfoSteam", "target", "_blank", 1, "link", "infoColor"], [1, "fas", "fa-envelope", "infoColor"], ["href", "mailto:mmartinezb98@gmail.com", 1, "link", "infoColor"], [1, "fas", "fa-user"], [1, "fas", "fa-map-marker-alt"], [1, "fab", "fa-twitter", "infoColor"], ["href", "https://twitter.com/Monoratilla", "target", "_blank", 1, "link", "infoColor"], [1, "fab", "fa-steam", "infoColor"], ["href", "https://store.steampowered.com/", "target", "_blank", 1, "link", "infoColor"], [1, "fab", "fa-font-awesome-flag", "infoColor"], ["href", "https://fontawesome.com/", "target", "_blank", 1, "link", "infoColor"], [1, "fas", "fa-font", "infoColor"], ["href", "https://fonts.google.com/specimen/Roboto", "target", "_blank", 1, "link", "infoColor"], [1, "fab", "fa-chrome", "infoColor"], ["href", "https://chrome.google.com/webstore/detail/allow-cors-access-control/lhobafahddgcelffkeicbaginigeejlf", "target", "_blank", 1, "link", "infoColor"], [1, "fab", "fa-firefox", "infoColor"], ["href", "https://addons.mozilla.org/en-US/firefox/addon/cors-everywhere/", "target", "_blank", 1, "link", "infoColor"], [1, "highlighted", "successColor"]], template: function HelpComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "CONTACT");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " GitHub repository ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " mmartinezb98@gmail.com ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Marcos Mart\u00EDnez Bl\u00E1zquez ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Logro\u00F1o, La Rioja, Spain ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Monoratilla");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "RESOURCES");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Powered by Steam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "i", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Powered by Font Awesome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "i", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Roboto font by Christian Robertson ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "section");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "APPLICATION INFO");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " For now this application has no backend, neither DB to store any information. We work directly from Steam API and CORS policy is strict in these cases, you will need a browser extension to work with InfoSteam. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "a", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Allow CORS extension for Chrome ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "a", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, " Allow CORS extension for Firefox ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "mat-divider");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "CHANGE LOG");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " - 1.0.0 Ver. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Lastest changes:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Release the first version of the app. (\uFF89\u25D5\u30EE\u25D5)\uFF89*:\uFF65\uFF9F\u2727 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "Incoming features:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](63, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66, "A funtional backend / DB so you don't have to download any browser extension. \u2764");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "Fastest load times.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "Sign in with your Steam account.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "Page redesign.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, "Code formatter for those who download the project.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_divider__WEBPACK_IMPORTED_MODULE_1__["MatDivider"]], styles: [".page-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  text-align: left;\n  line-height: 2;\n}\n.page-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .fab[_ngcontent-%COMP%] {\n  display: inline-block;\n  width: 20px;\n}\n.page-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.page-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   .highlighted[_ngcontent-%COMP%] {\n  font-variant: small-caps;\n}\n.page-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   mat-divider[_ngcontent-%COMP%] {\n  margin: 1em 0;\n}\n.page-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n@media only screen and (min-width: 768px) {\n  .page-container[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .page-container[_ngcontent-%COMP%]   section[_ngcontent-%COMP%] {\n    margin: 1em;\n    width: 50%;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .page-container[_ngcontent-%COMP%] {\n    width: 70%;\n    margin: 1em auto;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcaGVscC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztDQUFBO0FDRUE7Ozs7Q0FBQTtBQU1BO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxjQUFBO0FBR0o7QUFBUTs7RUFFSSxxQkFBQTtFQUNBLFdBQUE7QUFFWjtBQUFRO0VBQVEscUJBQUE7QUFHaEI7QUFGUTtFQUFlLHdCQUFBO0FBS3ZCO0FBSlE7RUFBYyxhQUFBO0FBT3RCO0FBTlE7RUFBSyxTQUFBO0FBU2I7QUFMQTs7OztDQUFBO0FBTUE7RUFDSTtJQUNJLG1CQUFBO0VBT047RUFOTTtJQUNJLFdBQUE7SUFDQSxVQUFBO0VBUVY7QUFDRjtBQUpBO0VBQ0k7SUFDSSxVQUFBO0lBQ0EsZ0JBQUE7RUFNTjtBQUNGIiwiZmlsZSI6ImhlbHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBWQVJJQUJMRVNcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuJGhlYWRlci1iZy1jb2xvcjogIzIxMjEyMTtcclxuJHNpZGVuYXYtYmctY29sb3I6ICMyNTI1MjU7XHJcbiRib2R5LWJnLWNvbG9yOiAjMzAzMDMwO1xyXG4kZXh0cmEtY29sb3I6ICM0ZjRmNGY7XHJcbiR0ZXh0LWNvbG9yOiAjZmZmO1xyXG4kZXJyb3ItY29sb3I6ICNmNDQzMzY7XHJcbiRwZXJmZWN0LWNvbG9yOiAjZmVjYzA5O1xyXG4kc3VjY2Vzcy1jb2xvcjogI2E1YzkzYTtcclxuJGdyZWF0LWNvbG9yOiAjZGE5NTJmO1xyXG4kaW5mby1jb2xvcjogIzU1YWVjZTtcclxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdmFyaWFibGVzJztcclxuXHJcbi8qXHJcbiAgICAtLS0tLS0tLS1cclxuICAgIEdFTkVSQUxcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGxpbmUtaGVpZ2h0OiAyO1xyXG5cclxuICAgIHNlY3Rpb24ge1xyXG4gICAgICAgIC5mYXMsXHJcbiAgICAgICAgLmZhYiB7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgd2lkdGg6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5saW5rIHsgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XHJcbiAgICAgICAgLmhpZ2hsaWdodGVkIHsgZm9udC12YXJpYW50OiBzbWFsbC1jYXBzOyB9XHJcbiAgICAgICAgbWF0LWRpdmlkZXIgeyBtYXJnaW46IDFlbSAwOyB9XHJcbiAgICAgICAgdWwgeyBtYXJnaW46IDA7IH1cclxuICAgIH1cclxufVxyXG5cclxuLypcclxuICAgIC0tLS0tLS0tLVxyXG4gICAgUkVTUE9OU0lWRVxyXG4gICAgLS0tLS0tLS0tXHJcbiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucGFnZS1jb250YWluZXIge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgc2VjdGlvbiB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMWVtO1xyXG4gICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HelpComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-help',
                templateUrl: './help.component.html',
                styleUrls: ['./help.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "qzhZ":
/*!****************************************************!*\
  !*** ./src/app/shared/pipes/show-utc-time.pipe.ts ***!
  \****************************************************/
/*! exports provided: ShowUTCTimePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShowUTCTimePipe", function() { return ShowUTCTimePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ShowUTCTimePipe {
    // Sun, 16 Jun 2013 14:58:40 GMT
    transform(utcTimeString) {
        const regex = /([\d]){2} ([A-z]){3} ([\d]){4}/g;
        return utcTimeString.match(regex);
    }
}
ShowUTCTimePipe.ɵfac = function ShowUTCTimePipe_Factory(t) { return new (t || ShowUTCTimePipe)(); };
ShowUTCTimePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "showUTCTime", type: ShowUTCTimePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ShowUTCTimePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'showUTCTime'
            }]
    }], null, null); })();


/***/ }),

/***/ "sBxo":
/*!*******************************************************!*\
  !*** ./src/app/shared/services/steam-user.service.ts ***!
  \*******************************************************/
/*! exports provided: SteamUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SteamUserService", function() { return SteamUserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../key */ "aQlU");
/* harmony import */ var _config_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../config.json */ "fcXd");
var _config_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../config.json */ "fcXd", 1);
/* harmony import */ var _abstract_services_abstract_steam_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../abstract-services/abstract-steam-user-service */ "z9yj");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");






class SteamUserService extends _abstract_services_abstract_steam_user_service__WEBPACK_IMPORTED_MODULE_3__["AbstractSteamUserService"] {
    constructor(http) {
        super();
        this.http = http;
        this.INTERFACE = 'ISteamUser';
    }
    /**
     * Return a list of friends of a specific user
     * @param steamid SteamID of user
     * @param relationship relationship type (ex: friend)
     */
    getFriendList(steamid, relationship) {
        let urlParams = '';
        if (relationship) {
            urlParams += `&relationship=${relationship}`;
        }
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetFriendList/v1/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamid=${steamid}${urlParams}`)
            .toPromise();
    }
    /**
     * @param steamids Comma-delimited list of SteamIDs
     */
    getPlayerBans(steamids) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetPlayerBans/v1/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamids=${steamids}`)
            .toPromise();
    }
    /**
     * Return a list with the major data of the users
     * @param steamids Comma-delimited list of SteamIDs (max: 100)
     */
    getPlayerSummaries(steamids) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetPlayerSummaries/v2/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamids=${steamids}`)
            .toPromise();
    }
    /**
     * Return a list of group ids which user has subscribed
     * @param steamid SteamID of user
     */
    getUserGroupList(steamid) {
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/GetUserGroupList/v1/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&steamid=${steamid}`)
            .toPromise();
    }
    /**
     * Return steamid of a user, group or game group
     * @param vanityUrl The vanity URL to get a SteamID for
     * @param urlType The type of vanity URL. 1 (default): Individual profile, 2: Group, 3: Official game group
     */
    resolveVanityURL(vanityUrl, urlType) {
        let urlParams = '';
        if (urlType) {
            urlParams += `&url_type=${urlType}`;
        }
        return this.http
            .get(`${_config_json__WEBPACK_IMPORTED_MODULE_2__["STEAM_API_URL"]}/${this.INTERFACE}/ResolveVanityURL/v1/?key=${_key__WEBPACK_IMPORTED_MODULE_1__["key"]}&vanityurl=${vanityUrl}${urlParams}`)
            .toPromise();
    }
}
SteamUserService.ɵfac = function SteamUserService_Factory(t) { return new (t || SteamUserService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"])); };
SteamUserService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SteamUserService, factory: SteamUserService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SteamUserService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "uUr/":
/*!**************************************************!*\
  !*** ./src/app/shared/helpers/header-img-url.ts ***!
  \**************************************************/
/*! exports provided: headerImgUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerImgUrl", function() { return headerImgUrl; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");

function headerImgUrl(appid) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        return `https://cdn.cloudflare.steamstatic.com/steam/apps/${appid}/header.jpg`;
    });
}


/***/ }),

/***/ "upGS":
/*!*************************************************!*\
  !*** ./src/app/shared/helpers/get-game-data.ts ***!
  \*************************************************/
/*! exports provided: getGameData */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGameData", function() { return getGameData; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _header_img_url__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header-img-url */ "uUr/");


function getGameData(appid, steamUserStats, steamApps) {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const { applist: { apps } } = yield steamApps.getAppList();
        const { name } = apps.find((app) => app.appid === appid);
        const { game } = yield steamUserStats.getSchemaForGame(appid);
        const { response: { player_count } } = yield steamUserStats.getNumberOfCurrentPlayers(appid);
        const gameImage = yield Object(_header_img_url__WEBPACK_IMPORTED_MODULE_1__["headerImgUrl"])(appid);
        return {
            game,
            appid,
            gameName: name,
            gameImage,
            player_count,
        };
    });
}


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/home/home.component */ "1LmZ");
/* harmony import */ var _pages_news_news_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/news/news.component */ "7yAP");
/* harmony import */ var _pages_game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/game-detail/game-detail.component */ "ToQW");
/* harmony import */ var _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/user-detail/user-detail.component */ "x5jG");
/* harmony import */ var _pages_help_help_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/help/help.component */ "kOAU");
/* harmony import */ var _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/page-not-found/page-not-found.component */ "BgzB");
// Angular


// Pages components








const routes = [
    {
        path: '',
        component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"],
    },
    {
        path: 'news',
        component: _pages_news_news_component__WEBPACK_IMPORTED_MODULE_3__["NewsComponent"],
    },
    {
        path: 'user/:steamid',
        component: _pages_user_detail_user_detail_component__WEBPACK_IMPORTED_MODULE_5__["UserDetailComponent"],
    },
    {
        path: 'game/:appid',
        component: _pages_game_detail_game_detail_component__WEBPACK_IMPORTED_MODULE_4__["GameDetailComponent"],
    },
    {
        path: 'help',
        component: _pages_help_help_component__WEBPACK_IMPORTED_MODULE_6__["HelpComponent"],
    },
    {
        path: '**',
        component: _pages_page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_7__["PageNotFoundComponent"]
    },
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "x5jG":
/*!************************************************************!*\
  !*** ./src/app/pages/user-detail/user-detail.component.ts ***!
  \************************************************************/
/*! exports provided: UserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDetailComponent", function() { return UserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _shared_helpers_get_user_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/helpers/get-user-data */ "Ra3v");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _shared_services_steam_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/services/steam-user.service */ "sBxo");
/* harmony import */ var _shared_services_player_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/services/player.service */ "dY/6");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "Wp6s");
/* harmony import */ var _components_recent_games_recent_games_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/recent-games/recent-games.component */ "OwCk");
/* harmony import */ var _shared_pipes_show_utc_time_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../shared/pipes/show-utc-time.pipe */ "qzhZ");











function UserDetailComponent_div_1_span_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_div_34_span_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Online");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
function UserDetailComponent_div_1_div_34_ng_template_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "span", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Offline");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} }
const _c0 = function (a1) { return ["/user/", a1]; };
function UserDetailComponent_div_1_div_34_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](2, "img", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, " Profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](8, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 30);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "InfoSteam");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "div", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserDetailComponent_div_1_div_34_span_13_Template, 2, 0, "span", 32);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](14, UserDetailComponent_div_1_div_34_ng_template_14_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const friend_r5 = ctx.$implicit;
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", friend_r5.avatar, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", friend_r5.personaname, " avatar");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](friend_r5.personaname);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", friend_r5.profileurl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, friend_r5.steamid));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", friend_r5.personastate === 1)("ngIfElse", _r7);
} }
function UserDetailComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "img", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](9, "titlecase");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, UserDetailComponent_div_1_span_12_Template, 2, 0, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, UserDetailComponent_div_1_ng_template_13_Template, 2, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](20, " Steam profile ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](27, "i", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](30, "showUTCTime");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](31, "i", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "mat-card", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](34, UserDetailComponent_div_1_div_34_Template, 16, 9, "div", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](35, "app-recent-games", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](14);
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.userData.player.avatarmedium, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r0.userData.player.personaname, " steam profile picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("src", ctx_r0.userData.player.avatarfull, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate1"]("alt", "", ctx_r0.userData.player.personaname, " steam profile picture");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](9, 16, ctx_r0.userData.player.personaname));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ctx_r0.userData.player.loccountrycode);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0.userData.player.personastate === 1)("ngIfElse", _r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Steam ID - ", ctx_r0.userData.player.steamid, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpropertyInterpolate"]("href", ctx_r0.userData.player.profileurl, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Level ", ctx_r0.userData.player_level, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Owned Games ", ctx_r0.userData.game_count, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" Account created - ", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](30, 18, ctx_r0.creationDate), " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx_r0.userData.friends.players);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("steamid", ctx_r0.steamid)("nGames", ctx_r0.nGames);
} }
class UserDetailComponent {
    constructor(route, router, steamUser, player) {
        this.route = route;
        this.router = router;
        this.steamUser = steamUser;
        this.player = player;
    }
    ngOnInit() {
        this.nGames = 3;
        this.route.params
            .subscribe(params => {
            this.steamid = params.steamid;
            this.getUserData(this.steamid);
        });
    }
    getUserData(steamid) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                this.userData = yield Object(_shared_helpers_get_user_data__WEBPACK_IMPORTED_MODULE_2__["getUserData"])(steamid, this.steamUser, this.player);
                this.creationDate = new Date(this.userData.player.timecreated * 1000).toUTCString();
            }
            catch (error) {
                console.error('Error while retrieving user data', error);
                this.router.navigate(['Page_Not_Found']);
            }
        });
    }
}
UserDetailComponent.ɵfac = function UserDetailComponent_Factory(t) { return new (t || UserDetailComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_steam_user_service__WEBPACK_IMPORTED_MODULE_4__["SteamUserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"])); };
UserDetailComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: UserDetailComponent, selectors: [["app-user-detail"]], decls: 2, vars: 1, consts: [[1, "page-container"], ["class", "user", 4, "ngIf"], [1, "user"], [1, "data"], [1, "image"], [1, "avatarmedium", 3, "src", "alt"], [1, "avatarfull", 3, "src", "alt"], [1, "info"], [1, "main"], ["class", "state successColor", 4, "ngIf", "ngIfElse"], ["userOffline", ""], [1, "fab", "fa-steam-symbol"], ["target", "_blank", 1, "link", "infoColor", 3, "href"], [1, "fas", "fa-external-link-alt", "infoColor"], [1, "perfectColor"], [1, "fab", "fa-ethereum", "perfectColor"], [1, "successColor"], [1, "fas", "fa-gamepad", "successColor"], [1, "fas", "fa-calendar-alt"], [1, "friends-card"], ["class", "friend extraBgColor", 4, "ngFor", "ngForOf"], [3, "steamid", "nGames"], [1, "state", "successColor"], [1, "state", "errorColor"], [1, "friend", "extraBgColor"], [1, "friend-image"], [3, "src", "alt"], [1, "friend-name"], [1, "friend-url", "infoColor"], [1, "friend-innerUrl", "infoColor"], [1, "link", "infoColor", 3, "routerLink"], [1, "friend-state"], ["class", "successColor", 4, "ngIf", "ngIfElse"], [1, "errorColor"]], template: function UserDetailComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, UserDetailComponent_div_1_Template, 36, 20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx.userData);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardContent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _components_recent_games_recent_games_component__WEBPACK_IMPORTED_MODULE_8__["RecentGamesComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["TitleCasePipe"], _shared_pipes_show_utc_time_pipe__WEBPACK_IMPORTED_MODULE_9__["ShowUTCTimePipe"]], styles: [".page-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n  margin-bottom: 1em;\n}\n.page-container[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .avatarfull[_ngcontent-%COMP%] {\n  display: none;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  margin: 1em auto;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n  text-align: center;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:first-child {\n  margin-right: 1em;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin-left: 1em;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 0.5em 0;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 0.9em;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.page-container[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n  vertical-align: super;\n}\n.page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%] {\n  margin: 1em auto;\n  height: 30vh;\n}\n.page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%] {\n  height: 30vh;\n  overflow-x: auto;\n}\n.page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 50px;\n  margin-bottom: 0.5em;\n  border-radius: 4px;\n}\n.page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: auto 0;\n  width: 33%;\n}\n.page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   .friend-url[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   .friend-innerUrl[_ngcontent-%COMP%] {\n  display: none;\n}\n.page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   .friend-url[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   .friend-innerUrl[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n.page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   .friend-url[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   .friend-innerUrl[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .fas[_ngcontent-%COMP%] {\n  font-size: 0.5em;\n  vertical-align: super;\n}\n\n@media only screen and (min-width: 768px) {\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: row-reverse;\n    width: 80%;\n    margin: auto;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%] {\n    width: 50%;\n    align-self: flex-end;\n    margin-bottom: 0;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .avatarmedium[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .image[_ngcontent-%COMP%]   .avatarfull[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    width: 50%;\n    margin: 0;\n    text-align: left;\n    align-self: center;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   .main[_ngcontent-%COMP%] {\n    text-align: left;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    margin: 0.75em 0;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child {\n    margin-top: 0;\n  }\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:last-child {\n    margin-bottom: 0;\n  }\n  .page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%] {\n    width: 80%;\n  }\n  .page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    width: 25%;\n  }\n  .page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   .friend-url[_ngcontent-%COMP%], .page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%]   .friend-innerUrl[_ngcontent-%COMP%] {\n    display: block;\n  }\n}\n@media only screen and (min-width: 1024px) {\n  .page-container[_ngcontent-%COMP%]   .data[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .page-container[_ngcontent-%COMP%]   .friends-card[_ngcontent-%COMP%]   mat-card-content[_ngcontent-%COMP%]   .friend[_ngcontent-%COMP%] {\n    padding: 0 10em;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxfdmFyaWFibGVzLnNjc3MiLCIuLlxcLi5cXC4uXFwuLlxcdXNlci1kZXRhaWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Q0FBQTtBQ0VBOzs7O0NBQUE7QUFPSTtFQUNJLGtCQUFBO0FBRVI7QUFEUTtFQUFjLGFBQUE7QUFJdEI7QUFESTtFQUNJLGdCQUFBO0FBR1I7QUFGUTtFQUNJLGtCQUFBO0FBSVo7QUFIWTtFQUFtQixpQkFBQTtBQU0vQjtBQUxZO0VBQWtCLGdCQUFBO0FBUTlCO0FBTFE7RUFDSSxlQUFBO0FBT1o7QUFMWTtFQUNJLGdCQUFBO0FBT2hCO0FBSlk7RUFDSSxxQkFBQTtBQU1oQjtBQUpnQjtFQUNJLGdCQUFBO0VBQ0EscUJBQUE7QUFNcEI7QUFBSTtFQUNJLGdCQUFBO0VBQ0EsWUFBQTtBQUVSO0FBQVE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUFFWjtBQUFZO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxZQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQUVoQjtBQURnQjtFQUFlLGdCQUFBO0FBSS9CO0FBSGdCO0VBQ0ksY0FBQTtFQUNBLFVBQUE7QUFLcEI7QUFIZ0I7O0VBRUksYUFBQTtBQUtwQjtBQUpvQjs7RUFDSSxxQkFBQTtBQU94QjtBQUx3Qjs7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0FBUTVCO0FBQ0E7Ozs7Q0FBQTtBQU1BO0VBRVE7SUFDSSxhQUFBO0lBQ0EsMkJBQUE7SUFDQSxVQUFBO0lBQ0EsWUFBQTtFQUFWO0VBRVU7SUFDSSxVQUFBO0lBQ0Esb0JBQUE7SUFDQSxnQkFBQTtFQUFkO0VBQ2M7SUFBZ0IsYUFBQTtFQUU5QjtFQURjO0lBQWMsZUFBQTtFQUk1QjtFQURVO0lBQ0ksVUFBQTtJQUNBLFNBQUE7SUFDQSxnQkFBQTtJQUNBLGtCQUFBO0VBR2Q7RUFGYztJQUFRLGdCQUFBO0VBS3RCO0VBSmM7SUFDSSxnQkFBQTtFQU1sQjtFQUxrQjtJQUFnQixhQUFBO0VBUWxDO0VBUGtCO0lBQWUsZ0JBQUE7RUFVakM7RUFMTTtJQUNJLFVBQUE7RUFPVjtFQUprQjtJQUFNLFVBQUE7RUFPeEI7RUFOa0I7O0lBQ21CLGNBQUE7RUFTckM7QUFDRjtBQUhBO0VBRVE7SUFBUSxVQUFBO0VBS2Q7RUFKTTtJQUNJLFVBQUE7RUFNVjtFQUpjO0lBQVUsZUFBQTtFQU94QjtBQUNGIiwiZmlsZSI6InVzZXItZGV0YWlsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLypcclxuICAgIC0tLS0tLS0tLVxyXG4gICAgVkFSSUFCTEVTXHJcbiAgICAtLS0tLS0tLS1cclxuKi9cclxuXHJcbiRoZWFkZXItYmctY29sb3I6ICMyMTIxMjE7XHJcbiRzaWRlbmF2LWJnLWNvbG9yOiAjMjUyNTI1O1xyXG4kYm9keS1iZy1jb2xvcjogIzMwMzAzMDtcclxuJGV4dHJhLWNvbG9yOiAjNGY0ZjRmO1xyXG4kdGV4dC1jb2xvcjogI2ZmZjtcclxuJGVycm9yLWNvbG9yOiAjZjQ0MzM2O1xyXG4kcGVyZmVjdC1jb2xvcjogI2ZlY2MwOTtcclxuJHN1Y2Nlc3MtY29sb3I6ICNhNWM5M2E7XHJcbiRncmVhdC1jb2xvcjogI2RhOTUyZjtcclxuJGluZm8tY29sb3I6ICM1NWFlY2U7XHJcbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3ZhcmlhYmxlcyc7XHJcblxyXG4vKlxyXG4gICAgLS0tLS0tLS0tXHJcbiAgICBNQUlOIENPTlRFTlRcclxuICAgIC0tLS0tLS0tLVxyXG4qL1xyXG5cclxuLnBhZ2UtY29udGFpbmVyIHtcclxuICAgIC5pbWFnZSB7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMWVtO1xyXG4gICAgICAgIC5hdmF0YXJmdWxsIHsgZGlzcGxheTogbm9uZTsgfVxyXG4gICAgfVxyXG5cclxuICAgIC5pbmZvIHtcclxuICAgICAgICBtYXJnaW46IDFlbSBhdXRvO1xyXG4gICAgICAgIC5tYWluIHtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgICBzcGFuOmZpcnN0LWNoaWxkIHsgbWFyZ2luLXJpZ2h0OiAxZW07IH1cclxuICAgICAgICAgICAgc3BhbjpsYXN0LWNoaWxkIHsgbWFyZ2luLWxlZnQ6IDFlbTsgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgbWFyZ2luOiAwLjVlbSAwO1xyXG5cclxuICAgICAgICAgICAgLmZhcyB7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDAuOWVtO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcblxyXG4gICAgICAgICAgICAgICAgLmZhcyB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogc3VwZXI7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmZyaWVuZHMtY2FyZCB7XHJcbiAgICAgICAgbWFyZ2luOiAxZW0gYXV0bztcclxuICAgICAgICBoZWlnaHQ6IDMwdmg7XHJcbiAgICAgICAgXHJcbiAgICAgICAgbWF0LWNhcmQtY29udGVudCB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMzB2aDtcclxuICAgICAgICAgICAgb3ZlcmZsb3cteDogYXV0bztcclxuXHJcbiAgICAgICAgICAgIC5mcmllbmQge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgICAgICAgICAgICAgICY6bGFzdC1jaGlsZCB7IG1hcmdpbi1ib3R0b206IDA7IH1cclxuICAgICAgICAgICAgICAgIGRpdiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBhdXRvIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDMzJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC5mcmllbmQtdXJsLFxyXG4gICAgICAgICAgICAgICAgLmZyaWVuZC1pbm5lclVybCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAubGluayB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5mYXMge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjVlbTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBzdXBlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLypcclxuICAgIC0tLS0tLS0tLVxyXG4gICAgUkVTUE9OU0lWRVxyXG4gICAgLS0tLS0tLS0tXHJcbiovXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAucGFnZS1jb250YWluZXIge1xyXG4gICAgICAgIC5kYXRhIHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXJnaW46IGF1dG87XHJcblxyXG4gICAgICAgICAgICAuaW1hZ2Uge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDUwJTtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgICAgIC5hdmF0YXJtZWRpdW0geyBkaXNwbGF5OiBub25lOyB9XHJcbiAgICAgICAgICAgICAgICAuYXZhdGFyZnVsbCB7IGRpc3BsYXk6IGlubGluZTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAuaW5mbyB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgICAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIC5tYWluIHsgdGV4dC1hbGlnbjogbGVmdDsgfVxyXG4gICAgICAgICAgICAgICAgZGl2IHtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW46IC43NWVtIDA7XHJcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCB7IG1hcmdpbi10b3A6IDA7IH1cclxuICAgICAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGQgeyBtYXJnaW4tYm90dG9tOiAwOyB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5mcmllbmRzLWNhcmQge1xyXG4gICAgICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgICAgICBtYXQtY2FyZC1jb250ZW50IHtcclxuICAgICAgICAgICAgICAgIC5mcmllbmQge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdiB7IHdpZHRoOiAyNSU7IH1cclxuICAgICAgICAgICAgICAgICAgICAuZnJpZW5kLXVybCxcclxuICAgICAgICAgICAgICAgICAgICAuZnJpZW5kLWlubmVyVXJsIHsgZGlzcGxheTogYmxvY2s7IH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMDI0cHgpIHtcclxuICAgIC5wYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgLmRhdGEgeyB3aWR0aDogNzAlOyB9XHJcbiAgICAgICAgLmZyaWVuZHMtY2FyZCB7XHJcbiAgICAgICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgICAgIG1hdC1jYXJkLWNvbnRlbnQge1xyXG4gICAgICAgICAgICAgICAgLmZyaWVuZCB7IHBhZGRpbmc6IDAgMTBlbTsgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](UserDetailComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-user-detail',
                templateUrl: './user-detail.component.html',
                styleUrls: ['./user-detail.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _shared_services_steam_user_service__WEBPACK_IMPORTED_MODULE_4__["SteamUserService"] }, { type: _shared_services_player_service__WEBPACK_IMPORTED_MODULE_5__["PlayerService"] }]; }, null); })();


/***/ }),

/***/ "xCw1":
/*!*************************************************************************!*\
  !*** ./src/app/shared/abstract-services/abstract-steam-apps-service.ts ***!
  \*************************************************************************/
/*! exports provided: AbstractSteamAppsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSteamAppsService", function() { return AbstractSteamAppsService; });
class AbstractSteamAppsService {
}


/***/ }),

/***/ "z9yj":
/*!*************************************************************************!*\
  !*** ./src/app/shared/abstract-services/abstract-steam-user-service.ts ***!
  \*************************************************************************/
/*! exports provided: AbstractSteamUserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbstractSteamUserService", function() { return AbstractSteamUserService; });
class AbstractSteamUserService {
}


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map