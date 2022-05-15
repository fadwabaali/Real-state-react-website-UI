import React from 'react'
import styles from '../styles/globalStyles';
import contactimg from '../assets/contact.png';
import ContactCard from './ContactCard';
import { MdPhoneInTalk } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import {FaVideo, FaEnvelope} from "react-icons/fa"

const Contact = () => {
  return (
    <section className={styles.section}>
        <div className={`${styles.container} ${'grid grid-cols-1 gap-6 md:grid-cols-2'}`}>
            <div className=''>
                <h3 className={styles.subTitle}>Contact Us</h3>
                <h2 className={styles.title}> Easy to Contact us<span className={styles.specialSpan}>.</span> </h2>
                <p>
                    Is there a problem finding your dream home? Need a 
                    guide in buying first home? or need a consultation 
                    on residential issues? just contact us.
                </p>
                <div className='grid grid-cols-2 gap-4'>
                    <ContactCard 
                        icon={<MdPhoneInTalk/>}
                        title={'Call'}
                        number={'021.123.145.14'}
                    />

                    <ContactCard 
                        icon={<AiFillMessage/>}
                        title={'Chat'}
                        number={'021.123.145.14'}
                    />

                    <ContactCard 
                        icon={<FaVideo/>}
                        title={'Video Call'}
                        number={'021.123.145.14'}
                    />

                    <ContactCard 
                        icon={<FaEnvelope/>}
                        title={'Message'}
                        number={'021.123.145.14'}
                    />
                </div>
            </div>
            <div>
                <img src={contactimg} alt="contact" className={styles.roundedimage} />
            </div>
        </div>
    </section>
  )
}

export default Contact