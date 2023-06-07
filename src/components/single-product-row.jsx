import React, { useState } from "react";
import { Link } from "react-router-dom";
import ProductModal from "./product-modal";

const SingleProductRow = (props) => {

	const [over, setOver] = useState(null);


  return (
    <>
      <div className="border-gray-300 border shadow-md grid grid-cols-8 gap-4 h-full p-3"
        onMouseEnter={() => setOver(props.id)} onMouseLeave={() => setOver(null)}>
        <Link to={`/${props.id}`} className="col-span-2">
          <img  
            src={over ? props.imgHover : props.courseImage}
          />
        </Link>
        <div className="col-span-6 lg:col-span-4 flex flex-col justify-evenly">
          <div className="block lg:hidden">
            {props.onSale ? <p className="line-through text-gray-400 text-xs">${props.preSalePrice}.00</p> : ""}
            <h2 className="text-xl">${props.price}.00</h2>
          </div>
          <Link to={`/${props.id}`}>
            <h5 className="text-sm lg:text-xl lg:font-bold tracking-wider">{props.courseTitle}</h5>
          </Link>
          {props.courseInfo ? <p className="font-thin hidden lg:line-clamp-2">{props.courseInfo.heading}</p> : ""}
          <span className="lg:hidden pt-6">
            <ProductModal {...props} />
          </span>
          <Link className="hidden lg:block" to={`/${props.id}`}>
            <p className="font-thin">View full details</p>
          </Link>
        </div>
        <div className="hidden lg:flex flex-col items-end lg:col-span-2">
          {props.onSale ? <p className="line-through text-gray-400 text-sm">${props.preSalePrice}.00</p> : <br></br>}
          <h2 className="text-2xl">${props.price}.00</h2>
          {props.onSale ? <p className="bg-black text-white text-xs my-3 p-1 hidden lg:block">Sale</p> : <br></br>}
          <ProductModal {...props} />
        </div>
      </div>
    </>
    
  )
}

export default SingleProductRow;