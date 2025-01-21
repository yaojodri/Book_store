import React from 'react';
import productFeatured from '../Database/featuredBooksData';
import Productcard from './Productcard';
import { Pagination, Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'

const FeaturedSection = () => {
  const allProducts = productFeatured.map((product) => (
    <SwiperSlide>
    <div className="swiper-slide box" key={product.id}>
      <div className="icons">
        <a href="#" className="fas fa-search"></a>
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-eye"></a>
      </div>
      <Productcard
        name={product.name}
        image={product.image}
        price={product.price}
      />
    </div>
    </SwiperSlide>
  ));

  return (
    <section className="featured" id="featured">
      <h1 class="heading"> <span> featured books </span></h1>
      <div className="swiper featured-slider">
        <div className="swiper-wrapper">
          <Swiper
          spaceBetween={10}
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay:9500,
            disableOnInteraction: false,
          }}

          navigation={true}

          modules={[Autoplay, Pagination, Navigation]}
          className='mySwiper'

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
        {allProducts}
        </Swiper>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;


// import React from 'react'
// import productFeatured from '../Database/featuredBooksData';
// import Productcard from './Productcard';


// const FeaturedSection =()=>{
//   let allProducts = productFeatured.map((product)=>{return (<Productcard
//     key={product.id}
//     name={product.name}
//     image={product.image}
//     price={product.price}
//     />)
//   });

//   const [data,setData] =React.useState([...allProducts]);
//      return(
//       <section class="featured" id ="featured">
    
//       <div class=" swiper featured-slider"></div>
  
//           <div class="swiper-wrapper">
  
//           <div class="swiper-slide swiper-slide swiper-slide box">
//                <div class="icons">
//                 <a href="#" class="fas fa-search"></a>
//                 <a href="#" class="fas fa-heart"></a>
//                 <a href="#" class="fas fa-eye"></a>
//               </div>
//               <div>
//                  {allProducts}
//               </div>
//             </div>
//             </div>
//             </section>
//      )
// }

 
//  export default FeaturedSection;
       {/* return(
        <section class="featured" id ="featured">
     
     <h1 class="heading"> <span> featured books </span></h1>
 
     <div class=" swiper featured-slider">
 
         <div class="swiper-wrapper">
 
         <div class="swiper-slide swiper-slide swiper-slide box">
              <div class="icons">
               <a href="#" class="fas fa-search"></a>
               <a href="#" class="fas fa-heart"></a>
               <a href="#" class="fas fa-eye"></a>
             </div>
           
 
           <div class="image">
             <img src="images/bookimages/image10.jpg" alt=""/>
           </div>
           <div class="content">
             <h3> featured books</h3>
             <div class="price">$15.99 <span>$20.99</span></div>
             <a href="#" class="btn"> add to cart</a>
 
           </div>
 
           </div>
 
 
           <div class="swiper-slide swiper-slide swiper-slide box">
             <div class="icons">
              <a href="#" class="fas fa-search"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          <div class="image">
            <img src="images/bookimages/image1.jpg" alt=""/>
          </div>
          <div class="content">
            <h3> featured books</h3>
            <div class="price">$15.99 <span>$20.99</span></div>
            <a href="#" class="btn"> add to cart</a>
       </div>
         </div>
 
 
          <div class="swiper-slide swiper-slide swiper-slide box">
             <div class="icons">
              <a href="#" class="fas fa-search"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          <div class="image">
            <img src="images/bookimages/image2.jpg" alt=""/>
          </div>
          <div class="content">
            <h3> featured books</h3>
            <div class="price">$15.99 <span>$20.99</span></div>
            <a href="#" class="btn"> add to cart</a>
 
          </div>
 
          </div>
 
 
          <div class="swiper-slide swiper-slide swiper-slide box">
             <div class="icons">
              <a href="#" class="fas fa-search"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          <div class="image">
            <img src="images/bookimages/image3.jpg" alt=""/>
          </div>
          <div class="content">
            <h3> featured books</h3>
            <div class="price">$15.99 <span>$20.99</span></div>
            <a href="#" class="btn"> add to cart</a>
 
          </div>
 
          </div>
 
 
 
          <div class="swiper-slide swiper-slide swiper-slide box">
             <div class="icons">
              <a href="#" class="fas fa-search"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          
 
          <div class="image">
            <img src="images/bookimages/image5.jpg" alt=""/>
          </div>
          <div class="content">
            <h3> featured books</h3>
            <div class="price">$15.99 <span>$20.99</span></div>
            <a href="#" class="btn"> add to cart</a>
 
          </div>
 
          </div>
 
 
 
 
          <div class="swiper-slide swiper-slide swiper-slide box">
             <div class="icons">
              <a href="#" class="fas fa-search"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          
 
          <div class="image">
            <img src="images/bookimages/image4.jpg" alt=""/>
          </div>
          <div class="content">
            <h3> featured books</h3>
            <div class="price">$15.99 <span>$20.99</span></div>
            <a href="#" class="btn"> add to cart</a>
 
          </div>
 
          </div>
 
 
 
 
          <div class="swiper-slide swiper-slide swiper-slide box">
             <div class="icons">
              <a href="#" class="fas fa-search"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          
 
          <div class="image">
            <img src="images/bookimages/image6.jpg" alt=""/>
          </div>
          <div class="content">
            <h3> featured books</h3>
            <div class="price">$15.99 <span>$20.99</span></div>
            <a href="#" class="btn"> add to cart</a>
 
          </div>
 
          </div>
 
 
 
          <div class="swiper-slide swiper-slide swiper-slide box">
             <div class="icons">
              <a href="#" class="fas fa-search"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          
 
          <div class="image">
            <img src="images/bookimages/image7.jpg" alt=""/>
          </div>
          <div class="content">
            <h3> featured books</h3>
            <div class="price">$15.99 <span>$20.99</span></div>
            <a href="#" class="btn"> add to cart</a>
 
          </div>
 
          </div>
 
 
          <div class="swiper-slide swiper-slide swiper-slide box">
             <div class="icons">
              <a href="#" class="fas fa-search"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          
 
          <div class="image">
            <img src="images/bookimages/image8.jpg" alt=""/>
          </div>
          <div class="content">
            <h3> featured books</h3>
            <div class="price">$15.99 <span>$20.99</span></div>
            <a href="#" class="btn"> add to cart</a>
 
          </div>
 
          </div>
 
 
          <div class="swiper-slide swiper-slide swiper-slide box">
             <div class="icons">
              <a href="#" class="fas fa-search"></a>
              <a href="#" class="fas fa-heart"></a>
              <a href="#" class="fas fa-eye"></a>
            </div>
          
 
          <div class="image">
            <img src="images/bookimages/image9.jpg" alt=""/>
          </div>
          <div class="content">
            <h3> featured books</h3>
            <div class="price">$15.99 <span>$20.99</span></div>
            <a href="#" class="btn"> add to cart</a>
 
          </div>
 
          </div>
 
         </div>
 
         <div class="swiper-button-next"></div>
         <div class="swiper-button-prev"></div>
 
     </div>
 
 </section>
       ) */}