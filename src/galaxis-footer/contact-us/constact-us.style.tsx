import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(({ theme }) => ({
  ".contact-us--title": {
    color: theme.palette.white.main,
  },
  ".contact-us--details": {
    color: theme.palette.gray.main,
    marginTop: "32px",
    [theme.breakpoints.down("sm")]: {},
  },
  ".contact-us--icons": {
    display: "flex",
    gap: "16px",
    alignItems: "center",
    img: {
      height: "26.02px",
    },
  },
  ".contact-us--address": {
    opacity: "0.8",
    fontSize: "16px",
    fontFamily: "Poppins",
    ".contact-us--mailing-address": {
      marginTop: "48px",
      p: {
        margin: "0px",
      },
    },
    ".contact-us--link": {
      textDecoration: "none",
    },
  },
}));

export default StyledWrapper;
