import { FETCH_BOARD } from '../action_types/board_action_types';
import AxiosClient from '../../config/axios_client';

const triggerFetchBoard = (board_param) => {
  return {
    type: FETCH_BOARD,
    payload: board_param,
  };
};

export const solveBoard = (board_data) => {
  return function (dispatch) {
    AxiosClient.post(`/solve`, { board: JSON.stringify(board_data) }).then((res) => {
      dispatch(triggerFetchBoard(res?.data?.solution));
    });
  };
};

export const fetchBoard = (difficulty_level) => {
  return function (dispatch) {
    AxiosClient.get(`/board?difficulty=${difficulty_level || 'easy'}`).then((res) => {
      dispatch(triggerFetchBoard(res?.data?.board));
    });
  };
};
