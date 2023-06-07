import React from "react";
import { useNavigate } from "react-router-dom";
import { PRODUCTS } from "../../products";
import SingleProduct from "../../components/single-product";
import Catalog from "../catalog/catalog";
import "./shop.css"
import CareerPath from "../../components/career-path";

const Shop = () => {

	const navigation = useNavigate();

	return (
		<>
			<section className="flex flex-col">
				<h1 className="text-center text-2xl font-thin">Bestsellers</h1>
				<ul className="flex flex-nowrap overflow-x-scroll scroll scroll-smooth xl:grid xl:grid-cols-5 xl:grid-rows-2 my-8 no-scrollbar">
					{PRODUCTS.slice(0, 10).map((product) => {
							return (
								<li className="flex-none w-2/5 md:w-1/5 xl:w-auto mr-3" key={product.id}>
									<SingleProduct {...product} />
								</li>
							);
					})}
				</ul>
				<button id="atc-btn2" className="self-center py-3 px-5" onClick={() => {navigation('/course-collections')}}>See all Courses</button>
			</section>
			<section className="flex flex-col">
				<h1 className="text-center text-2xl font-thin">Best Value</h1>
				<ul className="flex flex-nowrap overflow-x-scroll xl:grid xl:grid-cols-5 xl:grid-rows-2 my-8 no-scrollbar">
					{PRODUCTS.filter((product) => product.bestValue).map((product) => {
							return (
								<li className="flex-none w-2/5 md:w-1/5 xl:w-auto mr-3" key={product.id}>
									<SingleProduct {...product} />
								</li>
							);
					})}
				</ul>
			</section>
			<section className="flex flex-col">
				<h1 className="text-center text-2xl font-thin">Most in-demand Single-Courses</h1>
				<ul className="flex flex-nowrap overflow-x-scroll xl:grid xl:grid-cols-5 xl:grid-rows-2 my-8 no-scrollbar">
					{PRODUCTS.filter((product) => product.single).map((product) => {
							return (
								<li className="flex-none w-2/5 md:w-1/5 xl:w-auto mr-3" key={product.id}>
									<SingleProduct {...product} />
								</li>
							);
					})}
				</ul>
				<button className="text-black py-3 px-5 hover:shadow-md hover:text-green-500 rounded-sm border border-black self-center" onClick={() => {navigation('/course-collections')}}>
          See all courses
        </button>
			</section>
			<section>
				<CareerPath />
			</section>
			<div>
				<Catalog />
			</div>
		</>
		
	);
};

export default Shop;