import React from 'react'
import styles from '../styles/globalStyles';
const ContactCard = ({icon, title, number}) => {
  return (
    <div className='border-solid border-slate-100 border-[1px] p-[25px] flex flex-col items-center justify-center rounded-md'>
        <div className='flex flex-row gap-2'>
            <div className={styles.icon}>
               {icon}
             </div>
            <div>
                <h4 className='font-extrabold'>{title}</h4>
                <p>{number}</p>
            </div>
        </div>
        <button className={styles.specialBtn}>{title} Now</button>
    </div>
  )
}

export default ContactCard