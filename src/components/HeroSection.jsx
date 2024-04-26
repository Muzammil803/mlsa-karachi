"use client";
import React, { useState } from "react";
import HeroCarousel from "./carousel/HeroCarousel";


const HeroSection = () => {

  return (
    <div className="w-full h-auto lg:h-[80vh] pt-1 ">
      <HeroCarousel/>
    </div>
  );
};

export default HeroSection;
