import React, { UseState } from 'react';
import './reseption.css';
import img from '../img/indir.png';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const Reseption = () => {

  const onChange = (date) => {
    console.log(date.toString());
  };

  return (
    <div className='container mt-4 reseption'>
      <div className='row justify-content-between'>
        <div className='col-lg-6'>
          <div className="col-md-12" data-aos="fade-up" data-aos-duration="1000">

            <img
              src={img}
              alt="Trendy Pants and Shoes"
              className=""
            />

          </div>
        </div>
        <div className='col-lg-5 mt-4 justify-content-center' data-aos="fade-up" data-aos-duration="1000">
          <form action="" >
            <label for="fname">Ad Soyad</label>
            <input type="text" id="fname" name="firstname" placeholder="Ad Soyad.." />

            <label for="lname">Telefon</label>
            <input type="text" id="lname" name="lastname" placeholder="Telefon.." />

            <label for="fname">Mail</label>
            <input type="text" id="fname" name="firstname" placeholder="Mail.." />

            <label for="country">Həkim seçin</label>
            <select id="country" name="country">
              <option value="australia">Qorxmaz</option>
              <option value="canada"> Togrul</option>
              <option value="usa">Ələkbər</option>
            </select>

            <div className='row'>
              <div className='col-md-4'>
                <label for="date">Tarix Seçin</label>
                <input type="date" id="date" name="" min="today" />

              </div>
              <div className='col-md-3'>
                <label for="time">Saat Seçin</label>
                <input type="time" id="time" name="" />
              </div>
            </div>

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

export default Reseption;