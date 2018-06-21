import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class GameComponent extends Component {
  render() {
    return (
      <div>
        <div className="hecklers"></div>
        <div className="boardContainer">
          {this.props.board.asComponent()}
        </div>
      </div>
    )
  }
}

GameComponent.propTypes = {
  board: PropTypes.object.isRequired
}
