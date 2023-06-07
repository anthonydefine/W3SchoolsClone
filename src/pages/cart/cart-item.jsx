import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Cross2Icon } from '@radix-ui/react-icons';
import { Select } from "flowbite-react";

export const CartItem = (props) => {

	const { id, courseTitle, price, courseImage, onSale, preSalePrice } = props.data;
	const { cartItems, updateCartItemCount, removeFromCart } = useContext(ShopContext);

	return (
    <div className="flex border-2 my-4 rounded-sm p-4 shadow-sm">
      <div className="flex-none">
        <img className="w-28" src={courseImage} />
      </div>
      <div className="flex flex-col items-center md:flex-row md:justify-between md:grow ml-6">
        <div className="">
          <p>{courseTitle}</p>
          <div className="flex items-center my-1">
            <p className="text-xs mr-1 font-bold">Price</p>
            {onSale ? <p className="line-through text-gray-400 text-sm px-3">${preSalePrice}.00</p> : <br></br>}
            <p className="text-sm">${price}.00</p>
          </div>
          <Select 
            style={{ backgroundColor: 'white', border: 'solid 1px black', borderRadius: '0', height: '100%'}} 
            id='quantity'
            value={cartItems[props.id]} 
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="my-2 md:hidden"
            >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Select>
          <div className="flex justify-start items-center md:hidden">
            <p className="mr-8 text-sm lg:text-base tracking-wider">${price}.00</p>
            <Cross2Icon className="cursor-pointer bg-slate-300 rounded-full w-4 h-4" onClick={(e) => removeFromCart(id)}/>
          </div>
        </div>
        <div className="hidden md:flex">
          <Select 
            style={{ backgroundColor: 'white', border: 'solid 1px black', borderRadius: '0', height: '100%'}} 
            id='quantity'
            value={cartItems[props.id]} 
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
            className="my-2 mr-12"
            >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
          </Select>
          <div className="flex justify-start items-center">
            <p className="mr-8 text-sm lg:text-base tracking-wider">${price}.00</p>
            <Cross2Icon className="cursor-pointer bg-slate-300 rounded-full w-4 h-4" onClick={(e) => removeFromCart(id)}/>
          </div>
        </div>
      </div>
    </div>
	)
}