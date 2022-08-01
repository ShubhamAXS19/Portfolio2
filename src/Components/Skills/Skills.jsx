import React from 'react'
import styles from './Skills.module.css'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";



import {ImHtmlFive } from 'react-icons/im'
import { SiCss3} from 'react-icons/si'
import { SiJavascript} from 'react-icons/si'
import { FaReact} from 'react-icons/fa'
import {SiReactrouter} from 'react-icons/si'
import {SiRedux} from 'react-icons/si'
import {FaBootstrap} from 'react-icons/fa'
import { SiNetlify} from 'react-icons/si'
import {BsGithub} from 'react-icons/bs'
import { FaGitAlt} from 'react-icons/fa'
import { SiFramer} from 'react-icons/si'
import {SiSwiper } from 'react-icons/si'
import { } from 'react-icons/'

import { Autoplay, Pagination, Navigation } from "swiper";


const Skills = () => {
  return (
    <div className={styles.skills}>
      <Swiper
      slidesPerView={1}
      loop={true}
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        pagination={{
          el: ".swiper-pagination",
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className={styles.swiperslide}> <ImHtmlFive color='orange'/> </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}> <SiCss3 color='blue'/> </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}> <SiJavascript color='orange'/></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}> <FaBootstrap color='violet'/> </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><SiFramer color='black'/> </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><SiSwiper color='darkblue'/> </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}> <FaReact color='blue'/> </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><SiReactrouter color='brown'/></SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><SiRedux color='purple'/> </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}> <BsGithub color='grey' /> </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}> <SiNetlify color='blue'/> </SwiperSlide>
        <SwiperSlide className={styles.swiperslide}><FaGitAlt color='red'/></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Skills