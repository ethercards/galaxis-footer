import React, { FC } from "react";
import { PageModel } from "../../models/page.model";
import { Box, Typography } from "@mui/material";
import CustomTitle from "../title/Title.component";
import StyledWrapper from "./Pages.style";

export type PagesProps = { pages: PageModel[] };

const Pages: FC<PagesProps> = ({ pages }) => {
  console.log("pages", pages);
  return (
    <StyledWrapper item xxs={6} xs={6} sm={4} md={4} lg={3}>
      <CustomTitle className="title" title="Pages" />
      <Box className="box" display="flex" flexDirection="column" data-testid="footer-pages-box">
        Pages
        {pages.map((page, index) => (
          <Typography
            key={index}
            sx={{
              cursor: "pointer",
              opacity: 0.8,
            }}
            variant="main"
          >
            <a
            // onClick={() =>
            //   page.url && page.url !== '#' ? to(page.url) : openComingSoon()
            // }
            >
              {page.label}
            </a>
          </Typography>
        ))}
      </Box>
    </StyledWrapper>
  );
};

export default Pages;
