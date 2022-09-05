import React, { useState, useEffect, useContext } from 'react';
import Text from '../symply-ui/Text';
import FAQ from '../reusable-components/FAQ/FAQ';
import PricingStyle from '../pages-css/pricing.module.css';
import BasicLayout from '../layout/BasicLayout';
import Card from '../reusable-components/Card/Card';
import featuresList from '../list/features.json';
import symplyFeaturesDetail from '../list/featureDetails.json';
import Modal from 'react-modal';
import { GlobalContext } from '../../GlobalContext';
import { window } from 'browser-monads';
import Cancel from '../../content/assets/cancel.svg';

enum Features {
  HIRING = 'hiring',
  ONBOARDING = 'onboarding',
  PAYROLL = 'payroll',
}

type featuresType = {
  title: string;
  name: Features | string;
  content: string;
  perMonth?: number;
  perEmployee?: number;
  additionalText?: string;
  learnMoreLink?: string;
  priceAdditionalText?: string;
};

const Pricing = (props: any) => {
  const { location } = props;
  const [openFeaturesModal, setOpenFeaturesModal] = useState<Features | string | null>(null);
  const { chosenAddOn, handleChosenAddOn, openMenu, setOpenMenu } = useContext(GlobalContext);

  /**
   * @description Handle button clicks in card component
   *
   * @param name name of add ons based on `features.json`
   */
  const handleCardButton = (name: string) => {
    // If a new item is chosen
    if (!chosenAddOn[name]) {
      setOpenMenu({ ...openMenu, shoppingCart: true });
    }

    // To handle logical relationship between other add ons
    if (name === 'payroll' && !chosenAddOn?.payroll) {
      handleChosenAddOn({
        ...chosenAddOn,
        onboarding: true,
        payroll: true,
        laborLawPoster: true,
      });
    } else if (name === 'payroll' && chosenAddOn?.payroll) {
      handleChosenAddOn({
        ...chosenAddOn,
        payroll: false,
        laborLawPoster: false,
      });
    } else if (name === 'onboarding' && chosenAddOn?.onboarding) {
      handleChosenAddOn({
        ...chosenAddOn,
        onboarding: false,
        payroll: false,
        laborLawPoster: false,
      });
    } else {
      handleChosenAddOn({
        ...chosenAddOn,
        [name]: !chosenAddOn[name],
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicLayout
      title="Monthly Pricing for Full-Service"
      path={location?.pathname}
      metaTitle="Monthly Pricing for Full-Service Payroll"
      description="Straightforward pricing for payroll services and HR tools. Monthly plans start at $39 per month + $6 per employee per month, no long-term contracts required."
    >
      <div className={PricingStyle.headerContainer}>
        <Text
          fontFamily="Moret"
          lg="40px"
          sm="35px"
          color="#211E5E"
          style={{ marginBottom: '0.5rem' }}
        >
          Simple software with straightforward pricing
        </Text>
        <div className={PricingStyle.headerTitleContainer}>
          <Text
            fontFamily="Barlow"
            lg="20px"
            sm="16px"
            color="white"
            style={{ lineHeight: '23px', textAlign: 'center' }}
          >
            Over 1000 employees and businesses trust Symply. Try onboarding, hiring, payroll, or all
            three <b>risk-free for 30 days.</b>
          </Text>
        </div>
        <div className={PricingStyle.addOnGridContainer}>
          {featuresList.basicFeatures.map((addOn: featuresType, key: number) => {
            const { title, name, content, perMonth, perEmployee, priceAdditionalText } = addOn;
            return (
              <Card
                key={key}
                title={title}
                content={content}
                perMonth={perMonth}
                perEmployee={perEmployee}
                isClicked={chosenAddOn?.[name]}
                haveBorderTop
                onLearnMoreClick={() => {
                  setOpenFeaturesModal(name);
                }}
                isComingSoon={false}
                onClick={() => handleCardButton(name)}
                styleLG={{ width: '30vw' }}
                isBannerUsed={name === 'payroll'}
                bannerText={name === 'payroll' ? 'OUR BREAD AND BUTTER 😉' : ''}
                priceAdditionalText={priceAdditionalText}
              />
            );
          })}
        </div>
      </div>
      <div className={PricingStyle.addOnContainer}>
        <div className={PricingStyle.headerContentContainer}>
          <Text
            fontFamily="Barlow"
            lg="20px"
            sm="16px"
            color="#211E5E"
            styleLG={{
              textAlign: 'center',
              lineHeight: '30px',
            }}
            styleSM={{
              lineHeight: '24px',
            }}
          >
            Give your plan a boost with our available add-on features
          </Text>
        </div>
        <div className={PricingStyle.addOnGridContainer}>
          {featuresList.addOnFeatures.map(
            // @ts-ignore
            (addOn: featuresType, key: number) => {
              const { title, name, perMonth, perEmployee } = addOn;
              return (
                <div className={PricingStyle.cardContainer}>
                  <Card
                    key={key}
                    title={title}
                    perMonth={perMonth}
                    perEmployee={perEmployee}
                    isClicked={chosenAddOn?.[name]}
                    onClick={() => handleCardButton(name)}
                    styleLG={{ width: '22vw' }}
                  />
                </div>
              );
            },
          )}
        </div>
      </div>
      {featuresList.basicFeatures.map((addOn: featuresType, key: number) => {
        const { title, name } = addOn;
        return (
          <Modal
            isOpen={openFeaturesModal === name}
            className={PricingStyle.featureModal}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.75)',
                zIndex: 300000,
              },
            }}
            onRequestClose={() => setOpenFeaturesModal(null)}
            shouldCloseOnEsc
          >
            <div
              key={name}
              style={{
                color: '#211E5E',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                  width: '100%',
                }}
              >
                <img
                  src={Cancel}
                  onClick={() => setOpenFeaturesModal(null)}
                  style={{ color: '#211E5E', width: '30px', height: 'auto', cursor: 'pointer' }}
                />
              </div>
              <Text lg="20px" sm="16px">
                <b>{title}</b>
              </Text>
              <Text>Plan Details:</Text>
              <div style={{ padding: '1rem' }}>
                <ul>
                  {symplyFeaturesDetail[name].map((d) => {
                    return (
                      <li>
                        <Text>{d}</Text>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>
          </Modal>
        );
      })}
      <FAQ />
    </BasicLayout>
  );
};

export default Pricing;
