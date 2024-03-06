import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(() => ({
  minWidth: "100%",
  ".popular--box": {
    marginTop: "32px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "12px",
  },
  ".popular--button": {
    border: "1px solid",
    backgroundColor: "transparent",
    padding: "4px 7px",
    borderRadius: "4px",
    minWidth: 0,
    ".popular--typography": {
      textTransform: "lowercase",
      fontSize: 14,
      lineHeight: "20px",
    },
  },
}));

export default StyledWrapper;
