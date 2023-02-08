import React, { useEffect, useState } from "react";
import "./reseption.css";
import img from "../img/Hekimler/istanbulH.JPG";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useDispatch, useSelector } from "react-redux";
import { fetchReserDoctors } from "../Redux/ReserSliece";
import axios from "axios";

const Reseption = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchReserDoctors());
  }, [dispatch]);

  const reserDocApi = useSelector((state) => state.reservSliece?.data);


  const [sdays, setDays] = useState([]);
  const [shours, setHours] = useState([]);
  const [sregister, setRegister] = useState([]);
  console.log("sregister", sregister)
  console.log("hours", shours)
  console.log("sdays", sdays)
  console.log("reserDocApi", reserDocApi)

  const createRegister = (e) => {
    e.preventDefault();
    const model = sregister;
    axios
      .post("https://admin.istanbulhospital.az/api/reservation/reserved", model)
      .then((res) => {
        console.log("res", res);
      });
    console.log("Create Register");
    console.log("model", model);
  };
  const handle = (e) => {
    setRegister({ ...sregister, [e.target.name]: e.target.value })
    console.log('est', e.target.value)
  }
  const selectDoctor = (e) => {
    setRegister({ ...sregister, [e.target.name]: e.target.value })

    setDays(reserDocApi.filter((adm) => adm.id === parseInt(e.target.value)));

  };
  const selectDay = (e) => {
    setRegister({ ...sregister, [e.target.name]: e.target.value })
    setHours(
      sdays.map((day) => day.days.map((h) => h.hours))

    );


    // setRegister(hours)
  };
  const selectHours = (e) => {
    setRegister({ ...sregister, [e.target.name]: e.target.value });
    shours?.map((hour) =>
      hour?.map((h) => h?.hours?.map((hr) => console.log("hrrr", hr)))
    );
  }
  return (
    <div className="container mt-4 reseption">
      <div className="row justify-content-between">
        <div className="col-lg-6">
          <div
            className="col-md-12 justify-content-center"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <img src={img} alt="" className="" />
          </div>
        </div>
        <div
          className="col-lg-5 mt-4 justify-content-center"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <form action="" onSubmit={createRegister}>
            <label for="fname">Ad Soyad</label>
            <input
              type="text"
              id="fname"
              name="fullname"
              placeholder="Ad Soyad.."
              value={sregister.fullname}
              onChange={handle}
            />

            <label for="lname">Telefon</label>
            <input
              type="text"
              id="lname"
              name="phone"
              placeholder="Telefon.."
              value={sregister.phone}
              onChange={handle}
            />

            <label for="fname">Mail</label>
            <input
              type="text"
              id=""
              name="email"
              placeholder="Mail.."
              value={sregister?.email}
              onChange={handle}
            />

            <label for="">Həkim seçin</label>
            <select key="" id="" name="doctor_id" onChange={selectDoctor} >
              <option> Həkim adı seçin</option>
              {reserDocApi?.map((doctorName) => (
                <option key={doctorName?.id} value={doctorName?.id}>
                  {" "}
                  {doctorName?.name}
                </option>
              ))}
            </select>

            <div className="">
              <div className="col-md-4">
                <label for="">Tarix Seçin</label>
                <select key="" id="" name="admission_day" onChange={selectDay}>
                  <option> Tarix Seçin</option>
                  {sdays?.length > 0 &&
                    sdays?.map((Day) =>
                      Day?.days?.map((s) => (
                        <option key={s?.id} value={s?.admission_day}>
                          {" "}
                          {s?.admission_day}
                        </option>
                      ))
                    )}
                </select>
              </div>
              <div className="col-md-4">
                <label for="">Saat Seçin</label>
                <select key="" id="" name="admission_hour" onChange={selectHours}>
                  <option> Saat Seçin</option>
                  {
                    shours.filter((s) => s.admission_hour).map((hs) => (
                      // <option key={o?.id} value={o?.admission_hour}>
                      //   {" "}
                      //   {o?.admission_hour}
                      // </option>
                      console.log("hr", hs)
                    ))
                  }
                </select>
              </div>
            </div>

            <div className="col-md-3 mt-3">
              <Stack spacing={2} direction="row">
                <Button variant="contained" type="Sumbit">
                  Göndər
                </Button>
              </Stack>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reseption;