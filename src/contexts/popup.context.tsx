/* eslint-disable no-unused-vars */
import React, {
  FC,
  ReactNode,
  createContext,
  useCallback,
  useState,
} from 'react';
import { Close } from '@mui/icons-material';

import {
  DialogContent,
  DialogTitle,
  SxProps,
  Theme,
  Typography,
} from '@mui/material';
// import PopupDialog from '../components/popup/popup.style';
import PopupDialog from '../galaxis-footer/contact-us-form/popup/popup.component';
interface PopupContextType {
  setOptions: React.Dispatch<React.SetStateAction<Options>>;
  updateOptions: (newOptions: Options) => void;
}

export const PopupContext = createContext({} as PopupContextType);

type Props = {
  children: ReactNode;
};

export type Options = {
  title: string;
  content: React.ReactNode;
  paperSx?: SxProps<Theme>;
};

export const PopupProvider: FC<Props> = ({ children }) => {
  const [options, setOptions] = useState<Options>({} as Options);

  const updateOptions = useCallback((newOptions: Options) => {
    setOptions((prevState) => ({ ...prevState, ...newOptions }));
  }, []);

  const popupValue: PopupContextType = {
    setOptions,
    updateOptions,
  };

  return (
    <PopupContext.Provider value={popupValue}>
      {children}
      <PopupDialog
        open={!!options.title}
        onClose={() => setOptions({} as Options)}
        PaperProps={{ sx: options.paperSx }}
      >
        <DialogTitle>
          <Typography className="popup-title" variant="main">
            {options.title}
          </Typography>
        </DialogTitle>
        <Close
          className="close-icon"
          onClick={() => setOptions({} as Options)}
        />
        <DialogContent className="popup-content">
          {options.content}
        </DialogContent>
      </PopupDialog>
    </PopupContext.Provider>
  );
};
