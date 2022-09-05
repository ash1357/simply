import React, { useState, useMemo } from 'react';
import Button from '../../symply-ui/Button/Button';
import Text from '../../symply-ui/Text';
import CancelIcon from '../../../content/assets/cancel.svg';
import TrashIcon from '../../../content/assets/trash.svg';
import { useSpring, animated } from 'react-spring';
import AppBarStyles from './AppBar.module.css';
import featuresList from '../../list/features.json';
import PuffLoader from 'react-spinners/PuffLoader';
import AESEncryption from '../../../content/assets/aes_encryption.png';
import AWSLogo from '../../../content/assets/aws-logo.png';

type ShoppingCartProps = {
  open?: boolean;
  onClose?: () => void;
  chosenAddOn: object;
  chosenAddOnCount?: number;
  onDeleteCart?: (addOn: string) => void;
  onContinueShopping?: () => void;
  onResetChosenAddOn?: () => Promise<void>;
};

const ShoppingCartModal = (props: ShoppingCartProps) => {
  const {
    open = false,
    onClose,
    chosenAddOn = {},
    chosenAddOnCount = 0,
    onDeleteCart,
    onContinueShopping,
    onResetChosenAddOn,
  } = props;
  const isShoppingCartEmpty = useMemo(() => chosenAddOnCount === 0, [chosenAddOnCount]);
  const [loading, setLoading] = useState(false);
  const blackBackgroundanimationProps = useSpring({
    opacity: open ? 1 : 0,
    from: { opacity: 0 },
  });
  const mainContainerAnimationProps = useSpring({
    right: open ? 0 : -50,
    from: { right: 0 },
  });

  /**
   * @description Get the Feature data from `features.json` by parameter `name`
   *
   * @param name the name of the features referred in `features.json`
   * @returns JSON { title: string, name: string, content: string, perMonth: number, perEmployee: number };
   */
  const findFeaturesByName = (name: string) => {
    let selectedFeature: any;
    Object.keys(featuresList).forEach((featureType) => {
      const featureRes = featuresList[featureType].find((feature: any) => feature?.name === name);
      if (featureRes) {
        selectedFeature = featureRes;
      }
    });

    return selectedFeature;
  };

  /**
   * @description handling `CHECKOUT` button to redirect to the Symply App (app.symply.io) and reset
   * the cache `chosenAddOns` value
   */
  const handleSubmitShoppingCart = async () => {
    setLoading(true);
    let symplyAppSignUpLink = `${process.env.NODE_ENV === 'production' ? 'https://app.symply.io' : 'http://localhost:3000'
      }/signup?path=signUp`;
    let subscriptionPlan = ['onboarding'];
    const addOnList = [];
    Object.keys(chosenAddOn).forEach((addOn) => {
      if (chosenAddOn[addOn]) {
        console.log('addOn: ', addOn);
        switch (addOn) {
          case 'payroll':
            subscriptionPlan.push('payroll');
            break;
          case 'hiring':
            subscriptionPlan.push('hiring');
            break;
          case 'additionalPayrollSupport':
            addOnList.push(1);
            break;
          case 'laborLawPoster':
            addOnList.push(2);
            break;
          case 'hrOnDemand':
            addOnList.push(3);
            break;
          default:
            break;
        }
      }
    });

    symplyAppSignUpLink = symplyAppSignUpLink.concat(`&plan=${subscriptionPlan.length === 1 ? subscriptionPlan[0] : subscriptionPlan.join(',')}`);

    if (addOnList.length > 0) {
      symplyAppSignUpLink = symplyAppSignUpLink.concat(`&addOns=${addOnList.join(',')}`);
    }

    // Reset the value of chosen add on before redirecting
    await onResetChosenAddOn();
    window.location.replace(symplyAppSignUpLink);
  };

  return open ? (
    <animated.div
      className={AppBarStyles.shoppingCartBlackBackground}
      style={blackBackgroundanimationProps}
    >
      <animated.div
        className={AppBarStyles.shoppingCartMainContainer}
        style={mainContainerAnimationProps}
      >
        <div className={AppBarStyles.shoppingCartHeader}>
          <div>
            <Text fontFamily="Moret" lg="35px" color="#211E5E">
              Your Cart
            </Text>
            <Text fontFamily="Barlow" color="#4E4E4E" style={loading ? { display: 'none' } : {}}>
              {chosenAddOnCount === 0
                ? 'Your cart is currently empty.'
                : `You have ${chosenAddOnCount} items in your cart.`}
            </Text>
          </div>
          <img
            src={CancelIcon}
            height="50px"
            width="auto"
            alt="Cancel"
            className={AppBarStyles.shoppingCartCancelButton}
            onClick={onClose}
          />
        </div>
        {loading ? (
          <div className={AppBarStyles.shoppingCartLoadingContainer}>
            <PuffLoader color="#211E5E" loading={loading} />
            <Text fontFamily="Barlow" color="#211E5E" style={{ marginTop: '1rem' }}>
              Loading
            </Text>
          </div>
        ) : (
          <div className={AppBarStyles.shoppingCartContent}>
            {Object.keys(chosenAddOn ?? {}).map((addOn) => {
              if (chosenAddOn[addOn]) {
                const { title, perMonth } = findFeaturesByName(addOn);
                return (
                  <div key={title} className={AppBarStyles.shoppingCartAddOnsContainer}>
                    <div className={AppBarStyles.shoppingCartAddOnsLeftContainer}>
                      <Text fontFamily="Barlow" color="#211E5E">
                        <b>
                          {title} {addOn === 'payroll' && '(Include Onboarding)'}
                        </b>
                      </Text>
                      {
                        // @ts-ignore
                        !(addOn === 'onboarding' && chosenAddOn?.payroll) && (
                          <div
                            className={AppBarStyles.shoppingCartDeleteButtonContainer}
                            onClick={() => onDeleteCart(addOn)}
                          >
                            <img
                              src={TrashIcon}
                              height="15px"
                              width="auto"
                              style={{ marginBottom: 0 }}
                              alt="Trash"
                            />
                          </div>
                        )
                      }
                    </div>
                    <div>
                      <Text fontFamily="Moret" color="#211E5E" lg="20px">
                        $ {perMonth ?? 0}
                      </Text>
                      <Text fontFamily="Barlow" color="#4E4E4E">
                        per month
                      </Text>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        )}
        <div className={AppBarStyles.McAffeeLogoDiv}>
          <img src={AWSLogo} height="75px" width="auto" alt="AWS Logo" />
          <img src={AESEncryption} height="75px" width="auto" alt="AES Encryption" />
        </div>
        <div>
          <Button
            variant="primary"
            width="100%"
            height="46px"
            style={{ marginBottom: '15px' }}
            disabled={isShoppingCartEmpty || loading}
            onClick={handleSubmitShoppingCart}
          >
            CHECKOUT
          </Button>
          <Button width="100%" height="46px" onClick={onContinueShopping} disabled={loading}>
            CONTINUE SHOPPING
          </Button>
        </div>
      </animated.div>
    </animated.div>
  ) : (
    <></>
  );
};

export default ShoppingCartModal;
