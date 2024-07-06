// src/components/ProductDetail.js
import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import './ProductDetail.css';

const products = [
  { id: 1, name: 'Diamond Braclet', price: '$599.99 CAD', description: 'A stunning diamond bracelet that exudes elegance and sophistication. Perfect for any special occasion.', image: '../Assets/diamond_braclet.jpg', detailedDescription: 'This Diamond Braclet is crafted with the finest diamonds and designed to add a touch of elegance and sophistication to any outfit. Perfect for special occasions, this bracelet is sure to make you shine.' },
  { id: 2, name: 'Diamond Heart Necklace', price: '$799.99 CAD', description: 'A beautiful diamond heart necklace that symbolizes love and commitment. An ideal gift for someone special.', image: '../Assets/diamond_heart_neck.jpg', detailedDescription: 'The Diamond Heart Necklace is a perfect symbol of love and commitment. Made with high-quality diamonds, this necklace is a beautiful gift for someone special in your life.' },
  { id: 3, name: 'Emerald Necklace', price: '$999.99 CAD', description: 'An exquisite emerald necklace that adds a touch of luxury and glamour to your outfit.', image: '../Assets/emerald_necklace.jpg', detailedDescription: 'The Emerald Necklace is crafted with the finest emeralds, adding a touch of luxury and glamour to any outfit. Perfect for those who appreciate fine jewelry.' },
  { id: 4, name: 'Pearl Braclet', price: '$199.99 CAD', description: 'A classic pearl bracelet that brings timeless beauty and grace to your jewelry collection.', image: '../Assets/pearl_braclet.jpg', detailedDescription: 'The Pearl Braclet is a timeless piece of jewelry that brings beauty and grace to any collection. Made with high-quality pearls, this bracelet is perfect for any occasion.' },
  { id: 5, name: 'Pearl Earings', price: '$249.99 CAD', description: 'Elegant pearl earrings that add a touch of sophistication to any ensemble.', image: '../Assets/pearl_earings.jpg', detailedDescription: 'The Pearl Earings are elegant and sophisticated, perfect for adding a touch of class to any outfit. Made with high-quality pearls, these earrings are a must-have for any jewelry collection.' },
  { id: 6, name: 'Royal Gold Earings', price: '$499.99 CAD', description: 'Royal gold earrings that showcase opulence and grandeur, perfect for special occasions.', image: '../Assets/royal_gold_earings.jpg', detailedDescription: 'The Royal Gold Earings are designed to showcase opulence and grandeur. Made with the finest gold, these earrings are perfect for special occasions and will make you feel like royalty.' },
  { id: 7, name: 'Ruby Ring', price: '$2299.99 CAD', description: 'A breathtaking ruby ring that combines boldness and beauty, making a striking statement.', image: '../Assets/ruby_ring.jpg', detailedDescription: 'The Ruby Ring is a breathtaking piece of jewelry that combines boldness and beauty. Made with high-quality rubies, this ring is perfect for making a striking statement.' },
  { id: 8, name: 'Saphire Ring', price: '$1199.99 CAD', description: 'A magnificent sapphire ring that captivates with its deep blue hues and exquisite design.', image: '../Assets/saphire_ring.jpg', detailedDescription: 'The Saphire Ring is a magnificent piece of jewelry that captivates with its deep blue hues and exquisite design. Made with high-quality sapphires, this ring is perfect for those who appreciate fine jewelry.' },
  { id: 9, name: 'Diamond Braclet', price: '$599.99 CAD', description: 'A stunning diamond bracelet that exudes elegance and sophistication. Perfect for any special occasion.', image: '../Assets/diamond_braclet.jpg', detailedDescription: 'This Diamond Braclet is crafted with the finest diamonds and designed to add a touch of elegance and sophistication to any outfit. Perfect for special occasions, this bracelet is sure to make you shine.' },
  { id: 10, name: 'Diamond Heart Necklace', price: '$799.99 CAD', description: 'A beautiful diamond heart necklace that symbolizes love and commitment. An ideal gift for someone special.', image: '../Assets/diamond_heart_neck.jpg', detailedDescription: 'The Diamond Heart Necklace is a perfect symbol of love and commitment. Made with high-quality diamonds, this necklace is a beautiful gift for someone special in your life.' },
  { id: 11, name: 'Emerald Necklace', price: '$999.99 CAD', description: 'An exquisite emerald necklace that adds a touch of luxury and glamour to your outfit.', image: '../Assets/emerald_necklace.jpg', detailedDescription: 'The Emerald Necklace is crafted with the finest emeralds, adding a touch of luxury and glamour to any outfit. Perfect for those who appreciate fine jewelry.' },
  { id: 12, name: 'Pearl Braclet', price: '$199.99 CAD', description: 'A classic pearl bracelet that brings timeless beauty and grace to your jewelry collection.', image: '../Assets/pearl_braclet.jpg', detailedDescription: 'The Pearl Braclet is a timeless piece of jewelry that brings beauty and grace to any collection. Made with high-quality pearls, this bracelet is perfect for any occasion.' },
  { id: 13, name: 'Pearl Earings', price: '$249.99 CAD', description: 'Elegant pearl earrings that add a touch of sophistication to any ensemble.', image: '../Assets/pearl_earings.jpg', detailedDescription: 'The Pearl Earings are elegant and sophisticated, perfect for adding a touch of class to any outfit. Made with high-quality pearls, these earrings are a must-have for any jewelry collection.' },
  { id: 14, name: 'Royal Gold Earings', price: '$499.99 CAD', description: 'Royal gold earrings that showcase opulence and grandeur, perfect for special occasions.', image: '../Assets/royal_gold_earings.jpg', detailedDescription: 'The Royal Gold Earings are designed to showcase opulence and grandeur. Made with the finest gold, these earrings are perfect for special occasions and will make you feel like royalty.' },
  { id: 15, name: 'Ruby Ring', price: '$2299.99 CAD', description: 'A breathtaking ruby ring that combines boldness and beauty, making a striking statement.', image: '../Assets/ruby_ring.jpg', detailedDescription: 'The Ruby Ring is a breathtaking piece of jewelry that combines boldness and beauty. Made with high-quality rubies, this ring is perfect for making a striking statement.' },
  { id: 16, name: 'Saphire Ring', price: '$1199.99 CAD', description: 'A magnificent sapphire ring that captivates with its deep blue hues and exquisite design.', image: '../Assets/saphire_ring.jpg', detailedDescription: 'The Saphire Ring is a magnificent piece of jewelry that captivates with its deep blue hues and exquisite design. Made with high-quality sapphires, this ring is perfect for those who appreciate fine jewelry.' }
];

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);
  const [confirmation, setConfirmation] = useState("");
  const product = products.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(product);
    setConfirmation("Item added to cart!");
    setTimeout(() => {
      setConfirmation("");
    }, 3000); // Remove confirmation message after 3 seconds
  };

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p>{product.description}</p>
        <p>{product.detailedDescription}</p>
        <p>{product.price}</p>
        <button onClick={handleAddToCart}>Add to Cart</button>
        {confirmation && <div className="confirmation">{confirmation}</div>}
      </div>
    </div>
  );
};

export default ProductDetail;
