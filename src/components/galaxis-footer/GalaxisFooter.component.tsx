import React, { FC, useEffect, useState } from 'react';
import { Pages } from '../pages';
import useCmsService from '../../services/cms.service';
import { PageProps } from '../pages/Pages.component';
import { Popular } from '../popular';

type GalaxisFooterProps = {
  url: string;
};

const GalaxisFooter: FC<GalaxisFooterProps> = ({ url }) => {
  const { getCmsInfos } = useCmsService();
  const [pages, setPages] = useState<PageProps[] | undefined>();
  const [popular, setPopular] = useState<PageProps[] | undefined>();

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
    </div>
  );
};

export default GalaxisFooter;
