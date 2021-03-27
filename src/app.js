"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const storefront_route_1 = require("./routes/storefront.route");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "16mb" }));
// ROUTES
app.get(`/storefront`, storefront_route_1.storefrontRouteHandler);
app.listen(3037, () => {
    console.log("Now listening at port: " + 3037);
});
