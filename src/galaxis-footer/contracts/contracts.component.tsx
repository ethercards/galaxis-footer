import React, { FC } from "react";
import { Box, Typography } from "@mui/material";
import CustomTitle from "../title/title.component";

import StyledWrapper from "./contracts.style";
import {
  ArbitrumIcon,
  BaseIcon,
  CopyIcon,
  EthereumIcon,
  PolygonIcon,
} from "../../icons/icons.component";

const Contracts: FC = () => {
  return (
    <StyledWrapper>
      <CustomTitle className="contracts--custom-title" title="Contract" />
      <Box className="contracts--box">
        <Box className="contracts--box">
          <EthereumIcon className="chain-icon" />
          <Typography variant="main" className="contracts--typography">
            Ethereum
          </Typography>
          <CopyIcon
            className="copy-icon"
            onClick={() =>
              navigator.clipboard.writeText(
                "https://etherscan.io/address/0x423071774c43c0aaf4210b439e7cda8c797e2f26"
              )
            }
          />
        </Box>
        <Box className="contracts--box">
          <PolygonIcon className="chain-icon" />
          <Typography variant="main" className="contracts--typography">
            Polygon
          </Typography>
          <CopyIcon
            className="copy-icon"
            onClick={() =>
              navigator.clipboard.writeText(
                "https://polygonscan.com/address/0x3c69d114664d48357d820dbdd121a8071eac99bf"
              )
            }
          />
        </Box>
        <Box className="contracts--box">
          <ArbitrumIcon className="chain-icon" />
          <Typography variant="main" className="contracts--typography">
            Arbitrum One
          </Typography>
          <CopyIcon
            className="copy-icon"
            onClick={() =>
              navigator.clipboard.writeText(
                "https://arbiscan.io/address/0xa5312c3e42a82d459162b2a3bd7ffc4f9099b911"
              )
            }
          />
        </Box>
        <Box className="contracts--box">
          <BaseIcon className="chain-icon" />
          <Typography variant="main" className="contracts--typography">
            Base
          </Typography>
          <CopyIcon
            className="copy-icon"
            onClick={() =>
              navigator.clipboard.writeText(
                "https://basescan.org/address/0x2d189eabb667aa1ecfc01963a6a3a5d83960f558"
              )
            }
          />
        </Box>
      </Box>
    </StyledWrapper>
  );
};

export default Contracts;
