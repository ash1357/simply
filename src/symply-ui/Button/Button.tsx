import React, { CSSProperties, useState, useMemo, ReactNode } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Text from '../Text';
import ButtonStyles from './Button.module.css';

type ButtonProps = {
  variant?: 'primary' | 'secondary' | 'primary-inverted' | 'secondary-inverted';
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  height?: string | number;
  width?: string | number;
  style?: CSSProperties;
  styleLG?: CSSProperties;
  styleSM?: CSSProperties;
  onClick?: () => void;
  children: string | ReactNode;
  fontSize?: string;
};

const Button = (props: ButtonProps) => {
  const {
    variant = 'secondary',
    disabled = false,
    type = 'button',
    height,
    width,
    style,
    styleLG,
    styleSM,
    onClick,
    children,
    fontSize,
    ...rest
  } = props;
  const [hover, setHover] = useState(false);
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);
  const buttonClassName = {
    primary: ButtonStyles.buttonPRI,
    secondary: ButtonStyles.buttonSEC,
    'primary-inverted': ButtonStyles.buttonINV,
    'secondary-inverted': ButtonStyles.buttonSECINV,
  };

  /**
   * @description Custom button style based on the chosen `variant`
   */
  const buttonVariantStyle = useMemo(() => {
    const defaultButtonStyle: CSSProperties = {
      ...style,
      height: height || 'auto',
      width: width || 'auto',
      borderRadius: '4px',
      outline: 'none',
      fontFamily: 'Barlow',
      fontSize: '16px',
      ...(isLargeScreen ? styleLG : styleSM),
    };
    switch (variant) {
      case 'primary':
        return {
          ...defaultButtonStyle,
          backgroundColor: disabled ? '#E3E3E3' : '#46E9B2',
          color: 'white',
        };
      case 'secondary':
        const secondaryColor = () => {
          if (disabled) {
            return '#E3E3E3';
          } else {
            return hover ? 'white' : '#211E5E';
          }
        };

        return {
          ...defaultButtonStyle,
          border: disabled ? '1px solid #E3E3E3' : '1px solid #211E5E',
          color: secondaryColor(),
        };
      case 'primary-inverted':
        const primaryInvertedColor = () => {
          if (disabled) {
            return '#E3E3E3';
          } else {
            return hover ? 'white' : '#46E9B2';
          }
        };

        return {
          ...defaultButtonStyle,
          border: disabled ? '1px solid #E3E3E3' : '1px solid #46E9B2',
          color: primaryInvertedColor(),
        };
      case 'secondary-inverted':
        return {
          ...defaultButtonStyle,
          border: disabled ? '1px solid #E3E3E3' : '1px solid #211E5E',
          color: disabled ? '#E3E3E3' : 'white',
        };
      default:
        return defaultButtonStyle;
    }
  }, [variant, disabled, height, width, hover]);

  return (
    <button
      type={type}
      disabled={disabled}
      className={buttonClassName[variant]}
      style={buttonVariantStyle}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}
    >
      {typeof children === 'string' ? (
        <Text style={{ fontSize: fontSize }} fontFamily="Barlow">
          {children}
        </Text>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
