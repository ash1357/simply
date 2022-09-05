import React, { useEffect, useMemo } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import BasicLayout from '../../layout/BasicLayout';
import Text from '../../symply-ui/Text';
import OnboardingStyles from '../../pages-css/onboarding.module.css';
import FirstRowArray from '../../list/onboarding/firstRowArray';
import AppDisplay from '../../../content/assets/SYM_HR_desktop_mobile.png';
import ApplicantTrackingV2 from '../../../content/assets/hiring/secondRow/Applicant-Tracking.png';

const Onboarding = () => {
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicLayout title="Symply Hiring" metaTitle="Symply Hiring" description="See Symply Hiring.">
      <div className={OnboardingStyles.mainContainer}>
        <div className={OnboardingStyles.headerContainer}>
          <Text
            fontFamily="Barlow"
            color="#005F63"
            lg="20px"
            sm="16px"
            styleLG={{ lineHeight: '30px' }}
          >
            <b>EMPLOYEE ONBOARDING</b>
          </Text>
          <Text
            fontFamily="Moret"
            color="#211E5E"
            lg="40px"
            sm="30px"
            styleLG={{ lineHeight: '100%' }}
            styleSM={{ lineHeight: '35px' }}
          >
            Paperless employee onboarding at no cost
          </Text>
          <Text
            fontFamily="Barlow"
            color="#211E5E"
            lg="20px"
            sm="16px"
            styleLG={{ lineHeight: '30px' }}
          >
            Skip the paperwork and create a repeatable process with self-service employee
            onboarding. Sign up for free so your new hires can hit the ground running on their first
            day.
          </Text>
          <img
            src={AppDisplay}
            alt="App Display"
            height="auto"
            width="100%"
            style={{ margin: 0 }}
          />
          <Text
            fontFamily="Moret"
            color="#211E5E"
            lg="40px"
            sm="30px"
            styleLG={{ lineHeight: '100%' }}
            styleSM={{ lineHeight: '35px' }}
          >
            Why Choose Symply Onboarding
          </Text>
          <Text
            fontFamily="Barlow"
            color="#211E5E"
            lg="20px"
            sm="16px"
            styleLG={{ lineHeight: '30px' }}
          >
            Bring your entire onboarding process online. Whether you're looking to collect employee
            forms for new hires, send out employee handbooks electronically, or train employees, our
            onboarding tool can help do all of that, plus more.
          </Text>
          <img
            src={ApplicantTrackingV2}
            width="100%"
            height="auto"
            alt="Applicant Tracking"
            style={{ margin: 0 }}
          />
        </div>
        <div className={OnboardingStyles.firstRowContainer}>
          {FirstRowArray.map((firstRow, index) => {
            const { title, subtitle, image } = firstRow ?? {};
            return (
              <div
                style={{
                  display: 'flex',
                  flexDirection: isLargeScreen
                    ? index % 2 === 0
                      ? 'row'
                      : 'row-reverse'
                    : 'column',
                  gap: 5,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    flex: 1,
                    gap: isLargeScreen ? 20 : 5,
                  }}
                >
                  <Text
                    fontFamily="Moret"
                    color="#211E5E"
                    lg="40px"
                    sm="30px"
                    styleLG={{ lineHeight: '100%' }}
                  >
                    {title}
                  </Text>
                  <Text
                    fontFamily="Barlow"
                    color="#211E5E"
                    lg="20px"
                    sm="16px"
                    styleLG={{ lineHeight: '30px' }}
                  >
                    {subtitle}
                  </Text>
                </div>
                <div
                  style={{
                    display: 'flex',
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: index % 2 === 1 ? 'end' : 'start',
                    margin: '2rem',
                  }}
                >
                  <img src={image} alt="title" style={{ margin: 0 }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </BasicLayout>
  );
};

export default Onboarding;
