import React, { FC, useEffect, useState } from 'react';
import { Pages } from '../pages';
import useCmsService from '../../services/cms.service';
import { Popular } from '../popular';
import { Copyright } from '../copyright';
import StyledWrapper from './GalaxisFooter.stye';
import { Grid } from '@mui/material';
import { CmsModel } from '../../models/cms.model';

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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const cmsInfos = await getCmsInfos(url);
        if (cmsInfos) setCmsFooterInfos(cmsInfos);
      } catch (error) {
        console.error('Error fetching CMS infos:', error);
      }
    };
    fetchData();
  }, [getCmsInfos, url]);

  return (
    <StyledWrapper container>
      {cmsFooterInfos && (
        <>
          <Grid item>
            <Pages pages={cmsFooterInfos.pages} />
          </Grid>
          <Grid item>
            <Popular popular={cmsFooterInfos.popular} />
          </Grid>
          <Grid item>
            <Copyright />
          </Grid>
        </>
      )}
    </StyledWrapper>
  );
};

export default GalaxisFooter;
