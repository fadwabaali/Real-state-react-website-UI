import React, { useState } from 'react'
import {BsShieldFillX} from "react-icons/bs";
import { RiArrowDownSFill, RiArrowUpSFill } from "react-icons/ri";
import styles from '../styles/globalStyles';

const ValueAccordion = () => {

  const [openAccordion1, setOpenAccordion1] = useState(false);
  const [openAccordion2, setOpenAccordion2] = useState(false);
  const [openAccordion3, setOpenAccordion3] = useState(false);
  const [openAccordion4, setOpenAccordion4] = useState(false);

  const openAccordion1Handler = () => setOpenAccordion1(!openAccordion1);
  const openAccordion2Handler = () => setOpenAccordion2(!openAccordion2);
  const openAccordion3Handler = () => setOpenAccordion3(!openAccordion3);
  const openAccordion4Handler = () => setOpenAccordion4(!openAccordion4);
  
  const accordStyle = 'mb-[1rem] flex flex-row justify-between items-center';
  return (
    <div className='flex flex-col gap-4 mt-[1.5rem] '>
      <div className='p-[15px] border-solid border-slate-100 border-[1px]'>
        <div className={accordStyle}>
          <div className={styles.icon}>
            <BsShieldFillX />
          </div>
          <h4 className='font-extrabold	'>Best interest rates on the market</h4>
          <div className={styles.icon} onClick={openAccordion1Handler}>
            {openAccordion1 ? <RiArrowDownSFill /> : <RiArrowUpSFill />}
          </div>
        </div>
        <div className={openAccordion1 ? 'block' : 'hidden'}>
          <p >
            Price we provides is the best for you, 
            we guarantee no price changes on your property due 
            to various unexpected costs that may come.
          </p>
        </div>
      </div>

      <div className='p-[15px] border-solid border-slate-100 border-[1px]'>
        <div className={accordStyle}>
          <div className={styles.icon}>
            <BsShieldFillX />
          </div>
          <h4 className='font-extrabold	'>Prevent unstable prices</h4>
          <div className={styles.icon} onClick={openAccordion2Handler}>
            {openAccordion2 ? <RiArrowDownSFill /> : <RiArrowUpSFill />}
          </div>
        </div>
        <div className={openAccordion2 ? 'block' : 'hidden'}>
          <p >
            Price we provides is the best for you, 
            we guarantee no price changes on your property due 
            to various unexpected costs that may come.
          </p>
        </div>
      </div>

      <div className='p-[15px] border-solid border-slate-100 border-[1px]'>
        <div className={accordStyle}>
          <div className={styles.icon}>
            <BsShieldFillX />
          </div>
          <h4 className='font-extrabold	'>Best prices on the market </h4>
          <div className={styles.icon} onClick={openAccordion3Handler}>
            {openAccordion3 ? <RiArrowDownSFill /> : <RiArrowUpSFill />}
          </div>
        </div>
        <div className={openAccordion3 ? 'block' : 'hidden'}>
          <p >
            Price we provides is the best for you, 
            we guarantee no price changes on your property due 
            to various unexpected costs that may come.
          </p>
        </div>
      </div>

      <div className='p-[15px] border-solid border-slate-100 border-[1px]'>
        <div className={accordStyle}>
          <div className={styles.icon}>
            <BsShieldFillX />
          </div>
          <h4 className='font-extrabold	'>Security of your data</h4>
          <div className={styles.icon} onClick={openAccordion4Handler}>
            {openAccordion4 ? <RiArrowDownSFill /> : <RiArrowUpSFill />}
          </div>
        </div>
        <div className={openAccordion4 ? 'block' : 'hidden'}>
          <p >
            Price we provides is the best for you, 
            we guarantee no price changes on your property due 
            to various unexpected costs that may come.
          </p>
        </div>
      </div>

      
    </div>
  )
}

export default ValueAccordion