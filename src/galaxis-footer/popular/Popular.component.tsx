import React, { FC } from "react";
import StyledWrapper from "./Popular.style";

export type PopularProps = {
  label: string;
  url: string;
  openInNewTab: boolean;
};

export type PopularsProps = { popular: PopularProps[] };

const Popular: FC<PopularsProps> = ({ popular }) => {
  console.log(popular);
  return (
    <StyledWrapper>
      Popular
      {popular &&
        popular.map((item, index) => (
          <div key={index}>
            <p>{item.label}</p>
          </div>
        ))}
    </StyledWrapper>
  );
};

export default Popular;
