export interface AddToCartModel {
    sku: string;
    qty: number;
    child_sku: string;
    store_location?: string;
    cart_id?: string;
    custom_options?: AiportCartOptionModel | InflightToCartOptionModel | HomeDeliveryOptionModel;
    options?: AddToCartCustomOption[];

}

export interface AiportCartOptionModel {
    category?: string;
    fulfillment_method?: "inflight" | "airport_collection" | "home_delivery";
    store_location?: string;
}

export interface InflightToCartOptionModel {
    airasia_big_member_id?: string;
    arrival_station?: string;
    booking_date?: string;
    booking_no?: string;
    carrier_code?: string;
    category?: string;
    departure_station?: string;
    email?: string;
    firstname?: string;
    flight_no?: string;
    fulfillment_method?: "inflight" | "airport_collection" | "home_delivery";
    international?: string;
    lastname?: string;
    other_phone?: string;
    passenger_number?: string;
    sta?: string;
    std?: string;
    store_location?: string;
}

export interface HomeDeliveryOptionModel {
    category: string;
    fulfillment_method: "inflight" | "airport_collection" | "home_delivery";
    country?: string;
    region?: string;
    city?: string;
    shipping_coverage?: string;
    commodity_code?: string;
}

export interface AddToCartCustomOption {
    attributeId: string;
    attributeValue: string;
}