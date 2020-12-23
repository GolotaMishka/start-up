import { fromJS } from 'immutable';
import * as constants from '../constants/api';

const initialState = fromJS({
  unauthorized: false,
  serverError: false,
  connectionError: false,
  notFound: false,
  forbidden: false,
  unexpectedError: false,
});

const reset = (state) =>
  state.withMutations((newState) => {
    newState.set('unauthorized', false);
    newState.set('serverError', false);
    newState.set('connectionError', false);
    newState.set('notFound', false);
    newState.set('forbidden', false);
    newState.set('unexpectedError', false);
  });

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.UNAUTHORIZED:
      return state.set('unauthorized', true);
    case constants.SERVER_ERROR:
      return state.set('serverError', true);
    case constants.CONNECTION_ERROR:
      return state.set('connectionError', true);
    case constants.NOT_FOUND:
      return state.set('notFound', true);
    case constants.FORBIDDEN:
      return state.set('forbidden', true);
    case constants.UNEXPECTED_ERROR:
      return state.set('unexpectedError', true);
    case constants.SUCCESS:
      return reset(state);
    default:
      return state;
  }
};
