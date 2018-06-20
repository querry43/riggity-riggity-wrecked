import React from 'react'
import DraggableTileComponent from './draggable-tile-component'
import TileComponent from './tile-component'

export default class BaseTile {
  constructor(draggable, type, key) {
    this.draggable = draggable
    this.type = type
    this.key = key
    this.up = this
    this.right = this
    this.down = this
    this.left = this
  }

  isWin(caller) { return false }

  asComponent() {
    return this.draggable
      ? <DraggableTileComponent key={this.key} className={`tile-${this.type}`} />
      : <TileComponent key={this.key} className={`tile-${this.type}`} />
  }
}
