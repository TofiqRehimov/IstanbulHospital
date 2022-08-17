import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';
import Logo from "../img/LOGO.png"
import { BsSearch } from "react-icons/bs";
const Header = () => {
  const [state,setState] = useState('');

  // const searchChange =(event)=>{
  //     setState(event.target.value)
  //     console.log("Click olundu")
  // }
  // const handleClick =(e)=>{
  //   e.preventDefalut()
  // }
  return (
    <div className='Header' data-aos="fade-down" data-aos-duration="1000">

      <nav className="navbar navbar-expand-lg navbar-light mt-0">

        <div className="container">
        <img src={Logo} className="card-img-top float-right Logo" alt="Sunset Over the Sea" />
          <Link to='/' className="navbar-brand" > <h1 >Istanbul Hospital</h1>  </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-mdb-toggle="collapse"
            data-mdb-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav w-100">
              <ul className='navbar-nav mx-auto'>
                <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                  <Link to='/' className="nav-link active" aria-current="page"><span>  Home </span></Link>
                </li>
                <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                  <Link to='/Haqqimizda' className='nav-link'> <span>  Haqqımızda </span> </Link> 
                  </li>
                <li className='nav-item nav-active' data-aos="fade-right" data-aos-duration="1000">
                  <Link to='/Bolmelerimiz' className='nav-link  '> Bolmelerimiz </Link>
                  <div className='inner'>
                    <ul >
                      <li>
                        <Link to='/Umumi_cerrahiyye' className='nav-link' > Umumi cerrahiyye </Link>
                      </li>
                      <li>
                        <Link to='/Ginekologiya' className='nav-link' > Ginekologiya </Link>
                      </li>
                      <li>
                        <Link to='/Kardiologiya' className='nav-link' >Kardiologiya </Link>
                      </li>
                      <li>
                        <Link to='/Oftalmologiya' className='nav-link' >Oftalmologiya </Link>
                      </li>
                      <li>
                        <Link to='/Otolainqologiya' className='nav-link' > Otolainqologiya  </Link>
                      </li>
                      <li>
                        <Link to='/Qastroentrologiya' className='nav-link' > Qastroentrologiya </Link>
                      </li>
                      <li>
                        <Link to='/Travmatologiya' className='nav-link' >Travmatologiya </Link>
                      </li>
                      <li>
                        <Link to='/Urologiya,Andrologiya' className='nav-link' >Urologiya,Andrologiya </Link>
                      </li>
                      <li>
                        <Link to='/Terapiya' className='nav-link' >Terapiya </Link>
                      </li>
                      <li>
                        <Link to='/Nevrologiya' className='nav-link' >Nevrologiya </Link>
                      </li>
                      <li>
                        <Link to='/Alleqologiya' className='nav-link' >Alleqologiya </Link>
                      </li>
                      <li>
                        <Link to='/Hepatologiya ' className='nav-link' >Hepatologiya  </Link>
                      </li>
                      <li>
                        <Link to='/Laboratoriya' className='nav-link' >Laboratoriya </Link>
                      </li>
                      <li>
                        <Link to='/USM_Reqamsal Rentgen' className='nav-link' >USM/ RƏqamsal Rentgen </Link>
                      </li>
                      <li>
                        <Link to='/Spirometriya' className='nav-link' >Spirometriya </Link>
                      </li>
                      <li>
                        <Link to='/Infuziya' className='nav-link' >Infuziya </Link>
                      </li>
                    </ul>





                  </div>
                </li>
                <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                  <Link to='/Hekimlerimiz' className='nav-link'> <span>  Həkimlrimiz </span>  </Link> 
                  </li>
                <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                  <Link to='/Meqaleler' className='nav-link'> <span>  Məqalələr </span> </Link>  
                  </li>
                  <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                  <Link to='/Qebula_yazilmaq' className='nav-link'> <span>  Qəbula yazılmaq </span> </Link>  
                  </li>
                  <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                  <Link to='/Kompaniya' className='nav-link'> <span>  Kompaniya </span> </Link>  
                  </li>
                <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                  <Link to='/Elaqe' className='nav-link'> <span>   Əlaqe </span> </Link> 
                </li>
              </ul>
            </div>
            <BsSearch className='search' />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;