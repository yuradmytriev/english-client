import styled from 'styled-components';

export const ToggleTranslate = styled.div`
  position: fixed;
  bottom: 120px;
  font-size: 34px;
  right: 26px;
  cursor: pointer;

  @media (max-width: 480px) {
    bottom: -5px;
    position: fixed;
    left: 180px;
  }
`;
