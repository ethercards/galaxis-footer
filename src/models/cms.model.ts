import AddressModel from "./address.model";
// import { UrlModel } from "./url.model";

export interface CmsModel {
  aboutUs: string;
  pages: {
    label: string;
    url: string;
    openInNewTab: boolean;
  }[];
  socialMediaIcons: {
    icon: string;
    url: string;
    openInNewTab: boolean;
  }[];
  address: AddressModel;
  popular: {
    label: string;
    url: string;
    openInNewTab: boolean;
  }[];
}
