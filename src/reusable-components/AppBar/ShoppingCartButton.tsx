import React from 'react';
import AppBarStyles from './AppBar.module.css';
import Text from '../../symply-ui/Text';
import ShoppingCart from '../../../content/assets/shopping-cart.svg';

type ShoppingCartButtonProps = {
  chosenAddOnCount?: number;
  onClick?: () => void;
};

const ShoppingCartButton = (props: ShoppingCartButtonProps) => {
  const { chosenAddOnCount = 0, onClick } = props;
  return (
    <div className={AppBarStyles.shoppingCartButtonContainer} onClick={onClick}>
      {chosenAddOnCount > 0 && (
        <div className={AppBarStyles.shoppingCartButtonText}>
          <Text color="white" fontFamily="Barlow" lg="9px">
            <b>{chosenAddOnCount}</b>
          </Text>
        </div>
      )}
      <img
        src={ShoppingCart}
        height="25px"
        width="auto"
        alt="Shopping Cart"
        className={AppBarStyles.shoppingCartButton}
      />
    </div>
  );
};

export default ShoppingCartButton;
