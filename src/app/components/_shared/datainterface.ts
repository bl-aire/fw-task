export interface IData {
    id: string,
    date: any,
    date_gmt: any,
    guid: {
        rendered: string
    };
    modified: any,
    modified_gmt: any,
    slug: string,
    status: string,
    type: string,
    link: string,
    title: {
        rendered: string
    }
    content: {
        rendered: string
    }
    excerpt: {
        rendered: string
    }
    author: number,
    featured_media: number,
    comment_status: string,
    pink_status: string,
    sticky: boolean,
    template: any,
    format:string,
    meta: object,
    categories: any[],
    tags: any[],
    crunchbase_tag: any[],
    tc_stories_tax: any[],
    tc_ec_category: any[],
    tc_event: any[],
    jetpack_featured_media_url: any,
    parsely: {
        meta: {
            creator: string
        };
    }
    shortlink: string,
    rapidData: object,
    premiumContent: boolean,
    premiumCutOffPercent: number,
    featured: boolean,
    subtitle: any,
    seoTitle: any,
    seoDescription: string,
    tc_cb_mapping: null,
    associatedEvent: null,
    event: null,
    authors: any[],
    hide_featured_image: boolean,
    canonical_url: any
}
