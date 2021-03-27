import * as dotenv from "dotenv";

import { productListingRouteHandler } from "./routes/product-listing.route";

dotenv.config();
import express = require("express");
const app = express();
import bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "16mb" }));

// ROUTES
app.get(`/product-listing`, productListingRouteHandler);

app.listen(process.env.PORT, () => {
    console.log(process.env.APP_NAME + " now listening at port: " + process.env.PORT);
});
