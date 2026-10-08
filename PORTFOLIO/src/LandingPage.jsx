function LandingPageContent(){

    const Content =[
        
        {number:" 1" , me:"Innovating Your digital Experience."},
        {number:" 2" , work:" I specialize in bridging powerful back-end systems with dynamic front-end experiences, bringing modern web applications to life through clean, functional, and user-focused development."}
        
    ];

    const stats = [
        {number:" 1" ,statsHeadline:"Repos" , VALUE: "7"},
        {number:" 2" ,statsHeadline:"Live Projects" , VALUE:"4"},
        {number:" 3" ,statsHeadline:"My Age" , VALUE:"19"}
    ];

   

    return(
        <section className="landingpage">
            <div className="heros">

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
                <div className="stats">
                    <div className="stats-wrapper">
                    {stats.map((stat)=>(

                        <div className="statsbox"key={stat.number}>
                            <p>{stat.statsHeadline} </p>
                            <h2>{stat.VALUE}</h2>
                        </div>

                        


                    ))}
                    </div>
                            
                </div>
            </div>
            <div className="whatsapp">
                <a href="https://wa.me/254726534460"><i className="fab fa-whatsapp"></i></a>
            </div>
        </section>
    )
   
}
export default LandingPageContent