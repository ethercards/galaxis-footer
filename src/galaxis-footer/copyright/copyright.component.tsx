import React, { FC } from "react";
import { Typography } from "@mui/material";
import StyledWrapper from "./copyright.style";
import logo from "../../assets/images/galaxis-logo-white.png";

const Copyright: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledWrapper>
      <img src={logo} alt="Galaxis Logo" className="copyright--img" />
      <Typography className="copyright--typography" variant="main">
        All Rights Reserved 2021-{currentYear}
      </Typography>
    </StyledWrapper>
  );
};

export default Copyright;
