import React, { useState, useMemo } from 'react';
import headerStyles from './Header.module.css';
import Text from '../../symply-ui/Text';
import HeroImage from '../../../content/assets/SYM_HR_desktop_mobile.png';
import Button from '../../symply-ui/Button/Button';
import DemoModal from '../DemoModal/DemoModal';
import BrandLogos from '../BrandLogo/BrandLogos';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const subheading =
  'Hiring, Onboarding & Payroll Software for Small Businesses';

export default () => {
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <div className={headerStyles.header}>
      <div className={headerStyles.row}>
        <div className={headerStyles.column1}>
          <div className={headerStyles.column1Inner}>
            <div className={headerStyles.headerContentLG}>
              <Text lg="54px" fontFamily="Moret" color="white" style={{ lineHeight: '60px' }}>
                {subheading}
              </Text>
            </div>
            <div className={headerStyles.headerContentSM}>
              <Text lg="40px" fontFamily="Moret" color="white" style={{ lineHeight: '45px' }}>
                {subheading}
              </Text>
            </div>
            <div className={headerStyles.btnRow}>
              <div>
                <Button
                  onClick={toggleModal}
                  width={isLargeScreen ? '180px' : '100%'}
                  height="44px"
                  variant="secondary-inverted"
                  styleLG={{ marginRight: '20px' }}
                  styleSM={{ marginBottom: '1rem' }}
                >
                  <b>Watch a Demo</b>
                </Button>
              </div>
              <a
                href="https://pages.symply.io/talk-to-sales"
                style={{ textDecoration: 'none', boxShadow: 'none' }}
                target="_blank"
              >
                <Button width={isLargeScreen ? '180px' : '100%'} height="44px" variant="secondary">
                  <b>Talk to an Expert</b>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className={headerStyles.brandWrapper}>
        <BrandLogos />
      </div>
      <DemoModal
        open={showModal}
        toggleModal={toggleModal}
        title="Ready to see Symply in action?"
        subtitle="Submit the form below to watch a recorded demo"
      />
    </div>
  );
};
