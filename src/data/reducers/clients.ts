import { fromJS } from 'immutable';
import * as constants from '../constants/clients';
import LoadingProgress from '../utils/reducers/loading';

export const listLoadingProgress = new LoadingProgress('clientsList');

const mergeData = (state, payload) => {
  return state.withMutations((newState) => {
    const {
      entities: { clients },
    } = payload;
    newState.mergeIn(['entities'], fromJS(clients));
  });
};

const loadList = (state, action) =>
  state.withMutations((newState) => {
    const { result } = action.payload;
    mergeData(newState, action.payload);
    newState.set('list', fromJS(result));
    listLoadingProgress.setLoaded(newState);
  });

const initialState = fromJS({
  entities: {},
});

export default (state = initialState, action) => {
  switch (action.type) {
    case constants.LIST_LOAD_START:
      return listLoadingProgress.setLoading(state);
    case constants.LIST_LOAD_FAILED:
      return listLoadingProgress.setLoadFailed(state);
    case constants.LIST_LOAD_SUCCESS:
      return loadList(state, action);

    case constants.CLEAR:
      return initialState;

    default:
      return state;
  }
};
