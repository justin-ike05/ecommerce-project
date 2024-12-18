import React from 'react'
import { GiCarWheel } from 'react-icons/gi'
import { SiCoronaengine, SiGoogleearthengine } from 'react-icons/si'
import { MdDesignServices } from 'react-icons/md'
import { MdSettings } from 'react-icons/md'
import { FaCar } from 'react-icons/fa'
import ServicesCard from '../ServicesCard/page'

const OurServices = () => {
  const icon1 = <GiCarWheel className='text-green-500 mx-auto' size={48} />
  const icon2 = <SiGoogleearthengine className='text-green-500 mx-auto' size={48} />
  const icon3 = <MdDesignServices className='text-green-500 mx-auto' size={48} />
  const icon4 = <MdSettings className='text-green-500 mx-auto' size={48} />
  const icon5 = <FaCar className='text-green-500 mx-auto' size={48} />
  const icon6 = <SiCoronaengine className='text-green-500 mx-auto' size={48} />
  return (
    <div className='container pt-6 p-8 bg-black'>
      <div>
        <h1 className='font-bold text-4xl text-center'>Our <span className='text-orange-400'>Services</span></h1>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-4'>
        <ServicesCard icon={icon1} title="Tires & Wheels" description={'Planet Wheels provides durable tires and stylish wheels for all vehicles and terrains, with expert advice, great prices, and fast delivery for a hassle-free upgrade'} />
        <ServicesCard icon={icon2} title="Exhaust & System" description={'We provide top-quality car exhaust systems designed to enhance performance, efficiency, and durability for a smoother ride.'} />
        <ServicesCard icon={icon3} title="Cars Maintenance" description={'Keep your car running like a dream with expert maintenance services designed for reliability, safety, and peace of mind.'} />
        <ServicesCard icon={icon4} title="Broke Repairs" description={'Ensure smooth and safe drives with reliable car maintenance and expert brake repair services tailored to keep you on the road.'} />
        <ServicesCard icon={icon5} title="Body Services" description={'Restore your car\'s shine and style with professional body repairs and precision detailing that turn heads on the road.'} />
        <ServicesCard icon={icon6} title="Engine Services" description={'Boost your car\'s performance with expert engine services that ensure power, efficiency, and long-lasting reliability.'} />
      </div>
    </div>
  )
}

export default OurServices
