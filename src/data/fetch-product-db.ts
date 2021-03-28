import * as db from "../data/products.json";
import { Product } from "../types/product";

export function fetchProductDb(): Product[] {
    const dbParse = (db as any).default;
    return dbParse.products;
}
