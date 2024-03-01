import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(({ theme }) => ({
  ".contact-us--title": {
    color: theme.palette.white.main,
  },
  ".contact-us--details": {
    color: theme.palette.gray.main,
    marginTop: "32px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "40px",
    },
  },
  ".contact-us--icons": {
    display: "flex",
    gap: "16px",
    marginBottom: "48px",
    alignItems: "center",
    img: {
      height: "26.02px",
    },
  },
  ".contact-us--address": {
    opacity: "0.8",
    ".contact-us--mailing-address": {
      p: {
        margin: "0px",
      },
    },
  },
}));

export default StyledWrapper;
