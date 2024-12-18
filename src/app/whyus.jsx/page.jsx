import React from 'react'
import { SiWebmoney } from "react-icons/si";
import { FaUsers, FaShippingFast } from "react-icons/fa"
import WhyUsCard from '../WhyUsCard/page';

const WhyUs = () => {

  const icon1 = <SiWebmoney className='text-green-500 mx-auto' size={48} />;
  const icon2 = <FaUsers className='text-green-500 mx-auto' size={48} />;
  const icon3 = (
    <FaShippingFast className='text-green-500 mx-auto' size={48} />
  );
  return (
    <div className='p-8 flex flex-col justify-center container md:mt-16 py-10'>
      <h1 className='font-bold text-4xl text-center'>
        Why choose <span className='text-orange-400'>Planet Wheels</span>
      </h1>
      <p>
        Choose Planet Wheels for high-quality products, fast and easy booking, and exceptional customer service. We're dedicated to providing a seamless and satisfying experience every time!
      </p>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-5'>
        <WhyUsCard icon={icon1} title="Financing Options" description={'Planet Wheels offers top-quality wheels at competitive prices, paired with a seamless shopping experience and expert support. With a wide selection to fit every need and a commitment to sustainability, we deliver style, durability, and value you can trust.'} />
        <WhyUsCard icon={icon2} title="Satisfied Customers" description={'We prioritize customer satisfaction by offering high-quality products, fast shipping, secure payments, and excellent customer service. Your happiness is our top priority!'} />
        <WhyUsCard icon={icon3} title="Fast & Easy Booking" description={'We make booking easy and fast. Our simple, user-friendly platform ensures a smooth experience, allowing you to quickly find and reserve what you need with just a few clicks. Enjoy convenience and speed every time you book with us!'} />
      </div>
    </div>
  );
};

export default WhyUs;
