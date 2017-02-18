import React, { Component } from 'react'
import Loading from './../Loading'
import LandingTop from './../LandingTop'

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
          projects && <LandingTop
            location={location}
          />
        }
      </div>
    )
  }
}
