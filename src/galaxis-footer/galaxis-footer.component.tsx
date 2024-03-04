import React, { FC, useEffect, useState } from "react";
import AboutUs from "./about/about-us.component";
import useCmsService from "../services/cms.service";
import { CmsModel } from "../models/cms.model";
import StyledWrapper from "./galaxis-footer.style";
import { CssBaseline, Grid, ThemeProvider } from "@mui/material";
import { ContactUs } from "./contact-us";
import { getActiveTheme } from "../utils/theme.util";
import { Pages } from "./pages";
import Popular from "./popular/popular.component";
import Copyright from "./copyright/copyright.component";

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

  return (
    <ThemeProvider theme={getActiveTheme("dark")}>
      <CssBaseline />
      <StyledWrapper container>
        {cmsFooterInfos && (
          <>
            <Grid item xxs={12} lg={3} className="galaxis-footer--item">
              <AboutUs text={cmsFooterInfos.aboutUs} />
            </Grid>
            <Grid item xxs={6} sm={4} lg={3} className="galaxis-footer--item">
              <Pages pages={cmsFooterInfos.pages} />
            </Grid>
            <Grid item xxs={6} sm={4} lg={3} className="galaxis-footer--item">
              <ContactUs
                socialMediaIcons={cmsFooterInfos.socialMediaIcons}
                address={cmsFooterInfos.address}
              />
            </Grid>
            <Grid item xxs={12} sm={4} lg={3} className="galaxis-footer--item">
              <Popular popular={cmsFooterInfos.popular} />
            </Grid>
            <Grid item xxs={12} lg={12} className="galaxis-footer--item">
              <Copyright />
            </Grid>
          </>
        )}
      </StyledWrapper>
    </ThemeProvider>
  );
};

export default GalaxisFooter;
