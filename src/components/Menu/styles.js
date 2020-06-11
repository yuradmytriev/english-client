import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { spacing } from '../../constants/spacing';

export const MenuWrapper = styled.div`
  background: #001529;
  width: 100px;
`;

export const MenuItem = styled(Link)`
  background-color: #1890ff;
  color: #fff;
  display: block;
  margin-bottom: 15px;
  padding: 10px;
  text-align: center;
`;

export const MenuLayout = styled.div`
  display: flex;
`;

export const Content = styled.div`
  padding: ${spacing.base};
`;
