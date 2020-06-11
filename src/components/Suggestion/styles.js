import styled from 'styled-components';
import { Button, Typography } from 'antd';

const { Paragraph } = Typography;

export const MoreSynonymsButton = styled(Button)`
  margin: 10px 0;
  display: block;
`;

export const WordLabel = styled.div`
  position: relative;
  margin-top: 20px;
  font-style: italic;
  &:before {
    content: '${props => props.title}: ';
    font-size: 13px;
    position: absolute;
    top: -20px;
    color: #335fff;
  }
`;

export const Text = styled(Paragraph)`
  margin-bottom: 0 !important;
  display: inline-block;
`;
