import { Grid, styled } from "@mui/material";

const StyledWrapper = styled(Grid)(() => ({
  ".popular--box": {
    width: "max-content",
    marginTop: "32px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: "16px",
  },
  ".popular--typography": {
    fontSize: 14,
    lineHeight: "20px",
  },
}));

export default StyledWrapper;
