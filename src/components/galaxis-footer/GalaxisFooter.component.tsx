import React, { FC, useEffect, useState } from 'react';
import { Pages } from '../pages';
import useCmsService from '../../services/cms.service';
import { Popular } from '../popular';
import { Copyright } from '../copyright';
import { PageModel } from '../../models/page.model';
import { PopularModel } from '../../models/popular.model';

type GalaxisFooterProps = {
  url: string;
};

const GalaxisFooter: FC<GalaxisFooterProps> = ({ url }) => {
  const { getCmsInfos } = useCmsService();
  const [pages, setPages] = useState<PageModel[] | undefined>();
  const [popular, setPopular] = useState<PopularModel[] | undefined>();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const infos = await getCmsInfos(url);
        console.log('infos', infos);
        setPages(infos.pages);
        setPopular(infos.popular);
      } catch (error) {
        console.error('Error fetching CMS infos:', error);
      }
    };
    fetchData();
  }, [getCmsInfos, url]);

  return (
    <div>
      This is the footer component.
      {pages && <Pages pages={pages} />}
      {popular && <Popular popular={popular} />}
      <Copyright />
    </div>
  );
};

export default GalaxisFooter;
