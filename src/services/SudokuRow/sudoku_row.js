import Tr from '../../components/TableRow/tr';
import SudokuCell from '../SudokuCell/sudoku_cell';
import { useSelector } from 'react-redux';

const SudokuRow = ({ curr_row }) => {
  const { board } = useSelector((state) => state.boardData);

  const renderSudokuRow = () => {
    let sudoku_row_html = [];
    let all_cells = [];
    let current_id = curr_row * 9;

    for (let col_index = 0; col_index < 9; col_index++) {
      let single_cell = <SudokuCell current_id={current_id} current_val={board[curr_row][col_index]} />;
      all_cells.push(single_cell);
      current_id++;
    }

    sudoku_row_html = <Tr id={`row-${curr_row}`}>{all_cells}</Tr>;
    return sudoku_row_html;
  };

  return <>{renderSudokuRow()}</>;
};

export default SudokuRow;
