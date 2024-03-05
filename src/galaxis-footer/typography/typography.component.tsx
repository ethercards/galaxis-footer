import { SxProps, Theme, Typography } from '@mui/material';
import { OverridableStringUnion } from '@mui/types';
import { TypographyPropsVariantOverrides } from '@mui/material/Typography/Typography';
import { ElementType, FC } from 'react';
import { Variant } from '@mui/material/styles/createTypography';
import React from 'react';

export type Props = {
  variant?: OverridableStringUnion<Variant, TypographyPropsVariantOverrides>;
  fontSize?: number;
  color?: string;
  sx?: SxProps<Theme>;
  title?: string;
  'data-testid'?: string;
  component?: ElementType<any>;
  innerHTML?: { __html: string | TrustedHTML };
  children?: React.ReactNode;
  className?: string;
};

const CustomTypography: FC<Props> = ({
  variant = 'default',
  color,
  sx,
  title,
  fontSize,
  'data-testid': dataTestId,
  component,
  innerHTML,
  children,
  className,
}) => {
  return (
    <Typography
      className={className}
      variant={variant}
      data-testid={dataTestId}
      {...(component && { component: component })}
      {...(innerHTML && { dangerouslySetInnerHTML: innerHTML })}
      {...(title && { title: title })}
      sx={{
        fontSize,
        color,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
};

export default CustomTypography;
