import React, { FC } from 'react';
// import logo from '@/src/icons/galaxis-logo-white.png';
import { Grid, Typography } from '@mui/material';

const Copyright: FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Grid container alignItems="center" justifyContent="center" gap={2}>
      {/* <img src={logo} alt="Galaxis Logo" /> */}

      <Typography fontSize={12}>
        {/* <Typography fontSize={12} sx={{ color: '#ffffff' }}> */}
        All Rights Reserved 2021-{currentYear}
      </Typography>
    </Grid>
  );
};

export default Copyright;
