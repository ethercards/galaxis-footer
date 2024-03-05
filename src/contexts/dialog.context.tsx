import React, {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';
import { Dialog, DialogContent } from '@mui/material';
import { Close } from '@mui/icons-material';

interface Option {
  isOpen: boolean;
  content: ReactNode;
}

interface DialogContextType {
  options: Option;
  setOptions: Dispatch<SetStateAction<Option>>;
}

export const DialogContext = createContext({} as DialogContextType);

type Props = {
  children: ReactNode;
};

export const DialogProvider: FC<Props> = ({ children }) => {
  const [options, setOptions] = useState<Option>({} as Option);

  const dialogValue: DialogContextType = {
    options,
    setOptions,
  };

  return (
    <DialogContext.Provider value={dialogValue}>
      {children}
      <Dialog
        open={dialogValue.options.isOpen ?? false}
        PaperProps={{
          sx: {
            backgroundColor: 'white.main',
            color: 'primary.main',
            borderRadius: '20px',
            p: 2,
          },
        }}
        fullScreen
      >
        <DialogContent>
          <Close
            sx={{
              position: 'absolute',
              top: '10px',
              right: '10px',
              '&:hover': { cursor: 'pointer' },
            }}
            onClick={() =>
              setOptions({ ...dialogValue.options, isOpen: false })
            }
          />
          {dialogValue.options.content}
        </DialogContent>
      </Dialog>
    </DialogContext.Provider>
  );
};
