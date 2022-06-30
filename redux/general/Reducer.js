import * as types from '../constants';

const initialState = {
  loading: false
};

const generalReducer = (state = initialState, action) => {
  const { payload } = action;

  switch (action.type) {
    case types.SET_GLOBAL_LOADER:
      return {
        ...state,
        loading: payload
      };
    case types.SET_CONTENT_LOADER:
      return {
        ...state,
        contentLoading: payload
      };
    default:
      return state;
  }
};

export default generalReducer;
