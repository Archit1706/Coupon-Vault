type Product = {
    skuId: number;
    name: string;
    price: number;
    description: string;
    image: any;
    category: string;
    subcategory?: string;
    discountedPrice?: number;
    discount?: number;
    quantity?: number;
};

export default Product;
