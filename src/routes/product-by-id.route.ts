import {Request, Response} from "express";
import { fetchProductDb } from "../data/fetch-product-db";
import { Product } from "../types/product";

export function productByIdRouteHandler(req: Request, res: Response) {
    if (!req.params.id) {
        res.status(400).send();
    } else {
        const productListing = fetchProductDb();
        const p = productListing.find((pr: Product) => pr.productId === req.params.id);
        res.status(200).send(p);
    }
}
