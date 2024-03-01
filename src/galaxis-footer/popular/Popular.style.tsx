import { Grid, styled } from "@mui/material";

const StyledWrapper = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  ".popular--typography": {
    fontSize: 14,
    lineHeight: "20px",
  },
}));

export default StyledWrapper;
