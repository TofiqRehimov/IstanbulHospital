
import { Routes, Route } from 'react-router-dom';
import Header from "./Components/Header";
import Footter from "./Components/Footter";
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Departaments from './Components/Departaments';
import Doctors from './Components/Doctors';
import Blocks from './Components/Blocks';
import ContactsInfo from './Components/ContactsInfo';
import Article from './Components/Article';
import Reseption from './Components/Reseption';
import Companies from './Components/Companies';
import ContactsHeader from './Components/ContactsHeader';
import DepartamentsInfo from './Components/DepartamentsInfo';
import DoctorInfo from './Components/DoctorInfo';

function App() {
  return (
    <div className="App ">
     
      
      <ContactsHeader />
      <Header />
    
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Haqqimizda' element={<About/>} />
        <Route path='/Bolmelerimiz' element={<Departaments/>}/>
        <Route path='/Hekimlerimiz' element={<Doctors/>} />
        <Route path ='/Meqaleler' element={<Blocks/>} />
        <Route path='/Elaqe' element={<ContactsInfo/>} />
        <Route path='/Meqaleler/Meqale' element={< Article/>}/>
        <Route path="/Qebula_yazilmaq" element={<Reseption/>}/>
        <Route path="/Kompaniya" element={<Companies/>} />
        <Route path="/DepartamentsInfo" element={<DepartamentsInfo/>}/>
        <Route path= "/DoctorInfo" element={<DoctorInfo/>} />
      </Routes>
      <Footter />
    </div>
  );
}

export default App;
