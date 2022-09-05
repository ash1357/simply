import React, { useEffect } from 'react';
import BottomBanner from '../../reusable-components/BottomBanner/BottomBanner';
import FeatureTemplate from '../../reusable-components/FeatureTemplatePage/FeatureTemplatePage';
import PayrollFeaturesPage from '../../../content/assets/payroll_features_page.png';
import Payroll from '../../../content/assets/payroll.png';
import PayrollSubmit from '../../../content/assets/payroll_submitted.png';
import BasicLayout from '../../layout/BasicLayout';
import { window } from 'browser-monads';

const GuidedPayroll = (props) => {
  const { location } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicLayout
      title="Full-Service, Online Payroll for Small Businesses"
      path={location?.pathname}
      metaTitle="Full-Service, Online Payroll for Small Businesses"
      description="Our full-service payroll platform built for small businesses makes it easy to pay employees. Our service includes unlimited payrolls, automatic tax filings, and employee self-service portals."
    >
      <FeatureTemplate
        title="Pay Your People, the Symply Way."
        subtitle="Get a feel for the powerful platform that was built specifically for small businesses to help you simplify your workforce management."
        headerImage={PayrollFeaturesPage}
        image1={Payroll}
        image2={PayrollSubmit}
        titleItem2="Payroll that takes minutes, not hours."
        subtitleItem2="Symply saves you valuable time by guiding you through the steps, so for you, it’s easier and faster than ever to run payroll."
        titleItem3="Take the busy work off of your plate, we’ll handle it."
        subtitleItem3="With Symply’s automations and integrations, you can free up your to do list to focus on what’s really important: growing your business."
        list1={[
          'Full-service and Mobile Payroll',
          'Clean, easy-to-use user interface',
          'Guided Payroll experience',
        ]}
        list2={[
          'Automatic Penalty Proof Tax Filings and Payments',
          'Direct Deposit',
          'Garnishments',
        ]}
      />
      <BottomBanner />
    </BasicLayout>
  );
};

export default GuidedPayroll;
