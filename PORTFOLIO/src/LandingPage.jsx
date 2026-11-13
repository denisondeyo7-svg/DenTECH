import { Link } from "react-router-dom";
import avatar from './assets/1785572016414 (1).png'
function LandingPageContent(){

    const Content =[
        
        {number:" 1" , me:"# Innovating Your digital Experience."},
        
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
                <div className="myavatar">
                    <img src={avatar} alt="avatar image" />
                </div>

                
                

                <h1 className="myname"> <span className="den">Meet  <i>Denis Ondeyo</i></span></h1>
                {Content.map((Content)=>(
                    <div className="herosContent"key={Content.number}>
                        <h2>{Content.developer}</h2>
                        <small className='me'>{Content.me}</small>
                        <p>{Content.work}</p>

                    </div>  

                    
                
                ))}

                
                <br /><br />
                <div className="c2a">
                    <Link to="/Projects"id="workbtn">View My Work   <i className="fas fa-arrow-right"></i></Link>
                    <Link to="/contact"id="reachbtn">Reach out       <i className="fas fa-paper-plane"></i></Link>
                    
                </div>
                <br /><br /><br />

                
            </div>
            <div className="whatsapp">
                <a href="https://wa.me/254726534460?text=Hi%20Denis%2C%20it%27s%20a%20pleasure%20to%20connect%20with%20you.%20I%20recently%20came%20across%20your%20portfolio%20online%20and%20was%20quite%20impressed%20by%20your%20work.%20I%20would%20love%20to%20schedule%20a%20brief%20chat%20to%20discuss%20something.%0A"
                target="_blank"
                rel="noopener noreferrer">
                 <i className="fab fa-whatsapp"></i>
                </a>
            </div>
        </section>
    )
   
}
export default LandingPageContent