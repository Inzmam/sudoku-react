import { FETCH_BOARD, VALIDATE_BOARD } from '../action_types/board_action_types';

const initialState = {
  board: {},
  loading: false,
  is_valid: true,
};

const boardReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_BOARD:
      return {
        ...state,
        board: action.payload,
      };
    case VALIDATE_BOARD:
      return {
        ...state,
        is_valid: action.payload,
      };
    default:
      return state;
  }
};

export default boardReducer;
