import React, { useState } from 'react';
import { Link } from 'gatsby';
import Text from '../../symply-ui/Text';
import FormStyle from './Form.module.css';
import Button from '../../symply-ui/Button/Button';
import statesList from '../../list/states.json';
import { window } from 'browser-monads';

const Form = () => {
  // holds the forms state
  const initialState = {
    email: '',
    employees: '1-10',
    state: 'State',
    radio: false,
  };
  const [form, setForm] = useState({ ...initialState });
  const [button, setButton] = useState('button1');
  // handles the on change in the form
  const onChange = (e: any) => {
    const { target } = e;
    const { name, value } = target;
    switch (name) {
      case 'radio':
        setForm({ ...form, radio: !form.radio });
        break;
      default:
        setForm({ ...form, [name]: value });
        break;
    }
  };

  /**
   * submits the form to hubspot.
   * email, employees and state
   */
  const onSubmit = async () => {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const raw = JSON.stringify({
      fields: [
        { name: 'email', value: form.email },
        { name: 'numemployees', value: form.employees },
        { name: 'state', value: form.state },
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
        'https://api.hsforms.com/submissions/v3/integration/submit/7237498/74ec3fe4-a929-4267-bba7-5606db94c410',
        requestOptions,
      );
      window.open(`https://app.symply.io/signup?path=signUp&plan=free&email=${form.email}`);
      const { status } = res;
      if (status === 200) {
        alert('Success, we will talk to you soon!');
        setForm(initialState);
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
          className={FormStyle.emailInput}
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
          name="email"
        />
        <select
          className={FormStyle.stateInput}
          style={{
            paddingLeft: '22px',
            color: form.state === 'State' ? 'rgba(0, 0, 0, 0.5)' : 'black',
          }}
          value={form.state}
          onChange={onChange}
          name="state"
        >
          <option>State</option>
          {statesList.map((states: string) => (
            <option key={states} value={states}>
              {states}
            </option>
          ))}
        </select>
        <div className={FormStyle.numEmpContainer}>
          <div className={FormStyle.numEmpTitle}>
            <Text fontFamily="Barlow" lg="16px" sm="14px" color="white">
              No. Employees
            </Text>
          </div>
          <div className={FormStyle.numEmpForm}>
            <div
              className={FormStyle.numEmpButtonContainer}
              style={
                button === 'button1'
                  ? {
                      border: 'none',
                      borderRadius: '5px',
                      boxShadow: 'rgb(204, 204, 204) 3px 0px 4px',
                      zIndex: '10',
                    }
                  : {
                      color: 'grey',
                      border: 'none',
                      borderRadius: '10px',
                    }
              }
            >
              <button
                type="button"
                className={FormStyle.numEmpButton}
                onClick={() => {
                  setButton('button1');
                  setForm({ ...form, employees: '1-10' });
                }}
                style={
                  button === 'button1'
                    ? {
                        backgroundColor: '#4FD1A5',
                        borderRadius: '5px',
                      }
                    : {
                        backgroundColor: 'white',
                        borderRadius: '5px',
                      }
                }
                name="button1"
              >
                <Text
                  fontFamily="Barlow"
                  lg="16px"
                  color={button === 'button1' ? 'white' : '#211E5E'}
                >
                  1-10
                </Text>
              </button>
            </div>
            {button !== 'button1' && button !== 'button2' && (
              <div className={FormStyle.numpEmpSeparator}> </div>
            )}
            <div
              className={FormStyle.numEmpButtonContainer}
              style={
                button === 'button2'
                  ? {
                      border: 'none',
                      borderRadius: '5px',
                      boxShadow: 'rgb(204, 204, 204) 3px 0px 4px',
                      zIndex: '10',
                    }
                  : {
                      color: 'grey',
                      border: 'none',
                    }
              }
            >
              <button
                type="button"
                className={FormStyle.numEmpButton}
                onClick={() => {
                  setButton('button2');
                  setForm({ ...form, employees: '11-50' });
                }}
                style={
                  button === 'button2'
                    ? {
                        backgroundColor: '#4FD1A5',
                        borderRadius: '5px',
                      }
                    : {
                        backgroundColor: 'white',
                      }
                }
                name="button2"
              >
                <Text
                  fontFamily="Barlow"
                  lg="16px"
                  color={button === 'button2' ? 'white' : '#211E5E'}
                >
                  11-50
                </Text>
              </button>
            </div>
            {button !== 'button2' && button !== 'button3' && (
              <div className={FormStyle.numpEmpSeparator}> </div>
            )}
            <div
              className={FormStyle.numEmpButtonContainer}
              style={
                button === 'button3'
                  ? {
                      backgroundColor: '#4FD1A5',
                      border: 'none',
                      borderRadius: '5px',
                      boxShadow: 'rgb(204, 204, 204) 3px 0px 4px',
                      zIndex: '10',
                    }
                  : {
                      backgroundColor: 'white',
                      color: 'grey',
                      border: 'none',
                    }
              }
            >
              <button
                type="button"
                className={FormStyle.numEmpButton}
                onClick={() => {
                  setButton('button3');
                  setForm({ ...form, employees: '51-100' });
                }}
                style={
                  button === 'button3'
                    ? {
                        backgroundColor: '#4FD1A5',
                        borderRadius: '5px',
                      }
                    : {
                        backgroundColor: 'white',
                      }
                }
                name="button3"
              >
                <Text
                  fontFamily="Barlow"
                  lg="16px"
                  color={button === 'button3' ? 'white' : '#211E5E'}
                >
                  51-100
                </Text>
              </button>
            </div>
            {button !== 'button3' && button !== 'button4' && (
              <div className={FormStyle.numpEmpSeparator}> </div>
            )}
            <div
              className={FormStyle.numEmpButtonContainer}
              style={
                button === 'button4'
                  ? {
                      backgroundColor: '#4FD1A5',
                      border: 'none',
                      borderRadius: '5px',
                      boxShadow: 'rgb(204, 204, 204) -3px 0px 4px',
                      zIndex: '10',
                    }
                  : {
                      backgroundColor: 'white',
                      color: 'grey',
                      border: 'none',
                      borderRadius: '10px',
                    }
              }
            >
              <button
                type="button"
                className={FormStyle.numEmpButton}
                onClick={() => {
                  setButton('button4');
                  setForm({ ...form, employees: '100+' });
                }}
                style={
                  button === 'button4'
                    ? {
                        backgroundColor: '#4FD1A5',
                        borderRadius: '5px',
                      }
                    : {
                        backgroundColor: 'white',
                        borderRadius: '5px',
                      }
                }
                name="button4"
              >
                <Text
                  fontFamily="Barlow"
                  lg="16px"
                  color={button === 'button4' ? 'white' : '#211E5E'}
                >
                  100+
                </Text>
              </button>
            </div>
          </div>
        </div>
        <div>
          <label className={FormStyle.radioContainer}>
            <Text fontFamily="Barlow" lg="14px" color="white">
              Subscribe me to free tools, resources and insights from the Symply team
            </Text>
            <input type="radio" checked={form.radio} name="radio" onClick={onChange} />
            <span className={FormStyle.radioCheckmark} />
          </label>
        </div>
        <Link
          to="https://app.symply.io/signup"
          style={{ textDecoration: 'none', boxShadow: 'none' }}
        >
          <Button
            width="100%"
            height="46px"
            variant="primary"
            style={{ marginTop: '22px' }}
            type="submit"
            disabled={form.email === '' || form.state === 'State'}
          >
            <b>GET STARTED</b>
          </Button>
        </Link>
      </form>
    </div>
  );
};

export default Form;
