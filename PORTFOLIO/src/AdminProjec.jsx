import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom'



function AdminProjects() {
  const[ projects,setProject] = useState([]);
  const[ message,setmessage] = useState("");

  useEffect(()=>{

    fetch("https://dentech.kesug.com/dentech-backend/projects.php",{
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
      
        <h1>Projects</h1>
      <div className="proj-container">
        <div className="buttons">
            <Link to="/Addproject"id='addproj'>Add a New Project  <i class="fas fa-plus"></i></Link>
        </div>

        <div className="projects-wrapper">
          {message && <p className='message'>{message}</p> }
          

          {projects.map((project)=>(
            <div className="projectCard"key={project.id}>
              <div className="image">
                <img src={`https://dentech.kesug.com/dentech-backend/uploads/${project.image}`} alt={project.image} />
              </div>
              <div className="name">
                <h2>{project.name}</h2>
              </div>
              <div className="description">
                <p>{project.description}</p>
              </div>
              <div className="btn">
                
                <a href={project.url} target="_blank"rel="noopener noreferrer">
                  <button>View Live Site</button>
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

export default  AdminProjects;