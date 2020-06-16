import styled from 'styled-components';
import { Row } from 'antd';
import { cardShadow } from 'constants/styles';

export const WordsWrapper = styled(Row)`
  display: flex;
  flex-wrap: wrap;
`;

export const CategoriesLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 10px;
  justify-content: space-between;
`;

export const CategoryWrapper = styled.div`
  width: 373px;

  & > .ant-collapse {
    box-shadow: ${cardShadow};
  }
`;
