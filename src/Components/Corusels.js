import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Mousewheel, Pagination, Autoplay } from "swiper";
import './Corusels.css';
import { useDispatch, useSelector } from "react-redux";
import { fetchSlider, } from "../Redux/SliderSlice";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import Video from "../img/istockphoto-1218090920-640_adpp_is.mp4";
import Modal from 'react-bootstrap/Modal';
import { fecthContactSlice } from '../Redux/ContactSlice';



const Corusels = () => {
  const dispatch = useDispatch()

  let [show, setShow] = useState(null)

  useEffect(() => {
    dispatch(fecthContactSlice())
  }, [])

  const contact = useSelector(state => state?.contactSlice?.data?.data)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    dispatch(fetchSlider())
  }, []);

  const corusels = useSelector(state => state.coruselSlice.data);


  return (
    <div className="" data-aos="zoom-in" data-aos-duration="1500" >


      <div className="carousels" >
        <div>


          <video autoPlay loop muted >
            <source src={Video} type="video/mp4" />
          </video>
        </div>
        <div className="row carousels-footer justify-content-center " >
          <div className="col-md-4">

            <Button variant="primary" onClick={handleShow}>
              Ünvan <br />
              Bakı şəhəri S.S.Axundov 20C
            </Button>

            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  mousewheel={false}
                  pagination={{ clickable: true, }}
                  autoplay={{ delay: 3500, disableOnInteraction: false, }}
                  modules={[Mousewheel, Pagination, Autoplay]}
                  className="mySwiper"
                >

                  {
                    corusels?.map((corusel) => (

                      <SwiperSlide key={corusel.id} >
                        <Link to="" >
                          <SwiperSlide>
                            <img src={corusel.image} className="corusel-img" />
                          </SwiperSlide>
                        </Link>
                      </SwiperSlide>
                    ))
                  }
                </Swiper>
              </Modal.Body>
              <Modal.Footer>
                <div>
                  <ul className='' >
                    <li data-aos="fade-down" data-aos-duration="1000"> <p>  Bakı şəhəri S.S.Axundov 20C Azadlıq m/s yaxınlığı  </p> </li>
                    <li className='' data-aos="fade-down" data-aos-duration="1000"> <span dangerouslySetInnerHTML={{ __html: contact?.[0]?.details?.[0]?.icon }} ></span>  <span>{contact?.[0]?.details?.[0]?.value}</span> </li>
                    <li className=' ' data-aos="fade-down" data-aos-duration="1000"> <span dangerouslySetInnerHTML={{ __html: contact?.[1]?.details?.[0]?.icon }} ></span>  <span>{contact?.[1]?.details?.[0]?.value}</span> </li>
                  </ul>
                </div>
                <div>
                  <ul className='' >
                    <li data-aos="fade-down" data-aos-duration="1000"> <p>  Bakı şəhəri S.S.Axundov 20C Azadlıq m/s yaxınlığı  </p> </li>
                    <li className='' data-aos="fade-down" data-aos-duration="1000"> <span dangerouslySetInnerHTML={{ __html: contact?.[0]?.details?.[0]?.icon }} ></span>  <span>{contact?.[0]?.details?.[0]?.value}</span> </li>
                    <li className=' ' data-aos="fade-down" data-aos-duration="1000"> <span dangerouslySetInnerHTML={{ __html: contact?.[1]?.details?.[0]?.icon }} ></span>  <span>{contact?.[1]?.details?.[0]?.value}</span> </li>
                  </ul>
                </div>
              </Modal.Footer>
            </Modal>
          </div>
          <div className="col-md-4"> bizimle elaqe</div>
          <div className="col-md-4"> is saatlari </div>
        </div>
      </div>
    </div >
  );
};

export default Corusels;