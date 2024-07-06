// src/components/AboutUs.js
import React from 'react';
import './AboutUs.css';
import manufacturingImage from '../Assets/making_style.jpg';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>About Us</h1>
      <section className="manufacturer-info">
        <h2>Manufacturer Information</h2>
        <img src={manufacturingImage} alt="Jewelry Manufacturing" className="manufacturing-image" />
        <p>
          Our jewelry is crafted by skilled artisans from the finest materials.
          We work with manufacturers who have over 50 years of experience in the
          jewelry industry. Our partners are committed to ethical sourcing and
          environmental sustainability.
        </p>
        <p>
          Each piece is meticulously inspected to ensure the highest quality
          standards. We use conflict-free diamonds and gemstones, and our gold
          and silver are recycled and refined to minimize environmental impact.
        </p>
        <p>
          Our main manufacturing facility is located in the heart of the
          jewelry district in New York City. We also have satellite facilities
          in Italy and India, where traditional techniques are blended with
          modern technology to create exquisite pieces.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
