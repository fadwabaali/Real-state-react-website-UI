import React from 'react'
import styles from '../styles/globalStyles';
import logo1 from '../assets/logo1.png';
import logo2 from '../assets/logo2.png';
import logo3 from '../assets/logo3.png';
import logo4 from '../assets/logo4.png';


const Companies = () => {
  return (
    <section className={styles.section}>
        <div className={`${styles.container} ${'flex gap-4'}`}>
            <div className='flex-1'>
                <img className='hover:grayscale-0 transition cursor-pointer opacity-25 hover:opacity-100 duration-700 ease-in-out ' src={logo1} alt="logo1" />
            </div>
            <div className='flex-1'>
                <img className='hover:grayscale-0 transition cursor-pointer opacity-25 hover:opacity-100 duration-700 ease-in-out ' src={logo2} alt="logo2" />
            </div>
            <div className='flex-1'>
                <img className='hover:grayscale-0 transition cursor-pointer opacity-25 hover:opacity-100 duration-700 ease-in-out ' src={logo3} alt="logo3" />
            </div>
            <div className='flex-1'>
                <img className='hover:grayscale-0 transition cursor-pointer opacity-25 hover:opacity-100 duration-700 ease-in-out ' src={logo4} alt="logo4" />
            </div>
        </div>
    </section>
  )
}

export default Companies