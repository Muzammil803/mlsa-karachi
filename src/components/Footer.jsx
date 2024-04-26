import Image from "next/image";
import React from "react";
import { IoIosMail } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { SlSocialLinkedin } from "react-icons/sl";
import { FaTwitter } from "react-icons/fa";
import Animate from "./carousel/Animate";
const Footer = () => {
  return (
    <section className="w-full flex justify-center py-10 px-4  bg-themeBlue">
      <div className="flex justify-between items-center flex-wrap gap-4">
        <div className="flex flex-col justify-between items-center flex-wrap gap-4 text-white text-center">
        <Animate style={{x:'-100%'}}>

        <p className="text-4xl  font-bold ">
            Microsoft Learn Student Ambassadors-Karachi Chapter
          </p>
        </Animate>

          <Animate style={{x:'-100%'}}>
          
          <p className="text-2xl font-bold text-white">Contact Information</p>
        </Animate>
          <Animate style={{x:'-100%'}}>
          
          <div className="text-center">
            <IoIosMail className="mx-auto text-[32px]" />
            <p>mlsakhioffical@outlook.com</p>
          </div>
        </Animate>
          <Animate style={{x:'-100%'}}>
          
          <div className="flex gap-4 items-center ">
            <a target="_blank" href="https://www.facebook.com/share/QT8MgS38WTm4JuhA/?mibextid=qi2Omg">
              {" "}
              <FaFacebookF className="text-[32px]" />
            </a>
            <a
              target="_blank" href="https://www.instagram.com/mlsauok?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            >
              <FaInstagram className="text-[32px]" />
            </a>
            <a target="_blank" href="https://www.linkedin.com/company/mlsa-uok/">
              <SlSocialLinkedin className="text-[32px]" />
            </a>
            <FaTwitter className="text-[32px]" />
          </div>
        </Animate>
        <a href="https://www.linkedin.com/in/muhammad-muzammil-7a280222a/" target="_blank" className="text-[10px] mt-8"> <p >Developed By Muhammad Muzammil</p></a>
        </div>
      </div>

    </section>
  );
};

export default Footer;
