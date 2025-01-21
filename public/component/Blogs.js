import React from 'react'

const Blogs =()=>{
    return(
        <section class="blogs" id="blogs">

      <h1 class="heading"> <span>our blogs</span> </h1>

      <div class="swiper blogs-slider">
         
        <div class="swiper-wrapper">
           
          <div class="swiper-slide box">
           <div class="image">
            <img src="images/blog-1.jpg" alt=""/>
           </div>
            <div class="content">
              <h3>blog title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" class="btn">read more</a>
            </div>

          </div> 
          
          <div class="swiper-slide box">
           <div class="image">
            <img src="images/blog-2.jpg" alt=""/>
           </div>
            <div class="content">
              <h3>blog title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" class="btn">read more</a>
            </div>

          </div> 
          
          <div class="swiper-slide box">
           <div class="image">
            <img src="images/blog-3.jpg" alt=""/>
           </div>
            <div class="content">
              <h3>blog title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" class="btn">read more</a>
            </div>

          </div> 

          <div class="swiper-slide box">
           <div class="image">
            <img src="images/blog-4.jpg" alt=""/>
           </div>
            <div class="content">
              <h3>blog title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" class="btn">read more</a>
            </div>
          </div>

           
          
          <div class="swiper-slide box">
           <div class="image">
            <img src="images/blog-5.jpg" alt=""/>
           </div>
            <div class="content">
              <h3>blog title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" class="btn">read more</a>
            </div>

          </div>   
          
          <div class="swiper-slide box">
           <div class="image">
            <img src="images/blog-6.jpg" alt=""/>
           </div>
            <div class="content">
              <h3>blog title goes here</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              <a href="#" class="btn">read more</a>
            </div>

          </div>

        </div>

      </div>

</section>
    )
}

export default Blogs;