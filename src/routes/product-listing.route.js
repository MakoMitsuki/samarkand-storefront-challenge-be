"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.productListingRouteHandler = void 0;
function productListingRouteHandler(req, res) {
    const db = require("../data/products.json");
    res.status(200).send(db);
}
exports.productListingRouteHandler = productListingRouteHandler;
