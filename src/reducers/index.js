import { combineReducers } from 'redux';
import GithubReducer from './reducer-github';

const rootReducer = combineReducers({
  github: GithubReducer
});

export default rootReducer;
