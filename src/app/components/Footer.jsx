import React from 'react'
import Link from 'next/link'


export default function Footer() {
  return (
    <footer className='mt-14 text-white'>
      <div className='flex flex-col md:flex-row justify-between p-8 lg:px-28 md:px-16 px-5'>
        <div className='w-full md:w-1/4'>
          <h1 className='font-semibold text-2xl pb-4'>Planet Wheels</h1>
          <p className='mb-2 text-sm'>Thank you for shopping at Planet Wheels - Your destination for quality and performance. Drive with confidence, shop with ease.</p>
        </div>
        <div>
          <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Pages Links</h1>
          <div className='flex flex-col gap-2 font-medium'>
            <Link href="/about" className="hover:translate-x-3 duration-200 ease-linear">About us</Link>
            <Link href="/cars" className="hover:translate-x-3 duration-200 ease-linear">Our Cars</Link>
            <Link href="/services" className="hover:translate-x-3 duration-200 ease-linear">Services</Link>
          </div>
        </div>
        <div>
          <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Used Cars for sale</h1>
          <div className='flex flex-col gap-2 font-medium'>
            <Link href="/" className="hover:translate-x-3 duration-200 ease-linear">Toyota Camry</Link>
            <Link href="/" className="hover:translate-x-3 duration-200 ease-linear">Chevrolet Corvette</Link>
            <Link href="/" className="hover:translate-x-3 duration-200 ease-linear">Volkswagen Golf</Link>
            <Link href="/" className="hover:translate-x-3 duration-200 ease-linear">Nissan Rogue</Link>
          </div>
        </div>
        <div>
          <h1 className='font-semibold text-xl pb-4 pt-5 md:pt-0'>Learn More</h1>
          <div className='flex flex-col gap-2 font-medium'>
          <Link href="/" className="hover:translate-x-3 duration-200 ease-linear">User-friendly</Link>
            <Link href="/" className="hover:translate-x-3 duration-200 ease-linear">Search and Filters</Link>
            <Link href="/" className="hover:translate-x-3 duration-200 ease-linear">Secure Payment</Link>
            <Link href="/" className="hover:translate-x-3 duration-200 ease-linear">Geolocation Services</Link>
          </div>
        </div>
      </div>
      <div>
        <p className='text-center py-4'>
          @copyright developed by<span className='text-orange-400 font-semibold mx-2'>Justin Ike</span>| All rights reserved.
        </p>
      </div>
    </footer>
  )
}
