/**
 * App Reducers
 */
import { combineReducers } from 'redux';
import moviesReducer from './MoviesReducer';

const reducers = combineReducers({
  moviesApp: moviesReducer,
});

export default reducers;
