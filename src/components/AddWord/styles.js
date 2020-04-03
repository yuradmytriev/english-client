import styled from 'styled-components';
import { colors } from 'constants/colors';

const { grey } = colors;

export const Container = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  position: fixed;
  z-index: 1;
  bottom: 15px;
  right: 15px;
  border-radius: 50%;
  background: #008dff;
  font-size: 35px;
  width: 50px;
  height: 50px;
  justify-content: center;
  color: #fff;
`;

export const Plus = styled.span`
  font-size: 40px;
  font-weight: 300;
  line-height: 1;
  color: ${grey};
`;

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;
