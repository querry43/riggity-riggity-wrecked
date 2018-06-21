import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class BoardComponent extends Component {
  render() {
    return (
      <div className="board">
        {this.props.tiles}
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(BoardComponent)

BoardComponent.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}
