import React, { Component } from 'react'

import styles from './Project.css'

const omen = require('./../../../assets/images/omen.jpg')
const esport = require('./../../../assets/images/esport.jpg')

export default class Project extends Component {
  render() {
    const { project } = this.props
    return (
      <div className={styles.c_project} data-image="image" >
        <a className={styles.c_project__details} href={project.url} target="_blank" rel="noopener noreferrer">
          <div className={styles.c_project__detailsText}>
            <h1 className={styles.c_project__title}>{project.title}</h1>
            <p className={styles.c_project__subtitle}>{project.subtitle}</p>
            <p className={styles.c_project__role}>Service : <span>{project.role}</span></p>
            <p className={styles.c_project__client}>Client : <span>{project.client}</span></p>
            <p className={styles.c_project__stack}>Stacks : <span>{project.stacks}</span></p>
          </div>
        </a>
        <img src={project.thumbnail} alt={project.title} />
      </div>
    )
  }
}
