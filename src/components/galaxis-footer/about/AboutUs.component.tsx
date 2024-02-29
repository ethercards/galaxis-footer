import React, { FC } from 'react';
import { GalaxisLogoIcon } from '../../../icons/icons.component';
import { Box, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import StyledWrapper from '../GalaxisFooter.style';

type Props = {
  aboutUs: string;
};

const AboutUs: FC<Props> = ({ aboutUs }) => {
  const navigate = useNavigate();
  return (
    <StyledWrapper>
      <GalaxisLogoIcon
        width={173}
        style={{ cursor: 'pointer' }}
        onClick={() => navigate('/')}
      />
      <Box className="footer--box">
        <Typography
          className="footer--typography"
          sx={{ color: 'rgb(181, 181, 190)', marginTop: '20px' }}
        >
          {aboutUs}
        </Typography>
      </Box>
    </StyledWrapper>
  );
};

export default AboutUs;
