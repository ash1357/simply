import React, { useEffect } from 'react';
import Text from '../symply-ui/Text';
import BottomBanner from '../reusable-components/BottomBanner/BottomBanner';
import SymplyStyle from '../pages-css/symply.module.css';
import WhyChooseSymply from '../reusable-components/WhyChooseSymply/whyChooseSymply';
import Image1 from '../../content/assets/payroll.png';
import Image2 from '../../content/assets/payroll_review.png';
import Image3 from '../../content/assets/payroll_submitted.png';
import SecurityCommitment from '../../content/assets/-_Security_Commitment.svg';
import ArrowButton from '../../content/assets/arrow-button.svg';
import BasicLayout from '../layout/BasicLayout';
import { window } from 'browser-monads';

const SymplyList = [
  {
    title: 'Add Hours and Payroll Details',
    content: `Enter regular, overtime and holiday hours and the system will automatically calculate a
    gross pay.`,
    image: Image1,
  },
  {
    title: 'Review and Submit Payroll',
    content:
      'Review payroll in our easy quick-view to verify accuracy, and confirm the check date.',
    image: Image2,
  },
  {
    title: 'That’s it!',
    content: `After you review and submit payroll, you can print checks and download paystubs as need be,
    and access valuable payroll reports.`,
    image: Image3,
  },
];

const Symply = (props) => {
  const { location } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicLayout
      title="Why Symply"
      path={location?.pathname}
      description="Symply is the easiest to use payroll platform possible. You get access to payroll and HR tools built for small businesses, and built in expertise for you."
      metaTitle="Why Symply"
    >
      <div className={SymplyStyle.symplyHeader}>
        <div className={SymplyStyle.symplyTopContainer}>
          <div className={SymplyStyle.symplyHeaderContainer}>
            <Text
              lg="54px"
              sm="40px"
              fontFamily="Moret"
              color="white"
              styleLG={{
                marginBottom: '20px',

                lineHeight: '40px',
              }}
              styleSM={{
                lineHeight: '45px',
                marginBottom: '16px',
              }}
            >
              It’s Called <b>Symply</b> for a Reason.
            </Text>
          </div>
          <div className={SymplyStyle.symplyContentContainer}>
            <Text
              lg="20px"
              sm="16px"
              fontFamily="Barlow"
              color="white"
              styleLG={{
                width: '58%',
                lineHeight: '30px',
                textAlign: 'center',
                marginBottom: '46px',
              }}
              styleSM={{ lineHeight: '24px', marginBottom: '46px' }}
            >
              We’re not kidding when we say that Symply is the easiest payroll platform possible.
              When you partner with Symply, you get access to
              <b> payroll and HR tools made for small businesses</b>, alongside built-in expertise
              for you.
            </Text>
          </div>
        </div>

        <iframe
          className={SymplyStyle.vimeoStyle}
          src="https://player.vimeo.com/video/423803353"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        />
      </div>
      <WhyChooseSymply />
      <div className={SymplyStyle.secondRowContainer}>
        <Text
          fontFamily="Moret"
          color="#211E5E"
          lg="54px"
          sm="40px"
          styleSM={{
            lineHeight: '45px',
            marginBottom: '16px',
            paddingLeft: '3%',
            paddingRight: '3%',
            marginTop: '25px',
          }}
        >
          Easily the Easiest.
        </Text>
        <Text
          fontFamily="Barlow"
          color="#211E5E"
          lg="20px"
          sm="16px"
          styleLG={{
            textAlign: 'center',
            width: '58%',
          }}
          styleSM={{
            marginBottom: '30px',
            paddingLeft: '3%',
            paddingRight: '3%',
          }}
        >
          We’re obsessive about making Symply so easy-to-use that anyone can run payroll. Get up-and
          running in a few quick steps.
        </Text>
        {SymplyList.map((symply: any, key: number) => (
          <div
            className={
              key % 2 === 0 ? SymplyStyle.secondRowInnerRow : SymplyStyle.secondRowInnerRowReverse
            }
            key={key}
          >
            <div className={SymplyStyle.secondRowInnerRowLeft}>
              <img src={symply.image} style={{ width: '100%', height: 'auto', margin: 0 }} />
            </div>
            <div className={SymplyStyle.secondRowInnerRowRight}>
              <Text
                fontFamily="Moret"
                color="#211E5E"
                lg="40px"
                sm="18px"
                styleLG={{
                  lineHeight: '47px',
                  paddingLeft: key % 2 === 0 ? '15%' : 0,
                }}
                styleSM={{
                  paddingTop: '21px',
                  paddingBottom: '18px',
                  paddingLeft: '10.625%',
                  paddingRight: '10.625%',
                  // paddingBottom: '18px'
                }}
              >
                {symply.title}
              </Text>
              <Text
                fontFamily="Barlow"
                color="#211E5E"
                lg="20px"
                sm="14px"
                styleLG={{
                  lineHeight: '30px',
                  paddingLeft: key % 2 === 0 ? '15%' : 0,
                }}
                styleSM={{
                  paddingLeft: '10.625%',
                  paddingRight: '10.625%',
                  marginBottom: '36px',
                }}
              >
                {symply.content}
              </Text>
            </div>
          </div>
        ))}
      </div>
      <div className={SymplyStyle.securityComContainer}>
        <div className={SymplyStyle.securityComRowLeft}>
          <Text
            fontFamily="Barlow"
            color="#211E5E"
            lg="20px"
            sm="14px"
            styleLG={{ marginBottom: '35px' }}
            styleSM={{ marginBottom: '16px', lineHeight: '24px' }}
          >
            SIMPLICITY BACKED BY SECURITY
          </Text>
          <Text
            fontFamily="Barlow"
            color="#4E4E4E"
            lg="20px"
            sm="14px"
            styleSM={{ lineHeight: '21px' }}
          >
            The Symply app is hosted in the Amazon cloud to ensure highest security possible, as
            well as highest load and app speeds and reliable access. All of your private information
            entered within the app is encrypted and secured. And, we promise never to share your
            information or data with anyone.
          </Text>
          <a href="/security-gdpr" style={{ textDecoration: 'none', boxShadow: 'none' }}>
            <div className={SymplyStyle.securityComButtonContainer}>
              <button className={SymplyStyle.securityComButton}>
                <Text fontFamily="Barlow" color="#211E5E" lg="17px" sm="14px">
                  <u>LEARN MORE</u>
                </Text>
                <img src={ArrowButton} style={{ margin: 0 }} />
              </button>
            </div>
          </a>
        </div>
        <div className={SymplyStyle.securityComRowRight}>
          <img src={SecurityCommitment} style={{ width: '400px', height: 'auto' }} />
        </div>
      </div>
      <BottomBanner />
    </BasicLayout>
  );
};

export default Symply;
