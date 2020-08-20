
export interface ITeleportShippingState {
    state: string;
    city: ITeleportCity[];
    isFreshProduce?: boolean;
}

export interface ITeleportCity {
    name: string;
    postcode: Array<string>
}