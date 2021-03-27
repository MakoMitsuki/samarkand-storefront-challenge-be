export interface Product {
    productId: string;
    currency: string;
    name: string;
    description: string;
    images: ImageFile[];
    isOnsale: string;
    price: string;
    country: string;
}

export interface ImageFile {
    ext: string;
    mime: string;
    url: string;
}
