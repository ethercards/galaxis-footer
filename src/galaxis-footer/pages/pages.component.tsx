import React, { FC, useCallback, useEffect, useState } from "react";
import { PageModel } from "../../models/page.model";
import { Box, Link, Typography } from "@mui/material";
import CustomTitle from "../title/title.component";
import StyledWrapper from "./pages.style";
import { areUrlsSame, getCurrentDomain, removeDomainFromUrl } from "../../utils/links.util";

type PagesProps = { pages: PageModel[] };

const Pages: FC<PagesProps> = ({ pages: initialPages }) => {
  const [pages, setPages] = useState<PageModel[]>(initialPages);

  const pagesItemsMapper = useCallback(
    (currentHostName: string): PageModel[] => {
      return pages.map((item) => {
        const currentUrl = getCurrentDomain(item.url);
        const sameHost = areUrlsSame(currentHostName, currentUrl);

        if (!sameHost) {
          return { ...item, openInNewTab: true };
        } else {
          const path = removeDomainFromUrl(item.url);
          return { ...item, url: path, openInNewTab: false };
        }
      });
    },
    [pages]
  );

  useEffect(() => {
    const hostName = window.location.hostname;
    const currentHostName = getCurrentDomain(hostName);
    const updatedPopular = pagesItemsMapper(currentHostName);

    setPages(updatedPopular);
  }, []);

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
