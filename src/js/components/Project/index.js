import React, { Component } from 'react'

import styles from './Project.css'

const omen = require('./../../../assets/images/omen.jpg')
const esport = require('./../../../assets/images/esport.jpg')

export default class Project extends Component {
  render() {
    const { project } = this.props
    return (
      <div className={styles.c_project} data-image="image" >
        <img src={project.thumbnail} alt={project.title} />
      </div>
    )
  }
}
