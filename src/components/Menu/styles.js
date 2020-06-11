import styled from 'styled-components';
import { spacing } from '../../constants/spacing';

export const MenuWrapper = styled.div`
  background: #001529;
  width: 100px;
`;

export const MenuItem = styled.div`
  & a {
    color: #ffffff;
    display: block;
    margin-bottom: 15px;
    padding: 10px;
    text-align: center;
  }
`;

export const MenuLayout = styled.div`
  display: flex;
  height: 100%;
`;

export const Content = styled.div`
  padding: ${spacing.base};
  width: 100%;
`;
