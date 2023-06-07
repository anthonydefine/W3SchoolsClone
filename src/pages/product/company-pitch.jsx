import React from "react";
import HowItWorks from "../../components/how-it-works";
import { FaCheck } from "react-icons/fa";
import '../shop/shop.css'

function CompanyPitch(props) {
  return (
    <div className="px-4">
      <div className="grid md:grid-cols-2 md:gap-40">
        <div>
          <h1 className="text-3xl font-bold lg:text-5xl text-left leading-relaxed tracking-wider">Why thousands of people have enrolled in W3Schools courses</h1>
          <div className="bg-slate-100 border border-zinc-300 rounded-lg my-6 py-4 px-2 text-left">
            <p>
              "Perfect e-learning course for beginners. The training is very well structured together with 
              quizes after almost every lesson. Great job! I really enjoyed it!"
            </p><br></br>
            <p>-Jan K. &#11088;&#11088;&#11088;&#11088;&#11088;</p>
          </div>
          <div className="bg-slate-100 border border-zinc-300 rounded-lg my-6 py-4 px-2 text-left">
            <p>
              "I really enjoyed the course, it was built around exercises which made it more fun and enjoyable"
            </p><br></br>
            <p>-Ash-Lee J. &#11088;&#11088;&#11088;&#11088;&#11088;</p>
          </div>
        </div>
        <div>
          <h3 className="text-2xl my-3">W3 Courses are perfect if...</h3>
          <ul className="text-start">
            <li className="flex items-center tracking-wider my-3"><span><FaCheck className="mr-4"/></span>you want to increase your earning potential</li>
            <li className="flex items-center tracking-wider my-3"><span><FaCheck className="mr-4"/></span>you want to learn or improve your developer skills</li>
            <li className="flex items-center tracking-wider my-3"><span><FaCheck className="mr-4"/></span>you want a structured and practical way to learn</li>
            <li className="flex items-center tracking-wider my-3"><span><FaCheck className="mr-4"/></span>you would like to showcase your skills on your resume and social channels</li>
          </ul>
          <div>
            <div className="flex items-center my-6 md:my-12">
              <img className="thumbnail" src={props.courseImage}
              onMouseOver={e => {e.currentTarget.src = `${props.imgHover}`}}
              onMouseOut={e => {e.currentTarget.src = `${props.courseImage}`}}
              />
              <h5 className="text-2xl ms-8">{props.courseTitle}</h5>
            </div>
            <div className="flex flex-col justify-center">
              <button id="atc-btn" className="shadow-lg tracking-widest w-full">
                ${props.price} Enroll now
              </button>
              <a className="underline text-center mt-2" href="#">Zero risk money back guarantee</a>
            </div>
          </div>
        </div>
      </div>
      <h1 className='text-2xl text-left mt-8 mb-3'>How does it work?</h1>
      <HowItWorks {...props} />
    </div>
    
  )
};

export default CompanyPitch;