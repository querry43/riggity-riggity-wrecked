import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Board from './board'
import { BaseTile, LineTile, RickTile } from './tiles'

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

const tiles = []

for (let col = 0; col < 7; col++) {
  for (let row = 0; row < 7; row++) {

    let i = (col*7) + row
    let tile = undefined

    switch (map[i]) {
      case 1:
      case 2:
        tile = new RickTile(false, map[i], i)
        break;
      case 3:
        tile = new BaseTile(true, map[i], i)
        break;
      case 10:
      case 11:
      case 12:
      case 13:
      case 14:
      case 15:
        tile = new LineTile(true, map[i], i)
        break;
      default:
      case 0:
        tile = new BaseTile(false, map[i], i)
        break;
    }

    console.debug(`${i} = ${row}.${col}`)
    console.debug(tile)
    if (row > 0) {
      tile.left = tiles[i-1]
      tiles[i-1].right = tile
    }
    if (col > 0) {
      tile.top = tiles[i-7]
      tiles[i-7].down = tile
    }

    tiles.push(tile)
  }
}

console.debug(tiles)

ReactDOM.render(
  <Board tiles={tiles.map(x => x.asComponent())}/>,
  rootEl
)
