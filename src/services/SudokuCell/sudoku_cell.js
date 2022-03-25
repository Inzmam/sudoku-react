import Td from '../../components/TableData/td';
import Input from '../../components/Input/input';
import { useSelector, useDispatch } from 'react-redux';
import { FETCH_BOARD } from '../../redux/action_types/board_action_types';

const SudokuCell = ({ current_id, current_val }) => {
  let dispatch = useDispatch();
  const { board } = useSelector((state) => state.boardData);

  const calculateCellNo = (row_id, cell_id) => {
    let starting_point = row_id * 9;
    let cell_no = cell_id - starting_point;

    return cell_no;
  };

  const isValid = (current_event) => {
    let ascii_code = current_event.target.value.charCodeAt();

    if (current_event.target.value.length === 1 || current_event.target.value === '') {
      if (ascii_code > 48 && ascii_code < 58) {
        // For integers from 1 - 9
        return true;
      } else if (current_event.target.value === '') {
        // For delete purposes
        return true;
      } else {
        current_event.preventDefault();
        return false;
      }
    }

    return false;
  };

  const handleInpChange = (event) => {
    if (isValid(event)) {
      let inp_val = parseInt(event.target.value);
      let cell_id = parseInt(event.target.id.split('cell-')[1]);
      let row_id = parseInt(event.target.closest('tr').id.split('row-')[1]);
      let cell_no = calculateCellNo(row_id, cell_id);

      let updated_board = [...board];
      updated_board[row_id][cell_no] = inp_val;

      dispatch({
        type: FETCH_BOARD,
        payload: updated_board,
      });
    }
  };

  const renderSudokuCell = () => {
    let sudoku_cell_html = <></>;

    sudoku_cell_html = (
      <Td>
        <Input id={`cell-${current_id}`} type='text' value={current_val || ''} onChange={handleInpChange} />
      </Td>
    );

    return sudoku_cell_html;
  };

  return <>{renderSudokuCell()}</>;
};

export default SudokuCell;
