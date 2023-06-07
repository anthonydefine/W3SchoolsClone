import product1 from "./assets/non-hover/SQLnon.webp";
import product2 from "./assets/non-hover/fullaccessnon.webp";
import product3 from "./assets/non-hover/pythonnon.webp";
import product4 from "./assets/non-hover/javascriptnon.webp";
import product5 from "./assets/non-hover/datanalyticsnon.webp";
import product6 from "./assets/non-hover/frontendnon.webp";
import product7 from "./assets/non-hover/htmlnon.webp";
import product8 from "./assets/non-hover/csharpnon.webp";
import product9 from "./assets/non-hover/cplusplusnon.webp";
import product10 from "./assets/non-hover/reactnon.avif";
import product1hover from "./assets/hover/sqlhover.webp";
import product2hover from "./assets/hover/htmlhover.webp";
import product3hover from "./assets/hover/pythonhover.webp";
import product4hover from "./assets/hover/javascripthover.webp";
import product5hover from "./assets/hover/datahover.webp";
import product6hover from "./assets/hover/frontendhover.webp";
import product8hover from "./assets/hover/csharphover.webp";
import product9hover from "./assets/hover/cplushover.webp";
import product10hover from "./assets/hover/reacthover.webp";
import overviewSQL from "./assets/overview/sql.webp";
import overviewHTML from "./assets/overview/html.webp";
import overviewPYTHON from "./assets/overview/python.webp";
import overviewJAVASCRIPT from "./assets/overview/javascript.webp";
import overviewCPLUS from "./assets/overview/cplus.webp";
import general from "./assets/overview/general.webp"

