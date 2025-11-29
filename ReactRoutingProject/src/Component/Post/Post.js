import React, { Component } from 'react'
import style from './Post.module.css'

export class Post extends Component {
    render() {
        return (
            <div className={style.postPage}>
                <h1>Posts Page</h1>
            </div>
        )
    }
}

export default Post
