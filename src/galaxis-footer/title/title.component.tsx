import React, { FC } from "react";
import { SxProps, Theme, Typography } from "@mui/material";
import { Variant } from "@mui/material/styles/createTypography";

type Props = {
  title: string;
  className?: string;
  color?: string;
  fontFamily?: string;
  fontSize?: number;
  sx?: SxProps<Theme>;
};

const CustomTitle: FC<Props> = ({
  title,
  className = "title",
  color = "white.main",
  fontFamily = "mainSemiBold",
  fontSize = 18,
  sx = {},
}) => {
  return (
    <Typography
      className={className}
      variant={fontFamily as Variant}
      sx={{ color: color, fontSize: fontSize, ...sx }}
    >
      {title}
      {title}
    </Typography>
  );
};

export default CustomTitle;