export const PRODUCTS = [
	{
		id: "1",
		onSale: false,
		preSalePrice: 0,
		price: 95.0,
		courseTitle: "Learn SQL",
		courseImage: product1,
		imgHover: product1hover,
		overviewImg: overviewSQL,
		single: true,
		table: {
			level: "Foundational",
			certification: "Certified SQL Developer",
			format: "Self-paced",
			time: "Around 25 hours",
			prerequisites: "None"
		},
		courseInfo: {
			heading: "Learn SQL and stand out from other candidates with a W3Schhols SQL Certificate.",
			bulletOne: "Increase your earning potential",
			bulletTwo: "Master SQL fundamentals",
			bulletThree: "No experience needed to start",
		},
		tech: "SQL",
	},
	{
		id: "2",
		onSale: true,
		preSalePrice: 1465.0,
		price: 695.0,
		courseTitle: "W3Schools Full Access",
		courseImage: product2,
		imgHover: product2hover,
		overviewImg: general,
		bestValue: true,
		table: {
			level: "Foundational",
			duration: "LIFETIME ACCESS",
			certification: "ALL Certifications",
			included: "ALL Courses",
			format: "Self-paced",
			time: "Around 30 hours",
			prerequisites: "None"
		},
		courseInfo: {
			heading: "The most valuable and requested product on W3Schools. With the Full Access LIFETIME Token, your job and project opportunities are endless. Learn all the most valuable developer skills and stay flexible by mastering new skills and achieving new certifications.",
			bulletOne: "Get all CURRENT and FUTURE courses and certificates for less than 50% of the original price",
			bulletTwo: "Learn and become certified in any programming language you want",
			bulletThree: "One-time purchase to get LIFETIME ACCESS to all courses and certifications",
		},
		tech: "Full Access",
	},
	{
		id: "3",
		onSale: false,
		preSalePrice: 0,
		price: 95.0,
		courseTitle: "Learn Python",
		courseImage: product3,
		imgHover: product3hover,
		overviewImg: overviewPYTHON,
		single: true,
		table: {
			level: "Foundational",
			certification: "Certified Python Developer",
			exam: "Included",
			format: "Self-paced",
			time: "Around 30 hours",
			prerequisites: "Familiarity with HTML and CSS recommended"
		},
		courseInfo: {
			heading: "Learn one of the most easy to learn and powerful programming languages now with the W3Schools Python Course!",
			bulletOne: "Increase your earning potential",
			bulletTwo: "Master Python fundamentals",
			bulletThree: "No experience needed to start",
		},
		tech: "Python",
	},
	{
		id: "4",
		onSale: false,
		preSalePrice: 0,
		price: 95.0,
		courseTitle: "Learn JavaScript",
		courseImage: product4,
		imgHover: product4hover,
		overviewImg: overviewJAVASCRIPT,
		single: true,
		table: {
			level: "Foundational",
			certification: "Certified JavaScript Developer",
			exam: "Included",
			format: "Self-paced",
			time: "Around 30 hours",
			prerequisites: "Familiarity with HTML and CSS recommended"
		},
		courseInfo: {
			heading: "Learn Javascript, the worlds most popular programming language. Javascript is a must-have skill to become a Full stack- or Web Developer.",
			bulletOne: "Increase your earning potential",
			bulletTwo: "Worlds most widely used programming language",
			bulletThree: "Become a more competent web developer",
		},
		tech: "JavaScript",
	},
	{
		id: "5",
		onSale: true,
		preSalePrice: 345.0,
		price: 190.0,
		courseTitle: "Learn Data Analytics",
		courseImage: product5,
		imgHover: product5hover,
		overviewImg: general,
		bestValue: true,
		table: {
			level: "Foundational",
			certification: "Certified Data Analyst",
			includes: "Python, Pandas, Numpy, R, SQL, and Data Science certificates",
			format: "Self-paced",
			time: "Around 80 hours",
			prerequisites: "None"
		},
		courseInfo: {
			heading: "Gain the skills to use programming to analyze data and identify trends from massive amounts of data and qualify for a wide range of high paying jobs.",
			bulletOne: "Go from zero experience to a Certified Data Analyst",
			bulletTwo: "Achieve Mastery with our 6-Part Developer Course!",
			bulletThree: "Unlock new career opportunities and maximize your income potential!",
		},
		tech: "Data Analytics",
	},
	{
		id: "6",
		onSale: true,
		preSalePrice: 285.0,
		price: 190.0,
		courseTitle: "Learn Front end Development",
		courseImage: product6,
		imgHover: product6hover,
		overviewImg: general,
		bestValue: true,
		table: {
			level: "Foundational",
			certification: "Certified Front-End Developer",
			includes: "HTML, CSS, and JavaScript Courses",
			format: "Self-paced",
			time: "Around 80 hours",
			prerequisites: "None"
		},
		courseInfo: {
			heading: "Discover the world of front-end development with W3Schools' comprehensive program! Get ready to unlock your potential as a Web Developer - regardless of whether you have any prior experience or not. Start mastering the fundamentals today and launch into success!",
			bulletOne: "Become a Certified Front-end Developer - No Experience Needed!",
			bulletTwo: "Learn HTML, CSS & JavaScript in One Course - Unlock Your Developer Potential!",
			bulletThree: "Create beautiful and functional websites and web applications",
		},
		tech: "Front-End",
	},
	{
		id: "7",
		onSale: false,
		preSalePrice: 0,
		price: 95.0,
		courseTitle: "Learn HTML",
		courseImage: product7,
		imgHover: product2hover,
		overviewImg: overviewHTML,
		single: true,
		table: {
			level: "Foundational",
			certification: "Certified HTML Developer",
			format: "Self-paced",
			time: "Around 20 hours",
			prerequisites: "Familiarity with HTML and CSS recommended"
		},
		courseInfo: {
			heading: "Start your web development career by learning HTML, the building block of all websites . HTML is an excellent first-language to learn for aspiring web developers or website owners.",
			bulletOne: "Perfect place to start for first-time front-end developers",
			bulletTwo: "Structured, beginner friendly course",
			bulletThree: "Maybe the best HTML course on the whole internet",
		},
		tech: "HTML",
	},
	{
		id: "8",
		onSale: false,
		preSalePrice: 0,
		price: 45.0,
		courseTitle: "Learn C#",
		courseImage: product8,
		imgHover: product8hover,
		single: true,
		table: {
			level: "Foundational",
			certification: "Certified C# Developer",
			exam: "Included",
			format: "Self-paced",
			time: "Around 15 hours",
			prerequisites: "None"
		},
		tech: "C#",
	},
	{
		id: "9",
		onSale: false,
		preSalePrice: 0,
		price: 45.0,
		courseTitle: "Learn C++",
		courseImage: product9,
		imgHover: product9hover,
		overviewImg: overviewCPLUS,
		table: {
			level: "Foundational",
			certification: "Certified C++ Developer",
			exam: "Included",
			format: "Self-paced",
			time: "Around 15 hours",
			prerequisites: "None"
		},
		courseInfo: {
			heading: "Master one of the worlds fastest programming languages and unlock high paying career opportunities . C++ is widely used in Spotify, Amazon, Youtube, Adobe, Apple OS, Microsoft OS and many more big tech companies.",
			bulletOne: "Go from zero experience to a certified C++ developer",
			bulletTwo: "Get high paying jobs in big tech companies",
			bulletThree: "Master C++ Fundamentals with interactive exercises",
		},
		tech: "C++",
	},
	{
		id: "10",
		onSale: false,
		preSalePrice: 0,
		price: 95.0,
		courseTitle: "Learn React.js",
		courseImage: product10,
		imgHover: product10hover,
		table: {
			level: "Foundational",
			certification: "Certified React Developer",
			exam: "Included",
			format: "Self-paced",
			time: "Around 10 hours",
			prerequisites: "Intermediate experience with HTML, CSS, and JavaScript"
		},
		tech: "React",
	},
	{
		id: "11",
		onSale: false,
		preSalePrice: 0,
		price: 95.0,
		courseTitle: "Learn PHP",
		courseImage: product9,
		imgHover: product9hover,
		overviewImg: overviewCPLUS,
		table: {
			level: "Foundational",
			certification: "Certified PHP Developer",
			exam: "Included",
			format: "Self-paced",
			time: "Around 20 hours",
			prerequisites: "None"
		},
		tech: "PHP",
	},
	{
		id: "12",
		onSale: false,
		preSalePrice: 0,
		price: 20.0,
		courseTitle: "Learn NumPy",
		courseImage: product9,
		imgHover: product9hover,
		overviewImg: overviewCPLUS,
		table: {
			level: "Foundational",
			certification: "NumPy Fundamentals",
			exam: "Included",
			format: "Self-paced",
			time: "Around 7 hours",
			prerequisites: "None"
		},
		tech: "NumPy",
	},
	{
		id: "13",
		onSale: false,
		preSalePrice: 0,
		price: 95.0,
		courseTitle: "Learn Java",
		courseImage: product9,
		imgHover: product9hover,
		overviewImg: overviewCPLUS,
		table: {
			level: "Foundational",
			certification: "Certified Java Developer",
			exam: "Included",
			format: "Self-paced",
			time: "Around 15 hours",
			prerequisites: "None"
		},
		tech: "Java",
	},
	{
		id: "14",
		onSale: false,
		preSalePrice: 0,
		price: 45.0,
		courseTitle: "Learn jQuery",
		courseImage: product9,
		imgHover: product9hover,
		overviewImg: overviewCPLUS,
		table: {
			level: "Foundational",
			certification: "Certified jQuery Developer",
			exam: "Included",
			format: "Self-paced",
			time: "Around 15 hours",
			prerequisites: "Basic understanding of HTML, CSS, and JavaScript"
		},
		tech: "jQuery",
	},
	{
		id: "15",
		onSale: false,
		preSalePrice: 0,
		price: 45.0,
		courseTitle: "Learn Typescript",
		courseImage: product9,
		imgHover: product9hover,
		overviewImg: overviewCPLUS,
		table: {
			level: "Foundational",
			certification: "Certified Typescript Developer",
			exam: "Included",
			format: "Self-paced",
			time: "Around 10 hours",
			prerequisites: "Intermediate experience with JavaScript"
		},
		tech: "Typescript",
	},
	{
		id: "16",
		onSale: true,
		preSalePrice: 475.0,
		price: 295.0,
		courseTitle: "Learn Web Application Development",
		courseImage: product2,
		imgHover: product2hover,
		overviewImg: general,
		bestValue: true,
		table: {
			level: "Foundational",
			duration: "LIFETIME ACCESS",
			certification: "Ccertified Web Application Developer",
			included: "HTML, CSS, JavaScript, SQL, and PHP.",
			format: "Self-paced",
			time: "Around 125 hours",
			prerequisites: "None"
		},
		courseInfo: {
			heading: "With this program you can go from zero experience to a Full-Stack Developer. You will gain the skills to develop and design powerful web applications and qualify for a wide range of high paying jobs.",
			bulletOne: "Go from zero experience to a Certified Web Application Develop",
			bulletTwo: "5 in 1 course (Front-end & Back-end)",
			bulletThree: "Get the skills to create powerful and visually stunning web apps",
		},
		tech: "Web Application Development",
	},
	{
		id: "17",
		onSale: true,
		preSalePrice: 470.0,
		price: 295.0,
		courseTitle: "Learn Modern Web Development",
		courseImage: product2,
		imgHover: product2hover,
		overviewImg: general,
		bestValue: true,
		table: {
			level: "Foundational",
			duration: "LIFETIME ACCESS",
			certification: "Certified Modern Web App Developer",
			included: "HTML, CSS, JavaScript, React.js, Typescript and SQL.",
			format: "Self-paced",
			time: "Around 125 hours",
			prerequisites: "None"
		},
		courseInfo: {
			heading: "Our most comprehensive program on Web Development. Gain job-ready skills that are relevant for working with both small or big tech companies.",
			bulletOne: "Go from zero experience to a Certified Web Developer",
			bulletTwo: "6 in 1 course (Complete program)",
			bulletThree: "Create beautiful, fast, and functional websites and web applications",
		},
		tech: "Modern Web Development",
	},
	{
		id: "18",
		onSale: true,
		preSalePrice: 235.0,
		price: 140.0,
		courseTitle: "Learn Web Design",
		courseImage: product2,
		imgHover: product2hover,
		overviewImg: general,
		bestValue: true,
		table: {
			level: "Foundational",
			duration: "LIFETIME ACCESS",
			certification: "Certified Web Design",
			included: "4x certifications",
			format: "Self-paced",
			time: "Around 80 hours",
			prerequisites: "None"
		},
		tech: "Modern Web Development",
	},
]