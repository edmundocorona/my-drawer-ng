(global["webpackJsonp"] = global["webpackJsonp"] || []).push([[0],{

/***/ "./app/browse/browse-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var router_1 = __webpack_require__("../node_modules/nativescript-angular/router/index.js");
var browse_component_1 = __webpack_require__("./app/browse/browse.component.ts");
var routes = [
    { path: "", component: browse_component_1.BrowseComponent }
];
var BrowseRoutingModule = /** @class */ (function () {
    function BrowseRoutingModule() {
    }
    BrowseRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], BrowseRoutingModule);
    return BrowseRoutingModule;
}());
exports.BrowseRoutingModule = BrowseRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLXJvdXRpbmcubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYnJvd3NlLXJvdXRpbmcubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlDO0FBRXpDLHNEQUF1RTtBQUV2RSx1REFBcUQ7QUFFckQsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxrQ0FBZSxFQUFFO0NBQzNDLENBQUM7QUFNRjtJQUFBO0lBQW1DLENBQUM7SUFBdkIsbUJBQW1CO1FBSi9CLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csbUJBQW1CLENBQUk7SUFBRCwwQkFBQztDQUFBLEFBQXBDLElBQW9DO0FBQXZCLGtEQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQnJvd3NlQ29tcG9uZW50IH0gZnJvbSBcIi4vYnJvd3NlLmNvbXBvbmVudFwiO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogQnJvd3NlQ29tcG9uZW50IH1cbl07XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICBleHBvcnRzOiBbTmF0aXZlU2NyaXB0Um91dGVyTW9kdWxlXVxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VSb3V0aW5nTW9kdWxlIHsgfVxuIl19

/***/ }),

