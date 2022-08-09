import React from 'react';
import img from '../img/niye-biz-esas-sehife.jpg';
const Cards = () => {
    return (
        <div className='container mt-3'>
            <div className='row'>
                <div className='col-md-12 '>
                    <h2 > Bolmelerimiz</h2>
                </div>
                <div className='col-md-4 mt-4 ' data-aos="zoom-in-right" data-aos-duration="1000">

                    <div className="card  ">
                        <img src={img} className="card-img-top float-right" alt="Sunset Over the Sea" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mt-4' data-aos="zoom-in-right" data-aos-duration="1000">
                    <div className="card " >
                        <img src={img} className="card-img-top" alt="Sunset Over the Sea" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
                <div className='col-md-4 mt-4' data-aos="zoom-in-right" data-aos-duration="1000">
                    <div className="card " >
                        <img src={img} className="card-img-top" alt="Sunset Over the Sea" />
                        <div className="card-body">
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;