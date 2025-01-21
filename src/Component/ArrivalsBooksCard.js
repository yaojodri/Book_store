import React from 'react';

const ArrivalsBooksCard = ({ id, name, image, price }) => {
  return (
    <div className="swiper-slide box">
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="content">
        <h3>{name}</h3>
        <div className="price">${price}<span>${price}</span></div>
        <div className="stars">
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star"></i>
          <i className="fas fa-star-half-alt"></i>
        </div>
      </div>
    </div>
  );
};

export default ArrivalsBooksCard;
