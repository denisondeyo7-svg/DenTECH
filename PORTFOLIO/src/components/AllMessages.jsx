import { useEffect, useState } from "react";

function TotalMessages(){
    const [total, settotal] = useState("");
    useEffect(()=>{
        fetch("http://localhost/dentech-backend/All-messages.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.success){
                settotal(data.results);
            }
        })
        .catch(error => {
            console.log("total error:",error);
        });
    },[]);

    return(
        <div className="adminbox">
            <p>{total}</p>
            <div className="number">
                <h2>Messages </h2>
                <i className="fas fa-message"></i>
            </div>
        </div>
    )
}

export default TotalMessages