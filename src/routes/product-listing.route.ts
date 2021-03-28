import {Request, Response} from "express";
import { fetchProductDb } from "../data/fetch-product-db";
import { Product } from "../types/product";

export function productListingRouteHandler(req: Request, res: Response) {
    const productListing: Product[] = fetchProductDb();

    res.status(200).send(productListing);
}
