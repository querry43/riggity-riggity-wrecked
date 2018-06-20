import ReactDOM from 'react-dom'
import Board from './board'

import './index.css'

const rootEl = document.getElementById('root');

const map = [
  0,  0,  0,  0,  0,  0,  0,
  0,  3,  3, 13, 14,  3,  0,
  0,  3, 13, 15, 11,  3,  0,
  1, 10, 15,  3, 12, 10,  2,
  0,  3,  3,  3,  3,  3,  0,
  0,  3,  3,  3,  3,  3,  0,
  0,  0,  0,  0,  0,  0,  0,
]

const board = new Board(map)

console.log(board.isWin())

ReactDOM.render(
  board.asComponent(),
  rootEl
)
