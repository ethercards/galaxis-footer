import React, { FC, useEffect, useState } from "react";
import StyledWrapper from "./constact-us.style";
import { Box, Link, Typography } from "@mui/material";
import CustomTitle from "../title/title.component";
import { getCurrentDomain, useItemsMapper } from "../../utils/links.util";
import { UrlModel } from "../../models/url.model";

type Props = {
  hostName: string;
  socialMediaIcons: UrlModel[];
  customSubject?: string;
  url: string;
  contactUsPages: UrlModel[];
};

const ContactUs: FC<Props> = ({
  hostName,
  socialMediaIcons,
  customSubject,
  url,
  contactUsPages,
}) => {
  const itemsMapper = useItemsMapper(socialMediaIcons, customSubject, url);
  const pagesMapper = useItemsMapper(contactUsPages, url);
  const [iconItems, setIconItems] = useState<UrlModel[]>(socialMediaIcons);
  const [contactPages, setContactPages] = useState<UrlModel[]>(contactUsPages);

  useEffect(() => {
    const currentHostName = getCurrentDomain(hostName);
    const updatedPopular = itemsMapper(currentHostName, socialMediaIcons);
    setIconItems(updatedPopular);

    const updatedPages = pagesMapper(currentHostName, contactUsPages);
    setContactPages(updatedPages);
  }, []);

  return (
    <StyledWrapper>
      <CustomTitle className="contact-us--custom-title" title="Contact Us" />
      <Box className="contact-us--box">
        <Box className="contact-us--box">
          {iconItems.map((item, index) => (
            <Link key={index} href={item.url} target={item.openInNewTab ? "_blank" : "_self"}>
              <img className="contact-us--img" src={item.icon} alt="icon" />
            </Link>
          ))}
        </Box>

        <Box className="contact-us--box pages">
          {contactPages.map((page, index) => (
            <Typography key={index} variant="main">
              <Link
                href={page.url}
                target={page.openInNewTab ? "_blank" : "_self"}
                className="contact-us--link"
              >
                {page.label}
              </Link>
            </Typography>
          ))}
        </Box>
      </Box>
    </StyledWrapper>
  );
};

export default ContactUs;
