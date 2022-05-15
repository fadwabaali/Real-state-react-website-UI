import React from 'react'
import { Link } from 'react-router-dom';
import styles from '../styles/globalStyles';

const Banner = () => {
  return (
    <section className={styles.section}>
        <div className={styles.container + 'bg-[#2A49C7] px-[20px] py-[100px] sm:p-[80px] rounded-[30px] border-[#F1F5FF] border-[10px] flex flex-col items-center justify-center'}>
            <h2 className={styles.bigTitle}>Get Started With Homyz</h2>
            <p className='text-white text-center'>
                Subscribe and find super attractive price
                quotes <br /> from us, Find your residence soon
            </p>
            <Link to='/getStarted' className='bg-[#5973D8] py-[10px] px-[20px] rounded-[10px] cursor-pointer inline-flex text-center text-white border-[#F1F5FF] border-[3px] '>
                Get Started
            </Link>
        </div>
    </section>
  )
}

export default Banner