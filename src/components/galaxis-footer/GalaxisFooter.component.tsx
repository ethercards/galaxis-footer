import React, { FC, useEffect, useState } from 'react';
import AboutUs from './about/AboutUs.component';
import useCmsService from '../../services/cms.service';
import { CmsModel } from '../../models/cms.model';
import StyledWrapper from './GalaxisFooter.style';
import { Grid } from '@mui/material';

type GalaxisFooterProps = {
  url: string;
};

const GalaxisFooter: FC<GalaxisFooterProps> = ({ url }) => {
  const { getCmsInfos } = useCmsService();
  const [cmsFooterInfos, setCmsFooterInfos] = useState<CmsModel | null>(null);

  useEffect(() => {
    (async () => {
      const cmsInfos = await getCmsInfos(url);
      if (cmsInfos) setCmsFooterInfos(cmsInfos);
    })();
  }, []);

  console.log(cmsFooterInfos);

  return (
    <StyledWrapper container>
      {cmsFooterInfos && (
        <>
          <Grid item xxs={12} xs={12} sm={12} md={12} lg={3}>
            <AboutUs aboutUs={cmsFooterInfos.aboutUs}></AboutUs>
          </Grid>
        </>
      )}
    </StyledWrapper>
  );
};

export default GalaxisFooter;
