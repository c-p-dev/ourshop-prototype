import { ModelProduct, ModelProductOption, ModelStockItem } from "./product.data.model"

export class ModelConfirmationProducts {
	base_original_price: number
	base_price: number
	is_bestseller: boolean
	is_free_gift: boolean
	manufacturer: string
	name: string
	options
	original_price: number
	price: number
	qty: number
	seller_shop_name: string
	sku: string
	store_location: string
	thumbnail: string
	type: string
	private airportList
	storeMap: string;
	order_currency_code: string;
	seller: ModelSellerInfo;
	category: string;
	constructor(data, airport?, order_currency_code?) {
		this.base_original_price = data.base_original_price
		this.base_price = data.base_price
		this.order_currency_code = order_currency_code;
		this.is_bestseller = data.is_bestseller
		this.is_free_gift = data.is_free_gift
		this.manufacturer = data.manufacturer
		this.name = data.name
		this.original_price = data.original_price
		this.price = data.price
		this.qty = data.qty_ordered
		this.seller_shop_name = data.qty
		this.sku = data.parent_sku
		this.thumbnail = data.thumbnail
		this.store_location = data.store_location
		this.airportList = airport ? airport : null;
		this.options = data.options ? this.breakDownOptions(data.options) : null;
		if (this.options) {
			this.options.storeMap = data.store_location_map
			this.options.deliveryType = data.store_location;
			this.options.storeName = data.store_location;
		}
		this.seller = data.seller;
		this.category = (data.category ? data.category : '');
	}
	breakDownOptions(options) {
		let splitStoreLocation;
		if (options.store_location && options.store_location.length && options.store_location.length > 2) {
			splitStoreLocation = options.store_location.split("-")
			return {
				color: options.color,
				size: options.size,
				airport: splitStoreLocation[0] && this.airportList ? this.expandAirport(splitStoreLocation[0]) : null,
				terminal: splitStoreLocation[1] ? this.expandTerminal(splitStoreLocation[1]) : null,
				zone: splitStoreLocation[2] ? this.expandZone(splitStoreLocation[2]) : null,
				collectOn: splitStoreLocation[3] ? this.expandCollectOn(splitStoreLocation[3]) : null
			}
		} else {
			return options
		}

	}

	expandAirport(location) {
		let airport;
		this.airportList.forEach(_location => {
			const orderAirport = _location.airports.filter(item => item.iata === location.toString())[0];
			if (orderAirport) {
				airport = orderAirport;
			}
		});
		return airport;
	}

	expandTerminal(location) {
		switch (location) {
			case "T1":
				return "Terminal 1"
			case "T2":
				return "Terminal 2"
			case "T3":
				return "Terminal 3"
			case "T4":
				return "Terminal 4"
		}
	}
	expandZone(location) {
		switch (location) {
			case "Int":
			case "int":
				return "International"
			case "Dom":
			case "dom":
				return "Domestic"
			case "Com":
			case "com":
				return "Public Concourse"
		}
	}
	expandCollectOn(location) {
		switch (location) {
			case "Arriv":
			case "arriv":
				return "Arrival"
			case "Depar":
			case "depar":
				return "Departure"
		}
	}

}

class Options {
	storeLocation: string
	color: string
	size: string
	constructor(data) {
		this.storeLocation = data.store_location
		this.color = data.color
		this.size = data.size
	}
}

export class ModelSellerInfo {
	shop_name: string;
	name: string;
}

