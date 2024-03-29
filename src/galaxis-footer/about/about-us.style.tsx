import { Box, styled } from "@mui/material";

const StyledWrapper = styled(Box)(({ theme }) => ({
  ".about-us--galaxis-logo-icon": {
    width: "173px",
    cursor: "pointer",
  },
  ".about-us--box": {
    ".about-us--typography": {
      color: theme.palette.gray.main,
      opacity: "0.8",
      marginTop: "20px",
    },
  },
}));

export default StyledWrapper;
