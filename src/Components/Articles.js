import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import {Link} from 'react-router-dom'
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination, Navigation } from "swiper";
import './Articles.css';
import img from '../img/indir.png';
const Articles = () => {
    return (
        <div className='container'>
            <div className='col-lg-12 mt-3 mb-3'>
                <h2> Məqalələr</h2>
            </div>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                centeredSlides={true}
                // autoplay={{
                //     delay: 2500,
                //     disableOnInteraction: false,
                // }}
                slidesPerGroup={3}

                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="myArticles"
                data-aos="fade-up" 
                data-aos-duration="1000"
            >

        
                <SwiperSlide>
                    <Link to="/Meqaleler/Meqale">
                   <div className='article-img'>   <img
                        src={img}
                        alt="Trendy Pants and Shoes"
                        className="img-fluid rounded-start"
                    />
                    </div>
                    <div className='article'>
                        <h6>ad</h6>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>etrafli</p>
                    </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/Meqaleler/Meqale">
                   <div className='article-img'>   <img
                        src={img}
                        alt="Trendy Pants and Shoes"
                        className="img-fluid rounded-start"
                    />
                    </div>
                    <div className='article'>
                        <h6>ad</h6>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>etrafli</p>
                    </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/Meqaleler/Meqale">
                   <div className='article-img'>   <img
                        src={img}
                        alt="Trendy Pants and Shoes"
                        className="img-fluid rounded-start"
                    />
                    </div>
                    <div className='article'>
                        <h6>ad</h6>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>etrafli</p>
                    </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/Meqaleler/Meqale">
                   <div className='article-img'>   <img
                        src={img}
                        alt="Trendy Pants and Shoes"
                        className="img-fluid rounded-start"
                    />
                    </div>
                    <div className='article'>
                        <h6>ad</h6>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>etrafli</p>
                    </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/Meqaleler/Meqale">
                   <div className='article-img'>   <img
                        src={img}
                        alt="Trendy Pants and Shoes"
                        className="img-fluid rounded-start"
                    />
                    </div>
                    <div className='article'>
                        <h6>ad</h6>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>etrafli</p>
                    </div>
                    </Link>
                </SwiperSlide>
                <SwiperSlide>
                    <Link to="/Meqaleler/Meqale">
                   <div className='article-img'>   <img
                        src={img}
                        alt="Trendy Pants and Shoes"
                        className="img-fluid rounded-start"
                    />
                    </div>
                    <div className='article'>
                        <h6>ad</h6>
                        <p>Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        <p>etrafli</p>
                    </div>
                    </Link>
                </SwiperSlide>
               

            </Swiper>
        </div>
    );
};

export default Articles;