import React, { Component } from 'react';
import style from './PageNotFound.module.css'

export class PageNotFound extends Component {
  render() {
    return (
      <div className={style.pageNotFount}>
        <h1>404 Page Not Found</h1>
      </div>
    )
  }
}

export default PageNotFound
