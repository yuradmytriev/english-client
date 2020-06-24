import styled from 'styled-components';

export const ToggleTranslate = styled.div`
  font-size: 34px;
  right: 26px;
  cursor: pointer;

  @media (max-width: 480px) {
    font-size: 34px;
    right: -20px;
    cursor: pointer;
    position: relative;
  }
`;
