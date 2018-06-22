import PropTypes from 'prop-types'
import React, { Component } from 'react'
import ReactTooltip from 'react-tooltip'
import { DragSource } from 'react-dnd'
import { ItemTypes } from './constants'

const tileSource = {
  beginDrag(props) {
    return {getState: props.getState}
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
      <div
        data-tip={ this.props.quip }
        className={ `tile ${className}` }
        style={{ opacity: isDragging ? 0.5 : 1, }}>
        <ReactTooltip />
      </div>
    )
  }

  isWin(caller) { return true }
}

DraggableTileComponent.propTypes = {
  className: PropTypes.string.isRequired,
  connectDragSource: PropTypes.func.isRequired,
  isDragging: PropTypes.bool.isRequired,
  getState: PropTypes.func.isRequired,
  emitChange: PropTypes.func.isRequired,
  quip: PropTypes.string
}

export default DragSource(ItemTypes.TILE, tileSource, collect)(DraggableTileComponent)
