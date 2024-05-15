

export interface Product {
    id: number;
    handle: string;
    title: string;
    description: string;
    sku: string;
    grams: number;
    stock?: number; // Optional property
    price: number;
    comparePrice?: number; // Optional property
    barcode: string;
}