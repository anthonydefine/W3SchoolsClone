import React, {useState} from "react";
import { Link } from "react-router-dom";
import * as Tabs from '@radix-ui/react-tabs';
import { Badge } from "flowbite-react";
import FeNon from "../assets/non-hover/frontendnon.webp";
import Fe from "../assets/hover/frontendhover.webp";
import Da from "../assets/hover/datahover.webp";
import DaNon from "../assets/non-hover/datanalyticsnon.webp";
import Mo from "../assets/hover/modern.webp";
import MoNon from "../assets/non-hover/modernnon.webp";
import "../App.css";

const CareerPath = () => {

  const [over, setOver] = useState(false);

  return (
    <>
      <Tabs.Root id="careerpaths" className="bg-gray-100 px-5" defaultValue="tab1">
        <Tabs.List className="grid md:grid-cols-3 gap-1 pb-5">
          <Tabs.Trigger id="mainPageTab" value="tab1" className="shadow-lg">
            Become a Front-End Developer
          </Tabs.Trigger>
          <Tabs.Trigger id="mainPageTab" className="shadow-lg" value="tab2">
            Become a Data Analyst
          </Tabs.Trigger>
          <Tabs.Trigger id="mainPageTab" className="shadow-lg" value="tab3">
            Become a Modern Web Developer
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content value="tab1">
          <div className="grid md:grid-cols-2 gap-5 p-5 bg-gray-200">
            <div>
              <Link to="/6">
                <img
                  onMouseEnter={() => setOver(true)}
                  onMouseLeave={() => setOver(false)}
                  src={over ? Fe : FeNon}
                  />
              </Link>
              <div className='flex items-center'>
                <p className='line-through text-lg me-2'>$285</p>
                <p className='font-light mr-6'>$190</p>
                <Badge id="value-badge">VALUE DEAL! Save $95</Badge>
              </div>
            </div>
            <div>
              <h1 className="text-xl">Why enroll in the Front-End Developer Program?</h1>
              <p>
                The career opportunities in Front-end development are endless! From creating stunning websites to developing 
                innovative web applications, front-end development is a highly sought-after skill set that is in demand across 
                a wide range of industries.
              </p><br></br>
              <p>As a front-end developer, you could work for a wide range of companies, from startups to large corporations, 
                or even as a freelancer.
              </p>
              <h1 className="text-xl">You will learn:</h1>
              <ul>
                <li>
                  How to use the latest HTML 5 standard HTML to format text, create hyperlinks, tables, lists, forms, 
                  display images and more.
                </li>
                <li>
                  How to use CSS to change the appearance and layout of all the pages in a Web site.
                </li>
                <li>
                  How to use JavaScript to improve the design, validate forms, detect browsers, create cookies, and much more.
                </li>
              </ul>
            </div>
            <button id="atc-btn" className="col-span-2 w-1/2 mx-auto">Get program</button>
          </div>
        </Tabs.Content>
        <Tabs.Content value="tab2">
          <div className="grid md:grid-cols-2 gap-5 p-5 bg-gray-200">
            <div>
              <Link to="/5">
                <img
                  onMouseEnter={() => setOver(true)}
                  onMouseLeave={() => setOver(false)}
                  src={over ? Da : DaNon}
                  />
              </Link>
              <div className='flex items-center'>
                <p className='line-through text-lg me-2'>$345</p>
                <p className='font-light mr-6'>$190</p>
                <Badge id="value-badge">VALUE DEAL! Save $155</Badge>
              </div>
            </div>
            <div>
              <h1 className="text-xl">Why enroll in the Data Analytics Developer Program?</h1>
              <p>
                The demand for data analysts is only growing, and companies across all industries are looking for skilled professionals to help them make 
                data-driven decisions. By completing our course, you'll be equipped with the tools and confidence to start your career as a data analyst 
                and take advantage of these exciting job opportunities.
              </p>
              <h1 className="text-xl">You will learn:</h1>
              <ul>
                <li>
                  How to get started with programming in Python.
                </li>
                <li>
                  How to process, visualize, and analyze data with Python, Numpy, Pandas and R.
                </li>
                <li>
                  How to store, change and retrieve data in databases with SQL.
                </li>
              </ul>
            </div>
            <button id="atc-btn" className="col-span-2 w-1/2 mx-auto hover:bg-green-600">Get program</button>
          </div>
        </Tabs.Content>
        <Tabs.Content value="tab3">
          <div className="grid md:grid-cols-2 gap-5 p-5 bg-gray-200">
            <div>
              <Link>
                <img
                  onMouseEnter={() => setOver(true)}
                  onMouseLeave={() => setOver(false)}
                  src={over ? Mo : MoNon}
                  />
              </Link>
              <div className='flex items-center'>
                <p className='line-through text-lg me-2'>$470</p>
                <p className='font-light mr-6'>$295</p>
                <Badge id="value-badge">VALUE DEAL! Save $175</Badge>
              </div>
            </div>
            <div>
              <h1 className="text-xl">Why enroll in the Modern Web Developer Program?</h1>
              <p>
                Modern web development offers a wide range of exciting job opportunities for those with the right skills and passion for the field. 
                As a web developer, you'll be responsible for creating and maintaining dynamic and engaging websites and web applications that are 
                essential to businesses and organizations of all kinds.
              </p>
              <p>
                If you're interested in pursuing a career in modern web development, now is the perfect time to get started. With the right training from 
                W3Schools and dedication you can unlock a world of exciting job opportunities.
              </p>
              <h1 className="text-xl">You will learn:</h1>
              <ul className="list-disc">
                <li>
                  How to use the latest HTML 5 standard to format text, create hyperlinks, tables, lists, forms, display images and more.
                </li>
                <li>
                  How to use CSS to change the appearance and layout of all the pages in a Web site.
                </li>
                <li>
                  How to use JavaScript to improve the design, validate forms, detect browsers, create cookies, and much more.
                </li>
                <li>
                  The fundamentals of TypeScript syntax and extra features that TypeScript adds to JavaScript
                </li>
                <li>
                  How to build user interfaces for websites with reusable components
                </li>
                <li>
                  How to build single page applications for the web
                </li>
                <li>
                  How to store, change and retrieve data in databases with SQL.
                </li>
              </ul>
            </div>
            <button id="atc-btn" className="col-span-2 w-1/2 mx-auto">Get program</button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </>
  )
}

export default CareerPath;