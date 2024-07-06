// src/components/ProductGrid.js
import React from 'react';
import { Link } from 'react-router-dom';
import './ProductGrid.css';

const products = [
  { id: 1, price: "$599.99 CAD", name: "Diamond Braclet", image: "/Assets/diamond_braclet.jpg", description: "A stunning diamond bracelet that exudes elegance and sophistication. Perfect for any special occasion." },
  { id: 2, price: "$799.99 CAD", name: "Diamond Heart Necklace", image: "/Assets/diamond_heart_neck.jpg", description: "A beautiful diamond heart necklace that symbolizes love and commitment. An ideal gift for someone special." },
  { id: 3, price: "$999.99 CAD", name: "Emerald Necklace", image: "/Assets/emerald_necklace.jpg", description: "An exquisite emerald necklace that adds a touch of luxury and glamour to your outfit." },
  { id: 4, price: "$199.99 CAD", name: "Pearl Braclet", image: "/Assets/pearl_braclet.jpg", description: "A classic pearl bracelet that brings timeless beauty and grace to your jewelry collection." },
  { id: 5, price: "$249.99 CAD", name: "Pearl Earings", image: "/Assets/pearl_earings.jpg", description: "Elegant pearl earrings that add a touch of sophistication to any ensemble." },
  { id: 6, price: "$499.99 CAD", name: "Royal Gold Earings", image: "/Assets/royal_gold_earings.jpg", description: "Royal gold earrings that showcase opulence and grandeur, perfect for special occasions." },
  { id: 7, price: "$2299.99 CAD", name: "Ruby Ring", image: "/Assets/ruby_ring.jpg", description: "A breathtaking ruby ring that combines boldness and beauty, making a striking statement." },
  { id: 8, price: "$1199.99 CAD", name: "Saphire Ring", image: "/Assets/saphire_ring.jpg", description: "A magnificent sapphire ring that captivates with its deep blue hues and exquisite design." },
  { id: 9, price: "$599.99 CAD", name: "Diamond Braclet", image: "/Assets/diamond_braclet.jpg", description: "A stunning diamond bracelet that exudes elegance and sophistication. Perfect for any special occasion." },
  { id: 10, price: "$799.99 CAD", name: "Diamond Heart Necklace", image: "/Assets/diamond_heart_neck.jpg", description: "A beautiful diamond heart necklace that symbolizes love and commitment. An ideal gift for someone special." },
  { id: 11, price: "$999.99 CAD", name: "Emerald Necklace", image: "/Assets/emerald_necklace.jpg", description: "An exquisite emerald necklace that adds a touch of luxury and glamour to your outfit." },
  { id: 12, price: "$199.99 CAD", name: "Pearl Braclet", image: "/Assets/pearl_braclet.jpg", description: "A classic pearl bracelet that brings timeless beauty and grace to your jewelry collection." },
  { id: 13, price: "$249.99 CAD", name: "Pearl Earings", image: "/Assets/pearl_earings.jpg", description: "Elegant pearl earrings that add a touch of sophistication to any ensemble." },
  { id: 14, price: "$499.99 CAD", name: "Royal Gold Earings", image: "/Assets/royal_gold_earings.jpg", description: "Royal gold earrings that showcase opulence and grandeur, perfect for special occasions." },
  { id: 15, price: "$2299.99 CAD", name: "Ruby Ring", image: "/Assets/ruby_ring.jpg", description: "A breathtaking ruby ring that combines boldness and beauty, making a striking statement." },
  { id: 16, price: "$1199.99 CAD", name: "Saphire Ring", image: "/Assets/saphire_ring.jpg", description: "A magnificent sapphire ring that captivates with its deep blue hues and exquisite design." }
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
