import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "100%",
  ".pages--box": {
    maxWidth: "100%",
    display: "flex",
    flexDirection: "column",
    marginTop: "32px",
  },
  ".pages--typography": {
    cursor: "pointer",
    opacity: 0.8,
  },
}));

export default StyledWrapper;
