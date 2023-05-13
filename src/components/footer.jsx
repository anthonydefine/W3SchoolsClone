import React from "react";
import { Label } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { Checkbox } from "flowbite-react";
import { Button } from "flowbite-react";
import { SiRss } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import { SiDiscord } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="footer-wrapper bg-slate-800 text-white text-left p-10">
      <h1 className="text-4xl">Join the W3Schools Newsletter</h1>
      <h2 className="text-red-300 text-3xl">Get free learning resources for coding and career advancement.</h2>
      <form>
        <div>
          <div className="block">
            <Label
              htmlFor="password1"
              value="Your password"
            />
          </div>
          <TextInput
            className="w-4/12"
            id="password1"
            type="email"
            placeholder="e-mail"
          />
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label className="text-white" htmlFor="remember">
            I agree to receive your newsletters and accept the <a href="#">data privacy statement.</a>*
          </Label>
        </div>
        <Button className="bg-red-300 text-slate-800 font-extrabold rounded-3xl" type="submit">
          SUBSCRIBE
        </Button>
      </form>
      <p className="font-thin">Follow us</p>
      <div className="flex justify-evenly w-3/12 mt-3">
        <button className="bg-slate-600 p-1 rounded-full"><SiDiscord /></button>
        <button className="bg-slate-600 p-1 rounded-full"><SiFacebook /></button>
        <button className="bg-slate-600 p-1 rounded-full"><SiInstagram /></button>
        <button className="bg-slate-600 p-1 rounded-full"><FaLinkedinIn /></button>
        <button className="bg-slate-600 p-1 rounded-full"><SiRss /></button>
      </div>
      <div className="text-xs font-light">
        <a href="#">Privacy policy &#9474; </a>
        <a href="#">Refunds &#9474; </a>
        <a href="#">Contact information &#9474; </a>
        <a href="#">Need help to access your course?</a>
        <p className="text-sm">Copyright &#169; 2023 W3Schools.com.</p>
      </div>
    </div>
  )
};

export default Footer;