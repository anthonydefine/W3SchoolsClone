import React, { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { PRODUCTS } from "../products";
import { ShopContext } from "../context/shop-context";
import ProductModal from "./product-modal";
import { Select } from "flowbite-react";
import * as Tabs from '@radix-ui/react-tabs';
import * as Collapsible from '@radix-ui/react-collapsible';
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { RxListBullet } from "react-icons/rx";

const CertificationCatalog = () => {
  const { addToCart } = useContext(ShopContext);
	const [over, setOver] = useState(null);
  const [open, setOpen] = useState(false);

	const navigation = useNavigate();

  return (
    <>
      <h1 className="text-4xl">Certification Course Catalog</h1>
      <div className="grid md:grid-cols-8 gap-4 mt-10">
        <div className="col-span-2">
          <h3 className="text-xl font-light pb-6">Filters</h3>
          <Collapsible.Root className="py-6 border-y-2" open={open} onOpenChange={setOpen}>
            <Collapsible.Trigger>Price</Collapsible.Trigger>
            <Collapsible.Content>
            <form>
              <input className="border-2" placeholder="From" type="number" />
              <input className="border-2" placeholder="To" type="number" />
            </form>
            </Collapsible.Content>
          </Collapsible.Root>
        </div>
        <div className="col-span-6">
          <Tabs.Root defaultValue="tab1">
            <Tabs.List className="flex justify-between items-center font-bold pb-8">
              <div className="flex items-center">
                <h2 className="mr-4">Sort by</h2>
                <div id="select">
                  <Select className="font-normal">
                    <option>Featured</option>
                    <option>Best selling</option>
                    <option>Alphabetically, A-Z</option>
                    <option>Alphabetically, Z-A</option>
                    <option>Price, low to high</option>
                    <option>Price, high to low</option>
                    <option>Date, old to new</option>
                    <option>Date, new to old</option>
                  </Select>
                </div>
              </div>
              <div className="flex items-center">
                <h2 className="mr-4">View as</h2>
                <Tabs.Trigger className="mr-1" value="grid">
                  <TfiLayoutGrid2 size={18} />
                </Tabs.Trigger>
                <Tabs.Trigger value="list">
                  <RxListBullet size={28} />
                </Tabs.Trigger>
              </div>
            </Tabs.List>
            <Tabs.Content value="grid">
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                {PRODUCTS.map((product) => {
                    const {id, imgHover, courseImage, price, preSalePrice, onSale, courseTitle} = product;
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
                    );
                })}
              </div>
            </Tabs.Content>
            <Tabs.Content value="list">
              <div className="grid grid-cols-1 gap-3">
                    {highToLow.map((product) => {
                        const {id, imgHover, courseImage, price, preSalePrice, onSale, courseTitle} = product;
                        return (
                          <div key={id} className="border-gray-300 border flex justify-between shadow-md hover:shadow-lg p-4">
                              <div className="flex">
                                <Link to={`/${id}`}>
                                <img
                                  key={id}
                                  onMouseEnter={() => setOver(id)} onMouseLeave={() => setOver(null)}
                                  className="thumbnail" 
                                  src={over ? imgHover : courseImage}
                                />
                                </Link>
                                <Link to={`/${id}`}>
                                  <h5 className="text-xl ml-8 mt-3 font-bold">{courseTitle}</h5>
                                </Link>
                                
                              </div>
                            <div className="flex flex-col">
                              {onSale ? <p className="line-through text-gray-400 text-sm text-right py-1">${preSalePrice}</p> : <br></br>}
                              <h2 className="text-2xl text-right">${price}.00</h2>
                              {onSale ? <span className="bg-black text-white text-sm ms-auto p-1">Sale</span> : <br></br>}
                                <div className="flex flex-col gap-3 pt-5">
                                  <ProductModal {...product} />
                                  <button id="atc-btn2" className="px-12 py-2" onClick={() => {addToCart(id); navigation('/cart');}}>
                                    Add to cart
                                  </button>
                                </div>
                            </div>
                          </div>
                        );
                    })}
                  </div>
            </Tabs.Content>
          </Tabs.Root>
        </div>
      </div>
      
    </>
  )
}

export default CertificationCatalog;