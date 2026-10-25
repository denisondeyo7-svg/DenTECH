import { useEffect, useState } from "react";
import Live from "./components/Live";
import DevProjects from "./components/DevProjects";
import TotalProjects from "./components/Myprojects";
import TotalMessages from "./components/AllMessages";

function Content(){
    
    const [username, setUsername] = useState("");
    

    useEffect(() => {
        fetch("http://localhost/dentech-backend/check-session.php", {
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

    
    
    {/*logout function*/}

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
                
                <h2 className="welcome-message">Welcome back {username}</h2>

                <a href=""onClick={handleLogout}>
                    <p>Logout  <i className='fas fa-power-off'></i></p>
                </a>
            </div>
            
            <div className="content-container">
                
                <div className="boxes">
                    
                        <TotalProjects/>

                        <Live/>

                        <DevProjects/>

                        <TotalMessages/>
                   
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