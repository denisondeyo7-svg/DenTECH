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
import AdminProjects from './AdminProjec.jsx'
import Adminmessages from './Messages.jsx'
import ChangeUser from './ChangeUsername.jsx'
import ChangePass from './Password.jsx'
import Add from './Addprojects.jsx'
import NotFound from "./NotFound";



function Home() {

  return (
    <>
      
      <LandingPageContent/>
      <br />
      <About/>
      <br />
      <Myservices/>
      <br /><br />
      <Contact/>
      <Footer/>
      
      
    </>
  );
}

function App(){
  return(
    <BrowserRouter>
        <Routes>
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<><Header/><Home/></>}/>
          <Route path="/Projects" element={
              <><Header/><Projects/></>}/>
          <Route path="/contact" element={
              <><Header/><Reachout/></>}/>
          <Route path="/Login" element={<Login />}
        />

          <Route path="/Admin" element={
            
            <Protected>
              <>
                <Dashboard/>
                <Content/>
                <AdminProjects/>
                <Adminmessages/>
                <ChangePass/>
                <ChangeUser/>
                <Add/>
              </>
            </Protected>
            }/>
          <Route path="/myprojects" element={
              <>
                <Dashboard/>
                <AdminProjects/>
                <Footer/>
              </>
          }/>

          <Route path="/messages" element={
              <>
                <Dashboard/>
                <Adminmessages/>
                <Footer/>
              </>
          }/>

          <Route path="/password" element={
              <>
                <Dashboard/>
                <ChangePass/>
                <Footer/>
              </>
          }/>

          <Route path="/username" element={
              <>
                <Dashboard/>
                <ChangeUser/>
                <Footer/>
              </>
          }/>

          <Route path="/Addproject" element={
              <>
                <Add/>
                
              </>
          }/>

        </Routes>
      
    </BrowserRouter>
  )
}
export default App
