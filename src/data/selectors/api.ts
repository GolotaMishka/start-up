import { RootState } from '../reducers';

export const getState = (store: RootState) => store.api;

export const getUnauthorized = (store: RootState): boolean => getState(store).get('unauthorized');
export const getServerError = (store: RootState): boolean => getState(store).get('serverError');
export const getNotFound = (store: RootState): boolean => getState(store).get('notFound');
export const getConnectionError = (store: RootState): boolean => getState(store).get('connectionError');
export const getUnexpectedError = (store: RootState): boolean => getState(store).get('unexpectedError');

export const getSuccess = (store: RootState): boolean =>
  !getServerError(store) && !getNotFound(store) && !getConnectionError(store) && !getUnexpectedError(store);
export const getForbidden = (store: RootState): boolean => getState(store).get('forbidden');
