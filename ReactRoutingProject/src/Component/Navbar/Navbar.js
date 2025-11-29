import React, { Component } from 'react';
import style from './Navbar.module.css';
import { Link } from "react-router-dom";

class Navbar extends Component {
  render() {
    return (
      <div>
        <header className={style.navbar}>
            <div className={style.logo}>
                <h1>Logo</h1>
            </div>
            <div className={style.menuLinks}>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/services">Services</Link></li>
                    <li><Link to="/posts">Post</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                </ul>
            </div>
        </header>
      </div>
    )
  }
}

export default Navbar
