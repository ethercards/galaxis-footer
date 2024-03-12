import React, { FC, useEffect, useState } from "react";
import StyledWrapper from "./popular.style";
import CustomTitle from "../title/title.component";
import { Box, Button, Link, Typography } from "@mui/material";
import { getCurrentDomain, useItemsMapper } from "../../utils/links.util";
import { UrlModel } from "../../models/url.model";

type PopularsProps = { hostName: string; popular: UrlModel[] };

const Popular: FC<PopularsProps> = ({ hostName, popular }) => {
  const itemsMapper = useItemsMapper(popular);
  const [popularItems, setPopularItems] = useState<UrlModel[]>(popular);

  useEffect(() => {
    const currentHostName = getCurrentDomain(hostName);
    const updatedPopular = itemsMapper(currentHostName, popular);

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
                  {item.label ? item.label.toLowerCase() : null}
                </Link>
              </Typography>
            </Button>
          ))}
      </Box>
    </StyledWrapper>
  );
};

export default Popular;
