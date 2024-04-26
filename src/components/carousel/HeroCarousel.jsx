"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import hero1 from "../../../public/images/hero-1.png";
import hero2 from "../../../public/images/hero-2.png";
import hero3 from "../../../public/images/hero-3.png";
import hero4 from "../../../public/images/hero-4.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    img:hero1
  },
  
  {
    id: 2,
    img:hero2
  },
  
  {
    id: 3,
    img:hero3
  },
  {
    id: 4,
    img:hero4
  },
  
 

];


export default class HeroCarousel extends Component {
  render() {
  
      const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: null,
        prevArrow: null,
        autoplay: true, 
        autoplaySpeed: 2000,
      };
    return (
      <div  className="w-full relative overflow-hidden" >
        <Slider {...settings}>
         
        {testimonials.map((data,index) => (
        <div key={index} className="">
      <Image src={data.img} alt="" className="max-h-[80vh]"/>

        </div>
      ))}
                </Slider>
      </div>
    );
  }
}