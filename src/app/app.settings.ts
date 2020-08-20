import { environment } from '../environments/environment';
import { IfulfillmentOptions } from './interfaces/fulfillment.interface';
import { ModelShippingCountry } from './models/product.data.model';


export class AppSettings {

    public static get onProdMode(): boolean { return environment.production }
    public static get onDebuggerMode(): boolean { return environment.debugger }
    public static get API_BASEURL(): string { return environment.API_BASEURL }
    public static get MEDIA_BASEURL(): string { return environment.MEDIA_BASEURL }
    public static get PRODUCT_MEDIA_BASEURL(): string { return environment.PRODUCT_MEDIA_BASEURL }
    public static get PRODUCT_MEDIA_BASEURL_THUMBNAIL(): string { return environment.PRODUCT_MEDIA_BASEURL_THUMBNAIL }
    public static get SSO_REDIRECT_URL(): string { return environment.SSO_REDIRECT_URL }
    public static get MY_PROFILE_URL(): string { return environment.MY_PROFILE_URL }

    public static get CATEGORY_DEFAULT_VIEW(): string { return 'grid' }
    public static get PRODUCT_DETAILS_IMAGE_COUNT_LIMIT(): number { return 5 }
    public static get COUNTRY_FLAG_FOLDER(): string { return 'assets/images/flags/' }

    public static get CATEGORY_DEEPLINK_FOLDER(): string { return '../../../assets/images/category-deeplink/' }
    public static get VIDEO_CONFIG(): string { return environment.VIDEO_CONFIG }

    public static get ABOUT_US_FOLDER(): string { return 'assets/images/about-us/' }
    public static get FAQ_FOLDER(): string { return 'assets/images/faq/' }

    public static get CATEGORY_DEEPLINK_FILENAMES(): any {
        var fileNames = [
            {
                'BEAUTY': 'ContentPgs.png',
                'CLOTHING': 'test.png',
                'COSMETIC': 'ContentPgs.png',
                'FRAGRANCES': 'test.png',
                'GADGETS': 'ContentPgs.png',
                'GIFTS': 'test.png',
                'JEWELRY': 'Category_banner_Jewellery.jpg',
                'LIQUOR': 'test.png',
                'MERCHANDISE': 'ContentPgs.png',
                'WATCHES': 'test.png',
            }
        ]
        return fileNames;
    }

    public static get BRAND_DEEPLINK_FOLDER(): string { return '../../../assets/images/brand-deeplink/' }
    public static get BRAND_DEEPLINK_FILENAMES(): any {
        var fileNames = [
            {
                'BENTLEY': 'ContentPgs.png',
                'EMPRO': 'ContentPgs.png',
                'ANNA SUI': 'test.png',
                'BVLGARI': 'ContentPgs.png',
                'CALVIN KLEIN': 'test.png',
                'CHLOÉ': 'ContentPgs.png',
                'DIOR': 'test.png',
                'AIRASIA': 'ContentPgs.png',
                'INFINITY & CO': 'test.png',
                'AVIATOR': 'ContentPgs.png',
                'CLOGAU': 'test.png',
                "L'OCCITANE": 'ContentPgs.png',
                "ESTEE LAUDER": 'test.png',
                'ERNO LASZLO': 'ContentPgs.png',
                'GIVENCHY': 'test.png',
                'MERCEDES BENZ': 'ContentPgs.png',
                'MARC JACOBS': 'test.png',
                'BELLAPIERRE COSMETICS': 'ContentPgs.png',
                'CLINIQUE': 'test.png',
                'BEAUTY BLENDER': 'ContentPgs.png',
                'JILL STUART': 'test.png',
                'REVLON': 'ContentPgs.png',
                'IRISCAN': 'test.png',
                'BRAUN': 'ContentPgs.png',
                'FITBUG': 'test.png',
                'ASUS': 'ContentPgs.png',
                'KYUTEC': 'test.png',
                'LIFETRONS': 'ContentPgs.png',
                'ETIENNE AIGNER': 'test.png',
                'DISNEY': 'ContentPgs.png',
                'CRISS': 'test.png',
                'FOLLI FOLLIE': 'ContentPgs.png',
                'KALOO': 'test.png',
                'HICKIES': 'ContentPgs.png',
                'LIP SMACKERS': 'test.png',
                'OGON': 'ContentPgs.png',
                'THUMBS UP': 'test.png',
                'TRAVALO': 'ContentPgs.png',
                'BUCKLEY LONDON': 'test.png',
                'HOUSE OF HARLOW': 'ContentPgs.png',
                'PANDORA': 'test.png',
                'PICA LELA': 'ContentPgs.png',
                'VIVALDI': 'test.png',
                'PIERRE CARDIN': 'ContentPgs.png',
                'TOSCOW': 'test.png',
                'JOHNNIE WALKER': 'ContentPgs.png',
                'GUESS': 'test.png',
                'HIPPIE CHIC': 'ContentPgs.png',
                'DANIEL WELLINGTON': 'ContentPgs.png',
                'KOMONO': 'test.png',
                'LAMBRETTA': 'ContentPgs.png',
                'MASERATI WATCH': 'test.png',
                'MOON': 'ContentPgs.png',
                'SEKONDA': 'test.png',
                'SWISS MILITARY': 'ContentPgs.png',
                'TITAN': 'test.png'
                //tba
            }
        ]
        return fileNames;
    }

