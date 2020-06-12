import styled from 'styled-components';
import { Row } from 'antd';
import { cardShadow } from 'constants/styles';

export const WordsWrapper = styled(Row)`
  display: flex;
  flex-wrap: wrap;
`;

export const CategoriesWrapper = styled.div`
  margin-bottom: 20px;
  box-shadow: ${cardShadow};
`;
