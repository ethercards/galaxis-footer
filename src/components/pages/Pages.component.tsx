import React, { FC } from 'react';
import { PageModel } from '../../models/page.model';

export type PagesProps = { pages: PageModel[] };

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
