import React, { useState } from 'react';
import { Grid } from '../../symply-ui/Layout';
import Text from '../../symply-ui/Text';
import FAQStyle from './FAQ.module.css';
import Sample from '../../../content/assets/arrow-right.svg';

const FAQList = [
  {
    question: 'What do I need to do to get started and set up with Symply?',
    answer: {
      first: 'Just ',
      link: {
        text: 'sign up here ',
        url: 'https://app.symply.io/signup',
      },
      last: `to get started. Symply will walk you through the quick step-by-step
      process to set up your company and add employees.`,
    },
  },
  {
    question: 'What size of company or organization can use Symply?',
    answer: {
      first: `Symply was built specifically for the needs of small and medium sized businesses - between
      1-100 employees.`,
      link: {
        text: '',
        url: '',
      },
      last: '',
    },
  },
  {
    question: 'Can I start using Symply mid-year? Mid-quarter? Mid-Month?',
    answer: {
      first: `You can sign up for Symply on any day of the year, and within 5 business days you can
    run your first payroll.`,
      link: {
        text: '',
        url: '',
      },
      last: '',
    },
  },
  {
    question: 'Can I use Symply on a mobile phone or tablet?',
    answer: {
      first: `Yes and yes! Symply is a web-app built for device flexibility, meaning you will have a great
      experience no matter what device you access it from.`,
      link: {
        text: '',
        url: '',
      },
      last: '',
    },
  },
  {
    question: 'Will I be charged when the trial period is over?',
    answer: {
      first: `No, unless you activate your paid account with Symply, you will not
      be charged at the end of the trial period.`,
      link: {
        text: '',
        url: '',
      },
      last: '',
    },
  },
];

const FAQ = () => {
  const stateObj = () => {
    const output = {};
    for (let i = 0; i < FAQList.length; i++) {
      output[i] = false;
    }

    return output;
  };
  const [faqOpen, setFAQOpen] = useState(stateObj);
  return (
    <div className={FAQStyle.FAQContainer}>
      <div className={FAQStyle.textDivLG}>
        <Text fontFamily="Moret" lg="40px" color="#211E5E" style={{ marginBottom: '25px' }}>
          Frequently Asked Questions
        </Text>
      </div>
      <div className={FAQStyle.textDivSM}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Text
            fontFamily="Moret"
            lg="22px"
            color="#211E5E"
            style={{ marginBottom: '15.05px', marginTop: '43.04px' }}
          >
            Frequently Asked Questions
          </Text>
        </div>
      </div>
      <Grid>
        {FAQList.map((faq, index) => (
          <div
            className={FAQStyle.FAQCardContainer}
            onClick={() => {
              setFAQOpen({
                ...stateObj,
                [index]: !faqOpen[index],
              });
            }}
            key={index}
          >
            <div className={FAQStyle.FAQCardInnerContainer}>
              <img src={Sample} className={FAQStyle.FAQIcon} />
              <div className={FAQStyle.textDivLG}>
                <Text lg="16px" color="#211E5E" fontFamily="Barlow">
                  <b>{faq.question}</b>
                </Text>
              </div>
              <div className={FAQStyle.textDivSM}>
                <Text lg="14px" color="#211E5E" fontFamily="Barlow">
                  <b>{faq.question}</b>
                </Text>
              </div>
            </div>
            <div
              className={FAQStyle.FAQCardInnerContainer}
              style={{
                display: !faqOpen[index] ? 'none' : 'flex',
                paddingLeft: '42px',
              }}
            >
              <div className={FAQStyle.textDivLG}>
                <Text lg="16px" color="#211E5E" fontFamily="Barlow">
                  {faq.answer.first}
                  <a
                    href={faq.answer.link.url}
                    style={{ textDecoration: 'none', boxShadow: 'none' }}
                  >
                    <u>{faq.answer.link.text}</u>
                  </a>
                  {faq.answer.last}
                </Text>
              </div>
              <div className={FAQStyle.textDivSM}>
                <Text lg="14px" color="#211E5E" fontFamily="Barlow">
                  {faq.answer.first}
                  <a
                    href={faq.answer.link.url}
                    style={{ textDecoration: 'none', boxShadow: 'none' }}
                  >
                    <u>{faq.answer.link.text}</u>
                  </a>
                  {faq.answer.last}
                </Text>
              </div>
            </div>
          </div>
        ))}
      </Grid>
    </div>
  );
};

export default FAQ;
