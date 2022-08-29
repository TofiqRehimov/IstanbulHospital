import React from 'react';
import { AiOutlineInstagram } from "react-icons/ai";
import { GrFacebookOption } from "react-icons/gr";
import './Contact.css';
const ContactsHeader = () => {
    return (
        <div className='Contact pt-1'>
            <div className='container headerInfo '>
                <div className='row '>
                    <div className='col-lg-auto d-flex header-tel'>
                        <ul className='' >
                           
                            <li className='mr-2' data-aos="fade-down" data-aos-duration="1000"> <span>012 562 40 02</span> </li>
                            
                            <li className='' data-aos="fade-down" data-aos-duration="1000"> <span> istanbul_hospital@gmail.com</span> </li>
                        </ul>
                    </div>
                    <div className='col-lg-auto Language'data-aos="fade-down" data-aos-duration="1000">
                        <p>AZ</p>
                        <p>EN</p>
                        <p>RU</p>
                    </div>
                    <div className='col-md-auto' data-aos="fade-down" data-aos-duration="1000">
                        <span className='sosials-icons' data-aos="fade-down" data-aos-duration="1000">
                        <AiOutlineInstagram/>
                        </span>
                        <span className='sosials-icons' data-aos="fade-down" data-aos-duration="1000">
                        <GrFacebookOption/>
                        </span>
              
                        
                            {/* <p
                                className=" Language"
                                type="button"
                                id="dropdownMenuButton"
                                data-mdb-toggle="dropdown"
                                aria-expanded="false"
                            >
                               Az
                            </p>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <li><a className="dropdown-item" href="#">EN</a></li>
                                <li><a className="dropdown-item" href="#">RU</a></li>
                            </ul> */}
                        
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default ContactsHeader;