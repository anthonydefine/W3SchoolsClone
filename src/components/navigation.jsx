import React from "react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoTrophyOutline } from "react-icons/io5";
import { IoMenuOutline } from "react-icons/io5";
import { IoSearchOutline } from "react-icons/io5";
import { RxCaretDown } from "react-icons/rx";
import logo from "../assets/overview/logo.webp";

const Navigation = () => {

  return (
    <>
      <div className="shadow-md">
        <div className="flex justify-center shadow-sm">
          <p className="text-xs font-bold py-2 lg:text-sm lg:py-3">
            Try our Full Access product for 14 days risk-free
          </p>
        </div>
        <div className="flex justify-between items-center p-1 lg:px-3 m-2 border-b">
          <div className="flex items-center md:hidden">
            <IoMenuOutline className="cursor-pointer" size={36} />
            <IoSearchOutline className="ml-1 md:hidden cursor-pointer" size={28} />
          </div>
          <div>
            <Link to='/'>
              <img src={logo} className="mr-3 w-14 md:self-start" alt="W3Schools Logo"/>
            </Link>
          </div>
          <div className="hidden md:flex grow mx-6 items-center border border-gray-200 rounded-md shadow-md">
            <button className="inline-flex flex-none items-center bg-gray-200 text-sm rounded-s-md h-full p-3">
              All categories
              <RxCaretDown className="ml-1" />
            </button>
            <input 
            type="text" 
            placeholder="What are you looking for?"
            className="border-0 grow font-extralight"
            />
            <button id="atc-btn2" className="h-full p-3 flex-none">
              <IoSearchOutline size={20} />
            </button>
          </div>
          <div className="md:flex items-center">
            <div className="hidden md:flex justify-center items-center mr-8">
              <IoTrophyOutline size={16} />
              <Link className="ml-2 font-semibold text-xs lg:text-sm" to="/">Get started</Link>
            </div>
            <Link to="/cart">
              <IoCartOutline size={30}  />
            </Link>
          </div>
        </div>
        <div>
          <div className="flex justify-center items-center md:hidden pb-2">
            <IoTrophyOutline size={16} />
            <Link className="ml-2 font-semibold text-xs" to="/">Get started</Link>
          </div>
        </div>
      </div>
    </>
    
  )
};
export default Navigation;