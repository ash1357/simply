import React, { useEffect } from 'react';
import Subscribe from '../reusable-components/Subscribe/Subscribe';
import BottomBanner from '../reusable-components/BottomBanner/BottomBanner';
import Text from '../symply-ui/Text';
import { Grid } from '../symply-ui/Layout';
import ResourcesStyle from '../pages-css/resources.module.css';
import BasicLayout from '../layout/BasicLayout';
import { window } from 'browser-monads';

const ResourcesList = [
  {
    title: 'Why Symply',
    subtitle:
      'Wondering if Symply is the right fit for your company? Find out how Symply has impacted other companies and its benefits here.',
    link: '/symply',
  },
  {
    title: 'Client Support',
    subtitle:
      'Access on-demand assistance 24/7 at our searchable Help Center, or reach out to a support representative within your Symply account.',
    link: 'https://support.symply.io/',
  },
  {
    title: 'Education & Tools',
    subtitle:
      'Find articles, guides, downloadable templates and other tools to simplify your tasklist and support your small business.',
    link: 'http://blog.symply.io/',
  },
];

const Resources = (props) => {
  const { location } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BasicLayout
      title="Helpful Tools & Resources for Small Businesses"
      path={location?.pathname}
      metaTitle="Helpful Tools & Resources for Small Businesses"
      description="Simplify the way you manage your small business with articles, tools and resources on managing your workforce, challenging the status quo and navigating these uncertain times."
    >
      <div className={ResourcesStyle.headerContainer}>
        <div>
          <Text
            lg="54px"
            fontFamily="Moret"
            color="#211E5E"
            style={{ lineHeight: '54px', marginBottom: '25px' }}
          >
            Useful Resources for Your Small Business
          </Text>
        </div>
        <div className={ResourcesStyle.headerSubtitle}>
          <Text lg="20px" fontFamily="Barlow" color="#211E5E">
            Simplify the way you manage your small business with our articles, tools and resources
            on managing your workforce, challenging the status quo and navigating compliance.
          </Text>
        </div>
      </div>
      <div className={ResourcesStyle.firstRowContainer}>
        <Text lg="40px" fontFamily="Moret" color="#211E5E" style={{ lineHeight: '40px' }}>
          What Are You Looking For?
        </Text>
        <Grid mainAxisAlignment="space-evenly">
          {ResourcesList.map((resource) => {
            const { title, subtitle, link } = resource;
            return (
              <div className={ResourcesStyle.gridContainer} key={title}>
                <div className={ResourcesStyle.gridInnerFirstRow}>
                  <Text lg="24px" fontFamily="Moret" color="#211E5E">
                    {title}
                  </Text>
                </div>
                <div className={ResourcesStyle.gridInnerSecondRow}>
                  <Text lg="16px" fontFamily="Barlow" color="#4E4E4E">
                    {subtitle}
                  </Text>
                </div>
                <div className={ResourcesStyle.gridInnerThirdRow}>
                  <a href={link} style={{ textDecoration: 'none', boxShadow: 'none' }}>
                    <Text lg="14px" fontFamily="Barlow" color="#211E5E">
                      <u>LEARN MORE</u>
                    </Text>
                  </a>
                </div>
              </div>
            );
          })}
        </Grid>
      </div>
      <Subscribe />
      <BottomBanner />
    </BasicLayout>
  );
};

export default Resources;
