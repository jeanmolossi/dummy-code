import { combineReducers } from 'redux';
import { appReducer as app } from './app';
import { userReducer as user } from './user';

export default combineReducers({
  app,
  user,
});
