import React, { useEffect, Fragment } from 'react';
import Text from '../symply-ui/Text';
import FAQ from '../reusable-components/FAQ/FAQ';
import BottomBanner from '../reusable-components/BottomBanner/BottomBanner';
import Payroll from '../../content/assets/payroll.png';
import Quickbooks from '../../content/assets/quickbooks_icon.png';
import TopicalFocus from '../reusable-components/TopicalFocus/TopicalFocus';
import productStyle from '../pages-css/products.module.css';
import BasicLayout from '../layout/BasicLayout';
import { window } from 'browser-monads';

const integrationsList = [
  {
    title: 'Quickbooks',
    description: 'Connect seamlessly to QuickBooks to save time.',
  },
  {
    title: 'Jack in the Box Almametrics',
    description: "Automatically sync employees' hours from the Altametrics POS into Symply.",
  },
];

const Products = (props) => {
  const { location } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const headerText = 'Payroll and HR Tools to Streamline Your Small Business';
  const headerSubText =
    'Are you ready to simplify your workforce management? Take a look inside of the powerful platform that was built specifically for small businesses.';
  return (
    <BasicLayout
      title="Payroll and HR Tools to Streamline Your Small Business"
      path={location?.pathname}
      metaTitle="Payroll and HR Tools to Streamline Your Small Business"
      description="Experience the easiest to use payroll platform, streamline your HR tasks, access critical reports when you need them, and integrate with other workforce tools."
    >
      <div className={productStyle.headerContainer}>
        <div className={productStyle.headerLeft}>
          <Text
            fontFamily="Moret"
            lg="54px"
            sm="40px"
            color="#211E5E"
            styleLG={{ marginBottom: '20px', lineHeight: '60px' }}
            styleSM={{
              marginBottom: '16px',
              lineHeight: '45px',
            }}
          >
            {headerText}
          </Text>
          <Text
            fontFamily="Barlow"
            lg="20px"
            sm="16px"
            color="#211E5E"
            styleLG={{ lineHeight: '30px' }}
            styleSM={{ lineHeight: '20px' }}
          >
            {headerSubText}
          </Text>
        </div>
        <div className={productStyle.headerRight}>
          <img src={Payroll} className={productStyle.headerImage} />
        </div>
      </div>
      <TopicalFocus content="Workforce Tools to Support Your Growing Business." />
      <div className={productStyle.secondRowContainer}>
        <div className={productStyle.secondRowLeft}>
          <div className={productStyle.textDivLG}>
            <Text fontFamily="Barlow" lg="20px" color="rgba(33,30,94,0.5)">
              INTEGRATIONS
            </Text>
            <Text lg="40px" fontFamily="Moret" color="#211E5E">
              Connect Directly With Your Other Tools
            </Text>
            <Text
              fontFamily="Barlow"
              color="#4E4E4E"
              lg="20px"
              style={{
                marginTop: '35px',
              }}
            >
              Symply syncs easily with your accounting software to make sure data is always accurate
              and updated in real time.
            </Text>
            {integrationsList.map((integration) => {
              const { title, description } = integration;
              return (
                <Fragment key={title}>
                  <Text
                    lg="30px"
                    fontFamily="Moret"
                    color="#211E5E"
                    style={{
                      marginTop: '30px',
                    }}
                  >
                    {title} Integration
                  </Text>
                  <Text
                    fontFamily="Barlow"
                    color="#4E4E4E"
                    lg="16px"
                    style={{
                      marginTop: '17px',
                    }}
                  >
                    {description}
                  </Text>
                </Fragment>
              );
            })}
          </div>
          <div className={productStyle.textDivSM}>
            <Text lg="30px" fontFamily="Moret" color="#211E5E" style={{ lineHeight: '35px' }}>
              Connect Directly With Your Other Tools
            </Text>
            <Text
              fontFamily="Barlow"
              color="#4E4E4E"
              lg="16px"
              style={{
                marginTop: '11px',
                lineHeight: '24px',
              }}
            >
              Symply syncs easily with your accounting software to make sure data is always accurate
              and updated in real time.
            </Text>
            <div style={{ display: 'flex', marginTop: '30px' }}>
              <div style={{ flex: '1', paddingRight: '2rem' }}>
                {integrationsList.map((integration) => {
                  const { title, description } = integration;
                  return (
                    <div style={{ marginBottom: '2rem' }} key={title}>
                      <Text lg="18px" fontFamily="Moret" color="#211E5E">
                        {title}
                      </Text>
                      <Text fontFamily="Barlow" color="#4E4E4E" lg="14px">
                        {description}
                      </Text>
                    </div>
                  );
                })}
              </div>
              <div style={{ flex: '1' }}>
                <img src={Quickbooks} style={{ width: '100%', height: 'auto', margin: 0 }} />
              </div>
            </div>
          </div>
        </div>
        <div className={productStyle.secondRowRight}>
          <img src={Quickbooks} style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
      {/* <Grid
        mainAxisAlignment={'center'}
        style={{
          paddingLeft: '6%',
          paddingRight: '6%'
        }}
      >
        <div className={productStyle.cardContainer}>
          <img src={Sample} className={productStyle.cardIcon} />
          <Text lg={'24px'} fontFamily={'Moret'} color={'#211E5E'}>
            Sales Navigator
          </Text>
          <Text lg={'14px'} fontFamily={'Barlow'} color={'#4E4E4E'}>
            By connecting Symply with LinkedIn Sales Navigator, users can
            research and reach out to qualified prospects.
          </Text>
        </div>
        <div className={productStyle.cardContainer}>
          <img src={Sample} className={productStyle.cardIcon} />
          <Text lg={'24px'} fontFamily={'Moret'} color={'#211E5E'}>
            Salesforce
          </Text>
          <Text lg={'14px'} fontFamily={'Barlow'} color={'#4E4E4E'}>
            By connecting Symply with LinkedIn Sales Navigator, users can
            research and reach out to qualified prospects.
          </Text>
        </div>
        <div className={productStyle.cardContainer}>
          <img src={Sample} className={productStyle.cardIcon} />
          <Text lg={'24px'} fontFamily={'Moret'} color={'#211E5E'}>
            Hubspot
          </Text>
          <Text lg={'14px'} fontFamily={'Barlow'} color={'#4E4E4E'}>
            By connecting Symply with LinkedIn Sales Navigator, users can
            research and reach out to qualified prospects.
          </Text>
        </div>
        <div className={productStyle.cardContainer}>
          <img src={Sample} className={productStyle.cardIcon} />
          <Text lg={'24px'} fontFamily={'Moret'} color={'#211E5E'}>
            Zapier
          </Text>
          <Text lg={'14px'} fontFamily={'Barlow'} color={'#4E4E4E'}>
            By connecting Symply with LinkedIn Sales Navigator, users can
            research and reach out to qualified prospects.
          </Text>
        </div>
        <div className={productStyle.cardContainer}>
          <img src={Sample} className={productStyle.cardIcon} />
          <Text lg={'24px'} fontFamily={'Moret'} color={'#211E5E'}>
            Slack
          </Text>
          <Text lg={'14px'} fontFamily={'Barlow'} color={'#4E4E4E'}>
            By connecting Symply with LinkedIn Sales Navigator, users can
            research and reach out to qualified prospects.
          </Text>
        </div>
        <div className={productStyle.cardContainer}>
          <img src={Sample} className={productStyle.cardIcon} />
          <Text lg={'24px'} fontFamily={'Moret'} color={'#211E5E'}>
            Google Data Studio
          </Text>
          <Text lg={'14px'} fontFamily={'Barlow'} color={'#4E4E4E'}>
            By connecting Symply with LinkedIn Sales Navigator, users can
            research and reach out to qualified prospects.
          </Text>
        </div>
      </Grid>
      <div className={productStyle.buttonContainer}>
        <button className={productStyle.buttonCustom}>
          <Text lg={'14px'} fontFamily={'Barlow'} color={'#211E5E'}>
            SEE ALL ADD-ONS AND INTEGRATIONS
          </Text>
        </button>
      </div> */}
      <FAQ />
      <BottomBanner />
    </BasicLayout>
  );
};

export default Products;
