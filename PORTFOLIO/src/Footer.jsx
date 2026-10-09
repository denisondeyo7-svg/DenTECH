function Footer(){

    return(
        <footer><br /><br />
            <div className="mainfooter">
                <div className="FooterSocials">
                    <i className='fab fa-github'></i>
                    <i className='fab fa-linkedin'></i>
                    <i className='fab fa-whatsapp'></i>
                    <i className='fab fa-facebook'></i>
                    <i className='fab fa-twitter'></i>
                    <i className='fas fa-phone'></i>
                </div>
                <h2>Quick Links</h2>
                <nav>
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="">Project</a>
                    <a href="#contact">Contact</a>
                </nav>

                
            </div>
            <div className="subfooter">
                <small>©copy DenTECH-2026 | All rights reserved | Developed By Denis</small>
            </div>
        </footer>
    );
}
export default Footer;