import { combineReducers } from 'redux';
import { exampleReducer } from './example';
import { RootState } from './rootTypes';

export default combineReducers<RootState>({
  example: exampleReducer,
});
