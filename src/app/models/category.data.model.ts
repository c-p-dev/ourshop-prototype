import { ModelProduct, ModelProductOption, ModelStockItem } from "./product.data.model"


export class ModelCategoryProducts {
	id: number;
	sku: string;

	price: number;
	final_price: number;
	itemCurrency: string;
	isPriceRangeOpen: boolean;

	name: string;
	is_wishlist: boolean;
	brandName: string;
	brandId: string;
	isBestSeller: boolean;
	isNewArrival: boolean;
	description: string;
	online_only: boolean;
	gwp: boolean
	is_in_stock: boolean
	stock_item: any
	//aoc
	aoc: any
	defaultStoreLocation: string;
	bigimage: string;
	image: string;
	imageFileName: string;
	flight_details: Object;
	delivery
	rate
	isPriceHidden: boolean;
	hasSelectedFlight;
	merchant;
	category_ids;
	manufacturerUrlKey: string;
	urlKey: string;
	metaTitle: string;
	metaKeyword: string;
	metaDescription: string;
	isTabHidden?: boolean

	private INR = "INR"
	constructor(data, selectedCurrency?, index?) {
		this.sku = data.sku;
		this.id = data.id;
		this.name = data.name;
		this.price = data.prices ? parseFloat(data.prices.price) : 1
		this.final_price = data.prices ? (data.prices.final_price != undefined ? parseFloat(data.prices.final_price) : null) : null
		this.itemCurrency = data.prices ? data.prices.currency : null;
		this.isPriceRangeOpen = data.prices ? data.prices.price_from : null;
		this.brandName = data.custom_attributes.manufacturer ? data.custom_attributes.manufacturer.name : null;
		this.brandId = data.custom_attributes.manufacturer ? data.custom_attributes.manufacturer.value : null;
		this.manufacturerUrlKey = data.custom_attributes.manufacturer ? data.custom_attributes.manufacturer.url_key : null;
		this.urlKey = data.custom_attributes.url_key ? data.custom_attributes.url_key.value : null;
		this.isBestSeller = data.custom_attributes.is_bestseller ? (data.custom_attributes.is_bestseller.value == "1" ? true : false) : false;
		this.isNewArrival = data.custom_attributes.new_arrival ? (data.custom_attributes.new_arrival.value == "1" ? true : false) : false;
		this.description = data.custom_attributes.description ? data.custom_attributes.description.value : null;
		this.online_only = data.custom_attributes.online_only ? (data.custom_attributes.online_only.value == 1 ? true : false) : false
		this.gwp = data.custom_attributes.is_free_gift ? (data.custom_attributes.is_free_gift.value == 1 ? true : false) : false
		this.image = data.custom_attributes.thumbnail ? data.custom_attributes.thumbnail.value : null
		this.bigimage = data.custom_attributes.image ? data.custom_attributes.image.value : null
		this.imageFileName = data.custom_attributes.thumbnail_label ? data.custom_attributes.thumbnail_label.value : null
		this.delivery = this.getDeliveryMethodList(data);// data.custom_attributes.fulfillment_method ? data.custom_attributes.fulfillment_method.code : null
		this.is_wishlist = parseInt(data.extension_attributes.is_wishlist) == 1 ? true : false;
		// this.defaultStoreLocation = data.extension_attributes.aoc.default;
		this.stock_item = new ModelStockItem(data.extension_attributes.stock_item);
		this.flight_details = data.extension_attributes.flight_details;
		this.hasSelectedFlight = sessionStorage.getItem("aoc") ? sessionStorage.getItem("aoc") : null;
		this.rate;
		this.isPriceHidden = selectedCurrency == this.INR ? false : this.checkIfPriceShouldBeHidden(data.prices ? data.prices.currency : null, data.prices ? data.prices.price : null);
		this.itemCurrency ? this.getExchangeRate(this.itemCurrency) : null;
		this.merchant = data.extension_attributes.seller && data.extension_attributes.seller.shop_name ? data.extension_attributes.seller.shop_name : null;;
		this.category_ids = data.custom_attributes && data.custom_attributes.category_ids ? data.custom_attributes.category_ids.value : '';
		this.is_in_stock = data.prices.stock_item.is_in_stock;

		this.metaTitle = data.custom_attributes.meta_title ? data.custom_attributes.meta_title.value : null;
		this.metaDescription = data.custom_attributes.meta_description ? data.custom_attributes.meta_description.value : null;
		this.metaKeyword = data.custom_attributes.meta_keyword ? data.custom_attributes.meta_keyword.value : null;
		this.isTabHidden = index && index >= 3;

	}

	getExchangeRate(itemCurrency) {
		let rateList = JSON.parse(sessionStorage.getItem('exchangeRateList'))
		let collectedCurrency = sessionStorage.getItem('selectedCurrency')
		rateList.forEach((rate: rateList) => {
			if (itemCurrency == rate.quoted_currency && collectedCurrency == rate.collected_currency) {
				this.rate = rate.exchange_rate
			}
		})
	}

	checkIfPriceShouldBeHidden(currency, price) {

		if (price == 0 && currency == this.INR) {
			return true;
		}

		if (currency == this.INR && this.itemCurrency != this.INR) {
			return true
		}
		if (currency != this.INR && this.itemCurrency == this.INR) {
			return true
		}
		else {
			return false
		}
	}

	getDeliveryMethodList(item: any): Array<String> {
		let deliveryList: Array<String> = [];
		if (item.custom_attributes.fulfillment_method) {
			deliveryList.push(item.custom_attributes.fulfillment_method.code);
		}
		if (item.custom_attributes.hasOwnProperty("is_home_delivery") && item.custom_attributes['is_home_delivery']['value'] == 1) {
			deliveryList.push('HD');
		}
		return deliveryList;
	}
}

interface rateList {
	collected_currency: string
	exchange_rate: number
	quoted_currency: string
}


export class ModelCategory {
	readonly id: number;
	readonly parent_id: number;
	readonly name: string;
	is_active: boolean;
	level: number;
	product_count: number;
	children_data: any[];
}

export interface ModelAocConfig {
	carrier_code: string
	days: number
	active: boolean
	currency: string
	categories: Array<{ id: number, coming_soon: boolean }>
	domestic: Array<{ id: number }>
	international: Array<{ id: number }>
	payment_methods: Array<string>
	allowed_currencies: Array<string>
}





