import React, { Component } from 'react'
import LandingContainer from '../../containers/LandingContainer'

export default class Landing extends Component {
  // Render method
  // ---------------------------------o
  render() {
    const { location } = this.props
    // JSX
    return (
      <div>
        <LandingContainer location={location} />
      </div>
    )
  }
}
