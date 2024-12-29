
import { NavLink, useNavigate } from 'react-router-dom'
import {assets} from '../assets/assets'
import { useState } from 'react';
const Navbar = () => {
    const navigate =useNavigate();
    
    const [showMenu,setShowmenu]=useState(false);
    const [token,setToken]=useState(true);


    return (
    <div className="flex items-center justify-between py-4 mb-5 border-b border-b-gray-500">
    <img onClick={()=> navigate('/')} className=' w-36 sm:w-44 cursor-pointer' src={assets.logo} alt="" />
    <ul className='hidden md:flex items-start gap-5 font-medium'>
        <NavLink to='/'>
            <li className='py-1'>HOME</li>
            <hr  className='border-none outline-none  w-3/5 h-0.5 bg-primary m-auto hidden'/>
        </NavLink>
        <NavLink to='/doctors'>
            <li className='py-1'>ALL DOCTORS</li>
            <hr  className='border-none outline-none bg-primary w-3/5 h-0.5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/about'>
            <li className='py-1'>ABOUT</li>
            <hr  className='border-none outline-none bg-primary w-3/5 h-0.5 m-auto hidden'/>
        </NavLink>
        <NavLink to='/contact'>
            <li className='py-1'>CONTACT</li>
            <hr  className='border-none outline-none bg-primary w-3/5 h-0.5 m-auto hidden'/>
        </NavLink>
    </ul>
    <div className="flex items-center gap-4 ">
        {
            token 
            ? <div className='flex items-center gap-2 cursor-pointer group relative '>
                <img  src={assets.profile_pic} alt="profile image" className='w-8 rounded-full' />
                <img src={assets.dropdown_icon} alt="dropdown icon" className="w-2.5 cursor-pointer" />
                <div className="absolute top-0 right-0 pt-14 text-gray-600 text-base font-medium z-20 hidden group-hover:block ">
                    <div className=" min-w-48 flex flex-col gap-4 p-4 rounded bg-stone-100">
                        <p onClick={()=> navigate('/my-profile')} className="hover:text-black cursor-pointer">My Profile</p>
                        <p onClick={()=> navigate('/my-appointments')} className="hover:text-black cursor-pointer">My Appointments</p>
                        <p onClick={()=> setToken(false)} className="hover:text-black cursor-pointer">Logout</p>
                    </div>
                </div>

            </div>
            : <button onClick={()=> navigate('/login')} className='bg-primary text-white px-8 py-3 font-light rounded-full hidden  md:block'>create account</button>
        }
    </div>
    <img onClick={()=> setShowmenu(true)} src={assets.menu_icon} alt="icon" className='w-6 md:hidden' />
    <div className={`${showMenu ? 'fixed w-full' :'h-0 w-0'} md:hidden right-0 top-0 bottom-0 overflow-hidden bg-white text-lg font-medium`}>
        <div className='flex justify-between items-center px-5 py-5'>
            <img src={assets.logo} alt="logo" className="w-36" />
            <img onClick={()=> setShowmenu(false)} src={assets.cross_icon} alt="cross icon" className="w-7" />
        </div>
        <ul className='flex flex-col items-center gap-2 px-4 mt-5  '>
            <NavLink onClick={()=> setShowmenu(false)} to={'/'}><p className='px-4 py-2 inline-block rounded '>Home</p></NavLink>
            <NavLink onClick={()=> setShowmenu(false)} to={'doctors'}><p className='px-4 py-2 inline-block rounded'>All Doctors</p></NavLink>
            <NavLink onClick={()=> setShowmenu(false)} to={'about'}><p className='px-4 py-2 inline-block rounded'>About</p></NavLink>
            <NavLink onClick={()=> setShowmenu(false)} to={'contact'}><p className='px-4 py-2 inline-block rounded'>Contact</p></NavLink>
            <button onClick={()=> {navigate('/login');setShowmenu(false)}} className='bg-primary text-white px-8 py-3 font-light rounded-full  md:block place-items-center'>create account</button>
        </ul>
        
    </div>
    </div>
    )
}

export default Navbar
