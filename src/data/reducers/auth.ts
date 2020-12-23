import { Map } from 'immutable';
import * as constants from '../constants/auth';
import LoadingProgress from '../utils/reducers/loading';

export const sessionLoading = new LoadingProgress('session');

const sessionLoaded = (state, action) =>
  state.withMutations((newState) => {
    const { userDetail, access } = action.payload;

    newState.set('userDetail', userDetail);
    newState.set('access', access);
    sessionLoading.setLoaded(newState);
  });

const initialState = Map({});

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.SESSION_LOAD_START:
      return sessionLoading.setLoading(state);
    case constants.SESSION_LOADED:
      return sessionLoaded(state, action);
    case constants.SESSION_LOAD_FAILED:
      return sessionLoading.setLoadFailed(state);
    case constants.SESSION_CLOSE:
    case constants.LOGOUT:
      return initialState;
    default:
      return state;
  }
};
