import React from 'react'
import TileBase from './tile-base'

export default class BorderTile extends TileBase {
  render() {
    return (
      <div className="tileContainer">
        <div className={ this.className }>
        </div>
      </div>
    )
  }

  get className() { return "border-tile" }
}
