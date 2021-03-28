import * as db from "../data/products.json";
import { Product } from "../types/product";

export function fetchProductDb(): Product[] {
    const dbParse = (db as any).default;
    const dbToProduct: Product[] = dbParse.products.map((obj: any) => {
        productId: obj.productId,
        currency: obj.currency,
        name: obj.name,
        description: obj.description,
        images: obj.images,
        isOnsale: obj.isOnsale,
        price: obj.price,
        country: obj.country
    });
    return dbToProduct;
}
