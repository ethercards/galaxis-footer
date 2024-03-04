import React, { FC } from "react";
import { PageModel } from "../../models/page.model";
import { Box, Typography } from "@mui/material";
import CustomTitle from "../title/title.component";
import StyledWrapper from "./pages.style";

type PagesProps = { pages: PageModel[] };

const Pages: FC<PagesProps> = ({ pages }) => {
  console.log("pages", pages);
  return (
    <StyledWrapper>
      <CustomTitle className="title" title="Pages" />
      <Box className="pages--box" data-testid="footer-pages-box">
        {pages.map((page, index) => (
          <Typography className="pages--typography" key={index} variant="main">
            <a>{page.label}</a>
          </Typography>
        ))}
      </Box>
    </StyledWrapper>
  );
};

export default Pages;
