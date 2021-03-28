import {Request, Response} from "express";
import { fetchProductDb } from "../data/fetch-product-db";
import { Product } from "../types/product";

export function productsOnSaleRouteHandler(req: Request, res: Response) {
    const productListing = fetchProductDb();
    const productsOnSale = productListing.filter((p: Product) => p.isOnsale);

    res.status(200).send(productsOnSale);
}
