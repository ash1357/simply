import React, { useEffect, useMemo } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import BasicLayout from '../../layout/BasicLayout';
import Text from '../../symply-ui/Text';
import HiringStyles from '../../pages-css/hiring.module.css';
import Button from '../../symply-ui/Button/Button';
import BottomBanner from '../../reusable-components/BottomBanner/BottomBanner';
import CardContent from '../../list/hiring/cardContent';
import FirstRowArray from '../../list/hiring/firstRowArray';
import ThirdRowArray from '../../list/hiring/thirdRowArray';
import AppDisplay from '../../../content/assets/hiring/secondRow/app-display.png';
import ApplicantTrackingV2 from '../../../content/assets/hiring/secondRow/Applicant-Tracking.png';

const CardComponent = () => {
  return (
    <div className={HiringStyles.cardsArrayContainer}>
      {CardContent.map((card) => {
        const { title, description, image, additionalImage } = card;
        return (
          <div className={HiringStyles.cardContainer}>
            <img src={image} alt={title} width="100px" height="auto" style={{ margin: 0 }} />
            <Text
              fontFamily="Moret"
              color="#211E5E"
              lg="30px"
              sm="24px"
              style={{ marginBottom: '1rem' }}
            >
              {title}
            </Text>
            <Text fontFamily="Barlow" color="#4E4E4E" lg="16px" sm="14px">
              {description}
            </Text>
            {additionalImage && (
              <img
                src={additionalImage}
                alt={title}
                width="70px"
                height="auto"
                style={{ marginBottom: 0, marginTop: '1rem' }}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

const Hiring = () => {
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicLayout title="Symply Hiring" metaTitle="Symply Hiring" description="See Symply Hiring.">
      <div className={HiringStyles.mainContainer}>
        <div className={HiringStyles.headerContainer}>
          <div className={HiringStyles.innerHeaderContainer}>
            <Text
              fontFamily="Moret"
              lg="54px"
              sm="40px"
              color="white"
              styleLG={{ marginBottom: '2rem', lineHeight: '60px' }}
              styleSM={{ lineHeight: '100%' }}
            >
              Everything you need to hire the best talent now.
            </Text>
            <Text
              fontFamily="Barlow"
              lg="20px"
              sm="16px"
              color="white"
              styleLG={{ lineHeight: '30px', marginBottom: '3rem' }}
              styleSM={{ lineHeight: '24px' }}
            >
              Symply Hiring enables you to create job postings, post to job boards, generate QR
              codes and manage applicants. Making it easy to hire in a few clicks.
            </Text>
            <Button
              variant="primary"
              onClick={() => window.open('https://pages.symply.io/talk-to-sales', '_blank')}
              height="46px"
              width={isLargeScreen ? '80%' : '100%'}
              fontSize="20px"
            >
              Show Me How the Hiring App Works
            </Button>
          </div>
          {isLargeScreen && (
            <div className={HiringStyles.cardContainerLG}>
              <CardComponent />
            </div>
          )}
        </div>
        {!isLargeScreen && (
          <div className={HiringStyles.cardContainerSM}>
            <CardComponent />
          </div>
        )}
        <div className={HiringStyles.firstRowContainer}>
          {FirstRowArray.map((firstRow, index) => {
            const { label, title, subtitle, image } = firstRow ?? {};
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
                    fontFamily="Barlow"
                    color="#00A2A9"
                    lg="20px"
                    sm="16px"
                    styleLG={{ lineHeight: '30px' }}
                  >
                    <b>{label}</b>
                  </Text>
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
                  }}
                >
                  <img src={image} alt="title" style={{ margin: 0 }} />
                </div>
              </div>
            );
          })}
        </div>
        <div className={HiringStyles.secondRowContainer}>
          <Text
            fontFamily="Barlow"
            color="#005F63"
            lg="20px"
            sm="16px"
            styleLG={{ lineHeight: '30px' }}
          >
            <b>JOB APPLICATIONS</b>
          </Text>
          <Text
            fontFamily="Moret"
            color="#211E5E"
            lg="40px"
            sm="30px"
            styleLG={{ lineHeight: '100%' }}
            styleSM={{ lineHeight: '35px' }}
          >
            A Smooth Experience for Applicants
          </Text>
          <Text
            fontFamily="Barlow"
            color="#211E5E"
            lg="20px"
            sm="16px"
            styleLG={{ lineHeight: '30px' }}
          >
            Symply provides an easy user experience for job applicants. Once your job is published,
            candidates can fill their application forms seamlessly.
          </Text>
          <img
            src={AppDisplay}
            alt="App Display"
            height="auto"
            width="100%"
            style={{ margin: 0 }}
          />
          <Text
            fontFamily="Barlow"
            color="#005F63"
            lg="20px"
            sm="16px"
            styleLG={{ lineHeight: '30px' }}
          >
            <b>APPLICANT TRACKING</b>
          </Text>
          <Text
            fontFamily="Moret"
            color="#211E5E"
            lg="40px"
            sm="30px"
            styleLG={{ lineHeight: '100%' }}
            styleSM={{ lineHeight: '35px' }}
          >
            Easily Manage Applicants Between Stages
          </Text>
          <Text
            fontFamily="Barlow"
            color="#211E5E"
            lg="20px"
            sm="16px"
            styleLG={{ lineHeight: '30px' }}
          >
            Manage your hiring pipeline with Symply. We provide a unique interface to enable you
            monitor all applicants at each stage, & move them between stages through drag-and-drop.
            You can customize your hiring pipeline for the process that suits you best.
          </Text>
          <img
            src={ApplicantTrackingV2}
            width="100%"
            height="auto"
            alt="Applicant Tracking"
            style={{ margin: 0 }}
          />
        </div>
        <div className={HiringStyles.thirdRowContainer}>
          <Text
            fontFamily="Barlow"
            color="#4FD1A5"
            lg="20px"
            sm="16px"
            styleLG={{ lineHeight: '30px' }}
          >
            <b>FEATURES</b>
          </Text>
          <Text
            fontFamily="Moret"
            color="white"
            lg="40px"
            sm="30px"
            styleLG={{ lineHeight: '100%' }}
            styleSM={{ lineHeight: '35px' }}
          >
            Get More From Symply Hiring.
          </Text>
          <Text
            fontFamily="Barlow"
            color="white"
            lg="20px"
            sm="16px"
            styleLG={{ lineHeight: '30px' }}
            styleSM={{ lineHeight: '24px' }}
          >
            Here are a few more features that Symply provides you
          </Text>
          <div className={HiringStyles.thirdRowArrayContainer}>
            {ThirdRowArray.map((thirdRow) => {
              const { title, subtitle, image } = thirdRow;
              return (
                <div
                  style={{
                    width: isLargeScreen ? '30%' : '100%',
                    textAlign: isLargeScreen ? 'left' : 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                    alignItems: isLargeScreen ? 'flex-start' : 'center',
                  }}
                >
                  <img src={image} alt={title} width="64px" height="auto" style={{ margin: 0 }} />
                  <Text
                    fontFamily="Barlow"
                    lg="20px"
                    sm="16px"
                    color="white"
                    styleLG={{ lineHeight: '24px' }}
                    styleSM={{ lineHeight: '20px' }}
                  >
                    <b>{title}</b>
                  </Text>
                  <Text
                    fontFamily="Barlow"
                    lg="16px"
                    sm="14px"
                    color="white"
                    styleLG={{ lineHeight: '24px' }}
                  >
                    {subtitle}
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
        <div className={HiringStyles.bottomBannerContainer}>
          <BottomBanner />
        </div>
      </div>
    </BasicLayout>
  );
};

export default Hiring;
