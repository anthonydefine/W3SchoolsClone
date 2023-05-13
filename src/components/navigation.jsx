import React from "react";
import { Navbar } from "flowbite-react";
import { TextInput } from "flowbite-react";
import { Link } from "react-router-dom";
import { IoCartOutline } from "react-icons/io5";
import { IoTrophyOutline } from "react-icons/io5";
import general from "../assets/overview/general.webp";

const Navigation = () => {

  return (
    <Navbar
      fluid={true}
      rounded={true}
    >
      <Navbar.Brand>
        <img
          src={general}
          className="mr-3 h-6 sm:h-9"
          alt="W3Schools Logo"
        />
      </Navbar.Brand>
      <div className="flex md:order-2">
        <IoTrophyOutline />
        <Link to="/">Get started</Link>
        <Link to="/cart">
          <IoCartOutline  />
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <TextInput
          id="base"
          type="text"
          sizing="md"
          className="w-96 rounded-none"
          placeholder="What are you looking for?"
        />
      </Navbar.Collapse>
    </Navbar>
  )
};
export default Navigation;