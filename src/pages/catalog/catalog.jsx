import React, { useState } from "react";
import { PRODUCTS } from "../../products";
import SingleProduct from "../../components/single-product";
import SingleProductRow from "../../components/single-product-row";
import './catalog.css';
import { Select } from "flowbite-react";
import { FaDollarSign } from "react-icons/fa";
import { FaGripHorizontal } from "react-icons/fa";
import { FaList } from "react-icons/fa";
import { FaFilter } from "react-icons/fa"
import { FaSortAlphaDown } from "react-icons/fa"
import { Cross2Icon } from '@radix-ui/react-icons';

const CatalogComponent = () => {
  const [priceExpand, setPriceExpand] = useState(true);
  const [productExpand, setProductExpand] = useState(false);
  const [gridLayout, setGridLayout] = useState(true);
  const [filterModal, setFilterModal] = useState(false);
  const [sortingModal, setSortingModal] = useState(false);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(695);

  const priceToggle = () => {
		setPriceExpand(!priceExpand);
	};

  const productToggle = () => {
		setProductExpand(!productExpand);
	};

  const [productList, setProductList] = useState(PRODUCTS);

  const filterResult = (sortValue) => {
    const result = PRODUCTS.sort((a, b) => {
      if(sortValue==='low'){
        return a.price > b.price ? 1 : -1;
      } else if(sortValue==='high'){
        return a.price < b.price ? 1 : -1;
      } else if(sortValue==='alphabetical'){
        return a.tech >= b.tech ? 1 : -1;
      } else if(sortValue==='reverse-alphabetical'){
        return a.tech <= b.tech ? 1 : -1;
      } else if(sortValue==='best'){
        return a.bestValue > b.bestValue ? 1 : -1;
      } else if(sortValue==='all'){
        return a.id + b.id;
      }
    });
    setProductList([...result]);
  };

  return (
    <section>
      <h1 className="text-3xl tracking-wide">Certification Course Catalog</h1>
      <div className="grid grid-cols-10 gap-4">
        <div className="hidden lg:block lg:col-span-2">
          <h3 className="border-b py-8">Filters</h3>
          <div className="py-4 border-b">
            <button className="font-bold" onClick={priceToggle}>Price</button>
            {priceExpand && 
              <div className="pt-4">
                <span className="flex items-center">
                  <FaDollarSign />
                  <input defaultValue={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-5/6 rounded-sm ml-2 mb-1" placeholder="From" type="number" />
                </span>
                <span className="flex items-center">
                  <FaDollarSign />
                  <input defaultValue={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-5/6 rounded-sm ml-2 mb-1" placeholder="To" type="number" />
                </span>
              </div>
            }
          </div>
          <div className="py-4 border-b">
            <button className="font-bold" onClick={productToggle}>Product type</button>
            {productExpand && 
              <div className="pt-4 flex items-center">
                <input type="checkbox" />
                <label className="ml-3 font-thin">Course (28)</label>
              </div>
            }
          </div>
        </div>
        <div className="col-span-10 lg:col-span-8">
          <div className="flex justify-between py-8">
            <span className="flex items-center lg:hidden">
              <button className="flex items-center text-sm" onClick={() => setFilterModal(true)}>
                <FaFilter className="mr-1 text-lg" />
                Filters
              </button>
              <button className="flex items-center text-sm ml-4" onClick={() => setSortingModal(true)}>
                <FaSortAlphaDown className="mr-1 text-xl" />
                Sort by
              </button>
              <div className={filterModal ? "activeBackdrop" : "hiddenFilters"}>
                <div className={filterModal ? "activeFilters" : "hiddenFilters"}>
                  <div className="flex justify-between items-center border-b pb-6 pt-4">
                    <h3 className="tracking-wider">Filters</h3>
                    <Cross2Icon className="cursor-pointer" onClick={() => setFilterModal(false)} />
                  </div>
                  <div className="py-4 border-b">
                    <button className="font-bold" onClick={priceToggle}>Price</button>
                    {priceExpand && 
                    <div className="flex pt-4">
                      <span className="flex items-center">
                        <FaDollarSign />
                        <input defaultValue={minPrice} onChange={(e) => setMinPrice(e.target.value)} className="w-5/6 rounded-sm ml-2 mb-1" placeholder="From" type="number" />
                      </span>
                      <span className="flex items-center">
                        <FaDollarSign />
                        <input defaultValue={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} className="w-5/6 rounded-sm ml-2 mb-1" placeholder="To" type="number" />
                      </span>
                    </div>
                    }
                  </div>
                  <div className="py-4 border-b">
                    <button className="font-bold" onClick={productToggle}>Product type</button>
                    {productExpand && 
                      <div className="pt-4 flex items-center">
                        <input type="checkbox" />
                        <label className="ml-3 font-thin">Course (28)</label>
                      </div>
                    }
                  </div>
                </div>
              </div>
              <div className={sortingModal ? "activeBackdrop" : "hiddenFilters"}>
                <div className={sortingModal ? "activeSorting" : "hiddenFilters"}>
                  <div className="flex justify-between items-center py-4">
                    <h3 className="tracking-wider font-bold">Sort by</h3>
                    <Cross2Icon className="cursor-pointer" onClick={() => setSortingModal(false)} />
                  </div>
                  <div className="grid grid-cols-1 gap-3 pt-2">
                    <button value="all" className="border border-black rounded-md text-sm py-1 hover:shadow-lg" onClick={(e) => {filterResult(e.target.value); setSortingModal(false)}}>Featured</button>
                    <button value="best" className="border border-black rounded-md text-sm py-1 hover:shadow-lg" onClick={(e) => {filterResult(e.target.value); setSortingModal(false)}}>Best selling</button>
                    <button value="alphabetical" className="border border-black rounded-md text-sm py-1 hover:shadow-lg" onClick={(e) => {filterResult(e.target.value); setSortingModal(false)}}>Alphabetically, A-Z</button>
                    <button value="reverse-alphabetical" className="border border-black rounded-md text-sm py-1 hover:shadow-lg" onClick={(e) => {filterResult(e.target.value); setSortingModal(false)}}>Alphabetically, Z-A</button>
                    <button value="low" className="border border-black rounded-md text-sm py-1 hover:shadow-lg" onClick={(e) => {filterResult(e.target.value); setSortingModal(false)}}>Price, low to high</button>
                    <button value="high" className="border border-black rounded-md text-sm py-1 hover:shadow-lg onClick={(e) => {filterResult(e.target.value); setSortingModal(false)}}">Price, high to low</button>
                  </div>
                </div>
              </div>
            </span>
            <span className="hidden lg:flex items-center">
              <h3 className="font-bold mr-8">Sort by</h3>
              <Select style={{ backgroundColor: 'transparent', border: 'none', paddingRight: '40px' }} onChange={(e) => filterResult(e.target.value)}>
                <option value="all">Featured</option>
                <option value="best">Best value</option>
                <option value="low">Price: Low to High</option>
                <option value="high">Price: High to Low</option>
                <option value="alphabetical">Alphabetically: A-Z</option>
                <option value="reverse-alphabetical">Alphabetically: Z-A</option>
              </Select>
            </span>
            <span className="flex items-center">
              <h3 className="font-bold mr-2 hidden lg:block">View as</h3>
              <button className={gridLayout ? "p-3 bg-slate-200 rounded-sm" : "p-3 rounded-sm"} onClick={() => setGridLayout(true)}>
                <FaGripHorizontal size={22} />
              </button>
              <button className={gridLayout ? "p-3 rounded-sm" : "p-3 bg-slate-200 rounded-sm"} onClick={() => setGridLayout(false)}>
                <FaList size={18} />
              </button>
            </span>
          </div>
          <ul className={gridLayout ? "grid-container" : "row-container"}>
          {productList.filter(product => product.price >= minPrice && product.price <= maxPrice).map((product) => {
            return (
              <li key={product.id}>
                {gridLayout ? <SingleProduct {...product}/> : <SingleProductRow {...product}/>}
              </li>
            );
          })}
          </ul>
        </div>
      </div>
    </section>
  )
};

export default CatalogComponent;
