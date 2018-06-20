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

  isWin(caller) { return false }

  asComponent() {
    return this.draggable
      ? <DraggableTileContainer key={this.key} className={`tile-${this.type}`} />
      : <TileComponent key={this.key} className={`tile-${this.type}`} />
  }

  rowAsComponents() {
    return [this.asComponent()].concat(this.right.rowAsComponents())
  }
}
