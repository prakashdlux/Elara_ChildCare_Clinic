import React from 'react';
import { Phone, Mail, MapPin, Menu, X } from 'lucide-react';
import './Header.css';

const Header = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    return (
        <header className="main-header">
            <div className="header-top">
                <div className="container">
                    <div className="header-top-content">
                        <div className="contact-info">
                            <a href="tel:+1234567890" className="contact-item">
                                <Phone size={16} />
                                <span>+91 80156 29013</span>
                            </a>
                            <a href="mailto:info@elara.com" className="contact-item">
                                <Mail size={16} />
                                <span>elarachildcarecentre@gmail.com</span>
                            </a>
                            <div className="contact-item">
                                <MapPin size={16} />
                                <span>BTM layout 2nd stage , Bangalore</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="header-main">
                <div className="container">
                    <div className="header-main-content">
                        <div className="logo-section">
                            <div className="logo-text">
                                <h1>Elara</h1>
                                <p>ChildCare Clinic</p>
                            </div>
                        </div>

                        <nav className={`main-nav ${mobileMenuOpen ? 'mobile-open' : ''}`}>
                            <button
                                className="mobile-menu-close"
                                onClick={() => setMobileMenuOpen(false)}
                                aria-label="Close menu"
                            >
                                <X size={24} />
                            </button>
                            <a href="#home" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Home</a>
                            <a href="#services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</a>
                            <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</a>
                            <a href="#contact" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Contact</a>
                            <a href="https://docs.google.com/forms/d/e/1FAIpQLSebglSlwyreIa0IyZnBmmEbnkv_E__R60jLj2Pvk-JfegpUHw/viewform" target="_blank" rel="noopener noreferrer" className="nav-link cta-link" onClick={() => setMobileMenuOpen(false)}>
                                Book Appointment
                            </a>
                        </nav>

                        <button
                            className="mobile-menu-toggle"
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            aria-label="Toggle menu"
                        >
                            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
