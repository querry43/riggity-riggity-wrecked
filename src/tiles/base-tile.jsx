import React from 'react'
import DraggableTileComponent from './draggable-tile-component'
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
      ? <DraggableTileComponent key={this.key} className={`tile-${this.type}`} />
      : <TileComponent key={this.key} className={`tile-${this.type}`} />
  }

  rowAsComponents() {
    return [this.asComponent()].concat(this.right.rowAsComponents())
  }
}
