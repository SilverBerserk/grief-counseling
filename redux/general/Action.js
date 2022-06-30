import * as types from '../constants';

export const setGlobalLoader = state => async dispatch => {
  dispatch({
    type: types.SET_GLOBAL_LOADER,
    payload: state
  });
};

export const setContentLoader = state => async dispatch => {
  dispatch({
    type: types.SET_CONTENT_LOADER,
    payload: state
  });
};
