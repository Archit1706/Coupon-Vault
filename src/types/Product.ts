type Product = {
    name: string;
    price: number;
    description: string;
    image: string;
    category: string;
    subcategory?: string;
    discountedPrice?: number;
    discount?: number;
};

export default Product;
