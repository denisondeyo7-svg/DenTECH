import './App.css';
import image from './assets/file_00000000997881f4ac036c0ebe8f3bc5.png'
function Header(){
    return(
        <header>
            
            <div className="logo">
                <img src={image} alt="logo" />
            </div>
            

            <div className="links">
                <nav>
                    <a href="#home"><i className='fa-regular fa-home'></i>         Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="">Project</a>
                    <a href="#contact">Contact</a>
                </nav>
            </div>

            
            <div className="menubtn">
                <div className="sticks">
                    <div className="stick"></div>
                    <div className="stick"></div>
                    <div className="stick"></div>
                </div>
            </div>
        </header>
    );
}
export default Header;