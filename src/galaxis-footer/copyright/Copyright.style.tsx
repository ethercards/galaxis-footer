import { Grid, styled } from "@mui/material";

const StyledWrapper = styled(Grid)(() => ({
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
