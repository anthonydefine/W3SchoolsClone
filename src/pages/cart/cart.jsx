import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import { CartItem } from "./cart-item";
import { IoCartOutline } from "react-icons/io5";
import { RiArrowRightSLine } from "react-icons/ri"
import Paypal from "../../assets/icons/icons8-paypal-48.png";

import { Link, useNavigate } from "react-router-dom";

export const Cart = () => {

	const { cartItems, getTotalCartAmount } = useContext(ShopContext);
	const totalAmount = getTotalCartAmount();

	const navigate = useNavigate();

	return (
		<section>
			<div className="flex items-center justify-between my-10">
				<h1 className="text-3xl tracking-wider">Your cart</h1> 
				<div>
					{totalAmount > 0 ? (
						<div className="flex">
							<div className="me-4">
								<p className="text-gray-400 text-right">Subtotal</p>
								<h1 className="text-2xl">${totalAmount}.00</h1>
							</div>
							<button id="atc-btn2" className="flex justify-evenly items-center my-2 px-4 rounded-md text-white">
								<IoCartOutline className="me-2" size={24}/> 
								Check out
							</button>
						</div>
					) : (
						<Link className="flex items-center" to={"/"}>Continue shopping <RiArrowRightSLine size={18}/></Link>
					)}
				</div>
			</div>
			<div>
				{PRODUCTS.map((product, id) => {
					if (cartItems[product.id] !== 0) {
						return <CartItem key={id} data={product} />
					}
				})}
			</div>
			{totalAmount > 0 ? (
				<>
					<div className="flex justify-between border-t-2 pt-8 mt-10">
						<div className="text-left">
							<h1 className="text-2xl mb-6">Subtotal</h1>
							<p className="my-4">Tax included and shipping calculated at checkout</p>
							<p>Your cart does not require shipping.</p>
						</div>
						<div>
							<h1 className="text-2xl">${totalAmount}.00</h1>
						</div>
					</div>
					<button id="atc-btn2" className="flex justify-center items-center min-w-full my-5 py-4 rounded-md text-white">
						<IoCartOutline className="me-2" size={24}/> Check out
					</button>
					<button style={{backgroundColor: '#ffc439'}} className="min-w-full md:max-w-xs flex items-center justify-center text-blue-800 font-bold text-2xl py-1 rounded-md">
						<img src={Paypal} />
						Paypal
					</button>
					<Link className="flex justify-center mt-8 items-center" to={"/"}>Continue shopping <RiArrowRightSLine size={18}/></Link>
				</>
						
					) : (
						<div className="flex flex-col py-40 items-center border-t-2 border-r-2 border-l-2">
							<p className="text-sm my-4">Your cart is empty</p>
							<button id="atc-btn2" className="flex justify-evenly items-center my-2 py-3 px-4 rounded-md text-white"
								onClick={() => navigate("/")}>
								<IoCartOutline className="me-2" size={24}/> Continue shopping
							</button>
						</div>
					)}
			
		</section>
	)
}