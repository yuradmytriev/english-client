import styled from 'styled-components';

export const WordWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 5rem;
`;

export const Image = styled.img`
  width: 100%;
  max-width: 300px;
  height: 200px;
  border-radius: 5px;
  border: 2px solid #c7c7c7;
  margin: 0 auto;
  display: block;
  margin-bottom: 10px;
`;

export const WordProperty = styled.div`
  margin-bottom: 10px;
  font-size: 17px;
`;

export const WordTitle = styled.span`
  font-weight: bold;
`;

export const WordPage = styled.div`
  display: flex;
`;

export const Color = styled.span`
  width: 30px;
  height: 30px;
  background: ${props => props.color};
  display: inline-block;
  border-radius: 50%;
`;
