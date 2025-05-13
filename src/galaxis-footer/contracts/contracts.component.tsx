import React, { FC, useState } from "react";
import { Box, Typography } from "@mui/material";
import CustomTitle from "../title/title.component";
import StyledWrapper from "./contracts.style";
import {
  ArbitrumIcon,
  BaseIcon,
  CheckIcon,
  CloseIcon,
  CopyIcon,
  EthereumIcon,
  PolygonIcon,
} from "../../icons/icons.component";
import Snackbar from "@mui/material/Snackbar";

const Contracts: FC = () => {
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  const handleCopyIconClick = (address: string): void => {
    const explorerLinks: { [key: string]: string } = {
      "0x423071774c43c0aaf4210b439e7cda8c797e2f26": `https://etherscan.io/address/${address}`,
      "0x3c69d114664d48357d820dbdd121a8071eac99bf": `https://polygonscan.com/address/${address}`,
      "0xa5312c3e42a82d459162b2a3bd7ffc4f9099b911": `https://arbiscan.io/address/${address}`,
      "0x2d189eabb667aa1ecfc01963a6a3a5d83960f558": `https://basescan.org/address/${address}`,
      "0xB1bd5AFA0DE1953246C81276550a464f7d545929": `https://abscan.org/address/${address}`,
    };

    const link = explorerLinks[address] || "";
    navigator.clipboard.writeText(link);

    setSnackbarOpen(false);
    setTimeout(() => setSnackbarOpen(true), 0);
  };

  return (
    <StyledWrapper>
      <CustomTitle className="contracts--custom-title" title="Contract" />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={5000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Box className="snackbar-content">
          <Box className="snackbar-content-box">
            <CheckIcon className="check-icon" />
            <Typography variant="main" className="contracts--typography">
              Block explorer link copied!
            </Typography>
          </Box>
          <CloseIcon className="close-icon" onClick={() => setSnackbarOpen(false)} />
        </Box>
      </Snackbar>
      <Box className="contracts--box">
        <Box
          className="contracts--box"
          onClick={() => handleCopyIconClick("0x423071774c43c0aaf4210b439e7cda8c797e2f26")}
        >
          <EthereumIcon className="chain-icon" />
          <Typography
            variant="main"
            className="contracts--typography"
            title="0x423071774c43c0aaf4210b439e7cda8c797e2f26"
          >
            Ethereum
          </Typography>
          <Box title="Copy">
            <CopyIcon className="copy-icon" />
          </Box>
        </Box>
        <Box
          className="contracts--box"
          onClick={() => handleCopyIconClick("0x3c69d114664d48357d820dbdd121a8071eac99bf")}
        >
          <PolygonIcon className="chain-icon" />
          <Typography
            variant="main"
            className="contracts--typography"
            title="0x3c69d114664d48357d820dbdd121a8071eac99bf"
          >
            Polygon
          </Typography>
          <Box title="Copy">
            <CopyIcon className="copy-icon" />
          </Box>
        </Box>
        <Box
          className="contracts--box"
          onClick={() => handleCopyIconClick("0xa5312c3e42a82d459162b2a3bd7ffc4f9099b911")}
        >
          <ArbitrumIcon className="chain-icon" />
          <Typography
            variant="main"
            className="contracts--typography"
            title="0xa5312c3e42a82d459162b2a3bd7ffc4f9099b911"
          >
            Arbitrum One
          </Typography>
          <Box title="Copy">
            <CopyIcon className="copy-icon" />
          </Box>
        </Box>
        <Box
          className="contracts--box"
          onClick={() => handleCopyIconClick("0x2d189eabb667aa1ecfc01963a6a3a5d83960f558")}
        >
          <BaseIcon className="chain-icon" />
          <Typography
            variant="main"
            className="contracts--typography"
            title="0x2d189eabb667aa1ecfc01963a6a3a5d83960f558"
          >
            Base
          </Typography>
          <Box title="Copy">
            <CopyIcon className="copy-icon" />
          </Box>
        </Box>
        <Box
          className="contracts--box"
          onClick={() => handleCopyIconClick("0xB1bd5AFA0DE1953246C81276550a464f7d545929")}
        >
          <BaseIcon className="chain-icon" />
          <Typography
            variant="main"
            className="contracts--typography"
            title="0xB1bd5AFA0DE1953246C81276550a464f7d545929"
          >
            Abstract
          </Typography>
          <Box title="Copy">
            <CopyIcon className="copy-icon" />
          </Box>
        </Box>
      </Box>
    </StyledWrapper>
  );
};

export default Contracts;
