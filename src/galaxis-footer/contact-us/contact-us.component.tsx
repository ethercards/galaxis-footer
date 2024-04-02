import React, { FC, useEffect, useState } from "react";
import StyledWrapper from "./constact-us.style";
import { Box, Link, Typography } from "@mui/material";
import CustomTitle from "../title/title.component";
import { getCurrentDomain, useItemsMapper } from "../../utils/links.util";
import { UrlModel } from "../../models/url.model";

type Props = { hostName: string; socialMediaIcons: UrlModel[] };

const ContactUs: FC<Props> = ({ hostName, socialMediaIcons }) => {
  const itemsMapper = useItemsMapper(socialMediaIcons);

  const [iconItems, setIconItems] = useState<UrlModel[]>(socialMediaIcons);

  useEffect(() => {
    const currentHostName = getCurrentDomain(hostName);
    const updatedPopular = itemsMapper(currentHostName, socialMediaIcons);

    setIconItems(updatedPopular);
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
        <Typography variant="main" className="contact-us--typography">
          <Box className="contact-us--box">
            <Link href="https://galaxis.xyz/imprint" target="_blank" className="contact-us--link">
              Imprint
            </Link>
          </Box>
        </Typography>
      </Box>
    </StyledWrapper>
  );
};

export default ContactUs;
