'use client';

import { Dialog, styled } from '@mui/material';

const StyledWrapper = styled(Dialog)(({ theme }) => ({
  animation: 'none',
  '> .MuiDialog-container': {
    '> .MuiPaper-root': {
      borderRadius: '20px',
      backgroundColor: theme.palette.darkGray.main,
      maxWidth: '533px',
      opacity: '1 !important',
      '> .MuiDialogTitle-root': {
        textAlign: 'center',
        padding: '20px',
        marginTop: '25px',
        marginBottom: '5px',
        [theme.breakpoints.down('sm')]: {
          marginTop: '15px',
          paddingBottom: '0px !important',
        },
        '> .popup-title': {
          fontSize: '38px',
          lineHeight: '38px',
          [theme.breakpoints.down('sm')]: {
            fontSize: '24px',
            lineHeight: '24px',
          },
          color: theme.palette.white.main,
        },
      },
      '> .close-icon': {
        width: '24px',
        height: '24px',
        position: 'absolute',
        top: '15px',
        right: '15px',
        color: theme.palette.white.main,
        '&:hover': { cursor: 'pointer' },
      },
      '> .popup-content': {
        marginBottom: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center',
      },
    },
  },
}));

export default StyledWrapper;
