import { useEffect,useState } from "react";

function Live(){
    const[ Live,setLive] = useState("");
    useEffect(()=>{
        fetch("http://localhost/dentech-backend/Live.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response=>response.json())
        .then(data=>{
            if(data.success){
                setLive(data.results);
            }
        })
        .catch(myerror => {
            console.log("total error:", myerror);
        });
    },[]);

    return(
        <div className="adminbox">
            <p>{Live}</p>
            <div className="number">
                <h2>Live Projects</h2>
                <i className="fas fa-rocket"></i>
            </div>
        </div>
    )

    
}
export default Live