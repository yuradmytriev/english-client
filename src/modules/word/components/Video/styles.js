import { Icon } from 'antd';
import styled from 'styled-components';

export const VideoContainer = styled.div`
  display: inline-block;
`;

export const VideoWrapper = styled.div`
  display: flex;
  align-content: center;
  align-items: center;
`;

export const VideoBackground = styled.div`
  background: #e8e8e8;
  padding: 20px 5px 20px 5px;
  text-align: center;
  border-radius: 3px;
  margin-top: 30px;
`;

export const Arrow = styled(Icon)`
  font-size: 35px;
  color: ${props => (props.disabled ? 'grey' : '#d6d6d6')};
`;

export const Video = styled.video`
  border-radius: 5px;
  width: 100% !important;
  height: auto !important;
  margin-bottom: 10px;
  min-width: 430px;
`;
