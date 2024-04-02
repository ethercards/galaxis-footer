import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  minWidth: "100%",
  ".pages--box": {
    display: "flex",
    flexDirection: "column",
    marginTop: "32px",
  },
  ".pages--typography": {
    cursor: "pointer",
  },
  ".pages--link": {
    textDecoration: "none",
    color: theme.palette.primary.main,
  },
}));

export default StyledWrapper;
