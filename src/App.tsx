import React, { FC } from 'react';
import { Provider } from 'react-redux';
import store from 'shared/state/store';
import { useVoidReader } from 'shared/hooks';
import { Router } from './router';

const App: FC = () => {
  useVoidReader();

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
