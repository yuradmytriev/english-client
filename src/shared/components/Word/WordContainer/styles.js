import styled from 'styled-components';

export const WordContainer = styled.div`
  margin-bottom: 1rem;
  box-shadow: ${props =>
    props.areSeveralWords
      ? '0 1px 1px rgba(0, 0, 0, 0.15), 0 10px 0px -5px #fff,' +
        '0 10px 1px -4px rgba(0, 0, 0, 0.15), 0 20px 0 -10px #fff,' +
        '0 20px 1px -9px rgba(0, 0, 0, 0.15);'
      : 'none'};
`;
