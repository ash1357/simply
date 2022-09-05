import React from 'react';
import Text from '../../symply-ui/Text';
import Button from '../../symply-ui/Button/Button';
import SubscribeStyle from './Subscribe.module.css';

const Subscribe = () => {
  return (
    <div className={SubscribeStyle.secondRowContainer}>
      <div className={SubscribeStyle.secondRowInnerContainer}>
        <div className={SubscribeStyle.secondRowInnerRowLeft}>
          <Text fontFamily="Moret" lg="30px" color="#211E5E">
            Subscribe to receive free small business tools and resources from Symply.
          </Text>
        </div>
        <div className={SubscribeStyle.secondRowInnerRowRight}>
          <form className={SubscribeStyle.formContainer}>
            <input className={SubscribeStyle.inputContainer} placeholder="Email" />
            <Button variant="primary" height="46px" width="100%">
              <Text fontFamily="Barlow" lg="16px" color="#FFFFFF">
                SUBSCRIBE
              </Text>
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
