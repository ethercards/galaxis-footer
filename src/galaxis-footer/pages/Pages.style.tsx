import { Grid, styled } from "@mui/material";

const StyledWrapper = styled(Grid)(() => ({
  display: "flex",
  flexDirection: "column",
  ".pages--box": {
    marginTop: "32px",
  },
  ".pages--typography": {
    cursor: "pointer",
    opacity: 0.8,
  },
}));

export default StyledWrapper;
