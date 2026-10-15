import {BrowserRouter , Routes , Route} from 'react-router-dom'
import Header from './Header.jsx'
import LandingPageContent from './LandingPage.jsx'
import About from './About.jsx'
import Myservices from './Services.jsx'
import Contact from './Contact.jsx'
import Footer from './Footer.jsx'
import Projects from './Projects.jsx'
import Reachout from './Contactpage.jsx'
import Dashboard from './Admin.jsx'
import Content from './Dashboard.jsx'
import Login from './AdminLogin.jsx'
import Protected from './ProtectedRoute.jsx'

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
        <Routes>
          <Route path="/" element={<><Header/><Home/></>}/>
          <Route path="/Projects" element={
              <><Header/><Projects/></>}/>
          <Route path="/contact" element={
              <><Header/><Reachout/></>}/>
          <Route path="/login" element={<Login />}
        />

          <Route path="/Admin" element={
            
            <Protected>
              <>
                <Dashboard/>
                <Content/>
              </>
            </Protected>
            }/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}
export default App
