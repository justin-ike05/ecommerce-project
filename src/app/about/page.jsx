import React from 'react'
import Vision from '../Vision/page'
import Approach from '../Approach/page'


export default function AboutUs() {
  return (
    <div className=' container pt-6 bg-black'>
      <div>
        <h1 className='font-bold text-4xl text-center'>About <span className='text-orange-400'>US</span></h1>
      </div>
      <Vision />
      <Approach />
    </div>
  )
}
