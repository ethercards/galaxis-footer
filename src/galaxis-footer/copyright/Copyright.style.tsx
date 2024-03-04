import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(() => ({
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "16px",
  ".copyright--typography": {
    fontSize: "12px",
    color: "#ffffff",
  },
  ".copyright--img": {
    height: "12px",
  },
}));

export default StyledWrapper;
