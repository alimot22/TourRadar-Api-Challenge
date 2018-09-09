import { createStore, applyMiddleware } from 'redux';
import rootReducer from "../reducers/index.js";
import {createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
// Configure store with reducers and create
const store = createStore(
  rootReducer,
  applyMiddleware(thunk, createLogger())
);

export default store;
