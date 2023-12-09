import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import sliderP2 from '../../assets/slider/sliderP2.jpg'
import sliderP4 from '../../assets/slider/sliderP4.jpg'
import sliderP14 from '../../assets/slider/sliderP14.jpeg'
import sliderP12 from '../../assets/slider/sliderP12.jpg'
import sliderP13 from '../../assets/slider/sliderP13.jpg'
import sliderP9 from '../../assets/slider/sliderP9.jpg'
import sliderP11 from '../../assets/slider/sliderP11.jpg'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import '../../styles/styles.css'

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function Slider() {
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty('--progress', 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper shadow-xl "
>
        <SwiperSlide><img src={sliderP14} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderP4} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderP2} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderP12} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderP9} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderP13} alt="" /></SwiperSlide>
        <SwiperSlide><img src={sliderP11} alt="" /></SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
    </>
  );
}
