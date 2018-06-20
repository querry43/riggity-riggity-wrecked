import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { ItemTypes } from './constants';
import { DragSource } from 'react-dnd';

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

class Tile extends Component {
  render() {
    const { connectDragSource, isDragging } = this.props;
    return connectDragSource(
      <div class="tileContainer">
        <div class="tile" style={{ opacity: isDragging ? 0.5 : 1, }}>
          tile
        </div>
      </div>
    )
  }
}

export default DragSource(ItemTypes.TILE, tileSource, collect)(Tile);

Tile.propTypes = {
  up: PropTypes.object,
  right: PropTypes.object,
  down: PropTypes.object,
  left: PropTypes.object,

  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
};
