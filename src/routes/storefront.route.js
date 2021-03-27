"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.storefrontRouteHandler = void 0;
function storefrontRouteHandler(req, res) {
    const db = require("../data/products.json");
    res.status(200).send(db);
}
exports.storefrontRouteHandler = storefrontRouteHandler;
