import styled from 'styled-components';
import { Typography } from 'antd';

const { Paragraph } = Typography;

export const WordWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 5rem;
  max-width: 340px;
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
  margin-bottom: 30px;
  font-size: 17px;
`;

export const WordLabel = styled.div`
  position: relative;
  margin-top: 20px;
  &:before {
    content: '${props => props.title}: ';
    font-size: 12px;
    position: absolute;
    top: -15px;
  }
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
  margin-top: 5px;
`;

export const Text = styled(Paragraph)`
  margin-bottom: 0 !important;
  display: inline-block;
`;

export const WordPronunciationWrapper = styled.div`
  position: absolute;
  bottom: 2px;
  background: white;
  padding: 5px;
  padding-bottom: 2px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 0;
  right: 2px;
  font-size: 17px;
`;
