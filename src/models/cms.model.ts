export interface CmsModel {
  aboutUs: string;
  pages: {
    label: string;
    url: string;
    openInNewTab: boolean;
  }[];
  socialMediaIcons: {
    iconPath: string;
    url: string;
  }[];
  address: {
    mailingAddress: string;
    emailAddress: string;
  };
  popular: {
    label: string;
    url: string;
    openInNewTab: boolean;
  }[];
}
