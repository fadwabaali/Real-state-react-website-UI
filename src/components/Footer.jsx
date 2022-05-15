import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/globalStyles';

const Footer = () => {
  return (
    <footer className={styles.section}>
        <div className={styles.container}>
            <div className='flex flex-col gap-4 justify-start items-start md:flex-row md:gap-6 md:justify-around'>
                <div>
                    <div className='relative before:absolute before:w-[15px] before:h-[15px] before:bg-[#F07F2B] before:rounded-full before:right-0 z-[100] before:z-[-1] before:translate-y-1'>
                        <Link to='/'>
                            <h1 className={'text-[#3959D7] text-2xl md:text-3xl font-extrabold tracking-wide mb-2'}>Homyz</h1>
                        </Link>
                    </div>
                    <p>
                        Our vision is to make all people <br /> 
                        the best place to live for them.
                    </p>
                </div>
                <div className="grid grid-cols-1 gap-6 md:grid-cols-4 md:gap-6">
                    <ul className='flex flex-col gap-3'>
                        <li className='font-extrabold text-[#385382]'><h2>About </h2> </li>
                        <li>
                            <p>About Us</p>
                        </li>
                        <li>
                            <p>Features</p>
                        </li>
                        <li>
                            <p>News & Blog</p>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='font-extrabold text-[#385382]'><h2>Company </h2> </li>
                        <li>
                            <p>How We Work?</p>
                        </li>
                        <li>
                            <p>Capital</p>
                        </li>
                        <li>
                            <p>Security</p>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='font-extrabold text-[#385382]'><h2>Support </h2> </li>
                        <li>
                            <p>FAQs</p>
                        </li>
                        <li>
                            <p>Support Center</p>
                        </li>
                        <li>
                            <p>Contact Us</p>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-3'>
                        <li className='font-extrabold text-[#385382]'><h2>Movement </h2> </li>
                        <li>
                            <p>What Homyz?</p>
                        </li>
                        <li>
                            <p>Support Us</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex justify-around flex-row mt-[1.5rem]'>
                <p>&#169; Homyz. All rigths reserved</p>
                <ul className='flex flex-row gap-6'>
                    <li>
                        <p>Terms & Agreements</p>
                    </li>
                    <li>
                        <p>Privacy Policy</p>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer