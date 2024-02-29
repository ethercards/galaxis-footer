export interface CmsDTO {
  about_us: string;
  pages: {
    label: string;
    url: string;
    open_in_new_tab: boolean;
  }[];
  social_media_icons: {
    icon_path: string;
    url: string;
  }[];

  address: {
    mailing_address: string;
    email_address: string;
  };
  popular: {
    label: string;
    url: string;
    open_in_new_tab: boolean;
  }[];
}
