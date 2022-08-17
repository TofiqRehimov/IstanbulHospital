
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
import Search from './Components/Search';
import Companies from './Components/Companies';
import ContactsHeader from './Components/ContactsHeader';

function App() {
  return (
    <div className="App ">
     
      
      <ContactsHeader />
      <Header />
    
      <Routes>
        <Route path='/'element={<Home/>}/>
        <Route path='/Haqqimizda' element={<About/>} />
        <Route path='/Bolmelerimiz' element={<Departaments/>}/>
        <Route path='/Hekimlerimiz' element={<Doctors/>} />
        <Route path ='/Meqaleler' element={<Blocks/>} />
        <Route path='/Elaqe' element={<ContactsInfo/>} />
        <Route path='/Meqaleler/Meqale' element={< Article/>}/>
        <Route path="/Qebula_yazilmaq" element={<Reseption/>}/>
        <Route path="/Kompaniya" element={<Companies/>} />
      </Routes>
      <Footter />
    </div>
  );
}

export default App;
