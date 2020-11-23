import { combineReducers } from 'redux';
import { appReducer as app } from './app';
import { postsReducer as posts } from './posts';
import { userReducer as user } from './user';

export default combineReducers({
  app,
  user,
  posts,
});
