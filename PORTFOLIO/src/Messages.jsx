import { useEffect ,useState } from "react"


function Adminmessages(){

    const [messages,setMessage] = useState([]);
    const [status, setStatus] = useState("");

    useEffect(()=>{

        fetch("https://dentech.kesug.com/dentech-backend/messages.php",{
            method:"GET",
            credentials:"include",
        })
        .then(response =>response.json())
        .then(result=>{
            if(result.success){
                setMessage(result.data);
                
            }
             else {
                setMessage([]);
                setStatus(result.message);
            }
        })
        .catch(error=>{
            console.log("error",error);
        });

    },[]);


    
    

    return(
        <div className="messages">
            <h1>Messages</h1>

                {status && <p className="message">{status}</p>}
            <div className="message-container">
                
                {messages.map((message)=>(
                    <div className="messagecard"key={message.id}>
                        <div className="content">
                            <p>{message.firstname }<br /> {message.number}</p>
                            <small>{message.message}</small>
                        
                        </div>

                        <button onClick={() => deleteMessage(message.id)}>
                            Delete
                        </button>
                    </div>
                ))}
            </div>
            <br /><br />
        </div>
    )

}
export default Adminmessages