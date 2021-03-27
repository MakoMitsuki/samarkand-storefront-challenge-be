import {Request, Response} from "express";

export function storefrontRouteHandler(req: Request, res: Response) {
    const db = require("../data/products.json");

    res.status(200).send(db);
}
