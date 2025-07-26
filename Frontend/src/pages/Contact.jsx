import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
const Contact = () => {
  return (
    <div>
      <div>
        <p className='text-center text-2xl pt-10 text-gray-500 pt-10'>
          CONTACT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>
      <div className='flex flex-col md:flex-row my-10 justify-center gap-10 mb-28 text-sm'>
        <img className='w-full md:max-w-[360px] rounded' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='text-lg font-semibold text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>54709 Willms Station <br /> Suite 350, Multan, PAKISTAN</p>
          <p className='text-gray-500'>Tel: (415) 555‑0132 <br />Email: zirwaabid112@gmail.com</p>
          <p className='text-lg font-semibold text-gray-600'>CAREERS AT PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 cursor-pointer'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact