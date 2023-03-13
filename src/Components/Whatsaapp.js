import React from 'react';
import ReactWhatsapp from "react-whatsapp";
import { FaWhatsappSquare } from "react-icons/fa";
import './Whatsapp.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fecthContactSlice } from '../Redux/ContactSlice';

const Whatsaapp = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fecthContactSlice())
    }, []);
    // const contact = useSelector(state => state?.contactSlice?.data?.data)
    return (
        <div className='dds'>
            <ReactWhatsapp number="+994552654003" mesagge="" style={{ "border": "none", "background": "none" }} >
                <FaWhatsappSquare style={{ "color": "green", "font-size": "55px" }} />
            </ReactWhatsapp>

        </div>
    );
};

export default Whatsaapp;