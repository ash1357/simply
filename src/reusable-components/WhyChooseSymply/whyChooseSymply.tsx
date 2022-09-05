import React from 'react';
import { Grid } from '../../symply-ui/Layout';
import Text from '../../symply-ui/Text';
import Streamline from '../../../content/assets/whyChooseSimply/-_Streamlined.svg';
import Expertise from '../../../content/assets/whyChooseSimply/-_Expertise.svg';
import SaveMoney from '../../../content/assets/whyChooseSimply/-_Save_Money.svg';
import SaveTime from '../../../content/assets/whyChooseSimply/-_Save_Time-23.svg';
import Reporting from '../../../content/assets/whyChooseSimply/-_Reporting_v2.svg';
import AccountSetup from '../../../content/assets/whyChooseSimply/-_Account_Setup.svg';
import SymplyStyle from './whyChooseSymply.module.css';

const whyChooseSymplyList = [
  {
    title: 'Streamline Your Processes',
    content: 'We’ve simplified complex payroll and hiring processes into an easy step-by-step.',
    image: Streamline,
  },
  {
    title: 'Lean on Our Expertise',
    content: 'The team behind Symply has been managing small business payroll for 20 years. ',
    image: Expertise,
  },
  {
    title: 'Save Money',
    content: 'Don’t pay extra for features that your small business doesn’t need.',
    image: SaveMoney,
  },
  {
    title: 'Save Time',
    content:
      'Moving your payroll and HR processes to Symply will improve your time spent and efficiency.',
    image: SaveTime,
  },
  {
    title: 'Gain Business Insights',
    content: 'Understand how your business is doing with easy, on-demand data visualization.',
    image: Reporting,
  },
  {
    title: 'Choose Your Ideal Plan',
    content:
      'Symply has two simple plan options, based on how much time you want to spend each month.',
    image: AccountSetup,
  },
];

const whyChooseSymply = (props: any) => (
  <div className={SymplyStyle.mainContainer}>
    <div className={SymplyStyle.gridContainer}>
      <Text fontFamily="Barlow" lg="20px" sm="16px" color="rgba(33,30,94,0.5)">
        {props.subtitle || 'BENEFITS'}
      </Text>
      <Text lg="40px" sm="30px" fontFamily="Moret" color="#211E5E">
        {props.title || 'Why Choose Symply?'}
      </Text>
      <Text lg="20px" sm="16px" fontFamily="Barlow" color="#211E5E">
        As a business owner, you have a number of complicated things competing for your time. Symply
        lets you simplify the things you shouldn’t have to spend your time on, freeing you up to
        grow your business.
      </Text>
      <div className={SymplyStyle.gridInnerContainer}>
        <Grid mainAxisAlignment="flex-start" style={{ marginTop: '44px' }}>
          {whyChooseSymplyList.map((symply) => {
            const { title, content, image } = symply;
            return (
              <div className={SymplyStyle.symplyGrid} key={title}>
                <img src={image} className={SymplyStyle.symplyIcon} />
                <Text lg="30px" sm="18px" fontFamily="Moret" color="#211E5E">
                  {title}
                </Text>
                <Text fontFamily="Barlow" color="#4E4E4E" lg="16px" sm="16px">
                  {content}
                </Text>
              </div>
            );
          })}
        </Grid>
      </div>
      {/* Remove Button for now as it is not linked anywhere */}
      {/* Will be used for future release */}
      {/* <div className={SymplyStyle.buttonContainer}>
          <Button
            width={'300px'}
            height={'48px'}
            style={{
              marginTop: '90px',
              marginBottom: '60px'
            }}
          >
            SEE MORE
          </Button>
        </div> */}
    </div>
  </div>
);

export default whyChooseSymply;
