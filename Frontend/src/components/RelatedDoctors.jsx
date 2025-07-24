import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const RelatedDoctors = ({ speciality, docId }) => {
  const { doctors } = useContext(AppContext)
  return (
    <div>RelatedDoctors</div>
  )
}

export default RelatedDoctors