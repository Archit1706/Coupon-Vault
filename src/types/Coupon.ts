type Coupon = {
    _id: string;
    couponCode: string;
    userid?: string;
    creationDate: string;
    expiryDate: string;
    discountType: string;
    discountAmt?: number;
    discountPect?: number;
    discountItem?: number;
    freeItem?: string;
    skuIds?: string[];
    conditions?: string[];
    campaign?: string;
    title: string;
    desc: string;
    userLimit?: number;
    enabled: boolean;
    redeemedBy: string[];
    format: string;
    createdAt?: string;
    updatedAt?: string;
    __v?: number;
};

export default Coupon;
