import React, { FC, useCallback, useEffect, useState } from "react";
import StyledWrapper from "./constact-us.style";
import SocialMediaIcon from "../../models/social-media-icon.model";
import { Box, Link, Typography } from "@mui/material";
import AddressModel from "../../models/address.model";
import CustomTitle from "../title/title.component";
import {
  areUrlsSame,
  getCurrentDomain,
  isValidUrl,
  removeDomainFromUrl,
} from "../../utils/links.util";

type Props = {
  socialMediaIcons: SocialMediaIcon[];
  address: AddressModel;
};

const ContactUs: FC<Props> = ({ socialMediaIcons: initialIcons, address }) => {
  const [socialMediaIcons, setSocialMediaIcons] = useState<SocialMediaIcon[]>(initialIcons);

  const popularItemsMapper = useCallback(
    (currentHostName: string): SocialMediaIcon[] => {
      return socialMediaIcons.map((item) => {
        const currentUrl = getCurrentDomain(item.url);
        const isUrl = isValidUrl(item.url);

        if (!isUrl) {
          const path = "/" + item.url;
          return { ...item, url: path, openInNewTab: false };
        }

        const sameHost = areUrlsSame(currentHostName, currentUrl);

        if (!sameHost) {
          return { ...item, openInNewTab: true };
        } else {
          const path = removeDomainFromUrl(item.url);
          return { ...item, url: path, openInNewTab: false };
        }
      });
    },
    [socialMediaIcons]
  );

  useEffect(() => {
    const hostName = "https://dev.galaxis.xyz/";
    // const hostName = window.location.hostname;
    const currentHostName = getCurrentDomain(hostName);
    const updatedPopular = popularItemsMapper(currentHostName);

    setSocialMediaIcons(updatedPopular);
  }, []);
  return (
    <StyledWrapper>
      <CustomTitle className="contact-us--custom-title" title="Contact Us" />
      <Box className="contact-us--box">
        <Box className="contact-us--box">
          {socialMediaIcons.map((icon, index) => (
            <Link key={index} href={icon.url} target={icon.openInNewTab ? "_blank" : "_self"}>
              <img className="contact-us--img" src={icon.iconPath} alt="icon" />
            </Link>
          ))}
        </Box>
        <Typography variant="main" className="contact-us--typography">
          <Box>
            <Typography
              fontFamily="Poppins"
              className="contact-us--typography"
              dangerouslySetInnerHTML={{
                __html: address.mailingAddress,
              }}
            />
            <Link href={`mailto:${address.emailAddress}`} className="contact-us--link">
              {address.emailAddress}
            </Link>
          </Box>
        </Typography>
      </Box>
    </StyledWrapper>
  );
};

export default ContactUs;
