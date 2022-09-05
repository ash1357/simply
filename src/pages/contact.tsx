import React, { useEffect } from 'react';
import BottomBanner from '../reusable-components/BottomBanner/BottomBanner';
import Text from '../symply-ui/Text';
import { Grid } from '../symply-ui/Layout';
import ContactStyle from '../pages-css/contact.module.css';
import BasicLayout from '../layout/BasicLayout';
import { window } from 'browser-monads';

const ContactList = [
  {
    title: 'Talk to Sales',
    subtitle:
      'Set a time to meet with our Small Business Consultant and see how Symply can streamline your payroll and HR.',
    link: 'https://meetings.hubspot.com/miles-nollman',
  },
  {
    title: 'Contact Customer Support',
    subtitle:
      'Current clients, visit our Knowledge Base or reach out to our customer support team in your Symply account for assistance.',
    link: 'https://support.symply.io/',
  },
];

const Contact = (props) => {
  const { location } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicLayout
      title="Contact Us"
      path={location?.pathname}
      metaTitle="Contact Us"
      description="Find out how to get in touch with the Symply team. Talk to our sales team, start your free trial, or contact support."
    >
      <div className={ContactStyle.mainContainer}>
        <div className={ContactStyle.firstRowContainer}>
          <div className={ContactStyle.firstRowContainerLeft}>
            <Text fontFamily="Moret" lg="54px" color="white">
              Contact Us
            </Text>
          </div>
          <div className={ContactStyle.firstRowContainerRight}>
            <Text fontFamily="Barlow" lg="20px" color="white">
              Find out how to get in touch with the Symply Team.
            </Text>
          </div>
        </div>
        <div className={ContactStyle.secondRowContainer}>
          <Grid mainAxisAlignment="center">
            {ContactList.map((contact) => {
              const { link, title, subtitle } = contact;
              return (
                <a href={link} className={ContactStyle.secondRowGridContainer} key={title}>
                  <div>
                    <div className={ContactStyle.secondRowGridFirstRow}>
                      <Text fontFamily="Moret" lg="30px" color="#211E5E">
                        {title}
                      </Text>
                    </div>
                    <div className={ContactStyle.secondRowGridSecondRow}>
                      <Text fontFamily="Barlow" lg="16px" color="#4E4E4E">
                        {subtitle}
                      </Text>
                    </div>
                    <div className={ContactStyle.secondRowGridThirdRow}>
                      <Text fontFamily="Barlow" lg="14px" color="#211E5E">
                        <u>LEARN MORE</u>
                      </Text>
                    </div>
                  </div>
                </a>
              );
            })}
          </Grid>
        </div>
      </div>
      <BottomBanner />
    </BasicLayout>
  );
};

export default Contact;
