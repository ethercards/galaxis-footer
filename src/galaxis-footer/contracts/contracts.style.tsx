import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(({ theme }) => ({
  ".contracts--custom-title": {
    color: theme.palette.white.main,
  },
  ".snackbar-content": {
    backgroundColor: theme.palette.darkGray.main,
    color: theme.palette.white.main,
    fontFamily: theme.typography.main.fontFamily,
    ".close-icon": {
      cursor: "pointer",
      color: theme.palette.white.main,
      paddingRight: theme.spacing(1),
      width: "12px",
      height: "12px",
    },
  },
  "> .contracts--box": {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    ".contracts--typography": {
      color: theme.palette.white.main,
      cursor: "pointer",
    },
    ".contracts--box": {
      display: "flex",
      gap: theme.spacing(1),
      alignItems: "center",
      ".chain-icon": {
        cursor: "pointer",
        width: "16px",
        height: "16px",
      },
      ".copy-icon": {
        cursor: "pointer",
        width: "12px",
        height: "12px",
      },
    },
  },
}));

export default StyledWrapper;
