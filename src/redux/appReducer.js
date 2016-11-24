import { combineReducers } from 'redux';
import kerkerReducer from './reducers/kerkerReducer.js';
import routeReducer from './reducers/routeReducer.js';

const appReducer = combineReducers({
  kerkerReducer,
  routeReducer
})

export default appReducer;
