import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons'
import img from '../img/Uz-Cənə-Cərrahiyyəsi-Istanbul.jpg';
import './DoctorInfo.css'
const DoctorInfo = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-md-6'>
                    <div className=''>
                    <div className=' col-md-12 DoctorInfoImg'>
                        <img
                            src={img}
                            alt="Trendy Pants and Shoes"
                            className=""
                        />
                    </div>  
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <h3> Afət Çəndirli</h3>
                        <span>fizioterapevt-reabilitoloq</span>
                        <p className='p-2'>
                            <span className="m-3">
                                <FontAwesomeIcon icon={faQuoteLeft} />
                            </span>
                            <b>
                                Reabilitasiya prosesində hər bir pasiyentə
                                individual yanaşma həkimlik biliklərimizi
                                keyfiyyətli şəkildə tətbiq etməyə bizə imkan yaradır.
                            </b>
                            <span className="m-3">
                                <FontAwesomeIcon icon={faQuoteRight} />
                            </span>
                        </p>
                        <p>
                            <b>
                                Fəaliyyət sahəsi:
                            </b>
                            <br></br>Elektroforez, Elektrostimulyasiya, İmpuls tokları ilə
                            müalicə (DDT, SMT), Fonoforez, Mikrodalğa, Limfodrenaj,
                            Zərbə dalğa terapiyası, Lazer müalicəsi, Traksion dartma,
                            Darsonval, Hot pack, Vakuum ilə müalicə, Parafinlə müalicə,
                            Naftalanla müalicə, Maqnitoterapiya, Masaj, Müalicəvi idman
                            və trenajorlar, Triqer nöqtələrinin neyrostimulyasiyası, Kinezioteypinq.
                        </p>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <h4>
                            Təhsil
                        </h4>
                        <ul>
                            <li> 1989-1995


                                <ul>
                                    <li>
                                        <span>
                                          <b>
                                          Azərbaycan Tibb Universiteti, müalicə-profilaktika fakültəsi
                                          </b>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li> 1995-1996


                                <ul>
                                    <li>
                                        <span>
                                            <b>
                                            3№-li Klinik Xəstəxanası, terapiya ixtisası üzrə internatura
                                            </b>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6'>
                    <div>
                        <h4>
                            Təcrübə və Bacarıqlar
                        </h4>
                        <ul>
                            <li>
                                1998-2001
                                <ul>
                                    <li>
                                        <span>
                                            <b>
                                                Dövlət tibb məssisələrində fizioterapevt-reabilitoloq kimi fəaliyyət göstərib
                                            </b>
                                        </span>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                2004-2005
                                <ul>
                                    <li>
                                        <span>
                                            <b>
                                                Səudiyyə Ərəbistanı Al-Jouf Hospital
                                            </b>
                                        </span>
                                    </li>

                                </ul>
                            </li>
                            <li>
                            2011-2013
                                <ul>
                                    <li>
                                        <span>
                                            <b>
                                            Dövlət tibb müəssisələrində fizioterapevt-reabilitoloq kimi fəaliyyət göstəri
                                            </b>
                                        </span>
                                    </li>

                                </ul>
                            </li>
                            <li>
                            2012 
                                <ul>
                                    <li>
                                        <span>
                                            <b>
                                            "Danaşpital" Rəabilitasiya Mərkəzi, Vyana, Avstriya
                                            </b>
                                        </span>
                                    </li>

                                </ul>
                            </li>
                            <li>
                            2015
                                <ul>
                                    <li>
                                        <span>
                                            <b>
                                            ci ildən Mərkəzi Gömrük Hospitalı, fizioterapevt-reabilitoloq
                                            </b>
                                        </span>
                                    </li>

                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='col-md-6'></div>
                <div className='col-md-6'></div>
            </div>
        </div>
    );
};

export default DoctorInfo;