/***/ "./app/browse/browse.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var app = __webpack_require__("../node_modules/tns-core-modules/application/application.js");
var BrowseComponent = /** @class */ (function () {
    function BrowseComponent() {
        // Use the component constructor to inject providers.
    }
    BrowseComponent.prototype.ngOnInit = function () {
        // Init your component properties here.
    };
    BrowseComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    BrowseComponent = __decorate([
        core_1.Component({
            selector: "Browse",
            /*duleId: module.i*/
            templateUrl: "./browse.component.html"
        }),
        __metadata("design:paramtypes", [])
    ], BrowseComponent);
    return BrowseComponent;
}());
exports.BrowseComponent = BrowseComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFFbEQsa0RBQW9EO0FBT3BEO0lBRUk7UUFDSSxxREFBcUQ7SUFDekQsQ0FBQztJQUVELGtDQUFRLEdBQVI7UUFDSSx1Q0FBdUM7SUFDM0MsQ0FBQztJQUVELDJDQUFpQixHQUFqQjtRQUNJLElBQU0sVUFBVSxHQUFrQixHQUFHLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDcEQsVUFBVSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQzVCLENBQUM7SUFiUSxlQUFlO1FBTDNCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLHlCQUF5QjtTQUN6QyxDQUFDOztPQUNXLGVBQWUsQ0FjM0I7SUFBRCxzQkFBQztDQUFBLEFBZEQsSUFjQztBQWRZLDBDQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUmFkU2lkZURyYXdlciB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlclwiO1xuaW1wb3J0ICogYXMgYXBwIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2FwcGxpY2F0aW9uXCI7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkJyb3dzZVwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9icm93c2UuY29tcG9uZW50Lmh0bWxcIlxufSlcbmV4cG9ydCBjbGFzcyBCcm93c2VDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIC8vIFVzZSB0aGUgY29tcG9uZW50IGNvbnN0cnVjdG9yIHRvIGluamVjdCBwcm92aWRlcnMuXG4gICAgfVxuXG4gICAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgICAgIC8vIEluaXQgeW91ciBjb21wb25lbnQgcHJvcGVydGllcyBoZXJlLlxuICAgIH1cblxuICAgIG9uRHJhd2VyQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./app/browse/browse.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../node_modules/@angular/core/fesm5/core.js");
var common_1 = __webpack_require__("../node_modules/nativescript-angular/common.js");
var browse_routing_module_1 = __webpack_require__("./app/browse/browse-routing.module.ts");
var browse_component_1 = __webpack_require__("./app/browse/browse.component.ts");
var BrowseModule = /** @class */ (function () {
    function BrowseModule() {
    }
    BrowseModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.NativeScriptCommonModule,
                browse_routing_module_1.BrowseRoutingModule
            ],
            declarations: [
                browse_component_1.BrowseComponent
            ],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], BrowseModule);
    return BrowseModule;
}());
exports.BrowseModule = BrowseModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3NlLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImJyb3dzZS5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkQ7QUFDM0Qsc0RBQXVFO0FBRXZFLGlFQUE4RDtBQUM5RCx1REFBcUQ7QUFjckQ7SUFBQTtJQUE0QixDQUFDO0lBQWhCLFlBQVk7UUFaeEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLGlDQUF3QjtnQkFDeEIsMkNBQW1CO2FBQ3RCO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLGtDQUFlO2FBQ2xCO1lBQ0QsT0FBTyxFQUFFO2dCQUNMLHVCQUFnQjthQUNuQjtTQUNKLENBQUM7T0FDVyxZQUFZLENBQUk7SUFBRCxtQkFBQztDQUFBLEFBQTdCLElBQTZCO0FBQWhCLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIE5PX0VSUk9SU19TQ0hFTUEgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2NvbW1vblwiO1xuXG5pbXBvcnQgeyBCcm93c2VSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYnJvd3NlLXJvdXRpbmcubW9kdWxlXCI7XG5pbXBvcnQgeyBCcm93c2VDb21wb25lbnQgfSBmcm9tIFwiLi9icm93c2UuY29tcG9uZW50XCI7XG5cbkBOZ01vZHVsZSh7XG4gICAgaW1wb3J0czogW1xuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIEJyb3dzZVJvdXRpbmdNb2R1bGVcbiAgICBdLFxuICAgIGRlY2xhcmF0aW9uczogW1xuICAgICAgICBCcm93c2VDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQnJvd3NlTW9kdWxlIHsgfVxuIl19;module.hot && module.hot.accept()

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS1yb3V0aW5nLm1vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hcHAvYnJvd3NlL2Jyb3dzZS5jb21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2Jyb3dzZS9icm93c2UubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFhO0FBQ2IsOENBQThDLGNBQWM7QUFDNUQsYUFBYSxtQkFBTyxDQUFDLDZDQUFlO0FBQ3BDLGVBQWUsbUJBQU8sQ0FBQyxzREFBNkI7QUFDcEQseUJBQXlCLG1CQUFPLENBQUMsa0NBQW9CO0FBQ3JEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJDQUEyQywrdUM7Ozs7Ozs7O0FDcEI5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyw2Q0FBZTtBQUNwQyxVQUFVLG1CQUFPLENBQUMsNkRBQThCO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLDJDQUEyQywraEQ7Ozs7Ozs7O0FDMUI5QjtBQUNiLDhDQUE4QyxjQUFjO0FBQzVELGFBQWEsbUJBQU8sQ0FBQyw2Q0FBZTtBQUNwQyxlQUFlLG1CQUFPLENBQUMsZ0RBQTZCO0FBQ3BELDhCQUE4QixtQkFBTyxDQUFDLHVDQUF5QjtBQUMvRCx5QkFBeUIsbUJBQU8sQ0FBQyxrQ0FBb0I7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSwyQ0FBMkMsZ3RDQUFndEMsaUMiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xudmFyIGNvcmVfMSA9IHJlcXVpcmUoXCJAYW5ndWxhci9jb3JlXCIpO1xudmFyIHJvdXRlcl8xID0gcmVxdWlyZShcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiKTtcbnZhciBicm93c2VfY29tcG9uZW50XzEgPSByZXF1aXJlKFwiLi9icm93c2UuY29tcG9uZW50XCIpO1xudmFyIHJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogYnJvd3NlX2NvbXBvbmVudF8xLkJyb3dzZUNvbXBvbmVudCB9XG5dO1xudmFyIEJyb3dzZVJvdXRpbmdNb2R1bGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJvd3NlUm91dGluZ01vZHVsZSgpIHtcbiAgICB9XG4gICAgQnJvd3NlUm91dGluZ01vZHVsZSA9IF9fZGVjb3JhdGUoW1xuICAgICAgICBjb3JlXzEuTmdNb2R1bGUoe1xuICAgICAgICAgICAgaW1wb3J0czogW3JvdXRlcl8xLk5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JDaGlsZChyb3V0ZXMpXSxcbiAgICAgICAgICAgIGV4cG9ydHM6IFtyb3V0ZXJfMS5OYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGVdXG4gICAgICAgIH0pXG4gICAgXSwgQnJvd3NlUm91dGluZ01vZHVsZSk7XG4gICAgcmV0dXJuIEJyb3dzZVJvdXRpbmdNb2R1bGU7XG59KCkpO1xuZXhwb3J0cy5Ccm93c2VSb3V0aW5nTW9kdWxlID0gQnJvd3NlUm91dGluZ01vZHVsZTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVluSnZkM05sTFhKdmRYUnBibWN1Ylc5a2RXeGxMbXB6SWl3aWMyOTFjbU5sVW05dmRDSTZJaUlzSW5OdmRYSmpaWE1pT2xzaVluSnZkM05sTFhKdmRYUnBibWN1Ylc5a2RXeGxMblJ6SWwwc0ltNWhiV1Z6SWpwYlhTd2liV0Z3Y0dsdVozTWlPaUk3TzBGQlFVRXNjME5CUVhsRE8wRkJSWHBETEhORVFVRjFSVHRCUVVWMlJTeDFSRUZCY1VRN1FVRkZja1FzU1VGQlRTeE5RVUZOTEVkQlFWYzdTVUZEYmtJc1JVRkJSU3hKUVVGSkxFVkJRVVVzUlVGQlJTeEZRVUZGTEZOQlFWTXNSVUZCUlN4clEwRkJaU3hGUVVGRk8wTkJRek5ETEVOQlFVTTdRVUZOUmp0SlFVRkJPMGxCUVcxRExFTkJRVU03U1VGQmRrSXNiVUpCUVcxQ08xRkJTaTlDTEdWQlFWRXNRMEZCUXp0WlFVTk9MRTlCUVU4c1JVRkJSU3hEUVVGRExHbERRVUYzUWl4RFFVRkRMRkZCUVZFc1EwRkJReXhOUVVGTkxFTkJRVU1zUTBGQlF6dFpRVU53UkN4UFFVRlBMRVZCUVVVc1EwRkJReXhwUTBGQmQwSXNRMEZCUXp0VFFVTjBReXhEUVVGRE8wOUJRMWNzYlVKQlFXMUNMRU5CUVVrN1NVRkJSQ3d3UWtGQlF6dERRVUZCTEVGQlFYQkRMRWxCUVc5RE8wRkJRWFpDTEd0RVFVRnRRaUlzSW5OdmRYSmpaWE5EYjI1MFpXNTBJanBiSW1sdGNHOXlkQ0I3SUU1blRXOWtkV3hsSUgwZ1puSnZiU0JjSWtCaGJtZDFiR0Z5TDJOdmNtVmNJanRjYm1sdGNHOXlkQ0I3SUZKdmRYUmxjeUI5SUdaeWIyMGdYQ0pBWVc1bmRXeGhjaTl5YjNWMFpYSmNJanRjYm1sdGNHOXlkQ0I3SUU1aGRHbDJaVk5qY21sd2RGSnZkWFJsY2sxdlpIVnNaU0I5SUdaeWIyMGdYQ0p1WVhScGRtVnpZM0pwY0hRdFlXNW5kV3hoY2k5eWIzVjBaWEpjSWp0Y2JseHVhVzF3YjNKMElIc2dRbkp2ZDNObFEyOXRjRzl1Wlc1MElIMGdabkp2YlNCY0lpNHZZbkp2ZDNObExtTnZiWEJ2Ym1WdWRGd2lPMXh1WEc1amIyNXpkQ0J5YjNWMFpYTTZJRkp2ZFhSbGN5QTlJRnRjYmlBZ0lDQjdJSEJoZEdnNklGd2lYQ0lzSUdOdmJYQnZibVZ1ZERvZ1FuSnZkM05sUTI5dGNHOXVaVzUwSUgxY2JsMDdYRzVjYmtCT1owMXZaSFZzWlNoN1hHNGdJQ0FnYVcxd2IzSjBjem9nVzA1aGRHbDJaVk5qY21sd2RGSnZkWFJsY2sxdlpIVnNaUzVtYjNKRGFHbHNaQ2h5YjNWMFpYTXBYU3hjYmlBZ0lDQmxlSEJ2Y25Sek9pQmJUbUYwYVhabFUyTnlhWEIwVW05MWRHVnlUVzlrZFd4bFhWeHVmU2xjYm1WNGNHOXlkQ0JqYkdGemN5QkNjbTkzYzJWU2IzVjBhVzVuVFc5a2RXeGxJSHNnZlZ4dUlsMTkiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwgeyB2YWx1ZTogdHJ1ZSB9KTtcbnZhciBjb3JlXzEgPSByZXF1aXJlKFwiQGFuZ3VsYXIvY29yZVwiKTtcbnZhciBhcHAgPSByZXF1aXJlKFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiKTtcbnZhciBCcm93c2VDb21wb25lbnQgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gQnJvd3NlQ29tcG9uZW50KCkge1xuICAgICAgICAvLyBVc2UgdGhlIGNvbXBvbmVudCBjb25zdHJ1Y3RvciB0byBpbmplY3QgcHJvdmlkZXJzLlxuICAgIH1cbiAgICBCcm93c2VDb21wb25lbnQucHJvdG90eXBlLm5nT25Jbml0ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBJbml0IHlvdXIgY29tcG9uZW50IHByb3BlcnRpZXMgaGVyZS5cbiAgICB9O1xuICAgIEJyb3dzZUNvbXBvbmVudC5wcm90b3R5cGUub25EcmF3ZXJCdXR0b25UYXAgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzaWRlRHJhd2VyID0gYXBwLmdldFJvb3RWaWV3KCk7XG4gICAgICAgIHNpZGVEcmF3ZXIuc2hvd0RyYXdlcigpO1xuICAgIH07XG4gICAgQnJvd3NlQ29tcG9uZW50ID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5Db21wb25lbnQoe1xuICAgICAgICAgICAgc2VsZWN0b3I6IFwiQnJvd3NlXCIsXG4gICAgICAgICAgICAvKmR1bGVJZDogbW9kdWxlLmkqL1xuICAgICAgICAgICAgdGVtcGxhdGVVcmw6IFwiLi9icm93c2UuY29tcG9uZW50Lmh0bWxcIlxuICAgICAgICB9KSxcbiAgICAgICAgX19tZXRhZGF0YShcImRlc2lnbjpwYXJhbXR5cGVzXCIsIFtdKVxuICAgIF0sIEJyb3dzZUNvbXBvbmVudCk7XG4gICAgcmV0dXJuIEJyb3dzZUNvbXBvbmVudDtcbn0oKSk7XG5leHBvcnRzLkJyb3dzZUNvbXBvbmVudCA9IEJyb3dzZUNvbXBvbmVudDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsZXlKMlpYSnphVzl1SWpvekxDSm1hV3hsSWpvaVluSnZkM05sTG1OdmJYQnZibVZ1ZEM1cWN5SXNJbk52ZFhKalpWSnZiM1FpT2lJaUxDSnpiM1Z5WTJWeklqcGJJbUp5YjNkelpTNWpiMjF3YjI1bGJuUXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeHpRMEZCYTBRN1FVRkZiRVFzYTBSQlFXOUVPMEZCVDNCRU8wbEJSVWs3VVVGRFNTeHhSRUZCY1VRN1NVRkRla1FzUTBGQlF6dEpRVVZFTEd0RFFVRlJMRWRCUVZJN1VVRkRTU3gxUTBGQmRVTTdTVUZETTBNc1EwRkJRenRKUVVWRUxESkRRVUZwUWl4SFFVRnFRanRSUVVOSkxFbEJRVTBzVlVGQlZTeEhRVUZyUWl4SFFVRkhMRU5CUVVNc1YwRkJWeXhGUVVGRkxFTkJRVU03VVVGRGNFUXNWVUZCVlN4RFFVRkRMRlZCUVZVc1JVRkJSU3hEUVVGRE8wbEJRelZDTEVOQlFVTTdTVUZpVVN4bFFVRmxPMUZCVEROQ0xHZENRVUZUTEVOQlFVTTdXVUZEVUN4UlFVRlJMRVZCUVVVc1VVRkJVVHRaUVVOc1FpeFJRVUZSTEVWQlFVVXNUVUZCVFN4RFFVRkRMRVZCUVVVN1dVRkRia0lzVjBGQlZ5eEZRVUZGTEhsQ1FVRjVRanRUUVVONlF5eERRVUZET3p0UFFVTlhMR1ZCUVdVc1EwRmpNMEk3U1VGQlJDeHpRa0ZCUXp0RFFVRkJMRUZCWkVRc1NVRmpRenRCUVdSWkxEQkRRVUZsSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1EyOXRjRzl1Wlc1MExDQlBia2x1YVhRZ2ZTQm1jbTl0SUZ3aVFHRnVaM1ZzWVhJdlkyOXlaVndpTzF4dWFXMXdiM0owSUhzZ1VtRmtVMmxrWlVSeVlYZGxjaUI5SUdaeWIyMGdYQ0p1WVhScGRtVnpZM0pwY0hRdGRXa3RjMmxrWldSeVlYZGxjbHdpTzF4dWFXMXdiM0owSUNvZ1lYTWdZWEJ3SUdaeWIyMGdYQ0owYm5NdFkyOXlaUzF0YjJSMWJHVnpMMkZ3Y0d4cFkyRjBhVzl1WENJN1hHNWNia0JEYjIxd2IyNWxiblFvZTF4dUlDQWdJSE5sYkdWamRHOXlPaUJjSWtKeWIzZHpaVndpTEZ4dUlDQWdJRzF2WkhWc1pVbGtPaUJ0YjJSMWJHVXVhV1FzWEc0Z0lDQWdkR1Z0Y0d4aGRHVlZjbXc2SUZ3aUxpOWljbTkzYzJVdVkyOXRjRzl1Wlc1MExtaDBiV3hjSWx4dWZTbGNibVY0Y0c5eWRDQmpiR0Z6Y3lCQ2NtOTNjMlZEYjIxd2IyNWxiblFnYVcxd2JHVnRaVzUwY3lCUGJrbHVhWFFnZTF4dVhHNGdJQ0FnWTI5dWMzUnlkV04wYjNJb0tTQjdYRzRnSUNBZ0lDQWdJQzh2SUZWelpTQjBhR1VnWTI5dGNHOXVaVzUwSUdOdmJuTjBjblZqZEc5eUlIUnZJR2x1YW1WamRDQndjbTkyYVdSbGNuTXVYRzRnSUNBZ2ZWeHVYRzRnSUNBZ2JtZFBia2x1YVhRb0tUb2dkbTlwWkNCN1hHNGdJQ0FnSUNBZ0lDOHZJRWx1YVhRZ2VXOTFjaUJqYjIxd2IyNWxiblFnY0hKdmNHVnlkR2xsY3lCb1pYSmxMbHh1SUNBZ0lIMWNibHh1SUNBZ0lHOXVSSEpoZDJWeVFuVjBkRzl1VkdGd0tDazZJSFp2YVdRZ2UxeHVJQ0FnSUNBZ0lDQmpiMjV6ZENCemFXUmxSSEpoZDJWeUlEMGdQRkpoWkZOcFpHVkVjbUYzWlhJK1lYQndMbWRsZEZKdmIzUldhV1YzS0NrN1hHNGdJQ0FnSUNBZ0lITnBaR1ZFY21GM1pYSXVjMmh2ZDBSeVlYZGxjaWdwTzF4dUlDQWdJSDFjYm4xY2JpSmRmUT09IiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG52YXIgY29yZV8xID0gcmVxdWlyZShcIkBhbmd1bGFyL2NvcmVcIik7XG52YXIgY29tbW9uXzEgPSByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvY29tbW9uXCIpO1xudmFyIGJyb3dzZV9yb3V0aW5nX21vZHVsZV8xID0gcmVxdWlyZShcIi4vYnJvd3NlLXJvdXRpbmcubW9kdWxlXCIpO1xudmFyIGJyb3dzZV9jb21wb25lbnRfMSA9IHJlcXVpcmUoXCIuL2Jyb3dzZS5jb21wb25lbnRcIik7XG52YXIgQnJvd3NlTW9kdWxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIEJyb3dzZU1vZHVsZSgpIHtcbiAgICB9XG4gICAgQnJvd3NlTW9kdWxlID0gX19kZWNvcmF0ZShbXG4gICAgICAgIGNvcmVfMS5OZ01vZHVsZSh7XG4gICAgICAgICAgICBpbXBvcnRzOiBbXG4gICAgICAgICAgICAgICAgY29tbW9uXzEuTmF0aXZlU2NyaXB0Q29tbW9uTW9kdWxlLFxuICAgICAgICAgICAgICAgIGJyb3dzZV9yb3V0aW5nX21vZHVsZV8xLkJyb3dzZVJvdXRpbmdNb2R1bGVcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgICAgICAgICBicm93c2VfY29tcG9uZW50XzEuQnJvd3NlQ29tcG9uZW50XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgc2NoZW1hczogW1xuICAgICAgICAgICAgICAgIGNvcmVfMS5OT19FUlJPUlNfU0NIRU1BXG4gICAgICAgICAgICBdXG4gICAgICAgIH0pXG4gICAgXSwgQnJvd3NlTW9kdWxlKTtcbiAgICByZXR1cm4gQnJvd3NlTW9kdWxlO1xufSgpKTtcbmV4cG9ydHMuQnJvd3NlTW9kdWxlID0gQnJvd3NlTW9kdWxlO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxleUoyWlhKemFXOXVJam96TENKbWFXeGxJam9pWW5KdmQzTmxMbTF2WkhWc1pTNXFjeUlzSW5OdmRYSmpaVkp2YjNRaU9pSWlMQ0p6YjNWeVkyVnpJanBiSW1KeWIzZHpaUzV0YjJSMWJHVXVkSE1pWFN3aWJtRnRaWE1pT2x0ZExDSnRZWEJ3YVc1bmN5STZJanM3UVVGQlFTeHpRMEZCTWtRN1FVRkRNMFFzYzBSQlFYVkZPMEZCUlhaRkxHbEZRVUU0UkR0QlFVTTVSQ3gxUkVGQmNVUTdRVUZqY2tRN1NVRkJRVHRKUVVFMFFpeERRVUZETzBsQlFXaENMRmxCUVZrN1VVRmFlRUlzWlVGQlVTeERRVUZETzFsQlEwNHNUMEZCVHl4RlFVRkZPMmRDUVVOTUxHbERRVUYzUWp0blFrRkRlRUlzTWtOQlFXMUNPMkZCUTNSQ08xbEJRMFFzV1VGQldTeEZRVUZGTzJkQ1FVTldMR3REUVVGbE8yRkJRMnhDTzFsQlEwUXNUMEZCVHl4RlFVRkZPMmRDUVVOTUxIVkNRVUZuUWp0aFFVTnVRanRUUVVOS0xFTkJRVU03VDBGRFZ5eFpRVUZaTEVOQlFVazdTVUZCUkN4dFFrRkJRenREUVVGQkxFRkJRVGRDTEVsQlFUWkNPMEZCUVdoQ0xHOURRVUZaSWl3aWMyOTFjbU5sYzBOdmJuUmxiblFpT2xzaWFXMXdiM0owSUhzZ1RtZE5iMlIxYkdVc0lFNVBYMFZTVWs5U1UxOVRRMGhGVFVFZ2ZTQm1jbTl0SUZ3aVFHRnVaM1ZzWVhJdlkyOXlaVndpTzF4dWFXMXdiM0owSUhzZ1RtRjBhWFpsVTJOeWFYQjBRMjl0Ylc5dVRXOWtkV3hsSUgwZ1puSnZiU0JjSW01aGRHbDJaWE5qY21sd2RDMWhibWQxYkdGeUwyTnZiVzF2Ymx3aU8xeHVYRzVwYlhCdmNuUWdleUJDY205M2MyVlNiM1YwYVc1blRXOWtkV3hsSUgwZ1puSnZiU0JjSWk0dlluSnZkM05sTFhKdmRYUnBibWN1Ylc5a2RXeGxYQ0k3WEc1cGJYQnZjblFnZXlCQ2NtOTNjMlZEYjIxd2IyNWxiblFnZlNCbWNtOXRJRndpTGk5aWNtOTNjMlV1WTI5dGNHOXVaVzUwWENJN1hHNWNia0JPWjAxdlpIVnNaU2g3WEc0Z0lDQWdhVzF3YjNKMGN6b2dXMXh1SUNBZ0lDQWdJQ0JPWVhScGRtVlRZM0pwY0hSRGIyMXRiMjVOYjJSMWJHVXNYRzRnSUNBZ0lDQWdJRUp5YjNkelpWSnZkWFJwYm1kTmIyUjFiR1ZjYmlBZ0lDQmRMRnh1SUNBZ0lHUmxZMnhoY21GMGFXOXVjem9nVzF4dUlDQWdJQ0FnSUNCQ2NtOTNjMlZEYjIxd2IyNWxiblJjYmlBZ0lDQmRMRnh1SUNBZ0lITmphR1Z0WVhNNklGdGNiaUFnSUNBZ0lDQWdUazlmUlZKU1QxSlRYMU5EU0VWTlFWeHVJQ0FnSUYxY2JuMHBYRzVsZUhCdmNuUWdZMnhoYzNNZ1FuSnZkM05sVFc5a2RXeGxJSHNnZlZ4dUlsMTk7bW9kdWxlLmhvdCAmJiBtb2R1bGUuaG90LmFjY2VwdCgpIl0sInNvdXJjZVJvb3QiOiIifQ==