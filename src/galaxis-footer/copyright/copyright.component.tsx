import React, { FC } from "react";
import { Typography } from "@mui/material";
import StyledWrapper from "./copyright.style";

const Copyright: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <StyledWrapper>
      <Typography className="copyright--typography" variant="main">
        All Rights Reserved 2021-{currentYear}
      </Typography>
    </StyledWrapper>
  );
};

export default Copyright;
