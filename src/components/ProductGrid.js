// src/components/ProductGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css';
import p1 from '../Assets/diamond_braclet.jpg';
import p2 from '../Assets/diamond_heart_neck.jpg';
import p3 from '../Assets/emerald_necklace.jpg';
import p4 from '../Assets/pearl_braclet.jpg';
import p5 from '../Assets/pearl_earings.jpg';
import p6 from '../Assets/royal_gold_earings.jpg';
import p7 from '../Assets/ruby_ring.jpg';
import p8 from '../Assets/saphire_ring.jpg';
import p9 from '../Assets/diamond_braclet.jpg';
import p10 from '../Assets/diamond_heart_neck.jpg';
import p11 from '../Assets/emerald_necklace.jpg';
import p12 from '../Assets/pearl_braclet.jpg';
import p13 from '../Assets/pearl_earings.jpg';
import p14 from '../Assets/royal_gold_earings.jpg';
import p15 from '../Assets/ruby_ring.jpg';
import p16 from '../Assets/saphire_ring.jpg';




const products = [
  { id: 1, price: "$599.99 CAD", name: "Diamond Braclet", image: p1, description: "A stunning diamond bracelet that exudes elegance and sophistication. Perfect for any special occasion." },
  { id: 2, price: "$799.99 CAD", name: "Diamond Heart Necklace", image: p2, description: "A beautiful diamond heart necklace that symbolizes love and commitment. An ideal gift for someone special." },
  { id: 3, price: "$999.99 CAD", name: "Emerald Necklace", image: p3, description: "An exquisite emerald necklace that adds a touch of luxury and glamour to your outfit." },
  { id: 4, price: "$199.99 CAD", name: "Pearl Braclet", image: p4, description: "A classic pearl bracelet that brings timeless beauty and grace to your jewelry collection." },
  { id: 5, price: "$249.99 CAD", name: "Pearl Earings", image: p5, description: "Elegant pearl earrings that add a touch of sophistication to any ensemble." },
  { id: 6, price: "$499.99 CAD", name: "Royal Gold Earings", image: p6, description: "Royal gold earrings that showcase opulence and grandeur, perfect for special occasions." },
  { id: 7, price: "$2299.99 CAD", name: "Ruby Ring", image: p7, description: "A breathtaking ruby ring that combines boldness and beauty, making a striking statement." },
  { id: 8, price: "$1199.99 CAD", name: "Saphire Ring", image: p8, description: "A magnificent sapphire ring that captivates with its deep blue hues and exquisite design." },
  { id: 9, price: "$599.99 CAD", name: "Diamond Braclet", image: p9, description: "A stunning diamond bracelet that exudes elegance and sophistication. Perfect for any special occasion." },
  { id: 10, price: "$799.99 CAD", name: "Diamond Heart Necklace", image: p10, description: "A beautiful diamond heart necklace that symbolizes love and commitment. An ideal gift for someone special." },
  { id: 11, price: "$999.99 CAD", name: "Emerald Necklace", image: p11, description: "An exquisite emerald necklace that adds a touch of luxury and glamour to your outfit." },
  { id: 12, price: "$199.99 CAD", name: "Pearl Braclet", image: p12, description: "A classic pearl bracelet that brings timeless beauty and grace to your jewelry collection." },
  { id: 13, price: "$249.99 CAD", name: "Pearl Earings", image: p13, description: "Elegant pearl earrings that add a touch of sophistication to any ensemble." },
  { id: 14, price: "$499.99 CAD", name: "Royal Gold Earings", image: p14, description: "Royal gold earrings that showcase opulence and grandeur, perfect for special occasions." },
  { id: 15, price: "$2299.99 CAD", name: "Ruby Ring", image: p15, description: "A breathtaking ruby ring that combines boldness and beauty, making a striking statement." },
  { id: 16, price: "$1199.99 CAD", name: "Saphire Ring", image: p16, description: "A magnificent sapphire ring that captivates with its deep blue hues and exquisite design." }
  
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id} className="product-link">
          <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-price">{product.price}</div>
            <div className="product-description">{product.name}</div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductGrid;
