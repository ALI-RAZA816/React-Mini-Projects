import React, { Component } from 'react'
import style from './PostPage.module.css'
export class PostPage extends Component {
  render() {
    return (
      <div className={style.heroContainer}>
        <div className={style.heroContent}>
            <h1>Post Section</h1>
            <p>A Blog theme by Start Bootstrap</p>
        </div>
      </div>
    )
  }
}

export default PostPage;