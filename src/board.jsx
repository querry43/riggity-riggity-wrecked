import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Tile from './tiles'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

class Board extends Component {
  render() {
    return (
      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexWrap: 'wrap'
      }}>
        {this.props.tiles}
      </div>
    )
  }

  renderTile(i) {
    return <div key={i} style={{ width: '20%', height: '20%' }}>
      <Tile image={'whatever'}/>
    </div>
  }
}

export default DragDropContext(HTML5Backend)(Board)

Board.propTypes = {
  tiles: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
}
