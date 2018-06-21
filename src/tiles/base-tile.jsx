import React from 'react'
import DraggableTileContainer from './draggable-tile-container'
import TileComponent from './tile-component'
import TermTile from './term-tile'

export default class BaseTile {
  constructor(draggable, type, key) {
    this.draggable = draggable
    this.type = type
    this.key = key
    this.up = new TermTile()
    this.right = new TermTile()
    this.down = new TermTile()
    this.left = new TermTile()
  }

  swapWithTile(tile) {
    let tmp = tile.up
    tile.up.down = this
    this.up.down = tile
    tile.up = this.up
    this.up = tmp

    tmp = tile.right
    tile.right.left = this
    this.right.left = tile
    tile.right = this.right
    this.right = tmp

    tmp = tile.down
    tile.down.up = this
    this.down.up = tile
    tile.down = this.down
    this.down = tmp

    tmp = tile.left
    tile.left.right = this
    this.left.right = tile
    tile.left = this.left
    this.left = tmp
  }

  isWin(caller) { return false }

  asComponent(board) {
    const self = this

    return this.draggable
      ? <DraggableTileContainer
          key={this.key}
          className={`tile-${this.type}`}
          getState={() => {return self}}
          emitChange={() => {board.emitChange()}}
          decMoves={() => {board.moves--}}/>
      : <TileComponent key={this.key} className={`tile-${this.type}`} />
  }

  rowAsComponents(board) {
    return [this.asComponent(board)].concat(this.right.rowAsComponents(board))
  }
}
