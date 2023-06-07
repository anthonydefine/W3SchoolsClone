import React, { useState } from "react";
import {  Link } from "react-router-dom";
import ProductModal from "./product-modal";

const SingleProduct = (props) => {

	const [over, setOver] = useState(null);


  return (
    <>
    <div className="border-gray-300 border shadow-md flex flex-col flex-1 h-full p-3"
      onMouseEnter={() => setOver(props.id)} onMouseLeave={() => setOver(null)}>
      <Link to={`/${props.id}`}>
        <img 
          className="thumbnail mx-auto" 
          src={over ? props.imgHover : props.courseImage}
        />
      </Link>
      <div className="flex flex-col flex-1 justify-between">
        {props.onSale ? <p className="line-through text-gray-400 text-sm">${props.preSalePrice}</p> : <br></br>}
        <h2 className="text-xl tracking-wider">${props.price}.00</h2>
        <h5 className="text-sm line-clamp-1 lg:text-base xl:text-lg">{props.courseTitle}</h5>
        <div className="pt-2">
          <ProductModal {...props} />
        </div>
      </div>
    </div>
    </>
    
  )
}

export default SingleProduct;