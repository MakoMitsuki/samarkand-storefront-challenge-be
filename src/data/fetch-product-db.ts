import { Product } from "../types/product";
import * as db from "./products.json";

export function fetchProductDb(): Product[] {
    const dbParse = (db as any).default;
    return dbParse.products;
}
