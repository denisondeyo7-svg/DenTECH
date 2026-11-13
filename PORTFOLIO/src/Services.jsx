
import { useEffect ,useState } from "react";
import Projects from "./Projects.jsx"


  
function Myservices(){
    const[ projects,setProject] = useState([]);
  const[ message,setmessage] = useState("");

  useEffect(()=>{

    fetch("http://localhost/dentech-backend/projects.php",{
      method:"GET",
      credentials:"include",
    })

    .then(response=> response.json())
    .then(result=>{
      if(result.success){
        setProject(result.data);
      }
      else{
        setmessage(result.message);
      }
    })

    .catch(error=>{
      console.log("error:",error);
    });

  },[]);
    

    const services = [
        {number:"1" ,i:"fas fa-code",Skill:"Web Development" ,AboutSkill:"Building responsive, modern, and functional websites tailored to different needs."},
        {number:"2" ,i:"fas fa-computer" ,Skill:"Frontend Development" ,AboutSkill:"Creating modern, responsive interfaces using HTML, CSS, JavaScript, and React."},
        {number:"3" ,i:"fas fa-database", Skill:"Backend Development" ,AboutSkill:"Building secure backend systems with CRUD functionality using PHP, MySQL."},
        


    ];

    const Tools = [
        {number:"1", logo:"fab fa-html5",toolname:"HTML"},
        {number:"2", logo:"fab fa-css",toolname:" CSS"},
        {number:"3", logo:"fab fa-js",toolname:"Javascript"},
        {number:"4", logo:"fab fa-react",toolname:"React"},
        {number:"5", logo:"fab fa-php",toolname:"PHP"},
        {number:"6", logo:"fas fa-database",toolname:"SQL db"}
    ]

    return(
        <section className="Services"id='services'>
            <br />
           <h1>My <span className='den'>Services</span></h1>

            <div className="services-wrapper">
                
                <h2>What <span className='den'>I dO</span></h2>
<br />
                
               
                <div className="service-card-container">
                    {services.map((service)=>(
                        <div className="service-card"key={service.number}>
                            <h3><i className={service.i}></i></h3>
                            <h1>{service.Skill}</h1>
                            <p>{service.AboutSkill}</p>
                        </div>
                    ))}

                    
                </div>
                <br />
                <div className="tools-wrapper">
                    <h1>Technical Toolkit</h1>
                    <div className="tools">
                        
                        {Tools.map((Tool)=>(

                            <div className="tool"key={Tool.number}>
                                <p>{Tool.toolname}</p>
                                <p className="icons"><i className={Tool.logo}></i></p>
                            </div>
                        ))}
                    </div>
                </div>

                <br />
            
                
            </div>
                <Projects/>
        </section>
    )
    

}
export default Myservices