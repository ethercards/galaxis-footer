import React, { FC, useEffect, useState } from "react";
import { Box, Link, Typography } from "@mui/material";
import CustomTitle from "../title/title.component";
import StyledWrapper from "./pages.style";
import { getCurrentDomain, useItemsMapper } from "../../utils/links.util";
import { UrlModel } from "../../models/url.model";

type PagesProps = { hostName: string; pages: UrlModel[] };

const Pages: FC<PagesProps> = ({ hostName, pages }) => {
  const itemsMapper = useItemsMapper(pages);

  const [pagesItems, setPagesItems] = useState<UrlModel[]>(pages);

  useEffect(() => {
    const currentHostName = getCurrentDomain(hostName);
    const updatedPopular = itemsMapper(currentHostName, pages);

    setPagesItems(updatedPopular);
  }, []);

  return (
    <StyledWrapper>
      <CustomTitle className="title" title="Pages" />
      <Box className="pages--box" data-testid="pages-box">
        {pagesItems.map((page, index) => (
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
