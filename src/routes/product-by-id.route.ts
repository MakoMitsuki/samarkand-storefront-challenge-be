import { Request, Response } from "express";
import { fetchProductById } from "../functions/fetch-product-db";
import { Product } from "../types/product";

export function productByIdRouteHandler(req: Request, res: Response) {
    if (!req.params.id) {
        res.sendStatus(404);
    } else {
        const product: any = fetchProductById(req.params.id);
        if (product) {
            res.status(200).send(product);
        } else {
            res.status(404).send("Can't find product with the id " + req.params.id);
        }
    }
}
