import React from "react";
import Animate from "./carousel/Animate";

const Section4ContactUs = () => {
  return (
    <div className="w-full" id='contact-us'>
      <Animate style={{ x: "-40%" }}>
        <div className="w-full md:w-5/6 max-w-[900px] mx-auto bg-[#D9D9D933] text-center p-12 m-8 rounded-lg">
          <h1 className="text-themeBlue text-4xl font-bold">Contact Us</h1>
          <div className="mt-12">
            <div>
              <input
                type="text"
                placeholder="Fullname"
                className="focus:outline-none border p-4 py-2 rounded-md w-full"
              />
            </div>
          </div>
          <div className="mt-8">
            <div>
              <input
                type="text"
                placeholder="Email"
                className="focus:outline-none border p-4 py-2 rounded-md w-full"
              />
            </div>
          </div>
          <div className="mt-8">
            <div>
              <input
                type="tel"
                placeholder="Contact No."
                className="focus:outline-none border p-4 py-2 rounded-md w-full"
              />
            </div>
          </div>
          <div className="mt-8">
            <div>
              <textarea
                placeholder="Message"
                className="focus:outline-none border p-4 py-2 rounded-md w-full"
                cols={24}
                rows={8}
              ></textarea>
            </div>
          </div>
          <div className="py-4">
            <button
              type="button"
              className="p-2  px-4 border float-right bg-themeBlue text-white rounded-md"
            >
              Submit
            </button>
          </div>
        </div>
      </Animate>
    </div>
  );
};

export default Section4ContactUs;
