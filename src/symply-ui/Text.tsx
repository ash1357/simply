import React, { CSSProperties, ReactNode, useMemo } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';

type TextProps = {
  sm?: string | number;
  lg?: string | number;
  styleSM?: CSSProperties;
  styleLG?: CSSProperties;
  style?: CSSProperties;
  fontFamily?: 'Barlow' | 'Moret' | 'Arial';
  color?: string;
  children: string | string[] | ReactNode;
};

const Text = (props: TextProps) => {
  const { sm, lg, styleSM, styleLG, children, style, fontFamily, color, ...rest } = props;
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);

  const textStyle: CSSProperties = {
    color,
    fontFamily: fontFamily || 'Arial',
    ...style,
  };
  return isLargeScreen ? (
    <p
      style={{
        margin: 0,
        fontSize: lg || '14px',
        ...textStyle,
        ...styleLG,
      }}
      {...rest}
    >
      {children}
    </p>
  ) : (
    <p
      style={{
        margin: 0,
        fontSize: sm || lg || '14px',
        ...textStyle,
        ...styleSM,
      }}
      {...rest}
    >
      {children}
    </p>
  );
};

export default Text;
