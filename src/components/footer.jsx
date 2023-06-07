import React from "react";
import { SiRss } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer-wrapper bg-slate-800 text-white text-left p-10">
      <h1 className="text-4xl my-4">Join the W3Schools Newsletter</h1>
      <h2 className="text-red-300 text-2xl my-6">Get free learning resources for coding and career advancement.</h2>
      <div className="flex flex-col mb-8">
        <input 
        className="font-extralight text-gray-50 rounded-md max-w-sm"
        type="text"
        placeholder="e-mail"/>
        <div className="flex my-4">
          <input
          id="footerCheckbox"
          type="checkbox"
          className=""
          />
          <label 
          for="footerCheckbox"
          className="text-sm font-thin ml-3"
          >
            I agree to receive your newsletters and accept the <a className="text-blue-400 underline" href="#">data privacy statement</a>.*
          </label>
        </div>
        <button className="bg-red-300 text-black font-extrabold tracking-wide self-start py-3 px-5 rounded-full">
          SUBSCRIBE
        </button>
      </div>
      <p className="font-thin">Follow us</p>
      <div className="flex justify-between w-2/12 mt-3 mb-12">
        <button className="bg-slate-600 p-1 rounded-full"><SiDiscord /></button>
        <button className="bg-slate-600 p-1 rounded-full"><SiFacebook /></button>
        <button className="bg-slate-600 p-1 rounded-full"><SiInstagram /></button>
        <button className="bg-slate-600 p-1 rounded-full"><FaLinkedinIn /></button>
        <button className="bg-slate-600 p-1 rounded-full"><SiRss /></button>
      </div>
      <div className="text-xs font-light text-center lg:text-start lg:border-0 border-t border-slate-600 pt-6">
        <a href="#">Privacy policy &#9474; </a>
        <a href="#">Refunds &#9474; </a>
        <a href="#">Contact information &#9474; </a>
        <a href="#">Need help to access your course?</a>
        <p className="text-sm font-extralight py-4">Copyright &#169; 2023 W3Schools.com.</p>
      </div>
    </div>
  )
};

export default Footer;