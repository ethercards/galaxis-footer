import React, { ReactNode } from 'react';
import StyledWrapper from './popup.style';

const Popup = (children: ReactNode) => {
  return <StyledWrapper open>{children}</StyledWrapper>;
};

export default Popup;
