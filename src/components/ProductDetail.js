import React, { useContext, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CartContext } from '../contexts/CartContext';
import './ProductDetail.css';
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
  { id: 1, name: 'Diamond Braclet', price: '$599.99 CAD', description: 'A stunning diamond bracelet that exudes elegance and sophistication. Perfect for any special occasion.', image: p1, detailedDescription: 'This Diamond Braclet is crafted with the finest diamonds and designed to add a touch of elegance and sophistication to any outfit. Perfect for special occasions, this bracelet is sure to make you shine.', reviews: [] },
  { id: 2, name: 'Diamond Heart Necklace', price: '$799.99 CAD', description: 'A beautiful diamond heart necklace that symbolizes love and commitment. An ideal gift for someone special.', image: p2, detailedDescription: 'The Diamond Heart Necklace is a perfect symbol of love and commitment. Made with high-quality diamonds, this necklace is a beautiful gift for someone special in your life.', reviews: [] },
  { id: 3, name: 'Emerald Necklace', price: '$999.99 CAD', description: 'An exquisite emerald necklace that adds a touch of luxury and glamour to your outfit.', image: p3, detailedDescription: 'The Emerald Necklace is crafted with the finest emeralds, adding a touch of luxury and glamour to any outfit. Perfect for those who appreciate fine jewelry.', reviews: [] },
  { id: 4, name: 'Pearl Braclet', price: '$199.99 CAD', description: 'A classic pearl bracelet that brings timeless beauty and grace to your jewelry collection.', image: p4, detailedDescription: 'The Pearl Braclet is a timeless piece of jewelry that brings beauty and grace to any collection. Made with high-quality pearls, this bracelet is perfect for any occasion.', reviews: [] },
  { id: 5, name: 'Pearl Earings', price: '$249.99 CAD', description: 'Elegant pearl earrings that add a touch of sophistication to any ensemble.', image: p5, detailedDescription: 'The Pearl Earings are elegant and sophisticated, perfect for adding a touch of class to any outfit. Made with high-quality pearls, these earrings are a must-have for any jewelry collection.', reviews: [] },
  { id: 6, name: 'Royal Gold Earings', price: '$499.99 CAD', description: 'Royal gold earrings that showcase opulence and grandeur, perfect for special occasions.', image: p6, detailedDescription: 'The Royal Gold Earings are designed to showcase opulence and grandeur. Made with the finest gold, these earrings are perfect for special occasions and will make you feel like royalty.', reviews: [] },
  { id: 7, name: 'Ruby Ring', price: '$2299.99 CAD', description: 'A breathtaking ruby ring that combines boldness and beauty, making a striking statement.', image: p7, detailedDescription: 'The Ruby Ring is a breathtaking piece of jewelry that combines boldness and beauty. Made with high-quality rubies, this ring is perfect for making a striking statement.', reviews: [
    { id: 1, reviewer: 'Harper King', rating: 5, comment: 'The ruby is gorgeous and the ring fits perfectly.' },
    { id: 2, reviewer: 'Alexander Wright', rating: 4, comment: 'Beautiful ring, but the band is a bit thin.' },
    { id: 3, reviewer: 'Avery Scott', rating: 3, comment: 'The ruby is nice, but the setting feels a bit flimsy.' },
  ]},
  { id: 8, name: 'Saphire Ring', price: '$1199.99 CAD', description: 'A magnificent sapphire ring that captivates with its deep blue hues and exquisite design.', image: p8, detailedDescription: 'The Saphire Ring is a magnificent piece of jewelry that captivates with its deep blue hues and exquisite design. Made with high-quality sapphires, this ring is perfect for those who appreciate fine jewelry.', reviews: [] },
  { id: 9, name: 'Diamond Braclet', price: '$599.99 CAD', description: 'A stunning diamond bracelet that exudes elegance and sophistication. Perfect for any special occasion.', image: p9, detailedDescription: 'This Diamond Braclet is crafted with the finest diamonds and designed to add a touch of elegance and sophistication to any outfit. Perfect for special occasions, this bracelet is sure to make you shine.', reviews: [] },
  { id: 10, name: 'Diamond Heart Necklace', price: '$799.99 CAD', description: 'A beautiful diamond heart necklace that symbolizes love and commitment. An ideal gift for someone special.', image: p10, detailedDescription: 'The Diamond Heart Necklace is a perfect symbol of love and commitment. Made with high-quality diamonds, this necklace is a beautiful gift for someone special in your life.', reviews: [] },
  { id: 11, name: 'Emerald Necklace', price: '$999.99 CAD', description: 'An exquisite emerald necklace that adds a touch of luxury and glamour to your outfit.', image: p11, detailedDescription: 'The Emerald Necklace is crafted with the finest emeralds, adding a touch of luxury and glamour to any outfit. Perfect for those who appreciate fine jewelry.', reviews: [] },
  { id: 12, name: 'Pearl Braclet', price: '$199.99 CAD', description: 'A classic pearl bracelet that brings timeless beauty and grace to your jewelry collection.', image: p12, detailedDescription: 'The Pearl Braclet is a timeless piece of jewelry that brings beauty and grace to any collection. Made with high-quality pearls, this bracelet is perfect for any occasion.', reviews: [] },
  { id: 13, name: 'Pearl Earings', price: '$249.99 CAD', description: 'Elegant pearl earrings that add a touch of sophistication to any ensemble.', image: p13, detailedDescription: 'The Pearl Earings are elegant and sophisticated, perfect for adding a touch of class to any outfit. Made with high-quality pearls, these earrings are a must-have for any jewelry collection.', reviews: [] },
  { id: 14, name: 'Royal Gold Earings', price: '$499.99 CAD', description: 'Royal gold earrings that showcase opulence and grandeur, perfect for special occasions.', image: p14, detailedDescription: 'The Royal Gold Earings are designed to showcase opulence and grandeur. Made with the finest gold, these earrings are perfect for special occasions and will make you feel like royalty.', reviews: [] },
  { id: 15, name: 'Ruby Ring', price: '$2299.99 CAD', description: 'A breathtaking ruby ring that combines boldness and beauty, making a striking statement.', image: p15, detailedDescription: 'The Ruby Ring is a breathtaking piece of jewelry that combines boldness and beauty. Made with high-quality rubies, this ring is perfect for making a striking statement.', reviews: [] },
  { id: 16, name: 'Saphire Ring', price: '$1199.99 CAD', description: 'A magnificent sapphire ring that captivates with its deep blue hues and exquisite design.', image: p16, detailedDescription: 'The Saphire Ring is a magnificent piece of jewelry that captivates with its deep blue hues and exquisite design. Made with high-quality sapphires, this ring is perfect for those who appreciate fine jewelry.', reviews: [] }
];

