import {
  TypographyStyle,
  TypographyStyleOptions,
} from '@mui/material/styles/createTypography';

interface CustomTypography {
  [index: string]: TypographyStyleOptions | TypographyStyle | string | number;
}

declare module '@mui/material/styles/createTypography' {
  // eslint-disable-next-line no-unused-vars
  interface TypographyOptions extends CustomTypography {}
}

declare module '@mui/material/styles' {
  // eslint-disable-next-line no-unused-vars
  interface TypographyVariants {
    intro: React.CSSProperties;
    introInline: React.CSSProperties;
    default: React.CSSProperties;
    main: React.CSSProperties;
    mainMedium: React.CSSProperties;
    mainSemiBold: React.CSSProperties;
    buttonText: React.CSSProperties;
  }

  // eslint-disable-next-line no-unused-vars
  interface TypographyVariantsOptions {
    intro?: React.CSSProperties;
    introInline?: React.CSSProperties;
    default?: React.CSSProperties;
    main?: React.CSSProperties;
    mainMedium?: React.CSSProperties;
    mainSemiBold?: React.CSSProperties;
    buttonText?: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  // eslint-disable-next-line no-unused-vars
  interface TypographyPropsVariantOverrides {
    intro: true;
    introInline: true;
    default: true;
    main: true;
    mainMedium: true;
    mainSemiBold: true;
    buttonText: true;
  }
}

export const customVariant = {
  h1: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: '100px',
    letterSpacing: '0.15px',
  },
  h2: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: '36px',
    letterSpacing: '0.15px',
  },
  h3: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: '26px',
    letterSpacing: '0.15px',
  },
  h4: {},
  h5: {},
  h6: {},
  subtitle1: {
    fontFamily: 'PoppinsMedium',
    fontSize: '30px',
  },
  subtitle2: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: '26px',
  },
  body1: {
    fontFamily: 'BauRegular',
    fontSize: '16px',
  },
  body2: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: '16px',
  },
  caption: {
    fontFamily: 'Poppins',
    fontSize: '16px',
  },
  button: {
    fontFamily: 'Poppins',
    fontSize: '14px',
  },
  overline: {},
  buttonText: {
    fontFamily: 'Poppins',
    fontSize: '14px',
  },
  intro: {
    fontFamily: 'Intro',
    fontSize: '90px',
  },
  introInline: {
    fontFamily: 'IntroInline',
    fontSize: '90px',
  },
  default: {
    fontFamily: 'BauRegular',
    fontSize: '16px',
  },
  main: {
    fontFamily: 'Poppins',
    fontSize: '16px',
  },
  mainMedium: {
    fontFamily: 'PoppinsMedium',
    fontSize: '16px',
  },
  mainSemiBold: {
    fontFamily: 'PoppinsSemiBold',
    fontSize: '16px',
  },
};
