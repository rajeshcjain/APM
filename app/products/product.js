"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/*
Here we can the class which implements the IProduct interface.

This will not be used as of now..This was just for the understanding of the Angular JS.

This function could have been defined in a seperate file as well.

*/
var Product = (function () {
    function Product(productId, productName, productCode, releaseDate, description, price, starRating, imageUrl) {
        this.productId = productId;
        this.productName = productName;
        this.productCode = productCode;
        this.releaseDate = releaseDate;
        this.description = description;
        this.price = price;
        this.starRating = starRating;
        this.imageUrl = imageUrl;
    }
    Product.prototype.calclateDiscoount = function (percentage) {
        return this.price - (this.price * percentage / 100);
    };
    return Product;
}());
exports.Product = Product;
//# sourceMappingURL=product.js.map