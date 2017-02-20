import React, { Component } from 'react'

import styles from './Header.css'

export default class Header extends Component {
  render() {
    return (
      <header className={styles.c_header}>
        <div id="container" className={styles.c_header__container}>
          <h1>Antoine Lin</h1>
          <p>Hey there, welcome on my portfolio.
            I'm Antoine, a creative developper freelance.
            Also student @HETIC Montreuil Paris, <strong>I'm looking for a 4 months
            internship from July to October 2017.</strong>
          </p>
          <ul className={styles.c_header__networks}>
            <li><p>Contact me : <a href="mailto:contact@antoineli.com" target="_blank" rel="noopener noreferrer">contact@antoinelin.com</a></p></li>
            <li><p>Find me on Twitter : <a href="https://twitter.com/ToineLIN" target="_blank" rel="noopener noreferrer">@ToineLin</a></p></li>
            <li><p>Find me on Github : <a href="https://github.com/toinelin" target="_blank" rel="noopener noreferrer">toinelin</a></p></li>
            <li><p>Find me on Bëhance : <a href="https://www.behance.net/AntoineLIN" target="_blank" rel="noopener noreferrer">AntoineLIN</a></p></li>
            <li><p>Download my resume : <a href="http://www.antoinelin.com/CV" target="_blank" rel="noopener noreferrer">here</a></p></li>
          </ul>
        </div>
      </header>
    )
  }
}
