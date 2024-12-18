import React from 'react'


const OurMission = () => {
    return (
        <div className='p-8 container my-10'>
            <div>
                <h1 className='font-bold text-4xl text-center'>Our <span className='text-orange-400'>Mission</span></h1>
            </div>
            <div className='flex flex-col justify-center md:flex-row items-center gap-5 mt-8'>
                <div className='w-full md:w-2/4'>
                    <img src="/images/mission.jpg" alt="Mission" className='rounded-lg' />
                </div>
                <div className='w-full md:2/4 space-y-4'>
                    <h1 className='font-bold text-orange-400 text-lg lg:text-3xl'>To create a community where every journey is extraordinary</h1>
                    <h2 className='font-semibold text-lg lg:text-2xl'>Empower individuals to achieve sustainable mobility solutions and inspire a positive impact on the environment</h2>
                    <p className='text-sm lg:text-base'>Connecting you to the perfect ride—where innovation meets style and performance</p>
                    <p className='text-sm lg:text-base'>Planet Wheels is committed to offering a diverse range of high-quality vehicles, from electric cars to luxury rides. We make it easy for you to find the perfect car at an unbeatable price, ensuring a seamless and reliable car-buying experience</p>
                </div>
            </div>
        </div>
    )
}

export default OurMission
