import React, { FC } from "react";
import StyledWrapper from "./constact-us.style";
import SocialMediaIcon from "../../models/social-media-icon.model";
import { Box, Link, Typography } from "@mui/material";
import AddressModel from "../../models/address.model";
import CustomTitle from "../title/Title.component";

type Props = {
  socialMediaIcons: SocialMediaIcon[];
  address: AddressModel;
};

const ContactUs: FC<Props> = ({ socialMediaIcons, address }) => {
  return (
    <StyledWrapper>
      <CustomTitle className="contact-us--title" title="Contact Us" />
      <Box className="contact-us--details">
        <Box className="contact-us--icons">
          {socialMediaIcons.map((icon, index) => (
            <Link key={index} href={icon.url}>
              <img src={icon.iconPath} alt="icon" />
            </Link>
          ))}
        </Box>
        <Typography variant="main" className="contact-us--address">
          <Box>
            <Typography
              className="contact-us--mailing-address"
              dangerouslySetInnerHTML={{
                __html: address.mailingAddress,
              }}
            />
            <Link href={`mailto:${address.emailAddress}`}>{address.emailAddress}</Link>
          </Box>
        </Typography>
      </Box>
    </StyledWrapper>
  );
};

export default ContactUs;
