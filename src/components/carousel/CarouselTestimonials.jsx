"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import avatar1 from "../../../public/images/Avatar.png";
import saram from "../../../public/images/saram.png";
import kiran from "../../../public/images/kiran.png";
import annus from "../../../public/images/annus.png";
import hamna from "../../../public/images/hamna.png";
import sanjna from "../../../public/images/sanjna.png";
import sohaib from "../../../public/images/sohaib.png";
import haroon from "../../../public/images/haroon.png";
import hamza from "../../../public/images/hamza.png";
import huzaifa from "../../../public/images/huzaifa.png";
import mehwish from "../../../public/images/mehwish.png";
import areesha from "../../../public/images/areesha.png";
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowBack,IoIosArrowForward  } from "react-icons/io";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import React, { Component } from "react";
import Slider from "react-slick";

const testimonials = [
  {
    id: 1,
    name: "Saram Hai",
    title: "Operation Director",
    img:saram
  },
  {
    id: 2,
    name: "Kiran Amin",
    title: "Operation Director",
    img:kiran
  },
  {
    id: 3,
    name: "Annus Usman",
    title: "Operation Director",
    img:annus
  },
  {
    id: 4,
    name: "Hamna Nadeem",
    title: "Content Director",
    img:hamna
  },
  {
    id: 5,
    name: "Sanjana Kirshan",
    title: "Creative Director",
    img:sanjna
  },
  {
    id: 6,
    name: "M.Sohaib",
    title: "Creative Director",
    img:sohaib
  },
  {
    id: 1,
    name: "Haroon Abasi",
    title: "Technical Director",
    img:haroon
  },
  {
    id: 1,
    name: "Huzaifa Gauri",
    title: "Technical Director",
    img:hamza
  },
  {
    id: 1,
    name: "Huzaifa Tanzeel",
    title: "Outreach Director",
    img:huzaifa
  },
  {
    id: 1,
    name: "Mehwish Alam",
    title: "Outreach Director",
    img:mehwish
  },
  {
    id: 1,
    name: "Areesha Siddiqui",
    title: "Marketing Director",
    img:areesha
  },

];


export default class Responsive extends Component {
  render() {
    const NextArrow = (props) => (
        <div {...props} style={{display:"flex",top: "calc(50% - 40px)",fontSize:'50px'}} className="right-[-20px] md:right-[-40px] text-center next-arrow absolute z-20">
          <IoIosArrowForward />
        </div>
      );
  
      // Custom previous arrow component
      const PrevArrow = (props) => (
        <div {...props } style={{display:"flex",top: "calc(50% - 40px)",left:'-20px',fontSize:'50px'}} className="prev-arrow cursor-pointer absolute z-20">
         <IoIosArrowBack/>
        </div>
      );
  
      const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
          {
            breakpoint: 1160,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 860,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 2,
            },
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            },
          },
        ],
      };
    return (
      <div  className="w-[90vw] relative">
        <Slider {...settings}>
         
        {testimonials.map((data,index) => (
        <div key={index} className="">
          <div className="w-[340px] h-[360px] group cursor-pointer text-center flex items-center justify-center   mx-auto my-2 rounded-md p-4  flex-col " style={{display: "flex"}}>
            <div><Image src={data.img} alt=""/></div>
            <h2 className="font-bold mt-2 text-lg">{data.name}</h2>
            <p className="">{data.title}</p>
          </div>
        </div>
      ))}
                </Slider>
      </div>
    );
  }
}