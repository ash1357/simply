import React, { CSSProperties, useMemo } from 'react';
import Text from '../Text';
import BoxCSSStyle from './Box.module.css';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

const Box = (props: any) => {
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);
  const BoxStyle: CSSProperties = {
    ...props.style,
    width: props.width || '393px',
    height: props.height || '245px',
  };

  return isLargeScreen ? (
    <div
      className={BoxCSSStyle.boxStyles}
      style={{
        ...BoxStyle,
        ...props.styleLG,
      }}
    >
      <div className={BoxCSSStyle.innerBoxStyles}>
        <Text
          fontFamily={props.fontFamily || 'Barlow'}
          lg={props.lg || '20px'}
          color={props.color || 'white'}
          styleLG={{ lineHeight: '26px' }}
        >
          {props.children}
        </Text>
      </div>
    </div>
  ) : (
    <div
      className={BoxCSSStyle.boxStyles}
      style={{
        ...BoxStyle,
        ...props.styleSM,
      }}
    >
      <div className={BoxCSSStyle.innerBoxStyles}>
        <Text
          fontFamily={props.fontFamily || 'Barlow'}
          lg={props.lg || '20px'}
          color={props.color || 'white'}
          styleLG={{ lineHeight: '26px' }}
        >
          {props.children}
        </Text>
      </div>
    </div>
  );
};

export default Box;
