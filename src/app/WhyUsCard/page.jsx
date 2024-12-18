import React from 'react';



const WhyUsCard = ({ icon, title, description}) => {
  return (
  
    <div className='text-center text-slate-100 p-8 space-y-4 bg-gray-900 hover:bg-slate-100 hover:text-gray-900 transition duration-200 ease-in-out rounded-md cursor-pointer text-gray-900'> 
        <p>{icon}</p>
        <h1 className='text-orange-400 text-3xl font-bold'>{title}</h1>
        <p className='text-sm'>{description}</p>
    </div>
    
   
  )
}

export default WhyUsCard