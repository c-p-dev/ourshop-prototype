import { ModelAirport, ModelTerminal, ModelZone, ModelArea, ModelAirportTerminal } from './airport.data.model';
import { AppSettings } from 'app/app.settings';

export class ModelProduct {

	sku: string;
	extension_attributes: any; // ModelExtensionAttribute[];
	custom_attributes: any;
	price: number;
	finalPrice: number;
	id: number;
	name: string;
	isWishlist: boolean;
	brandName: string;
	isBestSeller: boolean;
	description: string;
	stockItem: ModelStockItem;
	// media_gallery_entries: ModelMediaGalleryEntry[];
	mediaGalleryEntries: ModelMediaGalleryEntry[];
	defaultStoreLocation: string;
	sellerProducts: Object[];
	defaultProduct: Object;
	colors: ModelProductOption; // ModelOption[];
	sizes: ModelProductOption; // ModelOption[];
	// flight_details: Object;
	defaultOptions: Object;
	defaultColor: number;
	defaultSize: number;
	type: string;
	seller: ModelSeller;
	operationHour: string;
	airports: ModelAirport[];
	storeLocations: string[];
	fulfillmentMethod: ModelFulfillmentMethod;
	prices: ModelPrice;
	isMultipleStoreLocation: boolean;
	hasFreeGift: boolean;
	isOnlineOnly: boolean;
	storeLocationOptions: ModelStoreLocationOption[];
	products;
	productLinks;
	delivery;
	metaTitle: string;
	metaDescription: string;
	metaKeyword: string;
	variant = {
		"color": {},
		"size": {}
	};
	category_ids;
	urlKey: string;
	is_home_delivery: boolean = false;
	shippingCountries: ModelShippingCountry[];
	isFreshFoodsCategory: boolean = false;
	shipmentCoverage: string;
	commodityCode: string;

