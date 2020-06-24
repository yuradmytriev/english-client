import styled from 'styled-components';
import { Row } from 'antd';
import { cardShadow } from 'shared/constants/styles';

export const WordsWrapper = styled(Row)`
  display: flex;
  flex-wrap: wrap;
`;

export const CategoriesLayout = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 5px;
`;

export const CategoryWrapper = styled.div`
  max-width: 367px;
  margin: 8px;

  & > .ant-collapse {
    box-shadow: ${cardShadow};
  }
`;
