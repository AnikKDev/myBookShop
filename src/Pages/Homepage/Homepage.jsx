import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

// import { lazyLoad } from "./LazyLoads/lazyload";
/* const Banner = lazyLoad("../Banner/Banner");
const Products = lazyLoad("../Products/Products");
const Speciality = lazyLoad("../Speciality/Speciality");
const Testimonial = lazyLoad("../Testimonial/Testimonial");
const TopAndBest = lazyLoad("../TopAndBest/TopAndBest"); */
import { BsArrowRight } from "react-icons/bs";
import { AiFillCaretRight } from "react-icons/ai";
import Banner from "./Banner/Banner";
import Speciality from "./Speciality/Speciality";
import Products from "./Products/Products";
import Testimonial from "./Testimonial/Testimonial";
import TopAndBest from "./TopAndBest/TopAndBest";
const Homepage = () => {
  const [products, setProducts] = useState({});
  useEffect(() => {
    axios.get("products.json").then((res) => {
      res.status === 200 ? setProducts(res.data) : setProducts({});
    });
  }, []);
  return (
    <div>
      <Banner />
      <Speciality />
      <div className="my-32">
        <div data-aos="fade-up" data-aos-duration="1500">
          <h1 className="text-5xl text-secondary flex items-center">
            Categories <AiFillCaretRight color={"#347758"} />
          </h1>
          <Products productData={products.thriller} />
        </div>

        <div data-aos="fade-up" data-aos-duration="2000">
          <Products productData={products.adventure} />
        </div>
        <div className="flex justify-end">
          <button className="underline font-bold text-2xl text-secondary hover:text-primary cursor-pointer flex items-center">
            Browse All <BsArrowRight size={30} />
          </button>
        </div>
      </div>
      <Testimonial />
      <TopAndBest />
    </div>
  );
};

export default Homepage;
