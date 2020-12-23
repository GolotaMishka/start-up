import { combineReducers } from 'redux';

import auth from './auth';
import api from './api';
import clients from './clients';

export const entities = { clients };

const appReducers = combineReducers({
  auth,
  api,
  ...entities,
});

export default appReducers;

export type RootState = ReturnType<typeof appReducers>;
export type AuthState = ReturnType<typeof auth>;
