import React, { FC } from "react";
import StyledWrapper from "./Popular.style";
import CustomTitle from "../title/Title.component";
import { Box, Button, Typography } from "@mui/material";

export type PopularProps = {
  label: string;
  url: string;
  openInNewTab: boolean;
};

export type PopularsProps = { popular: PopularProps[] };

const Popular: FC<PopularsProps> = ({ popular }) => {
  console.log(popular);
  return (
    <StyledWrapper item xxs={12} xs={12} sm={4} md={4} lg={3}>
      <CustomTitle className="popular--title" title="Popular" />
      <Box className="popular--box" data-testid="footer-popular-box">
        {popular &&
          popular.map((item, index) => (
            <Button
              className="popular--button"
              key={index}
              variant="outlined"
              disableRipple
              // onClick={() => (item.url && item.url !== "#" ? to(item.url) : openComingSoon())}
            >
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