	constructor(data) {
		this.sku = data.sku;
		this.id = data.id;
		this.name = data.name;
		this.price = parseFloat(data.price);
		this.finalPrice = parseFloat(data.final_price);
		this.isWishlist = data.extension_attributes.is_wishlist ? (parseInt(data.extension_attributes.is_wishlist) === 1 ? true : false) : false;
		this.brandName = data.custom_attributes.manufacturer ? data.custom_attributes.manufacturer.name : null;
		this.isBestSeller = data.custom_attributes.is_bestseller ? (data.custom_attributes.is_bestseller.value === 1 ? true : false) : false;
		this.description = data.custom_attributes.description ? data.custom_attributes.description.value : null;
		this.stockItem = data.extension_attributes.stock_item ? new ModelStockItem(data.extension_attributes.stock_item) : null;
		this.defaultStoreLocation = data.extension_attributes.store_location && data.extension_attributes.store_location.default ? data.extension_attributes.store_location.default : null;
		this.mediaGalleryEntries = data.media_gallery_entries.map((media: ModelMediaGalleryEntry) => new ModelMediaGalleryEntry(media));
		this.sellerProducts = this.getSellerProducts(this.defaultStoreLocation, data.extension_attributes.store_location.products);
		this.colors = data.extension_attributes.store_location.options.color ? new ModelProductOption(data.extension_attributes.store_location.options.color) : null;
		this.sizes = data.extension_attributes.store_location.options.size ? new ModelProductOption(data.extension_attributes.store_location.options.size) : null;
		this.defaultOptions = data.extension_attributes.store_location.default_options ? data.extension_attributes.store_location.default_options : null;
		this.custom_attributes = data.custom_attributes;
		// this.flight_details = data.extension_attributes.flight_details;
		this.extension_attributes = data.extension_attributes;
		this.defaultColor = data.extension_attributes.store_location.options.color ? this.getDefaultOption(this.defaultOptions, data.extension_attributes.store_location.options.color.attribute_id) : null;
		this.defaultSize = data.extension_attributes.store_location.options.size ? this.getDefaultOption(this.defaultOptions, data.extension_attributes.store_location.options.size.attribute_id) : null;
		this.type = data.extension_attributes.store_location.type_id;
		this.seller = data.extension_attributes.seller ? new ModelSeller(data.extension_attributes.seller) : null;
		this.operationHour = '';

		this.storeLocations = data.extension_attributes.store_location.values;
		// this.fulfillmentMethod = data.custom_attributes.fulfillment_method ? data.custom_attributes.fulfillment_method.map((fulfillment: ModelFulfillmentMethod) => new ModelFulfillmentMethod(fulfillment)) : null;
		// this.fulfillmentMethod = new ModelFulfillmentMethod(data.custom_attributes.fulfillment_method);
		this.prices = data.prices ? new ModelPrice(data.prices) : null;
		this.variant.color = this.colors;
		this.variant.size = this.sizes;

		this.metaTitle = data.custom_attributes.meta_title ? data.custom_attributes.meta_title.value : null;
		this.metaDescription = data.custom_attributes.meta_description ? data.custom_attributes.meta_description.value : null;
		this.metaKeyword = data.custom_attributes.meta_keyword ? data.custom_attributes.meta_keyword.value : null;
		this.urlKey = data.custom_attributes.url_key ? data.custom_attributes.url_key.value : null;

		try {
			this.fulfillmentMethod = new ModelFulfillmentMethod(data.custom_attributes.fulfillment_method);
		} catch (error) {
			// const code = this.defaultStoreLocation && this.defaultStoreLocation.length > 2 ? 'AC' : 'INFLIGHT';
			// const fulfillmentObj = new ModelFulfillmentMethod({ 'code': code });
			// this.fulfillmentMethod = fulfillmentObj;
			const fulfillmentObj = new ModelFulfillmentMethod({ 'code': 'INVALID' });
			this.fulfillmentMethod = fulfillmentObj;
		}

		this.prices = data.prices ? new ModelPrice(data.prices) : null;

		if (this.fulfillmentMethod && this.fulfillmentMethod.isAC) {
			this.airports = data.extension_attributes.store_location.airports ? data.extension_attributes.store_location.airports.map((airport: ModelAirport) => new ModelAirport(airport)) : null;
		}
		this.isMultipleStoreLocation = data.extension_attributes.store_location.values.length > 1 ? true : false;
		this.hasFreeGift = data.custom_attributes.is_free_gift && data.custom_attributes.is_free_gift.value == 1 ? true : false;
		this.isOnlineOnly = data.custom_attributes.online_only && data.custom_attributes.online_only.value == 1 ? true : false;

		this.products = data.extension_attributes.store_location && data.extension_attributes.store_location.products ? data.extension_attributes.store_location.products : [];

		if (this.colors || this.sizes) {
			this.storeLocationOptions = data.extension_attributes.store_location.values.map((element: ModelStoreLocationOption) => new ModelStoreLocationOption(element, this.colors, this.sizes, this.fulfillmentMethod.isAC))
			this.createStoreLocationOptions();
		}
		this.productLinks = data.product_links;
		this.category_ids = data.custom_attributes && data.custom_attributes.category_ids ? data.custom_attributes.category_ids.value : '';
		this.is_home_delivery = data.extension_attributes.store_location.shipping_countries && data.custom_attributes.is_home_delivery && data.custom_attributes.is_home_delivery.value == 1 ? true : false;
		this.shippingCountries = data.extension_attributes.store_location.shipping_countries ? data.extension_attributes.store_location.shipping_countries : [];
		this.shipmentCoverage = data.extension_attributes.seller.shipment_coverage ? data.extension_attributes.seller.shipment_coverage : '';
		this.isFreshFoodsCategory = this.checkIfFreshFoodsCategory(data.extension_attributes.seller.shipment_coverage);
		this.commodityCode = this.getCommodityCode(data.extension_attributes.category_links);

	}

	createStoreLocationOptions() {
		this.products.forEach(childProduct => {
			const colorCode = childProduct.attributes.color ? childProduct.attributes.color : null;
			const sizeCode = childProduct.attributes.size ? childProduct.attributes.size : null;

			for (let index = 0; index < this.storeLocationOptions.length; index++) {
				const storeOptions = this.storeLocationOptions[index];

				if (storeOptions.storeLocation == childProduct.store_location) {

					if (colorCode) {
						for (let colorIndex = 0; colorIndex < storeOptions.color.length; colorIndex++) {
							const colorElement = storeOptions.color[colorIndex];
							if (colorElement && colorElement.value == colorCode) {
								storeOptions.color[colorIndex].available = true;
							}
						}
						this.storeLocationOptions[index].color = storeOptions.color;
					}

					if (sizeCode) {
						for (let sizeIndex = 0; sizeIndex < storeOptions.size.length; sizeIndex++) {
							const sizeElement = storeOptions.size[sizeIndex];
							if (sizeElement && sizeElement.value == sizeCode) {
								storeOptions.size[sizeIndex].available = true;
							}
						}
						this.storeLocationOptions[index].size = storeOptions.size;
					}
				}
			}
		});

	}

