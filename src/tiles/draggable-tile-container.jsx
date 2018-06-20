import PropTypes from 'prop-types'
import React, { Component } from 'react'
import DraggableTileComponent from './draggable-tile-component'
import { ItemTypes } from './constants';
import { DropTarget } from 'react-dnd';

const tileTarget = {
  drop(props, monitor) {
    console.log('drop')
    console.log(props)
    console.log(monitor)
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
      <div class="tileContainer">
        <DraggableTileComponent className={this.props.className}>
          {this.props.children}
        </DraggableTileComponent>

        {isOver && <div class="tileMask"> </div>}

      </div>
    )
  }
}

DraggableTileContainer.propTypes = {
  className: PropTypes.string.isRequired,
  connectDropTarget: PropTypes.func.isRequired,
  isOver: PropTypes.bool.isRequired

}

export default DropTarget(ItemTypes.TILE, tileTarget, collect)(DraggableTileContainer)
