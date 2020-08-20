// PROD AADF BE 
const API_BASEURL = 'https://stgaadf.airasia.com/';
const SELLER_CENTER_URL = 'https://stgscdf.airasia.com/';

//cdn caching
const ASSET_BASE_URL = 'https://assets-stgdf.airasia.com'; 

// Temporary AADF BE
// const API_BASEURL = 'https://stgapp.ourshop.com/';
// const SELLER_CENTER_URL = 'https://stgsellercenter.ourshop.com/';
export const environment = {
  production: true,
  debugger: false,
  API_BASEURL: 'https://appdf.airasia.com/api/',
  MEDIA_BASEURL: 'https://appdf.airasia.com/pub/media',
  PRODUCT_MEDIA_BASEURL: 'https://appdf.airasia.com/pub/media/catalog/product',
  PRODUCT_MEDIA_BASEURL_THUMBNAIL: "https://appdf.airasia.com/pub/media/catalog/product",
  SSO_REDIRECT_URL: 'https://www.airasia.com/member/login?redirect=OURSHOP&culture=',
  FLIGHT_API_GETBOOKING_WITH_EMAIL: 'https://8f20e4gw1c.execute-api.ap-southeast-1.amazonaws.com/Production',
  FLIGHT_API_GETBOOKING_WITH_RECORDLOCATOR: 'https://d8eedfrukj.execute-api.ap-southeast-1.amazonaws.com/Production',
  FLIGHT_DATA_API_KEY: 'kNdMVjphnA6ZxTGhdpO1r5Cu7DWzvmOi5FMWFmfy',
  // FLIGHT_CONFIG: 'flight/staging/config.json',
  MCC_URL: 'https://hsoku7bkm0.execute-api.ap-southeast-1.amazonaws.com/Production',
  LANGUAGE_API_KEY: 'ONnwIKIRjX4jOy4Jzb9cs5prR6nhstO42pW7KScV',
  NAVITAIRE_FLIGHT_API_GETBOOKING_WITH_EMAIL: 'findbyemailaddress/',
  NAVITAIRE_FLIGHT_API_GETBOOKING_WITH_RECORDLOCATOR: 'getbooking/',
  AGENT_FLIGHT_API_GETBOOKING_WITH_EMAIL: 'findbyemailaddress/',
  AGENT_FLIGHT_API_GETBOOKING_WITH_RECORDLOCATOR: 'getbooking/',
  LANGUAGE_BASE_URL: 'assets/resources/locale/locale-en.json',
  RESOURCE_URL: 'assets/resources/',
  FOOTER_URL: 'assets/resources/locale/footer/',
  MY_PROFILE_URL: 'https://www.airasia.com/member/myaccount?culture=',
  CONFIG_URL: 'https://appdf.airasia.com/api/banner',
  STORE_VIEW_D7: 'D7',
  STORE_VIEW_DEFAULT: 'AK',
  BANNER_PATH: 'assets/images/Banner/',
  CDN: 'IL',
  JACE_BASEURL: 'https://jace.airasia.com/',
  SLACK_PNR_URL: 'https://hooks.slack.com/services/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',
  NAVITAIRE_SERVICE_URL: 'https://appdf.airasia.com/api/navitaire/getsession', //replace with prod api 
  BDF_SERVICE_URL: 'flight/',
  BEARER_TOKEN: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJRaTl0MFpUNmZsV1A3OURZeUkzQ3Q4dHF3d0RJSDJQdiIsImlhdCI6MTUxNzE5MzkyNiwiZXhwIjoxODMyNzI2NzI2LCJhdWQiOiIiLCJzdWIiOiJiaWdkdXR5ZnJlZSJ9.uQrf6NP2gd6WyBBc_e9n0bVnKlvlHB9_ca0TwIIFwaQ',
  SSO_ORIGIN: 'https://airasia.com/shop',
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
  MAGENTO_API_BASE: 'https://appdf.airasia.com/rest/',
  MAGENTO_API_BASE_URL: 'https://appdf.airasia.com/rest/V1/',
  
  MAGENTO_API_BASE_URL_RATE: 'https://appdf.airasia.com/rest/default/V1/',
  MAP_DIRECTORY: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/map/',

  MERCHANT_DIR: 'assets/merchant/prod/',

  // S3 json config
  // AIRPORT_RESOURCE_URL: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/config/airports.json',
  // FLIGHT_CONFIG: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/config/config.json',
  // AIRPORT_CONFIG: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/config/airport.config.json',
  // LANGUAGE_CONFIG: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/config/languages.config.json',
  // STORELOCATION_RESOURCE_URL: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/config/store_location.json',
  // AIRPORT_COLL_FLAG: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/config/pre-book-banner.json',
  // OPERATING_HOUR_CONFIG: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/config/operating-hours.json',
  // PREBOOK_CUTOFF: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/config/prebook-cutoff.json',
  // VIDEO_CONFIG: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/config/videos.json',
  // CARDTYPE_NOT_ALLOWED_CURRENCY: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/config/cardtype-not-allowed-currency.config.json',

  // // how to shop assets
  // HOW_TO_SHOP_PATH: 'https://storage.googleapis.com/assets-www.ourshop.com/Presentation/images/howtoshop/'

  AIRPORT_RESOURCE_URL: 'assets/resources/prod/config/airports.json',
  FLIGHT_CONFIG: 'assets/resources/prod/config/config.json',
  AIRPORT_CONFIG: 'assets/resources/prod/config/airport.config.json',
  LANGUAGE_CONFIG: 'assets/resources/prod/config/languages.config.json',
  STORELOCATION_RESOURCE_URL: 'assets/resources/prod/config/store_location.json',
  AIRPORT_COLL_FLAG: 'assets/resources/prod/config/pre-book-banner.json',
  OPERATING_HOUR_CONFIG: 'assets/resources/prod/config/operating-hours.json',
  PREBOOK_CUTOFF: 'assets/resources/prod/config/prebook-cutoff.json',
  VIDEO_CONFIG: 'assets/resources/prod/config/videos.json',
  CARDTYPE_NOT_ALLOWED_CURRENCY: 'assets/resources/prod/config/cardtype-not-allowed-currency.config.json',
  FEATURE_URL: 'https://appdf.airasia.com/rest/default/V1/',

  // how to shop assets
  HOW_TO_SHOP_PATH: 'assets/images/howtoshop/',
  CATEGORY_BANNER_IMG_URL : 'http://images-appdf.airasia.com.s3.amazonaws.com/catalog/category/',
//   LOGIN_SSO_URL: 'https://ssor.airasia.com/',
  LOGIN_SSO_URL: 'https://ssor.airasia.com/',
  GEOAPIKEY: 'ce1237e007734f6991297b7865aca065',
  BASE_URL:'https://www.airasia.com/shop',

    //Teleport Integration 
    TELEPORT_BASE_URL: 'https://scdf.airasia.com/',
    TELEPORT_SHIPMENT_COVERAGE_BASE: 'assets/json/shipping/malaysia/',
    TELEPORT_MALAYSIAN_POSTAL_CODES_LIST: 'assets/json/shipping/malaysia/postcodes.json',

    //Teleport Integration - Post Codes only
    TELEPORT_BASE_URL_PC: 'https://scdf.airasia.com/',
    TELEPORT_SHIPMENT_COVERAGE_BASE_PC: 'assets/json/courier/teleport/coverage-teleport_malaysia_west.json',
    TELEPORT_MALAYSIAN_POSTAL_CODES_LIST_PC: 'assets/json/shipping/malaysia/postcodes_master.json',

    ASSET_BASE_URL: `${ASSET_BASE_URL}`,

    // Temporary FAQ PDF Link
    FAQ_PDF_LINK: "https://storage.googleapis.com/ourdutyfree-faq/AirAsia%20Shop%20FAQ%20-%20Website.pdf",

    //APP BASE HREF
    BASE_HREF: "/shop"
};
