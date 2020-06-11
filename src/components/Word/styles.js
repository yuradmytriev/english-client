import styled from 'styled-components';
import { Card } from 'antd';
import { cardShadow } from 'constants/styles';

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
  box-shadow: ${cardShadow};
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

export const DeleteWrapper = styled.div`
  color: #ff3c3c;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    color: #cc0000;
    transform: scale(1.1);
  }

  & span {
    margin-left: 5px;
  }
`;

export const MemorizedWrapper = styled(DeleteWrapper)`
  color: #5f5fff;
  margin-top: 10px;

  &:hover {
    color: #00009e;
  }
`;
