import React, { FC } from 'react';

export type PopularProps = {
  label: string;
  url: string;
  openInNewTab: boolean;
};

export type PopularsProps = { popular?: PopularProps[] };

const Popular: FC<PopularsProps> = ({ popular }) => {
  console.log(popular);
  return <div>Popular</div>;
};

export default Popular;
