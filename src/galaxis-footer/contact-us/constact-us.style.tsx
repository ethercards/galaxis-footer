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
  ".contact-us--typography": {
    fontSize: "16px",
    fontFamily: "Poppins",
    ".contact-us--typography": {
      marginTop: "48px",
      p: {
        margin: "0px",
      },
    },
    ".contact-us--box": {
      marginTop: "15px",
      ".contact-us--link": {
        textDecoration: "none",
      },
    },
  },
}));

export default StyledWrapper;
