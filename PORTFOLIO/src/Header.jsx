import { useState } from "react";
import { Link } from "react-router-dom";
import './App.css';
import image from './assets/denova.png'
function Header(){

    const [menuOpen, setMenuOpen] = useState(false);
    return(
        <header>
            
            <a href="/" id="togglehome">
                <div className="logo-container">
                    <div className="logo">
                        <img src={image} alt="logo" />

                    </div>
                    <div className="my-brand">
                        <p>Denis <br />
                            <span className="brandsmall">Ondeyo</span></p>
                        
                    </div>
                </div>
            </a>
            

            <div className="links">
                <nav>
                    <a href="/#home"><i className='fas fa-layer-group'></i>         Home</a>
                    <a href="/#about">About</a>
                    <a href="/#services">Services</a>
                    <Link to="/Projects">Projects</Link>
                    <a href="/#contact">Contact</a>
                    <Link to="/Admin">Admin</Link>
                </nav>
            </div>

            <div className="socials-links">
                    <a href="https://github.com/denisondeyo7-svg" target="_blank" rel="noopener noreferrer"><i className='fab fa-github'></i></a>
                    <a href="https://www.linkedin.com/in/denis-ondeyo-8885813b6/" target="_blank"rel="noopener noreferrer"><i className='fab fa-linkedin'></i></a>
                    <a href="https://wa.me/254726534460" target="_blank" rel="noopener noreferrer"><i className='fab fa-whatsapp'></i></a>
                    <a href="tel:+254726534460" target="_blank" rel="noopener noreferrer"><i className='fas fa-phone'></i></a>
                </div>

            

            
            <div className="headerbtns">
                <div className="menubtn"onClick={() => setMenuOpen(!menuOpen)}>
                    <i className={menuOpen ? "fas fa-times" : "fas fa-bars"}></i>
                </div>

                <div className="employ">
                    <Link to="/contact" id="employme">Employ me</Link>
                </div>
            </div>

            {/*menu navigation*/}
            {menuOpen && (
                <div className="sidebar">
                    <button onClick={() => setMenuOpen(false)}>
                        <i className="fas fa-times"></i>
                    </button>

                    <nav>
                        <a href="/#home" onClick={() => setMenuOpen(false)}>Home</a>
                        <a href="/#about" onClick={() => setMenuOpen(false)}>About</a>
                        <a href="/#services" onClick={() => setMenuOpen(false)}>Services</a>
                        <Link to="/Projects" onClick={() => setMenuOpen(false)}>Projects</Link>
                        <a href="/#contact" onClick={() => setMenuOpen(false)}>Contact</a>
                        <Link to="/Admin"onClick={()=> setMenuOpen(false)}>Admin Page</Link>

                    </nav>
                    <br/>
                     <div className="employ">
                        <Link to="/contact" id="employme">Employ me</Link>
                    </div>
                    
                </div>
            )}
        </header>
    );
}
export default Header;