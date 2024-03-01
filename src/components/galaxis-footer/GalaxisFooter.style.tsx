import { Grid, styled } from '@mui/material';

const StyledWrapper = styled(Grid)(({ theme }) => ({
  backgroundColor: 'rgb(6, 6, 26)',
  [theme.breakpoints.up('lg')]: {
    paddingTop: '104px',
  },
  [theme.breakpoints.between('sm', 'lg')]: {
    paddingTop: '80px',
  },
  [theme.breakpoints.down('sm')]: {
    paddingTop: '64px',
  },
  '.MuiGrid-item': {
    maxWidth: '194px',
    [theme.breakpoints.between('sm', 'md')]: {
      maxWidth: '172px',
    },
    [theme.breakpoints.between('xxs', 'sm')]: {
      maxWidth: '153px',
    },
  },
}));

export default StyledWrapper;
