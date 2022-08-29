import React from 'react';
import './Content.css';
import doctor from '../img/niye-biz-esas-sehife.jpg';

const About = () => {
    return (
        <div className=' container mt-4 mb-4'>
            <div className='row'>
                <div className='col-md-6 ' data-aos="zoom-in" data-aos-duration="1000">
                    <div className='content-divider'>

                        <div className='divider-about'></div>
                        <div className='content-img'>
                            <img src={doctor} className=" " alt="" />
                        </div>
                    </div>
                </div>
                <div className='col-md-6' data-aos="zoom-in" data-aos-duration="1000">
                    <p>
                        Nəsirəddin Tusi adına Klinika olaraq ilk addımlarımızı 2006-cı ildə atdıq
                        və biz hələlik uzun bir yolun başlanğıcındayıq.
                    </p>
                    <p>
                        Klinikamızın yaradılması özəl səhiyyə sisteminə dair yerli təcrübələrin yetərincə
                        olmadığı, çox az sayda özəl tibb müəssisələrinin
                        fəaliyyət göstərdiyi dövrə təsadüf edirdi. Bunlara baxmayaraq, Nəsirəddin Tusi
                        adına Klinika öz yaradıcılarının səriştələri sayəsində böyük və fərqli bir məktəbin
                        əsasını qoydu, bununla da ölkənin özəl səhiyyə sisteminin ilk dayaq nöqtələrindən
                        birinə çevrildi. N. Tusi adına Klinika elə bir iş məktəbi yaratdı ki, burada çalışmış
                        onlarla insanın gələcək fəaliyyətində “vizit kartı” sayıldı, onların inkişafına, daha
                        yüksək mövqe tutmalarına səbəb oldu...
                    </p>
                    <p>
                        N. Tusi adına Klinika hazırda Azərbaycan Respublikasının İqtisadiyyat Nazirliyi tərəfindən verilmiş
                        01.08.2018-ci il tarixli EL-26612018 qeydiyyat nömrəli lisenziya əsasında fəaliyyətini davam etdirir.
                        Klinikanın fəaliyyəti çoxsahəlidir; poliklinika xidmətindən tutmuş əməliyyat bloku, reanimasiya-anesteziologiya
                        şöbələrinə kimi və fəaliyyət çevrəmiz bu gün də genişlənməkdədir. Mövcud olduğumuz 13 il ərzində müxtəlif
                        ideyalar üzərində çalışmış, daha mükəmməl, daha fərqli xidmətlər təşkil edə bilmişik.
                    </p>
                </div>
                <div className='col-md-12' data-aos="zoom-in" data-aos-duration="1000">

                    <p>
                        Klinikamız mövqeyinə görə Bakı şəhərinin ən əlverişli ərazisindədir. Bakı Beynəlxalq və Şəhərlərarası Avtovağzalına,
                        20 Yanvar metrostansiyası yaxınlığında yerləşməsi vətəndaşların gəliş-gedişlərini daha da asanlaşdırır. Müəssisəmiz
                        üçmərtəbəli geniş sahəyə malikdir. Stasionar şöbəsi bir və ikiçarpayılıq, VİP palatalardan təşkil olunmuşdur. Stasionar
                        xəstələrinin, eyni zamanda müayinə və müalicə məqsədilə müraciət edən digər pasiyentlərin gəzmələri, dincəlmələri üçün
                        yaşıllıqla əhatə olunmuş həyətyanı sahə vardır. Stasionarda yatan xəstələrin avtomobillərinin saxlanması üçün müvafiq
                        dayanacaq da yaradılmışdır. Klinika fasiləsiz olaraq su və elektrik enerjisi ilə təmin olunur.
                    </p>
                    <p>
                        Poliklinika şöbəsi kardiologiya, qastroenterologiya, ginekologiya, travmatologiya, endokrinologiya, urologiya,
                        otorinolarinqologiya, nevrologiya, terapiya, oftalmologiya, pediatriya, dermatologiya və digər müxtəlif qollara ayrılır.
                        Peşəkar həkimlər tərəfindən hər sahə üzrə ambulator qəbullar həyata keçirilir.
                    </p>
                    <p>
                        Şüa diaqnostika şöbəsi klinikamızın ən mühüm strukturlarından biridir. Şöbə başlıca olaraq nüvə-maqnit rezonansı,
                        kompüter tomoqrafiyası, rentgenoloji, ultrasəs müayinəsi xidmətlərini əhatə edir.
                    </p>
                    <p>
                        Şöbədə müasir standartlara cavab verən 2 MRT və 1 KT aparatları yerləşdirilib. Həmin aparatlar vasitəsilə sinir sistemi,
                        sümük iliyi, əzələ-oynaq sistemi və yumşaq toxumaların dəyərləndirilməsi həyata keçirilir. Şüa diaqnostika şöbəsində eyni
                        zamanda rentgenoqrafiya və ultrasəs müayinələrinin aparılması üçün son model avadanlıqlar vardır.
                    </p>
                    <p>
                        Fizioterapiya və tibbi reabilitasiya şöbəsi müəssisəmizin ən böyük və müasir xidmət sahələrindəndir. Müxtəlif tibbi avadanlıqlarla
                        təchiz olunmuş bu şöbədə maqnitoterapiya, lazer terapiyası, zərbə-dalğalı terapiya (Dualith), infraqırmızı şüa terapiyası, manual
                        terapiya, SpineMed, ultarsəs terapiya, skalioz, akupunktura, masaj, limfodrenaj və bu kimi prosedurlar aparılır.
                    </p>
                </div>


            </div>
        </div>
    );
};

export default About;