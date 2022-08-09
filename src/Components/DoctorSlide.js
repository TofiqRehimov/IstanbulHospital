import React from 'react';
import './Doctor.css';
import img from '../img/niye-biz-esas-sehife.jpg';

const DoctorSlide = () => {
    return (
        <div className='container'>
          <div className='row'>
              <div className='col-md-12 mt-4 mb-2'>
                  <h2> Hekimer </h2>
              </div>
              <div className='col-md-3 ' data-aos="zoom-in" data-aos-duration="1000">
              <div className="card mb-3" >
                <div className="row ">
                    <div className="col-md-12">
                    
                        <img
                            src={img}
                            alt="Trendy Pants and Shoes"
                            className="doctors-img"
                        />
                    
                    </div>
                    <div className="col-md-12">
                        <div className="card-body">
                            <h5 className="card-title">Hekim adi</h5>
                            <p className="card-text">
                                Vezifesi
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Qebula yazilmaq</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
              </div>
              <div className='col-md-3 ' data-aos="zoom-in" data-aos-duration="1000">
              <div className="card mb-3" >
                <div className="row ">
                    <div className="col-md-12">
                    
                        <img
                            src={img}
                            alt="Trendy Pants and Shoes"
                            className="doctors-img"
                        />
                    
                    </div>
                    <div className="col-md-12">
                        <div className="card-body">
                            <h5 className="card-title">Hekim adi</h5>
                            <p className="card-text">
                                Vezifesi
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Qebula yazilmaq</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
              </div>
              <div className='col-md-3 ' data-aos="zoom-in" data-aos-duration="1000">
              <div className="card mb-3" >
                <div className="row ">
                    <div className="col-md-12">
                    
                        <img
                            src={img}
                            alt="Trendy Pants and Shoes"
                            className="doctors-img"
                        />
                    
                    </div>
                    <div className="col-md-12">
                        <div className="card-body">
                            <h5 className="card-title">Hekim adi</h5>
                            <p className="card-text">
                                Vezifesi
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Qebula yazilmaq</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
              </div>
              <div className='col-md-3 ' data-aos="zoom-in" data-aos-duration="1000">
              <div className="card mb-3" >
                <div className="row ">
                    <div className="col-md-12">
                    
                        <img
                            src={img}
                            alt="Trendy Pants and Shoes"
                            className="doctors-img"
                        />
                    
                    </div>
                    <div className="col-md-12">
                        <div className="card-body">
                            <h5 className="card-title">Hekim adi</h5>
                            <p className="card-text">
                                Vezifesi
                            </p>
                            <p className="card-text">
                                <small className="text-muted">Qebula yazilmaq</small>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
              </div>
              <div className=''>
                <span> Etrafli </span>
              </div>
          </div>
        </div>
    );
};

export default DoctorSlide;