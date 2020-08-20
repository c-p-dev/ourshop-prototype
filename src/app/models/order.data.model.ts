import { ModelConfirmationProducts } from "./confirmation.data.model";

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
	grand_total: number;
	flight_details: ModelOrderFlightDetails;
	items: ModelConfirmationProducts;
	miscRate: number;
	pickup_details: ModelPickUpInfo;
	fulfillment_method: string;
	shipping_details: any;
	customer_email: string;
	constructor(data, airportList?) {
		this.increment_id = data.increment_id;
		this.created_at = data.created_at;
		this.status = data.status;
		this.order_currency_code = data.order_currency_code;
		this.entity_id = data.entity_id;
		this.grand_total = data.grand_total
		this.quote_id = data.quote_id;
		this.items = data.items.map((item: ModelConfirmationProducts) => {
			return new ModelConfirmationProducts(item, airportList, data.order_currency_code)
		})
		this.miscRate = data.misc ? data.misc.exchange_rate : 1;
		this.pickup_details = data.pickup_details;
		this.flight_details = data.flight_details;
		this.fulfillment_method = data.fulfillment_method;
		this.shipping_details = data.shipping_details;
		this.customer_email = data.customer_email;
		console.log(this.items)
	}
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

export class ModelPickUpInfo {
	pickup_datetime_from: string;
	pickup_datetime_to: string;
}