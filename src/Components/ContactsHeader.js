import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fecthContactSlice } from '../Redux/ContactSlice';

import './Contact.css';

const ContactsHeader = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fecthContactSlice())
    })

    const contact = useSelector(state => state?.contactSlice?.data?.data)

    return (
        <div className='Contact pt-1'>
            <div className='container headerInfo '>
                <div className='row '>
                    <div className=' col-md-12  header-tel '>
                        <div className='row'>
                            <div className='col-md-6'>
                                <ul className='con' >

                                    <li className='mr-2 con' data-aos="fade-down" data-aos-duration="1000"> <span dangerouslySetInnerHTML={{ __html: contact?.[0]?.details?.[0]?.icon }} ></span>  <span>{contact?.[0]?.details?.[0]?.value}</span> </li>

                                    <li className=' con' data-aos="fade-down" data-aos-duration="1000"> <span dangerouslySetInnerHTML={{ __html: contact?.[1]?.details?.[0]?.icon }} ></span>  <span>{contact?.[1]?.details?.[0]?.value}</span> </li>

                                </ul>
                            </div>
                            <div className='col-md-6'>
                                <ul className='sos '>
                                    {
                                        contact?.[2]?.details?.map((s) => (
                                            <li className='' data-aos="fade-down" data-aos-duration="1000"> <a href={s.link}> <span dangerouslySetInnerHTML={{ __html: s?.icon }} ></span> </a></li>
                                        ))
                                    }
                                </ul>
                            </div>
                        </div>



                    </div>

                    {/* <div className='col-lg-auto Language' data-aos="fade-down" data-aos-duration="1000">
                        <p>AZ</p>
                        <p>EN</p>
                        <p>RU</p>
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default ContactsHeader;