import React, { useState, useEffect } from 'react';
import Lottie from 'react-lottie';
import Text from '../../symply-ui/Text';
import TopicalFocusStyle from './TopicalFocus.module.css';
import Payroll from '../../../content/assets/Animations/Payroll.json';
import Onboarding from '../../../content/assets/Animations/Onboarding.json';
import Reports from '../../../content/assets/Animations/Reporting.json';
import HR from '../../../content/assets/hr_vector_mobile.png';
import ArrowDown from '../../../content/assets/arrow-down.svg';
import ArrowBtn from '../../../content/assets/arrow-button.svg';

const TopicalFocusList = [
  {
    title: 'Hiring',
    content: {
      first:
        'Increase the amount of applicants now. With Symply hiring employees can scan qr code, text to apply, come through your own job board or automatically post to several others.',
      bold: '',
      last: '',
    },
    link: '/products/hiring',
    image: Onboarding,
  },
  {
    title: 'Onboarding',
    content: {
      first: `Gain key insights on your small business at the click of a button.
      With Symply’s `,
      bold: 'On-Demand Reports',
      last: `, you can quickly visualize your team’s data into
      shareable and downloadable reports. `,
    },
    link: 'products/onboarding',
    image: Reports,
  },
  {
    title: 'Payroll',
    content: {
      first: 'Experience the easiest payroll platform on the market. With ',
      bold: 'Guided Payroll',
      last: `,
      the instructions are built directly into the app so that your experience is the most
      efficient possible.`,
    },
    link: '/products/payroll',
    image: Payroll,
  },
];

const TopicalFocus = (props) => {
  const stateObj = () => {
    const output = {};
    for (let i = 0; i < TopicalFocusList.length; i++) {
      output[i] = false;
    }

    return output;
  };
  const [isHover, setHover] = useState(stateObj);
  const [isOpen, setOpen] = useState(stateObj);

  return (
    <div>
      <div className={TopicalFocusStyle.firstRowContainer}>
        <div className={TopicalFocusStyle.firstRowLeft}>
          <Text fontFamily="Barlow" lg="20px" color="rgba(33,30,94,0.5)">
            PRODUCTS
          </Text>
          <Text fontFamily="Moret" lg="40px" color="#211E5E">
            {props.content}
          </Text>
          {TopicalFocusList.map((tpclFocus, key) => (
            <div
              className={TopicalFocusStyle.columnListContainer}
              key={key}
              style={{ borderTop: key === 0 ? '1px solid #211E5E' : 'none' }}
              onMouseEnter={() => {
                setHover({
                  ...stateObj,
                  [key]: true,
                });
              }}
              onMouseLeave={() => {
                setHover({
                  ...stateObj,
                  [key]: false,
                });
              }}
            >
              <div className={TopicalFocusStyle.columnListImageContainerLG}>
                <Lottie
                  options={{
                    autoplay: true,
                    animationData: tpclFocus.image,
                  }}
                  width={140}
                  height={140}
                />
              </div>
              <div>
                <div className={TopicalFocusStyle.columnListInnerContainerLG}>
                  <Text lg="24px" fontFamily="Moret" color="#211E5E">
                    {tpclFocus.title}
                  </Text>
                  <div className={TopicalFocusStyle.columnListContentContainer}>
                    <Text fontFamily="Barlow" color="#4E4E4E" lg="16px">
                      {tpclFocus.content.first}
                      <b>{tpclFocus.content.bold}</b>
                      {tpclFocus.content.last}
                    </Text>
                  </div>
                </div>
                <div
                  className={TopicalFocusStyle.columnListInnerContainerSM}
                  onClick={() => {
                    setOpen({
                      ...stateObj,
                      [key]: !isOpen[key],
                    });
                  }}
                >
                  <div className={TopicalFocusStyle.columnListImageContainerSM}>
                    <img
                      src={ArrowDown}
                      style={{
                        width: '10px',
                        height: 'auto',
                        marginBottom: 0,
                        marginRight: '5px',
                        transform: isOpen[key] ? 'rotate(180deg)' : '',
                      }}
                    />
                  </div>
                  <Text lg="24px" fontFamily="Moret" color="#211E5E">
                    {tpclFocus.title}
                  </Text>
                </div>
                {isOpen[key] && (
                  <div className={TopicalFocusStyle.columnListContentContainer}>
                    <Text fontFamily="Barlow" color="#4E4E4E" lg="16px">
                      {tpclFocus.content.first}
                      <b>{tpclFocus.content.bold}</b>
                      {tpclFocus.content.last}
                    </Text>
                  </div>
                )}
                {isOpen[key] && (
                  <div className={TopicalFocusStyle.columnListButtonContainerSM}>
                    <a href={tpclFocus.link} style={{ textDecoration: 'none', boxShadow: 'none' }}>
                      <button className={TopicalFocusStyle.columnListButton}>
                        <Text lg="14px" fontFamily="Barlow" color="#211E5E">
                          <u>
                            <b>LEARN MORE</b>
                          </u>
                        </Text>
                        <img
                          src={ArrowBtn}
                          alt="Arrow Button"
                          style={{ marginLeft: '3px', marginBottom: 0 }}
                        />
                      </button>
                    </a>
                  </div>
                )}
              </div>
              <div
                className={TopicalFocusStyle.columnListButtonContainerLG}
                style={{
                  visibility: !isHover[key] ? 'hidden' : 'visible',
                }}
              >
                <a href={tpclFocus.link} style={{ textDecoration: 'none', boxShadow: 'none' }}>
                  <button className={TopicalFocusStyle.columnListButton}>
                    <Text lg="14px" fontFamily="Barlow" color="#211E5E">
                      <u>
                        <b>LEARN MORE</b>
                      </u>
                    </Text>
                    <img
                      src={ArrowBtn}
                      alt="Arrow Button"
                      style={{ marginLeft: '3px', marginBottom: 0 }}
                    />
                  </button>
                </a>
              </div>
            </div>
          ))}
        </div>
        <div className={TopicalFocusStyle.firstRowRight}>
          <img src={HR} style={{ width: '100%', height: 'auto' }} />
        </div>
      </div>
    </div>
  );
};

export default TopicalFocus;
