import {Request, Response} from "express";
import { fetchProductDb } from "../data/fetch-product-db";

export function productListingRouteHandler(req: Request, res: Response) {
    const productListing = fetchProductDb();

    res.status(200).send(productListing);
}
