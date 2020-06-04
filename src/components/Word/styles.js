import styled from 'styled-components';
import { Card } from 'antd';

const { Meta: AntdMeta } = Card;

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardImage = styled.div`
  border-radius: 5px;
  width: 150px;
  height: 100px;
  display: block;
  background: url(${props => props.img}) center no-repeat;
  background-size: contain;
`;

export const Meta = styled(AntdMeta)`
  border-radius: 5px;
  width: 200px;

  & .ant-card-meta-title {
    font-size: 20px;
    margin-bottom: 0 !important;
  }

  & .ant-card-meta-description {
    font-size: 18px;
  }
`;

export const WordCard = styled(Card)`
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
  border: none !important;

  & .ant-card-body {
    height: 170px;
  }
`;

export const IconWrapper = styled.div`
  color: red;
  font-size: 18px;
  display: inline-block;
  cursor: pointer;
`;

export const IconContent = styled.div`
  color: red;
  cursor: pointer;
  & span {
    margin-left: 5px;
  }
`;
