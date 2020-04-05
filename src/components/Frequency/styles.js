import styled from 'styled-components';

export const Color = styled.span`
  width: 20px;
  height: 20px;
  background: ${props => props.color};
  display: inline-block;
  border-radius: 50%;
`;
