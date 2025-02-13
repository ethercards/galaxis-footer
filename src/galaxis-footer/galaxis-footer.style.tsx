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
    [theme.breakpoints.down("lg")]: {
      justifyContent: "flex-start",
    },
    ".galaxis-footer--grid-item": {
      maxWidth: "194px",
      [theme.breakpoints.down("lg")]: {
        marginRight: "64px",
        marginTop: "56px",
      },
      [theme.breakpoints.down("md")]: {
        marginRight: "16px",
      },
      [theme.breakpoints.between("sm", "md")]: {
        maxWidth: "172px",
      },
      [theme.breakpoints.between("xxs", "sm")]: {
        maxWidth: "153px",
      },
    },
    ".galaxis-footer--grid-item:nth-of-type(1)": {
      marginTop: 0,
      marginRight: 0,
      maxWidth: "194px",
      [theme.breakpoints.down("lg")]: {
        marginRight: "calc(100% - 411px)",
        maxWidth: "100%",
      },
      [theme.breakpoints.down("xs")]: {
        marginRight: "28px",
      },
    },
    ".galaxis-footer--grid-item:nth-of-type(4)": {
      marginRight: 0,
      [theme.breakpoints.down("sm")]: {
        marginRight: "16px",
      },
      ".galaxis-footer--box": {
        display: "flex",
        flexDirection: "column",
        gap: theme.spacing(3),
      },
    },
    ".galaxis-footer--grid-item:nth-of-type(5)": {
      minWidth: "100%",
      marginTop: 0,
    },
  },
}));

export default StyledWrapper;
