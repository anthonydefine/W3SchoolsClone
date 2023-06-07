import React from 'react';
import classNames from 'classnames';
import * as Accordion from '@radix-ui/react-accordion';

const HowItWorks = (props) => (
  <Accordion.Root
    className="rounded-md"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Step 1: Enroll in course</AccordionTrigger>
      <AccordionContent>
        To get started on your path to become a W3Schools certified {props.tech} developer all you have to do is purchase the course token by 
        going through our online checkout. There is no risk in purchasing this course because of our 14 day satisfaction guarantee. If you are not 
        satisfied with the course, you will get your money back as long as no exam attempts are used. You can read our refund policies here.<br/><br/>
        Immediately after paying, you will be greeted with an unique email link that gives you complete access to the course overview, tutorials and 
        interactive exercises. We help you track your progress and we will automatically save your progress so you can resume at any time.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger>Step 2: Go through the course at your own pace</AccordionTrigger>
      <AccordionContent>
        The {props.courseTitle} course is made for your convenience. It is professionally structured and optimized to help you learn as fast as possible.<br/><br/>
        You will be tested with practical interactive examples and exercises to check your knowledge as you progress.<br/><br/>
        Learn at your own pace! The course and progress tracker is set up to be flexible so you can learn exactly when it fits your time schedule.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-3">
      <AccordionTrigger>Step 3: Take the exam</AccordionTrigger>
      <AccordionContent>
        After completing the learning modules, you get access to take the {props.tech} certification exam.<br/><br/>
        You will be informed of your score and if you passed or failed immediately after finishing the exam questions.<br/><br/>
        By going through the course and doing the practical exercises you are very likely pass the exam and become certified.<br/><br/>
        But in case you do not pass the exam on the first try, you have 2 attempts to pass. So in total you have 3 attempts at passing the exam.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-4">
      <AccordionTrigger>Step 4: Receive your {props.tech} developer certificate</AccordionTrigger>
      <AccordionContent>
        Congratulations! After passing the exam you will be awarded with your {props.tech} developer certificate.<br/><br/>
        Your certificates have a unique link that can be shared with potential employers, your social media and your friends.<br/><br/>
        Potential employers or others you have shared your certificate with can check if it is authentic with the link or QR code.
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
        'text-black hover:bg-green-200 focus:bg-green-200 font-bold group flex flex-1 cursor-pointer items-center text-start bg-gray-100 px-5 py-3 my-1 outline-none',
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

export default HowItWorks;