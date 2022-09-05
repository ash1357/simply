import React, { useState, useEffect } from 'react';
import Text from '../symply-ui/Text';
import Button from '../symply-ui/Button/Button';
import Subscribe from '../reusable-components/Subscribe/Subscribe';
import BottomBanner from '../reusable-components/BottomBanner/BottomBanner';
import ToolsAndEducationStyle from '../pages-css/tools-and-education.module.css';
import Facebook from '../../content/assets/socialMedia/facebook.svg';
import Twitter from '../../content/assets/socialMedia/twitter.svg';
import BasicLayout from '../layout/BasicLayout';
import { window } from 'browser-monads';

const categoryList = ['ALL', 'PAYROLL', 'COMPLIANCE', 'HR AND HIRING', 'SMALL BUSINESS SUCCESS'];

interface SampleBlogDataType {
  category: string;
  title: string;
  content: string;
}

const sampleBlogData: SampleBlogDataType[] = [
  {
    category: 'PAYROLL',
    title: 'In hac habitasse platea dictumst platea dictumst Vivamus adipiscing.',
    content: `Cras quis nulla commodo, aliquam lectus sed, blandit augue. Cras ullamcorper
    bibendum bibendum. Duis tincidunt urna non pretium porta. Nam condimentum vitae ligula
    vel ornare. Phasellus at semper turpis. Nunc eu tellus tortor.`,
  },
  {
    category: 'HR AND HIRING',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut preti.',
    content: `Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim
    in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula
    nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula.`,
  },
  {
    category: 'COMPLIANCE',
    title: 'Nam dapibus nisl vitae elit fringilla rutrum. Aenean sollicitudin.',
    content: `Curabitur lobortis id lorem id bibendum. Ut id consectetur magna. Quisque volutpat
    augue enim, pulvinar lobortis nibh lacinia at. Vestibulum nec erat ut mi sollicitudin porttitor
    id sit amet risus. Nam tempus vel odio vitae aliquam. In imperdiet.`,
  },
  {
    category: 'SMALL BUSINESS SUCCESS',
    title: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed.',
    content: `Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus,
    scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta
    viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tinci.`,
  },
  {
    category: 'SMALL BUSINESS SUCESS',
    title: 'Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed.',
    content: `Donec facilisis tortor ut augue lacinia, at viverra est semper. Sed sapien metus,
    scelerisque nec pharetra id, tempor a tortor. Pellentesque non dignissim neque. Ut porta
    viverra est, ut dignissim elit elementum ut. Nunc vel rhoncus nibh, ut tinci.`,
  },
  {
    category: 'HR AND HIRING',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut preti.',
    content: `Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim
    in dolor euismod, id commodo mi consectetur. Curabitur at vestibulum nisi. Nullam vehicula
    nisi velit. Mauris turpis nisl, molestie ut ipsum et, suscipit vehicula.`,
  },
];

const ToolsAndEducation = (props) => {
  const { location } = props;
  const [categoryIndex, setCategoryIndex] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <BasicLayout
      title="Tools & Education"
      path={location?.pathname}
      metaTitle="Tools & Education"
      description="Payroll, HR, Compliance and Business Success tips and information to help you grow your small business."
    >
      <div className={ToolsAndEducationStyle.headerContainer}>
        <Text
          fontFamily="Moret"
          lg="54px"
          color="#211E5E"
          style={{
            lineHeight: '60px',
            marginBottom: '15px',
          }}
          styleLG={{
            textAlign: 'center',
          }}
        >
          Tools & Education
        </Text>
        <Text
          fontFamily="Barlow"
          lg="20px"
          color="#211E5E"
          style={{
            lineHeight: '30px',
          }}
          styleLG={{
            textAlign: 'center',
            width: '42%',
          }}
        >
          Nam porttitor blandit accumsan. Ut vel dictum sem, a pretium dui. In malesuada enim in
          dolor euismod, id commod.
        </Text>
      </div>
      <div className={ToolsAndEducationStyle.categoryContainer}>
        {categoryList.map((category: string, key: number) => (
          <div onClick={() => setCategoryIndex(key)} key={key}>
            <Text
              key={key}
              fontFamily="Barlow"
              lg="16px"
              color="#211E5E"
              style={{
                lineHeight: '28px',
                fontWeight: categoryIndex === key ? 'bold' : 'normal',
                transition: '.3s',
                cursor: 'pointer',
              }}
            >
              {category}
            </Text>
          </div>
        ))}
      </div>
      <div className={ToolsAndEducationStyle.blogContainer}>
        {sampleBlogData.map((blogData: SampleBlogDataType, key: number) => {
          if (categoryIndex === 0 || blogData.category === categoryList[categoryIndex]) {
            return (
              <div className={ToolsAndEducationStyle.blogGrid} key={key}>
                {/* <img src={} width="100%" height="auto" alt="Sample"/> */}
                <Text
                  fontFamily="Barlow"
                  lg="14px"
                  color="rgba(33,30,94,0.5)"
                  style={{ lineHeight: '28px' }}
                >
                  {blogData.category}
                </Text>
                <Text fontFamily="Moret" lg="24px" color="#211E5E" style={{ lineHeight: '30px' }}>
                  {blogData.title}
                </Text>
                <Text fontFamily="Barlow" lg="16px" color="#4E4E4E" style={{ lineHeight: '24px' }}>
                  {blogData.content}
                </Text>
                <div className={ToolsAndEducationStyle.widgetContainer}>
                  <button className={ToolsAndEducationStyle.button}>
                    <Text fontFamily="Barlow" lg="" color="#211E5E">
                      <u>READ MORE</u>
                    </Text>
                  </button>
                  <div>
                    <img
                      src={Facebook}
                      alt="Facebook"
                      width="10.29px"
                      height="auto"
                      style={{ marginBottom: 0, marginRight: '7px' }}
                    />
                    <img
                      src={Twitter}
                      alt="Facebook"
                      width="18.51px"
                      height="auto"
                      style={{ marginBottom: 0 }}
                    />
                  </div>
                </div>
              </div>
            );
          }
        })}
      </div>
      <div className={ToolsAndEducationStyle.buttonContainer}>
        <Button variant="secondary" width="29.5%" height="46px">
          VIEW MORE
        </Button>
      </div>
      <Subscribe />
      <BottomBanner />
    </BasicLayout>
  );
};

export default ToolsAndEducation;
