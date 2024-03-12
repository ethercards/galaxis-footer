import AddressModel from "./address.model";
import { UrlModel } from "./url.model";
// import { UrlModel } from "./url.model";

export interface CmsModel {
  aboutUs: string;
  pages: UrlModel[];
  socialMediaIcons: UrlModel[];
  address: AddressModel;
  popular: UrlModel[];
}
