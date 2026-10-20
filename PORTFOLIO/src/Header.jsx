import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import image from './assets/logo.png'
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
                    <Link to="/Admin">Admin</Link>
                </nav>
            </div>

            
            <div className="menubtn"onClick={() => setMenuOpen(!menuOpen)}>
                <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
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
                        <Link to="/Admin"onClick={()=> setMenuOpen(false)}>Admin Page</Link>

                    </nav>

                    
                </div>
            )}
        </header>
    );
}
export default Header;