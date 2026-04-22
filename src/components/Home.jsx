import React, { useState, useEffect } from 'react';
import './Home.css';
import sliderImage0 from '../assets/slider_image_0.jpg';
import sliderImage1 from '../assets/slider_image_1.jpg';
import sliderImage2 from '../assets/slider_image_2.jpg';
import sliderImage3 from '../assets/slider_image_3.jpg';
import sliderImage4 from '../assets/slider_image_4.jpg';
import sliderImage5 from '../assets/slider_image_5.png';
import sliderImage6 from '../assets/slider_image_6.jpg';
import sliderImage7 from '../assets/slider_image_7.jpg';
import sliderImage8 from '../assets/slider_image_8.jpg';
import sliderImage9 from '../assets/slider_image_9.jpg';



const Home = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [sliderImage0, sliderImage1, sliderImage2, sliderImage3, sliderImage4, sliderImage5, sliderImage6, sliderImage7, sliderImage8, sliderImage9];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <section id="home" className="home-section">
            <div
                className="hero-background-slider"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
                {images.map((img, index) => (
                    <img
                        key={index}
                        src={img}
                        alt={`Slide ${index + 1}`}
                        className="hero-slide"
                    />
                ))}
            </div>
            <div className="hero-overlay"></div>
            <div className="hero-content-wrapper">
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
            </div>
        </section>
    );
};

export default Home;
