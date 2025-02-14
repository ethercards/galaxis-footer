import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(({ theme }) => ({
  ".contracts--custom-title": {
    color: theme.palette.white.main,
  },
  ".snackbar-content": {
    display: "flex",
    alignItems: "center",
    gap: theme.spacing(3),
    backgroundColor: theme.palette.green.main,
    borderRadius: theme.spacing(2),
    color: theme.palette.white.main,
    fontFamily: theme.typography.main.fontFamily,
    padding: "12px 18px",
    ".close-icon": {
      cursor: "pointer",
      color: theme.palette.white.main,
      width: "8px",
      height: "8px",
      opacity: "0.7",
    },
    ".check-icon": {},
    ".snackbar-content-box": {
      display: "flex",
      alignItems: "center",
      gap: theme.spacing(1),
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
