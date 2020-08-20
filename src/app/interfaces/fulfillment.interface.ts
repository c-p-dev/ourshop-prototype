export interface IfulfillmentOptions {
    locale_name: string;
    name: string;
    value: string;
    isAvailable: boolean;
    img: string;
    imgHover: string,
    default?: boolean,
    code?: string,
    showFulfillment: boolean
}

//For pdp fulfilment object
export interface IfulfillmentOptionsPDP {
    label: string,
    value: string,
    type: string,
    img: string,
}