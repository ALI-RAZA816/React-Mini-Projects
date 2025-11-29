import React, { Component } from 'react'
import style from './Navbar.module.css'
import { Link } from "react-router-dom";
export class Navbar extends Component {
  constructor(props) {
    super(props)
    this.state = this.props
  }
  render() {
    return (
      <header className={style.navbar}>
        <div className={style.logo}>
            <h1>Blogger</h1>
        </div>
        <div className={style.menuLinks}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/post">Sample Post</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <button onClick={this.state.login}>{this.state.status === false ? "Login":"Login Out"}</button>
        </div>
      </header>
    )
  }
}

export default Navbar
