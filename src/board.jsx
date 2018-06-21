import React from 'react'
import BoardComponent from './board-component'
import { BaseTile, LineTile, RickTile, StartTile } from './tiles'

export default class Board {
  constructor(moves, map) {
    this.moves = moves

    const tiles = []
    let startTile

    for (let col = 0; col < 7; col++) {
      for (let row = 0; row < 7; row++) {

        let i = (col*7) + row
        let tile

        switch (map[i]) {
          case 1:
            tile = new StartTile(false, map[i], i)
            startTile = tile
            break;
          case 2:
            tile = new RickTile(false, map[i], i)
            break;
          case 20:
          case 21:
          case 22:
          case 23:
          case 30:
          case 50:
          case 51:
          case 52:
          case 53:
          case 54:
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

        if (row > 0) {
          tile.left = tiles[i-1]
          tiles[i-1].right = tile
        }
        if (col > 0) {
          tile.up = tiles[i-7]
          tiles[i-7].down = tile
        }

        tiles.push(tile)
      }
    }

    this.startTile = startTile
    this.firstTile = tiles[0]
  }

  asComponent() {
    let components = []
    let row = this.firstTile
    for (let i = 0; i < 7; i++) {
      components = components.concat(row.rowAsComponents(this))
      row = row.down
    }

    return <BoardComponent tiles={components} />
  }

  isWin() {
    return this.startTile.isWin(null)
  }

  isLose() {
    return this.moves < 1
  }

  observe(fn) {
    this.observer = fn
    this.emitChange()
  }

  emitChange() {
    this.observer()
  }
}
