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

export const Arrow = styled(Icon)`
  font-size: 35px;
  color: ${props => (props.disabled ? '#d6d6d6' : 'grey')};
`;

export const Video = styled.video`
  border-radius: 5px;
  max-width: 400px;
  width: 100%;
  height: 200px;
  display: block;
  margin-bottom: 10px;
`;
