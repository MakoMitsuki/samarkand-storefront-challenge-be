import * as db from "../data/products.json";

export function fetchProductDb() {
    const dbParse = (db as any).default;
    return dbParse.products;
}
