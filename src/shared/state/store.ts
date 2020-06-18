import createSagaMiddleware from 'redux-saga';
import { createStore, applyMiddleware, compose } from 'redux';
import { rootReducer } from './rootReducers';
import { initialState } from './initialState';
import { rootSaga } from './rootSaga';

const ImmutableState = require('redux-immutable-state-invariant').default();

const sagaMiddleware = createSagaMiddleware();

declare global {
  interface Window {
    // eslint-disable-next-line no-undef
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const middleware =
  process.env.NODE_ENV !== 'production'
    ? [ImmutableState, sagaMiddleware]
    : [sagaMiddleware];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  initialState,
  composeEnhancer(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);

export default store;
