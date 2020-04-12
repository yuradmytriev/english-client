import styled from 'styled-components';
import { Row } from 'antd';

export const WordContainer = styled.div`
  margin-bottom: 2rem;
`;

export const WordWrapper = styled(Row)`
  display: flex;
  flex-wrap: wrap;
`;

export const ToggleTranslate = styled.div`
  position: fixed;
  bottom: 120px;
  font-size: 34px;
  right: 26px;
  background: #fff;
`;
