import styled from 'styled-components';
import { Card } from 'antd';

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