	// returns a list of products with defaultSeller
	getSellerProducts(defaultSeller, sellerProducts) {
		const sellerProduct = sellerProducts.filter(function (product) {
			return product.aoc === defaultSeller;
		})
		return sellerProduct;
	}

	// unused
	getDefaultSellerProduct(sellerProducts, colors, sizes) {
		let defaultColor, defaultSize;
		defaultColor = colors ? colors[0].value : null;
		defaultSize = sizes ? sizes[0].value : null;

		const sellerProduct = sellerProducts.filter(function (product) {
			return (defaultColor ? product.attributes.color === defaultColor : null) && (defaultSize ? product.attributes.size === defaultSize : null)
		})
		return sellerProduct;
	}

	getDefaultOption(defaultOptions, optionAttrId): number {
		let defaultValue = 0;
		if (defaultOptions) {
			for (const optionTypeId in defaultOptions) {
				if (optionTypeId === optionAttrId) {
					defaultValue = defaultOptions[optionTypeId];
					break;
				}
			}
		}
		return defaultValue;
	}

	checkIfFreshFoodsCategory(shipmentCoverage: string): boolean {
		// return categoryIds.includes(AppSettings.FRESH_PRODUCE_CATEGORY_ID);
		return shipmentCoverage.split('?')[0] === AppSettings.TELEPORT_FRESH_PRODUCT_PRODUCTS_COVERAGE;
	}

	getCommodityCode(categoryLinks: ModelCategoryLinks[]): string {
		if (!categoryLinks) {
			return null;
		}
		let codes = categoryLinks.filter(item => item.commodity_code !== null).map(item => item.commodity_code);
		return codes.length > 0 ? codes[0] : null;
	}

}

export class ModelStockItem {
	qty: number;
	maxSaleQty: number;
	isInStock: boolean;

	constructor(data) {
		this.qty = data.qty ? data.qty : 0;
		this.maxSaleQty = data.max_sale_qty ? data.max_sale_qty : 0;
		this.isInStock = data.is_in_stock;

	}
}

// colors and sizes
export class ModelProductOption {
	attributeId: number;
	attrubuteCode: string;
	values: ModelOption[];

	constructor(data) {
		this.attributeId = data.attribute_id;
		this.attrubuteCode = data.attribute_code;
		this.values = data.values.map((option: ModelOption) => new ModelOption(option, false));
		// this.values = this.values.sort(function (obj1, obj2) {
		//     return obj1.value - obj2.value;
		// });
		// this.values = data.values;

	}
}

export class ModelStoreLocationOption {
	storeLocation: string;
	color: ModelOption[];
	size: ModelOption[];
	// options: ModelProductOption;
	constructor(store, colors, sizes, isAC) {
		this.storeLocation = store;
		this.color = colors ? colors.values.map((option: ModelOption) => new ModelOption(option, isAC)) : null;
		this.size = sizes ? sizes.values.map((option: ModelOption) => new ModelOption(option, isAC)) : null;
	}
}

export class ModelOption {
	value: number;
	label: string;
	available: boolean;
	code: string;

	constructor(data, isAC) {
		this.value = data.value;
		this.label = data.label;
		this.available = isAC ? false : true;
		this.code = data.label;
		if (data.code) {
			this.code = data.code;
		}
		if (data.color_code) {
			this.code = data.color_code;
		}
	}
}

export class ModelExtensionAttribute {

}

export class ModelProductLink {

}


export class ModelTierPrice {

}

export class ModelMediaGalleryEntry {
	id: number;
	file: string;
	disabled: boolean;
	types: string[];
	image: string;

	constructor(data) {
		this.id = data.id;
		this.file = data.file;
		this.disabled = data.disabled;
		this.types = data.types;
	}
}

export class ModelCustomAttribute {
	attribute_code: string;
	short_description: string;
	value: any;
	name: any;
}

/* PDP's related products */
export class ModelProductRelated {
	name: string;
	sku: string;
	finalPrice: number;
	price: number;
	custom_attributes: ModelCustomAttributes;
	brandName: string;
	thumbnail: string;
	isBestSeller: boolean;
	extension_attributes: Object;
	percentDiscount: number;
	isPriceFrom: boolean;
	fulfillmentMethod: ModelFulfillmentMethod;
	isTabHidden?: boolean;

