



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { useCart } from './CartContext'; 

const BookList = ({ books, error, isBooksVisible }) => {
  const { addToCart } = useCart(); 

  return (
    <section className="swiper featured-slider">
      {error && <p className="error">{error}</p>}
      {isBooksVisible && (
        <div className="swiper featured-slider">
          <Swiper
            spaceBetween={10}
            loop={true}
            centeredSlides={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            navigation={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            breakpoints={{
              0: { slidesPerView: 1 },
              450: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 4 },
            }}
          >
            {books.map((book) => (
              <SwiperSlide key={book.book_id} className="swiper-slide box">
                <p>Genre: {book.genre}</p>
                <div className="image">
                  <img src={book.imagelink} alt={book.title} />
                </div>
                <div className="content">
                  <h3 className='name'>{book.title}</h3>
                  <div className="price">GH₵{book.price}</div>
                  <p>Author: {book.author}</p>
                  <p>Publication Date: {book.publication_date}</p>
                  <p>In Stock: {book.in_stock}</p>
                  <button className="btn" onClick={() => addToCart(book)}>
                    Add to Cart
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      )}
    </section>
  );
};

export default BookList;



