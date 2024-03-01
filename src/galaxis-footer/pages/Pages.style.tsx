import { Grid, styled } from "@mui/material";

const StyledWrapper = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  ":-khtml-any-link.pages--typography": {
    cursor: "pointer",
    opacity: 0.8,
  },
}));

export default StyledWrapper;
