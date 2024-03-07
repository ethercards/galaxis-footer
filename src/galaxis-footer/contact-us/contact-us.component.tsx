import React, { FC, useCallback, useEffect, useState } from "react";
import StyledWrapper from "./constact-us.style";
import SocialMediaIcon from "../../models/social-media-icon.model";
import { Box, Link, Typography } from "@mui/material";
import AddressModel from "../../models/address.model";
import CustomTitle from "../title/title.component";

type Props = {
  socialMediaIcons: SocialMediaIcon[];
  address: AddressModel;
};

const ContactUs: FC<Props> = ({ socialMediaIcons: initialIcons, address }) => {
  const [socialMediaIcons, setSocialMediaIcons] = useState<SocialMediaIcon[]>(initialIcons);

  function getCurrentDomain(url: string): string {
    const domainRegex = /^(?:https?:\/\/)?(?:dev\.|staging\.)?(.*?)\//;
    const matches = url.match(domainRegex);
    if (matches && matches.length >= 2) {
      return matches[1];
    }
    return url;
  }

  function areUrlsSame(url1: string, url2: string): boolean {
    if (url1 === url2) {
      return true;
    }
    return false;
  }

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

  function removeDomainFromUrl(url: string): string {
    const pathRegex = /^(?:https?:\/\/)?[^\/]*(\/.*)/;
    const match = url.match(pathRegex);

    if (match && match.length > 1) {
      return match[1];
    }
    return url;
  }

  function isValidUrl(str: string): boolean {
    const urlRegex = /^(?:https?:\/\/)?(?:www\.)?([a-zA-Z0-9-]+\.[a-zA-Z]{2,})(?:\/\S*)?$/;
    return urlRegex.test(str);
  }

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
