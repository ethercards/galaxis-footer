import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(({ theme }) => ({
  ".footer--logo": {
    width: "173px",
    cursor: "pointer",
  },
  ".footer--box": {
    ".footer--typography": {
      color: theme.palette.gray.main,
      marginTop: "20px",
    },
  },
}));

export default StyledWrapper;
