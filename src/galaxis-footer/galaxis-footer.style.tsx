import { Grid, styled } from "@mui/material";

const StyledWrapper = styled(Grid)(({ theme }) => ({
  backgroundColor: theme.palette.darkPurple.main,
  [theme.breakpoints.up("lg")]: {
    paddingTop: "104px",
  },
  [theme.breakpoints.between("sm", "lg")]: {
    paddingTop: "80px",
  },
  [theme.breakpoints.down("sm")]: {
    paddingTop: "64px",
  },
  [theme.breakpoints.up("xl")]: {
    gap: theme.spacing(15),
  },
  [theme.breakpoints.between("lg", "xl")]: {
    gap: theme.spacing(7),
  },
  [theme.breakpoints.between("md", "lg")]: {
    gap: theme.spacing(8),
  },
  [theme.breakpoints.between("sm", "md")]: {
    gap: theme.spacing(2),
  },
  [theme.breakpoints.down("sm")]: {
    gap: theme.spacing(2),
  },
  ".galaxis-footer--item": {
    maxWidth: "194px",
    [theme.breakpoints.between("sm", "md")]: {
      maxWidth: "172px",
    },
    [theme.breakpoints.between("xxs", "sm")]: {
      maxWidth: "153px",
    },
  },
  ".galaxis-footer--item:nth-of-type(1)": {
    [theme.breakpoints.up("xxs")]: {
      maxWidth: "100%",
    },
    [theme.breakpoints.up("lg")]: {
      maxWidth: "194px",
    },
    [theme.breakpoints.between("sm", "md")]: {
      marginBottom: "20px",
    },
  },
}));

export default StyledWrapper;