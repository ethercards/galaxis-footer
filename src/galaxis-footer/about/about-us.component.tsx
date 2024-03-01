import React, { FC } from "react";
import { GalaxisLogoIcon } from "../../icons/icons.component";
import { Box, Typography } from "@mui/material";
import StyledWrapper from "./about-us.style";

type Props = {
  text: string;
};

const AboutUs: FC<Props> = ({ text }) => {
  return (
    <StyledWrapper>
      <GalaxisLogoIcon className="footer--logo" />
      <Box className="footer--box">
        <Typography className="footer--typography">{text}</Typography>
      </Box>
    </StyledWrapper>
  );
};

export default AboutUs;
