import React from 'react';
import './About.css';

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="container">
                <div className="about-content">
                    <h2>About Us</h2>
                    <div className="mission-card">
                        <h3>Our Mission</h3>
                        <p>
                            Our mission is to provide a safe, inclusive, and nurturing space where every child whether typically developing or with special needs can learn, explore, and grow with confidence. We aim to support each child’s unique potential through holistic, evidence-based therapies, creative learning, and compassionate care. Our goal is to build a community where growth, understanding, and joy go hand in hand for children and their families.
                        </p>
                    </div>

                    <div className="values-grid">
                        <div className="value-item">
                            <span className="value-icon">💖</span>
                            <h4>Compassionate</h4>
                            <p>We lead with kindness and understanding in everything we do.</p>
                        </div>
                        <div className="value-item">
                            <span className="value-icon">🤝</span>
                            <h4>Inclusive</h4>
                            <p>Every child is welcome, valued, and supported here.</p>
                        </div>
                        <div className="value-item">
                            <span className="value-icon">🌱</span>
                            <h4>Growth-Oriented</h4>
                            <p>We focus on progress, potential, and celebrating every milestone.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
