import { Link } from "react-router-dom";
function LandingPageContent(){

    const Content =[
        
        {number:" 1" , me:"Innovating Your digital Experience."},
        {number:" 2" , work:" I specialize in bridging powerful back-end systems with dynamic front-end experiences, bringing modern web applications to life through clean, functional, and user-focused development."}
        
    ]; 

    return(
        <section className="landingpage"id="home">
            <div className="mybars">
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
                <div className="bars"></div>
            </div>

            <div className="load"></div>
            <br />
            <div className="heros">
                <h1 className="myname">Meet , <span className="den">Denis</span> Ondeyo</h1>
                {Content.map((Content)=>(
                    <div className="herosContent"key={Content.number}>
                        <h2>{Content.developer}</h2>
                        <h1 className='me'>{Content.me}</h1>
                        <p>{Content.work}</p>

                    </div>  

                    
                
                ))}

                
                <br /><br />
                <div className="c2a">
                    <Link to="/Projects"id="workbtn"><i className="fas fa-code"></i>My Work</Link>
                    <Link to="/contact"id="reachbtn"><i className="fas fa-phone"></i>Reach out </Link>
                    
                </div>
                <br /><br /><br />

                <div className="socials-links">
                    <a href="https://github.com/denisondeyo7-svg"><i className='fab fa-github'></i></a>
                    <a href="https://www.linkedin.com/in/denis-ondeyo-8885813b6/"><i className='fab fa-linkedin'></i></a>
                    <a href="https://wa.me/254726534460"><i className='fab fa-whatsapp'></i></a>
                    <a href="tel:+254726534460"><i className='fas fa-phone'></i></a>
                </div>

            </div>
            <div className="whatsapp">
                <a href="https://wa.me/254726534460"><i className="fab fa-whatsapp"></i></a>
            </div>
        </section>
    )
   
}
export default LandingPageContent