const ProductDetail = () => {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));
  const { addToCart } = useContext(CartContext);
  const [review, setReview] = useState({ reviewer: '', rating: '', comment: '' });
  const [reviews, setReviews] = useState(product.reviews);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setReview({ ...review, [name]: value });
  };

  const handleSubmitReview = (e) => {
    e.preventDefault();
    setReviews([...reviews, { ...review, id: reviews.length + 1 }]);
    setReview({ reviewer: '', rating: '', comment: '' });
  };

  return (
    <div className="product-detail">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h1>{product.name}</h1>
        <p>{product.detailedDescription}</p>
        <p>{product.price}</p>
        {product.name.includes('Ring') && (
          <div className="size-selection">
            <label htmlFor="size">Select Size:</label>
            <select name="size" id="size">
              {Array.from({ length: 21 }, (_, i) => 1.5 + i * 0.5).map(size => (
                <option key={size} value={size}>{size}</option>
              ))}
            </select>
          </div>
        )}
        <button onClick={() => addToCart(product)}>Add to Cart</button>
        <div className="reviews">
          <h2>Reviews</h2>
          {reviews.length === 0 ? (
            <p>No reviews yet.</p>
          ) : (
            reviews.map(review => (
              <div key={review.id} className="review">
                <strong>{review.reviewer}</strong>
                <p>Rating: {review.rating} / 5</p>
                <p>{review.comment}</p>
              </div>
            ))
          )}
          <form onSubmit={handleSubmitReview}>
            <h3>Submit a Review</h3>
            <input
              type="text"
              name="reviewer"
              placeholder="Your Name"
              value={review.reviewer}
              onChange={handleInputChange}
              required
            />
            <input
              type="number"
              name="rating"
              placeholder="Rating (1-5)"
              min="1"
              max="5"
              value={review.rating}
              onChange={handleInputChange}
              required
            />
            <textarea
              name="comment"
              placeholder="Your Review"
              value={review.comment}
              onChange={handleInputChange}
              required
            />
            <button type="submit">Submit Review</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
