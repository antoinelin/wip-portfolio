import React, { Component } from 'react'

import styles from './Loading.css'

export default class Loading extends Component {
  render() {
    return (
      <div className={styles.c_loading} id="background">
        <h2 className={styles.c_loadingTitle} id="title">Antoine Lin</h2>
      </div>
    )
  }
}
