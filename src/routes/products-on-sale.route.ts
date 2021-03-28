import {Request, Response} from "express";
import { fetchProductDb } from "../data/fetch-product-db";

export function productsOnSaleRouteHandler(req: Request, res: Response) {
    const productListing = fetchProductDb();
    const productsOnSale = productListing.filter((p: any) => p.isOnsale);

    res.status(200).send(productsOnSale);
}
