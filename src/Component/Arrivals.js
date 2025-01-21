import React from 'react';
import productArrivals from './ArrivalsBooksData';
import ArrivalsBooksCard from './ArrivalsBooksCard';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const Arrivals = () => {
  const allArrivals = productArrivals.map((arrival) => (
    <SwiperSlide key={arrival.id}>
      <ArrivalsBooksCard 
        name={arrival.name}
        image={arrival.image}
        price={arrival.price}
      />
    </SwiperSlide>
  ));

  return (
    <section className="arrivals" id="arrivals">
      <h1 className="heading"><span>New Arrivals</span></h1>
      <div className="swiper arrivals-slider">
        <Swiper
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false
          }}
          pagination={{ clickable: true }}
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
          {allArrivals}
        </Swiper>
      </div>
    </section>
  );
}

export default Arrivals;
