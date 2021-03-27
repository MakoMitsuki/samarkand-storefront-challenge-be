import { storefrontRouteHandler } from "./routes/storefront.route";

import express = require("express");
const app = express();
import bodyParser = require("body-parser");
app.use(bodyParser.json({ limit: "16mb" }));

// ROUTES
app.get(`/product-listing`, storefrontRouteHandler);

app.listen(3037, () => {
    console.log("Now listening at port: " + 3037);
});
