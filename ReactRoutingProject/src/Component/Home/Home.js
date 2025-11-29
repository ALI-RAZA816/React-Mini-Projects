import React, { Component } from 'react';
import style from './Home.module.css'

export class Home extends Component {
    render() {
        return (
            <div className={style.homePage}>
                <h1>Home Page</h1>
            </div>
        )
    }
}

export default Home
