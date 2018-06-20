import PropTypes from 'prop-types'
import React from 'react'
import TileBase from './tile-base'
import { DragSource } from 'react-dnd'
import { ItemTypes } from './constants'

const tileSource = {
  beginDrag(props) {
    return {};
  }
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class BlankTile extends TileBase {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div className="tileContainer">
        <div className={ this.className } style={{ opacity: isDragging ? 0.5 : 1, }}>
        </div>
      </div>
    )
  }

  get className() { return "blank-tile" }
}

BlankTile.propTypes = {
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};

export default DragSource(ItemTypes.TILE, tileSource, collect)(BlankTile);
