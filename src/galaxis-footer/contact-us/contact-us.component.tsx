import React, { FC } from "react";
import StyledWrapper from "./constact-us.style";
import SocialMediaIcon from "../../models/social-media-icon.model";
import { Box, Link, Typography } from "@mui/material";
import AddressModel from "../../models/address.model";
import CustomTitle from "../title/title.component";

type Props = {
  socialMediaIcons: SocialMediaIcon[];
  address: AddressModel;
};

const ContactUs: FC<Props> = ({ socialMediaIcons, address }) => {
  return (
    <StyledWrapper>
      <CustomTitle className="contact-us--custom-title" title="Contact Us" />
      <Box className="contact-us--box">
        <Box className="contact-us--box">
          {socialMediaIcons.map((icon, index) => (
            <Link key={index} href={icon.url}>
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
