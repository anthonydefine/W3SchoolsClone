import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ShopContext } from "../context/shop-context";
import ProductModal from "./product-modal";

const SingleProduct = () => {

  const { addToCart } = useContext(ShopContext);
	const [over, setOver] = useState(null);

  const navigation = useNavigate();
  
  return (
    <div key={id} className="border-gray-300 border shadow-md p-3"
      onMouseEnter={() => setOver(id)} onMouseLeave={() => setOver(null)}>
      <Link to={`/${id}`}>
        <img 
          className="thumbnail mx-auto" 
          src={over ? imgHover : courseImage}
        />
      </Link>
      <div className="text-left items-center">
        {onSale ? <p className="line-through text-gray-400 text-sm py-1">${preSalePrice}</p> : <br></br>}
        <h2 className="text-2xl">${price}</h2>
        <h5 className="text-xl">{courseTitle}</h5>
        {over ? 
          <div className="flex justify-between flex-wrap pt-5">
            <ProductModal {...product} />
            <button id="atc-btn2" className="px-1 py-2 w-auto" onClick={() => {addToCart(id); navigation('/cart');}}>
              Add to cart
            </button>
          </div>
          : ""}
      </div>
    </div>
  )
}

export default SingleProduct;