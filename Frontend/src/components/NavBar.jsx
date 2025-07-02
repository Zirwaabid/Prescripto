import React from 'react'
import { assets } from '../assets/assets_frontend/assets'
import { NavLink } from 'react-router-dom'
function NavBar() {
    return (
        <div className='flex items-center justify-between text-sm py-4 mb-4 border-b border-b-gray-400'>
            <img className='w-44 cursor-pointer' src={assets.logo} alt="Logo" />
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
            <div>
                <button className='hidden md:block primary text-white px-8 py-3 rounded-full font-light '>Create account</button>
            </div>

        </div>
    )
}

export default NavBar