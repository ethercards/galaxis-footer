import React, { FC, useCallback, useEffect, useState } from "react";
import StyledWrapper from "./popular.style";
import CustomTitle from "../title/title.component";
import { Box, Button, Link, Typography } from "@mui/material";
import { PopularModel } from "../../models/popular.model";
import { areUrlsSame, getCurrentDomain, removeDomainFromUrl } from "../../utils/links.util";

type PopularsProps = { hostName: string; popular: PopularModel[] };

const Popular: FC<PopularsProps> = ({ hostName, popular }) => {
  const [popularItems, setPopularItems] = useState<PopularModel[]>(popular);

  const popularItemsMapper = useCallback(
    (currentHostName: string): PopularModel[] => {
      return popular.map((item) => {
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
    [popular]
  );

  useEffect(() => {
    const currentHostName = getCurrentDomain(hostName);
    const updatedPopular = popularItemsMapper(currentHostName);

    setPopularItems(updatedPopular);
  }, []);

  return (
    <StyledWrapper>
      <CustomTitle className="popular--custom-title" title="Popular" />
      <Box className="popular--box" data-testid="popular-box">
        {popular &&
          popularItems.map((item, index) => (
            <Button className="popular--button" key={index} variant="outlined" disableRipple>
              <Typography className="popular--typography" variant="main">
                <Link
                  className="popular--link"
                  href={item.url}
                  target={item.openInNewTab ? "_blank" : "_self"}
                >
                  {item.label.toLowerCase()}
                </Link>
              </Typography>
            </Button>
          ))}
      </Box>
    </StyledWrapper>
  );
};

export default Popular;
