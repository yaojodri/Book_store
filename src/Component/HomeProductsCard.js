import React from "react";
import { Link } from "react-router-dom";

const HomeProductsCard = (id,name,image)=>{
    return(
        <div>
    <section class="home" id="home">

<div class="row">
    <div class="content">
        <h3>upto 75% off</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
         Obcaecati quam dolorum, quaerat, dolores et iure sunt porro odit id a blanditiis repellat placeat quia voluptatum ducimus cum nobis magnam minus.</p>
      <a href="Product.html" class="btn">shop now</a>
    </div>

    <div class="swiper books-slider">
        <div class="swiper-wrapper">
        <a href="#" class="swiper-slide">  <img src={"images/bookimages/image1.jpg"} alt="same same Peter Mendelsund"/></a>
        
      
  </div>
   <img src={image} class="stand" alt="{stand}"/> 
 </div>
 <div class="swiper-button-next" key = {id}></div>
 <div class="swiper-button-prev" key = {id}></div>
</div>
</section>

        </div>
    )
}
export default HomeProductsCard;