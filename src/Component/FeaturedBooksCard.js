
import React from 'react';
import { Link } from "react-router-dom";
import Featured from './Featured';
import productFeatured from './FeaturedBooksData';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const FeaturedBooksCard = () => {
  const allFeatured = productFeatured.map((features) => (
    <SwiperSlide key={features.id}>
      <div className="swiper-slide box">
        <div className="icons">
          <a href="#" className="fas fa-search"></a>
          <a href="#" className="fas fa-heart"></a>
          <a href="#" className="fas fa-eye"></a>
        </div>
        <Featured
          name={features.name}
          price={features.price}
          image={features.image}
        />
      </div>
    </SwiperSlide>
  ));

  return (
    <section className="featured" id="featured">
      <h1 className="heading"><span>Featured Books</span></h1>
      <div className="swiper featured-slider">
        <div className="swiper-wrapper">
          <Swiper
            spaceBetween={10}
            loop={true}
            centeredSlides={true}
            autoplay={{
              delay: 9500,
              disableOnInteraction: false
            }}
            navigation={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              450: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
              },
            }}
          >
            {allFeatured}
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default FeaturedBooksCard;




