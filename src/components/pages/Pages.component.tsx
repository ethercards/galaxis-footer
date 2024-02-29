import React, { FC } from 'react';

export type PageProps = {
  label: string;
  url: string;
  openInNewTab: boolean;
};

export type PagesProps = { pages: PageProps[] };

const Pages: FC<PagesProps> = ({ pages }) => {
  console.log('pages', pages);
  return (
    <div>
      Pages
      {pages.map((page, index) => (
        <div key={index}>
          <p>{page.label}</p>
        </div>
      ))}
    </div>
  );
};

export default Pages;
