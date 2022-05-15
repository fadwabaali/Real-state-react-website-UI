import React from 'react'
import styles from '../styles/globalStyles';
import popular1 from '../assets/popular1.jpg';
import popular2 from '../assets/popular2.jpg';
import popular3 from '../assets/popular3.jpg';
import popular4 from '../assets/popular4.jpg';
import popular5 from '../assets/popular5.jpg';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import Product from './Product';

const PopularProperty = () => {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <h3 className={styles.subTitle}> Best Choice</h3>
            <h2 className={styles.title}> Popular Residences <span className={styles.specialSpan}>.</span> </h2>

            <Swiper 
                slidesPerView={1}
                breakpoints={{
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 3,
                  },
                  
                }}
                navigation={true} 
                modules={[Navigation]}
                spaceBetween={20}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <Product 
                    image={popular1}
                    descp={'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'}
                    title={'Garden City Assat'}
                    price={'66,356'}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Product 
                    image={popular2}
                    descp={'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'}
                    title={'Gables Luxurious House'}
                    price={'35,159'}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Product 
                    image={popular3}
                    descp={'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'}
                    title={'Garden Orchard City'}
                    price={'75,043'}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Product 
                    image={popular4}
                    descp={'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'}
                    title={'Luxurious City Garden'}
                    price={'62,024'}
                    />
                </SwiperSlide>

                <SwiperSlide>
                    <Product 
                    image={popular5}
                    descp={'Street The Garden City Of Miraflores, Lima - Perú Av. Sol #9876'}
                    title={'Aliva Private Garden'}
                    price={'47,043'}
                    />
                </SwiperSlide>
            </Swiper>
        </div>
    </section>

  )
}

export default PopularProperty