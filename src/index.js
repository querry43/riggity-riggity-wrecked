import React from 'react'
import ReactDOM from 'react-dom'
import Board from './board'
import GameComponent from './game-component'

import './style.css'

const rootEl = document.getElementById('root');

const map = [
  0, 20, 21, 13, 14, 20,  0,
  0, 21, 50, 15, 11, 51,  0,
  1, 10, 15, 20, 12, 10,  2,
  0, 22, 13, 21, 23, 20,  0,
  0, 20, 22, 20, 52, 23,  0,
]

const board = new Board(3, map)

let rickText

board.observe(() => {
  if (rickText === undefined) {
    rickText = 1
  } else {
    rickText = Math.floor(Math.random() * 5) + 1
  }

  ReactDOM.render(
    <GameComponent
      board={board}
      rickText={rickText}
      moves={board.moves}
      isWin={board.isWin()}
      isLose={board.isLose()}
    />,
    rootEl
  )
})
