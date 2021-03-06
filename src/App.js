import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import H1 from './components/H1/h1';
import Table from './components/Table/table';
import SudokuRow from './services/SudokuRow/sudoku_row';
import SudokuDifficultyControls from './services/SudokuDifficultyControls/sudoku_difficulty_controls';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBoard } from './redux/actions/board_actions';

function App() {
  let dispatch = useDispatch();
  const { board } = useSelector((state) => state.boardData);

  useEffect(() => {
    dispatch(fetchBoard());
  }, []);

  const renderSudokuRow = () => {
    let sudoku_row_html = [];

    if (Object.keys(board).length) {
      for (let row_index = 0; row_index < 9; row_index++) {
        sudoku_row_html.push(<SudokuRow curr_row={row_index} />);
      }
    }

    return sudoku_row_html;
  };

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-12 text-center'>
          <H1>HTML Sudoku Board</H1>
        </div>
      </div>
      <div className='row'>
        <div className='col-12 d-flex justify-content-center'>
          <Table>{renderSudokuRow()}</Table>
        </div>
      </div>
      <div className='row'>
        <div className='col-6 offset-3 text-center'>
          <SudokuDifficultyControls />
        </div>
      </div>
    </div>
  );
}

export default App;
