import React, { FC, useEffect, useState } from "react";
import StyledWrapper from "./popular.style";
import CustomTitle from "../title/title.component";
import { Box, Button, Link, Typography } from "@mui/material";
import { PopularModel } from "../../models/popular.model";

type PopularsProps = { popular: PopularModel[] };

const Popular: FC<PopularsProps> = ({ popular: initialPopular }) => {
  const [popular, setPopular] = useState<PopularModel[]>(initialPopular);

  useEffect(() => {
    const path = window.location.pathname;
    if (path.includes("engines")) {
      const updatedPopular = initialPopular.map((item) => ({
        ...item,
        openInNewTab: true,
      }));
      setPopular(updatedPopular);
    }
  }, [initialPopular]);

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
