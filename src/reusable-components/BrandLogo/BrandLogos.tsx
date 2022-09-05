import React from 'react';
import BrandStyle from './BrandLogos.module.css';
import Text from '../../symply-ui/Text';
import JIBLogo from '../../../content/assets/trustedBrands/JIB_logo.png';
import ButterCafeLogo from '../../../content/assets/trustedBrands/Butter_Cafe_logo.png';
import ShogunLogo from '../../../content/assets/trustedBrands/Shogun_logo.png';
import ValeriosLogo from '../../../content/assets/trustedBrands/Valerios_logo.png';

const logos = [
  { image: JIBLogo, name: 'JIB' },
  { image: ButterCafeLogo, name: 'ButterCafe' },
  { image: ShogunLogo, name: 'ShogunLogo' },
  { image: ValeriosLogo, name: 'Valerios' },
];

const BrandLogo = () => {
  return (
    <div className={BrandStyle.brandContainer}>
      <Text
        lg="28px"
        fontFamily="Barlow"
        color="#211E5E"
        style={{ lineHeight: '45px', filter: 'brightness(50%)' }}
      >
        Trusted by brands everywhere
      </Text>
      <ul className={BrandStyle.logoContainer}>
        {logos.map((logo) => {
          const { image, name } = logo;
          return (
            <li className={BrandStyle.logo} key={name}>
              <img src={image} />
            </li>
          );
        })}
      </ul>
      {/* <Button style={{ padding: '10px 20px', marginTop: '5px' }} variant="secondary">
        See why restaurants love Symply
      </Button> */}
    </div>
  );
};

export default BrandLogo;
