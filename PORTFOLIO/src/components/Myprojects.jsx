import { useEffect, useState } from "react";

function TotalProjects(){

    const [total, settotal] = useState("");

    useEffect(()=>{
        fetch("http://localhost/dentech-backend/Total_projects.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.success){
                settotal(data.results);
            }
        })
        .catch(myerror => {
            console.log("total error:", myerror);
        });
    },[]);

    return(
        <div className="adminbox">
            {total && <p>{total}</p> }
            <div className="number">
                <h2>All Projects </h2>
                <i className="fa-regular fa-folder"></i>
            </div>
        </div>
    )
}

export default TotalProjects