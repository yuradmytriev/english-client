import React, { FC } from 'react';
import { Provider } from 'react-redux';
import { Router } from 'router';
import { useVoidReader } from 'shared/hooks';
import store from 'state/store';

const App: FC = () => {
  useVoidReader();

  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
