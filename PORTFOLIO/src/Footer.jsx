import { Link } from 'react-router-dom'
function Footer(){

    return(
        <footer><br /><br />
            <div className="mainfooter">
                <div className="FooterSocials">
                    <a href="https://github.com/denisondeyo7-svg"><i className='fab fa-github'></i></a>
                    <a href="https://www.linkedin.com/in/denis-ondeyo-8885813b6/"><i className='fab fa-linkedin'></i></a>
                    <a href="https://wa.me/254726534460"><i className='fab fa-whatsapp'></i></a>
                    <a href="tel:+254726534460"><i className='fas fa-phone'></i></a>
                </div>
                <h2>Quick Links</h2>
                <nav>
                    <a href="/#home">Home</a>
                    <a href="/#about">About</a>
                    <a href="/#services">Services</a>
                    <Link to="/Projects">Projects</Link>
                    <a href="/#contact">Contact</a>
                </nav>
               
                <h2>Management</h2>
                    <nav>
                        <Link to="/Admin">Admin</Link>
                    </nav>
                
            </div>
            <div className="subfooter">
                <small>©2026 All rights reserved <br /> Developed By Denis</small>
            </div>
        </footer>
    );
}
export default Footer;