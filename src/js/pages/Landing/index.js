import React, { Component } from 'react'
import Header from './../../components/Header'

import styles from './ProjectsPage.css'

import LandingContainer from '../../containers/LandingContainer'

class ProjectsPage extends Component {
  // Render method
  // ---------------------------------o
  render() {
    const { location } = this.props
    // JSX
    return (
      <div>
        <Header />
        <LandingContainer location={location} />
      </div>
    )
  }
}
export default ProjectsPage
