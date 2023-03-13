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
import { FaRegHospital } from "react-icons/fa";
import { TbClockHour4 } from "react-icons/tb";
import { BsTelephone } from "react-icons/bs";


const Corusels = () => {
  const dispatch = useDispatch()

  let [show, setShow] = useState(null)
  const [svideo, setVideo] = useState()
  useEffect(() => {
    dispatch(fecthContactSlice())
  }, []);

  useEffect(() => {
    dispatch(fetchSlider())
  }, [])

  const contact = useSelector(state => state?.contactSlice?.data?.data)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)




  const corusels = useSelector(state => state.coruselSlice.data);
  console.log("corusels", corusels)

  // const vide = setVideo(corusels.map((video) => video?.filter((h) => h?.type)))

  // console.log("videos", vide)

  return (
    <div className="" data-aos="zoom-in" data-aos-duration="1500" >


      <div className="carousels" >

        <div>
          {
            corusels?.filter((v) => v.type === 'video').map((v) => (
              <video autoPlay loop muted >
                <source src={v?.image} type="video/mp4" />
              </video>
              // console.log("v", v?.image)
            ))
          }


        </div>
        <div className="row carousels-footer  " >
          <div className="col-md-1"></div>
          <div className="col-md-3  text-center ">
            <div className="row">
              <div className="d">
                <span className="phone"> <FaRegHospital /> </span>
                <hr />
              </div>
              <div className="sliderSection">
                <h5 variant="primary" onClick={handleShow}>


                  {contact?.[3]?.details?.[0]?.value}
                </h5>

              </div>
            </div>



            <Modal show={show} onHide={handleClose} size="lg">
              <Modal.Header closeButton>
                <Modal.Title></Modal.Title>
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
                    corusels?.filter((i) => i.type === "image").map((corusel) => (

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

                <div className="col-md-12">
                  <ul className='' >
                    <li data-aos="fade-down" data-aos-duration="1000">

                      <p>  {contact?.[3]?.details?.[0]?.value}  </p> </li>
                    <li className='' data-aos="fade-down" data-aos-duration="1000"> <span dangerouslySetInnerHTML={{ __html: contact?.[0]?.details?.[0]?.icon }} ></span>  <span>{contact?.[0]?.details?.[0]?.value}</span> </li>
                    <li data-aos="fade-down" data-aos-duration="1000"> <span dangerouslySetInnerHTML={{ __html: contact?.[1]?.details?.[0]?.icon }} ></span>  <a className="sliderSection sliderMail" data-action="mail" href={`mailto:${contact?.[1]?.details?.[0]?.value}`} >{contact?.[1]?.details?.[0]?.value}</a> </li>
                  </ul>
                </div>
              </Modal.Body>
            </Modal>
          </div>
          <div className="col-md-3 justify-content-between text-center">
            <div className="row">
              <div className="d m-0 p-0"  >
                <span className="phone" ><BsTelephone /> </span>
                <hr />
              </div>
              <div className="d text-center ">
                <h5 className="text-center">Bizimlə əlaqə</h5>

                {
                  contact?.[0]?.details.map((phone) => (
                    <span >
                      <a className="sliderContact sliderSection" data-action="call" href={`tel:+994+${phone?.value}`} > {phone?.value} </a> <br />
                    </span>
                  ))
                }

              </div>
            </div>

          </div>
          <div className="col-md-3  text-center">
            <div className="row">
              <div className="d">
                <span className="phone"> <TbClockHour4 /> </span>
                <hr />
              </div>
              <div className="d">
                <h5>
                  İş saatlarımız
                </h5>

                <span className="d">
                  B.e - Şənbə: 09:00 - 18:00
                </span>
              </div>

            </div>


          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </div >
  );
};

export default Corusels;