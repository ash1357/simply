import React, { useState, useMemo, Fragment } from 'react';
import Text from '../../symply-ui/Text';
import WhyOthersLoveSymplyStyle from './WhyOthersLoveSymply.module.css';
// tslint:disable-next-line: no-submodule-imports
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import QuotesList from '../../list/quotes.json';
import { useBreakpoint } from 'gatsby-plugin-breakpoints';
import Person from '../../../content/assets/person.svg';

const WhyOthersLoveSymply = () => {
  const breakpoints = useBreakpoint();
  const isLargeScreen = useMemo(() => !breakpoints.md, [breakpoints]);
  const initialHoverValue = () => {
    const hoverObjectValue = {};
    QuotesList.forEach((quotes) => {
      const { label } = quotes;
      // assign all value by default `false`
      hoverObjectValue[label] = false;
    });

    return hoverObjectValue;
  };
  const [isHover, setIsHover] = useState(initialHoverValue());
  // The no of review in carousel is 6 for desktop, otherwise 1 in mobile
  const carouselNo = useMemo(() => (isLargeScreen ? 6 : 1), [isLargeScreen]);

  return (
    <div className={WhyOthersLoveSymplyStyle.mainContainer}>
      <div className={WhyOthersLoveSymplyStyle.titleContainer}>
        <Text fontFamily="Moret" lg="40px" color="#211E5E" style={{ lineHeight: '47px' }}>
          See Why Others Love Symply
        </Text>
      </div>
      <div className={WhyOthersLoveSymplyStyle.carouselOuterContainer}>
        <Carousel
          autoPlay
          autoFocus={false}
          showStatus={false}
          showArrows={false}
          showThumbs={false}
          infiniteLoop
          renderIndicator={(clickHandler, isSelected, index, label) =>
            isSelected ? (
              <li
                className={WhyOthersLoveSymplyStyle.carouselIndicator}
                style={{ background: '#211E5E' }}
                aria-label={`Selected: ${label} ${index + 1}`}
                title={`Customer Testimonial ${index + 1}`}
              />
            ) : (
              <li
                className={WhyOthersLoveSymplyStyle.carouselIndicator}
                style={{ background: 'white' }}
                onClick={clickHandler}
                onKeyDown={clickHandler}
                value={index}
                key={index}
                role="button"
                tabIndex={0}
                title={`Customer Testimonial ${index + 1}`}
                aria-label={`${label} ${index + 1}`}
              />
            )
          }
        >
          {[
            ...Array(
              isLargeScreen
                ? Math.floor((QuotesList.length - 1) / carouselNo) + 1
                : QuotesList.length,
            ),
          ].map((_, i) => {
            return (
              <div className={WhyOthersLoveSymplyStyle.carouselContainer} key={i}>
                {QuotesList.slice(i * carouselNo, (i + 1) * carouselNo).map((quoteInfo, index) => {
                  const { quote, name, label, company } = quoteInfo;
                  const charactersCount = isLargeScreen ? 65 : 250;
                  const editedQuote = isHover[label] ? quote : quote.substring(0, charactersCount);
                  return (
                    <Fragment key={`${label}-${index}`}>
                      <div
                        className={WhyOthersLoveSymplyStyle.testimonialContainerLG}
                        onMouseEnter={() =>
                          setIsHover({
                            ...initialHoverValue(),
                            [label]: true,
                          })
                        }
                        onMouseLeave={() => setIsHover(initialHoverValue())}
                      >
                        <div className={WhyOthersLoveSymplyStyle.profileImageContainer}>
                          <img
                            src={Person}
                            alt="Person"
                            style={{ width: '50px', height: 'auto' }}
                          />
                        </div>
                        <div className={WhyOthersLoveSymplyStyle.quoteContainer}>
                          <Text
                            fontFamily="Moret"
                            lg="26px"
                            color="#211E5E"
                            style={{
                              lineHeight: '40px',
                              textAlign: 'center',
                            }}
                          >
                            {editedQuote}
                            {editedQuote !== quote && (
                              <>
                                ...
                                <span style={{ fontSize: '20px' }}>Read More</span>
                              </>
                            )}
                          </Text>
                        </div>
                        <div className={WhyOthersLoveSymplyStyle.profileContainer}>
                          <Text
                            fontFamily="Barlow"
                            lg="18px"
                            color="#211E5E"
                            style={{
                              lineHeight: '22px',
                              textAlign: 'center',
                            }}
                          >
                            {name}
                          </Text>
                          <Text
                            fontFamily="Barlow"
                            lg="16px"
                            color="#211E5E"
                            style={{
                              opacity: '.5',
                              lineHeight: '19px',
                              textAlign: 'center',
                            }}
                          >
                            {company}
                          </Text>
                        </div>
                      </div>
                      <div
                        className={WhyOthersLoveSymplyStyle.testimonialContainerSM}
                        onMouseEnter={() =>
                          setIsHover({
                            ...initialHoverValue(),
                            [label]: true,
                          })
                        }
                        onMouseLeave={() => setIsHover(initialHoverValue())}
                        key={label}
                      >
                        <div className={WhyOthersLoveSymplyStyle.profileImageContainer}>
                          <img
                            src={Person}
                            alt="Person"
                            style={{ width: '30px', height: 'auto' }}
                          />
                        </div>
                        <div className={WhyOthersLoveSymplyStyle.quoteContainer}>
                          <Text
                            fontFamily="Moret"
                            lg={'18px'}
                            color="#211E5E"
                            style={{
                              lineHeight: '22px',
                              textAlign: 'center',
                            }}
                          >
                            {editedQuote}
                            {editedQuote !== quote && (
                              <>
                                ...
                                <span style={{ fontSize: '14px' }}>Read More</span>
                              </>
                            )}
                          </Text>
                        </div>
                        <div className={WhyOthersLoveSymplyStyle.profileContainer}>
                          <Text
                            fontFamily="Barlow"
                            lg="14px"
                            color="#211E5E"
                            style={{
                              lineHeight: '16px',
                              textAlign: 'center',
                            }}
                          >
                            {name}
                          </Text>
                          <Text
                            fontFamily="Barlow"
                            lg="12px"
                            color="#211E5E"
                            style={{
                              opacity: '.5',
                              lineHeight: '16px',
                              textAlign: 'center',
                            }}
                          >
                            {company}
                          </Text>
                        </div>
                      </div>
                    </Fragment>
                  );
                })}
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
};

export default WhyOthersLoveSymply;
