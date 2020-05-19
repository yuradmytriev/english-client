import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'router';
// @ts-ignore
import styled from 'styled-components';
import { useVoidReader } from 'hooks';
import store from 'state/store';
import { spacing } from './constants/spacing';

const Content = styled.div`
  padding: ${spacing.base};
`;

const App: FC = () => {
  useVoidReader();

  return (
    <Provider store={store}>
      <Content>
        <Router />
      </Content>
    </Provider>
  );
};

export default App;
