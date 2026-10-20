import { useEffect ,useState } from "react";

function Projects() {

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
  return (
    <section className="Projects">
     
      <div className="proj-container">
        <br /><br />
        <h1>My Projects</h1>
<br />
        <div className="projects-wrapper">
          {message && <p className='message'>{message}</p> }
          

          {projects.map((project)=>(
            <div className="projectCard"key={project.id}>
              <div className="image">
                <img src={`http://localhost/dentech-backend/uploads/${project.image}`} alt={project.image} />
              </div>
              <div className="name">
                <h2>{project.name}</h2>
              </div>
              <div className="description">
                <p>{project.description}</p>
              </div>
              <div className="btn">
                
                <a href={project.url} target="_blank"rel="noopener noreferrer">
                  <button className="view">View Live Site</button>
                </a>

                <p>{project.status}</p>
              </div>
            
            </div>
          ))}
          

        </div>
      </div>
<br /><br /><br /><br /><br />
    </section>
    
  );
}

export default Projects;