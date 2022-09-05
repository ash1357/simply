import React, { useMemo } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import { Link } from 'gatsby';
import Text from '../../symply-ui/Text';
import Button from '../../symply-ui/Button/Button';
import footerStyle from './Footer.module.css';
import Logo from '../../../content/assets/symply-logo.png';
import Facebook from '../../../content/assets/socialMedia/facebook.svg';
import Twitter from '../../../content/assets/socialMedia/twitter.svg';
import LinkedIn from '../../../content/assets/socialMedia/linkedin.svg';

// Get the Year for the Footer
const Year = new Date().getFullYear();

interface LinkListType {
  link: string;
  title: string;
}

const LinkList: LinkListType[] = [
  {
    link: '/symply',
    title: 'Why Symply',
  },
  {
    link: '/products',
    title: 'Products',
  },
  {
    link: '/pricing',
    title: 'Pricing',
  },
  {
    link: '/about',
    title: 'About',
  },
  {
    link: '/contact',
    title: 'Contact Us',
  },
  {
    link: '/security-gdpr',
    title: 'Security & Privacy',
  },
  {
    link: '/terms',
    title: 'Terms',
  },
];
const Footer = () => {
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);
  return (
    <div>
      {isLargeScreen ? (
        <div className={footerStyle.footerContainerLG}>
          <div className={footerStyle.LGlogobtn}>
            <div className={footerStyle.footerRowLeftLG}>
              <Link
                to="/"
                style={{
                  textDecoration: 'none',
                  boxShadow: 'none',
                }}
              >
                <img src={Logo} className={footerStyle.footerLogoLG} />
              </Link>
            </div>
            <div className={footerStyle.footerRowRightLG}>
              <div className={footerStyle.footerInnerRowLG}>
                {LinkList.map((link: LinkListType, key: number) => (
                  <Text lg="16px" fontFamily="Barlow" color="#211E5E" key={key}>
                    <Link
                      to={link.link}
                      style={{
                        textDecoration: 'none',
                        boxShadow: 'none',
                        color: '#211E5E',
                      }}
                    >
                      {link.title}
                    </Link>
                  </Text>
                ))}
              </div>
              <div className={footerStyle.footerInnerRowLG} style={{ alignItems: 'flex-end' }}>
                <Link
                  to="https://pages.symply.io/talk-to-sales"
                  target="_blank"
                  style={{ textDecoration: 'none', boxShadow: 'none' }}
                >
                  <Button width="150px" height="46px" style={{ marginBottom: '10px' }}>
                    TALK TO SALES
                  </Button>
                </Link>
                <Link
                  to="https://support.symply.io"
                  style={{ textDecoration: 'none', boxShadow: 'none' }}
                >
                  <Button width="150px" height="46px" style={{ marginBottom: '60px' }}>
                    TALK TO SUPPORT
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div className={footerStyle.reserveContactContainer}>
            <Text fontFamily="Barlow" lg="16px" color="#211E5E">
              &copy;
              {` ${Year} Symply. All Rights Reserved.`}
            </Text>
            <div style={{ margin: '0 3% .5% 0' }}>
              <Link
                to="https://www.facebook.com/Symply.io/"
                target="_blank"
                style={{ textDecoration: 'none', boxShadow: 'none' }}
              >
                <img
                  src={Facebook}
                  style={{
                    height: '20px',
                    width: 'auto',
                    marginBottom: 0,
                    marginRight: '25px',
                  }}
                />
              </Link>
              <Link
                to="https://twitter.com/symply_io"
                target="_blank"
                style={{ textDecoration: 'none', boxShadow: 'none' }}
              >
                <img src={Twitter} style={{ height: '20px', width: 'auto', marginBottom: 0 }} />
              </Link>

              <Link
                to="https://www.linkedin.com/company/symplypayroll"
                target="_blank"
                style={{ textDecoration: 'none', boxShadow: 'none' }}
              >
                <img
                  src={LinkedIn}
                  style={{
                    height: '20px',
                    width: 'auto',
                    marginBottom: 0,
                    marginLeft: '25px',
                  }}
                />
              </Link>
            </div>
            <div>
              <a
                href="mailto:hello@symply.io"
                style={{ textDecoration: 'none', boxShadow: 'none' }}
              >
                <Text lg="16px" fontFamily="Barlow" color="#211E5E">
                  <u>hello@symply.io</u>
                </Text>
              </a>
              <Text lg="16px" fontFamily="Barlow" color="#211E5E">
                +1 888 852 1229
              </Text>
            </div>
          </div>
        </div>
      ) : (
        <div className={footerStyle.footerContainerSM}>
          <div className={footerStyle.footerLogoRowSM}>
            <Link
              to="/"
              style={{
                textDecoration: 'none',
                boxShadow: 'none',
              }}
            >
              <img src={Logo} className={footerStyle.footerLogoSM} />
            </Link>
            <div className={footerStyle.footerButtonContainerSM}>
              <Link
                to="https://pages.symply.io/talk-to-sales"
                target="_blank"
                style={{ textDecoration: 'none', boxShadow: 'none' }}
              >
                <Button width="100%" height="46px" style={{ marginBottom: '10px' }}>
                  TALK TO SALES
                </Button>
              </Link>
              <Link
                to="https://support.symply.io"
                style={{ textDecoration: 'none', boxShadow: 'none' }}
              >
                <Button width="100%" height="46px" style={{ marginBottom: '60px' }}>
                  TALK TO SUPPORT
                </Button>
              </Link>
            </div>
          </div>
          <div style={{ display: 'flex' }}>
            <div className={footerStyle.footerFirstRowSM}>
              <div className={footerStyle.footerFirstRowLeftSM}>
                {LinkList.map((link: LinkListType, key: number) => {
                  const { link: linkLink, title } = link;
                  if (link.title !== 'Contact Us') {
                    return (
                      <Text lg="16px" fontFamily="Barlow" color="#211E5E" key={title}>
                        <Link
                          to={linkLink}
                          style={{
                            textDecoration: 'none',
                            boxShadow: 'none',
                            color: '#211E5E',
                            cursor: 'pointer',
                          }}
                        >
                          {title}
                        </Link>
                      </Text>
                    );
                  }
                })}
              </div>
            </div>
            <div className={footerStyle.footerSecondRowSM}>
              <div className={footerStyle.footerSecondRowRightSM} style={{ paddingRight: '40px' }}>
                <Text lg="16px" fontFamily="Barlow" color="#211E5E">
                  <Link
                    to="/contact"
                    style={{
                      textDecoration: 'none',
                      boxShadow: 'none',
                      color: '#211E5E',
                    }}
                  >
                    Contact Us
                  </Link>
                </Text>
                <Text lg="16px" fontFamily="Barlow" color="#211E5E">
                  +1 888 852 1229
                </Text>
                <a
                  href="mailto:hello@symply.io"
                  style={{ textDecoration: 'none', boxShadow: 'none' }}
                >
                  <Text lg="16px" fontFamily="Barlow" color="#211E5E">
                    <u>hello@symply.io</u>
                  </Text>
                </a>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                  }}
                >
                  <Link
                    to="https://www.facebook.com/Symply.io/"
                    target="_blank"
                    style={{ textDecoration: 'none', boxShadow: 'none' }}
                  >
                    <img
                      src={Facebook}
                      style={{
                        height: '20px',
                        width: 'auto',
                        marginBottom: 0,
                        marginRight: '40px',
                      }}
                    />
                  </Link>
                  <Link
                    to="https://twitter.com/symply_io"
                    target="_blank"
                    style={{ textDecoration: 'none', boxShadow: 'none' }}
                  >
                    <img src={Twitter} style={{ height: '20px', width: 'auto', margin: 0 }} />
                  </Link>
                  <Link
                    to="https://www.linkedin.com/company/symplypayroll"
                    target="_blank"
                    style={{ textDecoration: 'none', boxShadow: 'none' }}
                  >
                    <img
                      src={LinkedIn}
                      style={{
                        height: '20px',
                        width: 'auto',
                        marginBottom: 0,
                        marginLeft: '40px',
                      }}
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className={footerStyle.footerLastRowSM}>
            <Text lg="14px" fontFamily="Barlow" color="#211E5E">
              &copy;
              {` ${Year} Symply. All Rights Reserved.`}
            </Text>
          </div>
        </div>
      )}
    </div>
  );
};

export default Footer;
