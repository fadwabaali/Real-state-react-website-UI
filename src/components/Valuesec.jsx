import React from 'react'
import styles from '../styles/globalStyles';
import valueImg from '../assets/value.jpg'
import ValueAccordion from './ValueAccordion';
const Valuesec = () => {
  return (
    <section className={styles.section}>
        <div className={`${'grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 '} ${styles.container}`}>
            <div>
                <img src={valueImg} className={`${'border-[#F8F8F8] '} ${styles.roundedimage}`} alt="Our Values" />
            </div>
            <div>
                <h3 className={styles.subTitle}>Our Value</h3>
                <h2 className={styles.title}> Value We Give To You <span className={styles.specialSpan}>.</span> </h2>
                <p>
                We always ready to help by providing the best service for you. We believe a good place to live can make your life better.
                </p>
                <ValueAccordion />
            </div>
        </div>
    </section>
  )
}

export default Valuesec