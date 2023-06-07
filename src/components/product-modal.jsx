import React, { useContext, useState } from 'react';
import { ShopContext } from '../context/shop-context';
import { Select } from "flowbite-react";
import { Cross2Icon } from '@radix-ui/react-icons';
import ImageGallary from './image-gallary';
import { useNavigate, Link } from 'react-router-dom';

function ProductModal(props) {

  const { cartItems, updateCartItemCount, addToCart } = useContext(ShopContext);

  const [openModal, setOpenModal] = useState(false)

  const navigation = useNavigate();

  return (
    <>
      <button className="text-sm lg:text-base py-2 hover:shadow-md rounded-sm p-1 px-8 w-full border border-black" onClick={() => setOpenModal(true)}>
        Quick shop
      </button>
      <div className={openModal ? "activeBackdrop" : "hiddenModal"}>
        <div className={openModal ? "activeProductModal" : "hiddenModal"}>
          <div className='flex justify-end p-1 lg:p-4'>
            <Cross2Icon className='cursor-pointer w-6 h-6' onClick={() => setOpenModal(false)} />
          </div>
          <div className='grid grid-cols-1 lg:grid-cols-10 lg:gap-10 p-3 lg:p-6'>
            <div className='lg:col-span-6'>
              <ImageGallary {...props} />
            </div>
            <div className='lg:col-span-4'>
              <Link to={`/${props.id}`}>
                <h1 className='text-2xl lg:text-4xl tracking-wider'>{props.courseTitle}</h1>
              </Link>
              <p className='text-gray-500 text-sm py-2'>by w3schools</p>
              <div className='flex items-center lg:py-6'>
                {props.onSale ? <p className="bg-black text-white text-sm my-3 p-1">Sale</p> : <br></br>}
                {props.onSale ? <p className="line-through text-gray-400 text-xl px-3">${props.preSalePrice}.00</p> : <br></br>}
                <h2 className="text-xl">${props.price}.00</h2>
              </div>
              <div className='grid grid-cols-8 gap-3'>
                <Select 
                  style={{ backgroundColor: 'white', border: 'solid 1px black', borderRadius: '0', height: '100%'}} 
                  className='col-span-2'
                  id='quantity'
                  value={cartItems[props.id]} 
                  onChange={(e) => updateCartItemCount(Number(e.target.value), props.id)}
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
                <button className='col-span-6 border border-black rounded-sm py-3 hover:shadow-md' onClick={() => {addToCart(props.id); navigation('/cart');}}>
                  Add to cart
                </button>
                <button id='atc-btn2' className='col-span-8 py-3 lg:my-4'>Buy it now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default ProductModal;