import React, {useState} from "react";
import style from './Navbar.module.css';
function Navbar() {

    const [active, Setactive] = useState(false);

    const showMenu = ()=>{
        Setactive(true);
    }
    
    const hideMenu = ()=>{
        Setactive(!true);
    }

    return (
        <div className={style.navbar}>
            <nav className={style.navbarnav}>
                <div className={style.logo} style={{marginRight:"5rem"}}>
                    <img src='/images/brand_logo.png' alt="logo" />
                </div>
                <div className={`${style.link} ${active === true? `${style.show}`:' '}`}>
                    <div className={style.crossicon} onClick={hideMenu}>
                        <i className="fa-solid fa-xmark"></i>
                    </div>
                    <ul className={style.menu}>
                        <li className={style.navmenu}><a href='/'>Menu</a></li>
                        <li className={style.navmenu}><a href='/'>Location</a></li>
                        <li className={style.navmenu}><a href='/'>About</a></li>
                        <li className={style.navmenu}><a href='/'>Contact</a></li>
                    </ul>
                    <button>Login</button>
                </div>
                <div className={style.baricon} onClick={showMenu}>
                    <i className="fa-solid fa-bars"></i>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;