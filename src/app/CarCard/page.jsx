import React from 'react'
import Link from 'next/link';
import Image from 'next/image';

const CarsCard = ({ img, name, price, slug }) => {
  const imageStyle = {
    width: '500px',
    height: '500px',
    objectFit: 'cover',
    borderRadius: '8px',
  };
  return (
    <Link href={`/cars/${slug}`}>
      <div className='border-2 border-slate-800 bg-gray-900 text-slate-100 rounded-xl mb-2 cursor-pointer'>
        <div>
          <Image src={img} alt={`${name}`} style={imageStyle} />
        </div>
        <h1 className='font-bold text-xl pt-5 pl-5 text-gray-400'>{name}</h1>
        <div className='flex justify-between px-6 pb-2'>
          <h3 className='font-semibold text-xl'>${price}</h3>
          <button className='bg-black text-white text-base md:text-lg px-2 md:px-3 py-1 rounded-md hover:bg-orange-400 transition duration-200 ease-linear'>Order Now</button>
        </div>
      </div>
    </Link>
  );
};

export default CarsCard 