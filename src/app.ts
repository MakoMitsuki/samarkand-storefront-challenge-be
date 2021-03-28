import * as dotenv from "dotenv";

import { productByIdRouteHandler } from "./routes/product-by-id.route";
import { productListingRouteHandler } from "./routes/product-listing.route";
import { productsOnSaleRouteHandler } from "./routes/products-on-sale.route";

dotenv.config();
import express = require("express");
const app = express();
import bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "16mb" }));

// ROUTES
app.get(`/product-listing`, productListingRouteHandler);
app.get(`/product-by-id/:id`, productByIdRouteHandler);
app.get(`/products-on-sale`, productsOnSaleRouteHandler);

app.listen(process.env.PORT, () => {
    console.log(process.env.APP_NAME + " now listening at port: " + process.env.PORT);
});
