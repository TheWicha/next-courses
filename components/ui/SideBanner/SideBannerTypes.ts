

 interface BannerItem {
    banner: {
        url: string;
    }
    name: string;
    url: string;
}

export interface BannersType {
    banner: BannerItem[];
}