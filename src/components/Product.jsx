import React from 'react'
import styles from '../styles/globalStyles';

const Product = ({image, descp, price, title }) => {
  return (
    <div className='hover:shadow-xl rounded-[10px] transition cursor-pointer duration-700 ease-in-out'>
        <div className='mb-[1rem]'>
            <img className='object-cover rounded-[10px]' src={image} alt={descp} />
        </div>
        <div className='p-[15px]'>
            <p className='text-2xl font-extrabold'> <span className={styles.specialSpan} >$</span>{price}</p>
            <h4 className='text-[#1F3E72] text-xl font-semibold mb-2'> {title} </h4>
            <p> {descp} </p>
        </div>
    </div>
  )
}

export default Product