import aboutImage from './assets/1785571552364 (1)-Photoroom.png'

function About(){

    const content = [
        {number:"1",mytitle:"Hear from me", contentTitle:"Who’s Denis ?", contentTheme:"The Developer Behind the Code" , mycontent:"I’m Denis Ondeyo, an aspiring software developer and IT professional with a passion for technology, creativity, and problem-solving. I’m currently pursuing a BSc in Information Technology at Kibabii University, while building practical experience through personal projects and continuous learning. I enjoy turning ideas into functional digital solutions through web development, programming. My goal is to keep growing as a developer, create technology that solves real-world problems, and build a career around innovation and meaningful digital solutions."},
        ];
    const skills = [
        {number:"01" , title:"Web development"},
        {number:"02" , title:"React development"},
        {number:"03" , title:"PHP & Mysql"},
        {number:"04" , title:"Django development"},
        {number:"05" , title:"UI & UX Design"}
    ];

    
    return(

        <section>
            <div className="about"id='about'>
                <br /><br />
                <h1>About Me</h1>
<br /><br />
    
                <div className="about-wrapper">

                    <div className="aboutimage">
                        <img src={aboutImage} alt="" />
                    </div>
                    <div className="about-content">
                        
                        {content.map((content)=>(
                            <div className="about-card"key={content.number}>
                                <p className='mytitle'>{content.mytitle}<i className='fas fa-layer-group'></i></p>
                                <h1>{content.contentTitle}</h1>
                                <h1>{content.contentTheme}</h1>
                                <p>{content.mycontent}</p>
                                <br />
                                <button id='aboutbtn'>View My Projects <i className='fas fa-globe'></i></button>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
                
        </section>
    )
}
export default About;