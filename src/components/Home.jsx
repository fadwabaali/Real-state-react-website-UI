import React from 'react'
import styles from '../styles/globalStyles';
import { MdLocationOn } from "react-icons/md";
import { BsPlusLg } from "react-icons/bs";
import heroImage from '../assets/home.jpg'

const Home = () => {
  return (
    <section className={styles.section}>
        <div className={`${'grid grid-cols-1 gap-4 md:grid-cols-2'} ${styles.container}`}>
            <div>
                <h1 className={`${'relative before:w-[40px] before:h-[40px] before:rounded-full before:bg-red-400 before:absolute before:left-[145px] md:before:left-[225px] z-[100] before:z-[-1]'} ${styles.bigTitle}`}>
                    Discover <br/> Most Suitable <br /> Property
                </h1>
                <p>
                    Find a variety of properties that suit you very easily, <br />
                    forget all difficulties in finding a residence for you
                </p>
                <div className='rounded-[10px] mb-6 bg-white p-2 flex items-center justify-between gap-0 w-[350px]'>
                    <MdLocationOn className='text-[#3959D7] text-xl' />
                    <input type="text" name="Search by location" placeholder='Search by location...' />
                    <button className={styles.button}>Search</button>
                </div>
                <div className='grid grid-cols-3 place-items-center'>
                    <div>
                        <p className='text-[#FFF] flex opacity-100 text-2xl font-semibold mb-2'>
                            9K
                            <span className={styles.specialSpan } > <BsPlusLg /></span>
                        </p>
                        <p>Premium <br /> Product</p>
                    </div>
                    <div>
                        <p className='text-[#FFF] flex opacity-100 text-2xl font-semibold mb-2'>
                            2K
                            <span className={styles.specialSpan } > <BsPlusLg /></span>
                        </p>
                        <p>Happy <br /> Customer</p>
                    </div>
                    <div>
                        <p className='text-[#FFF] flex opacity-100 text-2xl font-semibold mb-2'>
                            28K
                            <span className={styles.specialSpan } > <BsPlusLg /></span>
                        </p>
                        <p>Awards <br /> Winning</p>
                    </div>
                </div>
            </div>
            <div className='flex items-center justify-center'>
                <img className={` ${styles.roundedimage} ${'border-[#242424]'}`} src={heroImage} alt="hero-apartement" />
            </div>
        </div>
    </section>
  )
}

export default Home