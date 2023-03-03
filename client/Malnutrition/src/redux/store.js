import {applyMiddleware, createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import {rootReducer} from './reducers';

import ReduxThunk from 'redux-thunk';

let store;

export const getStore = () => {
  return store;
};

export const configureStore = preloadedState => {
  const middlewares = [ReduxThunk];
  const middlewareEnhancer = applyMiddleware(...middlewares);

  const enhancers = [middlewareEnhancer];
  const composedEnhancers = composeWithDevTools(...enhancers);

  store = createStore(rootReducer, preloadedState, composedEnhancers);

  return {store};
};
