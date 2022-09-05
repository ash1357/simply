import React, { useEffect } from 'react';
import Text from '../symply-ui/Text';
import PressStyle from '../pages-css/press.module.css';
import BasicLayout from '../layout/BasicLayout';
import { window } from 'browser-monads';

const PressList = [
  {
    title: 'Vestibulum rutrum quam vitae fringilla tincidunt. Suspendis.',
    date: 'December 2018',
  },
  {
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut.',
    date: 'November 2018',
  },
  {
    title: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretiu.',
    date: 'September 2018',
  },
  {
    title: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis ne.',
    date: 'August 2018',
  },
  {
    title: 'Cras quis nulla commodo, aliquam lectus sed, blandit augue.',
    date: 'July 2018',
  },
  {
    title: 'Donec facilisis tortor ut augue lacinia, at viverra est sem.',
    date: 'June 2018',
  },
  {
    title: 'In hac habitasse platea dictumst. Vivamus adipiscing fermen.',
    date: 'May 2018',
  },
  {
    title: 'Curabitur lobortis id lorem id bibendum. Ut id consectetur.',
    date: 'April 2018',
  },
];

const SymplyMediaList = [
  {
    title: 'In hac habitasse platea dictumst. Vivamus adipiscing fermentum quam volutpa.',
  },
  {
    title: 'Fusce vehicula dolor arcu, sit amet blandit dolor mollis nec. Donec viverra.',
  },
  {
    title: 'Mauris non tempor quam, et lacinia sapien. Mauris accumsan eros eget libero.',
  },
  {
    title: 'Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesu.',
  },
];

const Press = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <BasicLayout
      title="Symply Press Room"
      metaTitle="Symply Press Room"
      description="See Symply in the news. Get our most recent press coverage, press releases, and press resources."
    >
      <div className={PressStyle.mainContainer}>
        <div className={PressStyle.mainRowLeft}>
          <div>
            <Text fontFamily="Moret" lg="40px" color="#211E5E">
              Press Releases
            </Text>
            <Text
              fontFamily="Barlow"
              lg="20px"
              color="#211E5E"
              style={{ marginTop: '19px', marginBottom: '52px' }}
            >
              Nam dapibus nisl vitae elit fringilla rutrum. Aen.
            </Text>
          </div>
          <div>
            {PressList.map((press) => {
              const { title, date } = press;
              return (
                <div className={PressStyle.mapContainer} key={title}>
                  <Text fontFamily="Moret" lg="24px" color="#211E5E">
                    <u>{title}</u>
                  </Text>
                  <Text fontFamily="Barlow" lg="16px" color="#4E4E4E">
                    {date}
                  </Text>
                </div>
              );
            })}
          </div>
          <div>
            <Text
              fontFamily="Moret"
              lg="40px"
              color="#211E5E"
              style={{ marginTop: '81px', marginBottom: '19px' }}
            >
              Symply in the Media
            </Text>
            <Text fontFamily="Barlow" lg="20px" color="#211E5E">
              Cras quis nulla commodo, aliquam lectus sed, blan.
            </Text>
          </div>
          <div>
            {SymplyMediaList.map((media) => {
              const { title } = media;
              return (
                <div key={title}>
                  <Text fontFamily="Moret" lg="24px" color="#211E5E">
                    <u>{title}</u>
                  </Text>
                </div>
              );
            })}
          </div>
        </div>
        <div className={PressStyle.mainRowRight}>
          <Text fontFamily="Barlow" lg="20px" color="#211E5E">
            DOWNLOADS
          </Text>
          <Text fontFamily="Barlow" lg="20px" color="#211E5E">
            Logos
          </Text>
          <Text fontFamily="Barlow" lg="16px" color="#4E4E4E">
            <u>Download all (PNG. 0.1MB)</u> <br />
            <u>Download all (Vector EPS. 0.6MB)</u>
          </Text>
        </div>
      </div>
    </BasicLayout>
  );
};

export default Press;
