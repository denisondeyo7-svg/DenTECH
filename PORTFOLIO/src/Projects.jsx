import projImage from './assets/Screenshot 2026-10-10 140511.png'

function Projects() {
  return (
    <section className="Projects">
      <div className="load"></div>
      <div className="proj-container">
        <h1>My Projects</h1>

        <div className="projects-wrapper">
          

          <div className="projectCard">
            <div className="image">
              <img src={projImage} alt="" />
            </div>
            <div className="name">
              <h2>Campus Study Hub</h2>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus modi!</p>
            </div>
            <div className="btn">
              <button>View Live Site</button>
            </div>
          </div>

          <div className="projectCard">
            <div className="image">
              <img src={projImage} alt="" />
            </div>
            <div className="name">
              <h2>Campus Study Hub</h2>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus modi!</p>
            </div>
            <div className="btn">
              <button>View Live Site</button>
            </div>
          </div>

          <div className="projectCard">
            <div className="image">
              <img src={projImage} alt="" />
            </div>
            <div className="name">
              <h2>Campus Study Hub</h2>
            </div>
            <div className="description">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, ducimus modi!</p>
            </div>
            <div className="btn">
              <button>View Live Site</button>
            </div>
          </div>

        </div>
      </div>
<br /><br /><br /><br /><br />
    </section>
    
  );
}

export default Projects;