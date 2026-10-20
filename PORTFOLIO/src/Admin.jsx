import { useState } from "react";
import { Link} from 'react-router-dom'

function Dashboard() {

  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <div className={`admin-container ${isCollapsed ? "sidebar-collapsed" : ""}`}>
      
      <div className="adminsidebar">
    
        <button className="toggle-btn" onClick={() => setIsCollapsed(!isCollapsed)}>
          <i className={isCollapsed ? "fas fa-bars" : "fas fa-times"}></i>
        </button>

        <div className="navlink">
          <i className="fas fa-layer-group"></i>
          <Link to="/Admin">Dashboard</Link>
        </div>

        <div className="navlink">
          <i className="fas fa-computer"></i>
          <Link to="/myprojects" >Projects</Link>
        </div>
        
        <div className="navlink">
          <i className="fas fa-paper-plane"></i>
          <Link to="/messages" >Messages</Link>
        </div>
        
        <div className="navlink">
          <i className="fas fa-user-gear"></i>
          <Link to="/username" >Change Username</Link>
        </div>

        <div className="navlink">
          <i className="fas fa-lock"></i>
          <Link to="/password" >Change Password</Link>
        </div>
      
        
        <div className="navlink">
          <i className="fas fa-globe"></i>
          <a href="/">Portfolio</a>
        </div>
      </div>

      
    </div>
  );
}

export default Dashboard;
