import React from 'react';
import { MapPin, Phone, Mail, Calendar } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <h2>Get in Touch</h2>
                <div className="contact-wrapper">
                    <div className="contact-info-card">
                        <h3>Contact Information</h3>
                        <p>We'd love to hear from you. Reach out to us for any queries or to schedule a visit.</p>

                        <div className="contact-details">
                            <div className="contact-detail-item">
                                <div className="icon-box"><MapPin size={24} /></div>
                                <div>
                                    <h4>Visit Us</h4>
                                    <p>No.2, 1st & 2nd floor, 16th main , BTM layout 2nd stage , Bangalore - 560076.</p>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="icon-box"><Phone size={24} /></div>
                                <div>
                                    <h4>Call Us</h4>
                                    <p>+91 80156 29013</p>
                                </div>
                            </div>

                            <div className="contact-detail-item">
                                <div className="icon-box"><Mail size={24} /></div>
                                <div>
                                    <h4>Email Us</h4>
                                    <p>elarachildcarecentre@gmail.com</p>
                                </div>
                            </div>
                        </div>

                        <div className="cta-box">
                            <h4>Ready to start?</h4>
                            <a
                                href="https://docs.google.com/forms/d/e/1FAIpQLSebglSlwyreIa0IyZnBmmEbnkv_E__R60jLj2Pvk-JfegpUHw/viewform"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="cta-button-large"
                            >
                                <Calendar className="cta-icon" />
                                Book Appointment
                            </a>
                        </div>
                    </div>

                    <div className="map-container">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3888.956522175095!2d77.60741007507546!3d12.91051598739929!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTLCsDU0JzM3LjkiTiA3N8KwMzYnMzYuMCJF!5e0!3m2!1sen!2sin!4v1763701560057!5m2!1sen!2sin"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Clinic Location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
