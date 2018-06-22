import React from 'react'
import ReactDOM from 'react-dom'
import Board from './board'
import GameComponent from './game-component'
import queryString from 'query-string'

import './style.css'

const rootEl = document.getElementById('root');

const queryParams = queryString.parse(window.location.search);
const origin = window.location.origin

try {
  queryParams.moves = parseInt(queryParams.moves, 10)
  queryParams.map = queryParams.map.split(',').map(x => parseInt(x, 10))

  console.log(queryParams)

  const board = new Board(queryParams.moves, queryParams.map)

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
} catch(error) {
  ReactDOM.render(
    <div className="levelSelect">
      <div>Select Level</div>
      <div>
        <a href={`${origin}?moves=4&map=0,20,21,13,14,20,0,0,21,50,23,51,11,0,1,10,15,20,12,21,2,0,22,13,10,15,20,0,0,20,22,20,52,23,0`}>Level 1</a><br/>
        <a href={`${origin}?moves=4&map=0,12,10,13,10,14,0,1,15,54,20,14,12,2,0,11,21,20,11,21,0,0,12,21,10,51,20,0,0,20,22,20,14,23,0`}>Level 2</a><br/>
      </div>
    </div>,
    rootEl
  )
}
