import styled from 'styled-components';

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
    line-height: 1;
    position: relative;
    display: inline-block;
    font-weight: 400;
    white-space: nowrap;
    text-align: center;
    border: 1px solid #d9d9d9;
    box-shadow: 0 2px 0 rgba(0, 0, 0, 0.015);
    cursor: pointer;
    transition: all 0.3s cubic-bezier(0.645, 0.045, 0.355, 1);
    user-select: none;
    touch-action: manipulation;
    padding: 8px 15px;
    font-size: 14px;
    border-radius: 4px;
    color: rgba(0, 0, 0, 0.65);
    background-color: #fff;
  }
`;
