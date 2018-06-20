import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './board'
import Tile from './tiles'

const rootEl = document.getElementById('root');

const tiles = []
for (let i = 0; i < 25; i++) {
  tiles.push(<Tile key={i} />)
}

ReactDOM.render(
  <Board tiles={tiles}/>,
  rootEl
)
