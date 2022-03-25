import { combineReducers } from 'redux';
import BoardReducer from './board_reducer';

const rootReducer = combineReducers({
  boardData: BoardReducer,
});

export default rootReducer;
