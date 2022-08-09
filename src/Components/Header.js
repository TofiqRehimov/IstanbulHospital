import React from 'react';
import { Link } from 'react-router-dom';
import './Headers.css';

const Header = () => {
  return (
    <div className=''>

      <nav className="navbar navbar-expand-lg navbar-light mt-0">

        <div className="container-fluid">
          <img></img>
          <Link to='/' className="navbar-brand" href="#"> <h1 >Istanbul Hospital</h1>  </Link>
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
                        <Link to='/USM_Reqamsal Rentgen' className='nav-link' >USM/ Reqamsal Rentgen </Link>
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
                  <Link to='/Hekimlerimiz' className='nav-link'> <span>  Hekimlerimiz </span>  </Link> 
                  </li>
                <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                  <Link to='/Meqaleler' className='nav-link'> <span>  Meqaleler </span> </Link>  
                  </li>
                <li className='nav-item' data-aos="fade-right" data-aos-duration="1000">
                  <Link to='/Elaqe' className='nav-link'> <span>   Elaqe </span> </Link> 
                </li>
              </ul>







            </div>
          </div>
          <form className="d-flex input-group w-auto">
            <input
              type="search"
              className="form-control rounded"
              placeholder="Search"
              aria-label="Search"
              aria-describedby="search-addon"
            />
            <span className="input-group-text border-0" id="search-addon">
              <i className="fas fa-search"></i>
            </span>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;