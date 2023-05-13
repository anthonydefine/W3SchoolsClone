import React, { useContext, useState } from "react";
import { PRODUCTS } from "../../products";
import ProductModal from "../../components/product-modal";
import { ShopContext } from "../../context/shop-context";
import { Link, useNavigate } from "react-router-dom";
import "./shop.css"
import CareerPath from "../../components/career-path";
import CertificationCatalog from "../../components/complete-catalog";

const Shop = () => {
	const { addToCart } = useContext(ShopContext);
	const [over, setOver] = useState(null);

	const navigation = useNavigate();

	return (
		<>
			<section className="grid gap-3 grid-cols-5 grid-rows-2 my-10">
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
										<button id="atc-btn2" className="px-1 py-2" onClick={() => {addToCart(id); navigation('/cart');}}>
											Add to cart
										</button>
									</div>
									: ""}
							</div>
						</div>
					);
			})}
			</section>
			<section>
				<CareerPath />
			</section>
			<section>
				<CertificationCatalog />
			</section>
		</>
		
	);
};

export default Shop;