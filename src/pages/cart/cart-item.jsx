import React, {useContext} from "react";
import { ShopContext } from "../../context/shop-context";
import { Cross2Icon } from '@radix-ui/react-icons';
import { Select } from "flowbite-react";
import { Label } from "flowbite-react";

export const CartItem = (props) => {

	const { id, courseTitle, price, courseImage } = props.data;
	const { cartItems, updateCartItemCount, removeFromCart } = useContext(ShopContext);

	return (
    <div className="flex justify-between border-2 my-4 rounded-sm p-6 shadow-sm">
      <div className="flex items-center">
        <img width="120px" height="80px" src={courseImage} />
        <div className="text-left ms-6">
          <p>{courseTitle}</p>
          <p>Price ${price}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="w-24" id="select">
          <Label htmlFor="quantity" value="Quantity"/>
          <Select className="rounded-none" id="quantity" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id)}>
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
        </div>
        <p className="mx-8">${price}</p>
        <Cross2Icon className="cursor-pointer bg-slate-300 rounded-full w-4 h-4" onClick={(e) => removeFromCart(id)}/>
      </div>
    </div>
	)
}