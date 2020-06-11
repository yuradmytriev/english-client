import styled from 'styled-components';
import { Menu as NavBar } from 'antd';
import { spacing } from '../../constants/spacing';

export const MenuLayout = styled.div`
  display: flex;
`;

export const Content = styled.div`
  padding: ${spacing.base};
`;

export const StyledNavBar = styled(NavBar)`
  width: 110px;
`;
