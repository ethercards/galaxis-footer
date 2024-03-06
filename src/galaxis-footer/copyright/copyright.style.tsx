import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  paddingTop: "104px",
  paddingBottom: "64px",
  [theme.breakpoints.down("lg")]: {
    paddingTop: "80px",
    paddingBottom: "40px",
  },
  ".copyright--typography": {
    fontSize: "12px",
    color: "#ffffff",
  },
  ".copyright--img": {
    width: "73px",
  },
}));

export default StyledWrapper;
