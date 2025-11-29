import style from './Navbar.module.css';
import React, {useState} from 'react';
function Navbar() {

    const [active, setActive] = useState(false);
    const showMenu = ()=>{
        setActive(true);
    }
    const hideMenu = ()=>{
        setActive(false);

    }
    
    return(
        <nav className={`${style.navigation} container`}>
            <div className="logo">
                <img src="/images/Frame 2 1.png" alt=""/>
            </div>
            <div className={`${style.menulink} ${active === true ? `${style.show}`: ' '}`}>
                <div className={style.crossIcon}>
                    <i className='fa-solid fa-xmark' onClick={hideMenu}></i>
                </div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            </div>
            <div className={style.barIcon}>
                <i className='fa-solid fa-bars' onClick={showMenu}></i>
            </div>
        </nav>
    );
}

export default Navbar;