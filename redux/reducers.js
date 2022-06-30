import { combineReducers } from "redux";

import generalReducer from "./general/Reducer";

const reducers = combineReducers({
  generalReducer,
});

export default reducers;
