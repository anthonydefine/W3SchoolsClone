import React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';

const FrequentQuestions = (props) => (
  <Accordion.Root
    className="rounded-md"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Do you have a money back guarantee?</AccordionTrigger>
      <AccordionContent>
        Yes! If you are not satisfied with your purchase on W3Schools Campus, you can get your money 
        back within 14 days from the day of your purchase.<br></br><br></br>
        It's simple. If you are not 100% satisfied with the course, you can get your money back, as 
        long as no exam attempts are used. <a href="#" className="text-black">Our refund policy</a>
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>What is the difference between course and certificate?</AccordionTrigger>
      <AccordionContent>
        If you are a beginner and want to learn, you should buy the course. If you already have a lot 
        of experience within {props.tech} developement, and only want to take the certification exam, 
        you should buy the certificate exam instead of course.<br></br><br></br>
        Courses are a structured collection of text-based modules and interactive exercises. In courses 
        you also get a personal progress overview that tracks your progress and makes sure you resume 
        where you left off.<br></br><br></br>
        In all our courses you also get the appropriate certificate exam and certificate for free with 
        your course purchase.<br></br><br></br>
        A W3Schools certificate is a display of knowledge you get from passing a certificate exam. The 
        certificate will be in your name and can be shared on your resume and social media to help 
        document and show off your knowledge as a developer.<br></br><br></br>
        Employers and friends can check if the certificate is authentic using the link or QR code for the certificate.<br></br><br></br>
        W3Schools Certificates are trusted by the top companies and institutions worldwide. We are the 
        largest web developer learning site in the world.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Do I need to have previous knowledge to take this course?</AccordionTrigger>
      <AccordionContent>
        Most of our courses are beginner friendly.<br></br><br></br>
        If you find "Beginner friendly" on the product page, the course is designed to be easy to 
        understand even for someone with zero programming knowledge.<br></br><br></br>
        You can see required prerequisites under "Course information" on this page.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>How long does it take before I get access?</AccordionTrigger>
      <AccordionContent>
        There is no waiting time.<br></br><br></br>
        Immediately after completely your purchase you are sent an email link which gives you instant 
        access to the course.
      </AccordionContent>
    </AccordionItem>
  </Accordion.Root>
);

const AccordionItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Item
    className={classNames(
      'mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    {children}
  </Accordion.Item>
));

const AccordionTrigger = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Header className="flex">
    <Accordion.Trigger
      className={classNames(
        'text-black hover:bg-green-200 focus:bg-green-200 font-bold group flex h-[45px] flex-1 cursor-pointer items-center justify-between bg-gray-100 px-5 my-1 outline-none',
        className
      )}
      {...props}
      ref={forwardedRef}
    >
      {children}
    </Accordion.Trigger>
  </Accordion.Header>
));

const AccordionContent = React.forwardRef(({ children, className, ...props }, forwardedRef) => (
  <Accordion.Content
    className={classNames(
      'text-black data-[state=open]:animate-slideDown data-[state=closed]:animate-slideUp overflow-hidden text-[15px]',
      className
    )}
    {...props}
    ref={forwardedRef}
  >
    <div className="py-[15px] px-4 text-left">{children}</div>
  </Accordion.Content>
));

export default FrequentQuestions;