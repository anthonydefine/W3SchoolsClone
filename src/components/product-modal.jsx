import React, { useContext } from 'react';
import { ShopContext } from '../context/shop-context';
import * as Dialog from '@radix-ui/react-dialog';
import { Select } from "flowbite-react";
import { Label } from "flowbite-react";
import { Cross2Icon } from '@radix-ui/react-icons';
import ImageGallary from './image-gallary';
import { useNavigate } from 'react-router-dom';

function ProductModal(props) {
  const { cartItems, updateCartItemCount } = useContext(ShopContext);

  const navigate = useNavigate();

  return (
    <>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="text-black py-2 hover:shadow-md rounded-sm p-1 border border-black">
            Quick shop
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="bg-blackA9 data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[40%] left-[50%] h-[60vh] w-[80vw] translate-x-[-50%] translate-y-[-50%] bg-white p-[25px] focus:outline-none">
            <div className='grid grid-cols-6 gap-6'>
              <div className='col-span-4'>
                <ImageGallary {...props}/>
              </div>
              <div className='col-span-2'>
                <h1 className='text-3xl mt-2'>{props.courseTitle}</h1>
                <p className='text-gray-500 py-3'>by w3schools</p>
                <h4 className='my-3'>${props.price}</h4>
                <div className='grid grid-cols-6 gap-2 my-3'>
                  <div className="col-span-2" id="select">
                    <Label htmlFor="quantity" value="Quantity"/>
                      <Select className="rounded-none" id="quantity" value={cartItems[props.id]} onChange={(e) => updateCartItemCount(Number(e.target.value), props.id)}>
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
                  <button className='border border-black col-span-4 rounded-sm py-3 hover:shadow-md' onClick={() => navigate('/cart')}>Add to cart</button>
                </div>
                <button id='atc-btn2' className='w-full py-3'>Buy it now</button>
              </div>
            </div>
            <Dialog.Close asChild>
              <button
                className="absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </>
  );
};
export default ProductModal;