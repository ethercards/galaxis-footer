import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(({ theme }) => ({
  ".contact-us--custom-title": {
    color: theme.palette.white.main,
  },
  "> .contact-us--box": {
    color: theme.palette.gray.main,
    marginTop: "32px",
    ".contact-us--box": {
      display: "flex",
      gap: "16px",
      alignItems: "center",
      ".contact-us--img": {
        height: "26.02px",
      },
    },
  },
  ".contact-us--box.pages": {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    gap: 0,
    ".contact-us--link": {
      textDecoration: "none",
    },
  },
}));

export default StyledWrapper;
