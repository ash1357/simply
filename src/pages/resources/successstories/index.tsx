import React, { useEffect } from 'react';
import BasicLayout from '../../../layout/BasicLayout';
import { window } from 'browser-monads';

const SuccessStories = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BasicLayout
      title="Success Stories"
      metaTitle="Success Stories"
      description="Find out how Symply has helped small businesses like yours to manage their teams more effectively and grow their business while saving time and money."
    />
  );
};

export default SuccessStories;
