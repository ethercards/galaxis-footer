import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme.context';
import { DialogContext } from '../contexts/dialog.context';
import { PopupContext } from '../contexts/popup.context';
import { EnvironmentContext } from '../contexts/environment.context';

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const usePopupContext = () => {
  return useContext(PopupContext);
};

export const useDialogContext = () => {
  return useContext(DialogContext);
};

export const useEnvironments = () => {
  return useContext(EnvironmentContext);
};
