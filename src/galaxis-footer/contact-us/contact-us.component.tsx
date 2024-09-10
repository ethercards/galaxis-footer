import React, { FC, useEffect, useState } from "react";
import StyledWrapper from "./constact-us.style";
import { Box, Link, Typography } from "@mui/material";
import CustomTitle from "../title/title.component";
import { areUrlsSame, getCurrentDomain, useItemsMapper } from "../../utils/links.util";
import { UrlModel } from "../../models/url.model";

type Props = {
  hostName: string;
  socialMediaIcons: UrlModel[];
  customSubject?: string;
  url: string;
};

const ContactUs: FC<Props> = ({ hostName, socialMediaIcons, customSubject, url }) => {
  const itemsMapper = useItemsMapper(socialMediaIcons, customSubject, url);
  const [iconItems, setIconItems] = useState<UrlModel[]>(socialMediaIcons);
  const [imprintShouldOpenInNewTab, setImprintShouldOpenInNewTab] = useState<boolean>(true);
  const imprintUrl = "https://galaxis.xyz/imprint";

  useEffect(() => {
    const currentHostName = getCurrentDomain(hostName);
    console.log(currentHostName, "currentHostName");
    const updatedPopular = itemsMapper(currentHostName, socialMediaIcons);

    const imprintDomain = getCurrentDomain(imprintUrl);
    console.log(imprintDomain, "imprintDomain");
    const sameDomain = areUrlsSame(currentHostName, imprintDomain);
    setImprintShouldOpenInNewTab(!sameDomain);

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
            <Link
              href={imprintUrl}
              target={imprintShouldOpenInNewTab ? "_blank" : "_self"}
              className="contact-us--link"
            >
              Imprint
            </Link>
          </Box>
        </Typography>
      </Box>
    </StyledWrapper>
  );
};

export default ContactUs;
