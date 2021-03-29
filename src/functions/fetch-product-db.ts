import * as db from "../data/products.json";
import { Product } from "../types/product";

// Imports the JSON file and parses it as a list of Products
export function fetchProductDb(): Product[] {
    const dbParse = (db as any).default;
    return dbParse.products;
}

// Fetches a product given the ID
// Returns undefined if product is not found
export function fetchProductById(id: any): any {
    return fetchProductDb().find((pr: Product) => pr.productId === id);
}

// Fetches the products that are on sale
export function fetchProductsOnSale(): Product[] {
    return fetchProductDb().filter((p: Product) => p.isOnsale);
}
