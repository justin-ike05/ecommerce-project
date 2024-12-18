import React from 'react'


const Vision = () => {
  return (
    <div className='p-8 flex flex-col justify-center md:flex-row items-center gap-5 mt-16'>
        <div className='w-full md:w-2/5'>
        <img src="/images/vision.jpg" alt="Vision" className='rounded-lg' width={400} height={300}/>
        </div>
        <div className='w-full md:w-2/4 space-y-8'>
            <h1 className='text-4xl font-bold'>Our Vision</h1>
            <h2 className='font-semibold text-lg lg:text-2xl'>Empower individuals to achieve sustainable nobility solutions and inspire a positive impact on the environment</h2>
            <p className='text-sm lg:text-base'>To revolutionize the automotive shopping experience by providing a seamless, trustworthy, and innovative platform where customers can find quality vehicles and accessories, driving convenience and satisfaction worldwide</p>
            <p className='text-sm lg:text-base'>We envision empowering individuals and businesses with easy access to reliable automotive solutions while fostering a community built on trust, innovation, and a shared passion for mobility.</p>
        </div>
    </div>

  )
}

export default Vision