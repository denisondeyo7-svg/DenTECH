import Serviceimage from './assets/file_00000000997881f4ac036c0ebe8f3bc5.png'
function Myservices(){
    const SectionTitle=[
        {number:"1", Title:"Services"}
    ];

    const services = [
        {number:"1" ,Skill:"Web Development" ,AboutSkill:"Building responsive, modern, and functional websites tailored to different needs."},
        {number:"2" ,Skill:"Frontend Development" ,AboutSkill:"Creating modern, responsive interfaces using HTML, CSS, JavaScript, and React."},
        {number:"3" ,Skill:"Backend Development" ,AboutSkill:"Building secure backend systems with CRUD functionality using PHP, MySQL, and Django."},
        {number:"4" ,Skill:"UI Design" ,AboutSkill:"Designing clean digital interfaces that communicate effectively."}


    ];

    const Tools = [
        {number:"1", toolname:"HTML"},
        {number:"2", toolname:" CSS"},
        {number:"3", toolname:"Javascript"},
        {number:"4", toolname:"React"},
        {number:"5", toolname:"PHP"},
        {number:"6", toolname:"DJANGO"},
        {number:"7", toolname:"mySQL"}
    ]

    return(
        <section className="Services"id='services'>
            <br />
            {SectionTitle.map((SectionTitle)=>(
                <div key={SectionTitle.number}>
                    <h1>{SectionTitle.Title}</h1>
                </div>
            ))}

            <div className="services-wrapper">
                <h2>What I Do</h2>

                <div className="serviceimage">
                    <img src={Serviceimage} alt="" />
                </div>
                <div className="service-card-container">
                    {services.map((service)=>(
                        <div className="service-card"key={service.number}>
                            <h1>{service.Skill}</h1>
                            <p>{service.AboutSkill}</p>
                        </div>
                    ))}

                    
                </div>
                <div className="tools-wrapper">
                    <h1>Technical Toolkit</h1>
                    <div className="tools">
                        
                        {Tools.map((Tool)=>(

                            <div className="tool"key={Tool.number}>
                                <p>{Tool.toolname}</p>
                            </div>
                        ))}
                    </div>
                </div>
            
                
            </div>
        </section>
    )
    

}
export default Myservices