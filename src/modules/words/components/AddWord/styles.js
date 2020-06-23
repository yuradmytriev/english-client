import styled from 'styled-components';
import { Modal } from 'antd';

export const Container = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  cursor: pointer;
  z-index: 1;
  bottom: 15px;
  right: 15px;
  border-radius: 50%;
  background: #008dff;
  font-size: 35px;
  width: 50px;
  height: 50px;
  justify-content: center;
  color: #fff;
  box-shadow: 0px 3px 3px -2px rgba(0, 0, 0, 0.2),
    0px 3px 4px 0px rgba(0, 0, 0, 0.14), 0px 1px 8px 0px rgba(0, 0, 0, 0.12);
  transition: 0.5s;

  &:hover {
    transform: scale(1.1);
    background: #0481e6;
  }
`;

export const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const FormModal = styled(Modal)`
  & .ant-modal-body form:nth-child(2) {
    margin-top: 15px;
  }

  & .ant-modal-body > button {
    margin: 0 auto;
    display: block;
  }
`;
