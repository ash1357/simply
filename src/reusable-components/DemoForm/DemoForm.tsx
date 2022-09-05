import React, { useState, useMemo } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import FormStyle from './DemoForm.module.css';
import Button from '../../symply-ui/Button/Button';

const DemoForm = ({ close }) => {
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);
  // holds the forms state
  const initialState = {
    firstName: '',
    email: '',
    phoneNumber: '',
    companyName: '',
  };
  const [form, setForm] = useState(initialState);
  // handles the on change in the form
  const onChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;
    setForm({ ...form, [name]: value });
  };

  /**
   * submits the form to hubspot.
   */
  const onSubmit = async () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      fields: [
        { name: 'firstname', value: form.firstName },
        { name: 'email', value: form.email },
        { name: 'phone', value: form.phoneNumber },
        { name: 'company', value: form.companyName },
      ],
      context: { pageUri: 'www.symply.io', pageName: 'Symply Landing Page' },
      legalConsentOptions: {
        consent: {
          consentToProcess: true,
          text: 'I agree to allow Example Company to store and process my personal data.',
          communications: [
            {
              value: true,
              subscriptionTypeId: 999,
              text: 'I agree to receive marketing communications from Example Company.',
            },
          ],
        },
      },
    });

    const requestOptions: any = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow',
    };
    try {
      const res = await fetch(
        'https://api.hsforms.com/submissions/v3/integration/submit/7237498/3428a52b-5e16-4bc5-8aa9-caab71728955',
        requestOptions,
      );
      const { status } = res;
      if (status === 200) {
        // alert('Success!');
        setForm(initialState);
        window.open('https://pages.symply.io/symply-demo');
        close();
      } else {
        console.error(res);
        alert('Something went wrong we apologize. 😭');
      }
    } catch (e) {
      console.error(e);
      alert('Something went wrong we apologize. 😭');
    }
  };

  return (
    <div className={FormStyle.formContainer}>
      <form
        className={FormStyle.formComponent}
        onSubmit={async (e) => {
          e.preventDefault();
          await onSubmit();
        }}
      >
        <input
          className={FormStyle.formInput}
          type={'firstname'}
          placeholder={'First name'}
          value={form.firstName}
          onChange={onChange}
          name="firstName"
        />
        <input
          className={FormStyle.formInput}
          type={'email'}
          placeholder={'Email'}
          value={form.email}
          onChange={onChange}
          name="email"
        />
        <input
          className={FormStyle.formInput}
          type={'phoneNumber'}
          placeholder={'Phone number'}
          value={form.phoneNumber}
          onChange={onChange}
          name="phoneNumber"
        />
        <input
          className={FormStyle.formInput}
          type={'companyName'}
          placeholder={'Company name'}
          value={form.companyName}
          onChange={onChange}
          name="companyName"
        />
        <Button
          width={isLargeScreen ? '30%' : '100%'}
          height="46px"
          variant="primary"
          style={{ marginTop: '22px' }}
          type="submit"
          disabled={
            form.email === '' ||
            form.firstName === '' ||
            form.phoneNumber === '' ||
            form.companyName === ''
          }
        >
          <b>Watch Demo</b>
        </Button>
      </form>
    </div>
  );
};

export default DemoForm;
