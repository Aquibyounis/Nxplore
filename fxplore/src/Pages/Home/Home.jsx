import React, { useState } from 'react';
import Dashboard from '../../Components/Dashboard/Dashboard';
import './Home.css';
import Sidenav from '../../Components/Sidenav/Sidenav';
import Projects from '../../Components/Projects/Projects';
import Rooms from '../../Components/Rooms/Rooms';

const Home = () => {
  const [activeLink, setActiveLink] = useState("Dashboard");

  return (
    <div className='home'>
      <Sidenav activeLink={activeLink} setActiveLink={setActiveLink} />

      <div className="sidehome">
        <div className={`panel ${activeLink === "Dashboard" ? 'visible' : 'hidden'}`}>
          <Dashboard />
        </div>
        <div className={`panel ${activeLink === "Projects" ? 'visible' : 'hidden'}`}>
          <Projects />
        </div>
        <div className={`panel ${activeLink === "Rooms" ? 'visible' : 'hidden'}`}>
          <Rooms />
        </div>
        {/* Add more if needed */}
      </div>
    </div>
  );
};

export default Home;
