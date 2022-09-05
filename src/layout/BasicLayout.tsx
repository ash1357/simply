import React, { useContext, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import AppBar from '../reusable-components/AppBar/AppBar';
import Footer from '../reusable-components/Footer/Footer';
import { useStaticQuery, graphql } from 'gatsby';
import { GlobalContext } from '../../GlobalContext';

const BasicLayout = (props: any) => {
  const { path, title, description, metaTitle, keywords, children } = props;
  const { setOpenMenu } = useContext(GlobalContext);
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );
  const metaDescription = description || site?.siteMetadata?.description;
  const metaDetails = [
    {
      name: 'description',
      content: metaDescription,
    },
    {
      name: 'og:title',
      content: metaTitle || 'Symply',
    },
    {
      property: 'og:description',
      content: metaDescription,
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      name: 'twitter:card',
      content: 'summary',
    },
    {
      name: 'twitter:creator',
      content: site?.siteMetadata?.author,
    },
    {
      name: 'twitter:title',
      content: title,
    },
    {
      name: 'twitter:description',
      content: metaDescription,
    },
  ].concat(
    keywords?.length > 0
      ? {
          name: 'keywords',
          content: keywords.join(', '),
        }
      : [],
  );

  useEffect(() => {
    setOpenMenu({
      mobile: false,
      shoppingCart: false,
    });
  }, []);

  return (
    <div>
      <Helmet title={title || 'Symply'} meta={metaDetails}>
        <script type="application/ld+json">
          {`{
              "@context": "https://schema.org",
              "@type": "Corporation",
              "name": "Symply",
              "url": "https://symply.io/",
              "logo": "https://f.hubspotusercontent40.net/hubfs/7237498/Logo/SYM_LOGO_Blurple.png",
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "(888) 852-1229",
                "contactType": "customer service",
                "areaServed": "US",
                "availableLanguage": "en"
            },
                "sameAs": [
                  "https://www.facebook.com/Symply.io",
                  "https://twitter.com/symply_io",
                  "https://www.linkedin.com/company/symplypayroll"
                ]
            }`}
        </script>
        <script
          type="text/javascript"
          id="hs-script-loader"
          async
          defer
          src="//js-na1.hs-scripts.com/7237498.js"
        />
      </Helmet>
      <AppBar path={path} />
      {children}
      <Footer />
    </div>
  );
};

export default BasicLayout;
