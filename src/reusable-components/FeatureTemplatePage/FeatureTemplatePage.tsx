import React, { useMemo } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Text from '../../symply-ui/Text';
import ListView from '../../symply-ui/ListView';
import Sample from '../../../content/assets/check-mark.svg';
import Pricing from '../../../content/assets/-_Pricing.svg';
import FeatureTemplateStyle from './FeatureTemplatePage.module.css';
import Payroll from '../../../content/assets/payroll.png';
import SeePricing from '../../reusable-components/seePricing/seePricing';

const FeatureTemplatePage = (props: any) => {
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);
  return (
    <div>
      <div className={FeatureTemplateStyle.headerContainer}>
        <Text
          lg="54px"
          sm="40px"
          fontFamily="Moret"
          color="#211E5E"
          styleLG={{
            textAlign: 'center',
            lineHeight: '60px',
          }}
          styleSM={{
            lineHeight: '45px',
          }}
        >
          <b>{props.title}</b>
        </Text>
        <Text
          lg="20px"
          sm="16px"
          fontFamily="Barlow"
          color="#211E5E"
          styleLG={{
            width: '63%',
            textAlign: 'center',
            marginTop: '19px',
          }}
          styleSM={{
            lineHeight: '24px',
          }}
        >
          {props.subtitle}
        </Text>
        <div className={FeatureTemplateStyle.headerImageContainer}>
          <img
            src={props.headerImage || Payroll}
            style={{
              width: '100%',
              height: 'auto',
              margin: 0,
            }}
          />
        </div>
      </div>
      <div className={FeatureTemplateStyle.firstRowContainer}>
        <div className={FeatureTemplateStyle.firstRowLeft}>
          <div>
            <Text
              lg="30px"
              sm="18px"
              fontFamily="Moret"
              color="#211E5E"
              styleLG={{ lineHeight: '35px' }}
            >
              {props.titleItem2}
            </Text>
            <Text
              lg="16px"
              sm="14px"
              fontFamily="Barlow"
              color="#211E5E"
              style={{ marginTop: '10px', marginBottom: '10px' }}
            >
              {props.subtitleItem2}
            </Text>
            {props.list1 &&
              props.list1.length &&
              props.list1.map((l, index) => (
                <ListView src={Sample} key={index}>
                  {l}
                </ListView>
              ))}
          </div>
        </div>
        <div className={FeatureTemplateStyle.firstRowRight}>
          <img
            src={props.image1 || Payroll}
            style={{
              width: '100%',
              height: 'auto',
              margin: 0,
              marginBottom: isLargeScreen ? 0 : '20px',
              marginTop: isLargeScreen ? 0 : '36px',
            }}
          />
        </div>
      </div>
      <div className={FeatureTemplateStyle.secondRowContainer}>
        <div className={FeatureTemplateStyle.secondRowLeft}>
          <img
            src={props.image2 || Payroll}
            style={{
              width: '100%',
              height: 'auto',
              marginBottom: isLargeScreen ? 0 : '20px',
              marginTop: isLargeScreen ? 0 : '36px',
            }}
          />
        </div>
        <div className={FeatureTemplateStyle.secondRowRight}>
          <div>
            <Text
              lg="30px"
              sm="18px"
              fontFamily="Moret"
              color="#211E5E"
              styleLG={{ lineHeight: '35px' }}
            >
              {props.titleItem3}
            </Text>
            <Text
              lg="16px"
              sm="14px"
              fontFamily="Barlow"
              color="#211E5E"
              style={{ marginTop: '10px', marginBottom: '10px' }}
            >
              {props.subtitleItem3}
            </Text>
            {props.list2 &&
              props.list2.length > 0 &&
              props.list2.map((l, index) => (
                <ListView src={Sample} key={index}>
                  {l}
                </ListView>
              ))}
          </div>
        </div>
      </div>
      <SeePricing />
      <div className={FeatureTemplateStyle.featureResourceContainer}>
        <div className={FeatureTemplateStyle.featureResourceRowLeft}>
          <img src={Pricing} className={FeatureTemplateStyle.featureResourceImg} />
        </div>
        <div className={FeatureTemplateStyle.featureResourceRowRight}>
          <div>
            <Text
              fontFamily="Barlow"
              lg="20px"
              sm="14px"
              color="#211E5E"
              style={{ opacity: '0.5' }}
            >
              FEATURED RESOURCE
            </Text>
            <Text fontFamily="Moret" lg="30px" sm="22px" color="#211E5E">
              <b>Checklist: First TImers' Guide to Payroll</b>
            </Text>
            <Text fontFamily="Barlow" lg="16px" sm="14px" color="#211E5E">
              Is it your first time running payroll for your company? Download our checklist <br />
              with every step you need to take your first time running <br />
              payroll.
            </Text>
            <button style={{ border: 0, backgroundColor: 'transparent' }}>
              <u>
                <Text fontFamily="Barlow" lg="20px" color="#211E5E">
                  DOWNLOAD NOW
                </Text>
              </u>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeatureTemplatePage;
