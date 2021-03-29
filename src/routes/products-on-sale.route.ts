import {Request, Response} from "express";
import { fetchProductsOnSale } from "../functions/fetch-product-db";
import { Product } from "../types/product";

export function productsOnSaleRouteHandler(req: Request, res: Response) {
    const productsOnSale: Product[] = fetchProductsOnSale();

    res.status(200).send(productsOnSale);
}
