"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var page_1 = require("tns-core-modules/ui/page/page");
var app = require("tns-core-modules/application");
var WishlistComponent = /** @class */ (function () {
    function WishlistComponent() {
    }
    WishlistComponent.prototype.ngOnInit = function () {
    };
    WishlistComponent.prototype.onDrawerButtonTap = function () {
        var sideDrawer = app.getRootView();
        sideDrawer.showDrawer();
    };
    WishlistComponent.prototype.getIconSource = function (icon) {
        var iconPrefix = page_1.isAndroid ? "res://" : "res://tabIcons/";
        return iconPrefix + icon;
    };
    WishlistComponent = __decorate([
        core_1.Component({
            selector: 'ns-wishlist',
            templateUrl: './wishlist.component.html',
            styleUrls: ['./wishlist.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [])
    ], WishlistComponent);
    return WishlistComponent;
}());
exports.WishlistComponent = WishlistComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoid2lzaGxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsid2lzaGxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBRWxELHNEQUEwRDtBQUMxRCxrREFBb0Q7QUFPcEQ7SUFFRTtJQUFnQixDQUFDO0lBRWpCLG9DQUFRLEdBQVI7SUFDQSxDQUFDO0lBQ0QsNkNBQWlCLEdBQWpCO1FBQ0UsSUFBTSxVQUFVLEdBQWtCLEdBQUcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUNwRCxVQUFVLENBQUMsVUFBVSxFQUFFLENBQUM7SUFDNUIsQ0FBQztJQUNELHlDQUFhLEdBQWIsVUFBYyxJQUFZO1FBQ3RCLElBQU0sVUFBVSxHQUFHLGdCQUFTLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsaUJBQWlCLENBQUM7UUFFNUQsT0FBTyxVQUFVLEdBQUcsSUFBSSxDQUFDO0lBQzdCLENBQUM7SUFkWSxpQkFBaUI7UUFON0IsZ0JBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxhQUFhO1lBQ3ZCLFdBQVcsRUFBRSwyQkFBMkI7WUFDeEMsU0FBUyxFQUFFLENBQUMsMEJBQTBCLENBQUM7WUFDdkMsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1NBQ3BCLENBQUM7O09BQ1csaUJBQWlCLENBZ0I3QjtJQUFELHdCQUFDO0NBQUEsQUFoQkQsSUFnQkM7QUFoQlksOENBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IFJhZFNpZGVEcmF3ZXIgfSBmcm9tICduYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlcic7XG5pbXBvcnQgeyBpc0FuZHJvaWQgfSBmcm9tICd0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2UvcGFnZSc7XG5pbXBvcnQgKiBhcyBhcHAgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvYXBwbGljYXRpb25cIjtcbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLXdpc2hsaXN0JyxcbiAgdGVtcGxhdGVVcmw6ICcuL3dpc2hsaXN0LmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vd2lzaGxpc3QuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBXaXNobGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG5cbiAgY29uc3RydWN0b3IoKSB7IH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuICBvbkRyYXdlckJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICBjb25zdCBzaWRlRHJhd2VyID0gPFJhZFNpZGVEcmF3ZXI+YXBwLmdldFJvb3RWaWV3KCk7XG4gICAgc2lkZURyYXdlci5zaG93RHJhd2VyKCk7XG59XG5nZXRJY29uU291cmNlKGljb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgaWNvblByZWZpeCA9IGlzQW5kcm9pZCA/IFwicmVzOi8vXCIgOiBcInJlczovL3RhYkljb25zL1wiO1xuXG4gICAgcmV0dXJuIGljb25QcmVmaXggKyBpY29uO1xufVxuXG59XG4iXX0=