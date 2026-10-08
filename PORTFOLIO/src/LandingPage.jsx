function LandingPageContent(){

    const Content =[
        
        {number:" 1" , me:"Innovating Your digital Experience."},
        {number:" 2" , work:" I specialize in bridging powerful back-end systems with dynamic front-end experiences, bringing modern web applications to life through clean, functional, and user-focused development."}
        
    ]; 

    return(
        <section className="landingpage" id='home'>
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
                <h1>Meet , Denis Ondeyo</h1>
                {Content.map((Content)=>(
                    <div className="herosContent"key={Content.number}>
                        <h2>{Content.developer}</h2>
                        <h1>{Content.me}</h1>
                        <p>{Content.work}</p>

                    </div>  

                    
                
                ))}

                
                <br /><br />
                <div className="c2a">
                    <button id="workbtn">My Work        <i className="fas fa-code"></i></button>
                    <button id="reachbtn">Reach out     <i className="fas fa-phone"></i></button>
                    
                </div>
                <br /><br />

                <div className="socials-links">
                    <i className='fab fa-github'></i>
                    <i className='fab fa-linkedin'></i>
                    <i className='fab fa-whatsapp'></i>
                    <i className='fab fa-facebook'></i>
                    <i className='fab fa-twitter'></i>
                    <i className='fas fa-phone'></i>
                </div>

            </div>
            <div className="whatsapp">
                <a href="https://wa.me/254726534460"><i className="fab fa-whatsapp"></i></a>
            </div>
        </section>
    )
   
}
export default LandingPageContent