import React, { useState } from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink, useNavigate } from 'react-router-dom'
function NavBar() {
    const [showMenu, setShowMenu] = useState(false);
    const [token, setToken] = useState(true);

    const navigate = useNavigate();
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-4 border-b border-b-gray-400'>
            <img onClick={()=>{navigate("/")}} className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
            <ul className='hidden md:flex items-start gap-5 font-medium'>
                <NavLink to={"/"}>
                    <li className='py-1'>HOME</li>
                    <hr className='border-none outline-none h-0.5 primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to={"/doctors"}>
                    <li className='py-1'>ALL DOCTORS</li>
                    <hr className='border-none outline-none h-0.5 primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to={"/about"}>
                    <li className='py-1'>ABOUT</li>
                    <hr className='border-none outline-none h-0.5 primary w-3/5 m-auto hidden' />
                </NavLink>
                <NavLink to={"/contact"}>
                    <li className='py-1'>CONTACT</li>
                    <hr className='border-none outline-none h-0.5 primary w-3/5 m-auto hidden' />
                </NavLink>
            </ul>
            <div className='flex items-center gap-4'>
                {
                    token ?
                        <div className='flex items-center gap-2 cursor-pointer group relative'>
                            <img className='w-8 rounded-full' src={assets.profile_pic} alt="profile Pic" />
                            <img className='w-2.5' src={assets.dropdown_icon} alt="dropdown icon"/>
                            <div className='absolute top-0 right-0 pt-14 text-base font-medium text-gray-600 z-20 hidden group-hover:block'>
                                <div className='min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'>
                                    <p onClick={() => navigate('/my-profile')} className='hover:text-black cursor-pointer'>My Profile</p>
                                    <p onClick={() => navigate('/my-appointments')} className='hover:text-black cursor-pointer'>My Appointments</p>
                                    <p onClick={() => setToken(false)} className='hover:text-black cursor-pointer'>Logout</p>
                                </div>
                            </div>
                        </div> :
                        <button onClick={() => navigate('/login')} className='hidden md:block primary text-white px-8 py-3 rounded-full font-light '>Create account</button>
                }
            </div>

        </div>
    )
}

export default NavBar