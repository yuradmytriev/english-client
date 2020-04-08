import styled from 'styled-components';
import { Card, Icon } from 'antd';

const { Meta: AntdMeta } = Card;

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CardBody = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CardImage = styled.img`
  border-radius: 5px;
  width: 150px;
  height: 100px;
  display: block;
`;

export const Meta = styled(AntdMeta)`
  border-radius: 5px;
  width: 150px;

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
`;

export const FrequencyWrapper = styled.div`
  margin-top: 5px;
`;

export const IconWrapper = styled.div`
  color: red;
  font-size: 18px;
`;
