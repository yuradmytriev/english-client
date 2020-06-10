import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
  background: #fff;
  padding: 33px;
  border-radius: 2px;
  box-shadow: 0 0 0 1px rgba(63, 63, 68, 0.05),
    0 1px 3px 0 rgba(63, 63, 68, 0.15);
  display: inline-block;
  margin: 0 auto;
  font-size: 21px;
  width: 500px;
`;

export const Container = styled.div`
  display: flex !important;
  align-items: center;
  height: 94vh;
`;

export const ButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 175px;
  margin: 0 auto;
  margin-top: 20px;
`;

export const Word = styled.div`
  color: #000;
`;

export const Description = styled.div`
  color: #909090;
`;