import { useState } from "react";

function Contact(){

    const [message, setMessage] = useState("");

    function handleSubmit(event){

        event.preventDefault();

        const form = event.target;

        fetch("/dentech-backend/contact.php",{

            method: "POST",
            body: new FormData(form)

        })
        
        .then(response => response.json())
        .then(data => {
            setMessage("Your message has been sent successfully!");
        });
    }
    return(
        <section className="Contactsection" id="contact">
            <h1>Need a <span className="den"> Talk?</span></h1>
            <div className="contact-wrapper">
               
                <div className="contact-cards">

                    <h1>Let's build something beautiful together.</h1>
                    
                    <div className="contact-container">
                        <h2>Need a website?  I'd love to hear about your idea.</h2>
                        <div className="contactdetails">
                            <ul>
                                <li>Email: <a href="mailto:denisondeyo7@gmail.com">denisondeyo7@gmail.com</a></li>
                                <li>Phone | Whatsapp: 0726534460</li>
                                <li>Location: Kakamega town - Kenya</li>
                                <li>Send sms: <a href="sms:+254726534460">sms</a></li>

                            </ul>
                        </div>

                        
                    </div>
                    <div className="form">
                        <form onSubmit={handleSubmit}>
                            <p>Send Request</p>
                            {message && <p className="message">{message}</p>}
                            <div className="input">
                                <label htmlFor="firstname">Firstname</label>
                                <input type="text" name="firstname"id="firstname" required/>
                            </div>

                            <div className="input">
                                <label htmlFor="lastname">Lastname</label>
                                <input type="text" name="lastname" id="lastname"required/>
                            </div>

                            <div className="input">
                                <label htmlFor="number">Number</label>
                                <input type="tel" name="number"id="number" required/>
                            </div>

                            <div className="input">
                                <label htmlFor="message">Your Message</label>
                                <textarea name="message" id="message"required></textarea>
                                
                            </div>
    <br />
                            <button id="sendmessage">Send Message</button>
                        </form>

                    </div>

                </div>                
            </div>
        </section>
    )
}
export default Contact