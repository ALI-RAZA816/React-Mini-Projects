import React, {useState} from "react";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";


function Navbar() {

    const [active, Setactive] = useState(false);

    const showMenu = ()=>{
        Setactive(true);
    }
    
    const hideMenu = ()=>{
        Setactive(!true);
    }

    return (
        <div className="navbar">
            <nav className="navbar-nav">
                <div className="logo" style={{marginRight:"5rem"}}>
                    <img src='/images/brand_logo.png' alt="logo" />
                </div>
                <div className={`link ${active === true? 'show':' '}`}>
                    <div className="cross-icon" onClick={hideMenu}>
                        <FaXmark />
                    </div>
                    <ul className="menu">
                        <li className="navmenu"><a href='/'>Menu</a></li>
                        <li className="navmenu"><a href='/'>Location</a></li>
                        <li className="navmenu"><a href='/'>About</a></li>
                        <li className="navmenu"><a href='/'>Contact</a></li>
                    </ul>
                    <button>Login</button>
                </div>
                <div className="bar-icon" onClick={showMenu}>
                    <FaBars />
                </div>
            </nav>
        </div>
    );
}

export default Navbar;