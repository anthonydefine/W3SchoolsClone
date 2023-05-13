import React, { createContext, useState } from "react";
import { PRODUCTS } from "../products";

const ShopContext = createContext();

const getDefaultCart = () => {
	let cart = {}
	for (let i=1; i < PRODUCTS.length + 1; i++) {
		cart[i] = 0;
	}
	return cart;
};

const ShopContextProvider = (props) => {
	const [cartItems, setCartItems] = useState(getDefaultCart());

	const getTotalCartAmount = () => {
		let totalAmount = 0;
		for (const item in cartItems) {
			if (cartItems[item] > 0) {
				let itemInfo = PRODUCTS.find((product) => product.id === (item));
				totalAmount += cartItems[item] * itemInfo.price
			}
		}
		return totalAmount;
	};

	const addToCart = (itemId) => {
		setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1 }));
	};

	const removeFromCart = (itemId) => {
		setCartItems((prev) => ({...prev, [itemId]: prev[itemId] = 0 }));
	};

	const updateCartItemCount = (newAmount, itemId) => {
		setCartItems((prev) => ({ ...prev, [itemId]: newAmount}));
	};

	const contextValue = {cartItems, setCartItems, addToCart, removeFromCart, updateCartItemCount, getDefaultCart, getTotalCartAmount};

  return (
		<ShopContext.Provider value={contextValue}>
			{props.children}
		</ShopContext.Provider>
	);
};

export { ShopContext, ShopContextProvider };