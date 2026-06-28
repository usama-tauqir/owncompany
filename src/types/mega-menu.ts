export interface MenuLink {

    title:string;

    href:string;

}



export interface CapabilityGroup {

    heading:string;

    href?:string;

    links?:MenuLink[];

}



export interface CapabilityColumn {

    groups:CapabilityGroup[];

}



export interface CapabilitiesMenuData {

    title:string;

    type:"capabilities";

    columns:CapabilityColumn[];

}



export interface IndustryMenuData {

    title:string;

    type:"industries";

    items:MenuLink[];

}



export interface SimpleMenuData {

    title:string;

    type:"simple";

    links:MenuLink[];

}



export type MegaMenu =
CapabilitiesMenuData |
IndustryMenuData |
SimpleMenuData;