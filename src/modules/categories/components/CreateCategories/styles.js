import styled from 'styled-components';

export const CreateCategoriesWrapper = styled.div`
  position: fixed;
  right: 28px;
  bottom: 165px;
  font-size: 34px;
  cursor: pointer;

  @media (max-width: 480px) {
    bottom: -5px;
    position: fixed;
    left: 140px;
  }
`;

export const InputLayout = styled.div`
  margin-bottom: 15px;
`;
