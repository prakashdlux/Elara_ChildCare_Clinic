import React, { useState, useEffect } from 'react';
import './Home.css';
import sliderImage1 from '../assets/slider_image_1.jpg';
import sliderImage2 from '../assets/slider_image_2.jpg';
import sliderImage3 from '../assets/slider_image_3.jpg';

const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [sliderImage1, sliderImage2, sliderImage3];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

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
                        <div
                            className="slider-track"
                            style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                        >
                            {images.map((img, index) => (
                                <img
                                    key={index}
                                    src={img}
                                    alt={`Slide ${index + 1}`}
                                    className="hero-image"
                                />
                            ))}
                        </div>
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
