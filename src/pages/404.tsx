import React, { useMemo } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Button from '../symply-ui/Button/Button';
import BasicLayout from '../layout/BasicLayout';
import NotFoundStyles from '../pages-css/404.module.css';

const NotFoundPage = (props: any) => {
  const { location } = props;
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);

  return (
    <BasicLayout title="404: Not Found" metaTitle="404: Not Found" path={location?.pathname}>
      <div className={NotFoundStyles.mainContainer}>
        <h1>Not Found</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        <div>
          <a href="/" style={{ textDecoration: 'none', boxShadow: 'none' }}>
            <Button height="46px" width={isLargeScreen ? '296px' : '80vw'}>
              Go To Home Page
            </Button>
          </a>
        </div>
      </div>
    </BasicLayout>
  );
};

export default NotFoundPage;
