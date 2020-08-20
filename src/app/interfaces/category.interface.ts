export interface ICategory extends ICategoryCommon {
 banners: Array<IBanner>
 children_data: Array<IChildrenData>;
 duty_allowances: string;

}

export interface IBanner {
 src: string;
}

export interface IChildrenData extends ICategoryCommon {
 banners: Array<any>;
 children_data: Array<any>;
 duty_allowances: boolean;
}

export interface ICategoryCommon {
 featured_brands: Array<IFeaturedBrand>;
 id: number;
 image: string;
 include_in_menu: boolean;
 is_active: boolean;
 level: number;
 name: string;
 parent_id: number;
 position: number;
 product_count: number;
 url_key: string;
}

export interface IFeaturedBrand{
 value: string;
 url_key: string;
 label: string;
}


export interface ICategoryList {
    id: number;
    parent_id: number;
    name: string;
    url_key: string;
    is_active: boolean;
    position: number;
    level: number;
    product_count: number;
    include_in_menu: boolean;
    image: string;
    duty_allowances: boolean;
    children_data: Array<ICategoryList>;
    banners: Array<any>;
    featured_brands: Array<IFeaturedBrand>
}
