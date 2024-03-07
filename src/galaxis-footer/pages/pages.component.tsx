import React, { FC, useCallback, useEffect, useState } from "react";
import { PageModel } from "../../models/page.model";
import { Box, Link, Typography } from "@mui/material";
import CustomTitle from "../title/title.component";
import StyledWrapper from "./pages.style";

type PagesProps = { pages: PageModel[] };

const Pages: FC<PagesProps> = ({ pages: initialPages }) => {
  const [pages, setPages] = useState<PageModel[]>(initialPages);

  function getCurrentDomain(url: string): string {
    const domainRegex = /^(?:https?:\/\/)?(?:dev\.|staging\.)?(.*?)\//;
    const matches = url.match(domainRegex);
    if (matches && matches.length >= 2) {
      return matches[1];
    }
    return url;
  }

  function areUrlsSame(url1: string, url2: string): boolean {
    if (url1 === url2) {
      return true;
    }
    return false;
  }

  const popularItemsMapper = useCallback(
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

  function removeDomainFromUrl(url: string): string {
    const pathRegex = /^(?:https?:\/\/)?[^\/]*(\/.*)/;
    const match = url.match(pathRegex);

    if (match && match.length > 1) {
      return match[1];
    }
    return url;
  }

  useEffect(() => {
    const hostName = "https://dev.galaxis.xyz/";
    // const hostName = window.location.hostname;
    const currentHostName = getCurrentDomain(hostName);
    const updatedPopular = popularItemsMapper(currentHostName);

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
