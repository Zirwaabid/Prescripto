import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext';
import { assets } from '../assets/assets_frontend/assets';

const Appointment = () => {
  const { docId } = useParams();
  const { doctors } = useContext(AppContext);
  const [docInfo, setDocInfo] = useState(null);
  const fetchDocInfo = async () => {
    const docInfo = doctors.find(doc => doc._id === docId)
    setDocInfo(docInfo);
    console.log(docInfo)
  };

  useEffect(() => {
    fetchDocInfo()
  }, [doctors, docId])

  return docInfo && (
    <div>
      {/* --------Doctor details--------- */}
      <div className='flex flex-col sm:flex-row gap-4'>
        <div>
          <img className='primary w-full sm:max-w-72 rounded-lg' src={docInfo.image} alt="" />
        </div>

        <div className='flex-1 border border-gray-400 rounded-lg p-8 py-7 bg-white mx-2 sm:mx-0 mt-[-80px] sm:mt-0'>
          {/* --------docInfo:name,degree,experience--------- */}
          <p className='flex items-center gap-2 text-2xl font-medium text-gray-900'>{docInfo.name}
            <img className='w-5' src={assets.verified_icon} alt="" />
          </p>
          <div className='flex items-center gap-2 text-sm mt-1 text-gray-600'>
            <p>{docInfo.degree} - {docInfo.speciality}</p>
            <button className='py-0.5 px-2 border text-xs rounded-full'>{docInfo.experience}</button>
          </div>
          {/* ---------doctors about------------ */}
          <div>
            <p>About <img src={assets.info_icon} alt="" /></p>
            <p>{docInfo.about}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Appointment