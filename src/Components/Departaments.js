import React from 'react';
import {Link} from 'react-router-dom';
import img from '../img/indir.png';

const Departaments = () => {
    return (
        <div className='container mt-3'>
            <div className='col-md-12'>
                <div className='row'>
                    <div className='col-md-4 mt-4'>
                    <Link to='/DepartamentsInfo' >
                        <div className="card " data-aos="fade-up" data-aos-duration="1000"
                            data-aos-anchor-placement="top-center">
                            <img src={img} className="card-img-top float-right" alt="Sunset Over the Sea" />
                            <div className="card-body">
                                <h4> Laparaskopik cerrahiyye </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </Link>
                    </div>
                    <div className='col-md-4 mt-4'>
                    <Link to='/DepartamentsInfo'>
                        <div className="card " data-aos="fade-up" data-aos-duration="1000"
                            data-aos-anchor-placement="top-center">
                            <img src={img} className="card-img-top float-right" alt="Sunset Over the Sea" />
                            <div className="card-body">
                                <h4> Estetik cerrahiyye </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </Link>
                    </div>

                    <div className='col-md-4 mt-4'>
                    <Link to='/DepartamentsInfo'>
                        <div className="card " data-aos="fade-up" data-aos-duration="1000"
                            data-aos-anchor-placement="top-center">
                            <img src={img} className="card-img-top float-right" alt="Sunset Over the Sea" />
                            <div className="card-body">
                                <h4> Kosposkopiya </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className='col-md-4 mt-4'>
                    <Link to='/DepartamentsInfo'>
                        <div className="card " data-aos="fade-up" data-aos-duration="1000"
                            data-aos-anchor-placement="top-center">
                            <img src={img} className="card-img-top float-right" alt="Sunset Over the Sea" />
                            <div className="card-body">
                                <h4> HSQ (histerosalpinaqoqrafiya) </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </Link>
                    </div>
             
                    <div className='col-md-4 mt-4'>
                    <Link to='/DepartamentsInfo'>
                        <div className="card " data-aos="fade-up" data-aos-duration="1000"
                            data-aos-anchor-placement="top-center">
                            <img src={img} className="card-img-top float-right" alt="Sunset Over the Sea" />
                            <div className="card-body">
                                <h4> EKQ (elektrokardioqrafiya) </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className='col-md-4 mt-4'>
                    <Link to='/DepartamentsInfo'>
                        <div className="card " data-aos="fade-up" data-aos-duration="1000"
                            data-aos-anchor-placement="top-center">
                            <img src={img} className="card-img-top float-right" alt="Sunset Over the Sea" />
                            <div className="card-body">
                                <h4> EXoKQ (exokardioqrafiya) </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </Link>
                    </div>
             
                    <div className='col-md-4 mt-4'>
                        
                        <div className="card " data-aos="fade-up" data-aos-duration="1000"
                            data-aos-anchor-placement="top-center">
                            <img src={img} className="card-img-top float-right" alt="Sunset Over the Sea" />
                            <div className="card-body">
                                <h4> Blefaroplastika </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-4 mt-4'>
                    <Link to='/DepartamentsInfo'>
                        <div className="card " data-aos="fade-up" data-aos-duration="1000"
                            data-aos-anchor-placement="top-center">
                            <img src={img} className="card-img-top float-right" alt="Sunset Over the Sea" />
                            <div className="card-body">
                                <h4> Tonometriya (goz teziqinin olculmesi) </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className='col-md-4 mt-4'>
                    <Link to='/DepartamentsInfo'>
                        <div className="card " data-aos="fade-up" data-aos-duration="1000"
                            data-aos-anchor-placement="top-center">
                            <img src={img} className="card-img-top float-right" alt="Sunset Over the Sea" />
                            <div className="card-body">
                                <h4> Refraktometriya (Gorme zeifliyinin komputer vasitesi ile teyini) </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                    <div className='col-md-4 mt-4'>
                    <Link to='/DepartamentsInfo'>
                        <div className="card " data-aos="fade-up" data-aos-duration="1000"
                            data-aos-anchor-placement="top-center">
                            <img src={img} className="card-img-top float-right" alt="Sunset Over the Sea" />
                            <div className="card-body">
                                <h4> Vizometriya (gorme derecesinin teyini) </h4>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            </div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Departaments;