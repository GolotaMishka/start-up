import jwtDecode from 'jwt-decode';
import { Dispatch } from 'redux';

import * as constants from '../constants/auth';
import { RootState } from '../reducers';
import { IToken, ThunkExtraArguments } from '../utils/types';

export const loginLocally = (credentials: string) => (
  dispatch: Dispatch,
  _: () => RootState,
  { api }: ThunkExtraArguments,
): boolean => {
  dispatch({ type: constants.SESSION_LOAD_START });

  try {
    api?.setAuthorizationHeader(credentials);
    const tokenData: IToken = jwtDecode(credentials);
    const payload = { userDetail: { role: tokenData.role, email: tokenData.email }, access: credentials };

    window.localStorage.setItem('auth', credentials);

    dispatch({
      type: constants.SESSION_LOADED,
      payload,
    });

    return true;
  } catch (e) {
    dispatch({
      type: constants.SESSION_LOAD_FAILED,
    });
    return false;
  }
};

export const getInitialCredentials = () => (
  dispatch: Dispatch,
  getState: () => RootState,
  { api }: ThunkExtraArguments,
): void => {
  const tokenFromStorage =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJldmlld2VyQGZpcmUucHdjLmJlIiwidW5pcXVlX25hbWUiOiJSZXZpZXdlciIsInJvbGUiOiJCRS1GSVJFLVJldmlld2VyIiwibmJmIjoxNjA4MDQwNzk4LCJleHAiOjE2Mzk1NzY3OTgsImlhdCI6MTYwODA0MDc5OCwiYXVkIjoidXJuOmZpcmV1YXQucHdjLmJlIn0.6_bTV8j65VvDNqtFf4JGR9rQX0boyTb_txwbFzKw9Ts';

  if (tokenFromStorage) {
    api?.setAuthorizationHeader(tokenFromStorage);
    const tokenData: IToken = jwtDecode(tokenFromStorage);
    const payload = { userDetail: { role: tokenData.role, email: tokenData.email }, access: tokenFromStorage };

    dispatch({
      type: constants.SESSION_LOADED,
      payload,
    });
  }
};

export const logout = () => (dispatch: Dispatch, _: () => RootState, { api }: ThunkExtraArguments): void => {
  api?.removeAuthorizationHeader();
  window.localStorage.removeItem('auth');
  dispatch({ type: constants.LOGOUT });
};
