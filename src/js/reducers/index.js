import { combineReducers } from "redux";
import { allDataReducer } from './allData.js';


// Combine all reducers as root reducer
export default combineReducers({
  allData:allDataReducer,
});
