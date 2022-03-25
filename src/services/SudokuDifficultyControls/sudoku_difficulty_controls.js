import Button from '../../components/Button/button';
import H3 from '../../components/H3/h3';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBoard, solveBoard } from '../../redux/actions/board_actions';

function SudokuDifficultyControls() {
  let dispatch = useDispatch();
  const { board } = useSelector((state) => state.boardData);

  const handleClick = (event) => {
    let difficulty_level = event.target.textContent.toLowerCase();
    dispatch(fetchBoard(difficulty_level));
  };

  const handleSolve = () => {
    dispatch(solveBoard(board));
  };

  const renderControls = () => {
    let controls_html = (
      <>
        <div>
          <H3 className={'d-inline'}>Difficulty: </H3>
          <Button type='button' className={'btn btn-easy m-2'} onClick={handleClick}>
            Easy
          </Button>
          <Button type='button' className={'btn btn-medium m-2'} onClick={handleClick}>
            Medium
          </Button>
          <Button type='button' className={'btn btn-hard m-2'} onClick={handleClick}>
            Hard
          </Button>
        </div>
        <div>
          <Button type='button' className={'btn btn-easy btn-half m-2'} onClick={handleSolve}>
            Solve
          </Button>
        </div>
      </>
    );

    return controls_html;
  };

  return <>{renderControls()}</>;
}

export default SudokuDifficultyControls;
