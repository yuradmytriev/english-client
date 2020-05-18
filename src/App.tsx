import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'router';
import store from 'state/store';
import { useVoidReader } from 'hooks';
import { Content } from './styles';

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
