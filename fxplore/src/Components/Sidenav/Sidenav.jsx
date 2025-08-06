import React, { useState, useEffect } from 'react';
import './Sidenav.css';

const Sidenav = ({ activeLink, setActiveLink }) => {
  const [width, setWidth] = useState(240);
  const [isResizing, setIsResizing] = useState(false);

  const handleMouseDown = () => {
    setIsResizing(true);
  };

  const handleMouseMove = (e) => {
    if (!isResizing) return;
    const newWidth = e.clientX;
    if (newWidth >= 180 && newWidth <= 400) {
      setWidth(newWidth);
    }
  };

  const handleMouseUp = () => {
    setIsResizing(false);
  };

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
      <i class="fa-solid fa-arrows-left-right arrow"></i>
      <div className="sidenav-logo">Nxplore</div>

      <ul className="sidenav-links">
        {['Dashboard', 'Rooms', 'Projects'].map((item) => (
          <div
            key={item}
            className={`sidenav-link ${activeLink === item ? 'active' : ''}`}
            onClick={() => setActiveLink(item)}
          >
            {item}
          </div>
        ))}
      </ul>

      <div className="resizer" onMouseDown={handleMouseDown}></div>
    </div>
  );
};

export default Sidenav;
