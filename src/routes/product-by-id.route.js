"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productByIdRouteHandler = void 0;
function productByIdRouteHandler(req, res) {
    const db = require("../data/products.json");
    const dbParse = JSON.parse(db.products);
    const productListing = dbParse.map((obj) => {
        productId: obj.productId,
            currency;
        obj.currency,
            name;
        obj.name,
            description;
        obj.description,
            images;
        obj.images,
            isOnsale;
        obj.isOnsale,
            price;
        obj.price,
            country;
        obj.country;
    });
    console.log("productListing count " + productListing.size);
    res.status(200).send(db);
}
exports.productByIdRouteHandler = productByIdRouteHandler;
