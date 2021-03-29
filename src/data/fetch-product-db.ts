import { Product } from "../types/product";
import * as db from "./products.json";

// Imports the JSON file and parses it as a list of Products
export function fetchProductDb(): Product[] {
    const dbParse = (db as any).default;
    return dbParse.products;
}
