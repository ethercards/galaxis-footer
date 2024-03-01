import AddressModel from "./address.model";
import SocialMediaIcon from "./social-media-icon.model";

export interface CmsModel {
  aboutUs: string;
  pages: {
    label: string;
    url: string;
    openInNewTab: boolean;
  }[];
  socialMediaIcons: SocialMediaIcon[];
  address: AddressModel;
  popular: {
    label: string;
    url: string;
    openInNewTab: boolean;
  }[];
}
