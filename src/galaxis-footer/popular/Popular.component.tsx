import React, { FC } from "react";
import StyledWrapper from "./popular.style";
import CustomTitle from "../title/title.component";
import { Box, Button, Typography } from "@mui/material";
import { PopularModel } from "../../models/popular.model";

type PopularsProps = { popular: PopularModel[] };

const Popular: FC<PopularsProps> = ({ popular }) => {
  console.log(popular);
  return (
    <StyledWrapper>
      <CustomTitle className="popular--title" title="Popular" />
      <Box className="popular--box" data-testid="footer-popular-box">
        {popular &&
          popular.map((item, index) => (
            <Button className="popular--button" key={index} variant="outlined" disableRipple>
              <Typography className="popular--typography" variant="main">
                {item.label.toLowerCase()}
              </Typography>
            </Button>
          ))}
      </Box>
    </StyledWrapper>
  );
};

export default Popular;
