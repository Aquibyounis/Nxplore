import React from 'react';
import './AboutPage.css'; // Corrected import for standard CSS
import { FaBrain, FaFileUpload, FaTasks, FaInfinity } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assuming you're using react-router for navigation
import {useState} from 'react';
import Navbar from '../../Components/Navbar/Navbar'; // Adjust the path as necessary

const AboutPage = () => {
  const [curr,setCurr]=useState("ROOM");
  const handleCurr = (e) => {
    setCurr(e.target.innerText);
  }

  return (
    <div className="about-container">
      <Navbar/>
      {/* Hero Section */}
      <header className="hero-section">
        <div className="left-heo">
          <div className="line5"></div>
          <h2>AI features</h2>
          <p>Study Like a PRO 🧠</p>
        </div>
        <div className="hero-text">
          <h1>NXplore</h1>
          <p className="subtitle">
            Crafting the Future of Focused Preparation.
          </p>
        </div>
        <div className="right-heo">
          <div className="line6"></div>
          <h2>CODE VIZ</h2>
          <p>Vizualize code ✨</p>
        </div>
      </header>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="inner-mission">
          <h2><bold style={{color: '#1E4746FF'}}>Our Mission:</bold> De-clutter Your Mind</h2>
          <p>
            In a world of digital distraction, achieving deep focus is the ultimate challenge. Traditional study methods are scattered across countless tabs, disconnected apps, and physical notebooks. Nxplore was born from a simple idea: what if you had a single, intelligent, and serene space for every learning goal? We're here to build that reality.
          </p>
        </div>
        <div className={`img-mission ${curr}`}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
          <div className="line4"></div>
        </div>
        <div className="chotanav">
          <Link to="/" onClick={() => setCurr("ROOM")} className={`cbtn ${curr === "ROOM" ? "active" : ""}`}>ROOM</Link>
          <Link to="/" onClick={handleCurr} className={`cbtn ${curr === "CODE" ? "active" : ""}`}>CODE</Link>
          <Link to="/" onClick={handleCurr} className={`cbtn ${curr === "VIZ" ? "active" : ""}`}>VIZ</Link>
        </div>
      </section>


      {/* Features Section */}
      <section className="features-section">
        <h2>What's Inside Each Room?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <FaFileUpload />
            </div>
            <h3>Unified Knowledge Base</h3>
            <p>Upload and organize all your study materials—notes, documents, PDFs, and web links—in one clean, accessible library.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaBrain />
            </div>
            <h3>Your Personal AI Tutor</h3>
            <p>Stuck on a problem? Our AI assistant, trained on your uploaded content, provides instant clarification, summarizes complex topics, and helps you conquer challenging questions.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <FaTasks />
            </div>
            <h3>Goal-Oriented Tools</h3>
            <p>Track your progress, set milestones, and manage your tasks effectively within the context of your goal. Stay motivated and see your progress clearly.</p>
          </div>
        </div>
      </section>

      {/* The "Room" Concept Section */}
      <section className="concept-section">
        <div className="concept-icon">
          <FaInfinity size={60} />
        </div>
        <h2>The Preparation Room: Your Personal HQ</h2>
        <p>
          Nxplore introduces a revolutionary concept: a dedicated digital <strong>'Room'</strong> for each of your goals. Whether you're preparing for an exam, or mastering a new skill, your Room is your personal headquarters. It's a self-contained ecosystem designed to hold everything you need, and nothing you don't.
        </p>
      </section>

      
      {/* Call to Action */}
      <footer className="cta-section">
        <h2>Ready to Build Your First Room?</h2>
        <Link className="cta-button" to="/login">Start Exploring Now</Link>
      </footer>
    </div>
  );
};

export default AboutPage;