    public static get BANNER_PATH(): string { return environment.BANNER_PATH };

    //E: url straight from magento

    public static get FLIGHT_API_GETBOOKING_WITH_EMAIL(): string { return environment.FLIGHT_API_GETBOOKING_WITH_EMAIL }
    public static get FLIGHT_API_GETBOOKING_WITH_RECORDLOCATOR(): string { return environment.FLIGHT_API_GETBOOKING_WITH_RECORDLOCATOR }
    public static get FLIGHT_DATA_API_KEY(): string { return environment.FLIGHT_DATA_API_KEY }

    // http://bigdutyfreedev.indracompany.com.ph/bigdutyfree/webapi 
    // 1. GET /category
    // 2. GET /category/:category_id
    // 3. GET /product
    // 4. GET /product/:sku

    public static get ENDPOINT_CATEGORY(): string {
        //return 'category' 
        return 'query_category.php';
    }
    public static get ENDPOINT_PRODUCT(): string {
        //return 'product'
        return 'query_product.php';
    }

    public static get ENDPOINT_CUSTOMER_INFO(): string {
        return 'get_customer_info.php';
    }

    public static get ENDPOINT_LOGOUT(): string {
        return 'logout.php';
    }

    public static get ENDPOINT_PRODUCT_DETAILS(): string {
        return 'query_product_details.php';
    }

    public static get MCC_URL(): string { return environment.MCC_URL }

    public static get DEFAULT_CURRENCY(): string {
        return 'MYR';
    }

    public static get MCC_INTERVAL(): number {
        return 3600000;
    }
    public static get FLIGHT_CONFIG(): string { return environment.FLIGHT_CONFIG }
    public static get AIRPORT_CONFIG(): string { return environment.AIRPORT_CONFIG }
    public static get LANGUAGE_CONFIG(): string { return environment.LANGUAGE_CONFIG }

    public static get RESOURCE_URL(): string { return environment.RESOURCE_URL }
    public static get LANGUAGE_API_KEY(): string { return environment.LANGUAGE_API_KEY }
    public static get LANGUAGE_BASE_URL(): string { return environment.LANGUAGE_BASE_URL }
    public static get FOOTER_URL(): string { return environment.FOOTER_URL }
    public static get STORE_VIEW_DEFAULT(): string { return environment.STORE_VIEW_DEFAULT }
    public static get STORE_VIEW_D7(): string { return environment.STORE_VIEW_D7 }
    public static get CONFIG_URL(): string { return environment.CONFIG_URL }
    // public static get CDN(): string { return environment.CDN }
    public static get JACE_BASEURL(): string { return environment.JACE_BASEURL }
    public static get SSO_ORIGIN(): string { return environment.SSO_ORIGIN }

