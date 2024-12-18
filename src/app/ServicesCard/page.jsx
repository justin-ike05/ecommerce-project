import React from 'react'

const ServicesCard = ({icon, title, description}) => {
  return (
    <div className='text-center text-slate-100 p-8 space-y-4 bg-slate-900 border-2 border-slate-700 hover:bg-slate-100 hover:text-gray-800 transition duration-300 ease-in-out rounded-md cursor-pointer'>
        <p>{icon}</p>
        <h1 className='text-3xl text-orange-400 font-bold'>{title}</h1>
        <p>{description}</p>
    </div>
  )
}

export default ServicesCard