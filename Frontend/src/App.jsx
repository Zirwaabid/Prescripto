import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Doctor from './pages/Doctor'
import Contact from './pages/Contact'
import Login from './pages/Login'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Appointment from './pages/Appointment'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='mx-4 sm:mx-[10%]'>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/doctors' element={<Doctor />} />
        <Route path='/doctors/:speciality' element={<Doctor />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/my-appointments' element={<MyAppointments />} />
        <Route path='/my-profile' element={<MyProfile />} />
        <Route path='/appointement/:docId' element={<Appointment />} /> {/* doctors profile */}
      </Routes>
     <Footer/>
    </div>
  )
};

export default App