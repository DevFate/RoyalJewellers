// src/components/Guide.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import './Guide.css';
import ringSizeChart from '../Assets/ring_size_chart.jpg'; // Import the ring size chart image

const Guide = () => {
  return (
    <div className="guide-container">
      <h1>Jewelry Guide</h1>
      
      <section className="faq">
        <h2>Frequently Asked Questions (FAQs)</h2>
        <div className="faq-item">
          <h3>Q: What types of stones are used in your jewelry?</h3>
          <p>A: We use a variety of precious and semi-precious stones including diamonds, emeralds, rubies, sapphires, and pearls.</p>
        </div>
        <div className="faq-item">
          <h3>Q: Is your gold ethically sourced?</h3>
          <p>A: Yes, we use recycled and ethically sourced gold to ensure minimal environmental impact and ethical sourcing practices.</p>
        </div>
        <div className="faq-item">
          <h3>Q: How can I determine my ring size?</h3>
          <p>A: You can determine your ring size by using our ring size chart and guide provided below.</p>
        </div>
        <div className="faq-item">
          <h3>Q: How should I care for my jewelry?</h3>
          <p>A: Keep your jewelry clean and store it in a safe place. Avoid exposure to harsh chemicals and extreme temperatures.</p>
        </div>
      </section>
      
      <section className="resources">
        <h2>Resources on Stones and Gold</h2>
        <div className="resource-item">
          <h3>Diamonds</h3>
          <p>Diamonds are the hardest known natural material and are prized for their brilliance and clarity. They are commonly used in engagement rings and high-end jewelry.</p>
        </div>
        <div className="resource-item">
          <h3>Emeralds</h3>
          <p>Emeralds are known for their vibrant green color and are often used in fine jewelry. They are one of the four recognized precious gemstones.</p>
        </div>
        <div className="resource-item">
          <h3>Rubies</h3>
          <p>Rubies are valued for their deep red color and are associated with love and passion. They are another of the four precious gemstones.</p>
        </div>
        <div className="resource-item">
          <h3>Sapphires</h3>
          <p>Sapphires come in various colors, although blue sapphires are the most well-known. They are durable and perfect for daily wear.</p>
        </div>
        <div className="resource-item">
          <h3>Gold</h3>
          <p>Gold is a popular metal for jewelry due to its luster and malleability. We offer jewelry in yellow gold, white gold, and rose gold, all of which are ethically sourced and recycled.</p>
        </div>
      </section>
      
      <section className="ring-size-guide">
        <h2>Ring Size Guide</h2>
        <p>Finding your ring size is easy with our simple guide. Follow these steps to measure your ring size at home:</p>
        <ol>
          <li>
            <strong>Wrap a string or paper around your finger:</strong> Use a piece of string or a strip of paper to wrap around the base of your finger. Ensure it's snug but not too tight.
          </li>
          <li>
            <strong>Mark the point where the ends meet:</strong> Use a pen to mark where the string or paper overlaps.
          </li>
          <li>
            <strong>Measure the length:</strong> Use a ruler to measure the length of the string or paper from the starting point to the mark. This measurement is the circumference of your finger.
          </li>
          <li>
            <strong>Find your ring size:</strong> Use the chart below to find your ring size based on the circumference measurement.
          </li>
        </ol>
        <img src={ringSizeChart} alt="Ring Size Chart" className="ring-size-chart" />
      </section>
      
      <section className="additional-info">
        <h2>Additional Information</h2>
        <p>
          For more information about our jewelry and services, please visit our 
          <Link to="/about"> About Us </Link> page. You can also contact our customer service for personalized assistance.
        </p>
      </section>
    </div>
  );
};

export default Guide;
