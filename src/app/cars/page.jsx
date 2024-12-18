'use client';
import React from 'react'
import CarsCard from '../CarCard/page';
import { useState } from 'react';

const OurCars = () => {
  const carData = [
    {
      id: 1,
      model: "Porsche Taycan",
      price: 135000,
      image: "/images/id1.jpg",
      category: "Electric",
      slug: "porsche-taycan"
    },
    {
      id: 2,
      model: "Tesla Model X",
      price: 120990,
      image: "/images/id2.jpg",
      category: "Electric",
      slug: "tesla-model-x"
    },
    {
      id: 3,
      model: "Mercedes-Benz GLE 450",
      price: 70000,
      image: "/images/id3.jpg",
      category: "SUV",
      slug: "mercedes-benz-gle-450"
    },
    {
      id: 4,
      model: "Audi Q8 e-tron",
      price: 75000,
      image: "/images/id4.jpg",
      category: "SUV",
      slug: "audi-q8-e-tron"
    },
    {
      id: 5,
      model: "BMW i4 M50",
      price: 67895,
      image: "/images/id5.jpg",
      category: "Electric",
      slug: "bmw-i4-m50"
    },
    {
      id: 6,
      model: "Ferrari Roma",
      price: 243360,
      image: "/images/id6.jpg",
      category: "Sports Car",
      slug: "ferrari-roma"
    },
    {
      id: 7,
      model: "Ford Mustang Mach-E",
      price: 63000,
      image: "/images/id7.jpg",
      category: "Electric",
      slug: "ford-mustang-mach-e"
    },
    {
      id: 8,
      model: "Toyota Camry XSE",
      price: 36500,
      image: "/images/id8.jpg",
      category: "Sedan",
      slug: "toyota-camry-xse"
    },
    {
      id: 9,
      model: "Lexus RX 500h F Sport",
      price: 63000,
      image: "/images/id9.jpg",
      category: "SUV",
      slug: "lexus-rx-500h-f-sport"
    },
    {
      id: 10,
      model: "Chevrolet Corvette Stingray",
      price: 65995,
      image: "/images/id10.jpg",
      category: "Sports Car",
      slug: "chevrolet-corvette-stingray"
    },
    {
      id: 11,
      model: "Honda Accord Touring Hybrid",
      price: 39600,
      image: "/images/id16.jpg",
      category: "Sedan",
      slug: "honda-accord-touring-hybrid"
    },
    {
      id: 12,
      model: "Lamborghini Huracán EVO",
      price: 248295,
      image: "/images/id12.jpg",
      category: "Sports Car",
      slug: "lamborghini-huracan-evo"
    },
    {
      id: 13,
      model: "Rivian R1T",
      price: 73900,
      image: "/images/id13.jpg",
      category: "SUV",
      slug: "rivian-r1t"
    },
    {
      id: 14,
      model: "Lucid Air Grand Touring",
      price: 138000,
      image: "/images/id14.jpg",
      category: "Electric",
      slug: "lucid-air-grand-touring"
    },
    {
      id: 15,
      model: "Hyundai Sonata Limited",
      price: 36000,
      image: "/images/id15.jpg",
      category: "Sedan",
      slug: "hyundai-sonata-limited"
    },
    {
      id: 16,
      model: "BMW M4",
      price: 74900,
      image: "/images/id17.jpg",
      category: "Sports Car",
      slug: "bmw-m4"
    },
    {
      id: 17,
      model: "Tesla Model S",
      price: 129990,
      image: "/images/id18.jpg",
      category: "Electric Car",
      slug: "tesla-model-s"
    },
    {
      id: 18,
      model: "Ford F-150 Raptor",
      price: 70000,
      image: "/images/id19.jpg",
      category: "Truck",
      slug: "ford-f-150-raptor"
    },
    {
      id: 19,
      model: "Audi A6",
      price: 54000,
      image: "/images/id20.jpg",
      category: "Sedan",
      slug: "audi-a6"
    },
    {
      id: 20,
      model: "Jeep Wrangler Rubicon",
      price: 55000,
      image: "/images/id21.jpg",
      category: "SUV",
      slug: "jeep-wrangler-rubicon"
    },
    {
      id: 21,
      model: "Audi Q7",
      price: 70000,
      image: "/images/id22.jpg",
      category: "SUV",
      slug: "audi-q7"
    },
  ];
  
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value.toLowerCase());
  };

  
  const filteredCars = carData.filter((car) => 
    car.model.toLowerCase().includes(searchQuery) || 
    car.category.toLowerCase().includes(searchQuery)
  );
  return (
   <div className='container pt-6 bg-black'>
    <div>
      <h1 className='font-bold text-4xl text-center'>Our <span className='text-orange-400'>Cars</span></h1>
    </div>

    <div className='mt-6 flex justify-center'>
        <input
          type='text'
          placeholder='Search by model or category...'
          className='w-3/4 p-4 pl-10 pr-4 rounded-lg border-2 border-transparent bg-black text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-400 shadow-lg transition duration-300'
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      <div className='p-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-5'>
        {filteredCars.length > 0 ? (
          filteredCars.map((car) => (
            <div key={car.id}>
              <CarsCard
                img={car.image}
                name={car.model}
                price={car.price}
                category={car.category}
                slug={car.slug}
              />
            </div>
          ))
        ) : (
          <p className='text-white text-center'>No cars found matching your search.</p>
        )}
      </div>
    </div>
  );
};

export default OurCars
