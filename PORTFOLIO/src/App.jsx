import {BrowserRouter , Routes , Route} from 'react-router-dom'

import Header from './Header.jsx'
import LandingPageContent from './LandingPage.jsx'
import About from './About.jsx'
import Myservices from './Services.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import Projects from './Projects.jsx'


function Home() {

  return (
    <>
      
      <LandingPageContent/>
      <br />
      <About/>
      <br /><br /><br /><br />
      <Myservices/>
      <br /><br />
      <Contact/>
      
      
    </>
  );
}

function App(){
  return(
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Projects" element={<Projects/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App
