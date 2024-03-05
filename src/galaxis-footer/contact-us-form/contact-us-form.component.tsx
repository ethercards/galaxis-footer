'use client';
import React, { FC, useEffect, useState } from 'react';
import {
  TextField,
  FormControl,
  Select,
  MenuItem,
  Link,
  Button,
  CircularProgress,
} from '@mui/material';
import Typography from '../typography/typography.component';
import StyledWrapper from './contact-us-form.style';
import useMailService from '../../services/mail.service';
import { usePopupContext } from '../../hooks/context.hook';
import { Options } from '../../contexts/popup.context';
import { emailValidation, isValid } from '../../utils/validation.util';

const defaultSubjects = [
  'General Enquiry',
  'Launch Community',
  'Partnership',
  'Engines',
];

const initFormContact = {
  name: '',
  email: '',
  subject: defaultSubjects[0],
  message: '',
};

export interface ContactUsRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Props = {
  subjects?: string[];
};

const ContactUs: FC<Props> = ({ subjects }) => {
  const { sendEmail } = useMailService();
  const { setOptions } = usePopupContext();
  const [loading, setLoading] = useState<boolean>(false);
  const [sendable, setSendable] = useState<boolean>(false);

  const [contactForm, setContactForm] =
    useState<ContactUsRequest>(initFormContact);

  useEffect(() => {
    const valid = isValid(
      initFormContact,
      contactForm,
      ['name', 'email', 'subject', 'message'],
      () => emailValidation(contactForm.email),
    );

    setSendable(valid);
  }, [contactForm]);

  const handleContactFormChange = (
    property: keyof ContactUsRequest,
    value: string,
  ) => {
    setContactForm((prevState) => ({
      ...prevState,
      [property]: value,
    }));
  };

  const getCaptchaToken = (): Promise<string> => {
    return new Promise((resolve, reject) => {
      try {
        window.grecaptcha.ready(() => {
          window.grecaptcha
            .execute('6LfAjcYeAAAAAJTxnTgx_JVndCSmQgU1gqzEIwoL', {
              action: 'submit',
            })
            .then((token) => {
              resolve(token);
            });
        });
      } catch (error) {
        reject(error);
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    setLoading(true);
    e.preventDefault();

    const formData = { ...contactForm, token: await getCaptchaToken() };

    const result = await sendEmail(formData);
    if (result === 'success') {
      setContactForm(initFormContact);
      setOptions({} as Options);
    }
    setLoading(false);
  };

  return (
    <StyledWrapper>
      <form onSubmit={handleSubmit} className="contact-us--form">
        <TextField
          className="contact-us--textfield"
          fullWidth
          label={
            <Typography
              className="contact-us--textfield-typography"
              variant="main"
            >
              NAME
            </Typography>
          }
          name="name"
          variant="outlined"
          onChange={(e) => handleContactFormChange('name', e.target.value)}
          required
          inputProps={{ maxLength: 37 }}
        />
        <TextField
          className="contact-us--textfield"
          fullWidth
          label={
            <Typography
              className="contact-us--textfield-typography"
              variant="main"
            >
              EMAIL
            </Typography>
          }
          name="email"
          variant="outlined"
          onChange={(e) => handleContactFormChange('email', e.target.value)}
          required
          type="email"
          inputProps={{ maxLength: 37 }}
        />
        <FormControl fullWidth variant="outlined">
          <Select
            className="contact-us--textfield"
            onChange={(e) => handleContactFormChange('subject', e.target.value)}
            required
            displayEmpty
            inputProps={{ 'aria-label': 'Without label' }}
            defaultValue={(subjects ?? defaultSubjects)[0]}
          >
            {(subjects ?? defaultSubjects).map((subject, index) => (
              <MenuItem key={index} value={subject}>
                {subject}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <TextField
          fullWidth
          className="contact-us--textfield contact-us--text-area"
          label={
            <Typography
              className="contact-us--textfield-typography"
              variant="main"
            >
              MESSAGE
            </Typography>
          }
          name="message"
          onChange={(e) => handleContactFormChange('message', e.target.value)}
          multiline
          variant="outlined"
          required
        />
        <Typography className="contact-us--typography-protected" variant="main">
          This site is protected by reCAPTCHA and the Google{' '}
          <Link
            href="https://policies.google.com/privacy"
            target="_blank"
            className="contact-us--link"
          >
            Privacy Policy
          </Link>{' '}
          and{' '}
          <Link
            href="https://policies.google.com/terms"
            target="_blank"
            className="contact-us--link"
          >
            Terms of Service
          </Link>{' '}
          apply.
        </Typography>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button
            type="submit"
            className={
              sendable
                ? 'contact-us--button'
                : 'contact-us--button contact-us--button-disabled'
            }
            disabled={!sendable}
          >
            <Typography
              variant="mainSemiBold"
              className="contact-us--button-typography"
            >
              Send message
            </Typography>
          </Button>
        )}
      </form>
    </StyledWrapper>
  );
};

export default ContactUs;
