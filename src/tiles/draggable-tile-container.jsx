import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DraggableTileComponent from './draggable-tile-component'
import { ItemTypes } from './constants';
import { DropTarget } from 'react-dnd';

const tileTarget = {
  drop(props, monitor) {
    const draggedTile = monitor.getItem().getState()
    const droppedTile = props.getState()

    if (draggedTile.key !== droppedTile.key) {
      console.log(`swapping ${draggedTile.key} and ${droppedTile.key}`)
      draggedTile.swapWithTile(droppedTile)

      props.decMoves()
      props.emitChange()
    }
  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class DraggableTileContainer extends Component {
  render() {
    const { connectDropTarget, isOver } = this.props;
    return connectDropTarget(
      <div className="tileContainer">
        <DraggableTileComponent
            className={this.props.className}
            getState={this.props.getState}
            emitChange={this.props.emitChange}
            quip={this.props.quip}>
          {this.props.children}
        </DraggableTileComponent>

        {isOver && <div className="tileMask"> </div>}

      </div>
    )
  }
}

DraggableTileContainer.propTypes = {
  className: PropTypes.string.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired,
  getState: PropTypes.func.isRequired,
  emitChange: PropTypes.func.isRequired,
  decMoves: PropTypes.func.isRequired,
  quip: PropTypes.string
}

export default DropTarget(ItemTypes.TILE, tileTarget, collect)(DraggableTileContainer)
