import React from 'react';
import Text from '../../../symply-ui/Text';
import HeaderStyle from './index.module.css';

export interface InfoListContentType {
  title: string;
  subtitle: string;
}

export interface HeaderProps {
  logo: string;
  backgroundColor: string;
  HeaderTitleList: string[];
  InfoList: InfoListContentType[];
}

const Header = (props: HeaderProps) => {
  const { logo, backgroundColor, HeaderTitleList, InfoList } = props;

  return (
    <div className={HeaderStyle.outerContainer}>
      <div className={HeaderStyle.mainContainer} style={{ backgroundColor }}>
        <img src={logo} alt="Brand Logo" height="auto" width="50px" />
        <Text
          color="#211e5e"
          fontFamily="Moret"
          lg="50px"
          sm="35px"
          styleLG={{
            lineHeight: '55px',
            marginBottom: '19px',
          }}
          styleSM={{
            lineHeight: 'normal',
            marginBottom: '10px',
          }}
        >
          {HeaderTitleList[0]}
        </Text>
        <Text
          color="#211e5e"
          fontFamily="Barlow"
          lg="22px"
          sm="16px"
          styleLG={{ lineHeight: '32px', marginBottom: '37px' }}
          styleSM={{
            lineHeight: 'normal',
            marginBottom: '10px',
          }}
        >
          {HeaderTitleList[1]}
        </Text>
        <div className={HeaderStyle.infoContainer}>
          {InfoList.map((info: InfoListContentType) => {
            const { title, subtitle } = info;
            return (
              <div className={HeaderStyle.infoColumn}>
                <Text
                  color="#211e5e"
                  fontFamily="Barlow"
                  lg="16px"
                  style={{ lineHeight: '24px' }}
                  styleLG={{ marginBottom: '7px' }}
                >
                  {title}
                </Text>
                <Text
                  color="#211e5e"
                  fontFamily="Moret"
                  lg="19px"
                  sm="16px"
                  style={{ lineHeight: '26px' }}
                >
                  {subtitle}
                </Text>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Header;
