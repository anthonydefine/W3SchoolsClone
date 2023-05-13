import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { PRODUCTS } from '../../products';
import { ShopContext } from '../../context/shop-context';
import CompanyPitch from './company-pitch';
import CourseOverview from './course-overview';
import FrequentQuestions from '../../components/questions';
import ImageGallary from '../../components/image-gallary';
import { Badge } from 'flowbite-react';
import { Select } from "flowbite-react";
import { Label } from "flowbite-react";
import { GiCheckMark } from "react-icons/gi";
import { RiArrowRightSLine } from "react-icons/ri";

const ProductPage = () => {
  const { productId } = useParams();
  const product = PRODUCTS.find((product) => product.id === productId);
  const {id, onSale, preSalePrice, price, courseTitle, courseImage, imgHover, courseInfo } = product;

	const { cartItems, updateCartItemCount } = useContext(ShopContext);

  const navigate = useNavigate();


  return (
    <section className='product-wrapper'>
      <div className='flex font-light'>
        <a className='flex items-center' href='#'>Home <RiArrowRightSLine /> </a>
        <a className='flex items-center' href='#' onClick={() => navigate("/")}>Certification Course Catalog <RiArrowRightSLine /> </a>
        <a href='#'>{courseTitle}</a>
      </div>
      <div className='course-details grid md:grid-cols-2 gap-4'>
          <div className='min-w-full'>
            <ImageGallary {...product} />
          </div>
          <div>
            <h1 className='text-3xl text-left tracking-wider'>{courseTitle}</h1>
            <div>
              {onSale ? 
              <div className='flex items-center'>
                <p className='line-through text-lg me-2'>${preSalePrice}</p>
                <p className='font-light mr-6'>${price}</p>
                <Badge id='value-badge'>VALUE DEAL! Save ${preSalePrice - price}</Badge>
              </div> :
              <div className='flex'>
                <p className='font-light mr-6'>${price}</p>
                <Badge id='guarantee-badge'>14-DAY MONEY BACK GUARANTEE</Badge>
              </div>
              }
            </div>
            <div>
              {courseInfo ? (
                <div>
                  <p className='text-sm'>{courseInfo.heading}</p>
                  <ul>
                    <li><span><GiCheckMark/></span>{courseInfo.bulletOne}</li>
                    <li><span><GiCheckMark/></span>{courseInfo.bulletTwo}</li>
                    <li><span><GiCheckMark/></span>{courseInfo.bulletThree}</li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className='grid grid-cols-8 gap-2 my-3'>
              <div className="col-span-2" id="select">
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
              <button className='border border-black col-span-6 rounded-sm py-3 hover:shadow-md' onClick={() => navigate('/cart')}>Add to cart</button>
            </div>
            <button className='bg-green-600 p-3 rounded-sm text-white w-full'>Buy it now</button>
            <div className='testimonial italic my-4'>
              <p>
                The W3 Schools Course simplified the learning process. It's well organized and gradually challenges you to keep progressing your 
                skills. You practice as you go and build experience as you go.
              </p><br></br>
              <p>- Anton S.</p>
            </div>
          </div>
      </div>
      <div className='company-pitch'>
        <CompanyPitch {...product}/>
      </div>
      <div className='course-overview'>
        <CourseOverview {...product} />
      </div>
      <div className='f-a-q my-10'>
        <h1 className='text-2xl text-left'>Frequently asked questions:</h1>
        <FrequentQuestions {...product} />
      </div>
    </section>
  );
};

export default ProductPage;