import React from 'react';
import './Content.css';
import Cheked from '../img/checked.png';
import Processor from '../img/processor.png';
import Labatory from '../img/lab-tool.png';
import Empolees from '../img/employees.png';
import doctor from '../img/niye-biz-esas-sehife.jpg';
const Content = () => {
    return (
        <div className=' container mt-4 mb-4'>
            <div className='row'>

                <div className='col-md-6' >
                    <ul className='content-list'>
                        <li data-aos="fade-up"
                            data-aos-duration="1000">
                            <div >
                                <img src={Cheked} className=" " alt="" />
                                <span>ETİBARLILIQ</span>
                                <p>Həmvətənlərimiz tibbimizə, avadanlığımıza, həkimlərimizə, klinikalarımıza,
                                    xidmət səviyyəmizə və təqdim olunan rahatlığa etibar edir.</p>
                            </div>
                        </li>
                        <li data-aos="fade-up"
                            data-aos-duration="1000">
                            <div>
                                <img src={Processor} className=" " alt="" />
                                <span>ƏN MÜASİR AVADANLIQ</span>
                                <p>Hayat Klinikası beynəlxalq protokollara uyğun olaraq yüksək səviyyəli diaqnostik tədqiqatların
                                    aparılmasına imkan verən mütəxəssis avadanlıqları ilə təchiz edilmişdir</p>
                            </div>
                        </li>
                        <li data-aos="fade-up"
                            data-aos-duration="1000">
                            <div>
                                <img src={Labatory} className=" " alt="" />
                                <span>DƏQİQ LABORATOR ANALİZ</span>
                                <p>Klinikamızda yalnız Avropada və Amerika, İsrail və Kanada kimi ölkələrdə istehsal olunan reaktivlər istifadə olunur. Bütün laboratoriya testləri bütün dünyada qəbul edilir.
                                    Avtomatlaşdırılmış laboratoriya avadanlığı insan amilini aradan qaldırır.</p>
                            </div>
                        </li>
                        <li data-aos="fade-up"
                            data-aos-duration="1000">
                            <div>
                                <img src={Empolees} className=" " alt="" />
                                <span>PEŞƏKAR HEYYƏT</span>
                                <p>Tibb Mərkəzinin dəyərli sərmayəsi Avropada ixtisaslaşmış peşəkar həkimlərdirs</p>
                            </div>
                        </li>
                    </ul>
                </div>

                <div className='col-md-6 ' data-aos="fade-up" data-aos-duration="1000"
                >
                    <div className='content-divider'>

                        <div className='content-img'>
                            <img src={doctor} className=" " alt="" />
                        </div>
                        <div className='divider'></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Content;