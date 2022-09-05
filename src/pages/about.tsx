import React, { useEffect, useMemo } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Text from '../symply-ui/Text';
import AboutStyle from '../pages-css/about.module.css';
import Payroll from '../../content/assets/payroll.png';
import Sample1 from '../../content/assets/1.svg';
import Sample2 from '../../content/assets/2.svg';
import Sample3 from '../../content/assets/3.svg';
import Sample4 from '../../content/assets/4.svg';
import BasicLayout from '../layout/BasicLayout';
import { window } from 'browser-monads';

const valueList = [
  {
    image: Sample1,
    title: 'Simplicity',
    subtitle: 'We strive to make complicated tasks as simple as possible for our customers.',
  },
  {
    image: Sample2,
    title: 'Grit',
    subtitle:
      'We are passionate about our work, we don’t give up and we each take ownership of our contributions.',
  },
  {
    image: Sample3,
    title: 'Empowerment',
    subtitle:
      'We empower our customers to handle the complications of payroll with ease and our team to take initiative.',
  },
  {
    image: Sample4,
    title: 'Innovation & Curiosity',
    subtitle:
      'We don’t restrain ourselves to the status quo, but think limitlessly, challenging ourselves to create the best solutions.',
  },
];

const About = (props: any) => {
  const { location } = props;
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicLayout
      title="About Symply"
      path={location?.pathname}
      description="Our team has spent 20 years working with small businesses to create simple payroll and HR solutions that empower business owners with the most value and guidance possible."
      metaTitle="About Symply"
    >
      <div className={AboutStyle.headerContainer}>
        <div className={AboutStyle.headerInnerFirstRow}>
          <Text
            fontFamily="Moret"
            lg="54px"
            sm="40px"
            color="#211E5E"
            styleSM={{
              lineHeight: '45px',
            }}
          >
            About Symply
          </Text>
        </div>
        <div className={AboutStyle.headerInnerThirdRow}>
          <div className={AboutStyle.headerInnerThirdRowLeft}>
            <img src={Payroll} alt="Sample" style={{ margin: 0 }} />
          </div>
          <div className={AboutStyle.headerInnerThirdRowRight}>
            <Text
              fontFamily="Moret"
              lg="40px"
              sm="30px"
              color="#211E5E"
              style={{
                paddingLeft: '3%',
                paddingRight: '3%',
              }}
              styleSM={{
                lineHeight: '35px',
                marginTop: '16px',
                marginBottom: '6px',
              }}
            >
              The Symply Story
            </Text>
            <Text
              fontFamily="Barlow"
              lg="20px"
              sm="14px"
              color="#211E5E"
              styleSM={{
                lineHeight: '21px',
                paddingLeft: '3%',
                paddingRight: '3%',
              }}
            >
              Our team has been honored to spend the last 20 years working with small businesses to
              create payroll and HR solutions. During this time, we learned about the unique
              challenges they faced and realized there was no great product for small businesses
              that offer the best in experience, access <b>and</b> guidance.
              <br />
              <br />
              Growing businesses need key features from their payroll software like quick
              onboarding, easy-to-access reports and a simple, easy-to-use interface. The available
              providers weren’t performing on these specific needs.
              <br />
              <br />
              So, we created Symply.
              <br />
              <br />
              <b>
                Symply is a Guided Payroll Platform with the simplest and most intuitive experience
                possible.{' '}
              </b>{' '}
              With Symply, you don’t just get a software to run your payroll - our Guided Payroll
              platform walks you through the common payroll and HR challenges that small businesses
              face.
            </Text>
          </div>
        </div>
      </div>
      <div className={AboutStyle.firstRowContainer}>
        <div className={AboutStyle.firstRowInnerFirstRow}>
          <Text
            fontFamily="Moret"
            lg="40px"
            sm="30px"
            color="#211E5E"
            styleSM={{
              lineHeight: '35px',
            }}
          >
            What We Value
          </Text>
        </div>
        <div className={AboutStyle.firstRowInnerSecondRow}>
          <div className={AboutStyle.firstRowInnerSecondRowLeft}>
            {valueList.map((value) => {
              const { image, title, subtitle } = value;
              return (
                <div
                  className={AboutStyle.firstRowInnerSecondRowLeftInnerRow}
                  style={{ marginBottom: '30px' }}
                  key={title}
                >
                  <div style={{ flex: !isLargeScreen ? '' : '1' }}>
                    <img
                      src={image}
                      className={AboutStyle.ImageIcon}
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <div
                    style={{
                      marginLeft: '24.2px',
                      flex: !isLargeScreen ? '' : '5',
                    }}
                  >
                    <Text
                      fontFamily="Moret"
                      lg="24px"
                      sm="18px"
                      styleSM={{
                        lineHeight: '22px',
                        marginBottom: '6px',
                      }}
                      color="#211E5E"
                    >
                      {title}
                    </Text>
                    <Text
                      fontFamily="Barlow"
                      lg="20px"
                      sm="16px"
                      color="#211E5E"
                      styleSM={{
                        lineHeight: '24px',
                      }}
                    >
                      {subtitle}
                    </Text>
                  </div>
                </div>
              );
            })}
          </div>
          <div className={AboutStyle.firstRowInnerSecondRowRight}>
            <Text
              fontFamily="Moret"
              lg="30px"
              sm="22px"
              color="#211E5E"
              styleSM={{
                lineHeight: '27px',
              }}
            >
              Our vision is a world where complex problems have simple solutions.
            </Text>
          </div>
        </div>
      </div>
    </BasicLayout>
  );
};

export default About;
