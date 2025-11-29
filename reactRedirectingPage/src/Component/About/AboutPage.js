import React, { Component } from 'react'
import style from './AboutPage.module.css'
export class AboutPage extends Component {
  render() {
    return (
      <div className={style.heroContainer}>
        <div className={style.heroContent}>
            <h1>About Section</h1>
            <p>A Blog theme by Start Bootstrap</p>
        </div>
      </div>
    )
  }
}

export default AboutPage;