import styled from 'styled-components';
import { Row } from 'antd';

export const WordWrapper = styled(Row)`
  display: flex;
  flex-wrap: wrap;
`;

export const LearnedWordsLayout = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ChangeWordsOrderLayout = styled.div`
  margin-top: 5px;
  margin-left: 10px;
`;

export const WordsCountContainer = styled.div`
  margin-top: 5px;
  margin-right: 10px;

  @media (max-width: 480px) {
    display: none;
  }
`;
