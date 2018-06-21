import React from 'react'
import ReactDOM from 'react-dom'
import Board from './board'
import GameComponent from './game-component'

import './style.css'

const rootEl = document.getElementById('root');

const map = [
  0,  0,  0,  0,  0,  0,  0,
  0,  3,  3, 13, 14,  3,  0,
  0,  3, 13, 15, 11, 51,  0,
  1, 10, 15,  3, 12, 10,  2,
  0,  3, 50,  3,  3,  3,  0,
  0,  3,  3,  3, 52,  3,  0,
  0,  0,  0,  0,  0,  0,  0,
]

const board = new Board(3, map)

board.observe(() => {
  ReactDOM.render(
    <GameComponent board={board} />,
    rootEl
  )
  console.log(`moves = ${board.moves}`)
  console.log(`isWin = ${board.isWin()}`)
  console.log(`isLose = ${board.isLose()}`)
})
