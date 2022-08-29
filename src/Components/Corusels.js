import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "swiper/css/navigation";
import { Mousewheel, Pagination,Autoplay } from "swiper";
import './Corusels.css';
import img from '../img/indir.png';
const Corusels = () => {

  return (
    <div className="" data-aos="zoom-in" data-aos-duration="1500" >




      <Swiper
        // direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        mousewheel={false}
        pagination={{
          clickable: true,
        }}
        autoplay={{ 
          delay:3500,
          disableOnInteraction:false,
         }}
        modules={[Mousewheel, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide><img src={img} className="corusel-img" /></SwiperSlide>
        <SwiperSlide><img src={img} className="corusel-img" /></SwiperSlide>
        <SwiperSlide><img src={img} className="corusel-img" /></SwiperSlide>
      </Swiper>

    </div>
  );
};

export default Corusels;