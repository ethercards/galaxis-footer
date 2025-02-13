import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(({ theme }) => ({
  ".contracts--custom-title": {
    color: theme.palette.white.main,
  },
  "> .contracts--box": {
    marginTop: theme.spacing(4),
    display: "flex",
    flexDirection: "column",
    gap: theme.spacing(2),
    ".contracts--typography": {
      color: theme.palette.white.main,
    },
    ".contracts--box": {
      display: "flex",
      gap: theme.spacing(1),
      alignItems: "center",
      ".chain-icon": {
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
