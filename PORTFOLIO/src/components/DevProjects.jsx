import { useEffect, useState } from "react";

function DevProjects(){
    const [total, settotal] = useState("");
    useEffect(()=>{
        fetch("http://localhost/dentech-backend/Under_dev.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.success){
                settotal(data.myresults);
            }
        })
        .catch(myerror => {
            console.log("total error:", myerror);
        });
    },[]);

    return(
        <div className="adminbox">
            <p>{total}</p>
            <div className="number">
                <h2>Under dev </h2>
                <i className="fas fa-code"></i>
            </div>
        </div>
    )
}

export default DevProjects