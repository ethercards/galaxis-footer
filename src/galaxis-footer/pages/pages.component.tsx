import React, { FC, useEffect, useState } from "react";
import { PageModel } from "../../models/page.model";
import { Box, Link, Typography } from "@mui/material";
import CustomTitle from "../title/title.component";
import StyledWrapper from "./pages.style";

type PagesProps = { pages: PageModel[] };

const Pages: FC<PagesProps> = ({ pages: initialPages }) => {
  const [pages, setPages] = useState<PageModel[]>(initialPages);

  useEffect(() => {
    const isGalaxisPath = window.location.href.startsWith("https://galaxis.xyz");

    if (isGalaxisPath) {
      const updatedPopular = initialPages.map((item) => {
        if (!item.url.startsWith("https://galaxis.xyz")) {
          return { ...item };
        }
        const pathParts = item.url.split("/");
        const path = pathParts[pathParts.length - 1];
        return {
          ...item,
          url: path,
        };
      });
      setPages(updatedPopular);
    } else {
      const updatedPopular = initialPages.map((item) => ({
        ...item,
        openInNewTab: true,
      }));
      setPages(updatedPopular);
    }
  }, [initialPages]);

  return (
    <StyledWrapper>
      <CustomTitle className="title" title="Pages" />
      <Box className="pages--box" data-testid="pages-box">
        {pages.map((page, index) => (
          <Typography className="pages--typography" key={index} variant="main">
            <Link
              className="pages--link"
              href={page.url}
              target={page.openInNewTab ? "_blank" : "_self"}
            >
              {page.label}
            </Link>
          </Typography>
        ))}
      </Box>
    </StyledWrapper>
  );
};

export default Pages;
