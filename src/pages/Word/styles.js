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

export const MainWordProperty = styled(WordProperty)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: capitalize;
  font-weight: 500;
  font-size: 25px;
  margin-bottom: 0;
`;

export const TranslateProperty = styled(WordProperty)`
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  font-size: 20px;
  color: grey;
`;

export const WordTitle = styled.span`
  font-weight: bold;
`;

export const WordPage = styled.div`
  display: flex;
`;

export const ImageWithFrequency = styled.div`
  position: relative;
  margin: 0 auto;
  max-width: 300px;
`;

export const FrequencyWrapper = styled.div`
  width: 20px;
  height: 20px;
  background: #abc0f3;
  display: inline-block;
  border-radius: 50%;
  position: absolute;
  top: -5px;
  right: -5px;
`;

export const MoreExamplesWrapper = styled.div`
  margin-top: 10px;
`;

export const Definition = styled.span`
  font-style: italic;
`;

export const Example = styled.span`
  font-style: italic;
`;
