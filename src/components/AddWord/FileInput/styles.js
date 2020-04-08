import styled from 'styled-components';
import { Icon } from 'antd';

export const Input = styled.input`
  & {
    border: 0;
    clip: rect(0, 0, 0, 0);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    white-space: nowrap;
    width: 1px;
  }

  & + label {
    position: relative;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    height: 105px;
    width: 100%;
    align-items: center;
    background-color: #fafafa;
    border: 1px dashed #d9d9d9;
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    color: #868181;
  }
`;

export const PlusIcon = styled(Icon)`
  font-size: 40px;
`;
