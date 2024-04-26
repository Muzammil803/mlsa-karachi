"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import news1 from "../../../public/images/news-1.png";
import news2 from "../../../public/images/news-2.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    img: news1,
    des1:`Since its inception in 2023, MLSA Karachi has been on a
    journey of growth and empowerment, and today, we are thrilled
    to celebrate its remarkable evolution into one of the most
    influential chapters in the Pakistan and EMEA region.`,

    des2:`Our unwavering focus on empowering the masses through the
    latest technological trends has propelled MLSA Karachi into
    the spotlight, proudly holding its position as one of the
    premier Microsoft-focused chapters in Europe, the Middle East,
    and Africa. Celebrating a remarkable achievement of 5
    consecutive Gold awards, we are honored to be recognized for
    our dedication and excellence.`
  },

  {
    id: 2,
    img: news2,
    des1:`We are delighted to announced that MLSA-Karachi
    work as a outreach partner in JTECH 2024 by 
    Department of computer science & software engineering 
    in Jinnah University fo Women.`,

    des2:``
  },

 
];

export default class NewsCarousel extends Component {
  render() {
    const settings = {
      dots: true,
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
      <div className="w-full relative  bg-themeBlue py-12 overflow-hidden">
        <Slider {...settings}>
          {testimonials.map((data, index) => (
        <div>
            <div key={index} className="flex px-10 py-6 flex-col lg:flex-row">
              <div className="lg:w-1/2">
                <Image src={data.img} alt="" className="max-h-[80vh]" />
              </div>
              <div className="lg:w-1/2 text-white px-4">
                <h2 className="text-3xl lg:text-5xl font-bold my-4">Latest News</h2>
                <p className="py-4">
                  {data.des1}
                </p>
                <p className="py-4">
                {data.des2}
                  
                </p>
              </div>
            </div>
        </div>
          ))}
        </Slider>
      </div>
    );
  }
}
