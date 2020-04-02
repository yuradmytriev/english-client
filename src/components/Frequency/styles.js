import styled from 'styled-components';

export const Color = styled.span`
  width: 15px;
  height: 15px;
  background: ${props => props.color};
  display: inline-block;
  border-radius: 50%;
`;
