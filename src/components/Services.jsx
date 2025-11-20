import React, { useState } from 'react';
import {
  Puzzle,
  Smile,
  Palette,
  BookOpen,
  Accessibility,
  School,
  Sun,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import './Services.css';

const servicesData = [
  {
    title: "Occupational Therapy",
    intro: "Building essential motor and sensory skills.",
    description: "Our Occupational Therapy sessions help children build essential motor, sensory, and coordination skills. Through engaging, play-based activities, we focus on improving independence and daily functioning. Each session is customized to support the child’s unique developmental needs and confidence.",
    icon: <Puzzle size={32} />
  },
  {
    title: "Behavioural Therapy",
    intro: "Positive behaviors and social skills.",
    description: "Behavioural Therapy helps children learn positive behaviors, communication, and social interaction skills. Using structured, evidence-based approaches, we guide them to manage emotions and adapt better to their environment. Our goal is to bring meaningful, lasting changes in their everyday lives.",
    icon: <Smile size={32} />
  },
  {
    title: "Art Therapy",
    intro: "Creative expression for emotional growth.",
    description: "Art Therapy allows children to express their thoughts and feelings creatively through art and play. It promotes emotional growth, self-awareness, and relaxation in a safe, supportive setting. Every session encourages confidence, focus, and communication through creative exploration.",
    icon: <Palette size={32} />
  },
  {
    title: "Special Education",
    intro: "Individualized learning support.",
    description: "Our Special Education program provides individualized learning support for children with diverse needs. Lessons are designed to match each child’s pace and learning style, ensuring steady academic growth. We work closely with families to help children achieve both educational and personal milestones.",
    icon: <BookOpen size={32} />
  },
  {
    title: "ADL Training & Sensory Integration",
    intro: "Independence in daily routines.",
    description: "ADL Training focuses on developing independence in everyday tasks such as dressing, eating, and grooming. Sensory Integration therapy helps children respond calmly and effectively to different sensory inputs. Together, they enhance a child’s ability to function smoothly in daily routines.",
    icon: <Accessibility size={32} />
  },
  {
    title: "School Readiness",
    intro: "Preparing for a successful school start.",
    description: "Our School Readiness program helps children transition confidently into the school environment. It focuses on improving attention, social interaction, and classroom behavior. By strengthening early learning skills, we prepare each child for a successful start to school life.",
    icon: <School size={32} />
  },
  {
    title: "Day Care",
    intro: "Safe, caring, and stimulating environment.",
    description: "Our Day Care offers a safe, caring, and stimulating environment for children throughout the day. We combine fun activities with learning, homework support, and healthy routines. Every child receives personal attention to grow happily in a structured and nurturing space.",
    icon: <Sun size={32} />
  }
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleService = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="services-container">
      <section className="services-section" id="services">
        <div className="container">
          <h2>Our Services</h2>
          <div className="services-grid">
            {servicesData.map((service, index) => (
              <div
                key={index}
                className={`service-card ${expandedIndex === index ? 'expanded' : ''}`}
                onClick={() => toggleService(index)}
              >
                <div className="service-header">
                  <div className="service-icon-wrapper">
                    {service.icon}
                  </div>
                  <div className="service-title-wrapper">
                    <h3>{service.title}</h3>
                    <p className="service-intro">{service.intro}</p>
                  </div>
                  <div className="service-toggle-icon">
                    {expandedIndex === index ? <ChevronUp /> : <ChevronDown />}
                  </div>
                </div>
                <div className="service-content">
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
