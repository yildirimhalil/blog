import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Autoplay, Pagination } from 'swiper/modules';

const Slider = () => {
  return (
    <div className='w-full'>
        <Swiper 
            modules={[Navigation, Autoplay, Pagination]}
            spaceBetween={0}
            slidesPerView={1}
            navigation 
            pagination
            autoplay= {{ delay: 2000}}
            loop
            speed= {1000}
            className="w-full h-96 "
        >
            <SwiperSlide>
                <img src="https://picsum.photos/200/300" alt="" className='w-full h-full object-cover  '/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://picsum.photos/200/300" alt="" className='w-full h-full object-cover  '/>
            </SwiperSlide>
            <SwiperSlide>
                <img src="https://picsum.photos/200/300" alt="" className='w-full h-full object-cover  '/>
            </SwiperSlide>
        </Swiper>
        
        
        
    </div>
  )
}

export default Slider