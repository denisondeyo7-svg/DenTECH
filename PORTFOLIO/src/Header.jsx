import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import image from './assets/file_00000000997881f4ac036c0ebe8f3bc5.png'
function Header(){

    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <header>
            
            <div className="logo">
                <img src={image} alt="logo" />
            </div>
            

            <div className="links">
                <nav>
                    <a href="/#home"><i className='fa-regular fa-home'></i>         Home</a>
                    <a href="/#about">About</a>
                    <a href="/#services">Services</a>
                    <Link to="/Projects">Projects</Link>
                    <a href="/#contact">Contact</a>
                </nav>
            </div>

            
            <div className="menubtn"onClick={() => setMenuOpen(!menuOpen)}>
                <div className="sticks">
                    <div className="stick"></div>
                    <div className="stick"></div>
                    <div className="stick"></div>
                </div>
            </div>

            {menuOpen && (
                <div className="sidebar">
                    <button onClick={() => setMenuOpen(false)}>
                        ×
                    </button>

                    <nav>
                        <a href="/#home" onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
                        <Link to="/Projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                        <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                    </nav>
                </div>
            )}
        </header>
    );
}
export default Header;