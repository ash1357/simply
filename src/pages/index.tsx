import React, { useEffect } from 'react';
import Header from '../reusable-components/Header/Header';
import TopicalFocus from '../reusable-components/TopicalFocus/TopicalFocus';
import BottomBanner from '../reusable-components/BottomBanner/BottomBanner';
import WhyChooseSymply from '../reusable-components/WhyChooseSymply/whyChooseSymply';
import WhyOthersLoveSymply from '../reusable-components/WhyOthersLoveSymply/WhyOthersLoveSymply';
import BasicLayout from '../layout/BasicLayout';
import { window } from 'browser-monads';

const IndexPage = (props: any) => {
  const { location } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicLayout
      description="Symply offers the easiest-to-use Payroll and HR Tools built specifically for small businesses like yours."
      path={location?.pathname}
    >
      <Header />
      <TopicalFocus content="Payroll and HR Tools for small businesses that need more time in their days." />
      <WhyChooseSymply />
      <WhyOthersLoveSymply />
      <BottomBanner />
    </BasicLayout>
  );
};

export default IndexPage;
