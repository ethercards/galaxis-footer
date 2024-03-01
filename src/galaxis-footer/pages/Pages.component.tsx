import React, { FC } from 'react';
import { PageModel } from '../../models/page.model';
import { Box, Grid, Typography } from '@mui/material';

export type PagesProps = { pages: PageModel[] };

const Pages: FC<PagesProps> = ({ pages }) => {
  console.log('pages', pages);
  return (
    // <Grid item xxs={6} xs={6} sm={4} md={4} lg={3}>
    <Grid item>
      {/* <CustomTitle className="title" title="Pages" /> */}
      <Box
        className="box"
        display="flex"
        flexDirection="column"
        data-testid="footer-pages-box"
      >
        {/* {findPageByLabels(getMenuItems, environments).map((item, index) => (
          <Typography
            key={index}
            sx={{
              cursor: 'pointer',
              opacity: 0.8,
            }}
            variant="main"
          >
            <a
              onClick={() =>
                item.route && item.route !== '#'
                  ? to(item.route)
                  : openComingSoon()
              }
            >
              {item.label}
            </a>
          </Typography>
        ))} */}
        Pages
        {pages.map((page, index) => (
          // <div key={index}>
          //   <p>{page.label}</p>
          // </div>
          <Typography
            key={index}
            sx={{
              cursor: 'pointer',
              opacity: 0.8,
            }}
            // variant="main"
          >
            <a
            // onClick={() =>
            //   page.url && page.url !== '#' ? to(page.url) : openComingSoon()
            // }
            >
              {page.label}
            </a>
          </Typography>
        ))}
      </Box>
    </Grid>
  );
};

export default Pages;
