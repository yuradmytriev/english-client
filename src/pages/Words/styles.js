import styled from 'styled-components';
import { Row } from 'antd';

export const WordContainer = styled.div`
  margin-bottom: 2rem;
  border-radius: ${props => (props.areSeveralWords ? '2px' : '0')};
  box-shadow: ${props =>
    props.areSeveralWords
      ? '0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0px -5px #fff,' +
        '0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #fff,' +
        '0 20px 1px -9px rgba(0, 0, 0, 0.15);'
      : 'none'};
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
`;
