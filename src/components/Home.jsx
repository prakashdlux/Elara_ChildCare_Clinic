import React from 'react';
import './Home.css';
import heroImage from '../assets/hero_image.png';

const Home = () => {
    return (
        <section id="home" className="home-section">
            <div className="container">
                <div className="hero-content">
                    <h1>Nurturing Every Child's <span className="highlight">Potential</span></h1>
                    <p className="hero-subtitle">
                        A safe, inclusive, and joyful space where children learn, grow, and thrive together.
                    </p>
                    <div className="hero-buttons">
                        <a href="#services" className="btn-primary">Explore Services</a>
                        <a href="#contact" className="btn-secondary">Contact Us</a>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <div className="hero-image-container">
                        <img src={heroImage} alt="Happy children playing in a magical environment" className="hero-image" />
                        <div className="floating-shapes">
                            <span className="shape shape-1">⭐</span>
                            <span className="shape shape-2">🎈</span>
                            <span className="shape shape-3">🎨</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
