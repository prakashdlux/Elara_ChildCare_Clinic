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
                                <span>+123 456 7890</span>
                            </a>
                            <a href="mailto:info@elara.com" className="contact-item">
                                <Mail size={16} />
                                <span>info@elara.com</span>
                            </a>
                            <div className="contact-item">
                                <MapPin size={16} />
                                <span>123 Care Street, City</span>
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
                            <a href="#home" className="nav-link">Home</a>
                            <a href="#services" className="nav-link">Services</a>
                            <a href="#about" className="nav-link">About Us</a>
                            <a href="#contact" className="nav-link">Contact</a>
                            <a href="https://docs.google.com/forms/u/0/" target="_blank" rel="noopener noreferrer" className="nav-link cta-link">
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
