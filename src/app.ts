import * as dotenv from "dotenv";

// import routes
import { productByIdRouteHandler } from "./routes/product-by-id.route";
import { productListingRouteHandler } from "./routes/product-listing.route";
import { productsOnSaleRouteHandler } from "./routes/products-on-sale.route";

// configure express
dotenv.config();
import express = require("express");
const app = express();
import bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "16mb" }));

/* ROUTES */
// /product-listing - grabs entire product listing
app.get(`/product-listing`, productListingRouteHandler);

// /product-by-id/:id - grabs a product by the product id
app.get(`/product-by-id/:id`, productByIdRouteHandler);

// /products-on-sale - grabs the products that are on sale
app.get(`/products-on-sale`, productsOnSaleRouteHandler);

app.listen(process.env.PORT, () => {
    console.log(process.env.APP_NAME + " now listening at port: " + process.env.PORT);
});
