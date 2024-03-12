import React, { FC, useEffect, useState } from "react";
import StyledWrapper from "./constact-us.style";
import { Box, Link, Typography } from "@mui/material";
import AddressModel from "../../models/address.model";
import CustomTitle from "../title/title.component";
import { getCurrentDomain, useItemsMapper } from "../../utils/links.util";
import { UrlModel } from "../../models/url.model";

type Props = { hostName: string; socialMediaIcons: UrlModel[]; address: AddressModel };

const ContactUs: FC<Props> = ({ hostName, socialMediaIcons, address }) => {
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
