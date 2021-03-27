import {Request, Response} from "express";
import {Product} from "../types";

export function productByIdRouteHandler(req: Request, res: Response) {
    const db = require("../data/products.json");
    const dbParse = JSON.parse(db.products);

    const productListing = dbParse.map((obj: Product) => {
        productId: obj.productId,
        currency: obj.currency,
        name: obj.name,
        description: obj.description,
        images: obj.images,
        isOnsale: obj.isOnsale,
        price: obj.price,
        country: obj.country
    });

    console.log("productListing count " + productListing.size);

    res.status(200).send(db);
}
