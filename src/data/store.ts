import { baseURL } from 'dataConfig';
import Immutable from 'immutable';
import { normalize } from 'normalizr';
import { applyMiddleware, createStore as reduxCreateStore, Store } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import thunk from 'redux-thunk';
import { ThunkExtraArguments } from './utils/types';

import API from './api';
import reducers, { RootState } from './reducers';
import * as schema from './utils/schemas';

/* eslint-disable */
export let api;
/* eslint-enable */

const createStore = (): { store: Store<RootState> } => {
  const composeEnhancers = composeWithDevTools({
    serialize: {
      immutable: Immutable,
    },
  } as any);

  const thunkExtraArguments: ThunkExtraArguments = {
    schema,
    normalize,
  };

  const actionTimestamp = () => (next) => (action) =>
    next({
      ...action,
      timestamp: new Date(),
    });

  const store: Store<RootState> = reduxCreateStore(
    reducers,
    composeEnhancers(applyMiddleware(thunk.withExtraArgument(thunkExtraArguments), actionTimestamp) as any) as any,
  );

  api = new API(store, { baseURL });

  thunkExtraArguments.api = api;

  return { store };
};

export default createStore;
