import { CmsDTO } from "../dtos/cms.dto";
import { CmsModel } from "../models/cms.model";

export const toModel = (dto: CmsDTO): CmsModel => ({
  aboutUs: dto.about_us,
  pages: dto.pages.map((page) => ({
    label: page.label,
    url: page.url,
    openInNewTab: page.open_in_new_tab,
  })),
  socialMediaIcons: dto.social_media_icons.map((icon) => ({
    url: icon.url,
    openInNewTab: true,
    icon: icon.icon_path,
  })),
  address: {
    mailingAddress: dto.address.mailing_address,
    emailAddress: dto.address.email_address,
  },
  popular: dto.popular.map((popularItem) => ({
    label: popularItem.label,
    url: popularItem.url,
    openInNewTab: popularItem.open_in_new_tab,
  })),
});
