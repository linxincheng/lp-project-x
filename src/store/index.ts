import { createStore, combineReducers } from 'redux';
import counterReducer from './counterReducer';

const store = createStore(
  combineReducers({
    counter: counterReducer,
  })
);

export default store;