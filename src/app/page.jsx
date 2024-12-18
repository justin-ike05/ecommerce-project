import React from 'react'
import Image from 'next/image'
import pic from '../../public/images/news5.jpg'
import WhyUs from './whyus.jsx/page'

import OurMission from './mission/page'
import Link from 'next/link'

const Hero = () => {
  return (
    <div>
      <div className="relative w-full min-h-screen">
        <Image
          src={pic}
          alt="Hero background"
          layout="fill"
          objectFit="cover"
          priority
          className="absolute z-0"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 flex flex-col justify-center items-center h-full text-center text-white px-6">
          <div className="pt-20 space-y-10">
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight">
              Your Destination for the Perfect Ride
            </h1>
            <p className="text-lg lg:text-2xl font-medium">Over 100+ New Cars Available!</p>
            <p className="text-base lg:text-base">
              From sleek sedans to rugged SUVs, luxury rides to budget-friendly gems—Planet Wheels has it all.
              Whether you&apos;re looking for speed, style, or reliability, we connect you to the best cars at unbeatable
              prices. Your perfect car is just a click away!
            </p>
            <div className="flex flex-column justify-center gap-8">
              <button className="bg-orange-400 py-1 px-4 rounded-md hover:scale-95 transition duration-150">
                Explore here
              </button>
              <Link href="/cars">
                <button className="border-2 border-orange-400 py-1 px-4 rounded-md hover:bg-orange-400 transition duration-200 ease-linear">
                  See Cars
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="py-10 bg-black">
        <WhyUs />
        <OurMission />
      </div>
    </div>
  );
};

export default Hero;