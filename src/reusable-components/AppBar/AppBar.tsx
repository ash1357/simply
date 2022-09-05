import React, { useState, useEffect, useCallback, useMemo, useContext } from 'react';
import { Link, navigate } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Text from '../../symply-ui/Text';
import Hamburger from '../../../content/assets/bars.png';
import CloseIcon from '../../../content/assets/signs.png';
import ArrowDownIcon from '../../../content/assets/arrow-down.svg';
import ArrowBtn from '../../../content/assets/arrow-button.svg';
import AppBarStyles from './AppBar.module.css';
import Button from '../../symply-ui/Button/Button';
import MenuPopup from './MenuPopup';
import { aboutMenu, resourceMenu, productsMenu } from '../../list/menu.json';
import MobileMenuModal from './MobileMenuModal';
import ShoppingCartModal from './ShoppingCartModal';
import ShoppingCartButton from './ShoppingCartButton';
import { GlobalContext } from '../../../GlobalContext';
import DemoModal from '../DemoModal/DemoModal';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { window, document } from 'browser-monads';

const AppBar = (props: any) => {
  const { path = '/' } = props;
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);
  const initialIsMenuShownValue = { about: false, product: false, resource: false };
  const [isMenuShown, setIsMenuShown] = useState(initialIsMenuShownValue);
  const { chosenAddOn, handleChosenAddOn, resetChosenAddOn, openMenu, setOpenMenu } =
    useContext(GlobalContext);
  const [showModal, setShowModal] = useState(false);
  const [isYOffsetMoreThan20, setIsYOffsetMoreThan20] = useState(false);
  const chosenAddOnCount = useMemo(
    () => Object.keys(chosenAddOn ?? {}).filter((addOn) => chosenAddOn[addOn]).length,
    [chosenAddOn],
  );
  const toggleModal = () => {
    setShowModal((prev) => !prev);
  };

  /**
   * @description Handle opening and closing mobile menu modal
   */
  const handleMobileMenuModal = () => {
    if (openMenu.mobile) {
      window.scroll({ top: 0, left: 0 });
      document.body.style.overflow = 'unset';
    } else {
      document.body.style.overflow = 'hidden';
    }
    setOpenMenu({ ...openMenu, mobile: !openMenu.mobile });
  };

  /**
   * @description Handle opening and closing shopping cart modal
   */
  const handleShoppingCartModal = () => {
    if (!isLargeScreen) {
      if (openMenu.shoppingCart) {
        window.scroll({ top: 0, left: 0 });
        document.body.style.overflow = 'unset';
      } else {
        document.body.style.overflow = 'hidden';
      }
    }
    setOpenMenu({ ...openMenu, shoppingCart: !openMenu.shoppingCart });
  };

  /**
   * @description Handle `CONTINUE SHOPPING` in shopping cart modal
   */
  const handleShoppingCartContinueShopping = () => {
    // return the scroll bar back when closing the modal
    if (!isLargeScreen && openMenu.shoppingCart) {
      window.scroll({ top: 0, left: 0 });
      document.body.style.overflow = 'unset';
    }

    if (path?.includes('/pricing')) {
      setOpenMenu({ ...openMenu, shoppingCart: false });
    } else {
      navigate('/pricing');
    }
  };

  /**
   * @description Handle deleting chosen add ons
   *
   * @param name Name of the chosen add on based on `features.json`
   */
  const handleDeleteShoppingCart = (name: string) => {
    if (name === 'onboarding') {
      handleChosenAddOn({
        ...chosenAddOn,
        onboarding: false,
        payroll: false,
        laborLawPoster: false,
      });
    } else if (name === 'payroll') {
      handleChosenAddOn({ ...chosenAddOn, payroll: false, laborLawPoster: false });
    } else {
      handleChosenAddOn({ ...chosenAddOn, [name]: false });
    }
  };

  /**
   * @description Handle scrolling logic to give app bar box shadow
   */
  const handleScroll = useCallback(() => {
    const position = window.pageYOffset;
    if (position >= 20 !== isYOffsetMoreThan20) {
      setIsYOffsetMoreThan20(position >= 20);
    }
  }, [isYOffsetMoreThan20]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  useEffect(() => {
    // Close mobile menu if screen size change to large screen (width > 1000px)
    if (isLargeScreen && openMenu.mobile) {
      handleMobileMenuModal();
    }
  }, [isLargeScreen]);

  useEffect(() => {
    // Activate the scrollbar if the mobile menu is open and user clicked the logo
    if (path === '/' && document.body.style.overflow === 'hidden') {
      document.body.style.overflow = 'unset';
    }
  }, [path]);

  return (
    <>
      <div
        className={AppBarStyles.mainContainer}
        style={{
          position: !openMenu.mobile && isLargeScreen ? 'fixed' : 'static',
          boxShadow: isLargeScreen && isYOffsetMoreThan20 ? '3px 3px 4px #ccc' : 'none',
        }}
      >
        <div className={AppBarStyles.logoContainer}>
          <div style={{ flex: '1' }}>
            <Link to="/" style={{ textDecoration: 'none', boxShadow: 'none' }}>
              <StaticImage
                src="../../../content/assets/symply-logo.png"
                alt="Symply"
                className={AppBarStyles.logo}
              />
            </Link>
          </div>
          <div className={AppBarStyles.menuContainerLG}>
            <div
              className={AppBarStyles.menuDiv}
              style={{ justifyContent: 'flex-start' }}
              onMouseEnter={() => setIsMenuShown({ ...initialIsMenuShownValue, about: true })}
              onMouseLeave={() => setIsMenuShown(initialIsMenuShownValue)}
            >
              <div className={AppBarStyles.menuDivBtnContainer}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Link to="/about" style={{ textDecoration: 'none', boxShadow: 'none' }}>
                    <Text fontFamily="Barlow" color="#211E5E">
                      About
                    </Text>
                  </Link>
                  <img
                    src={ArrowDownIcon}
                    alt="Arrow Down"
                    style={{
                      margin: 0,
                      width: '7px',
                      height: '7px',
                      marginLeft: '7px',
                    }}
                  />
                </div>
              </div>
              <MenuPopup
                menu={aboutMenu}
                open={isMenuShown.about}
                onMouseLeave={() => setIsMenuShown(initialIsMenuShownValue)}
              />
            </div>
            <div
              className={AppBarStyles.menuDiv}
              style={{ justifyContent: 'flex-start' }}
              onMouseEnter={() => setIsMenuShown({ ...initialIsMenuShownValue, product: true })}
              onMouseLeave={() => setIsMenuShown(initialIsMenuShownValue)}
            >
              <div className={AppBarStyles.menuDivBtnContainer}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Link to="/products" style={{ textDecoration: 'none', boxShadow: 'none' }}>
                    <Text fontFamily="Barlow" color="#211E5E">
                      Products
                    </Text>
                  </Link>
                  <img
                    src={ArrowDownIcon}
                    alt="Arrow Down"
                    style={{
                      margin: 0,
                      width: '7px',
                      height: '7px',
                      marginLeft: '7px',
                    }}
                  />
                </div>
              </div>
              <MenuPopup
                menu={productsMenu}
                open={isMenuShown.product}
                onMouseLeave={() => setIsMenuShown(initialIsMenuShownValue)}
              />
            </div>
            <div
              className={AppBarStyles.menuDiv}
              onMouseEnter={() => setIsMenuShown(initialIsMenuShownValue)}
            >
              <Link to="/pricing" style={{ textDecoration: 'none', boxShadow: 'none' }}>
                <Text fontFamily="Barlow" color="#211E5E">
                  Pricing
                </Text>
              </Link>
            </div>
            <div
              className={AppBarStyles.menuDiv}
              style={{ justifyContent: 'flex-start' }}
              onMouseEnter={() => setIsMenuShown({ ...initialIsMenuShownValue, resource: true })}
              onMouseLeave={() => setIsMenuShown(initialIsMenuShownValue)}
            >
              <div className={AppBarStyles.menuDivBtnContainer}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}
                >
                  <Link to="/resources" style={{ textDecoration: 'none', boxShadow: 'none' }}>
                    <Text fontFamily="Barlow" color="#211E5E">
                      Resources
                    </Text>
                  </Link>
                  <img
                    src={ArrowDownIcon}
                    alt="Arrow Down"
                    style={{
                      margin: 0,
                      width: '7px',
                      height: '7px',
                      marginLeft: '7px',
                    }}
                  />
                </div>
              </div>
              <MenuPopup
                menu={resourceMenu}
                open={isMenuShown.resource}
                onMouseLeave={() => setIsMenuShown(initialIsMenuShownValue)}
              />
            </div>
            <div className={AppBarStyles.menuDiv}>
              <ShoppingCartButton
                onClick={handleShoppingCartModal}
                chosenAddOnCount={chosenAddOnCount}
              />
            </div>
            <div
              className={AppBarStyles.menuDiv}
              onMouseEnter={() => setIsMenuShown(initialIsMenuShownValue)}
            >
              <Link
                to="https://app.symply.io"
                style={{
                  textDecoration: 'none',
                  boxShadow: 'none',
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Text fontFamily="Barlow" color="#211E5E">
                  <u>LOGIN</u>
                </Text>
                <img
                  src={ArrowBtn}
                  alt="Secondary Button"
                  style={{
                    marginLeft: '3px',
                    marginBottom: 0,
                  }}
                />
              </Link>
            </div>
            {/* <div className={AppBarStyles.menuDiv}>
              <Button onClick={toggleModal} width="150px" height="48px" variant="primary-inverted">
                <b>Watch a Demo</b>
              </Button>
            </div> */}
            {!path?.includes('/pricing') && (
              <div className={AppBarStyles.menuDiv}>
                <Button
                  width="144px"
                  height="48px"
                  variant="primary"
                  onClick={() => navigate('/pricing')}
                >
                  <b>Get Started</b>
                </Button>
              </div>
            )}
          </div>
          <div className={AppBarStyles.menuContainerSM}>
            <ShoppingCartButton
              onClick={handleShoppingCartModal}
              chosenAddOnCount={chosenAddOnCount}
            />
            <button
              onClick={handleMobileMenuModal}
              style={{
                backgroundColor: 'transparent',
                border: 0,
                outline: 'none',
              }}
            >
              <img
                src={!openMenu.mobile ? Hamburger : CloseIcon}
                alt="Hamburger Menu"
                className={AppBarStyles.hamburgerIcon}
              />
            </button>
          </div>
        </div>
        <MobileMenuModal open={openMenu.mobile && !isLargeScreen} />
      </div>
      <ShoppingCartModal
        open={openMenu.shoppingCart}
        chosenAddOn={chosenAddOn}
        chosenAddOnCount={chosenAddOnCount}
        onDeleteCart={handleDeleteShoppingCart}
        onClose={handleShoppingCartModal}
        onContinueShopping={handleShoppingCartContinueShopping}
        onResetChosenAddOn={resetChosenAddOn}
      />
      <DemoModal
        open={showModal}
        toggleModal={toggleModal}
        title="Ready to see Symply in action?"
        subtitle="Submit the form below to watch a recorded demo"
      />
    </>
  );
};

export default AppBar;
