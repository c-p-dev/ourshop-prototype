export class ModelPayment {
    ccNumber: number;
    ccExpDate: string;
    ccvv: number;
    customerName: string;
    bankName: string;
    customerMobile: string;
    paymentOption: string;
    paymentMethod: string;
    bigPointsData: BigPoints;
    _ga: string;
    ip: string;

}
export class ModelPaymentBigClick {
    cc_vv: number;
    virtual_no: string;
    _ga: string;
    ip: string;
    paymentMethod: string;
    bigPointsData: BigPoints;
}
export class BigPoints {
    amount: any;
    point: any;
}
export class ModelConfirmation {
    is_guest: string;
    message: string;
    order_id: string;
    status: string;
}

export class ModelOrders {
    items: ModelOrder[];
}

export class ModelOrder {
    increment_id: number;
    created_at: string;
    status: string;
    order_currency_code: string;
    entity_id: number;
    quote_id: number;
    flight_details: ModelOrderFlightDetails;
    items: ModelOrderItem[];
}

export class ModelOrderItem {
    manufacturer: string;
    name: string;
    price: number;
    qty_ordered: number;
}

export class ModelOrderFlightDetails {
    firstname: string;
    lastname: string;
    flight_no: string;
    std: string;
    departure_city: string;
    arrival_city: string;
}

export class ModelCartTotal {
    grandTotal: number;
    couponCode: string;
    itemsQty: number;
    discountAmount: number;
    taxAmount: number;
    subtotal: number;
    bankPromoText: string;
    shippingAmount: number;

    constructor(data) {
        this.itemsQty = data.items_qty;
        this.grandTotal = data.total_segments.grand_total.value;
        this.discountAmount = data.total_segments.discount ? data.total_segments.discount.value : 0;
        this.taxAmount = data.total_segments.tax.value;
        this.subtotal = data.total_segments.subtotal.value;
        this.couponCode = data.coupon_code;
        this.shippingAmount = data.total_segments.shipping.value;
        // this.bankPromoText = cartTotals.bank_promo;
    }
}

export class ModelBankPromo {
    withPromo: boolean;
    description: string;

    constructor(data) {
        this.withPromo = data.with_promo ? data.with_promo : false;
        this.description = data.description ? data.description : '';
    }
}

