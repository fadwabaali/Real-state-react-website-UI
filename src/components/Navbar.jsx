import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/globalStyles';
import { FaTimes, FaBars } from 'react-icons/fa';


const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const openMenuHandler = () => setOpenMenu(!openMenu);

  return (
    <nav className='w-full text-white flex justify-between relative bg-[#131313] h-20 items-center px-6 py-14 md:px-[5rem]' >
      <div className='relative before:absolute before:w-[15px] before:h-[15px] before:bg-[#3959D7] before:rounded-full before:right-0 z-[100] before:z-[-1] before:translate-y-1'>
        <Link to='/'>
          <h1 className={'text-[#FFFFFF] text-2xl md:text-3xl font-extrabold tracking-wide mb-2'}>Homyz</h1>
        </Link>
      </div>
      <ul className={`${openMenu ? '' : 'hidden md:flex'} ${'flex absolute shadow-lg shadow-indigo-500/40 rounded-bl-lg right-0 top-0 bg-[#131313] w-[80%] z-[200] h-[90vh] justify-center gap-6 items-center flex-col md:flex-row md:relative md:w-[initial] md:h-[100%] md:justify-between'}`}>
        <li>
          <Link className='text-[#727272] duration-300 transition ease-in-out delay-150 hover:text-[#fff] ' to='/Property'>Property</Link>
        </li>
        <li>
          <Link className='text-[#727272] duration-300 transition ease-in-out delay-150 hover:text-[#fff]' to='/Services'>Services</Link>
        </li>
        <li>
          <Link className='text-[#727272] duration-300 transition ease-in-out delay-150 hover:text-[#fff]' to='/Product'>Product</Link>
        </li>
        <li>
          <Link className='text-[#727272] duration-300 transition ease-in-out delay-150 hover:text-[#fff]' to='/About'>About Us</Link>
        </li>
        <li>
          <Link to='/Contact' className={styles.button}>Contact</Link>
        </li>
      </ul>

      <div className='absolute z-[210] cursor-pointer right-[25px] md:hidden ' onClick={openMenuHandler}>
        {openMenu ? <FaTimes /> : <FaBars/>}
      </div>

    </nav>
  )
}

export default Navbar