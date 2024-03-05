import { useCallback } from 'react';
import { api } from '../utils/api.util';
import { enqueueSnackbar } from 'notistack';
import { getApiConstanst } from '../constants/api.constant';
import { useEnvironments } from '../hooks/context.hook';

export type EmailFormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
  token: string;
};

const useMailService = () => {
  const { environments } = useEnvironments();
  const { CMS_EMAIL_API } = getApiConstanst(environments);

  const sendEmail = useCallback(
    async (formData: EmailFormData): Promise<'success' | 'error'> => {
      try {
        await api.post(CMS_EMAIL_API, formData);
        enqueueSnackbar('E-mail sent successfully!', { variant: 'success' });
        return 'success';
      } catch (error) {
        enqueueSnackbar('Something went wrong, your email was not sent!', {
          variant: 'error',
        });
        console.error('Error:', error);
        return 'error';
      }
    },
    [CMS_EMAIL_API],
  );

  return { sendEmail };
};

export default useMailService;
