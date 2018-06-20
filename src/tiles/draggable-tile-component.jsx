import PropTypes from 'prop-types'
import React, { Component } from 'react'
import { DragSource } from 'react-dnd'
import { ItemTypes } from './constants'

const tileSource = {
  beginDrag(props) {
    return {}
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

class DraggableTileComponent extends Component {
  render() {
    const { className, connectDragSource, isDragging } = this.props
    return connectDragSource(
      <div className="tileContainer">
        <div className={ className } style={{ opacity: isDragging ? 0.5 : 1, }}>
        </div>
      </div>
    )
  }

  isWin(caller) { return true }
}

DraggableTileComponent.propTypes = {
  className: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired
}

export default DragSource(ItemTypes.TILE, tileSource, collect)(DraggableTileComponent)
