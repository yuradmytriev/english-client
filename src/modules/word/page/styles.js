import styled from 'styled-components';
import { Icon, Typography } from 'antd';
import { cardShadow, cardBorderRadius } from 'shared/constants/styles';

const { Paragraph } = Typography;

export const WordWrapper = styled.div`
  margin: 0 auto;
  margin-bottom: 5rem;
  max-width: 550px;
  width: 100%;
  background: #fff;
  padding: 20px;
  border-radius: ${cardBorderRadius};
  box-shadow: ${cardShadow};
`;

export const Image = styled.div`
  width: 100%;
  background: url(${props => props.src}) center no-repeat;
  max-width: 300px;
  height: 200px;
  border-radius: 5px;
  margin: 0 auto;
  display: block;
  margin-bottom: 10px;
  background-size: contain;
`;

export const WordProperty = styled.div`
  margin-bottom: 15px;
  font-size: 17px;
  background: #f5f5f5;
  padding: 2px 5px;
`;

export const WordLabel = styled.div`
  position: relative;
  margin-top: 20px;
    font-style: italic;
  
  &:before {
    content: '${props => props.title}: ';
    font-size: 12px;
    position: absolute;
    top: -20px;
    color: #335fff;
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
  background: #fff;
`;

export const TranslateProperty = styled(WordProperty)`
  display: flex;
  justify-content: center;
  text-transform: capitalize;
  font-size: 20px;
  color: grey;
  background: #fff;
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
  top: 5px;
  right: 5px;
`;

export const MoreExamplesWrapper = styled.div`
  margin-top: 5px;
`;

export const Text = styled.div`
  margin-bottom: 0 !important;
  display: inline-block;
`;

export const WordPronunciationWrapper = styled.div`
  position: absolute;
  bottom: 2px;
  padding: 5px;
  padding-bottom: 2px;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 3px;
  border-top-right-radius: 0;
  right: 2px;
  font-size: 17px;
`;

export const ImageUpdate = styled.label`
  position: absolute;
  top: 0;
  background: #00000080;
  width: 300px;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  cursor: pointer;
`;

export const Input = styled.input`
  display: none;
`;

export const Arrow = styled(Icon)`
  font-size: 35px;
  color: ${props => (props.disabled ? '#d6d6d6' : 'grey')};
  z-index: 1;
  position: fixed;
  top: 48%;
`;

export const ArrowLeft = styled(Arrow)`
  left: 1rem;
  color: ${props => (props.disabled ? '#d6d6d6' : 'grey')};
`;

export const ArrowRight = styled(Arrow)`
  right: 7rem;
  color: ${props => (props.disabled ? '#d6d6d6' : 'grey')};
`;
