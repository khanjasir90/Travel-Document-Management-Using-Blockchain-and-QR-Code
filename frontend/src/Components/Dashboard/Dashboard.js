import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as FaIcons from 'react-icons/fa';

import "./Dashboard.css";


const Sidebar = () => {
//   const [select, setSelect] = useState(1);
//   const user_data = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("userData");
    navigate("/");
  };

  const [sidebar,setSidebar] = useState(true)
  const showsidebar = () => {
    console.log(sidebar)  
    setSidebar(!sidebar)
}
  return (
    <div className="sidebar__main">
    
      <div className="sidebar__header">
        <h1>Hello NAME 👋</h1>
        <div className={sidebar ? 'on_small_screen' : '' }>
            <FaIcons.FaBars onClick={showsidebar}/>
        </div>
      </div>
      <div className="sidebar__options flex__center flex__flow__down">
        
        <button
            className="sidebar__button flex__center"
        >
            <i className="bi bi-bag-fill" style={{ fontSize: "25px" }}></i>
            <h3>Account ID</h3>
        </button>
        
        <button
          className="sidebar__button flex__center"
          onClick={() => handleLogout()}
        >
          <i className="bi bi-box-arrow-left" style={{ fontSize: "25px" }}></i>
          <h3>Log Out</h3>
        </button>
      </div>
    </div>
  );
};

export default Sidebar;