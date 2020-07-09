function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scroll-spy.directive */
    "./src/app/scroll-spy.directive.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _works_list_works_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./works-list/works-list.component */
    "./src/app/works-list/works-list.component.ts");
    /* harmony import */


    var _socials_socials_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./socials/socials.component */
    "./src/app/socials/socials.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");
    /* harmony import */


    var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./contacts/contacts.component */
    "./src/app/contacts/contacts.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0() {
      return ["DIV"];
    };

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'easy2learn-portfolio';
        this.currentSection = 'header';
      }

      _createClass(AppComponent, [{
        key: "onSectionChange",
        value: function onSectionChange(sectionId) {
          this.currentSection = sectionId;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 13,
      vars: 3,
      consts: [[1, "nav-panel-cont", 3, "currentSecID"], ["id", "parentDiv", "scrollSpy", "", 3, "spiedTags", "sectionChange"], ["id", "header"], ["id", "works"], ["id", "socials"], ["id", "team"], ["id", "contacts"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("sectionChange", function AppComponent_Template_div_sectionChange_1_listener($event) {
            return ctx.onSectionChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-works-list");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-socials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "app-team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "app-contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("currentSecID", ctx.currentSection);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("spiedTags", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](2, _c0));
        }
      },
      directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyDirective"], _header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _works_list_works_list_component__WEBPACK_IMPORTED_MODULE_4__["WorksListComponent"], _socials_socials_component__WEBPACK_IMPORTED_MODULE_5__["SocialsComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_6__["TeamComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_7__["ContactsComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterOutlet"]],
      styles: [".nav-panel-cont[_ngcontent-%COMP%] {\n  height: 0;\n  display: block;\n  position: fixed;\n  z-index: 99;\n  top: 50%;\n}\n\n#parentDiv[_ngcontent-%COMP%] {\n  max-height: 100vh;\n  overflow: hidden;\n  overflow-y: auto;\n}\n\n.current-section[_ngcontent-%COMP%] {\n  background-color: cornflowerblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXExlYXJuaW5nXFxIYWNrZXJVXFxXZWJcXGVhc3kybGVhcm4tcG9ydGZvbGlvL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxRQUFBO0FDQ0Y7O0FERUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdDQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LXBhbmVsLWNvbnR7XHJcbiAgaGVpZ2h0OiAwO1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB6LWluZGV4OiA5OTtcclxuICB0b3A6IDUwJTtcclxufVxyXG5cclxuI3BhcmVudERpdntcclxuICBtYXgtaGVpZ2h0OiAxMDB2aDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbn1cclxuXHJcbi5jdXJyZW50LXNlY3Rpb24ge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlXHJcbn1cclxuIiwiLm5hdi1wYW5lbC1jb250IHtcbiAgaGVpZ2h0OiAwO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGZpeGVkO1xuICB6LWluZGV4OiA5OTtcbiAgdG9wOiA1MCU7XG59XG5cbiNwYXJlbnREaXYge1xuICBtYXgtaGVpZ2h0OiAxMDB2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgb3ZlcmZsb3cteTogYXV0bztcbn1cblxuLmN1cnJlbnQtc2VjdGlvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./scroll-spy.directive */
    "./src/app/scroll-spy.directive.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _works_list_works_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./works-list/works-list.component */
    "./src/app/works-list/works-list.component.ts");
    /* harmony import */


    var _utils_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./utils/flip-card/flip-card.component */
    "./src/app/utils/flip-card/flip-card.component.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _socials_socials_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./socials/socials.component */
    "./src/app/socials/socials.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _utils_owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./utils/owl-carousel/owl-carousel.component */
    "./src/app/utils/owl-carousel/owl-carousel.component.ts");
    /* harmony import */


    var _team_team_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./team/team.component */
    "./src/app/team/team.component.ts");
    /* harmony import */


    var _utils_hover_card_hover_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./utils/hover-card/hover-card.component */
    "./src/app/utils/hover-card/hover-card.component.ts");
    /* harmony import */


    var _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./contacts/contacts.component */
    "./src/app/contacts/contacts.component.ts");
    /* harmony import */


    var _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./nav/nav.component */
    "./src/app/nav/nav.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js"); // Owl-Carousel


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyDirective"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _works_list_works_list_component__WEBPACK_IMPORTED_MODULE_7__["WorksListComponent"], _utils_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_8__["FlipCardComponent"], _socials_socials_component__WEBPACK_IMPORTED_MODULE_10__["SocialsComponent"], _utils_owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_13__["OwlCarouselComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_14__["TeamComponent"], _utils_hover_card_hover_card_component__WEBPACK_IMPORTED_MODULE_15__["HoverCardComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_16__["ContactsComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"]],
        imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _scroll_spy_directive__WEBPACK_IMPORTED_MODULE_2__["ScrollSpyDirective"], _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _works_list_works_list_component__WEBPACK_IMPORTED_MODULE_7__["WorksListComponent"], _utils_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_8__["FlipCardComponent"], _socials_socials_component__WEBPACK_IMPORTED_MODULE_10__["SocialsComponent"], _utils_owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_13__["OwlCarouselComponent"], _team_team_component__WEBPACK_IMPORTED_MODULE_14__["TeamComponent"], _utils_hover_card_hover_card_component__WEBPACK_IMPORTED_MODULE_15__["HoverCardComponent"], _contacts_contacts_component__WEBPACK_IMPORTED_MODULE_16__["ContactsComponent"], _nav_nav_component__WEBPACK_IMPORTED_MODULE_17__["NavComponent"]],
          imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_9__["FontAwesomeModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_11__["BrowserAnimationsModule"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_12__["CarouselModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/contacts/contacts.component.ts":
  /*!************************************************!*\
    !*** ./src/app/contacts/contacts.component.ts ***!
    \************************************************/

  /*! exports provided: ContactsComponent */

  /***/
  function srcAppContactsContactsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactsComponent", function () {
      return ContactsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/__ivy_ngcc__/fesm2015/angular-fontawesome.js");

    var ContactsComponent = /*#__PURE__*/function () {
      function ContactsComponent() {
        _classCallCheck(this, ContactsComponent);

        this.faMapMarker = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faMapMarker"];
        this.faPhone = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faPhone"];
        this.faEnvelope = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faEnvelope"];
      }

      _createClass(ContactsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactsComponent;
    }();

    ContactsComponent.ɵfac = function ContactsComponent_Factory(t) {
      return new (t || ContactsComponent)();
    };

    ContactsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ContactsComponent,
      selectors: [["app-contacts"]],
      decls: 28,
      vars: 3,
      consts: [[1, "contact-us__container", "fluid-container", "mt-5", "pt-2"], [1, "contact-us__header", "mt-2", "mb-5", "text-center"], [1, "container", "pb-2"], [1, "row", "contact-info", "mb-1", "text-center"], [1, "col-md-4"], [1, "contact-address"], [3, "icon"], [1, "contact-phone"], ["href", "https://www.free-css.com/free-css-templates"], [1, "contact-email"]],
      template: function ContactsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Contact Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "section", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "address");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " A108 Adam Street, NY 535022, USA ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Phone Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "+1 5589 55488 55");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "fa-icon", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Email");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "a", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "info@example.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faMapMarker);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faPhone);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("icon", ctx.faEnvelope);
        }
      },
      directives: [_fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_2__["FaIconComponent"]],
      styles: [".contact-us__header[_ngcontent-%COMP%] {\n  font-family: \"Fredericka the Great\", cursive;\n  font-size: 34px;\n}\n\n.contact-us__container[_ngcontent-%COMP%] {\n  background: #dbd7d7;\n}\n\n.contact-info[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 20px 0px;\n}\n\n.contact-info[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 48px;\n  display: inline-block;\n  margin-bottom: 10px;\n  color: #18d26e;\n}\n\n.contact-info[_ngcontent-%COMP%]   .contact-phone[_ngcontent-%COMP%] {\n  border-left: 1px solid #f3f3f3;\n  border-right: 1px solid #f3f3f3;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHMvRDpcXExlYXJuaW5nXFxIYWNrZXJVXFxXZWJcXGVhc3kybGVhcm4tcG9ydGZvbGlvL3NyY1xcYXBwXFxjb250YWN0c1xcY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbnRhY3RzL2NvbnRhY3RzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNENBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FER0E7RUFDRSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsaUJBQUE7QUNBRjs7QURHQTtFQUNFLGVBQUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtBQ0FKOztBREdBO0VBQ0UsOEJBQUE7RUFDQSwrQkFBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvY29udGFjdHMvY29udGFjdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFjdC11c19faGVhZGVye1xyXG4gIGZvbnQtZmFtaWx5OiAnRnJlZGVyaWNrYSB0aGUgR3JlYXQnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMzRweDtcclxufVxyXG5cclxuXHJcbi5jb250YWN0LXVzX19jb250YWluZXJ7XHJcbiAgYmFja2dyb3VuZDogcmdiKDIxOSwgMjE1LCAyMTUpO1xyXG59XHJcblxyXG4uY29udGFjdC1pbmZvID4gZGl2ID4gZGl2IHtcclxuICBwYWRkaW5nOiAyMHB4IDBweDtcclxufVxyXG5cclxuLmNvbnRhY3QtaW5mbyBpe1xyXG4gIGZvbnQtc2l6ZTogNDhweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBjb2xvcjogcmdiKDI0LCAyMTAsIDExMCk7XHJcbn1cclxuXHJcbi5jb250YWN0LWluZm8gLmNvbnRhY3QtcGhvbmV7XHJcbiAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZjNmM2YzO1xyXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNmM2YzZjM7XHJcbn1cclxuXHJcbiIsIi5jb250YWN0LXVzX19oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJGcmVkZXJpY2thIHRoZSBHcmVhdFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDM0cHg7XG59XG5cbi5jb250YWN0LXVzX19jb250YWluZXIge1xuICBiYWNrZ3JvdW5kOiAjZGJkN2Q3O1xufVxuXG4uY29udGFjdC1pbmZvID4gZGl2ID4gZGl2IHtcbiAgcGFkZGluZzogMjBweCAwcHg7XG59XG5cbi5jb250YWN0LWluZm8gaSB7XG4gIGZvbnQtc2l6ZTogNDhweDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICBjb2xvcjogIzE4ZDI2ZTtcbn1cblxuLmNvbnRhY3QtaW5mbyAuY29udGFjdC1waG9uZSB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2YzZjNmMztcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgI2YzZjNmMztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-contacts',
          templateUrl: './contacts.component.html',
          styleUrls: ['./contacts.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data/employees.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/data/employees.service.ts ***!
    \*******************************************/

  /*! exports provided: EmployeesService */

  /***/
  function srcAppDataEmployeesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeesService", function () {
      return EmployeesService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var EmployeesService = /*#__PURE__*/function () {
      //also update AppModule
      function EmployeesService(http) {
        _classCallCheck(this, EmployeesService);

        this.http = http;
        this.employeesList = [];
      } // private employeesList: Employee[] = [
      //   {
      //     id: 1,
      //     name: "Kurganova Marina",
      //     position: "Materials Developer",
      //     imageUrl: "../../../assets/images/person.png",
      //     description: "Senior teacher with more than 20 years of experience in teaching"
      //   },
      //   {
      //     id: 1,
      //     name: "Osmukha Zoia",
      //     position: "Social Connections Manager",
      //     imageUrl: "../../../assets/images/person.png",
      //     description: "Social Connections Manager with more ..."
      //   },
      //   {
      //     id: 1,
      //     name: "Pysarenko Oleg",
      //     position: "Technical Manager",
      //     imageUrl: "../../../assets/images/person.png",
      //     description: "Technical Manager with  ..."
      //   },
      //   {
      //     id: 1,
      //     name: "Sapozhnikova Viktoria",
      //     position: "Schedules Developer",
      //     imageUrl: "../../../assets/images/person.png",
      //     description: "Schedules Developer with  ..."
      //   }
      // ];


      _createClass(EmployeesService, [{
        key: "getEmployees",
        value: function getEmployees() {
          //created a copy
          //return a new Array and use the spread operator to fill the array
          return _toConsumableArray(this.employeesList);
        }
      }, {
        key: "addEmployee",
        value: function addEmployee(employee) {
          this.employeesList.push(employee);
        }
      }, {
        key: "loadEmployeesList",
        value: function loadEmployeesList() {
          var url = 'https://easy2learn-portfolio.herokuapp.com/api/employees';
          return this.http.get(url);
        }
      }]);

      return EmployeesService;
    }();

    EmployeesService.ɵfac = function EmployeesService_Factory(t) {
      return new (t || EmployeesService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    EmployeesService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: EmployeesService,
      factory: EmployeesService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeesService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/data/works.service.ts":
  /*!***************************************!*\
    !*** ./src/app/data/works.service.ts ***!
    \***************************************/

  /*! exports provided: WorksService */

  /***/
  function srcAppDataWorksServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorksService", function () {
      return WorksService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var WorksService = /*#__PURE__*/function () {
      function WorksService(http) {
        _classCallCheck(this, WorksService);

        this.http = http;
        this.worksList = [];
      } // private worksList: Work[] = [
      //   {
      //     id: 1,
      //     title: "Easy2λearn (Android)",
      //     description: "An android application designed for learning English words. Easy and joyful way to increase kids vocabulary via games and competions",
      //     imageUrl: "../../../assets/images/app_bg.jpg"
      //   },
      //   {
      //     id: 2,
      //     title: "Easy2λearn (IOS)",
      //     description: "An IOS application designed for learning English words. Easy and joyful way to increase kids vocabulary via games and competions",
      //     imageUrl: "../../../assets/images/app_bg.jpg"
      //   },
      //   {
      //     id: 3,
      //     title: "Easy2λearn Kids Club",
      //     description: "Classes for kids 0+. Early development, language courses, educational meetings and dozens of specialists who love what they do!",
      //     imageUrl: "../../../assets/images/app_bg.jpg"
      //   },
      //   {
      //     id: 4,
      //     title: "Easy2λearn Materials",
      //     description: "Educational materials, projects and ideas for teachers and parents. Hundreds of innovations based on the experience of the past",
      //     imageUrl: "../../../assets/images/app_bg.jpg"
      //   }
      // ];


      _createClass(WorksService, [{
        key: "getWorks",
        value: function getWorks() {
          return _toConsumableArray(this.worksList);
        }
      }, {
        key: "addWord",
        value: function addWord(work) {
          this.worksList.push(work);
        }
      }, {
        key: "loadWorksList",
        value: function loadWorksList() {
          var url = 'https://easy2learn-portfolio.herokuapp.com/api/works';
          return this.http.get(url);
        }
      }]);

      return WorksService;
    }();

    WorksService.ɵfac = function WorksService_Factory(t) {
      return new (t || WorksService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
    };

    WorksService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: WorksService,
      factory: WorksService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HeaderComponent_ngb_carousel_0_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Welcome to easy2\u03BBearn Club.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Let's play and remember");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var image_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", image_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    function HeaderComponent_ngb_carousel_0_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_ngb_carousel_0_1_ng_template_0_Template, 7, 1, "ng-template", 2);
      }
    }

    function HeaderComponent_ngb_carousel_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ngb-carousel");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_ngb_carousel_0_1_Template, 1, 0, undefined, 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.images);
      }
    }

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(config) {
        _classCallCheck(this, HeaderComponent);

        // customize default values of carousels used by this component tree
        config.interval = 10000;
        config.wrap = false;
        config.keyboard = false;
        config.pauseOnHover = false;
        this.images = ['./assets/images/image_1.jpg', './assets/images/image_2.jpg', './assets/images/image_3.jpg', './assets/images/image_4.jpg'];
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
      return new (t || HeaderComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]));
    };

    HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HeaderComponent,
      selectors: [["app-header"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]])],
      decls: 1,
      vars: 1,
      consts: [[4, "ngIf"], [4, "ngFor", "ngForOf"], ["ngbSlide", "", "class", "image-item"], [1, "picsum-img-wrapper"], ["alt", "First slide", 3, "src"], [1, "carousel-caption"]],
      template: function HeaderComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, HeaderComponent_ngb_carousel_0_Template, 2, 1, "ngb-carousel", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.images);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarousel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbSlide"]],
      styles: [".picsum-img-wrapper[_ngcontent-%COMP%] {\n  height: 70vh;\n  text-align: center;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.picsum-img-wrapper[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  max-width: 100%;\n}\n\n.carousel-caption[_ngcontent-%COMP%] {\n  font-family: \"Fredericka the Great\", cursive;\n}\n\n@media only screen and (max-width: 600px) {\n  .picsum-img-wrapper[_ngcontent-%COMP%] {\n    height: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL0Q6XFxMZWFybmluZ1xcSGFja2VyVVxcV2ViXFxlYXN5MmxlYXJuLXBvcnRmb2xpby9zcmNcXGFwcFxcaGVhZGVyXFxoZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtBQ0NGOztBREVBO0VBQ0UsNENBQUE7QUNDRjs7QURFQTtFQUNFO0lBQ0UsWUFBQTtFQ0NGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnBpY3N1bS1pbWctd3JhcHBlcntcclxuICBoZWlnaHQ6IDcwdmg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLnBpY3N1bS1pbWctd3JhcHBlciBpbWd7XHJcbiAgbWF4LXdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4uY2Fyb3VzZWwtY2FwdGlvbntcclxuICBmb250LWZhbWlseTogJ0ZyZWRlcmlja2EgdGhlIEdyZWF0JywgY3Vyc2l2ZTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gIC5waWNzdW0taW1nLXdyYXBwZXJ7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG59XHJcbiIsIi5waWNzdW0taW1nLXdyYXBwZXIge1xuICBoZWlnaHQ6IDcwdmg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5waWNzdW0taW1nLXdyYXBwZXIgaW1nIHtcbiAgbWF4LXdpZHRoOiAxMDAlO1xufVxuXG4uY2Fyb3VzZWwtY2FwdGlvbiB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZWRlcmlja2EgdGhlIEdyZWF0XCIsIGN1cnNpdmU7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnBpY3N1bS1pbWctd3JhcHBlciB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-header',
          templateUrl: './header.component.html',
          styleUrls: ['./header.component.scss'],
          providers: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]]
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbCarouselConfig"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/nav/nav.component.ts":
  /*!**************************************!*\
    !*** ./src/app/nav/nav.component.ts ***!
    \**************************************/

  /*! exports provided: NavComponent */

  /***/
  function srcAppNavNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavComponent", function () {
      return NavComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0) {
      return {
        "current-section": a0
      };
    };

    var NavComponent = /*#__PURE__*/function () {
      function NavComponent() {
        _classCallCheck(this, NavComponent);
      }

      _createClass(NavComponent, [{
        key: "scrollTo",
        value: function scrollTo(section) {
          document.querySelector('#' + section).scrollIntoView();
        }
      }]);

      return NavComponent;
    }();

    NavComponent.ɵfac = function NavComponent_Factory(t) {
      return new (t || NavComponent)();
    };

    NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NavComponent,
      selectors: [["app-nav"]],
      inputs: {
        currentSecID: "currentSecID"
      },
      decls: 17,
      vars: 15,
      consts: [[1, "nav-panel"], [1, "list"], [1, "pointer", 3, "ngClass", "click"]],
      template: function NavComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_2_listener() {
            return ctx.scrollTo("header");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Header");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_5_listener() {
            return ctx.scrollTo("works");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Works");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_8_listener() {
            return ctx.scrollTo("socials");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Socials");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_11_listener() {
            return ctx.scrollTo("team");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Team");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_li_click_14_listener() {
            return ctx.scrollTo("contacts");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Contacts");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](5, _c0, ctx.currentSecID === "header"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c0, ctx.currentSecID === "works"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](9, _c0, ctx.currentSecID === "socials"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.currentSecID === "team"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.currentSecID === "contacts"));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
      styles: [".nav-panel[_ngcontent-%COMP%] {\n  position: -webkit-sticky;\n  position: sticky;\n  transform: translateY(-50%);\n  z-index: 100;\n}\n\n.list[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n  list-style-type: none;\n}\n\n.pointer[_ngcontent-%COMP%] {\n  background: url('pointer-34.png') no-repeat left top;\n  height: 34px;\n  padding-top: 7px;\n  padding-left: 40px;\n  margin: 10px;\n}\n\nli.current-section.pointer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  color: #5d50ff;\n  transform: scale(1.5);\n}\n\nli.pointer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  display: block;\n  transition: transform 0.2s ease-in-out;\n  transform-origin: 0 50%;\n}\n\nli.pointer[_ngcontent-%COMP%]:hover   span[_ngcontent-%COMP%] {\n  color: #5d50ff;\n  transform: scale(1.5);\n}\n\n@media only screen and (max-width: 600px) {\n  .nav-panel[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L0Q6XFxMZWFybmluZ1xcSGFja2VyVVxcV2ViXFxlYXN5MmxlYXJuLXBvcnRmb2xpby9zcmNcXGFwcFxcbmF2XFxuYXYuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL25hdi9uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBQTtFQUFBLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FERUE7RUFDRSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHFCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvREFBQTtFQUNBLFlBQUE7RUFFQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDSSxjQUFBO0VBQ0Esc0NBQUE7RUFDQSx1QkFBQTtBQ0FKOztBREdBO0VBQ0UsY0FBQTtFQUNBLHFCQUFBO0FDQUY7O0FER0E7RUFDRTtJQUNFLGFBQUE7RUNBRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtcGFuZWx7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcblxyXG4ubGlzdHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIG1hcmdpbjogMDtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbn1cclxuXHJcbi5wb2ludGVye1xyXG4gIGJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL2ljb25zL3BvaW50ZXItMzQucG5nJykgbm8tcmVwZWF0IGxlZnQgdG9wO1xyXG4gIGhlaWdodDogMzRweDtcclxuICAvLyB3aWR0aDogMzRweDtcclxuICBwYWRkaW5nLXRvcDogN3B4O1xyXG4gIHBhZGRpbmctbGVmdDogNDBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbmxpLmN1cnJlbnQtc2VjdGlvbi5wb2ludGVyIHNwYW57XHJcbiAgY29sb3I6ICM1ZDUwZmY7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xyXG59XHJcblxyXG5saS5wb2ludGVyIHNwYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gICAgdHJhbnNmb3JtLW9yaWdpbjogMCA1MCU7XHJcbn1cclxuXHJcbmxpLnBvaW50ZXI6aG92ZXIgc3BhbntcclxuICBjb2xvcjogIzVkNTBmZjtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuNSk7XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAubmF2LXBhbmVse1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICB9XHJcbn1cclxuIiwiLm5hdi1wYW5lbCB7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtNTAlKTtcbiAgei1pbmRleDogMTAwO1xufVxuXG4ubGlzdCB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xufVxuXG4ucG9pbnRlciB7XG4gIGJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9pY29ucy9wb2ludGVyLTM0LnBuZ1wiKSBuby1yZXBlYXQgbGVmdCB0b3A7XG4gIGhlaWdodDogMzRweDtcbiAgcGFkZGluZy10b3A6IDdweDtcbiAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG5cbmxpLmN1cnJlbnQtc2VjdGlvbi5wb2ludGVyIHNwYW4ge1xuICBjb2xvcjogIzVkNTBmZjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG5saS5wb2ludGVyIHNwYW4ge1xuICBkaXNwbGF5OiBibG9jaztcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuMnMgZWFzZS1pbi1vdXQ7XG4gIHRyYW5zZm9ybS1vcmlnaW46IDAgNTAlO1xufVxuXG5saS5wb2ludGVyOmhvdmVyIHNwYW4ge1xuICBjb2xvcjogIzVkNTBmZjtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjUpO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5uYXYtcGFuZWwge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-nav',
          templateUrl: './nav.component.html',
          styleUrls: ['./nav.component.scss']
        }]
      }], function () {
        return [];
      }, {
        currentSecID: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/scroll-spy.directive.ts":
  /*!*****************************************!*\
    !*** ./src/app/scroll-spy.directive.ts ***!
    \*****************************************/

  /*! exports provided: ScrollSpyDirective */

  /***/
  function srcAppScrollSpyDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScrollSpyDirective", function () {
      return ScrollSpyDirective;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ScrollSpyDirective = /*#__PURE__*/function () {
      function ScrollSpyDirective(_el) {
        _classCallCheck(this, ScrollSpyDirective);

        this._el = _el;
        this.spiedTags = [];
        this.sectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(ScrollSpyDirective, [{
        key: "onScroll",
        value: function onScroll(event) {
          var _this = this;

          var currentSection;
          var children = this._el.nativeElement.children;
          var scrollTop = event.target.scrollTop;
          var parentOffset = event.target.offsetTop;

          var _loop = function _loop(i) {
            var element = children[i];

            if (_this.spiedTags.some(function (spiedTag) {
              return spiedTag === element.tagName;
            })) {
              if (element.offsetTop - parentOffset <= scrollTop) {
                currentSection = element.id;
              }
            }
          };

          for (var i = 0; i < children.length; i++) {
            _loop(i);
          }

          if (currentSection !== this.currentSection) {
            this.currentSection = currentSection;
            this.sectionChange.emit(this.currentSection);
          }
        }
      }]);

      return ScrollSpyDirective;
    }();

    ScrollSpyDirective.ɵfac = function ScrollSpyDirective_Factory(t) {
      return new (t || ScrollSpyDirective)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]));
    };

    ScrollSpyDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
      type: ScrollSpyDirective,
      selectors: [["", "scrollSpy", ""]],
      hostBindings: function ScrollSpyDirective_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("scroll", function ScrollSpyDirective_scroll_HostBindingHandler($event) {
            return ctx.onScroll($event);
          });
        }
      },
      inputs: {
        spiedTags: "spiedTags"
      },
      outputs: {
        sectionChange: "sectionChange"
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ScrollSpyDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
          selector: '[scrollSpy]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
        }];
      }, {
        spiedTags: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        sectionChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        onScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
          args: ['scroll', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/socials/socials.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/socials/socials.component.ts ***!
    \**********************************************/

  /*! exports provided: SocialsComponent */

  /***/
  function srcAppSocialsSocialsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocialsComponent", function () {
      return SocialsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @fortawesome/free-solid-svg-icons */
    "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
    /* harmony import */


    var _utils_owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../utils/owl-carousel/owl-carousel.component */
    "./src/app/utils/owl-carousel/owl-carousel.component.ts");

    var SocialsComponent = /*#__PURE__*/function () {
      function SocialsComponent() {
        _classCallCheck(this, SocialsComponent);

        this.faCoffee = _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_1__["faCoffee"];
      }

      _createClass(SocialsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SocialsComponent;
    }();

    SocialsComponent.ɵfac = function SocialsComponent_Factory(t) {
      return new (t || SocialsComponent)();
    };

    SocialsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SocialsComponent,
      selectors: [["app-socials"]],
      decls: 5,
      vars: 0,
      consts: [[1, "socials__container", "fluid-container", "mt-5", "pt-2"], [1, "socials__header", "mt-2", "mb-5", "text-center"], [1, "container", "pb-2"]],
      template: function SocialsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Follow Us ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-owl-carousel");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_utils_owl_carousel_owl_carousel_component__WEBPACK_IMPORTED_MODULE_2__["OwlCarouselComponent"]],
      styles: [".socials__header[_ngcontent-%COMP%] {\n  font-family: \"Fredericka the Great\", cursive;\n  font-size: 34px;\n}\n\n.socials__container[_ngcontent-%COMP%] {\n  background: #dbd7d7;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc29jaWFscy9EOlxcTGVhcm5pbmdcXEhhY2tlclVcXFdlYlxcZWFzeTJsZWFybi1wb3J0Zm9saW8vc3JjXFxhcHBcXHNvY2lhbHNcXHNvY2lhbHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NvY2lhbHMvc29jaWFscy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUFBO0VBQ0EsZUFBQTtBQ0NGOztBREVBO0VBQ0UsbUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3NvY2lhbHMvc29jaWFscy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zb2NpYWxzX19oZWFkZXJ7XHJcbiAgZm9udC1mYW1pbHk6ICdGcmVkZXJpY2thIHRoZSBHcmVhdCcsIGN1cnNpdmU7XHJcbiAgZm9udC1zaXplOiAzNHB4O1xyXG59XHJcblxyXG4uc29jaWFsc19fY29udGFpbmVye1xyXG4gIGJhY2tncm91bmQ6IHJnYigyMTksIDIxNSwgMjE1KTtcclxufVxyXG4iLCIuc29jaWFsc19faGVhZGVyIHtcbiAgZm9udC1mYW1pbHk6IFwiRnJlZGVyaWNrYSB0aGUgR3JlYXRcIiwgY3Vyc2l2ZTtcbiAgZm9udC1zaXplOiAzNHB4O1xufVxuXG4uc29jaWFsc19fY29udGFpbmVyIHtcbiAgYmFja2dyb3VuZDogI2RiZDdkNztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SocialsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-socials',
          templateUrl: './socials.component.html',
          styleUrls: ['./socials.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/team/team.component.ts":
  /*!****************************************!*\
    !*** ./src/app/team/team.component.ts ***!
    \****************************************/

  /*! exports provided: TeamComponent */

  /***/
  function srcAppTeamTeamComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeamComponent", function () {
      return TeamComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_employees_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../data/employees.service */
    "./src/app/data/employees.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _utils_hover_card_hover_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../utils/hover-card/hover-card.component */
    "./src/app/utils/hover-card/hover-card.component.ts");

    function TeamComponent_app_hover_card_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-hover-card", 4);
      }

      if (rf & 2) {
        var employee_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("name", employee_r1.name)("position", employee_r1.position)("description", employee_r1.description)("imageUrl", employee_r1.imageurl);
      }
    }

    var TeamComponent = /*#__PURE__*/function () {
      function TeamComponent(employeesService) {
        _classCallCheck(this, TeamComponent);

        this.employeesService = employeesService; // employees = EMPLOYEES;

        this.employees = [];
      }

      _createClass(TeamComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          // this.employees = this.employeesService.getEmployees();
          this.employeesService.loadEmployeesList().subscribe(function (employees) {
            _this2.employees = employees;
          });
        }
      }]);

      return TeamComponent;
    }();

    TeamComponent.ɵfac = function TeamComponent_Factory(t) {
      return new (t || TeamComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_employees_service__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"]));
    };

    TeamComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: TeamComponent,
      selectors: [["app-team"]],
      decls: 5,
      vars: 1,
      consts: [[1, "team__header", "m-5", "text-center"], [1, "team__container", "container"], [1, "row"], ["class", "col-lg-6 col-sm-12 mb-1", 3, "name", "position", "description", "imageUrl", 4, "ngFor", "ngForOf"], [1, "col-lg-6", "col-sm-12", "mb-1", 3, "name", "position", "description", "imageUrl"]],
      template: function TeamComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Our Team ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "section", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, TeamComponent_app_hover_card_4_Template, 1, 4, "app-hover-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _utils_hover_card_hover_card_component__WEBPACK_IMPORTED_MODULE_3__["HoverCardComponent"]],
      styles: [".team__header[_ngcontent-%COMP%] {\n  font-family: \"Fredericka the Great\", cursive;\n  font-size: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGVhbS9EOlxcTGVhcm5pbmdcXEhhY2tlclVcXFdlYlxcZWFzeTJsZWFybi1wb3J0Zm9saW8vc3JjXFxhcHBcXHRlYW1cXHRlYW0uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3RlYW0vdGVhbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGVhbS90ZWFtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRlYW1fX2hlYWRlcntcclxuICBmb250LWZhbWlseTogJ0ZyZWRlcmlja2EgdGhlIEdyZWF0JywgY3Vyc2l2ZTtcclxuICBmb250LXNpemU6IDM0cHg7XHJcbn1cclxuIiwiLnRlYW1fX2hlYWRlciB7XG4gIGZvbnQtZmFtaWx5OiBcIkZyZWRlcmlja2EgdGhlIEdyZWF0XCIsIGN1cnNpdmU7XG4gIGZvbnQtc2l6ZTogMzRweDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TeamComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-team',
          templateUrl: './team.component.html',
          styleUrls: ['./team.component.scss']
        }]
      }], function () {
        return [{
          type: _data_employees_service__WEBPACK_IMPORTED_MODULE_1__["EmployeesService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/utils/flip-card/flip-card.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/utils/flip-card/flip-card.component.ts ***!
    \********************************************************/

  /*! exports provided: FlipCardComponent */

  /***/
  function srcAppUtilsFlipCardFlipCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FlipCardComponent", function () {
      return FlipCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FlipCardComponent = /*#__PURE__*/function () {
      function FlipCardComponent() {
        _classCallCheck(this, FlipCardComponent);
      }

      _createClass(FlipCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FlipCardComponent;
    }();

    FlipCardComponent.ɵfac = function FlipCardComponent_Factory(t) {
      return new (t || FlipCardComponent)();
    };

    FlipCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: FlipCardComponent,
      selectors: [["app-flip-card"]],
      inputs: {
        workTitle: "workTitle",
        workDescription: "workDescription",
        workImage: "workImage"
      },
      decls: 9,
      vars: 3,
      consts: [[1, "flip-card"], [1, "flip-card-inner"], [1, "flip-card-front"], ["alt", "Image", 3, "src"], [1, "flip-card-back"], [1, "p-2"]],
      template: function FlipCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/", ctx.workImage, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.workTitle);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.workDescription, " ");
        }
      },
      styles: [".flip-card[_ngcontent-%COMP%] {\n  background-color: transparent;\n  height: 300px;\n  perspective: 1000px;\n}\n\n.flip-card-inner[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.6s;\n  transform-style: preserve-3d;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);\n  font-family: \"Roboto\", sans-serif;\n}\n\n.flip-card[_ngcontent-%COMP%]:hover   .flip-card-inner[_ngcontent-%COMP%] {\n  transform: rotateY(180deg);\n}\n\n.flip-card-front[_ngcontent-%COMP%], .flip-card-back[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  backface-visibility: hidden;\n}\n\n.flip-card-front[_ngcontent-%COMP%] {\n  background-color: #bbb;\n  color: black;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n\n.flip-card-back[_ngcontent-%COMP%] {\n  background-color: #2980b9;\n  color: white;\n  transform: rotateY(180deg);\n  display: flex;\n  align-items: center;\n}\n\n.flip-card-front[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: inherit;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvZmxpcC1jYXJkL0Q6XFxMZWFybmluZ1xcSGFja2VyVVxcV2ViXFxlYXN5MmxlYXJuLXBvcnRmb2xpby9zcmNcXGFwcFxcdXRpbHNcXGZsaXAtY2FyZFxcZmxpcC1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91dGlscy9mbGlwLWNhcmQvZmxpcC1jYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7QUNBRjs7QURHQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7RUFDQSwwQ0FBQTtFQUNBLGlDQUFBO0FDQUY7O0FER0E7RUFDRSwwQkFBQTtBQ0FGOztBREdBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQ0EsMkJBQUE7QUNBRjs7QURHQTtFQUNFLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDhCQUFBO0FDQUY7O0FER0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtBQ0FGOztBREdBO0VBQ0UsY0FBQTtBQ0FGIiwiZmlsZSI6InNyYy9hcHAvdXRpbHMvZmxpcC1jYXJkL2ZsaXAtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGlwLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIC8vIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjZzO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLDAsMCwwLjIpO1xyXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcclxufVxyXG5cclxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1mcm9udCwgLmZsaXAtY2FyZC1iYWNrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1mcm9udCB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2JiYjtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG5cclxuLmZsaXAtY2FyZC1iYWNrIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGlwLWNhcmQtZnJvbnQgaW1ne1xyXG4gIHdpZHRoOiBpbmhlcml0O1xyXG59XHJcblxyXG4iLCIuZmxpcC1jYXJkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGhlaWdodDogMzAwcHg7XG4gIHBlcnNwZWN0aXZlOiAxMDAwcHg7XG59XG5cbi5mbGlwLWNhcmQtaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuNnM7XG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgZm9udC1mYW1pbHk6IFwiUm9ib3RvXCIsIHNhbnMtc2VyaWY7XG59XG5cbi5mbGlwLWNhcmQ6aG92ZXIgLmZsaXAtY2FyZC1pbm5lciB7XG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xufVxuXG4uZmxpcC1jYXJkLWZyb250LCAuZmxpcC1jYXJkLWJhY2sge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuO1xuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi5mbGlwLWNhcmQtZnJvbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmJiO1xuICBjb2xvcjogYmxhY2s7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cblxuLmZsaXAtY2FyZC1iYWNrIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcbiAgY29sb3I6IHdoaXRlO1xuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsaXAtY2FyZC1mcm9udCBpbWcge1xuICB3aWR0aDogaW5oZXJpdDtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FlipCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-flip-card',
          templateUrl: './flip-card.component.html',
          styleUrls: ['./flip-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        workTitle: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        workDescription: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        workImage: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/utils/hover-card/hover-card.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/utils/hover-card/hover-card.component.ts ***!
    \**********************************************************/

  /*! exports provided: HoverCardComponent */

  /***/
  function srcAppUtilsHoverCardHoverCardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HoverCardComponent", function () {
      return HoverCardComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HoverCardComponent = /*#__PURE__*/function () {
      function HoverCardComponent() {
        _classCallCheck(this, HoverCardComponent);
      }

      _createClass(HoverCardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HoverCardComponent;
    }();

    HoverCardComponent.ɵfac = function HoverCardComponent_Factory(t) {
      return new (t || HoverCardComponent)();
    };

    HoverCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HoverCardComponent,
      selectors: [["app-hover-card"]],
      inputs: {
        name: "name",
        position: "position",
        description: "description",
        imageUrl: "imageUrl"
      },
      decls: 11,
      vars: 4,
      consts: [[1, "card", "mb-3"], ["alt", "Card image cap", 1, "card-img", 3, "src"], [1, "card-body"], [1, "card-info"], [1, "card-description"]],
      template: function HoverCardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "/", ctx.imageUrl, "", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.name);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.position);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.description, " ");
        }
      },
      styles: [".card[_ngcontent-%COMP%] {\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: stretch;\n}\n\n.card[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex-basis: 50%;\n  flex-grow: 1;\n  flex-shrink: 1;\n}\n\n.card-img[_ngcontent-%COMP%] {\n  height: 300px;\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%] {\n  transition: background-color 500ms linear;\n  background: #8358ab;\n}\n\n.card-body[_ngcontent-%COMP%] {\n  position: relative;\n}\n\n.card-info[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.card-description[_ngcontent-%COMP%] {\n  visibility: hidden;\n  color: white;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .card-info[_ngcontent-%COMP%] {\n  visibility: hidden;\n}\n\n.card[_ngcontent-%COMP%]:hover   .card-body[_ngcontent-%COMP%]   .card-description[_ngcontent-%COMP%] {\n  visibility: visible;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvaG92ZXItY2FyZC9EOlxcTGVhcm5pbmdcXEhhY2tlclVcXFdlYlxcZWFzeTJsZWFybi1wb3J0Zm9saW8vc3JjXFxhcHBcXHV0aWxzXFxob3Zlci1jYXJkXFxob3Zlci1jYXJkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91dGlscy9ob3Zlci1jYXJkL2hvdmVyLWNhcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0Esb0JBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0VBQ0EsY0FBQTtBQ0NGOztBREVBO0VBQ0UsYUFBQTtBQ0NGOztBREVBO0VBQ0UseUNBQUE7RUFDQSxtQkFBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQ0NGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsbUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL3V0aWxzL2hvdmVyLWNhcmQvaG92ZXItY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJke1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbn1cclxuXHJcbi5jYXJkID4gZGl2e1xyXG4gIGZsZXgtYmFzaXM6IDUwJTtcclxuICBmbGV4LWdyb3c6IDE7XHJcbiAgZmxleC1zaHJpbms6IDE7XHJcbn1cclxuXHJcbi5jYXJkLWltZ3tcclxuICBoZWlnaHQ6IDMwMHB4O1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciAuY2FyZC1ib2R5e1xyXG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgbGluZWFyO1xyXG4gIGJhY2tncm91bmQ6IHJnYigxMzEsIDg4LCAxNzEpO1xyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmNhcmQtaW5mb3tcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgdG9wOiA1MCU7XHJcbiAgbGVmdDogNTAlO1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xyXG59XHJcblxyXG4uY2FyZC1kZXNjcmlwdGlvbntcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIC5jYXJkLWJvZHkgLmNhcmQtaW5mb3tcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuLmNhcmQ6aG92ZXIgLmNhcmQtYm9keSAuY2FyZC1kZXNjcmlwdGlvbntcclxuICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG59XHJcbiIsIi5jYXJkIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xufVxuXG4uY2FyZCA+IGRpdiB7XG4gIGZsZXgtYmFzaXM6IDUwJTtcbiAgZmxleC1ncm93OiAxO1xuICBmbGV4LXNocmluazogMTtcbn1cblxuLmNhcmQtaW1nIHtcbiAgaGVpZ2h0OiAzMDBweDtcbn1cblxuLmNhcmQ6aG92ZXIgLmNhcmQtYm9keSB7XG4gIHRyYW5zaXRpb246IGJhY2tncm91bmQtY29sb3IgNTAwbXMgbGluZWFyO1xuICBiYWNrZ3JvdW5kOiAjODM1OGFiO1xufVxuXG4uY2FyZC1ib2R5IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uY2FyZC1pbmZvIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmNhcmQtZGVzY3JpcHRpb24ge1xuICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmNhcmQ6aG92ZXIgLmNhcmQtYm9keSAuY2FyZC1pbmZvIHtcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xufVxuXG4uY2FyZDpob3ZlciAuY2FyZC1ib2R5IC5jYXJkLWRlc2NyaXB0aW9uIHtcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HoverCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-hover-card',
          templateUrl: './hover-card.component.html',
          styleUrls: ['./hover-card.component.scss']
        }]
      }], function () {
        return [];
      }, {
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        description: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        imageUrl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/utils/owl-carousel/owl-carousel.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/utils/owl-carousel/owl-carousel.component.ts ***!
    \**************************************************************/

  /*! exports provided: OwlCarouselComponent */

  /***/
  function srcAppUtilsOwlCarouselOwlCarouselComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OwlCarouselComponent", function () {
      return OwlCarouselComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ngx-owl-carousel-o */
    "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm2015/ngx-owl-carousel-o.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function OwlCarouselComponent_1_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var slide_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", slide_r1.src, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"])("alt", slide_r1.alt)("title", slide_r1.title);
      }
    }

    function OwlCarouselComponent_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OwlCarouselComponent_1_ng_template_0_Template, 2, 3, "ng-template", 2);
      }

      if (rf & 2) {
        var slide_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", slide_r1.id);
      }
    }

    var OwlCarouselComponent = /*#__PURE__*/function () {
      function OwlCarouselComponent() {
        _classCallCheck(this, OwlCarouselComponent);

        this.customOptions = {
          loop: true,
          autoplay: true,
          mouseDrag: false,
          touchDrag: false,
          pullDrag: false,
          dots: true,
          navSpeed: 700,
          responsive: {
            0: {
              items: 1
            },
            400: {
              items: 2
            },
            740: {
              items: 2
            },
            940: {
              items: 3
            }
          },
          nav: false
        };
        this.slidesStore = [{
          id: 1,
          src: '../../../assets/icons/facebook-96.png',
          alt: 'facebook',
          title: 'facebook'
        }, {
          id: 2,
          src: '../../../assets/icons/instagram-96.png',
          alt: 'instagram',
          title: 'instagram'
        }, {
          id: 3,
          src: '../../../assets/icons/vk-96.png',
          alt: 'vkontakte',
          title: 'vkontakte'
        }, {
          id: 4,
          src: '../../../assets/icons/internet-96.png',
          alt: 'website',
          title: 'website'
        }];
      }

      _createClass(OwlCarouselComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OwlCarouselComponent;
    }();

    OwlCarouselComponent.ɵfac = function OwlCarouselComponent_Factory(t) {
      return new (t || OwlCarouselComponent)();
    };

    OwlCarouselComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: OwlCarouselComponent,
      selectors: [["app-owl-carousel"]],
      decls: 2,
      vars: 2,
      consts: [[3, "options"], [4, "ngFor", "ngForOf"], ["carouselSlide", "", 3, "id"], [1, "slide"], [3, "src", "alt", "title"]],
      template: function OwlCarouselComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "owl-carousel-o", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, OwlCarouselComponent_1_Template, 1, 1, undefined, 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("options", ctx.customOptions);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.slidesStore);
        }
      },
      directives: [ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_1__["CarouselSlideDirective"]],
      styles: [".slide[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 96px;\n  height: 96px;\n  margin: 0 auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXRpbHMvb3dsLWNhcm91c2VsL0Q6XFxMZWFybmluZ1xcSGFja2VyVVxcV2ViXFxlYXN5MmxlYXJuLXBvcnRmb2xpby9zcmNcXGFwcFxcdXRpbHNcXG93bC1jYXJvdXNlbFxcb3dsLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC91dGlscy9vd2wtY2Fyb3VzZWwvb3dsLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC91dGlscy9vd2wtY2Fyb3VzZWwvb3dsLWNhcm91c2VsLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNsaWRlIGltZ3tcclxuICB3aWR0aDogOTZweDtcclxuICBoZWlnaHQ6IDk2cHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbn1cclxuXHJcbiIsIi5zbGlkZSBpbWcge1xuICB3aWR0aDogOTZweDtcbiAgaGVpZ2h0OiA5NnB4O1xuICBtYXJnaW46IDAgYXV0bztcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OwlCarouselComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-owl-carousel',
          templateUrl: './owl-carousel.component.html',
          styleUrls: ['./owl-carousel.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/works-list/works-list.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/works-list/works-list.component.ts ***!
    \****************************************************/

  /*! exports provided: WorksListComponent */

  /***/
  function srcAppWorksListWorksListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WorksListComponent", function () {
      return WorksListComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _data_works_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../data/works.service */
    "./src/app/data/works.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _utils_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../utils/flip-card/flip-card.component */
    "./src/app/utils/flip-card/flip-card.component.ts");

    function WorksListComponent_app_flip_card_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-flip-card", 4);
      }

      if (rf & 2) {
        var work_r1 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("workTitle", work_r1.title)("workDescription", work_r1.description)("workImage", work_r1.imageurl);
      }
    }

    var WorksListComponent = /*#__PURE__*/function () {
      function WorksListComponent(worksService) {
        _classCallCheck(this, WorksListComponent);

        this.worksService = worksService; // works = WORKS;

        this.works = [];
      }

      _createClass(WorksListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          // this.works = this.worksService.getWorks();
          this.worksService.loadWorksList().subscribe(function (works) {
            _this3.works = works;
          });
        }
      }]);

      return WorksListComponent;
    }();

    WorksListComponent.ɵfac = function WorksListComponent_Factory(t) {
      return new (t || WorksListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_data_works_service__WEBPACK_IMPORTED_MODULE_1__["WorksService"]));
    };

    WorksListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: WorksListComponent,
      selectors: [["app-works-list"]],
      decls: 5,
      vars: 1,
      consts: [[1, "work-list__header", "m-5", "text-center"], [1, "container"], [1, "row"], ["class", "col-lg-3 col-sm-12 mb-1", 3, "workTitle", "workDescription", "workImage", 4, "ngFor", "ngForOf"], [1, "col-lg-3", "col-sm-12", "mb-1", 3, "workTitle", "workDescription", "workImage"]],
      template: function WorksListComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Our products\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, WorksListComponent_app_flip_card_4_Template, 1, 3, "app-flip-card", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.works);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _utils_flip_card_flip_card_component__WEBPACK_IMPORTED_MODULE_3__["FlipCardComponent"]],
      styles: [".work-list__header[_ngcontent-%COMP%] {\n  font-family: \"Fredericka the Great\", cursive;\n  font-size: 34px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd29ya3MtbGlzdC9EOlxcTGVhcm5pbmdcXEhhY2tlclVcXFdlYlxcZWFzeTJsZWFybi1wb3J0Zm9saW8vc3JjXFxhcHBcXHdvcmtzLWxpc3RcXHdvcmtzLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3dvcmtzLWxpc3Qvd29ya3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDRDQUFBO0VBQ0EsZUFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvd29ya3MtbGlzdC93b3Jrcy1saXN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndvcmstbGlzdF9faGVhZGVye1xyXG4gIGZvbnQtZmFtaWx5OiAnRnJlZGVyaWNrYSB0aGUgR3JlYXQnLCBjdXJzaXZlO1xyXG4gIGZvbnQtc2l6ZTogMzRweDtcclxufVxyXG4iLCIud29yay1saXN0X19oZWFkZXIge1xuICBmb250LWZhbWlseTogXCJGcmVkZXJpY2thIHRoZSBHcmVhdFwiLCBjdXJzaXZlO1xuICBmb250LXNpemU6IDM0cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WorksListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-works-list',
          templateUrl: './works-list.component.html',
          styleUrls: ['./works-list.component.scss']
        }]
      }], function () {
        return [{
          type: _data_works_service__WEBPACK_IMPORTED_MODULE_1__["WorksService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\Learning\HackerU\Web\easy2learn-portfolio\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map