"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var wishlist_component_1 = require("./wishlist.component");
var router_1 = require("nativescript-angular/router");
var routes = [
    { path: "", component: wishlist_component_1.WishlistComponent }
];
var WishlistModule = /** @class */ (function () {
    function WishlistModule() {
    }
    WishlistModule = __decorate([
        core_1.NgModule({
            declarations: [wishlist_component_1.WishlistComponent],
            imports: [
                common_1.NativeScriptCommonModule,
                router_1.NativeScriptRouterModule.forChild(routes)
            ],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], WishlistModule);
    return WishlistModule;
}());
exports.WishlistModule = WishlistModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QubW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2lzaGxpc3QubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJEO0FBQzNELHNEQUF1RTtBQUN2RSwyREFBeUQ7QUFFekQsc0RBQXVFO0FBRXZFLElBQU0sTUFBTSxHQUFXO0lBQ25CLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxTQUFTLEVBQUUsc0NBQWlCLEVBQUU7Q0FDN0MsQ0FBQztBQVNGO0lBQUE7SUFBOEIsQ0FBQztJQUFsQixjQUFjO1FBUjFCLGVBQVEsQ0FBQztZQUNSLFlBQVksRUFBRSxDQUFDLHNDQUFpQixDQUFDO1lBQ2pDLE9BQU8sRUFBRTtnQkFDUCxpQ0FBd0I7Z0JBQ3hCLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUM7YUFDMUM7WUFDRCxPQUFPLEVBQUUsQ0FBQyx1QkFBZ0IsQ0FBQztTQUM1QixDQUFDO09BQ1csY0FBYyxDQUFJO0lBQUQscUJBQUM7Q0FBQSxBQUEvQixJQUErQjtBQUFsQix3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV2lzaGxpc3RDb21wb25lbnQgfSBmcm9tICcuL3dpc2hsaXN0LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5jb25zdCByb3V0ZXM6IFJvdXRlcyA9IFtcbiAgICB7IHBhdGg6IFwiXCIsIGNvbXBvbmVudDogV2lzaGxpc3RDb21wb25lbnQgfVxuXTtcbkBOZ01vZHVsZSh7XG4gIGRlY2xhcmF0aW9uczogW1dpc2hsaXN0Q29tcG9uZW50XSxcbiAgaW1wb3J0czogW1xuICAgIE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSxcbiAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKVxuICBdLFxuICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgV2lzaGxpc3RNb2R1bGUgeyB9XG4iXX0=