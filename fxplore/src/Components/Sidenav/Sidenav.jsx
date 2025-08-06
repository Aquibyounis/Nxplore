import React, { useState, useEffect } from 'react';
import './Sidenav.css';

const Sidenav = ({ activeLink, setActiveLink }) => {
  const [width, setWidth] = useState(240);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => setIsResizing(true);

  const handleMouseMove = (e) => {
    if (!isResizing) return;
    const newWidth = e.clientX;
    if (newWidth >= 180 && newWidth <= 400) {
      setWidth(newWidth);
    }
  };

  const handleMouseUp = () => setIsResizing(false);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };
  });

  return (
    <div className="sidenav" style={{ width: `${width}px` }}>
      <i className="fa-solid fa-arrows-left-right arrow"></i>
      <div className="sidenav-logo">Nxplore</div>

      <ul className="sidenav-links">
        <li
          className={`sidenav-link ${activeLink === "Dashboard" ? 'active' : ''}`}
          onClick={() => setActiveLink("Dashboard")}
        >
          <i className="fa-solid fa-chart-simple"></i> Dashboard
        </li>
        <li
          className={`sidenav-link ${activeLink === "Rooms" ? 'active' : ''}`}
          onClick={() => setActiveLink("Rooms")}
        >
          <i className="fa-solid fa-box"></i> Rooms
        </li>
        <li
          className={`sidenav-link ${activeLink === "Projects" ? 'active' : ''}`}
          onClick={() => setActiveLink("Projects")}
        >
          <i className="fa-solid fa-code"></i> Projects
        </li>
        <li
          className={`sidenav-link logout ${activeLink === "Logout" ? 'active' : ''}`}
          onClick={() => setActiveLink("Logout")}
        >
          <i className="fa-solid fa-arrow-right-from-bracket"></i> Logout
        </li>
      </ul>

      <div className="resizer" onMouseDown={handleMouseDown}></div>
    </div>
  );
};

export default Sidenav;
