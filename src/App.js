import React from "react";
import Header from './Component/Header';
import Reviews from "./Component/Reviews";
import Newsletter from "./Component/Newsletter";
import Icons from "./Component/Icons";
import Home from "./Component/Home";
import Deal from "./Component/Deal";
import Blogs from "./Component/Blogs";
import Arrivals from "./Component/Arrivals";
import Bottomnavbar from "./Component/Bottomnavbar";
import Footer from "./Component/Footer";
import FeaturedBooksCard from "./Component/FeaturedBooksCard";

import ArrivalsBooksCard from "./Component/ArrivalsBooksCard";
import HomeProductsCard from "./Component/HomeProductsCard";

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Genre from "./Component/Genre";
import Search from "./Component/Search";


function App() {

  





  

  return (
    <div className="App">
      <Routes>
      <Route path="/" element={<>
      <Search/>

      <Home/>
      <FeaturedBooksCard/>
      <Genre  />
      <Deal/>
      <Arrivals/>
      <Icons/>
      <Blogs/>
      <Bottomnavbar/>
      <Reviews/>
      <Newsletter/>
      <Footer/>
      </>}
      />
      <Route path="HomeProductsCard" element={<HomeProductsCard/>}/>
      <Route path="Reviews" element={<Reviews/>}/>
      <Route path="FeaturedBooksCard" element={<FeaturedBooksCard/>}/>
      <Route path="ArrivalsBooksCard" element={<ArrivalsBooksCard/>}/>
      {/* <Route path="Contact" element={<Contact/>}/> */}
            <Route path="Genre" element={<Genre/>}/>

      </Routes>
    </div>
  );
}

export default App;
