"use client";
import React, { useState } from "react";
import { menuItems } from "../constants/constant";
import "./Navbar.css";
import { FaBars } from "react-icons/fa6";
import { RxCross2 } from "react-icons/rx";
import Link from "next/link";
import Image from "next/image";
import logo from "../../public/images/logo.png";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };

  return (
    <>
   

      <nav className="navbar shadow-sm ">
        <div>
          <span className="ml-0  lg:ml-0 ">
            {" "}
            <Image className="max-w-[70%] sm:max-w-[80%]" src={logo} alt="logo" />{" "}
          </span>
        </div>{" "}
        <div className="menu-icon pr-8" onClick={handleClick}>
          {active ? <RxCross2 /> : <FaBars />}
        </div>
        <div className={active ? "nav-menu active" : "nav-menu pt-1  lg:pl-0"}>
          {menuItems.map((item, index) => {
            return (
              <div key={index} className={active ? "text-white" : ""}>
                <Link
                  href={item.url}
                  className={item.cName + " text-[14px] xl:text-[16px] "}
                >
                  {item.title}
                </Link>
              </div>
            );
          })}
        </div>
        
      </nav>
    </>
  );
};

export default Navbar;
