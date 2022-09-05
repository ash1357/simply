module.exports = {
  siteMetadata: {
    // edit below
    title: 'Symply',
    author: 'Symply',
    description: 'The Best Payroll App in the USA.',
    siteUrl: 'https://symply.io',
    social: {
      twitter: 'demerjianm',
    },
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-s3',
      options: {
        bucketName: 'symply.io',
      },
    },
    `gatsby-plugin-netlify-cms`,
    { resolve: `gatsby-plugin-styled-components`, options: { ssr: false } },
    {
      resolve: 'gatsby-plugin-postcss',
      options: {
        postCssPlugins: [require('postcss-preset-env')({ stage: 0 })],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/assets`,
        name: 'assets',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        extensions: ['.mdx', '.md'],
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 590,
            },
          },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: {
              wrapperStyle: 'margin-bottom: 1.0725rem',
            },
          },
          {
            resolve: 'gatsby-remark-vscode',
          },
          {
            resolve: 'gatsby-remark-copy-linked-files',
          },
          {
            resolve: 'gatsby-remark-smartypants',
          },
        ],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Symply Software Inc.',
        short_name: 'Symply',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#211E5E',
        display: 'minimal-ui',
        icon: 'content/assets/head-icon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography',
      },
    },
    {
      resolve: 'gatsby-plugin-typescript',
      options: {
        isTSX: true, // defaults to false
        allExtensions: true, // defaults to false
      },
    },
    {
      resolve: 'gatsby-plugin-tslint',
      options: {
        test: /\.ts$|\.tsx$/,
        exclude: /(node_modules|cache|public)/,
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-image`,
    {
      resolve: 'gatsby-plugin-google-tagmanager',
      options: {
        id: 'GTM-WQ5WSKQ',
      },
    },
    {
      resolve: 'gatsby-plugin-breakpoints',
      options: {
        queries: {
          md: '(max-width: 1000px)',
          customMd: '(max-width: 1200px)',
        },
      },
    },
    {
      resolve: 'gatsby-plugin-zopfli',
      options: {
        extensions: ['css', 'html', 'js', 'ts', 'tsx', 'svg', 'png', 'json'],
        path: 'zopfli',
      },
    },
  ],
};
