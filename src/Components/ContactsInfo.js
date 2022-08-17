import React from 'react';
import { ImLocation, ImLocation2 } from "react-icons/im";
import { HiMail } from "react-icons/hi";
import { BsTelephoneFill } from "react-icons/bs";
import './ContactInfo.css';
const ContactsInfo = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-12 '>
                    <div className='row justify-content-between'>

                        <div className='col-md-4  '>
                            <div className='col-md-12 icons'>
                                <div className='icon'>
                                    <ImLocation />
                                </div>
                                <div className='line' ></div>
                                <h3>Unvan</h3>
                                <div className='mailInfo'>
                                    <span>istanbulHospital@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4  '>
                            <div className='col-md-12 icons'>
                                <div className='icon'>
                                    <HiMail />
                                </div>
                                <div className='line' ></div>
                                <h3>Mail</h3>
                                <div className='mailInfo'>
                                    <span>istanbulHospital@gmail.com</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4  '>
                            <div className='col-md-12 icons'>
                                <div className='icon'>
                                    < BsTelephoneFill />
                                </div>
                                <div className='line' ></div>
                                <h3>Telefon</h3>
                                <div className='mailInfo'>
                                    <span>012 111 11 11</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-lg-6 olcu'></div>
                <div className='col-lg-6 olcu'></div>
            </div>
        </div>
    );
};

export default ContactsInfo;