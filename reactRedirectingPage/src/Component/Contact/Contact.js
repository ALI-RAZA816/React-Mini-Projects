import React, { Component } from 'react'
import style from './Contact.module.css'
export class Contact extends Component {
  render() {
    return (
      <div className={style.heroContainer}>
        <div className={style.heroContent}>
            <h1>Contact Section</h1>
            <p>A Blog theme by Start Bootstrap</p>
        </div>
      </div>
    )
  }
}

export default Contact