    public static get SLACK_PNR_URL(): string { return environment.SLACK_PNR_URL }
    public static get NAVITAIRE_SERVICE_URL(): string { return environment.NAVITAIRE_SERVICE_URL }
    public static get BDF_SERVICE_BYEMAIL(): string { return environment.NAVITAIRE_FLIGHT_API_GETBOOKING_WITH_EMAIL }
    public static get BDF_SERVICE_BYRECORDlOCATOR(): string { return environment.NAVITAIRE_FLIGHT_API_GETBOOKING_WITH_RECORDLOCATOR }
    public static get BDF_SERVICE_URL(): string { return environment.BDF_SERVICE_URL }
    public static get BDF_BEARER_TOKEN(): any { return environment.BEARER_TOKEN }

    public static get ACE_FLOW(): boolean { return environment.ACE_FLOW }
    public static get EXIT_MODAL_SLACK(): string { return environment.EXIT_MODAL_SLACK }
    public static get AIRPORT_RESOURCE_URL(): string { return environment.AIRPORT_RESOURCE_URL }
    public static get STORELOCATION_RESOURCE_URL(): string { return environment.STORELOCATION_RESOURCE_URL }
    public static get AIRPORT_COLL_FLAG(): string { return environment.AIRPORT_COLL_FLAG }
    public static get ICONS(): any { return environment.ICONS }
    public static get OPERATING_HOUR_CONFIG(): string { return environment.OPERATING_HOUR_CONFIG }
    public static get MAGENTO_API_BASE(): string { return environment.MAGENTO_API_BASE }
    public static get MAGENTO_API_BASE_URL(): string { return environment.MAGENTO_API_BASE_URL }
    public static get MAGENTO_API_BASE_URL_RATE(): string { return environment.MAGENTO_API_BASE_URL_RATE }
    public static get FEATURE_URL(): string { return environment.FEATURE_URL }
    public static get MAP_DIRECTORY(): string { return environment.MAP_DIRECTORY }
    public static get PREBOOK_CUTOFF(): string { return environment.PREBOOK_CUTOFF }

    public static get MERCHANT_DIR(): string { return environment.MERCHANT_DIR }
    public static get FOOTER_FILES_DIRECTORY(): string { return 'assets/footer-files/' }
    public static get CARDTYPE_NOT_ALLOWED_CURRENCY(): string { return environment.CARDTYPE_NOT_ALLOWED_CURRENCY }
    public static get HOW_TO_SHOP_PATH(): string { return environment.HOW_TO_SHOP_PATH }
    
    public static get CATEGORY_BANNER_IMG_URL(): string { return environment.CATEGORY_BANNER_IMG_URL }
    public static get LOGIN_SSO_URL(): string { return environment.LOGIN_SSO_URL }

    public static get GEOAPIKEY(): string { return environment.GEOAPIKEY }
    public static get BASEURL(): string { return environment.BASE_URL }


    public static get AIRPORT_COLLECTION() :string { return "Pickup at Airport" } 
    public static get AIRASIA_INFLIGHT() : string { return "Inflight Delivery" } 
    public static get IM_JUST_BROWSING() : string { return "Traveller" } 
    public static get HOME_DELIVERY() : string { return  "Home Delivery" } 

    public static get AIRPORT_COLLECTION_CODE() :string { return  "AC" } 
	public static get AIRASIA_INFLIGHT_CODE() :string { return  "INFLIGHT" } 
	public static get HOME_DELIVERY_CODE() :string { return  "HD" } 

