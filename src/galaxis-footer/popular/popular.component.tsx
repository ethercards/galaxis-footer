import React, { FC, useCallback, useEffect, useState } from "react";
import StyledWrapper from "./popular.style";
import CustomTitle from "../title/title.component";
import { Box, Button, Link, Typography } from "@mui/material";
import { PopularModel } from "../../models/popular.model";

type PopularsProps = { popular: PopularModel[] };

const Popular: FC<PopularsProps> = ({ popular: initialPopular }) => {
  const [popular, setPopular] = useState<PopularModel[]>(initialPopular);

  function getCurrentDomain(url: string): string {
    // Regex to remove "dev." and "staging." from the URL
    const domainRegex = /^(?:https?:\/\/)?(?:dev\.|staging\.)?(.*?)\//;
    const matches = url.match(domainRegex);
    if (matches && matches.length >= 2) {
      return matches[1]; // Return the domain without "dev." and "staging."
    }
    return url; // Return url if no match found
  }

  function areUrlsSame(url1: string, url2: string): boolean {
    // If both URLs are identical, return true
    if (url1 === url2) {
      return true;
    }
    return false;
  }

  const popularItemsMapper = useCallback(
    (currentHostName: string): PopularModel[] => {
      return popular.map((item) => {
        const currentUrl = getCurrentDomain(item.url);
        const sameHost = areUrlsSame(currentHostName, currentUrl);

        if (!sameHost) {
          return { ...item, openInNewTab: true };
        } else {
          const pathParts = item.url.split("/");
          const path = "/" + pathParts[pathParts.length - 1];
          return { ...item, url: path, openInNewTab: false };
        }
      });
    },
    [popular]
  );

  useEffect(() => {
    const hostName = "https://dev.galaxis.xyz/";
    // const hostName = window.location.hostname;
    const currentHostName = getCurrentDomain(hostName);
    const updatedPopular = popularItemsMapper(currentHostName);

    setPopular(updatedPopular);
  }, []);

  return (
    <StyledWrapper>
      <CustomTitle className="popular--custom-title" title="Popular" />
      <Box className="popular--box" data-testid="popular-box">
        {popular &&
          popular.map((item, index) => (
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
