'use client';

import { Box, styled } from '@mui/material';

const StyledWrapper = styled(Box)(({ theme }) => ({
  '.contact-us--form': {
    height: '100%',
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    gap: theme.spacing(2),
    paddingBottom: '30px',
    [theme.breakpoints.up('sm')]: {
      paddingLeft: '50px',
      paddingRight: '50px',
      paddingBottom: '30px',
    },
    [theme.breakpoints.down('sm')]: {
      padding: 0,
    },
    '.MuiFormLabel-asterisk': {
      display: 'none',
    },
    '.MuiInputLabel-shrink': {
      paddingLeft: '5px',
      '> .MuiTypography-main': {
        fontSize: '16px !important',
      },
    },
    '.MuiFormLabel-root': {
      lineHeight: 1,
    },
    '.contact-us--textfield': {
      borderRadius: '6px',
      '> .MuiInputBase-root': {
        height: '51px',
      },
      '.contact-us--textfield-typography': {
        fontSize: '12px',
        padding: '5px',
        paddingBottom: '10px',
        '&:focus': {
          fontSize: '30px',
        },
      },
    },
    '> .contact-us--text-area': {
      '> .MuiInputBase-root': {
        height: '180px',
        [theme.breakpoints.down('sm')]: {
          height: '120px',
        },
        '> .MuiInputBase-input': {
          height: '100% !important',
        },
      },
    },
    '> .contact-us--typography-protected': {
      fontSize: '12px',
      marginTop: '10px',
      '.contact-us--link': {
        textDecoration: 'none',
      },
    },
    '> .contact-us--button': {
      width: '130px',
      borderRadius: '6px',
      border: '2px solid',
      borderColor: theme.palette.primary.main,
      marginTop: '10px',
      '&:hover': {
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.white.main,
      },
      '> .contact-us--button-typography': {
        fontSize: '14px',
      },
    },
    '> .contact-us--button-disabled': {
      borderColor: theme.palette.grey[600],
    },
  },
}));

export default StyledWrapper;
