import { Link } from 'react-router-dom'
import { useEffect, useState } from "react";


function Content(){
    const boxes = [
        {number:"1" , No:"7+" ,name:"Projects",i:"fas fa-computer"},
        {number:"2" , No:"2" ,name:"LiveProjects",i:"fas fa-globe"},
        {number:"3" , No:"3" ,name:"Under Dev",i:"fas fa-gear"},
        {number:"4" , No:"8+" ,name:"Repos",i:"fab fa-github"}
    ]

    const [username, setUsername] = useState("");

    useEffect(() => {
        fetch("http:// 192.168.18.6/dentech-backend/check-session.php", {
            credentials: "include"
        })
        .then(response => {
            if (!response.ok) {
                throw new Error("Session not found");
            }

            return response.json();
        })
        .then(data => {
            setUsername(data.username);
        })
        .catch(error => {
            console.log("Session error:", error);
        });
    }, []);

    
    function handleLogout() {
        fetch("http://localhost/dentech-backend/logout.php", {
            method: "POST",
            credentials: "include"
        })
        .then(response => response.json())
        .then(data => {
            if (data.loggedout) {
                navigate("/login");
            }
        })
        .catch(error => {
            console.log("Logout error:", error);
        });
    }

    return(
        <section className="admin-content">
            
            <div className="admintop">
                
                <h2 className="welcome-message">Welcome back ,{username}</h2>

                <a href=""onClick={handleLogout}>
                    <p>Logout  <i className='fas fa-power-off'></i></p>
                </a>
            </div>
            
            <div className="content-container">
                
                <div className="boxes">
                    {boxes.map((box)=>(
                        <div className="adminbox"key={box.number}>
                            <p>{box.No}</p>
                            <div className="number">
                                <h2>{box.name}</h2>
                                <i className={box.i}></i>
                            </div>
                        </div>
                    ))}
                </div>
<br /><br />
                <div className="admin-projects-container">
                   <div className="projs">
                        <fieldset>
                            <legend>Projects</legend>
                            <a href="">Campus Study Hub</a>
                            <a href="">JNR Labtronics</a>
                            <a href="">Ceddah students home </a>
                            <a href="">DenTECH</a>
                        </fieldset>
                   </div>

                   
                </div>
            </div>
        </section>
    )
}
export default Content