import PropTypes from 'prop-types'
import React, { Component } from 'react'

export default class TileComponent extends Component {
  render() {
    const { className } = this.props
    return (
      <div className="tileContainer">
        <div className={ className }>
        </div>
      </div>
    )
  }
}

TileComponent.propTypes = {
  className: PropTypes.string.isRequired
}
