// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// PROD AADF BE 
const API_BASEURL = 'https://stgaadf.airasia.com/';
const SELLER_CENTER_URL = 'https://stgscdf.airasia.com/';

//cdn caching
const ASSET_BASE_URL = 'https://assets-stgdf.airasia.com'; 

// Temporary AADF BE
// const API_BASEURL = 'https://stgapp.ourshop.com/';
// const SELLER_CENTER_URL = 'https://stgsellercenter.ourshop.com/';
export const environment = {
    production: false,
    debugger: true,
    API_BASEURL: 'https://devapp.ourshop.com/api/',
    MEDIA_BASEURL: 'https://devapp.ourshop.com/pub/media',
    PRODUCT_MEDIA_BASEURL: 'https://devapp.ourshop.com/pub/media/catalog/product',
    PRODUCT_MEDIA_BASEURL_THUMBNAIL: "https://devapp.ourshop.com/pub/media/catalog/product",
    SSO_REDIRECT_URL: 'https://stgmember.airasia.com/login.aspx?redirect=OURSHOP_STG&culture=',
    FLIGHT_API_GETBOOKING_WITH_EMAIL: 'https://8f20e4gw1c.execute-api.ap-southeast-1.amazonaws.com/Production/staging',
    FLIGHT_API_GETBOOKING_WITH_RECORDLOCATOR: 'https://d8eedfrukj.execute-api.ap-southeast-1.amazonaws.com/Production/staging',
    FLIGHT_DATA_API_KEY: 'kNdMVjphnA6ZxTGhdpO1r5Cu7DWzvmOi5FMWFmfy',
    NAVITAIRE_FLIGHT_API_GETBOOKING_WITH_EMAIL: 'findbyemailaddress/',
    NAVITAIRE_FLIGHT_API_GETBOOKING_WITH_RECORDLOCATOR: 'getbooking/',
    // FLIGHT_CONFIG: 'flight/staging/config.json',
    MCC_URL: 'https://hsoku7bkm0.execute-api.ap-southeast-1.amazonaws.com/Production',
    LANGUAGE_API_KEY: 'ONnwIKIRjX4jOy4Jzb9cs5prR6nhstO42pW7KScV',
    RESOURCE_URL: 'assets/resources/',
    LANGUAGE_BASE_URL: 'assets/resources/locale/locale-en.json',
    FOOTER_URL: 'assets/resources/locale/footer/',
    MY_PROFILE_URL: 'https://stgmember.airasia.com/SSO2/edit-profile.aspx',
    CONFIG_URL: 'https://devapp.ourshop.com/api/banner',
    STORE_VIEW_D7: 'D7',
    STORE_VIEW_DEFAULT: 'AK',
    BANNER_PATH: 'assets/images/Banner/',
    JACE_BASEURL: 'https://devjace.airasia.com/jace_current/JACEApi/',
    SSO_ORIGIN: 'http://theorigin-stgwww.ourshop.com',
    SLACK_PNR_URL: 'https://hooks.slack.com/services/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',
    NAVITAIRE_SERVICE_URL: 'https://devapp.ourshop.com/api/navitaire/getsession',
    BDF_SERVICE_URL: 'flight/',
    BEARER_TOKEN: false,
    CDN: 'CF',
    EXIT_MODAL_SLACK: 'https://hooks.slack.com/services/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',
    ACE_FLOW: false,
    ICONS: {
        INFLIGHT: {
            REGULAR: "assets/images/category-icon/version4/category_icon_delivery_onboard.png",
            SMALL: "assets/images/category-icon/version4/category_icon_delivery_onboard.png"
        },
        AIRPORTCOLLECTION: {
            REGULAR: "assets/images/category-icon/version4/category_icon_airport_collection.png",
            SMALL: "assets/images/category-icon/version4/category_icon_airport_collection.png"
        }
    },
    MAGENTO_API_BASE: 'https://devapp.ourshop.com/rest/',
    MAGENTO_API_BASE_URL: 'https://devapp.ourshop.com/rest/V1/',
    MAGENTO_API_BASE_URL_RATE: 'https://devapp.ourshop.com/rest/default/V1/', 
    FEATURE_URL: 'https://devapp.ourshop.com/rest/default/V1/',
    MAP_DIRECTORY: 'assets/map/staging/',
    MERCHANT_DIR: 'assets/merchant/staging/',


    // json config
    AIRPORT_RESOURCE_URL: 'assets/resources/staging/config/airports.json',
    FLIGHT_CONFIG: 'assets/resources/staging/config/config.json',
    AIRPORT_CONFIG: 'assets/resources/staging/config/airport.config.json',
    LANGUAGE_CONFIG: 'assets/resources/staging/config/languages.config.json',
    STORELOCATION_RESOURCE_URL: 'assets/resources/staging/config/store_location.json',
    AIRPORT_COLL_FLAG: 'assets/resources/staging/config/pre-book-banner.json',
    OPERATING_HOUR_CONFIG: 'assets/resources/staging/config/operating-hours.json',
    PREBOOK_CUTOFF: 'assets/resources/staging/config/prebook-cutoff.json',
    VIDEO_CONFIG: 'assets/resources/staging/config/videos.json',
    CARDTYPE_NOT_ALLOWED_CURRENCY: 'assets/resources/staging/config/cardtype-not-allowed-currency.config.json',

    // how to shop assets
    HOW_TO_SHOP_PATH: 'assets/images/howtoshop/',

    CATEGORY_BANNER_IMG_URL: 'https://devapp.ourshop.com/pub/media/catalog/category/',
    LOGIN_SSO_URL: 'https://stgsso-apigw.airasia.com/',
    GEOAPIKEY: 'ce1237e007734f6991297b7865aca065',
    BASE_URL: 'https://stgwww.ourshop.com',

    //Teleport Integration
	TELEPORT_BASE_URL: 'https://stgsellercenter.ourshop.com/',
	TELEPORT_SHIPMENT_COVERAGE_BASE: 'assets/json/shipping/malaysia/',
    TELEPORT_MALAYSIAN_POSTAL_CODES_LIST: 'assets/json/shipping/malaysia/postcodes.json',

    //Teleport Integration - Post Codes only
    TELEPORT_BASE_URL_PC: 'https://stgscdf.airasia.com/',
    TELEPORT_SHIPMENT_COVERAGE_BASE_PC: 'assets/json/courier/teleport/coverage-teleport_malaysia_west.json',
    TELEPORT_MALAYSIAN_POSTAL_CODES_LIST_PC: 'assets/json/shipping/malaysia/postcodes_master.json',

    ASSET_BASE_URL: `${ASSET_BASE_URL}`,

    // Temporary FAQ PDF Link
    FAQ_PDF_LINK: "https://storage.googleapis.com/ourdutyfree-faq/AirAsia%20Shop%20FAQ%20-%20Website.pdf",

    //APP BASE HREF
    BASE_HREF: "/shop"
};