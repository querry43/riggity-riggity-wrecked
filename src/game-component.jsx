import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class GameComponent extends Component {
  render() {
    const rickText = require(`./images/rick-text-${this.props.rickText}.png`)

    return (
      <div>
        { this.props.isWin && <div className="overlay win"></div> }
        { (this.props.isLose && !this.props.isWin) && <div className="overlay lose"></div> }

        <div className="hecklers">
          <div className="rickText" style={{ backgroundImage: `url(${rickText})` }}></div>
          <div className="moves">{ this.props.moves }</div>
        </div>
        <div className="boardContainer">
          {this.props.board.asComponent()}
        </div>
      </div>
    )
  }
}

GameComponent.propTypes = {
  board: PropTypes.object.isRequired,
  rickText: PropTypes.number.isRequired,
  moves: PropTypes.number.isRequired,
  isWin: PropTypes.bool.isRequired,
  isLose: PropTypes.bool.isRequired
}
