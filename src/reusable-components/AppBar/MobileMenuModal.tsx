import React from 'react';
import AppBarStyles from './AppBar.module.css';
import { Link } from 'gatsby';
import Text from '../../symply-ui/Text';
import ArrowDownIcon from '../../../content/assets/arrow-down.svg';
import { useSpring, animated } from 'react-spring';
import { aboutMenu, resourceMenu, productsMenu } from '../../list/menu.json';
import Button from '../../symply-ui/Button/Button';

type openMenuProps = {
  open: boolean;
};

const MobileMenuModal = (props: openMenuProps) => {
  const { open } = props;
  const animationProps = useSpring({
    opacity: open ? 1 : 0,
    from: { opacity: 0 },
  });

  return open ? (
    <animated.div className={AppBarStyles.mobileMenuMainContainer} style={animationProps}>
      <div className={AppBarStyles.mobileMenuContentContainer}>
        <div>
          <Link
            className={AppBarStyles.menuDivSM}
            to="/about"
            style={{ textDecoration: 'none', boxShadow: 'none', margin: 0 }}
            onClick={() => (document.body.style.overflow = 'unset')}
          >
            <Text lg="14px" fontFamily="Barlow" color="#211E5E">
              About
            </Text>
            <img
              src={ArrowDownIcon}
              alt="Arrow Down"
              style={{
                margin: 0,
                width: '7px',
                height: '7px',
                marginLeft: '3px',
              }}
            />
          </Link>
        </div>
        <div className={AppBarStyles.subMenuContainer}>
          {aboutMenu.map((about) => {
            const { link, title } = about;
            return (
              <div style={{ marginBottom: '10px' }} key={title}>
                <Link
                  className={AppBarStyles.menuDivSM}
                  to={link}
                  style={{
                    textDecoration: 'none',
                    boxShadow: 'none',
                    margin: 0,
                  }}
                  onClick={() => (document.body.style.overflow = 'unset')}
                >
                  <Text fontFamily="Barlow" lg="12px" color="#4E4E4E">
                    {title}
                  </Text>
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <Link
            className={AppBarStyles.menuDivSM}
            to="/products"
            style={{ textDecoration: 'none', boxShadow: 'none', margin: 0 }}
            onClick={() => (document.body.style.overflow = 'unset')}
          >
            <Text lg="14px" fontFamily="Barlow" color="#211E5E">
              Products
            </Text>
            <img
              src={ArrowDownIcon}
              alt="Arrow Down"
              style={{
                margin: 0,
                width: '7px',
                height: '7px',
                marginLeft: '3px',
              }}
            />
          </Link>
        </div>
        <div className={AppBarStyles.subMenuContainer}>
          {productsMenu.map((product) => {
            const { link, title } = product;
            return (
              <div style={{ marginBottom: '10px' }} key={title}>
                <Link
                  className={AppBarStyles.menuDivSM}
                  to={link}
                  style={{
                    textDecoration: 'none',
                    boxShadow: 'none',
                    margin: 0,
                  }}
                  onClick={() => (document.body.style.overflow = 'unset')}
                >
                  <Text fontFamily="Barlow" lg="12px" color="#4E4E4E">
                    {title}
                  </Text>
                </Link>
              </div>
            );
          })}
        </div>
        <div>
          <Link
            className={AppBarStyles.menuDivSM}
            to="/pricing"
            style={{ textDecoration: 'none', boxShadow: 'none', margin: 0 }}
            onClick={() => (document.body.style.overflow = 'unset')}
          >
            <Text lg="14px" fontFamily="Barlow" color="#211E5E">
              Pricing
            </Text>
          </Link>
        </div>
        <div>
          <Link
            className={AppBarStyles.menuDivSM}
            to="/resources"
            style={{ textDecoration: 'none', boxShadow: 'none', margin: 0 }}
            onClick={() => (document.body.style.overflow = 'unset')}
          >
            <Text lg="14px" fontFamily="Barlow" color="#211E5E">
              Resources
            </Text>
            <img
              src={ArrowDownIcon}
              alt="Arrow Down"
              style={{
                margin: 0,
                width: '7px',
                height: '7px',
                marginLeft: '3px',
              }}
            />
          </Link>
        </div>
        <div className={AppBarStyles.subMenuContainer}>
          {resourceMenu.map((feature) => {
            const { link, title } = feature;
            return (
              <div style={{ marginBottom: '10px' }} key={title}>
                <Link
                  className={AppBarStyles.menuDivSM}
                  to={link}
                  style={{
                    textDecoration: 'none',
                    boxShadow: 'none',
                    margin: 0,
                  }}
                  onClick={() => (document.body.style.overflow = 'unset')}
                >
                  <Text fontFamily="Barlow" lg="12px" color="#4E4E4E">
                    {title}
                  </Text>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
      <div className={AppBarStyles.mobileMenuFooterContainer}>
        <Link
          to="https://app.symply.io/login"
          style={{
            textDecoration: 'none',
            boxShadow: 'none',
          }}
        >
          <Button width="100%" height="56px">
            Log In
          </Button>
        </Link>
        {/* <div
        style={{
          marginTop: '50px',
          paddingRight: '10%',
          textDecoration: 'none',
          boxShadow: 'none',
        }}
      >
        <Button
          onClick={() => {
            if (openMenu) {
              window.scroll({ top: 0, left: 0 });
              document.body.style.overflow = 'unset';
            } else {
              document.body.style.overflow = 'hidden';
            }
            setOpenMenu(!openMenu);
            toggleModal();
          }}
          width="100%"
          height="56px"
          variant={'primary-inverted'}
        >
          Watch a Demo
        </Button>
      </div> */}
        <Link
          to="https://app.symply.io/signup"
          style={{
            textDecoration: 'none',
            boxShadow: 'none',
          }}
        >
          <Button width="100%" height="56px" variant="primary" style={{ marginTop: '20px' }}>
            Get Started
          </Button>
        </Link>
      </div>
    </animated.div>
  ) : (
    <></>
  );
};

export default MobileMenuModal;
