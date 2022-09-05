import React, { useMemo } from 'react';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import parse from 'html-react-parser';
import Text from '../../../symply-ui/Text';
import Box from '../../../symply-ui/Box/Box';
import FirstRowStyle from './index.module.css';

export interface HeaderListContentType {
  content: string;
}

export interface FirstRowContentType {
  title: string;
  subtitle: string[];
  textlist?: string[];
  quote?: string;
  quoteAuthor?: string;
}

export interface FirstRowProps {
  HeaderList: HeaderListContentType[];
  FirstRowList: FirstRowContentType[];
}

const FirstRow = (props: FirstRowProps) => {
  const { HeaderList, FirstRowList } = props;
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);

  return (
    <div className={FirstRowStyle.mainContainer}>
      <div className={FirstRowStyle.mainRowUp}>
        <Text color="#211e5e" fontFamily="Moret" lg="40px" styleLG={{ lineHeight: '44px' }}>
          Key Takeaways
        </Text>
      </div>
      <div className={FirstRowStyle.firstRowDown}>
        {HeaderList.map((header: any, key: number) => {
          const { content } = header;
          return (
            <Box
              key={key}
              width={isLargeScreen ? '385px' : '350px'}
              style={{ marginBottom: '10px' }}
            >
              {content}
            </Box>
          );
        })}
      </div>
      {FirstRowList.map((content: FirstRowContentType) => {
        const { title, subtitle, textlist, quote, quoteAuthor } = content;
        return (
          <div className={FirstRowStyle.mainRowDown}>
            <div className={FirstRowStyle.mainRowDownLeft}>
              <Text
                color="#211e5e"
                fontFamily="Moret"
                lg="30px"
                sm="25px"
                styleLG={{ lineHeight: '36px' }}
                styleSM={{ lineHeight: '36px' }}
              >
                {title}
              </Text>
            </div>
            <div className={FirstRowStyle.mainRowDownRight}>
              {subtitle.map((row: string) => {
                return (
                  <div className={FirstRowStyle.innerRight}>
                    <Text
                      fontFamily="Barlow"
                      lg="16px"
                      color="#4e4e4e"
                      styleLG={{
                        lineHeight: '24px',
                        marginBottom: '15px',
                      }}
                      styleSM={{
                        lineHeight: '28.5px',
                        paddingLeft: '5%',
                        paddingRight: '5%',
                        marginBottom: '25px',
                      }}
                    >
                      {parse(row)}
                    </Text>
                  </div>
                );
              })}
              {textlist && (
                <ul>
                  {textlist.map((textrow: string) => {
                    return (
                      <li style={{ marginLeft: '5%', marginBottom: '2px' }}>
                        <Text fontFamily="Barlow" lg="16px" color="#211e5e">
                          {textrow}
                        </Text>
                      </li>
                    );
                  })}
                </ul>
              )}

              {quote && (
                <div className={FirstRowStyle.quoteContainer}>
                  {/* <img
                    src={stroke}
                    style={
                      isLargeScreen
                        ? {
                            width: '14px',
                            height: 'auto',
                            marginLeft: '39px',
                          }
                        : {
                            marginLeft: '23px',
                            width: '14px',
                            height: 'auto',
                          }
                    }
                  /> */}
                  <Text
                    fontFamily="Barlow"
                    lg="28px"
                    sm="23px"
                    color="#211e5e"
                    styleLG={{
                      lineHeight: '28.5px',
                      marginBottom: '26px',
                      paddingLeft: '10%',
                      paddingRight: '10%',
                    }}
                    styleSM={{
                      lineHeight: '28.5px',
                      padding: '0 8%',
                      margin: '0px 12px',
                      marginBottom: '14px',
                    }}
                  >
                    {quote}
                  </Text>
                  <Text
                    color="#211e5e"
                    fontFamily="Barlow"
                    lg="19px"
                    sm="16px"
                    styleLG={{
                      lineHeight: '28.5px',
                      paddingLeft: '10%',
                    }}
                    styleSM={{
                      lineHeight: 'normal',
                      padding: '0 8%',
                      margin: '0px 12px',
                    }}
                  >
                    {quoteAuthor}
                  </Text>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FirstRow;
