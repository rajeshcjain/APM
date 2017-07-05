"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductFilterPiple = (function () {
    function ProductFilterPiple() {
    }
    ProductFilterPiple.prototype.transform = function (products, filterBy) {
        filterBy = filterBy ? filterBy.toLocaleLowerCase() : null;
        /*
        Here we are declaring the anonymous callback function that will be used for filtering.
        */
        return filterBy ? products.filter(function (product) {
            /*
            This code snippet will remove the code item filtered and put it in list
            */
            return product.productName.toLocaleLowerCase().indexOf(filterBy) == -1;
        }) : products;
    };
    return ProductFilterPiple;
}());
ProductFilterPiple = __decorate([
    core_1.Pipe({
        name: 'productFilter'
    })
], ProductFilterPiple);
exports.ProductFilterPiple = ProductFilterPiple;
//# sourceMappingURL=product-filter.pipe.js.map