import React, { useMemo, CSSProperties } from 'react';
import Text from '../../symply-ui/Text';
import Button from '../../symply-ui/Button/Button';
import CardStyles from './Card.module.css';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

export type CardProps = {
  title: string;
  onClick: () => void;
  isClicked: boolean;
  perMonth: number;
  content?: string;
  perEmployee?: number;
  haveBorderTop?: boolean;
  onLearnMoreClick?: () => void;
  isComingSoon?: boolean;
  styleSM?: CSSProperties;
  styleLG?: CSSProperties;
  isBannerUsed?: boolean;
  bannerText?: string;
  priceAdditionalText?: string;
};

const Card = (props: CardProps) => {
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.customMd, [breakpoints]);
  const {
    title,
    onClick,
    isClicked = false,
    perMonth,
    content,
    perEmployee,
    haveBorderTop = false,
    onLearnMoreClick,
    isComingSoon = false,
    styleSM = {},
    styleLG = {},
    isBannerUsed,
    bannerText,
    priceAdditionalText,
    ...rest
  } = props;
  const buttonVariant = useMemo(() => (isClicked === true ? 'secondary' : 'primary'), [isClicked]);
  const additionalStyle = useMemo(() => (isLargeScreen ? styleLG : styleSM), [isLargeScreen]);
  return (
    <div
      className={CardStyles.mainContainer}
      style={
        haveBorderTop
          ? { borderTop: '6px solid #211E5E', ...additionalStyle }
          : { ...additionalStyle }
      }
      {...rest}
    >
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Text
          fontFamily="Moret"
          lg="20px"
          sm="18px"
          color="#211E5E"
          style={{ textAlign: 'center' }}
        >
          {title}
        </Text>
        {isBannerUsed && (
          <div className={CardStyles.bannerContainer}>
            <Text fontFamily="Barlow" lg="16px" color="white">
              {bannerText}
            </Text>
          </div>
        )}
      </div>
      {content && (
        <Text fontFamily="Barlow" lg="16px" sm="14px" color="#211E5E">
          {content}
        </Text>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '10px',
          paddingBottom: '10px',
        }}
      >
        {perMonth !== null && perMonth !== undefined && (
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Text fontFamily="Moret" lg="20px" color="#211E5E" style={{ marginRight: '1%' }}>
                $
              </Text>
              <Text fontFamily="Moret" lg="32px" color="#211E5E" style={{ marginRight: '1%' }}>
                {perMonth}
              </Text>
            </div>
            <Text fontFamily="Barlow" lg="16px" color="#4E4E4E">
              Per Month{priceAdditionalText && ` ${priceAdditionalText}`}
            </Text>
          </div>
        )}
        {perMonth !== null &&
          perMonth !== undefined &&
          perEmployee !== null &&
          perEmployee !== undefined && (
            <div style={{ marginRight: '2%', marginLeft: '7%' }}>
              <Text fontFamily="Moret" lg="32px">
                +
              </Text>
            </div>
          )}
        {perEmployee !== null && perEmployee !== undefined && (
          <div style={{ display: 'flex', alignItems: 'center', flexDirection: 'column' }}>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <Text fontFamily="Moret" lg="25px" color="#211E5E" style={{ marginRight: '1%' }}>
                $
              </Text>
              <Text fontFamily="Moret" lg="32px" color="#211E5E" style={{ marginRight: '1%' }}>
                {perEmployee}
              </Text>
            </div>
            <Text fontFamily="Barlow" lg="14px" color="#4E4E4E">
              Per Employee <br />
              Per Month
            </Text>
          </div>
        )}
      </div>
      <div className={CardStyles.footerContainer}>
        {isComingSoon ? (
          <Text
            fontFamily="Barlow"
            color="#211E5E"
            lg="20px"
            style={{ textAlign: 'center', marginBottom: '5px' }}
          >
            <b>COMING SOON</b>
          </Text>
        ) : (
          <Button variant={buttonVariant} height="46px" onClick={onClick}>
            {isClicked ? 'ADDED TO CART ✓' : 'ADD TO CART'}
          </Button>
        )}
        {onLearnMoreClick && (
          <div className={CardStyles.learnMoreContainer} onClick={onLearnMoreClick}>
            <Text fontFamily="Barlow" color="#211E5E" style={{ cursor: 'pointer' }}>
              Learn more
            </Text>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
