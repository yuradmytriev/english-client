import styled from 'styled-components';

import { colors } from 'constants/colors';

const { grey } = colors;

export const Container = styled.div`
  border: 1px dashed ${grey};
  display: flex;
  padding: 1rem;
  align-items: center;
  flex-direction: column;
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 2rem;
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
