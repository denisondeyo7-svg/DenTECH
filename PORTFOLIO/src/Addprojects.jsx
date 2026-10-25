import { useState } from "react"

import { useNavigate } from "react-router-dom";


function Add(){

    const navigate = useNavigate();
    
    const [message, setMessage]=useState("");

    function handleSubmit(event){
        event.preventDefault();

        const form = event.target;

        fetch("http://localhost/dentech-backend/addproject.php",{
            method:"POST",
            body: new FormData(form),
            credentials:"include",

        })

        .then(response => response.json())

        .then(data =>{
           
            if(!data.success){
                setMessage(data.message);
            }
            else{
                navigate("/myprojects");
                
                
            }
        })

        .catch(error =>{
            console.log("Error:", error);
            setMessage("Something went wrong. Please try again.");
        });
    }


    return(
        <div className="adminform">
            <form onSubmit={handleSubmit} encType="multipart/form-data">

                <h1>Add Projects</h1>
                
                {message && <p className="message">{message}</p> }
                             
            <div className="input">
                <label htmlFor="name">Project name      <i className="fas fa-computer"></i></label>
                <input
                type="text"
                name="name"
                id="name"
                required
                />
            </div>

            <div className="input">
                <label htmlFor="description">Project description      <i className="fas fa-pen"></i></label>
                <textarea
                name="description"
                id="description"
                required
                >
                </textarea>
            </div>

            <div className="input">
                <label htmlFor="description">Project URL      <i className="fas fa-globe-americas"></i></label>
                <input
                type="text"
                name="url"
                id="url"
                required
                />
            </div>
            <div className="input">
                <label htmlFor="tools">Development tools      <i className="fas fa-hammer"></i></label>
                <input
                type="text"
                name="tools"
                id="tools"
                required
                />
            </div>

            <div className="input">
                <label htmlFor="image">Project image      <i className="fas fa-layer-group"></i></label>
                <input
                type="file"
                name="image"
                id="image"
                required
                />
            </div>



                <button type="submit" id="loginbtn">Add Project    <i className="fas fa-server"></i></button>
            </form>
        </div>

    )
}
export default Add