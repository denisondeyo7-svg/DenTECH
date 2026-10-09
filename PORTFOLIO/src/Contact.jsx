function Contact(){

    return(
        <section className="Contactsection" id="contact">
            <h1>Get In Touch</h1>
            <div className="contact-wrapper">
                <h1>Have a project in mind ? Let's build something great together.</h1>
                
                <div className="contact-container">
                    <p>Whether you need a website, web application, backend system, or a creative design, I'd love to hear about your idea.</p>
                    <div className="contactdetails">
                        <ul>
                            <li>Email: <a href="mailto:denisondeyo7@gmail.com">denisondeyo7@gmail.com</a></li>
                            <li>Phone | Whatsapp: 0726534460</li>
                            <li>Location: Kakamega town - Kenya</li>
                        </ul>
                    </div>

                    
                </div>
                <div className="form">
                    <form action="" method="post">
                        <h1>Send Request</h1>
                        <div className="input">
                            <label htmlFor="firstname">Firstname</label>
                            <input type="text" name="firstname" required/>
                        </div>

                        <div className="input">
                            <label htmlFor="Lastname">Lastname</label>
                            <input type="text" name="Lastname" required/>
                        </div>

                        <div className="input">
                            <label htmlFor="message">Your Message</label>
                            <textarea name="message" id="message"required></textarea>
                            
                        </div>

                        <button id="sendmessage">Send Message</button>
                    </form>

                </div>
                <h1>Let's Turn Your  idea into  functional  digital Solution</h1>
            </div>
        </section>
    )
}
export default Contact