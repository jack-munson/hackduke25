import React from "react";
import "./FindHomes.css";
import home1 from "../image/home1.png";
import home2 from "../image/home2.png";
import home3 from "../image/home3.png";
import home4 from "../image/home4.png";
import home5 from "../image/home5.png";
import home6 from "../image/home6.png";
import home7 from "../image/home7.png";

const HomePage = () => {


  return (
    <div className="homepage">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">sheltr</div>
        <div className="search-bar">
          <input type="text" placeholder="Search something here" />
          <button className="filter-icon">⚙️</button>
        </div>
  
      </nav>

      {/* Hero Section */}
      <div className="hero-section">
        <div className="cta-box find-home">
          <h2>Find a Safe Place to Stay</h2>
          <p>Connect with people offering temporary shelter after a natural disaster.</p>
          <button>Find a Home</button>
        </div>
        <div className="cta-box offer-home">
          <h2>Open Your Home to Those in Need</h2>
          <p>Help disaster survivors by listing your available space.</p>
          <button>Offer a Home</button>
        </div>
      </div>

      {/* Filters */}
      <div className="filters">
        <div className="filter-item">📍 Locations</div>
        <div className="filter-item">📅 Date</div>
        <div className="filter-item">🏠 Length of Stay</div>
        <div className="filter-item">👥 Number of Guests</div>
        <button className="filter-btn">🔄</button>
      </div>


      {/* Recently Added Homes */}
      <section className="homes-section">
        <h3>Recently Added Homes</h3>
        <div className="homes-grid">
    {[
      { city: "New Orleans, Louisiana", img: home5 },
      { city: "Houston, Texas", img: home6 },
      { city: "Miami, Florida", img: home7 },
      { city: "Los Angeles, California", img: home1 },
    ].map((home, index) => (
      <div key={index} className="home-card">
        <img 
          className="home-image" 
          src = {home.img}
        ></img>
        <h4>{home.city}</h4>
              <p>🏠 Short-term | 🏡 Private Room | 👥 2 People</p>
              <button>Request Stay</button>
            </div>
          ))}
        </div>
      </section>

      {/* Highlighted Homes */}
      <section className="homes-section">
  <h3>Highlighted Homes</h3>
  <div className="homes-grid">
    {[
      { city: "Oklahoma City, Oklahoma", img: home1 },
      { city: "Honolulu, Hawaii", img: home2 },
      { city: "Denver, Colorado", img: home3 },
      { city: "Memphis, Tennessee", img: home4 },
    ].map((home, index) => (
      <div key={index} className="home-card">
        <img 
          className="home-image" 
          src = {home.img}
        ></img>
        <h4>{home.city}</h4>
        <p>🏠 Long-term | 🏡 Entire Home | 👥 3 People</p>
        <button>Request Stay</button>
      </div>
    ))}
  </div>
  <button className="show-more">Show more</button>
</section>


      {/* Footer */}
      <footer className="footer">
        <div className="footer-logo">sheltr</div>
        <p>A Safe Place After Disaster. Helping disaster survivors find temporary homes.</p>
        <div className="footer-links">
          <div className="footer-column">
            <h4>About</h4>
            <p>How it works</p>
            <p>Featured</p>
            <p>Partnership</p>
          </div>
          <div className="footer-column">
            <h4>Community</h4>
            <p>Events</p>
            <p>Blog</p>
            <p>Podcast</p>
          </div>
          <div className="footer-column">
            <h4>Socials</h4>
            <p>Discord</p>
            <p>Instagram</p>
            <p>Twitter</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p>©2025 sheltr. All rights reserved</p>
          <p>Privacy & Policy | Terms & Condition</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
