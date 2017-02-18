import React, { Component } from 'react'
import Loading from './../Loading'
import LandingWrapper from './../LandingWrapper'

export default class Wrapper extends Component {
  componentDidMount() {
    this.props.onGetProjects()
  }
  render() {
    const { projects } = this.props.projects
    const { location } = this.props
    return (
      <div>
        {
          !projects && <Loading />
        }
        {
          projects && <LandingWrapper
            location={location}
            projects={projects}
          />
        }
      </div>
    )
  }
}
