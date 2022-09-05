import React from 'react';
import BasicLayout from '../BasicLayout';
import Header, { InfoListContentType } from './Header';
import FirstRow, { FirstRowContentType, HeaderListContentType } from './FirstRow';

interface SuccessLayoutType {
  title: string;
  HeaderTitleList: string[];
  InfoList: InfoListContentType[];
  backgroundColor: string;
  mobileColor: string;
  path: string;
  description: string;
  metaTitle: string;
  HeaderList: HeaderListContentType[];
  FirstRowList: FirstRowContentType[];
  logo: string;
}

const SuccessLayout = (props: SuccessLayoutType) => {
  const {
    title,
    path,
    description,
    metaTitle,
    HeaderTitleList,
    InfoList,
    backgroundColor,
    HeaderList = [],
    FirstRowList = [],
    logo,
  } = props;

  return (
    <BasicLayout title={title} path={path} description={description} metaTitle={metaTitle}>
      <Header
        logo={logo}
        HeaderTitleList={HeaderTitleList}
        InfoList={InfoList}
        backgroundColor={backgroundColor}
      />
      <FirstRow HeaderList={HeaderList} FirstRowList={FirstRowList} />
    </BasicLayout>
  );
};

export default SuccessLayout;
