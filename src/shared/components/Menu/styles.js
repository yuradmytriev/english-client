import styled from 'styled-components';

export const MenuWrapper = styled.div`
  background: #001529;
  width: 100px;
  align-items: center;

  @media (max-width: 480px) {
    right: 0;
    width: 100%;
    bottom: 0;
    position: fixed;
    display: flex;
    justify-content: space-between;
  }
`;

export const MenuItem = styled.div`
  width: 100%;

  @media (max-width: 480px) {
    width: auto;
  }

  & a {
    color: #ffffff;
    display: block;
    padding: 10px;
    text-align: center;
  }
`;

export const MenuLayout = styled.div`
  display: flex;
  min-height: 100vh;
`;

export const Content = styled.div`
  width: calc(100% - 100px);

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const Links = styled.div`
  @media (max-width: 480px) {
    display: flex;
  }
`;

export const Actions = styled.div`
  position: fixed;
  bottom: 0;
  width: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 480px) {
    position: static;
    flex-direction: row;
    height: 1px;
  }
`;

export const AddWordLayout = styled.div`
  margin: 10px 0 20px 0;

  @media (max-width: 480px) {
    display: none;
  }
`;
