import { useState } from "react";

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
          <a href="">Dashboard</a>
        </div>

        <div className="navlink">
          <i className="fas fa-computer"></i>
          <a href="">Projects</a>
        </div>
        
        <div className="navlink">
          <i className="fas fa-paper-plane"></i>
          <a href="">Messages</a>
        </div>
        
        <div className="navlink">
          <i className="fas fa-gear"></i>
          <a href="">Account</a>
        </div>
        
        <div className="navlink">
          <i className="fas fa-power-off"></i>
          <a href="">Logout</a>
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
