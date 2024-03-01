import React, { FC, useEffect, useState } from "react";
import AboutUs from "./about/about-us.component";
import useCmsService from "../../services/cms.service";
import { CmsModel } from "../../models/cms.model";
import StyledWrapper from "./GalaxisFooter.style";
import { Grid } from "@mui/material";
import { CustomThemeProvider } from "../../contexts/theme.context";
import { ContactUs } from "./contact-us";

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
    <CustomThemeProvider>
      <StyledWrapper container>
        {cmsFooterInfos && (
          <>
            <Grid item xxs={12} lg={3} className="galaxis-footer--item">
              <AboutUs text={cmsFooterInfos.aboutUs} />
            </Grid>
            <Grid item xxs={6} sm={4} lg={3} className="galaxis-footer--item">
              <ContactUs
                socialMediaIcons={cmsFooterInfos.socialMediaIcons}
                address={cmsFooterInfos.address}
              />
            </Grid>
          </>
        )}
      </StyledWrapper>
    </CustomThemeProvider>
  );
};

export default GalaxisFooter;