	constructor(product) {
		this.name = product.name;
		this.sku = product.sku;
		this.finalPrice = product.prices.final_price ? parseFloat(product.prices.final_price) : undefined;
		this.price = product.prices.price ? parseFloat(product.prices.price) : 0;

		this.custom_attributes = new ModelCustomAttributes(product.custom_attributes);
		this.brandName = product.custom_attributes.manufacturer && product.custom_attributes.manufacturer.name ? product.custom_attributes.manufacturer.name : '';
		this.thumbnail = product.custom_attributes.thumbnail.value;
		this.isBestSeller = (product.custom_attributes.is_bestseller && product.custom_attributes.is_bestseller.value) ? (product.custom_attributes.is_bestseller.value === 1 ? true : false) : false;
		this.extension_attributes = product.extension_attributes;
		this.percentDiscount = this.finalPrice ? this.getPercentDiscount(this.price, this.finalPrice) : 0;
		this.isPriceFrom = product.prices.price_from;
		this.fulfillmentMethod = product.custom_attributes.fulfillment_method ? new ModelFulfillmentMethod(product.custom_attributes.fulfillment_method) : undefined;
	}

	getPercentDiscount(price, discountedAmount): number {
		let percentDiscount: number = 0;
		percentDiscount = ((price - discountedAmount) / price) * 100;
		return percentDiscount <= 0 ? 0 : percentDiscount;
	}

}

export class ModelCustomAttributes {
	manufacturer: ModelCustomAttribute;
	thumbnail: ModelCustomAttribute;
	is_bestseller: ModelCustomAttribute;

	constructor(data) {
		this.manufacturer = data.manufacturer;
		this.thumbnail = data.thumbnail;
		this.is_bestseller = data.is_bestseller;
	}
}

export class ModelSeller {
	id: number;
	shopName: string;
	email?: string;
	shop_url?: string;
	name?: string
	email_alert_list?: ""
	international_delivery?: string;
	merchant_guidelines?: ModelMerchantGuidelines[];
	postcode?: string;
	shipment_coverage?: string;

	constructor(data) {
		this.id = data.id;
		this.shopName = data.shop_name;
		this.merchant_guidelines = (data.merchant_guidelines ? data.merchant_guidelines : null);
		this.shipment_coverage = data.shipment_coverage;
		this.postcode = data.postcode;
	}
}

export class ModelFulfillmentMethod {
	id: string;
	isAC: boolean = false; // Pickup at Airport
	isInflight: boolean = false;
	constructor(data) {
		this.id = data.code;
		this.isAC = data.code === 'AC' ? true : false;
		this.isInflight = data.code === 'INFLIGHT' ? true : false;
	}
}

export class ModelPrice {
	price: number;
	finalPrice: number;
	currency: string;
	isPriceFrom: boolean;
	storeLocation: string;
	exchangeRate: number;

	constructor(data) {
		this.price = data.price;
		this.finalPrice = data.final_price;
		this.currency = data.currency;
		this.isPriceFrom = data.price_from
		this.storeLocation = data.store_location ? data.store_location : '';
		this.exchangeRate = 1;
	}


}

export class ModelChildProduct {
	price: number;
	finalPrice: number;
	isInStock: boolean;
	prices: ModelPrice;
	isWithPriceRange: boolean = true;
	exchangeRate: number;
	aoc: string; // aoc or storeLocation ex. AK, KUL
	freeGift: ModelFreeGift;
	storeMap: string;
	operationHour: string;
}


export class ModelShippingCountry {
	code: string;
	value: string;
}





export class ModelFreeGift {
	name: string;
	sku: string;
	qty: number;
	message: string;
	image: string;
	manufacturer: string;
}

export class ModelMerchantGuidelines {
	code: string;
	value: string;
	type: string;
	icon: string;
	label: string;

	constructor(data, locale) {
		this.code = data.code;
		this.value = data.value;

		switch (data.code) {
			case 'terms_home_delivery':
				this.type = 'HD';
				this.icon = 'assets/images/category/home.png';
				this.label = locale.HOME_DELIVERY
				break;
			case 'terms_airport_collection':
				this.icon = 'assets/images/category/airport.png';
				this.type = 'AC'
				this.label = locale.AIRPORT_COLLECTION;
				break;
			case 'terms_inflight':
				this.icon = 'assets/images/category-icon/version4/category_icon_delivery_onboard.png';
				this.type = 'INFLIGHT';
				this.label = locale.AIRASIA_INFLIGHT
				break;
			default:
				break;
		}

	}



}


export class ModelCategoryLinks {
	category_id: string;
	commodity_code: string;
	position: number;

}