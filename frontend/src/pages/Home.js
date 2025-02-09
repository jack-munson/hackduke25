import React from 'react'
import { useNavigate } from 'react-router-dom';
import logo from '../logo.svg';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  return (

    <div className="container">

      <div className="content">
    
      <header className="header">
        <div className="logo">
          <img src="houselogo.png" alt="Sheltr Logo" className="logo-img" />
          <h1 className="brand-name">sheltr</h1>
        </div>
      </header>

      <section className = "hero">
        <h2 className="hero-title">A Safe Place <br /> After Disaster</h2>
        <p className="hero-subtitle">
          Helping disaster survivors find temporary homes.
        </p>
      </section>

      <section className = "signup">
        <button 
          className = "findOrOffer"
          onClick={() => navigate("/findhomes")}>
            Get Started!
        </button>
      </section>
    </div>

    <div className="image">
        {/* The background image will fill this section */}
    </div>

    </div>
  );
}

export default Home;
