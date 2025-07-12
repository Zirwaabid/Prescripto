import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
function Banner() {
    return (
        <div className='flex primary rounded-lg px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10'>
            {/* -----left side----- */}
            <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5' >
                <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-semibold text-white'>
                    <p>Book Appointment </p>
                    <p>With 100+ Trusted Doctors</p>
                    <button>
                        Create account
                    </button>
                </div>
            </div>
            {/* -----right side----- */}
            <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                <img src={assets.appointment_img} alt="" />
            </div>

        </div>
    )
}

export default Banner