import styled from 'styled-components';
import { Typography } from 'antd';

const { Paragraph } = Typography;

export const HighlightedPhrase = styled.span`
  font-size: 18px;
  text-align: center;
  font-style: italic;
  & span {
    background: #edff00;
    padding: 2px 5px;
    line-height: 1;
    border-radius: 2px;
  }
`;

export const Text = styled(Paragraph)`
  margin-bottom: 0 !important;
  display: inline-block;
`;
