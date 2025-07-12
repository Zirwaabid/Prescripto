import React, { useContext } from 'react'
import { doctors } from '../assets/assets_frontend/assets'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
function TopDoctors() {
    const navigate = useNavigate();
    const { doctors } = useContext(AppContext)
    return (
        <div className='flex flex-col items-center gap-4 my-16 text-gray-900 md:mx-10'>
            <h1 className='text-3xl font-medium'>Top Doctors to Book</h1>
            <p className='sm:w-1/3 text-center text-sm' >Simply browse through our extensive list of trusted doctors</p>
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0">
                {doctors.slice(0, 10).map((item, index) => (
                    <div onClick={() => navigate(`/appointement/${item._id}`)}
                        key={index}
                        className="border border-blue-200 rounded-xl overflow-hidden cursor-pointer 
                 hover:-translate-y-2 transition-all duration-300 shadow-sm hover:shadow-lg bg-white"
                    >
                        <img
                            className=" bg-blue-50"
                            src={item.image || 'https://via.placeholder.com/300x150'}
                            alt="doctor"
                        />
                        <div className="p-4">
                            <div className="flex items-center gap-2 text-sm text-green-500 ">
                                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                                <span>Available</span>
                            </div>
                            <p className="font-medium text-lg text-gray-900">{item.name}</p>
                            <p className="text-sm text-gray-600">{item.speciality}</p>
                        </div>
                    </div>
                ))}
            </div>

            <button onClick={() => { navigate('/doctors'), scrollTo(0, 0) }} className='bg-blue-50 px-12 py-3 text-gray-600 rounded-full mt-10 cursor-pointer'>more</button>
        </div>
    )
}

export default TopDoctors