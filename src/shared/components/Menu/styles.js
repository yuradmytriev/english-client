import styled from 'styled-components';
import { spacing } from 'shared/constants/spacing';

export const MenuWrapper = styled.div`
  background: #001529;
  width: 100px;

  @media (max-width: 480px) {
    right: 0;
    display: flex;
    width: 100%;
    bottom: 0;
    position: fixed;
  }
`;

export const MenuItem = styled.div`
  & a {
    color: #ffffff;
    display: block;
    padding: 10px;
    text-align: center;
  }
`;

export const MenuLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.div`
  padding: ${spacing.base};
  width: calc(100% - 100px);

  @media (max-width: 480px) {
    width: 100%;
  }
`;
