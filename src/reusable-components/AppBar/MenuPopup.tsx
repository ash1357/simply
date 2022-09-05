import React from 'react';
import AppBarStyles from './AppBar.module.css';
import { Link } from 'gatsby';
import Text from '../../symply-ui/Text';

type MenuPopupProps = {
  menu?: object[];
  open?: boolean;
  onMouseLeave?: () => void;
};

const MenuPopup = (props: any) => {
  const { menu = [], open = false, onMouseLeave = () => {} } = props;
  return open ? (
    <div className={AppBarStyles.menuPopupContainer} onMouseLeave={onMouseLeave}>
      {menu.map((feature) => {
        const { title, link } = feature;
        return (
          <Link
            to={link}
            key={title}
            style={{
              textDecoration: 'none',
              boxShadow: 'none',
            }}
          >
            <button className={AppBarStyles.menuPopupBtn} style={{ outline: 'none' }}>
              <Text lg="16px" fontFamily="Barlow" color="#211E5E" style={{ textAlign: 'left' }}>
                {title}
              </Text>
            </button>
          </Link>
        );
      })}
    </div>
  ) : (
    <></>
  );
};

export default MenuPopup;
