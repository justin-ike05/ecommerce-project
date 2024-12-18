import React from 'react'
import Image from 'next/image'

const Approach = () => {
  return (
    <div className='p-8 flex flex-col-reverse justify-center md:flex-row items-center gap-5 mt-14'>
      <div className='w-full md:w-2/4 space-y-8'>
        <h1 className='text-4xl font-bold'>Our Approach</h1>
        <h2 className='font-semibold text-lg lg:text-2xl'>Planet Wheels simplifies automotive shopping with quality products and exceptional service.</h2>
        <p className='text-sm lg:text-base'>Planet Wheels is committed to revolutionizing the automotive shopping experience by creating a platform that blends convenience, quality, and innovation. Our goal is to make finding the perfect automotive products simple and stress-free for every customer.</p>
        <p className='text-sm lg:text-base'>We strive to empower our customers with reliable products and exceptional service, ensuring they drive forward with confidence and satisfaction. At Planet Wheels, your journey begins with trust and ends with excellence.</p>
      </div>
      <div>
        <Image src="/images/approach.jpg" alt="Approach" className='rounded-lg' width={500} height={500} />
      </div>
    </div>
  )
}

export default Approach