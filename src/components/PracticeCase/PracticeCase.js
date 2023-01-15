import React from 'react';
import './PracticeCase.scss';

function Square(props) {
  return (
      <button className="square" onClick={props.onClick}>
          {props.value}
      </button>
  );

}


// class Square extends React.Component {
//     render() {
//         return (
//             <button className="square" onClick={() => this.props.onClick()}>
//                 {this.props.value}
//             </button>
//         );
//     }
// }

/** 九宮格的component */
class Board extends React.Component {

  renderSquare(i) {
      console.log(this.props)
      return <Square
          value={this.props.squares[i]}
          onClick={() => this.props.onSquareClick(i)}
      />;
  }

  render() {
      return (
          <div>
              <div className="board-row">
                  {this.renderSquare(0)}
                  {this.renderSquare(1)}
                  {this.renderSquare(2)}
              </div>
              <div className="board-row">
                  {this.renderSquare(3)}
                  {this.renderSquare(4)}
                  {this.renderSquare(5)}
              </div>
              <div className="board-row">
                  {this.renderSquare(6)}
                  {this.renderSquare(7)}
                  {this.renderSquare(8)}
              </div>
          </div>
      );
  }
}

class PracticeCase extends React.Component {

  constructor(props) {
      super(props);
      this.state = {
          history: [
              {
                  squares: Array(9).fill(null)
              }
          ],
          xIsNext: true,
          stepNumber: 0
      };
  }


  jumpTo(step) {
      const history = this.state.history.slice(0, step + 1);
      // 基數換對方
      this.setState({
          history: history,
          stepNumber: step,
          xIsNext: (step % 2) === 0
      });
  }

  /** 處理格子被點擊 */
  handleClick(i) {
      // 歷史紀錄 將回到過去的步驟，剩餘的紀錄切掉
      const history = this.state.history;
      const current = history[this.state.stepNumber];
      const squares = current.squares.slice();


      // 如果已經有贏者提早結束不觸發
      if (this.calculateWinner(squares) || squares[i]) {
          return;
      }

      squares[i] = this.state.xIsNext ? 'X' : 'O';
      // 將新的紀錄間增上去 concat 不會改變原本的array
      this.setState({
          history: history.concat([{
              squares: squares
          }]),
          xIsNext: !this.state.xIsNext,
          stepNumber: history.length
      });
  }
  /** 贏的方法 */
  calculateWinner(squares) {
      const lines = [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [0, 3, 6],
          [1, 4, 7],
          [2, 5, 8],
          [0, 4, 8],
          [2, 4, 6],
      ];
      for (let i = 0; i < lines.length; i++) {
          const [a, b, c] = lines[i];
          if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
              return squares[a];
          }
      }
      return null;
  }


  render() {

      const history = this.state.history;
      // 最新的一筆
      const current = history[history.length - 1];
      const winner = this.calculateWinner(current);

      const moves = history.map((step, move) => {

          // 第一步之後
          const desc = move ?
              '返回上一步 #' + move :
              '遊戲開始';

          return (
              <li key={move}>
                  <button onClick={() => { this.jumpTo(move) }}>{desc}</button>
              </li>
          );
      });

      let status;
      if (winner) {
          status = 'Winner: ' + winner;
      } else {
          status = 'Next player: ' + (this.state.xIsNext ? 'X' : 'O');
      }
      return (
          <div className="game">
              <div className="game-board">
                  <Board
                      squares={current.squares}
                      onSquareClick={(i) => { this.handleClick(i) }} />
              </div>
              <div className="game-info">
                  <div>{status}</div>
                  <ol>{moves}</ol>
              </div>
          </div>
      );
  }
}


export default PracticeCase;
