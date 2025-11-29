import React, { Component } from 'react'
import style from './HeroSection.module.css'
export class HeroSection extends Component {
  render() {
    return (
      <div className={style.heroContainer}>
        <div className={style.heroContent}>
            <h1>Home Section</h1>
            <p>A Blog theme by Start Bootstrap</p>
        </div>
      </div>
    )
  }
}

export default HeroSection
