import React from "react";
import { EventsList } from "@/constants/constant";
import Image from "next/image";
import Animate from "./carousel/Animate";

const Section1 = () => {
  return (
    <div className="w-full h-auto mb-10 bg-[#D9D9D933]  flex flex-col items-center justify-evenly">
      <div className="flex flex-col items-center justify-center py-4">
        <div className="flex mt-10 mb-6">
          <Animate style={{ x: "-100%" }}>
            <p className="flex flex-col text-xl md:text-4xl text-center md:flex-row font-semibold text-themeBlue">
              UPCOMMING EVENTS
            </p>
          </Animate>
        </div>
        <div className="mt-6 pb-6 flex flex-wrap items-center justify-center">
          {EventsList.map((data, index) => (
            <Animate style={{ y: "-100%" }}>
              {" "}
              <div
                className={`mx-4 mt-6  bg-themeBlue py-4 pt-6 rounded-lg`}
                key={index}
              >
                <div className="ml-4 text-white pb-3">
                  <h2 className="font-bold"> {data.title}</h2>
                  <p className="text-sm ">{data.description}</p>
                </div>
                <Image src={data.img} alt="Sponsor" className="w-full" />
              </div>
            </Animate>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Section1;