    public static get FULFILLMENT_OPTIONS() : Array<IfulfillmentOptions> {

    

        const fulfillmentOptions = [
            {
                "locale_name": this.IM_JUST_BROWSING,
                "name": this.IM_JUST_BROWSING,
                "value": "shop-everything",
                "isAvailable": true,
                "img": (this.onProdMode ? `assets/images/Banner/traveller-icon.svg` : `assets/images/Banner/traveller-icon.svg`),
                "imgHover":(this.onProdMode ? `assets/images/Banner/traveller-icon-highlight.svg` : `assets/images/Banner/traveller-icon-highlight.svg`),
                "showFulfillment": true
                
            },
            {
                "locale_name": this.AIRASIA_INFLIGHT,
                "name": this.AIRASIA_INFLIGHT,
                "value": "pickup-inflight",
                "isAvailable": true,
               
                "img": (this.onProdMode ? `assets/images/Banner/inflight-icon.svg` : `assets/images/Banner/inflight-icon.svg`),
                "imgHover": (this.onProdMode ? `assets/images/Banner/inflight-icon-highlight.svg` : `assets/images/Banner/inflight-icon-highlight.svg`),
                code: this.AIRASIA_INFLIGHT_CODE,
                "showFulfillment": false
            },
            {
                "locale_name": this.AIRPORT_COLLECTION,
                "name": this.AIRPORT_COLLECTION,
                "value": "pickup-at-airport",
                "isAvailable": true,
                "img": (this.onProdMode ? `assets/images/Banner/airport-icon.svg` : `assets/images/Banner/airport-icon.svg`),
                "imgHover":  (this.onProdMode ? `assets/images/Banner/airport-icon-highlight.svg` : `assets/images/Banner/airport-icon-highlight.svg`),
                code: this.AIRPORT_COLLECTION_CODE,
                "showFulfillment": false
            },
            {
                "locale_name": this.HOME_DELIVERY,
                "name": this.HOME_DELIVERY,
                "value": "pickup-at-airport",
                "isAvailable": true,
                "img": (this.onProdMode ? `assets/images/Banner/new-hd-icon.svg` : `assets/images/Banner/new-hd-icon.svg`),
                "imgHover": (this.onProdMode ? `assets/images/Banner/new-hd-icon-highlight.svg` : `assets/images/Banner/new-hd-icon-highlight.svg`),
                default: true,
                code: this.HOME_DELIVERY_CODE,
                "showFulfillment": true
            }

        ]

        return fulfillmentOptions;
    }
    
    public static get ENABLE_HD_TELEPORT() : boolean { return false };
    public static get DEFAULT_SHIPPING_COUNTRY() : ModelShippingCountry[] { return [{code: 'MY', value:'West Malaysia'}] }
    public static get TELEPORT_SHIPMENT_COVERAGE() : string { return environment.TELEPORT_BASE_URL + environment.TELEPORT_SHIPMENT_COVERAGE_BASE }
	public static get TELEPORT_FRESH_PRODUCT_PRODUCTS_COVERAGE() : string { return 'teleport_klang_valley.json'}
    public static get TELEPORT_MALAYSIAN_POST_CODES_LIST() : string { return environment.TELEPORT_BASE_URL + environment.TELEPORT_MALAYSIAN_POSTAL_CODES_LIST }
    
    //Teleport Integration - Postcodes only enabled
    public static get ENABLE_HD_POSTCODE_TELEPORT() : boolean { return true };
    public static get TELEPORT_MALAYSIAN_POST_CODES_LIST_PC() : string { return environment.TELEPORT_BASE_URL_PC + environment.TELEPORT_MALAYSIAN_POSTAL_CODES_LIST_PC }
    public static get TELEPORT_VALID_POST_CODES_LIST_PC() : string { return environment.TELEPORT_BASE_URL_PC + environment.TELEPORT_SHIPMENT_COVERAGE_BASE_PC }

    public static get ASSET_BASE_URL() : string { return environment.ASSET_BASE_URL}   

    // Temporary FAQ PDF LINK
    public static get FAQ_PDF_LINK() : string { return environment.FAQ_PDF_LINK}    

    // App baseHref
    public static get BASE_HREF() : string { return environment.BASE_HREF }
}
