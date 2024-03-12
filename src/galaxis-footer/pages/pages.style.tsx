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
    opacity: 0.8,
  },
  ".pages--link": {
    textDecoration: "none",
    color: theme.palette.gray.main,
  },
}));

export default StyledWrapper;
