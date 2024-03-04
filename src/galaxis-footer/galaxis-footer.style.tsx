import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.darkPurple.main,
  width: "100%",
  ".galaxis-footer--container": {
    display: "flex",
    justifyContent: "center",
    [theme.breakpoints.down("xxl")]: {
      maxWidth: "1320px",
    },
    [theme.breakpoints.down("xl")]: {
      justifyContent: "flex-start",
    },
    [theme.breakpoints.up("lg")]: {
      paddingTop: "104px",
      maxWidth: "1200px",
    },
    [theme.breakpoints.between("sm", "lg")]: {
      paddingTop: "80px",
    },
    [theme.breakpoints.down("sm")]: {
      paddingTop: "64px",
    },
  },
  ".galaxis-footer--grid-container": {
    width: "100%",
    display: "flex",
    justifyContent: "space-between",
    ".galaxis-footer--grid-item": {
      maxWidth: "194px",
      [theme.breakpoints.between("sm", "md")]: {
        maxWidth: "172px",
      },
      [theme.breakpoints.between("xxs", "sm")]: {
        maxWidth: "153px",
      },
    },
    ".galaxis-footer--grid-item:nth-of-type(1)": {
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
    ".galaxis-footer--grid-item:nth-of-type(5)": {
      maxWidth: "100%",
      minWidth: "100%",
    },
  },
}));

export default StyledWrapper;
