import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import gsap from 'gsap/src/minified/TweenMax.min'

import Project from './../Project'
import Header from './../Header'

import styles from './LandingTop.css'

export default class LandingWrapper extends Component {
  componentDidMount() {
    this.dom = ReactDOM.findDOMNode(this)
    this.container = this.dom.querySelector('#container')
    this.sliderImages = this.dom.querySelectorAll('[data-image]')
  }
  onScroll() {
    const st = window.scrollY
    this.container.style.opacity = 1 - (st / 500)
    this.container.style.transform = `translateY(${0 - (st / 20)}px)`
  }
  isInViewport(element) {
    const rect = element.getBoundingClientRect()
    const html = document.documentElement
    return (
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || html.clientHeight) + 500 &&
      rect.right <= (window.innerWidth || html.clientWidth)
    )
  }
  checkslide() {
    this.sliderImages.forEach(sliderImage => {
      if (this.isInViewport(sliderImage)) {
        sliderImage.classList.add(styles.active)
      } else {
        sliderImage.classList.remove(styles.active)
      }
    })
  }
  render() {
    const { projects } = this.props
    document.addEventListener('scroll', () => {
      this.onScroll()
      this.checkslide()
    }, { passive: true })
    return (
      <div className={styles.mainWrapper}>
        <Header />
        <div className={styles.c_projects}>
          <div id="images" className={styles.c_projects__container} >
            {
              projects.map((project, index) =>
                <Project
                  key={index}
                  project={project}
                />,
              )
            }
          </div>
        </div>
      </div>
    )
  }
}
