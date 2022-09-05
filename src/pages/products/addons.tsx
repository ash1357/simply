import React, { useEffect } from 'react';
import Text from '../../symply-ui/Text';
import SeePricing from '../../reusable-components/seePricing/seePricing';
import BottomBanner from '../../reusable-components/BottomBanner/BottomBanner';
import AddOnsIntegrationStyle from '../../pages-css/addons.module.css';
import Payroll from '../../../content/assets/-_Payroll-v2.svg';
import CompanyDetails from '../../../content/assets/-_Company_Details.svg';
import Guidance from '../../../content/assets/-_Guidance.svg';
import BasicLayout from '../../layout/BasicLayout';
import { window } from 'browser-monads';
import ECompLogo from '../../../content/assets/addons/ecomp.jpeg';
// redeploy
const AddOnsList = [
  {
    title: 'Payroll by Phone or Email',
    content: `Don’t want to worry about payroll and database management? With this package,
    we’ll handle those for you, and all you have to do is send us your payroll via phone or email.`,
    image: Payroll,
  },
  {
    title: 'Labor Law Poster Program',
    content: `We’ll help you maintain compliance by providing a brand new labor law poster each year,
    along with any updates as they come out. If you have multiple locations or complex compliance
    considerations, this add-on can save your small business valuable time and money.`,
    image: CompanyDetails,
  },
  {
    title: 'HR on Demand Expertise and Support',
    content: `Need extra support to maintain compliance and manage your workforce? With HR on Demand,
    you get additional HR guidance and unlimited on-demand expertise, templates and insights from our
    team of HR experts.`,
    image: Guidance,
  },
  {
    title: 'E-COMP',
    content:
      'Pay-As-You-Go Workers’ Compensation Insurance. Pay your premium as you pay your employees',
    image: ECompLogo,
    link: 'https://ecompnow.com/',
  },
  {
    title: 'ZayZoon',
    content: `ZayZoon gives employees instant access to their earned Wages On-Demand, at no cost to the employer. 
    Improve retention, reduce employee stress and save your business thousands in hiring costs with ZayZoon.`,
    image:
      'https://www.zayzoon.com/hubfs/ZayZoon%20Logo%20files%20(2022)/SVG/ZayZoon_Logomark%20Logotype%20Horizontal%20-%20Gradient.svg',
    link: 'https://www.zayzoon.com/',
  },
];

const AddOnsIntegration = (props) => {
  const { location } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicLayout
      title="Add-On Features for Additional Paroll and HR Needs"
      path={location?.pathname}
      metaTitle="Add-On Features for Additional Paroll and HR Needs"
      description="Our add-on features offer an extra layer of support and flexibility for your small business, and can be added to your Symply Pro account."
    >
      <div className={AddOnsIntegrationStyle.headerContainer}>
        <Text
          fontFamily="Moret"
          lg="54px"
          sm="40px"
          color="white"
          styleLG={{ lineHeight: 'normal' }}
          styleSM={{ lineHeight: '45px' }}
        >
          Add-ons & Integrations
        </Text>
        <Text
          fontFamily="Barlow"
          color="white"
          lg="20px"
          sm="16px"
          styleLG={{ marginTop: '10px', marginBottom: '19px' }}
          styleSM={{ marginTop: '16px', marginBottom: '32px' }}
        >
          With Symply, you get the most simple, clean experience and app possible to run payroll and
          manage your team. But our add-on features and integrations offer flexibility for companies
          that need additional HR or payroll support.
        </Text>
      </div>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          gap: 1,
          flexWrap: 'wrap',
          paddingLeft: '5%',
          paddingRight: '5%',
        }}
      >
        {AddOnsList.map((resource) => {
          const { title, content, image, link } = resource;
          return (
            <div className={AddOnsIntegrationStyle.gridContainer} key={title}>
              <div className={AddOnsIntegrationStyle.gridInnerFirstRow}>
                <Text lg="24px" fontFamily="Moret" color="#211E5E">
                  {title}
                </Text>
              </div>
              <div className={AddOnsIntegrationStyle.gridInnerSecondRow}>
                <Text lg="16px" fontFamily="Barlow" color="#4E4E4E">
                  {content}
                </Text>
              </div>
              <div className={AddOnsIntegrationStyle.gridInnerThirdRow}>
                <img
                  src={image}
                  alt="Symply Logo"
                  height="35px"
                  width="auto"
                  style={{ margin: 0 }}
                />
                {link && (
                  <a
                    href={link}
                    target="_blank"
                    style={{ textDecoration: 'none', boxShadow: 'none' }}
                  >
                    <Text lg="14px" fontFamily="Barlow" color="#211E5E">
                      <u>LEARN MORE</u>
                    </Text>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
      <SeePricing />
      <BottomBanner />
    </BasicLayout>
  );
};

export default AddOnsIntegration;
