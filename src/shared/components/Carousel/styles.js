import styled from 'styled-components';
import { Icon } from 'antd';

export const Arrow = styled(Icon)`
  font-size: 35px;
  color: ${props => (props.disabled ? '#d6d6d6' : 'grey')};
  z-index: 1;
  position: fixed;
  top: 48%;
`;

export const ArrowLeft = styled(Arrow)`
  left: 1rem;
  color: ${props => (props.disabled ? '#d6d6d6' : 'grey')};
`;

export const ArrowRight = styled(Arrow)`
  right: 7rem;
  color: ${props => (props.disabled ? '#d6d6d6' : 'grey')};
`;
