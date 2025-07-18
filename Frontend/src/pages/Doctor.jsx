import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const Doctor = () => {
  const [filterDoc, setFilterDoc] = useState([]);
  const navigate = useNavigate()
  const { speciality } = useParams();
  const { doctors } = useContext(AppContext);
  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    }
    else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [speciality, doctors])

  return (
    <div>
      <p className='text-gray-600'>Browse through the doctors specialist</p>
      <div className='flex flex-col sm:flex-row items-start gap-5 mt-5'>
        <div className='flex flex-col gap-4 text-sm text-gray-600'>
          <p className='doctor-speciality'>General Physician</p>
          <p className='doctor-speciality'>Gynecologist</p>
          <p className='doctor-speciality'>Dermatologist</p>
          <p className='doctor-speciality'>Pediatricians</p>
          <p className='doctor-speciality'>Neurologist</p>
          <p className='doctor-speciality'>Gastroenterologist</p>
        </div>
        <div className='w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 pt-5 gap-y-6 px-3 sm:px-0'>
          {
            filterDoc.map((item, index) => (
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
            ))
          }
        </div>
      </div>

    </div>
  )
}

export default Doctor