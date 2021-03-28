export interface Product {
    productId: string;
    currency: string;
    name: string;
    description: string;
    images: Image[];
    isOnsale: boolean;
    price: number;
    country: string;
}

export interface Image {
    ext: string;
    mime: string;
    url: string;
}
