import React from 'react';

const Productcard = ({ id, name, image, price }) => {
  return (
    <div className="product-card">
      <div className="icons">
        <a href="#" className="fas fa-search"></a>
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-eye"></a>
      </div>

      <div className="image">
        <img src={image} alt={name} className="product-image" />
      </div>

      <div className="content">
        <h5 className="name">{name}</h5>
        <h3>Featured Books</h3>
        <div className="price">
          {price} <span className="old-price">{price}</span>
        </div>
        <a href="#" className="btn">
          Add to Cart
        </a>
      </div>
    </div>
  );
};

export default Productcard;
