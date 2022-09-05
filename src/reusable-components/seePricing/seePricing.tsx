import React from 'react';
import Text from '../../symply-ui/Text';
import Button from '../../symply-ui/Button/Button';
import seePricingStyle from './seePricing.module.css';
import Pricing from '../../../content/assets/-_Pricing.svg';

const seePricing = () => {
  return (
    <div className={seePricingStyle.seePricingContainer}>
      <div className={seePricingStyle.seePricingInnerContainer}>
        <div className={seePricingStyle.seePricingRowLeft}>
          <Text fontFamily="Moret" lg="28px" color="#211E5E">
            <b>Pricing that makes sense for your small business</b>
          </Text>
          <Text fontFamily="Barlow" lg="16px" color="#211E5E">
            Symply’s pricing was built for small businesses, with the tools all small businesses
            need, and add-ons to handle your additional HR and payroll needs.
          </Text>
          <a href="/pricing" style={{ textDecoration: 'none', boxShadow: 'none' }}>
            <Button variant="primary" width="144px" height="48px" style={{ marginTop: '48px' }}>
              <b>SEE PRICING</b>
            </Button>
          </a>
        </div>
        <div className={seePricingStyle.seePricingRowRight}>
          <div>
            <img src={Pricing} style={{ width: '180px', height: 'auto', margin: 0 }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default seePricing;
