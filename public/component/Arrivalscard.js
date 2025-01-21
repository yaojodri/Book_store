import React from 'react';


const Arrivalscard = ({ id, name, image, price }) => {
  return (
    <div>
      <section className="arrivals" id="arrivals">

<h1 className="heading"> <span>new arrivals</span></h1>

<div className=" swiper arrivals-slider">
           <div className="swiper-wrapper">

              <div className=" swiper-slide swiper-slide swiper-slide box">
             <div className="image">
                  <img src={image} alt={name}/>
               </div>
               <div className="content">
                   <h3>new arrivals</h3>
                   <div className="price">{price}<span>{price}</span></div>
                   <div className="stars">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i> 
                    <i className="fas fa-star-half-alt"></i>
                   </div>
               </div>
              
             </div>
             </div>
             </div>
             </section>
             </div>
  )
}
export default Arrivalscard;