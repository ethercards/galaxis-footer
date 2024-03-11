import React, { FC, useCallback, useEffect, useState } from "react";
import StyledWrapper from "./constact-us.style";
import { Box, Link, Typography } from "@mui/material";
import AddressModel from "../../models/address.model";
import CustomTitle from "../title/title.component";
import {
  areUrlsSame,
  extractSubjectFromUrl,
  generateContactFormUrl,
  getCurrentDomain,
  removeDomainFromUrl,
} from "../../utils/links.util";
import { UrlModel } from "../../models/url.model";

type Props = { hostName: string; socialMediaIcons: UrlModel[]; address: AddressModel };

const ContactUs: FC<Props> = ({ hostName, socialMediaIcons, address }) => {
  const [iconItems, setIconItems] = useState<UrlModel[]>(socialMediaIcons);

  const iconsMapper = useCallback(
    (currentHostName: string): UrlModel[] => {
      return socialMediaIcons.map((item) => {
        const currentUrl = getCurrentDomain(item.url);
        const sameHost = areUrlsSame(currentHostName, currentUrl);

        const subjectForContactUs = "custom subject here";
        const generatedUrl = generateContactFormUrl(currentUrl, subjectForContactUs);

        if (!sameHost) {
          const path = generatedUrl ? generatedUrl : item.url;
          return { ...item, url: path, openInNewTab: true };
        } else {
          let generatedPath = null;
          if (generatedUrl) {
            generatedPath = extractSubjectFromUrl(generatedUrl);
          }
          const path = removeDomainFromUrl(generatedPath ? generatedPath : item.url);
          return { ...item, url: path, openInNewTab: false };
        }
      });
    },
    [socialMediaIcons]
  );

  useEffect(() => {
    const currentHostName = getCurrentDomain(hostName);
    const updatedPopular = iconsMapper(currentHostName);

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
