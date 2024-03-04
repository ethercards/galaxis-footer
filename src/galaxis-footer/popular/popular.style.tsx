import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(() => ({
  minWidth: "100%",
  ".popular--box": {
    maxWidth: "100%",
    marginTop: "32px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "16px",
  },
  ".popular--button": {
    border: "1px solid",
    ".popular--typography": {
      fontSize: 14,
      lineHeight: "20px",
    },
  },
}));

export default StyledWrapper;
