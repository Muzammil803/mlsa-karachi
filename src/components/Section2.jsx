import React from "react";
import CarouselTestimonials from "./carousel/CarouselTestimonials";
import Animate from "./carousel/Animate";

const Section2 = () => {
  return (
    <div className="w-full my-4 lg:mt-0 h-auto flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center justify-center">
        <div className="leading-tight flex flex-col justify-center items-center">
          <Animate style={{ x: "-100%" }}>
            <p className="flex text-xl md:text-4xl text-center items-center justify-center md:flex-row font-semibold">
              <span className="text-themeBlue">&nbsp; MEET OUR CORE TEAM</span>
            </p>
          </Animate>
        </div>
        <Animate style={{ y: "-30%" }}>
          <div className="mt-4">
            <CarouselTestimonials />
          </div>
        </Animate>
      </div>
    </div>
  );
};

export default Section2;
