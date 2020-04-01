import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'router';
import store from 'state/store';
import { Content } from './styles';

const App = () => (
  <Provider store={store}>
    <Content>
      <Router />
    </Content>
  </Provider>
);

export default App;
