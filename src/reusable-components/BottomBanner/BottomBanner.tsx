import React from 'react';
import { navigate } from 'gatsby';
import { Grid } from '../../symply-ui/Layout';
import Text from '../../symply-ui/Text';
import BottomBannerStyle from './BottomBanner.module.css';
import Button from '../../symply-ui/Button/Button';

const stepList = [
  'Go to the Pricing Page and add Symply Hiring to your cart ',
  'Checkout from cart',
  'Sign up to Symply Hiring',
];

const BottomBanner = () => {
  return (
    <div className={BottomBannerStyle.bottomBannerContainer}>
      <div
        className={BottomBannerStyle.bottomBannerRowLeft}
        style={{ alignItems: 'center', flexDirection: "column", padding: 0 }}
      >
        <Text lg="40px" sm="22px" fontFamily="Moret" color="white">
          Let’s Not Complicate This.
        </Text>
        <Text
          lg="16px"
          sm="14px"
          fontFamily="Barlow"
          color="white"
          styleLG={{ marginTop: '13px' }}
          styleSM={{ marginTop: '11px' }}
        >
          Enough about us - are you ready to see Symply Hiring in action?
        </Text>
        <Grid mainAxisAlignment="center">
          <div>
            {stepList.map((step: string, key: number) => (
              <div
                className={BottomBannerStyle.bottomBannerNumberContainer}
                key={key}
                style={{ width: 'auto' }}
              >
                <div className={BottomBannerStyle.bottomBannerNumber}>
                  <Text lg="20px" sm="14px" fontFamily="Moret" color="white">
                    {key + 1}
                  </Text>
                </div>
                <div className={BottomBannerStyle.bottomBannerNumberContent}>
                  <Text lg="16px" sm="14px" fontFamily="Barlow" color="white">
                    {step}
                  </Text>
                </div>
              </div>
            ))}
          </div>
        </Grid>
        <Button
          width="200px"
          height="46px"
          variant="primary"
          style={{ marginTop: '45px' }}
          onClick={() => navigate('/pricing')}
        >
          <b>GET STARTED</b>
        </Button>
      </div>
    </div>
  );
};

export default BottomBanner;
