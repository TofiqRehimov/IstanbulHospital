import React from 'react';
import { ImLocation, ImLocation2 } from "react-icons/im";
import { HiMail, HiOutlineMail } from "react-icons/hi";
import { BsTelephoneFill, BsTelephone } from "react-icons/bs";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './ContactInfo.css';
const ContactsInfo = () => {
    return (
        <div className='container mt-4'>
            <div className='row'>
                <div className='col-lg-12 'data-aos="fade-right" data-aos-duration="1000">
                    <div className='row justify-content-between'>

                        <div className='col-md-4  '>
                            <div className='col-md-12 icons'>
                                <div className='icon'>
                                    {/* <ImLocation /> */}
                                    <ImLocation2 />
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
                                    {/* <HiMail /> */}
                                    <HiOutlineMail />
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
                                    {/* < BsTelephoneFill /> */}
                                    <BsTelephone />
                                </div>
                                <div className='line' ></div>
                                <h3>Telefon</h3>
                                <div className='mailInfo'>
                                <span>012 562 40 02</span>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className='col-lg-6'data-aos="fade-up" data-aos-duration="1000">
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12148.753683723793!2d49.844278!3d40.4268265!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa9c6071034d0716a!2s%C4%B0stanbul%20Klinika!5e0!3m2!1saz!2s!4v1660746212710!5m2!1saz!2s" width="600" height="450" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                </div>
                <div className='col-lg-6'data-aos="fade-up" data-aos-duration="1000">
                    <div className='col-md-12'>
                        <h4> Mesaj göndər</h4>
                    </div>
                <form action="" >
                        <label for="fname">Ad Soyad</label>
                        <input type="text" className='w-100' id="fname" name="firstname" placeholder="Ad Soyad.." />

                        <label for="lname">Telefon</label>
                        <input type="text" className='w-100' id="lname" name="lastname" placeholder="Telefon.." />

                        <label for="fname">Mail</label>
                        <input type="text" className='w-100' id="fname" name="firstname" placeholder="Mail.." />
                        <label for="fname">Başlıq</label>
                        <input type="text" className='w-100' id="fname" name="firstname" placeholder="Başlıq.." />
                        <label for="fname">Sənət yüklə</label>
                        <input type="file" className='w-100' id="fname" name="" placeholder="Başlıq.." />
                        
                        <label for="fname">Mesaj</label>
                        <textarea cols="40" rows="10"></textarea>
                        <div className='col-md-3 mt-3'>
                <Stack spacing={2} direction="row">
                  <Button variant="contained">Göndər</Button>
                </Stack>
              </div>
                        
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactsInfo;