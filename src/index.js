import React from 'react'
import ReactDOM from 'react-dom'
import Board from './board'
import GameComponent from './game-component'

import './style.css'

const rootEl = document.getElementById('root');

const map = [
  0,  0,  0,  0,  0,  0,  0,
  0, 20, 21, 13, 14, 20,  0,
  0, 21, 13, 15, 11, 51,  0,
  1, 10, 15, 20, 12, 10,  2,
  0, 22, 50, 21, 23, 20,  0,
  0, 20, 22, 20, 52, 23,  0,
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
