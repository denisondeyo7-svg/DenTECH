import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login(){
    const navigate = useNavigate();
    
    const [message, setMessage] = useState("");


    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;

        fetch("http://localhost/dentech-backend/login.php", {
            method: "POST",
            body: new FormData(form),
            credentials: "include"
        })

        .then(response => response.json())
        .then(data => {
            
            setMessage(data.message);

            if (data.authenticate) {
                navigate("/Admin");
            }
        })
        
        .catch(error => {
            console.log("Error:", error);
            setMessage("Something went wrong. Please try again.");
        });
    }

    return(

        <div className="adminform">
            <form onSubmit={handleSubmit}>

                <h1>Admin Login</h1>
                
                {message &&<p className="message">{message}</p>}             
            <div className="input">
                <label htmlFor="username">Username      <i className="fa-regular fa-user"></i></label>
                <input
                type="text"
                name="username"
                id="username"
                required
                />
            </div>

            <div className="input">
                <label htmlFor="password">Password      <i className="fas fa-lock"></i></label>
                <input
                type="password"
                name="password"
                id="password"
                required
                />
            </div>


<br />
                <button type="submit" id="loginbtn">Login     <i className="fas fa-database"></i></button>
            </form>
        </div>

    )
}
export default Login