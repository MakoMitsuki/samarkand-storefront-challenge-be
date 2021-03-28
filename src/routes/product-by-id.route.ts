import {Request, Response} from "express";
import { fetchProductDb } from "../data/fetch-product-db";

export function productByIdRouteHandler(req: Request, res: Response) {
    if (!req.params.id) {
        res.status(400).send();
    } else {
        const productListing = fetchProductDb();
        const product = productListing.find((p: any) => p.productId === req.params.id);
        res.status(200).send(product);
    }
}
