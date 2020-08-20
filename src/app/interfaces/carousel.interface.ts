export interface ICourselItem {
    id: string;
    name: string;
    image: string;
    images: {
        desktop: string,
        tablet: string,
        mobile: string,
    };
    link: string;
    title: string;
    text: string;
}