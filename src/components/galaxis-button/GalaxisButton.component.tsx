import { Button, ButtonProps } from '@mui/material';
import React, { FC, ReactNode } from 'react';

type Props = {
  props?: ButtonProps;
  children: ReactNode;
};

const GalaxisButton: FC<Props> = ({ props, children }) => (
  <Button variant="contained" {...props}>
    {children}
  </Button>
);

export default GalaxisButton;
