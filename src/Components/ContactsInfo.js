import React, { useEffect } from 'react';
import { ImLocation2 } from "react-icons/im";
import { HiOutlineMailOpen } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import Stack from '@mui/material/Stack';
import './ContactInfo.css';
import { useDispatch, useSelector } from 'react-redux';
import { fecthContactSlice } from '../Redux/ContactSlice';
import { useState } from 'react';
import axios from 'axios';

const ContactsInfo = () => {


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fecthContactSlice())
    }, [dispatch])

    const contacts = useSelector(state => state?.contactSlice?.data?.data)

    const [scontact, setContact] = useState()
    console.log("scontact", scontact)

    const createContact = async (e) => {

        e.preventDefault();
        const model = scontact
        await axios.post("https://admin.istanbulhospital.az/api/contact/getContact", model)
            .then((con) => {
                console.log("con", con)
            })
        console.log("Creaete Contact", scontact)

    }

    const click = (e) => {
        setContact({ ...scontact, [e.target.name]: e.target.value })
        console.log('est', e.target.value)
    }
    const ClickFile = (e) => {
        let file = e.target.files[0]
        setContact({ ...scontact, file: file })
    }
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-12 ' data-aos="fade-right" data-aos-duration="1000">
                    <div className='row justify-content-between'>


                        <div className='col-md-4  '>
                            <div className='col-md-12 icons'>
                                <div className='icon'>
                                    <ImLocation2 />
                                </div>
                                <div className='line' ></div>
                                <h3> {contacts?.[3]?.group}</h3>
                                <div className='mailInfo'>
                                    <span>  {contacts?.[3]?.details?.[0]?.value}</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4  '>
                            <div className='col-md-12 icons'>
                                <div className='icon'>
                                    <HiOutlineMailOpen />
                                </div>
                                <div className='line' ></div>
                                <h3>{contacts?.[1]?.group}</h3>
                                <div className='mailInfo'>
                                    <span>{contacts?.[1]?.details?.[0]?.value}</span>
                                </div>
                            </div>
                        </div>
                        <div className='col-md-4  '>
                            <div className='col-md-12 icons'>
                                <div className='icon'>
                                    <BsTelephone />
                                </div>
                                <div className='line' ></div>
                                <h3>{contacts?.[0]?.group}</h3>
                                <div className='mailInfo'>
                                    <span>{contacts?.[0]?.details?.[0]?.value}</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-lg-6' data-aos="fade-up" data-aos-duration="1000">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12148.753683723793!2d49.844278!3d40.4268265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9c6071034d0716a!2s%C4%B0stanbul%20Klinika!5e0!3m2!1saz!2s!4v1660746212710!5m2!1saz!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='col-lg-6' data-aos="fade-up" data-aos-duration="1000">
                    <div className='col-md-12'>
                        <h4> Mesaj göndər</h4>
                    </div>
                    <form action="" onSubmit={createContact} >
                        <label for="fname">Ad Soyad</label>
                        <input type="text" className='w-100' name="fullname" placeholder="Ad Soyad.." onChange={click} />

                        <label for="lname">Telefon</label>
                        <input type="text" className='w-100' name="phone" placeholder="Telefon.." onChange={click} />

                        <label for="fname">Mail</label>
                        <input type="text" className='w-100' name="email" placeholder="Mail.." onChange={click} />
                        <label for="fname">Başlıq</label>
                        <input type="text" className='w-100' name="title" placeholder="Başlıq.." onChange={click} />
                        <label for="fname">Sənət yüklə</label>
                        <input type="file" className='w-100' name="file" placeholder="Başlıq.." onChange={ClickFile} />

                        <label for="fname">Mesaj</label>
                        <textarea cols="40" rows="10" name="text" onChange={click}  ></textarea>
                        <div className='col-md-3 mt-3'>
                            <Stack spacing={2} direction="row">
                                <button className='btn btn primary'> Göndər</button>

                            </Stack>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactsInfo;